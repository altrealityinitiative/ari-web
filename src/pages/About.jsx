import WhoWeAre from "../components/about/WhoWeAre";
import TeamSection from "../components/about/TeamSection";
import Timeline from "../components/TimeLine";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <>
    <PageTransition>
      <WhoWeAre />
      <TeamSection />
      <Timeline />
      </PageTransition>
    </>
  );
}
