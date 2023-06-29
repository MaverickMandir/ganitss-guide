import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import useLocalesMap from "./components/use-locales-map";
import {
  editTextMap,
  feedbackLinkMap,
  gitTimestampMap,
  headDescriptionMap,
  languageMap,
  searchPlaceholderMap,
  tableOfContentsTitleMap,
  titleMap,
} from "./translations/text";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  project: {
    link: "https://github.com/MaverickMandir/ganitss-guide",
  },
  docsRepositoryBase: "https://github.com/MaverickMandir/ganitss-guide/blob/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – GSS",
    };
  },
  primaryHue: 156,
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //     <a href="https://gss.site" target="_blank">
  //       🎉 Ganit Swayam Shikshak is released. Read more →
  //     </a>
  //   )
  // },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
  logo: () => {
    const title = useLocalesMap(titleMap);
    return (
      <>
        <span
          className="mx-2 antialiased tracking-tight uppercase font-mono select-none flex text-xl md:text-2xl font-black bg-gradient-to-tl bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500"
          title={`GSS: ${title}`}
        >
          Ganitam
        </span>
      </>
    );
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);

    const imageUrl = new URL("https://swr-card.vercel.app");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const ogTitle = title ? `${title} – Starter` : `Starter: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;

    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="/logo.png"
        />
        <meta name="description" content={ogDescription} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:locale" content={locale} />
        {locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta property="og:locale:alternate" content={l} key={l} />
          ))}
      </>
    );
  },
  footer: {
    text: () => {
      return (
        <span
          className="mx-4 antialiased uppercase select-none flex text-xl font-mono font-semibold bg-gradient-to-tl bg-clip-text text-transparent to-indigo-500 via-purple-500 from-pink-500"
        >
          MIT {new Date().getFullYear()} © Ganit Swayam Shikshak, Maverick Mandir.
        </span>
      );
    },
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
};

export default themeConfig;
