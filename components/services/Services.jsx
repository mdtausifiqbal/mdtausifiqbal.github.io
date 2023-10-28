import Section from "@/components/Section";
import {FaCode, FaChrome, FaAndroid, FaWindows, FaRobot, FaReact} from "react-icons/fa";


const Service = () => {
    return (
        <Section
            className="bg-content2 text-bg-content2-foreground"
            id="services"
            title="Our Services"
            subtitle="What We Offer"
            description={`We offer web application development services, and help your business move forward. From custom solutions to responsive design, we ensure your online presence shines.`}>
            <ServiceCard
                title="Website Development"
                details="Boost digital presence with our custom website design, responsive layouts, SEO expertise, and top-tier security. Transform your online image!"
                icon={<span className="text-white text-3xl"><FaCode /></span>}
            />
            <ServiceCard
                title="Web App Development"
                details="Tailor-made web apps ensuring user-centric design, cross-platform compatibility, & data protection. Drive digital innovation & efficiency with us."
                icon={<span className="text-white text-3xl"><FaReact /></span>}
            />
            <ServiceCard
                title="Mobile App Development"
                details="Create powerful mobile apps for iOS & Android. Focusing on user experience, security, & scalability. Make a mobile impact today!"
                icon={<span className="text-white text-3xl"><FaAndroid /></span>}
            />
            <ServiceCard
                title="Desktop App Development"
                details="Bespoke desktop software, optimized for efficiency. Cross-platform, secure, & scalable. Upgrade your desktop experience & business processes!"
                icon={
                    <span className="text-white text-3xl"><FaWindows/></span>
                }
            />
            <ServiceCard
                title="Extension Development"
                details="Custom Chrome extensions to optimize browsing. Seamlessly integrated, user-friendly, & safe. Transform your Chrome experience."
                icon={
                    <span className="text-white text-3xl"><FaChrome/></span>
                }
            />
            <ServiceCard
                title="ChatBot Development"
                details="AI-powered chatbots for streamlined interactions. Deploy on multiple platforms, with NLP & analytics. Enhance communication today!"
                icon={
                    <span className="text-white text-3xl"><FaRobot/></span>
                }
            />
        </Section>
    );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-8 rounded-[20px] bg-content1 text-content1-foreground p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                    <div className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-primary`}>{icon}</div>
                    <h4 className="mb-3 text-xl font-semibold text-default-800">{title}</h4>
                    <p className="text-default-600">{details}</p>
                </div>
            </div>
        </>
    );
};
