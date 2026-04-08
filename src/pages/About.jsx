import WhoWeAre from "../components/about/WhoWeAre";
import TeamSection from "../components/about/TeamSection";
import Timeline from "../components/TimeLine";
import PageTransition from "../components/PageTransition";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | ARI";
  }, []);

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
