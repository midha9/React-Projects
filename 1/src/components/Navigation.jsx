const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="nick.jpeg" alt="logo" />
      </div>
      <ul>
        <li href="/">Home</li>
        <li href="/">Location</li>
        <li href="/">Contact</li>
        <li href="/">About</li>
      </ul>
      <button>Book your shoe now</button>
    </nav>
  );
};

export default Navigation;
