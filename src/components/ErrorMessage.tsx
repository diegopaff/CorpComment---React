type ErrorMessageProps = {
  errorMessage: string;
};

function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return <p className="">{errorMessage}</p>;
}

export default ErrorMessage;
