import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
