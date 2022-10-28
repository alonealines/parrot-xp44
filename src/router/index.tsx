import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([

  {
    path: "/login",
    element: < Login />,
  },

  {
    path: "/cadastro",
    element: < Cadastro />,
  },

]);

export default router;
