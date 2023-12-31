import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Header';
import Hero from './Components/Hero';
import { createBrowserRouter,Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />
  },
]);

export default App;
