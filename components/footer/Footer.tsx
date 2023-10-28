import { getProfile } from "@/sanity/sanity.query";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiFreelancer, SiUpwork } from "react-icons/si";

async function Footer() {
  const {socialLinks} = await getProfile();
    return (
        <footer className="flex flex-col py-14 space-y-10 justify-center bg-content2 text-content2-foreground" id="contact">
            <div className="flex justify-center space-x-5 text-3xl">
                <a href={socialLinks?.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500" title="Facebook">
                    <FaFacebook/>
                </a>
                <a href={socialLinks?.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500" title="Instagram">
                    <FaInstagram/>
                </a>
                <a href={socialLinks?.twitter} target="_blank" rel="noopener noreferrer" className="" title="Twitter">
                    <FaXTwitter />
                </a>
                <a href={socialLinks?.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500" title="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href={socialLinks?.github} target="_blank" rel="noopener noreferrer" title="Github">
                    <FaGithub />
                </a>
                <a href={socialLinks?.freelancer} target="_blank" rel="noopener noreferrer" className="text-blue-500" title="Freelancer">
                    <SiFreelancer />
                </a>
                <a href={socialLinks?.upwork} target="_blank" rel="noopener noreferrer" className="text-green-500" title="Upwork">
                    <SiUpwork />
                </a>
            </div>
            <p className="text-center font-medium text-default-600">&copy; {new Date().getFullYear()} Md Tausif Iqbal. All rights reservered.</p>
        </footer>
    );
}

export default Footer;
