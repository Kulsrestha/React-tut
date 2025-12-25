
import './header.css';

function Header() {
  return (
    <header>
      <h1 className="ink-title">React Ink</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;