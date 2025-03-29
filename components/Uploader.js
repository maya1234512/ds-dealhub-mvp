export default function Uploader() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input 
        type="file" 
        className="hidden" 
        id="file-upload"
      />
      <label 
        htmlFor="file-upload"
        className="cursor-pointer block"
      >
        <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500 mt-1">PDF, PPT, MP4 up to 50MB</p>
      </label>
    </div>
  );
}
