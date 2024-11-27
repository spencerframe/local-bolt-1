import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              OrthoLeads Pro
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-primary hover:text-white rounded-md">Home</Link>
            <Link to="/services" className="block px-3 py-2 hover:bg-primary hover:text-white rounded-md">Services</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-primary hover:text-white rounded-md">About</Link>
            <Link to="/contact" className="block px-3 py-2 bg-primary text-white rounded-md">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
