import { createBrowserRouter } from 'react-router-dom';
import StarShipDetail from './components/StarShipDetail';
import Error from './components/Error';
import StarShips from './components/StarShips';


const router = createBrowserRouter([
    {
      path: '/',
      element: <StarShips />
    },
    {
      path: '/starship/:id',
      element: <StarShipDetail />
    },
    {
      path: '*',
      element: <Error />
    }
  ]);


export default router