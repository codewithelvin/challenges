import { CheckboxItem } from '../Checkboxes';

export function toggleChecked(items: CheckboxItem[], targetId: number) {
  return items.reduce((acc, item) => {
    if (item.id === targetId) {
      const toggled = !item.checked;

      acc.push({
        ...item,
        checked: toggled,
        children: item.children
          ? toggleAllChildren(item.children, toggled)
          : undefined,
      });
    } else {
      acc.push({
        ...item,
        children: item.children
          ? toggleChecked(item.children, targetId)
          : item.children,
      });
    }

    return acc;
  }, []);
}

function toggleAllChildren(
  children: CheckboxItem[],
  checkedValue: boolean | 'indeterminate',
) {
  return children.map((child) => ({
    ...child,
    checked: checkedValue,
    children: child.children
      ? toggleAllChildren(child.children, checkedValue)
      : undefined,
  }));
}

export const updateCheckedState = (items: CheckboxItem[]) => {
  const clonedItems = [...items];

  return clonedItems.map((item: CheckboxItem) => {
    if (item.children && item.children.length > 0) {
      const updatedChildren = updateCheckedState(item.children);

      const total = updatedChildren.length;
      const checkedCount = updatedChildren.filter(
        (c: CheckboxItem) => c.checked,
      ).length;

      const isThereIndeterminate = updatedChildren.some(
        (c: CheckboxItem) => c.checked === 'indeterminate',
      );

      if (checkedCount === total && !isThereIndeterminate) {
        item.checked = true;
      } else if (checkedCount === total && isThereIndeterminate) {
        item.checked = 'indeterminate';
      } else if (checkedCount > 0) {
        item.checked = 'indeterminate';
      } else if (checkedCount === 0) {
        item.checked = false;
      }

      return {
        ...item,
        children: updatedChildren,
      };
    }
    return { ...item };
  });
};
