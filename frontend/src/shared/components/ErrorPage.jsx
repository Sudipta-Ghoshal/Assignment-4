import { useRouteError } from "react-router";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-md text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
