import {Link, Outlet} from 'react-router';

const Layout = () => {
  return (
    <>
      <header>
        <h1>My super media app</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/egor">Egor</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer><p>&copy; teacher 2026</p></footer>
    </>
  );
};

export default Layout;
