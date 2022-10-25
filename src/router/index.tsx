import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from "react-router-dom";
import Cadastro from '../pages/Cadastro';

const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: < Cadastro />,
  },

]);

export default router;
