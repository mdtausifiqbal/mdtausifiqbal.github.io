import React, { HTMLAttributes } from "react";
import Container from "./Container";

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
    subtitle: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    footer?: React.ReactNode;
}

function Section({ title, subtitle, description, footer, children, className, ...props }: Props) {
    return (
        <section className={`pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ${className}`} {...props}>
            <Container>
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-screen-md text-center lg:mb-20">
                        <span className="block mb-2 text-lg font-semibold text-primary">{title}</span>
                        <h2 className="mb-4 text-3xl font-bold text-default-800 sm:text-4xl md:text-[40px]">{subtitle}</h2>
                        <p className="text-base text-default-600">{description}</p>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap -mx-4">{children}</div>
                {footer && <div className="w-full px-4 flex justify-center mt-6">{footer}</div>}
            </Container>
        </section>
    );
}

export default Section;
