import { getProfile } from "@/sanity/sanity.query";
import React from "react";
import AppBar from "./AppBar";

async function Header() {
    const profile = await getProfile();
    return <AppBar resumeURL={profile?.resumeURL} />;
}

export default Header;
