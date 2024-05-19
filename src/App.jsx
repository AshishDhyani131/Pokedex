import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokeDetail from "./components/PokeDetail";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    //   <div className="max-w-[375px] h-full bg-[#DC0A2D] sm:rounded-md">
    //     <Header></Header>
    //     <main className="mt-8 mx-1 mb-1 bg-white rounded-lg w-[22rem] h-96 overflow-hidden"></main>
    //   </div>
  );
}

export default App;
