import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=""/*className="bg-secondary mb-4 py-2 flex-row align-center"*/>
      <div className="d-flex justify-content-between p-2 border border-dark" /*className=/*"container flex-row justify-space-between-lg justify-center align-center"*/>
        <Link to="/">
          <h1>Let's SPLIT IT</h1>
        </Link>

        <nav className="d-flex align-items-center" /*className="text-center"*/>
          <div className="p-2"><Link to="/login"><h4>Login</h4></Link></div>
          <div><Link to="/signup"><h4>Signup</h4></Link></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;