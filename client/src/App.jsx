import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Products from "./Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const Layout = () => {
    return(
        <div className="app">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products/:slug",
                element: <Products/>
            },
            {
                path: "product/:slug",
                element: <Product/>
            }
        ]
    }
])

function App() {
  return (
    <MantineProvider>
        <div>
            <RouterProvider router={router} />
        </div>
    </MantineProvider>
    
  );
}

export default App
