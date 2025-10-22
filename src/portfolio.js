/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahesh Bathina's Portfolio",
  description:
    "Backend Software Engineer specializing in Golang, Kubernetes, and Cloud Native technologies. Experienced in building scalable microservices and DevOps automation.",
  og: {
    title: "Mahesh Bathina Portfolio",
    type: "website",
    url: "https://bathinamahesh.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Mahesh Bathina",
  logo_name: "MaheshBathina",
  nickname: "",
  subTitle:
    "Backend Software Engineer specializing in Golang, Python (Django/Flask), Spring boot, Kubernetes, and Cloud Native technologies. Experienced in building scalable microservices, full-stack web applications, and machine learning solutions with hands-on expertise in data science.",
  resumeLink:
    "https://github.com/bathinamahesh/Personal_Website/blob/master/assets/pdf/Mahesh_Bathina.pdf",
  portfolio_repository: "https://github.com/bathinamahesh",
  githubProfile: "https://github.com/bathinamahesh",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/bathinamahesh",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/mahesh",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:bathinamahesh5399@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@RideWithMahii",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/bathina.mahesh.39/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mahi_2op/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  }
];

const skills = {
  data: [
    {
      title: "Backend Development & Microservices",
      fileName: "FullStackImg",
      skills: [
        "Building scalable microservices using Golang for cloud-native applications",
        "Implementing distributed systems with focus on performance and reliability",
        "Developing backend services with Spring Boot and Django frameworks",
      ],
      softwareSkills: [
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "Experience with multi-cloud infrastructure (AWS, Azure, GCP, OpenShift)",
        "Container orchestration with Kubernetes (GKE, AKS, EKS)",
        "Infrastructure as Code using Terraform and automated deployments",
        "Building CI/CD pipelines with GitLab and Concourse",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#0F1689",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
      ],
    },
    {
      title: "Full-Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "Building full-stack web applications with Django and Flask frameworks",
        "Developing RESTful APIs and integrating with frontend frameworks like React and Vue.js",
        "Experience with PostgreSQL, MongoDB databases and ORM frameworks",
        "Multiple production-ready Django projects including hospital management and classroom systems",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Machine Learning & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "Developing ML models for recommendation systems, NLP, and computer vision",
        "Building sentiment analysis, spam detection, and emotion recognition systems",
        "Experience with TensorFlow, scikit-learn, and data preprocessing pipelines",
        "Hands-on experience with data analysis, visualization, and model deployment",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
      ],
    },
    {
      title: "Databases & Monitoring",
      fileName: "CloudInfraImg",
      skills: [
        "Working with PostgreSQL including Read Replicas and load balancing",
        "Implementing distributed tracing and observability solutions",
        "Message streaming with Kafka for microservices communication",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/bathinamahesh/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/bathinamahesh531",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mahi_learner",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/maheshbathina",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@bathinamahesh5399",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mahiop",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "rgukt_nuzvid.png",
      alt_name: "RGUKT Nuzvid",
      duration: "2020 - 2024",
      descriptions: [
        "Graduated with CGPA of 9.2/10",
        "Studied core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and System Design",
        "Developed strong foundation in programming concepts, OOP, and design patterns",
      ],
      website_link: "https://rguktn.ac.in",
    },
    {
      title: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid",
      subtitle: "Pre University Course (PUC)",
      logo_path: "rgukt_nuzvid.png",
      alt_name: "RGUKT Nuzvid",
      duration: "2018 - 2020",
      descriptions: [
        "Completed Pre-University Course with CGPA of 8.8/10",
        "Built strong foundation in mathematics and sciences",
      ],
      website_link: "https://rguktn.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/BathinaMahesh-5486/B8A792670DB86D01?sharingId",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/BathinaMahesh-5486/429FDFEC01AEF1CB?sharingId",
      alt_name: "Microsoft",
      color_code: "#0089D699",
    },
    {
      title: "Applied Data Science Capstone",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.credly.com/badges/037ae94e-114b-4af6-8360-365abbf94b05/linked_in_profile",
      alt_name: "Coursera",
      color_code: "#2A73CC99",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Backend Software Engineer with expertise in Golang, Kubernetes, and Cloud Native technologies. Experienced in building scalable microservices, implementing DevOps automation, and managing multi-cloud infrastructure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer 1",
          company: "BlackDuck (Synopsys)",
          company_url: "https://www.blackduck.com/",
          logo_path: "blackduck.jpeg",
          duration: "June 2024 - Present",
          location: "Bangalore, India",
          description:
            "Working as Backend Developer specializing in Golang on Cloud Native Coverity K8s product. Enabled parallel job execution on Kubernetes for OnPrem deployments. Implemented multipart upload for large files across AWS S3, Azure Blob, GCP Cloud Storage achieving 1.5-2.8x faster uploads. Implemented PostgreSQL Read Replicas with PGPOOL load balancing. Built CI/CD pipelines and managed IaC across multi-cloud environments. Migrated container images to Google Artifact Registry with multi-architecture support.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Intern",
          company: "Synopsys",
          company_url: "https://www.synopsys.com/",
          logo_path: "Synopsys.png",
          duration: "July 2023 - June 2024",
          location: "Bangalore, India",
          description:
            "Worked on creation of cloud infrastructure using Terraform scripts and automated software integration. Gained in-depth understanding of Docker, Kubernetes, Helm, GitLab Pipelines, and Golang. Worked on GitLab CI/CD Automation to automate Dev and Release Pipeline. Involved in triaging and fixing issues across multiple pipelines.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage cutting-edge technologies in backend development, cloud computing, and machine learning to build scalable and efficient solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my projects and contributions.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mb-12.png",
    description:
      "I am available on LinkedIn and email. Feel free to reach out for opportunities in Backend Development, DevOps, Cloud Native technologies, and Microservices Architecture.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
        "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://maheshbathina.info/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Bangalore, India",
    locality: "Bangalore",
    country: "India",
    region: "Karnataka",
    postalCode: "560029",
    streetAddress: "https://maps.app.goo.gl/WNKZJjBsf8o7CjN16",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9908117373",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
