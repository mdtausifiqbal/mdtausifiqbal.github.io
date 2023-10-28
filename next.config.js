/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "skillicons.dev",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            }
        ],
    },
};

module.exports = nextConfig;
