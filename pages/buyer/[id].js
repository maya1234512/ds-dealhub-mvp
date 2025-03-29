import { useRouter } from 'next/router';
import Head from 'next/head';

const files = [
  { name: 'Product Pitch Deck', type: 'pdf', size: '2.4 MB', url: '#', updated: 'May 15, 2024' },
  { name: 'Product Demo Video', type: 'mp4', size: '15.2 MB', url: '#', updated: 'May 10, 2024' },
  { name: 'Case Studies', type: 'pdf', size: '3.1 MB', url: '#', updated: 'April 28, 2024' },
];

export default function BuyerPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tailwind Test - Add this temporarily */}
      <div className="bg-blue-600 text-white p-4 rounded-lg mb-4 text-center">
        Tailwind Test - This should be blue with white text if styling works
      </div>

      <Head>
        <title>Deal Room #{id} | Your Platform</title>
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Deal Room #{id}</h1>
          <p className="mt-1 text-gray-500">Shared materials for your review</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-900">StartupXYZ Team</h2>
              <p className="text-gray-500">SaaS Platform for Modern Businesses</p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Materials</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => (
              <div key={file.name} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className={`p-4 ${file.type === 'pdf' ? 'bg-blue-50' : 'bg-red-50'}`}>
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
                      file.type === 'pdf' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {file.type === 'pdf' ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{file.name}</h3>
                      <p className="text-sm text-gray-500">{file.size} • Updated {file.updated}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right">
                  <a
                    href={file.url}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">About the Product</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700">
              Our platform helps businesses streamline operations with AI-powered automation. 
              Trusted by 500+ companies worldwide with a 95% satisfaction rate.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
