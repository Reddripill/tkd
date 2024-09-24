import FullMap from "@/components/screens/home/fullmap/FullMap";
import Main from "@/components/screens/home/main/Main";
import News from "@/components/screens/home/news/News";

export default function HomePage() {
   return (
      <div>
         <Main />
         <News />
         <FullMap />
      </div>
   );
}
