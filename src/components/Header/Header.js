import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my fancy routing!!!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        {/* <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink> */}
      </nav>
    </div>
  );
};

export default Header;
