/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test:/\.md$/,
            use:"rawloader",
        })
        return config
    },
}

module.exports = nextConfig
