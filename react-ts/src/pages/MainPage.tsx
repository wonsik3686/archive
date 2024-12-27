import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>MainPage</h1>
      <Link to="articles">Articles</Link>
      <Link to="booking">Booking</Link>
      <Link to="login">Login</Link>
    </div>
  );
}

export default MainPage;
