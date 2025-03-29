import { FiHome, FiFile, FiChevronLeft, FiMessageSquare } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className="w-64 fixed h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-600">DealFlow</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 text-blue-600">
          <FiHome className="w-5 h-5" />
          Deal Room
        </a>
        <a href="#" className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <FiFile className="w-5 h-5" />
          Documents
        </a>
      </nav>

      {/* Collapse Button */}
      <button className="flex items-center gap-2 text-gray-500 mt-auto">
        <FiChevronLeft className="w-5 h-5" />
        <span>Collapse</span>
      </button>
    </div>
  );
}
