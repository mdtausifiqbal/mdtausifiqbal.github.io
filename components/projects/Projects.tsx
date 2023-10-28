import Section from "@/components/Section";
import { getProjects } from "@/sanity/sanity.query";
import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import ProjectCard, { Props as ProjectCardProps } from "./ProjectCard";

async function Projects() {
    const projects = await getProjects();
    return (
        <>
            <Section
                id="projects"
                className="bg-content2 text-bg-content2-foreground"
                title="Featured Projects"
                subtitle="What I've built over years"
                description={`I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are
                open-source, so if you see something that piques your interest, check out the code and continue if you have ideas for how
                it can be improved.`}
                footer={
                    <Button color="primary" variant="bordered" size="lg" endContent={<FaChevronRight />}>
                        See All Projects
                    </Button>
                }>
                {projects.map(({ name, shortDescription, liveDemoUrl, projectUrl, thumbnail }: ProjectCardProps, index: number) => (
                    <ProjectCard
                        key={index}
                        name={name}
                        shortDescription={shortDescription}
                        liveDemoUrl={liveDemoUrl}
                        projectUrl={projectUrl}
                        thumbnail={thumbnail}
                    />
                ))}
            </Section>
        </>
    );
}

export default Projects;
