// All the text on the website lives in this file.
// Every fact here matches Sinan's CVs (see the CV project). Change facts there first, then here.

export const PROFILE = {
  name: "Sinan Emre",
  shortName: "Sinan",
  headline: "Researcher in Mechanical Design of Legged Robots and Actuators",
  where: "PhD researcher at IIT's Dynamic Legged Systems lab in Genova, Italy",
  intro:
    "I work on mechanisms that let quadruped robots do more: a claw that helps them get over high obstacles, " +
    "a knee transmission that shifts to a higher ratio when the leg is loaded, compact actuators and hydraulic power. " +
    "Most of my work goes from CAD and FEM to a real prototype on a real robot.",
  status: "Finishing my PhD in early 2027. Open to postdoc and R&D positions from February 2027.",
  email: "sinanemre94@gmail.com",
  scholar: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
  linkedin: "https://www.linkedin.com/in/sinan-emre-04888694",
  cvResearch: "/Sinan_Emre_CV_Academic.pdf",
  cvIndustry: "/Sinan_Emre_CV.pdf",
};

export const ROBOTS = [
  "HyQReal2 hydraulic quadruped",
  "Unitree Aliengo",
  "Unitree Go2",
  "My own 12-DOF quadruped prototypes",
  "CoEx lower-body exoskeleton",
];

export type Project = {
  title: string;
  img: string;      // replace the tile in public/projects/ with a photo or GIF of the same name
  badge?: string;
  desc: string;
  url: string;
  featured?: boolean;
};

export const PROJECTS_IIT: Project[] = [
  {
    title: "Compact hydraulic power unit",
    img: "/projects/hpu.webp",
    badge: "AIM 2026",
    desc: "I simulated and tested a compact hydraulic power unit and integrated it on the HyQReal2 hydraulic quadruped.",
    url: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
    featured: true,
  },
  {
    title: "Load-based variable transmission",
    img: "/projects/vtm.webp",
    badge: "ICAR 2025",
    desc: "A passive knee mechanism with pre-tensioned torsional springs and a four-bar linkage. Under load it raises the transmission ratio by up to 40% in simulation. I built a 3D-printed prototype.",
    url: "https://arxiv.org/abs/2512.15448",
    featured: true,
  },
  {
    title: "Carpal-claw",
    img: "/projects/carpal-claw.webp",
    badge: "ICRA 2024",
    desc: "A mechanism that helps quadruped robots get over high obstacles. I did the mechanical design and tested it on Unitree Aliengo.",
    url: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
    featured: true,
  },
  {
    title: "Stair-climbing charts",
    img: "/projects/stairs.webp",
    badge: "CLAWAR 2023",
    desc: "What body height should a quadruped keep when it walks on stairs? I built the simulations for this study.",
    url: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
  },
];

export const PROJECTS_OZU: Project[] = [
  {
    title: "Compact actuator for quadrupeds",
    img: "/projects/actuator.webp",
    badge: "ACTUATOR 2022",
    desc: "48 Nm continuous torque at 1.6–1.7 kg. I was the sole designer, using topology optimization and FEM.",
    url: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
  },
  {
    title: "12-DOF quadruped",
    img: "/projects/quadruped.webp",
    badge: "MSc thesis",
    desc: "A topology-optimized quadruped driven by these actuators. I designed it on my own, and two prototypes were built and tested in gait experiments.",
    url: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
  },
  {
    title: "CoEx lower-body exoskeleton",
    img: "/projects/coex.webp",
    badge: "Patent",
    desc: "A TÜBİTAK project I worked on from the start: limb design, series elastic actuator verification, FEM and manufacturing follow-up. I'm a co-inventor on a granted US and European patent for a wearable lower extremity exoskeleton.",
    url: "https://patents.google.com/patent/US12521298B2",
  },
];

export type Entry = { title: string; when: string; where: string; text?: string };

export const EXPERIENCE: Entry[] = [
  {
    title: "PhD Researcher in Bioengineering and Robotics",
    when: "Nov 2023 – present",
    where: "Istituto Italiano di Tecnologia (IIT), Dynamic Legged Systems lab, Genova",
    text: "Load-based variable transmission for the knee joint, hydraulic power unit integration on HyQReal2, and experiments, system integration and maintenance on HyQReal, including the INAIL project.",
  },
  {
    title: "Research Fellow in Mechanical Engineering",
    when: "Feb 2023 – Nov 2023",
    where: "Istituto Italiano di Tecnologia (IIT), Dynamic Legged Systems lab, Genova",
    text: "Mechanical design of the carpal-claw and testing on Unitree Aliengo, and simulations for a study of quadruped body height on stairs.",
  },
  {
    title: "Research and Design Engineer",
    when: "Apr 2021 – Nov 2022",
    where: "Özyeğin University, Biomechatronics Lab, Istanbul",
    text: "Additively manufactured actuator unit and quadruped prototype using composite materials, with FEM, quality control and experiments.",
  },
  {
    title: "Research Engineer, CAD Design and Optimization",
    when: "Apr 2020 – Apr 2021",
    where: "Özyeğin University, Biomechatronics Lab, Istanbul",
    text: "Sole designer of a compact quadruped actuator (48 Nm continuous at 1.6–1.7 kg) and a topology-optimized 12-DOF quadruped.",
  },
  {
    title: "Lab and Teaching Assistant; earlier Lab Assistant, Mechanical Design",
    when: "Jun 2018 – Apr 2020",
    where: "Özyeğin University, Biomechatronics Lab, Istanbul",
    text: "CoEx lower-body exoskeleton from the start of the project, series elastic actuator spring design, and teaching assistance for CS-100 and mathematics courses.",
  },
  {
    title: "Engineering internships",
    when: "2015 – 2017",
    where: "Istanbul",
    text: "Anadolu Isuzu (manufacturing engineering), Çiftel Elektromekanik (quality control), Özdemir Vargel (CNC operation).",
  },
];

export const EDUCATION: Entry[] = [
  {
    title: "PhD, Bioengineering and Robotics",
    when: "Nov 2023 – present",
    where: "Istituto Italiano di Tecnologia / University of Genova",
    text: "Thesis (working title): Design of the Next Generation Quadruped Robots.",
  },
  {
    title: "MSc, Mechanical Engineering",
    when: "Sep 2019 – Aug 2022",
    where: "Özyeğin University, Istanbul",
    text: "Thesis: Design, development, and real-life implementation of a high power quadruped robot. Supervisors: Ramazan Ünal and Barkan Uğurlu. 100% merit scholarship, Özyeğin merit grant, TÜBİTAK grant.",
  },
  {
    title: "BSc, Mechanical Engineering",
    when: "Sep 2013 – Aug 2018",
    where: "Özyeğin University, Istanbul",
    text: "50% merit scholarship.",
  },
];

export const SKILLS = [
  "Siemens NX", "CATIA", "SolidWorks", "Autodesk Inventor", "GD&T drawings",
  "Ansys", "Abaqus", "ANSA-META", "MSC Adams", "MATLAB",
  "Topology optimization", "Additive manufacturing", "Composite materials", "NI LabVIEW", "ROS / ROS 2",
];

export const LANGUAGES = "Turkish (native), English (fluent), German (A2–B1), Italian (A2)";

export const OUTSIDE_THE_LAB =
  "Basketball (licensed player, 2011–2013), sailing (1-star licence) and Wing Chun, which I teach as a self-defence instructor.";
