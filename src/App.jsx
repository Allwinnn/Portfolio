import Nav from "./components/Nav";
import SideSocial from "./components/SideSocial";
import SideEmail from "./components/SideEmail";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: "var(--navy)", minHeight: "100vh" }}>
      <Nav />
      <SideSocial />
      <SideEmail />

      <main
        style={{
          padding: "0 150px",
          maxWidth: 1600,
          margin: "0 auto",
          counterReset: "section",
        }}
      >
        <style>{`
          @media (max-width: 1080px) { main { padding: 0 100px !important; } }
          @media (max-width: 768px)  { main { padding: 0 50px !important; } }
          @media (max-width: 480px)  { main { padding: 0 25px !important; } }
        `}</style>

        <div style={{ paddingTop: "calc(var(--nav-height) + 10px)" }}>
          <Hero />
        </div>

        {[About, Jobs, FeaturedProjects, OtherProjects, Contact].map(
          (Section, i) => (
            <div key={i} style={{ paddingTop: i === 4 ? 0 : "100px" }}>
              <Section />
            </div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}