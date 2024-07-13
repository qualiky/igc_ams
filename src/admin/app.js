const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "Auth.form.email.placeholder": "e.g. user@pirus.app",
      "Auth.form.welcome.title": "Welcome to PirusDash",
      "Auth.form.welcome.subtitle": "Log in to PirusDash to get started.",
      "app.components.LeftMenu.navbrand.title": "Pirus Dash",
    },
  },
  theme: {
    light: {
      colors: {
        primary100: "#eefdff",
        primary200: "#caf3ff",
        primary500: "#7bdaff",
        primary600: "#31baff",
        primary700: "#23ace2",
        neutral0: "#ffffff",
        neutral100: "#f6f6f9",
        neutral150: "#eaeaef",
        neutral200: "#dcdce4",
        neutral300: "#c0c0cf",
        neutral400: "#a5a5ba",
        neutral500: "#8e8ea9",
        neutral600: "#666687",
        neutral700: "#4a4a6a",
        neutral800: "#32324d",
        neutral900: "#212134",
        neutral1000: "#181826",
        buttonPrimary500: "#7bdaff",
        buttonPrimary600: "#31baff",
        buttonPrimary700: "#23ace2",
        buttonNeutral0: "#ffffff",
        buttonNeutral100: "#f6f6f9",
        buttonNeutral150: "#eaeaef",
        buttonNeutral200: "#dcdce4",
        buttonNeutral300: "#c0c0cf",
        buttonNeutral400: "#a5a5ba",
        buttonNeutral500: "#8e8ea9",
        buttonNeutral600: "#666687",
        buttonNeutral700: "#4a4a6a",
        buttonNeutral800: "#32324d",
        buttonNeutral900: "#212134",
      },
    },
    dark: {
      colors: {
        primary100: "#eefdff",
        primary200: "#caf3ff",
        primary500: "#7bdaff",
        primary600: "#31baff",
        primary700: "#23ace2",
        neutral0: "#181826",
        neutral100: "#212134",
        neutral150: "#32324d",
        neutral200: "#4a4a6a",
        neutral300: "#666687",
        neutral400: "#8e8ea9",
        neutral500: "#a5a5ba",
        neutral600: "#c0c0cf",
        neutral700: "#dcdce4",
        neutral800: "#eaeaef",
        neutral900: "#f6f6f9",
        neutral1000: "#ffffff",
        buttonPrimary500: "#7bdaff",
        buttonPrimary600: "#31baff",
        buttonPrimary700: "#23ace2",
        buttonNeutral0: "#181826",
        buttonNeutral100: "#212134",
        buttonNeutral150: "#32324d",
        buttonNeutral200: "#4a4a6a",
        buttonNeutral300: "#666687",
        buttonNeutral400: "#8e8ea9",
        buttonNeutral500: "#a5a5ba",
        buttonNeutral600: "#c0c0cf",
        buttonNeutral700: "#dcdce4",
        buttonNeutral800: "#eaeaef",
        buttonNeutral900: "#f6f6f9",
      },
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  head: {
    favicon: "./uploads/favicon_0dba5ffdf8.ico",
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
