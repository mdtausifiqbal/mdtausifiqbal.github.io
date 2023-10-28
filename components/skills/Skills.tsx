import { getProfile } from "@/sanity/sanity.query";
import Image from "next/image";
import Container from "../Container";
import Section from "../Section";

async function Skills() {
    let profile = await getProfile();
    const skills = profile?.skills.join(",");

    return (
        <>
            <Section
                id="skills"
                title="Skills"
                subtitle="Technologies and Tools"
                description={`We use latest technologies and tools to build your products in this fast changing world.`}>
                <p className="text-center">
                    <Image
                        width={200}
                        height={400}
                        alt="skills"
                        className="md:hidden"
                        src={`https://skillicons.dev/icons?perline=5&i=${skills}&theme=light`}
                    />
                    <Image
                        width={400}
                        height={400}
                        alt="skills"
                        className="hidden md:inline lg:hidden"
                        src={`https://skillicons.dev/icons?perline=10&i=${skills}&theme=light`}
                    />
                    <Image
                        width={800}
                        height={400}
                        alt="skills"
                        className="hidden lg:inline"
                        src={`https://skillicons.dev/icons?i=${skills}&theme=light`}
                    />
                </p>
            </Section>
        </>
    );
}

export default Skills;
