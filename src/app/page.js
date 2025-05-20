import SectionApps from "./components/Sections/Applications";
import SectionFaqs from "./components/Sections/Faq";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import SectionServices from "./components/Sections/Services";
import Brands from "./components/Sections/Brands";
import SectionStats from "./components/Sections/Stats";
import Hero from "./components/Sections/Hero";
import Comments from "./components/Sections/Comments";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionStats />
      <Brands />
      <SectionServices />
      <div className="bg">
      <Section2 />
      <Section1 />
      </div>
      <Comments />
      <SectionFaqs />
      <SectionApps />
    </>
  );
}
