/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async () =>{
        return [
            {
              source:'/about',
              destination:'/posts',
              permanent:true,
            }
        ]
    }
};

export default nextConfig;
