// gatsby-config.js
module.exports = {
    plugins: [
      {
        resolve: `@christiandavid/gatsby-theme-byfolio`,
        options: {
            siteName: `Saurabh Mhatre`,
            siteShortName: `SM`,
            siteDescription: `This cool App contains information about my work experience as a software developer.`,
            siteKeywords: `Software developer, Front End Developer`,
            siteShortName: `SM`,
            path: `src/`,
            useMozJpeg: true,
            homePage: {
                availableToHire: false,
                dotColors: ["#0e3e1e", "#6CC551"],
                h1Text: `Hi!, I'm Saurabh Mhatre`,
                h2Text: `I'm a programmer who loves working in frontend development, I have
                    worked as a software developer since 2015.`,
                typewriter: [
                  `Coding is my passion 😎`,
                  `I like technical writing ✍️`,
                  `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
                  `I think one of my values is the <strong>ability to resolve problems<strong>`,
                  `I like to share what I know 👨‍🏫`,
                  `In my non-coding hours, I'm at the 🏋‍`,
                  `I also learn about data science <span style='color: #27ae60;'>occasionally</span>`,
                ],
              },
              email: `codeclassifiers@gmail.com`,
              social: {
                // Usernames
                twitter: `saurabhnative`,
                gitHub: `codeclassifiers`,
                stackOverflow: `10843370/saurabh-mhatre`,
                linkedIn: `in/saurabh-mhatre/`,
                resumeInPdf: `https://www.dropbox.com/s/kmjc92wgftlbu19/Resume.pdf?dl=0`, // url or local link
              },
        }
        }
    ],
}