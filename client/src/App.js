import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container p-5">
            <Routes>
                  <Route
                    path="/"
                    element={<Home />}
                  />
                  <Route
                    path="/login"
                    element={<Login />}
                  />
                  <Route
                    path="/signup"
                    element={<Signup />}
                  />
                  <Route
                    path="/profile"
                    element={<Profile />}
                  />
                  <Route
                        path="*"
                        element={<NoMatch />}
                  />
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
