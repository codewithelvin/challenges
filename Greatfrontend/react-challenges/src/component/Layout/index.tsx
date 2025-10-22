import { Outlet, useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <button onClick={() => navigate(-1)}>← Go back</button>

      <Outlet />
    </Fragment>
  );
};
