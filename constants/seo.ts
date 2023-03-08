export const DEFAULT_SEO = {
  title: "Tabling",
  defaultTitle: "Tabling",
  description: "Tabling 과제 어플리케이션",
  openGraph: {
    title: "Tabling",
    description: "Tabling 과제 어플리케이션",
    type: "website",
    locale: "ko_KR",
    url: "HOST URL",
    site_name: `테이블링 과제`,
    images: [
      {
        url: `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1281%2Favipnikxmtzty7v1__1080_790.png&w=1000&q=75`,
        width: 750,
        height: 400,
        alt: "alt",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/logo.png",
      sizes: "76x76",
    },
  ],
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
