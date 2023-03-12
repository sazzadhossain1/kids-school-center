import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Classes from "./components/Classes/Classes";
import Home from "./components/Home/Home";
import Teachers from "./components/Teachers/Teachers";
import Main from "./LayOut/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/classes", element: <Classes></Classes> },
        { path: "/teachers", element: <Teachers></Teachers> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
