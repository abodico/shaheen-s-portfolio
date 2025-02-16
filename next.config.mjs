/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*cdn.sanity.io",
            },
        ],
    },
    env: {
        SANITY_WRITE_TOKEN: process.env.SANITY_WRITE_TOKEN,
    },
}

export default nextConfig
