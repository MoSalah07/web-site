import { Navbar, About, Contact, Services, Work, Header, Banner } from "@/components";


export default function Home() {
  return (
    <section className="min-h-[400vh] bg-landing">
      <div className="overlay" />
      <Navbar />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </section>
  );
}
