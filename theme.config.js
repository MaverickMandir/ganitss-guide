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
import Title from "components/title";
import Footer from "components/footer";

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
    return <Title/>;
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);
    const ogTitle = title ? `${title} – GSS` : `GSS: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;

    return (
      <>
        <link
          rel="icon"
          type="image/svg"
          href="/logo.svg"
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
      return <Footer/>;
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
