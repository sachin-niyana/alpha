import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";
// import LatestBlog from "@/components/LatestBlog";
// import Quote from "@/components/Quote";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      {/* <Quote /> */}
      {/* <LatestBlog /> */}
    </div>
  );
}
