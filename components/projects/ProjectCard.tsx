import { Button, Chip, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

type Thumbnail = {
    alt: null | string;
    image: string;
};

export interface Props {
    name: string;
    shortDescription: string;
    thumbnail: Thumbnail;
    liveDemoUrl: string;
    projectUrl: string;
}

function ProjectCard({ name, shortDescription, thumbnail, liveDemoUrl, projectUrl }: Props) {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8 rounded-[20px] bg-content1 text-content1-foreground p-4 shadow-md hover:shadow-lg overflow-hidden cursor-pointer">
                <Image
                    width={640}
                    height={144}
                    className="w-full aspect-video rounded-md border-2"
                    src={thumbnail?.image}
                    alt={thumbnail?.alt ? thumbnail.alt : name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8dhkAAoUBqzrFAH4AAAAASUVORK5CYII="
                />

                <div className="flex items-center justify-between">
                    <h4 className="mb-2 mt-3 text-xl font-semibold text-default-800">{name}</h4>
                    <Chip size="sm">Web App</Chip>
                </div>
                <p className="text-default-600 text-sm mb-4">{shortDescription}</p>
                <div className="flex gap-4">
                    <Button as={Link} size="sm" color="primary" variant="solid" startContent={<FaEye />} href={liveDemoUrl}>
                        Live Demo
                    </Button>
                    <Button as={Link} size="sm" color="primary" variant="flat" startContent={<FaGithub />} href={projectUrl}>
                        View Source
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
