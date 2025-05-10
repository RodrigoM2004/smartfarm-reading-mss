import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "/src/assets/logo.png";


export default function NavLandingDesktop() {
  return (
    <div className="hidden md:flex md:items-center md:justify-between w-full">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="SmartFarm Logo" className="h-12" />
        </Link>

        {/* Links da Navbar */}
        <div className="ml-10 flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium ${
                isActive
                  ? "border-green-500 text-gray-900 text-lg"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium ${
                isActive
                  ? "border-green-500 text-gray-900 text-lg"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`
            }
          >
            Serviços
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium ${
                isActive
                  ? "border-green-500 text-gray-900 text-lg"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`
            }
          >
            Produtos
          </NavLink>
        </div>
      </div>

      {/* Botão de "Entrar" */}
      <div className="flex items-center">
        <Link to="/login">
          <Button>ENTRAR</Button>
        </Link>
      </div>
    </div>
  );
}