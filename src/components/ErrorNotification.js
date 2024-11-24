
// A simple component to display error messages
const ErrorNotification = ({ message }) => {
  return (
    <div style={{ color: 'red', border: '1px solid red', padding: '10px', marginTop: '10px' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorNotification;
