"use client";

import { Button, Link, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import ThemeToggler from "./ThemeToggler";

function AppBar({resumeURL}: {resumeURL: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items = [
        "Services",
        "Skills",
        "Projects",
        "Reviews",
        "Contact"
    ];

    return (
        <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
            <NavbarContent className="lg:hidden">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden" />
            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-4" justify="start">
                {items.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={`#${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button variant="flat" color="primary" endContent={<HiExternalLink/>} as={Link} href={resumeURL}>Resume</Button>
                </NavbarItem>
                <NavbarItem>
                    <ThemeToggler />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {items.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            color={"foreground"}
                            className="w-full"
                            href={`#${item.toLowerCase()}`}
                            size="lg">
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default AppBar;
