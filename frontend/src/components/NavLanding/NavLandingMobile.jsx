import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import logo from "/src/assets/logo.png";

export default function NavLandingMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        {/* Botão toggler Menu */}
        <button
          className="rounded-md p-2 text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="absolute items-center right-5" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="SmartFarm Logo" className="h-10" />
        </Link>

        <div className="w-10"></div>
      </div>

      {/* Links */}
      <div
        className={`fixed left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-6 pb-4 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-8 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block px-8 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block px-8 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Produtos
          </NavLink>

          {/* Botão de "Entrar" */}
          <div className="mt-4">
            <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-sm">ENTRAR</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}