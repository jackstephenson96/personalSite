/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "jackstephenson96",
  title: "Hey y'all, I'm Jack!",
  subTitle: emoji(
    "A passionate DevOps/Full Stack Software Engineer 🚀 with experience building applications from the ground-up, automating manual ops processes, and Splunking all the way"
  ),
  resumeLink:
    "https://jacktstephenson.com/docs/resume_jackstephenson.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jackstephenson96",
  linkedin: "",
  gmail: "jackstephenson96@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@jackstephenson96",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Jack of all trades, master of n̶o̶n̶e̶ some",
  skills: [
    emoji(
      "⚡ Build scalable and visible full-stack Java and Python applications"
    ),
    emoji(
      "⚡ Create masterful Splunk dashboards & interactive alerts"
    ),
    emoji("⚡ Eliminate manual tasks & processes across organizations of any size"
      ),
    emoji(
      "⚡ Document E V E R Y T H I N G"
    ),
    emoji(
      "⚡ Thrive at the intersection of business, engineering, and customer communications"
    ),
    emoji(
      "⚡ Speak Mandarin!"
    )
  ],

  //TODO: Jack verify this
  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Splunk",
      fontAwesomeClassname: "fas fa-chevron-right"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Michigan",
      logo: require("./assets/images/michigan_small.png"),
      subHeader: "Bachelors of Science in Information, Minor in Chinese Language and History",
      duration: "September 2017 - April 2019",
      desc: "Built a data pipeline to identify, map, and tag hiking trails for a given region.",
      descBullets: [
        "Social information processing",
        "Data engineering & analysis",
        "User interaction design & web development"
      ]
    },
    {
      schoolName: "Fudan University",
      logo: require("./assets/images/fudan.png"),
      subHeader: "IES Study Abroad",
      duration: "February - June 2018",
      desc: "Semester in Shanghai",
      descBullets: ["Chinese Marketplace", "Global Supply Chain"]
    },
    {
      schoolName: "Shanghai Jiao Tong University",
      logo: require("./assets/images/jiaotong.png"),
      subHeader: "IES Study Abroad",
      duration: "February - June 2018",
      desc: "Semester in Shanghai",
      descBullets: ["Business Chinese 401", "Chinese Philosophy"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Operations Engineer",
      company: "Apple Inc.",
      companylogo: require("./assets/images/retro_apple_logo_white.png"),
      date: "September 2019 – Present",
      desc: "DevOps / Splunk / Software Engineering",
      descBullets: [
        "Software Development",
        "Automation",
        "Splunk",
        "Leadership",
        "Administration",
        "Config Management",
        "Service Reliability",
        "Process Engineering"
      ]
    },
    {
      role: "Software Engineer - Intern",
      company: "Splunk Inc.",
      companylogo: require("./assets/images/splunklogo.png"),
      date: "Summer 2017, June 2017 - April 2018",
      descBullets: [
        "Developed Splunk to AWX integration for fully automated disaster recovery",
        "Improved Splunk aptitude"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some stuff I wrote for a course (that I still stand by)",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@jackstephenson96/dont-lie-to-yourself-you-cant-stop-checking-your-smartphone-40c2036bf0db",
      title: "Smart Phones: Who Uses Who?",
      description:
        "You have a smartphone in your pocket, I can almost guarantee it. In fact, it is becoming impossible to function without one. From my own…"
    },
    {
      url: "https://medium.com/@jackstephenson96/witch-hunts-the-age-of-cognitive-surplus-ef7dbe8ef5f6",
      title: "Witch Hunts in the Age of Cognitive Surplus",
      description:
        "In 2013, two terrorists detonated improvised explosive devices at the finish line of the Boston Marathon. People across the United States…"
    },
    {
      url: "https://medium.com/@jackstephenson96/who-are-you-589a992a0d56",
      title: "Who are you?",
      description:
        "The desire to answer this unanswerable question is the force behind the journey to its answer. Much of our childhood and adolescent life is…"
    },
    {
      url: "https://medium.com/@jackstephenson96/big-brother-is-watching-you-2d1576c107f7",
      title: "Big Brother is Watching You",
      description:
        "(and so is Google, Amazon, and the cops)"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  // subtitle:
  //   "Hit me up to chat! No solicitation",
  // number: "+92-0000000000",
  email_address: "jackstephenson96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
