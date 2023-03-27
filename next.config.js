const isProd = process.env.NODE_ENV === 'production';
const securityHeaders = [
  {
    // 더 빠른 연결을 위해 DNS를 미리 가져옴
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    // HTTPS를 최적화
    // HTTP를 사용하는 대신 HTTPS를 사용해서만 액세스해야 함을 브라우저에 알림
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    // XSS(교차 사이트 스크립팅) 공격으로부터 보호
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    // 해당 페이지를 <frame> 또는<iframe>, <object> 에서 렌더링할 수 있는지 여부를 나타내는데 사용
    // 클릭재킹 공격 방지
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    // MIME 타입 스니핑 공격 방지
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // 브라우저기 동일한 출처에 대한 요청에 전체 URL을 보내지만 요청이 교차 출처인 경우에만 출처를 보냄
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    // prod 환경에서 에러 이외의 콘솔 제거
    removeConsole: isProd
      ? {
          exclude: ['error'],
        }
      : false,
  },
  // terser 역할, 주석, 공백등을 삭제해 스크립트파일 최적화
  swcMinify: true,
  // 외부종속성(node_modules)을 transpile 및 번들로 표시
  transpilePackages: ['@mui/material'],
  // 라이브러리 import 시 module 각각 import 하도록 설정
  modularizeImports: {
    '@mui/material/?(((\\w*)?/?)*)': {
      transform: '@mui/material/{{ matches.[1] }}/{{member}}',
    },
  },
  eslint: {
    // ESLint 룰을 적용할 파일의 경로를 지정
    // production 빌드에서만 적용됨
    dirs: ['src', 'pages'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*', // 모든 경로에 적용
        headers: securityHeaders,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = async () => {
  const plugins = [withBundleAnalyzer]; // All your plugins go into this array

  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
