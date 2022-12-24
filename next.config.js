/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  dest: "public",
  disable: !isProduction,
  reactStrictMode: true,
};

module.exports = require("next-pwa")(nextConfig);
