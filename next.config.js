/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// i18n: {
	// 	locales: ["en", "es"],
	// 	defaultLocale: "en",
	// },
	swcMinify: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
