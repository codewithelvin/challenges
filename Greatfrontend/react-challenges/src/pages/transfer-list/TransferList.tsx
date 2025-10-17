import { useState, type ChangeEvent } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { dummy } from './common/data';
import { COLUMNS, OPERATIONS } from './common/enums';

export type CheckBoxItems = {
  label: string;
  checked: boolean;
};

function CheckBoxItem({
  label,
  checked,
  onChange,
}: CheckBoxItems & { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <Fragment>
      <label htmlFor={label}>
        <input
          type="checkbox"
          id={label}
          checked={checked}
          onChange={onChange}
          value={label}
        />
        {label}
      </label>
    </Fragment>
  );
}

function TransferList() {
  const [state, setState] = useState({ ...dummy });

  const handleClickedItem = (
    e: ChangeEvent<HTMLInputElement>,
    column: COLUMNS,
  ) => {
    const { value } = e.target as HTMLInputElement;

    setState((prev) => ({
      ...prev,
      [column]: prev[column].map((item: CheckBoxItems) => {
        if (value === item.label) {
          const checked = !item.checked;
          return { ...item, checked };
        }

        return item;
      }),
    }));
  };

  const copyHandler = (from: COLUMNS, to: COLUMNS, operation: OPERATIONS) => {
    const temp =
      operation === OPERATIONS.BULK
        ? state[from]
        : state[from].filter((item) => item.checked);

    setState((prev) => ({
      ...prev,
      [from]:
        operation === OPERATIONS.BULK
          ? []
          : state[from].filter((item) => !item.checked),
      [to]: [...temp, ...prev[to]],
    }));
  };

  return (
    <table style={{ maxWidth: '600px' }}>
      <tr>
        <td>
          <ul>
            {state.left.map((item: CheckBoxItems) => {
              const { checked, label } = item || {};
              return (
                <li key={label}>
                  <CheckBoxItem
                    label={label}
                    checked={checked}
                    onChange={(event) => handleClickedItem(event, COLUMNS.LEFT)}
                  />
                </li>
              );
            })}
          </ul>
        </td>
        <td>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <button
              onClick={() =>
                copyHandler(COLUMNS.LEFT, COLUMNS.RIGHT, OPERATIONS.BULK)
              }
              disabled={state.left.length === 0}
            >
              {'>>'}
            </button>
            <button
              onClick={() =>
                copyHandler(COLUMNS.LEFT, COLUMNS.RIGHT, OPERATIONS.SELECTIVE)
              }
              disabled={state.left.length === 0}
            >
              {'>'}
            </button>

            <button
              onClick={() =>
                copyHandler(COLUMNS.RIGHT, COLUMNS.LEFT, OPERATIONS.SELECTIVE)
              }
              disabled={state.right.length === 0}
            >
              {'<'}
            </button>
            <button
              onClick={() =>
                copyHandler(COLUMNS.RIGHT, COLUMNS.LEFT, OPERATIONS.BULK)
              }
              disabled={state.right.length === 0}
            >
              {'<<'}
            </button>
          </div>
        </td>
        <td>
          <ul>
            {state.right.map((item: CheckBoxItems) => {
              const { checked, label } = item || {};
              return (
                <li key={label}>
                  <CheckBoxItem
                    label={label}
                    checked={checked}
                    onChange={(event) =>
                      handleClickedItem(event, COLUMNS.RIGHT)
                    }
                  />
                </li>
              );
            })}
          </ul>
        </td>
      </tr>
    </table>
  );
}

export default TransferList;
