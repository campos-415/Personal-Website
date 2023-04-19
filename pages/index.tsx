import Head from "next/head";
import About from "../components/About";
import HomePage from "../components/HomePage";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="space-y-32">
      <Head>
        <title>Cesar Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default Home;
