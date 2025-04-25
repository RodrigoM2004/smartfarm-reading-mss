import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "/src/assets/logo.png";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";

export default function NavLandingDesktop() {
  const activeSection = useScrollSpy(["about", "services", "products"], 100);

  return (
    <div className="hidden md:flex md:items-center md:justify-between w-full">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="SmartFarm Logo" className="h-12" />
        </Link>

        {/* Links da Navbar */}
        <div className="ml-10 flex space-x-8">
          <a
            href="#about"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-bold 
    ${
      activeSection === "about"
        ? "text-green-600 border-green-600 text-lg"
        : "text-gray-500 border-transparent"
    } 
    hover:border-gray-300 hover:text-gray-700`}
          >
            Sobre
          </a>

          <a
            href="#services"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-bold 
    ${
      activeSection === "services"
        ? "text-green-600 border-green-600 text-lg"
        : "text-gray-500 border-transparent"
    } 
    hover:border-gray-300 hover:text-gray-700`}
          >
            Serviços
          </a><a
            href="#products"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-bold 
    ${
      activeSection === "products"
        ? "text-green-600 border-green-600 text-lg" 
        : "text-gray-500 border-transparent"
    } 
    hover:border-gray-300 hover:text-gray-700`}
          >
            Produtos
          </a>
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
