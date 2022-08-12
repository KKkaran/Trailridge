import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {

  let data = null;
  if (Auth.loggedIn()) {
    data = Auth.getProfile().data;
  } else {
    console.log("need to log in")
  }
  const logout = (e) => {
    //logs out the user
    e.preventDefault()
    Auth.logout();
  }
  return (
    <header className=""/*className="bg-secondary mb-4 py-2 flex-row align-center"*/>
      <div className="d-flex justify-content-between p-2 border border-dark" /*className=/*"container flex-row justify-space-between-lg justify-center align-center"*/>
        <div>
          <Link to="/">
            <h1>Let's SPLIT IT</h1>
          </Link>
          <>
                {data ? (
                  <>
                    <h4>Welcome, { data.username }</h4>
                  </>
                ):(
                    <>
                    </>  
                  )
                }
            
          </>
        </div>

        {
          data ? (
            <>
              <nav className="d-flex align-items-center" /*className="text-center"*/>
                  <div className="p-2"><Link to="/dashboard"><h4>Dashboard</h4></Link></div>
                  <a href="/" onClick={logout}><h4>Logout</h4></a>
              </nav>
            </>
          ): (
              <>
                <nav className="d-flex align-items-center" /*className="text-center"*/>
                  <div className="p-2"><Link to="/login"><h4>Login</h4></Link></div>
                  <div><Link to="/signup"><h4>Signup</h4></Link></div>
                </nav>
              </>
          )
        }
      </div>
    </header>
  );
};

export default Header;