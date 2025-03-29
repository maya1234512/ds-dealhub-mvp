import { useRouter } from 'next/router';

// Mock data - replace with Firebase later
const files = [
  { name: 'Pitch Deck', type: 'pdf', size: '2.4 MB', url: '#' },
  { name: 'Product Demo', type: 'mp4', size: '15.2 MB', url: '#' },
  { name: 'Financials', type: 'xlsx', size: '1.1 MB', url: '#' },
];

export default function Buyer() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Deal Room #<span className="text-blue-600">{id}</span></h1>
        <p className="text-gray-500">Shared materials for your review</p>
      </header>

      {/* Files Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file) => (
          <div 
            key={file.name}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              {/* File Icon */}
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                {file.type === 'pdf' ? (
                  <span className="text-blue-600 font-bold">PDF</span>
                ) : file.type === 'mp4' ? (
                  <span className="text-red-600 font-bold">MP4</span>
                ) : (
                  <span className="text-green-600 font-bold">XLSX</span>
                )}
              </div>
              
              {/* File Info */}
              <div>
                <h3 className="font-medium text-gray-900">{file.name}</h3>
                <p className="text-sm text-gray-500">{file.size}</p>
                <a
                  href={file.url}
                  download
                  className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-lg font-medium text-gray-900">Questions?</h2>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Contact Seller
        </button>
      </div>
    </div>
  );
}
