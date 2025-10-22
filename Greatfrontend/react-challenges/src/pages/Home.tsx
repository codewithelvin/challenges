import { Link } from 'react-router';
import { routes } from '../routes';

export default function Home() {
  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Name</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        {routes.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.component.name}</td>
              <td>
                <Link to={item.path}>{item.path}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
