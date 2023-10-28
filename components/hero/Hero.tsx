import myPhoto from "@/assets/my_photo.png";
import Container from "@/components/Container";
import { Button, Link } from "@nextui-org/react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import JobTitle from "@/components/hero/JobTitle";
import { getProfile } from "@/sanity/sanity.query";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

async function Hero() {
    const profile = await getProfile();
    return (
        <Container>
            <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row-reverse py-6 lg:py-0 lg:justify-between items-center gap-10 lg:-mt-16">
                <Image
                    src={profile?.profileImage?.image}
                    width={400}
                    height={400}
                    alt="md tausif iqbal"
                    className="w-48 h-48 lg:w-96 lg:h-96 border-4 border-double border-default rounded-full p-5"
                />
                <div id="intro" className="flex flex-col gap-5 w-full lg:max-w-[50%]">
                    <div id="intro-details" className="space-y-2 lg:space-y-5">
                        <p className="text-lg lg:text-3xl mb-2 lg:mb-4 text-content4-foreground">Hi 👋, Welcome!</p>
                        <p className="text-4xl lg:text-6xl">
                            I’m <span className={`${pacifico.className} text-primary`}>{profile?.fullName}</span>
                        </p>
                        <p className="text-xl lg:text-4xl font-medium">
                            <JobTitle jobTitle={profile?.headline} />
                        </p>
                        <p className="py-2 lg:py-5 text-content4-foreground font-light text-sm lg:text-lg">{profile?.shortBio}</p>
                    </div>
                    <div className="flex gap-5">
                        <Button
                            as={Link}
                            size="lg"
                            href={profile?.socialLinks?.github}
                            target="_blank"
                            startContent={<FaGithub />}
                            className="bg-black text-white">
                            View on Github
                        </Button>
                        <Button
                            variant="bordered"
                            color="primary"
                            as={Link}
                            size="lg"
                            href={profile?.socialLinks?.freelancer}
                            target="_blank"
                            startContent={<SiFreelancer className="text-inherit" />}>
                            Hire Me
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Hero;
