import type { CheckBoxItems } from './App';

type Dummy = {
  left: CheckBoxItems[];
  right: CheckBoxItems[];
};

export const dummy: Dummy = {
  left: [
    { label: 'HTML', checked: false },
    { label: 'JavaScript', checked: false },
    { label: 'CSS', checked: false },
    { label: 'TypeScript', checked: false },
  ],
  right: [
    { label: 'React', checked: false },
    { label: 'Angular', checked: false },
    { label: 'Vue', checked: false },
    { label: 'Svelte', checked: false },
  ],
};
