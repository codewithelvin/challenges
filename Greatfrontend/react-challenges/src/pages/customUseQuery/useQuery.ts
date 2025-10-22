import { DependencyList, useEffect, useState } from 'react';

type AsyncState<T> =
  | { status: 'idle' | 'loading' | 'success' | 'error' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export default function useQuery<T>(
  fn: () => Promise<T>,
  deps: DependencyList = [],
): AsyncState<T> {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setStatus('loading');
    setError(null);
    setData(null);

    fn()
      .then((data) => {
        setData(data);
        setStatus('success');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, deps);

  return { status, data, error };
}
