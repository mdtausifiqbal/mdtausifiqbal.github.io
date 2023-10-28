import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default async function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Skills />
            <Projects/>
            <Reviews/>
        </>
    );
}
