import AboutUs from "@/components/AboutUs";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import GetAnswer from "@/components/GetAnswer";
import Header from "@/components/Header";
import LatestBlog from "@/components/LatestBlog";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      <AboutUs />
      <Services />
      <Quote />
      <LatestBlog />
      <GetAnswer />
      <Footer />
    </div>
  );
}
