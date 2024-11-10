import Navbar from "./../components/Navbar.jsx";
import HeroSection from "./../components/HeroSection.jsx";

export default function Home() {
  return (
    <>
      <header className="w-screen h-screen bg-[#058740]">
        <Navbar />
        <HeroSection />
      </header>
      <h1>hello world</h1>
    </>
  );
}
