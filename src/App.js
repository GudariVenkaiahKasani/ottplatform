import Header from "./components/Header";
import Body0 from "./components/Body0";
import Footer from "./components/footer";
import SignUp from "./components/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Subscriptionplans from "./components/subscriptionplans";
import MovieComponet from "./components/MoviesComponet";
import Hollywoodmovies from "./components/Hollywoodmovies";
import { useEffect } from "react";

export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignUp />,
  },
  {
    path: "/movies",
    element: <MovieComponet />,
  },
  {
    path: "/hollywoodmovies",
    element: <Hollywoodmovies />,
  },
]);

function App() {
  useEffect(() => {
    document.title = "Movieflix";
  }, []);
  return (
    <div>
      <Header />
      <Body0 />
      <Subscriptionplans />
      <Footer />
    </div>
  );
}

export default App;
