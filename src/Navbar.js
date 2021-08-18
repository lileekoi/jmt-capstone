import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="navbar">
      <h1>JMT ♡ 존맛탱</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/">Categories</Link> */}
        <Link to="/recipe-generator">Recipe Generator</Link>
      </div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlForm="search"></label>
        <input
          id="search"
          type="text"
          placeholder="Search Recipes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </nav>
  );
}

export default Navbar;