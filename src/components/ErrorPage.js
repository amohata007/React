import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS..!!</h1>
      <h2 style={{ color: "red" }}>
        Error {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default ErrorPage;
