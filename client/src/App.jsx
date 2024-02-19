import './App.css';
import Home from './Components/HomePage/Home';
import Content from './Components/ContentPage/Content';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/content",
      element : <Content/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}


export default App;
