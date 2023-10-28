"use client";

import React from "react";

import { TypeAnimation } from "react-type-animation";

function JobTitle({ jobTitle }: { jobTitle: string }) {
    const seq = jobTitle.split(",").reduce((acc: (string | number) [], item: string) => {
        acc.push(item);
        acc.push(1000);
        return acc;
    }, []);
    return (
        <TypeAnimation
            sequence={[
                ...seq,
                () => {
                    // console.log("Sequence completed");
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
        />
    );
}

export default JobTitle;
