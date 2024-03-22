import AboutUs from "@/components/AboutUs";
import BackToTop from "@/components/BackToTop";
import EngieImpact1 from "@/components/EngieImpact1";
import Footer from "@/components/Footer";
import GetAnswer from "@/components/GetAnswer";
import Header from "@/components/Header";
import LatestBlog from "@/components/LatestBlog";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      <AboutUs />
      <TrustedBy />
      <Services />
      <EngieImpact1 />
      <LatestBlog />
      <GetAnswer />
      <Footer />
    </div>
  );
}
