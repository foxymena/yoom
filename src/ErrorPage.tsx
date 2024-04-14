import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1>Error</h1>
      <i>{JSON.stringify(error)}</i>
    </>
  )
};

export default ErrorPage;
