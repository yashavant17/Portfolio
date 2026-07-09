import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  java,
  python,
  c,
  mysql,
  aws,
  graduation,
  book,
  school,
  carrent,
  jobit,
  tripguide,
  event_registration,
  food_redistribution,
  sms_spam_detection,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java & Python Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "Reva University",
    icon: graduation,
    iconBg: "#383E56",
    date: "2023 - 2027",
    points: [
      "Specializing in Computer Science and Information Technology with a current CGPA of 8.2/10.",
      "Acquiring strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.",
      "Engaged in hands-on academic projects, software engineering challenges, and hackathons.",
    ],
  },
  {
    title: "Pre-University Education (PCMC)",
    company_name: "Sukruti PU Science College, Hubballi, Dharwad",
    icon: book,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Completed pre-university education with an aggregate of 88.8%.",
      "Focused study in Physics, Chemistry, Mathematics, and Computer Science.",
    ],
  },
  {
    title: "Secondary School Education",
    company_name: "Morarji Desai Residential School, Mulagund, Gadag",
    icon: school,
    iconBg: "#383E56",
    date: "2016 - 2021",
    points: [
      "Completed secondary education under the Karnataka Secondary Education Examination Board.",
      "Passed with distinction, scoring 88.8% marks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Salesforce Certified Agentforce Specialist credential, validating expertise in building and deploying autonomous AI agents.",
    name: "Salesforce",
    designation: "Certified Specialist",
    company: "Salesforce",
    image: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
  },
  {
    testimonial:
      "Deloitte Data Analytics Job Simulation, completing tasks in data analytics, forensic technology, and client presentations.",
    name: "Deloitte / Forage",
    designation: "Participant",
    company: "Forage",
    image: "https://www.vectorlogo.zone/logos/deloitte/deloitte-icon.svg",
  },
  {
    testimonial:
      "HackerRank Skills Certifications in Java (Basic) and Python (Basic), proving algorithmic problem-solving capabilities.",
    name: "HackerRank",
    designation: "Certified Developer",
    company: "HackerRank",
    image: "https://www.vectorlogo.zone/logos/hackerrank/hackerrank-icon.svg",
  },
  {
    testimonial:
      "Won First Prize in Cricket and Throw Ball competition at a college-level sports event, demonstrating teamwork and leadership.",
    name: "Sports Event",
    designation: "First Prize Winner",
    company: "Reva University",
    image: "https://raw.githubusercontent.com/twbs/icons/main/icons/trophy.svg",
  },
  {
    testimonial:
      "Participated in a 24-hour college-level Hackathon focused on intense collaborative problem-solving and rapid software development.",
    name: "Hackathon",
    designation: "Participant",
    company: "Reva University",
    image: "https://raw.githubusercontent.com/twbs/icons/main/icons/laptop.svg",
  },
];

const projects = [
  {
    name: "Event Registration & Management",
    description:
      "A full-stack, web-based event registration platform developed to streamline participant onboarding and event coordination workflows, significantly improving data accuracy and reducing manual administrative effort.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: event_registration,
    source_code_link: "https://github.com/yashavant17/event-registration-system",
  },
  {
    name: "Smart Food Redistribution",
    description:
      "A software solution designed to connect food donors with local recipients, aimed at reducing food wastage. Includes robust system architecture design, coordination logic, and documented workflows.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "System Design",
        color: "green-text-gradient",
      },
      {
        name: "Workflow Optimization",
        color: "pink-text-gradient",
      },
    ],
    image: food_redistribution,
    source_code_link: "https://github.com/yashavant17/Food-Redistribution-System",
  },
  {
    name: "SMS Spam Detection",
    description:
      "A machine learning model engineered in Python for automated SMS classification. Utilizes natural language processing (NLP) techniques, text preprocessing, and feature engineering to improve detection accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: sms_spam_detection,
    source_code_link: "https://github.com/yashavant17/SMS-Spam-Detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
