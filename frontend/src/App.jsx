import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//Layouts
import Main from "./layouts/Main/Main";

//Routes
import Home from "./pages/Home";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
