import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <main>
      <HeroSection onSearch={handleSearch} />
    </main>
  );
}
