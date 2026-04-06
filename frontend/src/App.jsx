import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <Navbar />
        <Hero />
        <Service />
      </main>
    </>
  );
}

export default App;