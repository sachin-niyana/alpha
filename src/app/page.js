import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
import LatestBlog from "@/components/LatestBlog";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GetAnswer from "@/components/GetAnswer";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      <AboutUs />
      <Quote />
      <LatestBlog />
      <GetAnswer />
      <Footer />
    </div>
  );
}
