/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Meet",
  logo_name: "meet0963()",
  nickname: "meet0963",
  full_name: "Meet Patel",
  subTitle:
    "Full Stack Developer, Competitive Programming Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1mSf8fD_EgrC0fYuEvwTKMyOm1qlesRKM/view?usp=sharing",
  mail: "mailto:meet.patel.01729@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/meetpatel0963",
  linkedin: "https://www.linkedin.com/in/meet-patel-b1329a16b/",
  gmail: "meet.patel.01729@gmail.com",
  googlescholar:
    "https://scholar.google.com/citations?hl=en&authuser=3&user=Vc58ExIAAAAJ",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build highly responsive front ends with React, Redux, and Next.js",
        "⚡ Architect secure, scalable backend systems with Spring Boot, Node.js, Express, and Flask",
        "⚡ Develop cross-platform mobile apps with Flutter and Dart",
        "⚡ Apply LLD and HLD concepts for efficient, maintainable, and well-structured systems",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#68A063",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#007396",
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
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
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
        {
          skillName: "Apache Cassandra",
          fontAwesomeClassname: "simple-icons:apachecassandra",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#D83D4A",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F1502F",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploy applications using AWS, GCP, and OpenShift",
        "⚡ Utilize Docker for containerization",
        "⚡ Implement CI/CD pipelines to automate development workflows",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
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
          skillName: "OpenShift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#D30000",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "TeamCity",
          fontAwesomeClassname: "simple-icons:teamcity",
          style: {
            color: "#4F5B93",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nirma University",
      subtitle: "Bachelor in Computer Science and Engineering",
      logo_path: "nirma.png",
      alt_name: "nirma",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Achieved CGPA of 8.73/10",
        "⚡ Ranked 13th out of 280+ students (Top 5%)",
        "⚡ Coursework: Data Structures & Algorithms, Object Oriented Programming, Databases, Operating Systems, Computer Networks, Web Development, Software Engineering, Microservices Architecture, Machine Learning, Deep Learning, NLP, Big Data Analytics",
      ],
      website_link: "https://nirmauni.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Algorithmic Toolbox",
      subtitle: "UC San Diego, Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1utwJfjLFmk4OtHCD9naTsaGRYAnzY_iw/view?usp=sharing",
      alt_name: "UC San Diego, Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI, Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/102hSROj2xnyUBk2Oz43cFzFbb0dUZwSE/view?usp=sharing",
      alt_name: "DeepLearning.AI, Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Google Cloud Engineer",
      subtitle: "GCP Training, Deutsche Bank",
      logo_path: "google-cloud.png",
      certificate_link:
        "https://drive.google.com/file/d/1AU4pNld_BeOkGsvVocZwzfgZ4uj6wLyV/view?usp=sharing",
      alt_name: "GCP Training, Deutsche Bank",
      color_code: "#F4B400",
    },
    {
      title: "JUnit & Mockito",
      subtitle: "in28Minutes, Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1YpJZ1XXZpYy7h55J7I2r1jqOrDjHioiN/view?usp=sharing",
      alt_name: "in28Minutes, Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford, Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1KTIGDFRQ2q8cx493pl2zHNKHr3pi2YX_/view?usp=sharing",
      alt_name: "Stanford, Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Mastering Microservices with Spring",
      subtitle: "in28Minutes, Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1CykIF0JlNjbebj_oDMXUbUfhalXlXzu1/view?usp=sharing",
      alt_name: "in28Minutes, Udemy",
      color_code: "#A435F0",
    },
    {
      title: "MATLAB",
      subtitle: "MathWorks",
      logo_path: "mathworks.png",
      certificate_link:
        "https://drive.google.com/file/d/1xeXQvb5aZm_zAm5_JlVS_eMChhGA5YEy/view?usp=sharing",
      alt_name: "MathWorks",
      color_code: "#0076A8",
    },
    {
      title: "Node.js",
      subtitle: "CodeWithMosh",
      logo_path: "codewithmosh.png",
      certificate_link:
        "https://drive.google.com/file/d/116zVfqNiQg-M9qfnYEwavt7QEcUSEiXD/view?usp=sharing",
      alt_name: "CodeWithMosh",
      color_code: "#2D3436",
    },
    {
      title: "Letter of Appreciation",
      subtitle: "CSI, Nirma University",
      logo_path: "csi.png",
      certificate_link:
        "https://drive.google.com/file/d/1ixOUsRY-fflhroXkkMSnKNqqtz3fY283/view?usp=sharing",
      alt_name: "CSI, Nirma University",
      color_code: "#003366",
    },
    {
      title: "Community Service",
      subtitle: "SMVCT",
      logo_path: "community-service.png",
      certificate_link:
        "https://drive.google.com/file/d/1s1zXbaF_hcDZ5O0IP2Q_0MVPDwX1HE85/view?usp=sharing",
      alt_name: "SMVCT",
      color_code: "#FFD700",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research, and Achievements",
  description:
    "I'm a Full Stack Developer with over two years of experience building real-world applications. I focus on delivering clean, efficient code. I'm also a competitive programmer, constantly solving complex problems to sharpen my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Analyst",
          company: "Deutsche Bank",
          company_url:
            "https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut",
          logo_path: "deutschebank.jpg",
          duration: "July 2022 - Present",
          location: "Pune, India",
          description: [
            "ETL Pipeline Development: Designed and implemented ETL pipelines for automating transaction data reporting across 5 countries, handling JSON, CSV, AVRO, and Parquet formats, resulting in an annual cost saving of $5M USD.",
            "Monitoring System: Developed a monitoring system for tracking metrics and real-time ETL data, improving troubleshooting efficiency by 98% with early alerting. Implemented caching mechanisms and role-based authentication to enhance performance and security.",
            "On-Demand Service Scaling Tool: Engineered an internal tool similar to GCP Cloud Run, achieving an 80% reduction in resource usage and saving $1.5M USD annually.",
            "Fleet Management System: Pioneered an automated fleet management system to streamline updates across a vast repository set and deploy new artifacts with minimal effort, eliminating manual tasks and reducing development time by 95%.",
            "1st place Winner in Deutsche Bank Global Hackathon 2024, organized by Dementia UK organization.",
            "Engineer of the Month, Deutsche Bank - Feb 2024.",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Development Engineer",
          company: "Bullsurge/Neosurge",
          company_url: "https://www.neosurge.money/",
          logo_path: "neosurge.jpeg",
          duration: "Dec 2021 - June 2022",
          location: "Pune, India",
          description: [
            "Asset Management Platform: Architected and delivered a comprehensive suite of portals for asset management, including client onboarding, live stock tracking, buy/sell operations, portfolio analysis, real-time notifications, and chat functionality. Enhanced client engagement by 30% and cut inquiry response time by 50%.",
            "AWS Deployment: Deployed and managed services on AWS, leveraging Lambda functions, API Gateway, Elastic Beanstalk, CodeCommit, IAM, CloudWatch, CloudFormation, CodeGuru, SNS, and SES for robust cloud solutions.",
          ],
          color: "#0071C5",
        },
        {
          title: "Technology Analyst",
          company: "Deutsche Bank",
          company_url:
            "https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut",
          logo_path: "deutschebank.jpg",
          duration: "May 2021 - July 2021",
          location: "Pune, India",
          description: [
            "Context-Aware Chatbot Development: Fine-tuned BERT-large to boost response accuracy by 6%, cutting search time from 4 minutes to 300 milliseconds. Conducted a comparative analysis with BERT, RoBERTa, T5, GPT-3, and XLNet to enhance model performance.",
            "NLP Optimization: Leveraged GPT-3 for page summarization and employed matching algorithms like FastText, Word2Vec, Glove, and BM25, improving response time by 92%.",
            "Chatbot Interface & Deployment: Built a ReactJS-based chatbot interface and deployed it on Google Cloud Platform (GCP) using Cloud Run for scalable management and App Engine for the user interface.",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Research Experience",
      experiences: [
        {
          title: "Research Assistant",
          company: "Dr. Sudeep Tanwar's Research Group, Nirma University",
          company_url: "https://www.sudeeptanwar.in/",
          logo_path: "STlab.png",
          duration: "Aug 2022 - Aug 2024",
          location: "Ahmedabad, India (Remote)",
          description: [
            "Contributed to the 'HyDiT' project, developing model compression techniques for Autonomous Vehicles to optimize resource use while maintaining high accuracy, serving as the first author.",
            "Led the 'TeleXGI' project, integrating Convolutional Neural Networks (CNNs) with Explainable AI (X-AI) to improve remote gastrointestinal disease classification.",
            "Collaborated on the 'F-LoveR' project, implementing a Federated Learning approach to bolster privacy and threat detection in V2V and V2I communications for Autonomous Electric Vehicles.",
            "Worked on novel projects involving a visual-language fusion module for referring image segmentation and leveraging Liquid Neural Networks for improved patient monitoring and rehabilitation.",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Achievements",
      experiences: [
        {
          title: "Competitive Programming, Hackathons & Recognitions",
          company: "",
          company_url: "",
          logo_path: "achievements.png",
          duration: "",
          location: "",
          description: [
            "Graduated in the top 5% of a class of 280+ Computer Science students.",
            "Awarded 1st Place in the Deutsche Bank Global Hackathon organized by Dementia UK, July 2024.",
            "Recognized as Engineer of the Month at Deutsche Bank, February 2024.",
            "Contributed randomized graph algorithms to the open-source 'igraph' library for network analysis.",
            "Completed Deutsche Bank Cloud Engineer Sprint with distinction, a 12-week GCP hands-on training.",
            "Google Kickstart 2021: Ranked Round A (669), Round B (360), Round C (562), Round H (606).",
            "Facebook HackerCup 2021: Qualification Round (379/34,588), Round 1 (1,177/12,692), Round 2 (1,812).",
            "UberHacktag 2021: Top 154 out of 24,372 teams.",
            "Kaggle Challenge Plant Pathology 2021: Ranked 97/626 teams, Top 15%.",
            "Competitive Programming Rankings: Achieved Expert rating on Codeforces (1702), 5⋆ rating on CodeChef (2146), and 6⋆ on HackerRank.",
          ],
          color: "#FBBD18",
        },
      ],
    },
    {
      title: "Publications",
      experiences: [
        {
          title:
            "Explainable AI for gastrointestinal disease diagnosis in telesurgery Healthcare 4.0",
          company: "Dr. Sudeep Tanwar Research Group, Nirma University",
          company_url:
            "https://www.sciencedirect.com/science/article/abs/pii/S0045790624003422?dgcid=coauthor",
          logo_path: "elsevier.png",
          duration: "July 2024",
          location: "",
          description: [
            "Addressed the rising need for advanced diagnostic methods in gastrointestinal disorders by integrating telemedicine.",
            "Introduced TeleXGI, a telemedicine model combining Convolutional Neural Networks (CNNs) with Explainable AI (X-AI) for remote gastrointestinal disease classification.",
            "Utilized ResNet50 and MobileNetV2 CNN architectures, achieving diagnostic accuracy of 98.8% and 98.5%, respectively.",
            "Enhanced model interpretability using X-AI techniques including Grad-CAM, saliency maps, integrated gradients, attribution heatmaps, and LIME.",
            "Validated model performance with precise explanation heatmaps, aligning with ground truth from the Kvasir-SEG dataset.",
            "Established a benchmark for integrating X-AI in telemedicine, improving real-time and high-throughput data processing for telesurgery.",
          ],
          color: "#FBBD18",
        },
      ],
    },
    {
      title: "Student Organizations",
      experiences: [
        {
          title: "Computer Society of India",
          company: "Nirma University",
          company_url: "https://technology.nirmauni.ac.in/student/csi/",
          logo_path: "csi.png",
          duration: "Oct 2021",
          location: "Ahmedabad, India",
          description: [
            "Presented a lecture on 'Data Structures for Machine Learning' as a core student committee member at an event hosted by the educational club Computer Society of India (CSI).",
          ],
          color: "#FBBD18",
        },
        {
          title: "Rotaract Club",
          company: "Nirma University",
          company_url: "",
          logo_path: "rcni.jpeg",
          duration: "Sept 2019",
          location: "Ahmedabad, India",
          description: [
            "Volunteered with the cultural Rotaract Club of Nirma Institutes (RCNI), contributing to the organization of key events, including Horizon 2019 and VaudeVille 2019.",
          ],
          color: "#FBBD18",
        },
        {
          title: "CodeAdda",
          company: "Nirma University",
          company_url: "https://technology.nirmauni.ac.in/student/codeadda/",
          logo_path: "codeadda.png",
          duration: "Jan 2019 - May 2022",
          location: "Ahmedabad, India",
          description: [
            "Actively participated in challenges and presented sessions at the programming club CodeAdda, motivating fellow students in competitive programming, and offering guidance on job tracking and placements.",
          ],
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "As a full stack developer, I have built secure, scalable, and efficient front-end and back-end systems across a range of real-world applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "meetpatel.png",
    description:
      "Feel free to reach out using the details below. I'll do my best to respond as quickly as possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog regularly, but when I work on something interesting or useful, I try to share it so others can benefit. You can find my posts on LinkedIn.",
    link: "https://www.linkedin.com/in/meet-patel-b1329a16b/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "IntelliPlace",
      url: "https://github.com/meetpatel0963/Placement-Management-System",
      description:
        "A microservices-based platform for managing student placements, job postings, and networking, featuring real-time updates and secure APIs.",
      languages: [
        {
          name: "Spring Boot",
          iconifyClass: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          name: "Golang",
          iconifyClass: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          name: "Apache Cassandra",
          iconifyClass: "simple-icons:apachecassandra",
          style: {
            color: "#5C2D91",
          },
        },
        {
          name: "Docker",
          iconifyClass: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          style: {
            color: "#4DB33D",
          },
        },
        {
          name: "PostgreSQL",
          iconifyClass: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/Placement-Management-System",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "DevTalks",
      url: "https://github.com/meetpatel0963/DevTalks",
      description:
        "A community Q&A platform for programmers with features for secure authentication, rich content submission, dynamic tagging, and real-time notifications.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          name: "CSS3",
          iconifyClass: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          name: "jQuery",
          iconifyClass: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
          style: {
            color: "#0C4B33",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/DevTalks",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Online-Judge",
      url: "https://github.com/meetpatel0963/Online-judge",
      description:
        "A platform for algorithmic challenges with real-time code evaluation, multi-language support, user-contributed problems, and advanced analytics for users.",
      languages: [
        {
          name: "Spring Boot",
          iconifyClass: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          name: "React.js",
          iconifyClass: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          name: "Node.js",
          iconifyClass: "simple-icons:nodedotjs",
          style: {
            color: "#8CC84B",
          },
        },
        {
          name: "Express.js",
          iconifyClass: "simple-icons:express",
          style: {
            color: "#8B8D8E",
          },
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          name: "Docker",
          iconifyClass: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/Online-judge",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "RhythMate",
      url: "https://github.com/meetpatel0963/Music-Player",
      description:
        "A Flutter-based music player with Firebase integration for secure authentication and real-time updates, featuring intuitive controls and a mini player.",
      languages: [
        {
          name: "Dart",
          iconifyClass: "simple-icons:dart",
          style: {
            color: "#00B2A9",
          },
        },
        {
          name: "Flutter",
          iconifyClass: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          name: "Firebase",
          iconifyClass: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/Music-Player",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "RentFlix",
      url: "https://github.com/meetpatel0963/Movie-Rental-System-back-end",
      description:
        "A comprehensive movie rental platform built with the MERN stack, offering user-friendly movie browsing and rental management features.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          name: "React.js",
          iconifyClass: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          name: "Node.js",
          iconifyClass: "simple-icons:nodedotjs",
          style: {
            color: "#8CC84B",
          },
        },
        {
          name: "Express.js",
          iconifyClass: "simple-icons:express",
          style: {
            color: "#8B8D8E",
          },
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/Movie-Rental-System-back-end",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "CommerceX",
      url: "https://github.com/meetpatel0963/E-Commerce-Management-System",
      description:
        "A fully functional e-commerce website developed with HTML, CSS, and PHP, designed for seamless product browsing and purchase.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          name: "CSS3",
          iconifyClass: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          name: "PHP",
          iconifyClass: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          name: "SCSS",
          iconifyClass: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/E-Commerce-Management-System",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "6",
      name: "CParser",
      url: "https://github.com/meetpatel0963/C-Compiler",
      description:
        "A custom C compiler featuring bespoke lexical, semantic, and syntax analyzers, crafted from the ground up.",
      languages: [
        {
          name: "C",
          iconifyClass: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/C-Compiler",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "7",
      name: "RideCluster",
      url: "https://github.com/meetpatel0963/KMeans-Spark",
      description:
        "A K-Means clustering model implemented with Apache Spark to analyze and cluster Uber's ride-sharing data.",
      languages: [
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          name: "Apache Spark",
          iconifyClass: "simple-icons:apachespark",
          style: {
            color: "#E25A1C",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/KMeans-Spark",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "PriceTrack",
      url: "https://github.com/meetpatel0963/selenium-product-data-reporter",
      description:
        "An automated price tracker using Selenium to monitor and report price changes on Amazon and Flipkart.",
      languages: [
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          name: "Selenium",
          iconifyClass: "simple-icons:selenium",
          style: {
            color: "#43B02A",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/meetpatel0963/selenium-product-data-reporter",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "BotaniQ",
      url: "https://github.com/meetpatel0963/Plant-Disease-Detection",
      description:
        "Top 15% in Kaggle's Plant Pathology Challenge, diagnosing six plant diseases with 84% accuracy using deep learning and ensemble techniques.",
      languages: [
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          name: "PyTorch",
          iconifyClass: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/meetpatel0963/Plant-Disease-Detection",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Captionify",
      url: "",
      description:
        "Advanced image captioning tool utilizing encoder-decoder architectures, achieving 91% accuracy with SwinV2 and RoBERTa on Flickr8K and MS CoCo datasets.",
      languages: [
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          name: "PyTorch",
          iconifyClass: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
      ],
      links: [],
    },
    {
      id: "11",
      name: "XRayCovidNet",
      url: "",
      description:
        "High-accuracy X-ray based COVID-19 detection using CNNs and image enhancement, achieving 91.2% accuracy with VGG19.",
      languages: [
        {
          name: "Python",
          iconifyClass: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          name: "PyTorch",
          iconifyClass: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
      ],
      links: [],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
