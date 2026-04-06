import { useRoutes } from 'react-router-dom';
import Login from './features/auth/Pages/Login';

const Approutes = () => {
    const routes = useRoutes([
        {
            path:'/login',
            element : <Login />
        },
        {
            path:'/',
            element : <Login />
        }
        ]);
    return routes;
}
export default Approutes;