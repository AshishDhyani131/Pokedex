import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as pokemonsListLoader } from "./pages/HomePage";
import PokeDetail, {
  loader as pokemonDetailLoader,
} from "./components/PokeDetail";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: pokemonsListLoader,
      },
      {
        path: "pokemon/:id",
        element: <PokeDetail></PokeDetail>,
        loader: pokemonDetailLoader,
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
