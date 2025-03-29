import { FiFileText, FiPlay } from 'react-icons/fi';

export default function MediaSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Product Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Deck */}
        <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-gray-100 h-48 flex items-center justify-center">
            <FiFileText className="w-12 h-12 text-gray-400" />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Product Deck</h3>
            <button className="text-blue-600 hover:underline">View/Download</button>
          </div>
        </div>

        {/* Demo Video */}
        <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-gray-100 h-48 flex items-center justify-center">
            <FiPlay className="w-12 h-12 text-gray-400" />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Product Demo</h3>
            <button className="text-blue-600 hover:underline">Watch Video</button>
          </div>
        </div>
      </div>
    </section>
  );
}
