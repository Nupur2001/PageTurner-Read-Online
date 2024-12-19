import Categories from "./components/Categories/categories";
import Home from "./components/home/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contacts from "./components/Contact";
import Details from "./components/Details/Details";
import BookDetail from './components/BookDetail/BookDetail';
import About from "./components/About";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return ( 
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes >
          {/* Define the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={authUser ? <Categories /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>

    </>
  );
}

export default App;
