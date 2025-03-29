import { useRouter } from 'next/router';

export default function Buyer() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Deal Room #{id}</h1>
      <p>Files will appear here (hardcoded example):</p>
      <ul>
        <li><a href="#">Pitch Deck.pdf</a></li>
        <li><a href="#">Contract.docx</a></li>
      </ul>
    </div>
  );
}
