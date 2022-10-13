import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      children : [
        {path:'/', 
        element:<Home/>, 
        loader: ()=> fetch(`http://localhost:5000/`)},
        {path:'./home', element:<Home/>},
      ]
    }
  ])

  return (
    <>
      {/* <Home/> */}
      <RouterProvider router={router}/>    
    </>
  );
}

export default App;
