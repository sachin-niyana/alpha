import Quote from "@/components/Quote";
import Sidebar from "@/components/Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestBlog from "@/components/LatestBlog";
import Header from "@/components/Header";
import GetAnswer from "@/components/GetAnswer";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Quote/>
      <LatestBlog/>
      <GetAnswer/>
    </div>
  );
}
