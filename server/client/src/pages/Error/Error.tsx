
import './Error.css'; // Importing the separate CSS file

const Error = () => {
  return (
    <div className="error-container">
      <div className="gif-container">
        <img
          draggable="false"
          src="https://i.ibb.co/QNrSbGr/be50495c-d610-4f06-b66a-ae78615d5a95.webp" // Replace with your square GIF URL
          alt="404 Error"
          className="error-gif"
        />
      </div>
      <h1 className="error-heading">Oops! Page Not Found</h1>
      <p className="error-message">
        We can't seem to find the page you're looking for. Please check the URL or return to the homepage.
      </p>
      <a href="/" className="error-link">
        Back to Homepage
      </a>
    </div>
  );
};

export default Error;
