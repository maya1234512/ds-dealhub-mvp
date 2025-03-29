export default function Uploader() {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    alert(`Simulated upload: ${file.name}`);
    // Replace with Firebase upload later
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <button>Upload</button>
    </div>
  );
}
