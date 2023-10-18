export default defineAppConfig({
  alpine: {
    title: "anexo03",
    description:
      "Inexplicavelmente, somos alvo de um amor incondicional, que nos atrai e nos envolve de maneira irrestível. Sendo assim, fomos anexados a um plano perfeito, onde Pai, Filho e Espírito Santo atuam de maneira harmoniosa e infalível",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "anexo03", // alt of the logo
      },
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: "https://www.github.com/nuxt-themes/alpine",

        text: "anexo03",
      },
      navigation: true, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "",
      instagram: "projetoanexo03",
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nuxtlabs",
      },
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});