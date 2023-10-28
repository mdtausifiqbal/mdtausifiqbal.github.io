"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeToggler() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    const changeTheme = () => {
        // alert("change theme");
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    }
    return (
        <Tooltip content="Toggle Theme">
            <Button color="primary" variant="flat" isIconOnly className="p-2" onClick={changeTheme}>
                {theme === "dark" ? <HiSun className="text-inherit" /> : <HiMoon className="text-inherit" />}
            </Button>
        </Tooltip>
    );
}

export default ThemeToggler;
