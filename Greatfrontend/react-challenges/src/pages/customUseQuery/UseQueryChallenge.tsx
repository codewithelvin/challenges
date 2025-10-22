import useQuery from './useQuery';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default function UseQueryChallenge() {
  const { status, error, data } = useQuery<User[]>(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }, []);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error: {error?.message}</p>}
      {status === 'success' && (
        <div>
          <h4>Data:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
