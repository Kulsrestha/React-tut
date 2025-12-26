import './greeting.css';

function Greetings({ userName = 'Guest', isLoggedIn = false }) {
  if (isLoggedIn) {
    return (
      <h1 className="welcome-message">
        Welcome Back,
        {userName}
      </h1>
    );
  } else {
    return (
      <h1 className="welcome-message">
        Hello, Guest! Please log in to continue
      </h1>
    );
  }
}

export default Greetings;
