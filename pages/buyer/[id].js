import Sidebar from '../../components/Sidebar';
import Hero from '../../sections/Hero';
import SellerCard from '../../components/SellerCard';
import MediaSection from '../../sections/MediaSection';

export default function BuyerPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Hero />
        <div className="max-w-6xl mx-auto px-8 py-12">
          <SellerCard />
          <MediaSection />
        </div>
      </main>
    </div>
  );
}
