import Uploader from '../components/Uploader';

export default function Seller() {
  const dealId = "test123"; // Hardcoded for now
  const shareLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/buyer?id=${dealId}`;

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <Uploader />
      <div>
        <p>Share this link with buyers:</p>
        <input type="text" value={shareLink} readOnly />
        <button onClick={() => navigator.clipboard.writeText(shareLink)}>
          Copy Link
        </button>
      </div>
    </div>
  );
}
