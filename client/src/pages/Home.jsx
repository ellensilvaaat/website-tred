import HeroSection from '../components/Home/HeroSection';
import Collections from '../components/Home/Collections';
import FinishFilters from '../components/Home/FinishFilters';
import Difference from '../components/Home/Difference';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import UploadRoom from '../components/Home/UploadRoom';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';



export default function Home() {
  return (
    <main>
      <HeroSection />
      <Collections />
      <FinishFilters />
      <Difference />
      <FeaturedProjects/>
      <Testimonials />
      <UploadRoom />
      <CallToAction />
      <Footer />
    </main>
  );
}
