/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_DOMAIN_API: process.env.REACT_APP_DOMAIN_API,
    SECRETKEY: process.env.SECRETKEY,
    APIKEY: process.env.APIKEY,
  },
};

module.exports = nextConfig;
