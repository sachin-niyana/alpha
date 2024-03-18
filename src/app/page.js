import Quote from "@/components/Quote";
import Sidebar from "@/components/Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestBlog from "@/components/LatestBlog";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Quote/>
      <LatestBlog/>
    </div>
  );
}
