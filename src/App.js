import Body from "./components/Body";
import News from "./components/News";
import Sport from "./components/Sport";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import {Provider} from 'react-redux';
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/news',
        element:<News />
      },
      {
        path:'/sports',
        element:<Sport />
      },
    ],
    errorElement :<Error />
  },
])

function App() {
  return (
    
    <Provider store={store}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
