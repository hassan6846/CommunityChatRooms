
import './Error.css'; // Importing the separate CSS file

const Error = () => {
  return (
    <div className="error-container">
      <div className="gif-container">
        <img
          src="https://64.media.tumblr.com/850572775b3ee76e83002cfcacdae433/12839bb73a29c5f0-ef/s500x750/b2c4ed712a9531b48246d725e8c13ea8276d7b7b.gif" // Replace with your square GIF URL
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
