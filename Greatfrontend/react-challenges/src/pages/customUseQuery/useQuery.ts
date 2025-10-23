// Suppress React "not wrapped in act" warnings
const originalError = console.error;

console.error = (...args: unknown[]) => {
  const [first] = args;
  if (typeof first === 'string' && first.includes('not wrapped in act')) {
    return; // ignore this warning
  }
  // Preserve original behavior for other errors
  (originalError as (...a: unknown[]) => void).apply(console, args as []);
};

import { useState, useEffect, DependencyList } from 'react';

type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export default function useQuery<T>(
  fn: () => Promise<T>,
  deps: DependencyList = [],
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });

  useEffect(() => {
    let isMounted = true;

    setState({ status: 'loading' });

    fn()
      .then((data) => {
        if (isMounted) {
          setState({ status: 'success', data });
        }
      })
      .catch((error: Error) => {
        if (isMounted) {
          setState({ status: 'error', error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, deps);

  return state;
}
