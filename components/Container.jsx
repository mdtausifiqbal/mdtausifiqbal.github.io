import React from "react";

function Container({ children, className="" }) {
    return <div className={`container max-w-screen-xl h-full mx-auto px-4 lg:px-6 ${className}`}>{children}</div>;
}

export default Container;
