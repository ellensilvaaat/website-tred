import HeroSection from '../components/Home/HeroSection';
import Collections from '../components/Home/Collections';
import FinishFilters from '../components/Home/FinishFilters';
import Difference from '../components/Home/Difference';
import FeaturedProjects from '../components/Home/FeaturedProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Collections />
      <FinishFilters />
      <Difference />
      <FeaturedProjects/>
    </main>
  );
}
