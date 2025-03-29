import { FiMessageSquare, FiUser } from 'react-icons/fi';

export default function SellerCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <FiUser className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Alex Johnson</h3>
          <p className="text-gray-500">CEO at StartupX</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        10+ years experience helping businesses scale with SaaS solutions.
      </p>
      <button className="text-blue-600 hover:underline flex items-center gap-2">
        <FiMessageSquare className="w-5 h-5" />
        Contact Seller
      </button>
    </div>
  );
}
