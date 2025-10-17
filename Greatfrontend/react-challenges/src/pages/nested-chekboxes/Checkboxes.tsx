import { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { toggleChecked, updateCheckedState } from './common/helpers';

export type CheckboxItem = {
  id: number;
  name: string;
  checked: boolean | 'indeterminate';
  children?: CheckboxItem[];
};

type CheckBoxInput = Omit<CheckboxItem, 'children'> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function CheckBoxInput({ id, checked, name, onChange }: CheckBoxInput) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = checked === 'indeterminate';
    }
  }, [checked]);

  return (
    <Fragment>
      <input
        ref={checkboxRef}
        type="checkbox"
        id={id.toString()}
        checked={checked as boolean}
        onChange={onChange}
      />
      <label htmlFor={id.toString()}>{name}</label>
    </Fragment>
  );
}

function Tree({
  children,
  isChildren,
  onChange,
}: {
  children: CheckboxItem[];
  isChildren?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <ul className={isChildren ? 'children' : ''}>
      {children.map((treeItem: CheckboxItem) => (
        <TreeItem key={treeItem.id} treeItem={treeItem} onChange={onChange} />
      ))}
    </ul>
  );
}

function TreeItem({
  treeItem,
  onChange,
}: {
  treeItem: CheckboxItem;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { id, checked, name, children } = treeItem || {};

  return (
    <li>
      <CheckBoxInput
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {Array.isArray(children) && (
        <Tree children={children} isChildren onChange={onChange} />
      )}
    </li>
  );
}

export default function Checkboxes({
  defaultCheckboxData,
}: Readonly<{
  defaultCheckboxData: ReadonlyArray<CheckboxItem>;
}>) {
  const [state, setState] = useState<CheckboxItem[]>([...defaultCheckboxData]);

  // If children is clicked check each time its prent and put `indeterminate` status

  const handleInputData = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    // Iterate through items and find if it is false then change to true or vice-versa
    // if it has children then change status either
    // if children also has children then change their statuses either
    const updatedData = toggleChecked(state, parseInt(id));

    console.log(updateCheckedState(updatedData));

    setState([...updatedData]);
  };

  console.log(1);

  return (
    <div>
      <Tree children={state} onChange={handleInputData} />
    </div>
  );
}
