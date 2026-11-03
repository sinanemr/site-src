// All the text on the website lives in this file.
// Every fact here matches Sinan's CVs (see the CV project). Change facts there first, then here.

export const PROFILE = {
  name: "Sinan Emre",
  shortName: "Sinan",
  headline: "PhD Student",
  where: "PhD student at Dynamic Legged Systems – Istituto Italiano di Tecnologia, Genova, Italy",
  // One string per paragraph: where I am now, Özyeğin years, IIT years, what my research focuses on.
  intro: [
    "I'm a PhD student at the Istituto Italiano di Tecnologia (IIT) in Genova, where I work in the Dynamic Legged Systems (DLS) lab " +
      "led by Claudio Semini.",
    "I studied Mechanical Engineering at Özyeğin University in Istanbul. Toward the end of my BSc in 2018, I joined the university's " +
      "Biomechatronics Lab as a Lab Assistant in mechanical design, where I worked on the CoEx lower-body exoskeleton from the very start " +
      "of the project, designing its limbs and working on its series elastic actuators. When I began my MSc in 2019, I continued working " +
      "in the lab alongside my studies, first as a Lab and Teaching Assistant, then as a Research Engineer in CAD Design and Optimization, " +
      "and finally as a Research and Design Engineer. During these years, I designed compact actuators and quadruped robot prototypes, " +
      "and studied how additive manufacturing with composite materials could be applied to both. This work also became my MSc thesis, " +
      "supervised by Ramazan Ünal and Barkan Uğurlu.",
    "In 2023, I moved to IIT as a Research Fellow in the DLS lab, where I designed a carpal-claw mechanism that helps quadruped robots " +
      "get over high obstacles. In November 2023, I began my PhD in Bioengineering and Robotics at IIT and the University of Genova. " +
      "Since then, I have been working on a load-based variable transmission for the knee joint and on integrating a compact hydraulic " +
      "power unit into the HyQReal2 quadruped. I expect to complete my PhD in early 2027.",
    "My research focuses on the mechanical design of legged robots and their actuation technologies. I study electric and hydraulic " +
      "actuation for quadruped robots, looking at how actuators and power units can be made more compact while still delivering high " +
      "torque and power. I also study leg mechanisms, such as variable transmissions and elastic elements, that change how a leg uses " +
      "the power of its actuators and help the robot handle heavier loads and more demanding terrain.",
  ],
  status: "Finishing my PhD in early 2027. Open to postdoc and R&D positions from February 2027.",
  email: "sinanemre94@gmail.com",
  scholar: "https://scholar.google.com/citations?user=wjPPl1AAAAAJ",
  linkedin: "https://www.linkedin.com/in/sinan-emre-04888694",
  cvResearch: "/Sinan_Emre_CV_Academic.pdf",
  cvIndustry: "/Sinan_Emre_CV.pdf",
};

// Places that become links wherever their name appears in the intro, the line under your name and the CV page.
// Only the first mention in each block of text is linked. Add a place by adding a line here.
export const PLACES = [
  { name: "Dynamic Legged Systems", url: "https://dls.iit.it" },
  { name: "Istituto Italiano di Tecnologia", url: "https://www.iit.it" },
  { name: "University of Genova", url: "https://unige.it/en" },
  { name: "Özyeğin University", url: "https://www.ozyegin.edu.tr/en" },
];

// News on the home page. Put the newest item at the top.
// `date` is free text ("Mar 2026", "2026", "12 Mar 2026"). `link` and `linkText` are optional.
export type NewsItem = { date: string; text: string; link?: string; linkText?: string };

export const NEWS: NewsItem[] = [
  {
    date: "2026",
    text: "Paper at AIM 2026: a compact hydraulic power unit integrated on the HyQReal2 quadruped.",
  },
  {
    date: "2025",
    text: "Paper at ICAR 2025: a load-based variable transmission for quadruped knees.",
    link: "https://arxiv.org/abs/2512.15448",
    linkText: "Paper",
  },
];

export type Project = {
  title: string;
  img: string;      // square tile in the card (picture, GIF or .mp4), from public/projects/
  full?: string;    // optional uncropped version shown when the mouse is over the tile; defaults to img
  badge?: string;
  desc: string;
  url: string;
  featured?: boolean;
};

export const PROJECTS_IIT: Project[] = [
  {
    title: "Compact hydraulic power unit",
    img: "/projects/hpu-photo.webp",
    full: "/projects/hpu-full.webp",
    badge: "AIM 2026",
    desc: "I simulated and tested a compact hydraulic power unit and integrated it on the HyQReal2 hydraulic quadruped.",
    url: "https://doi.org/10.1109/AIM65483.2026.11658164",
    featured: true,
  },
  {
    title: "Load-based variable transmission",
    img: "/projects/lbvt-diagram.webp",
    badge: "ICAR 2025",
    desc: "A passive knee mechanism with pre-tensioned torsional springs and a four-bar linkage. Under load it raises the transmission ratio by up to 40% in simulation. I built a 3D-printed prototype.",
    url: "https://doi.org/10.1109/ICAR65334.2025.11338631",
    featured: true,
  },
  {
    title: "Carpal-claw",
    img: "/projects/carpal-claw-video.gif",
    badge: "ICRA 2024",
    desc: "A mechanism that helps quadruped robots get over high obstacles. I did the mechanical design and tested it on Unitree Aliengo.",
    url: "https://sites.google.com/view/carpal-claw",
    featured: true,
  },
  {
    title: "Stair-climbing charts",
    img: "/projects/stairs-diagram.webp",
    full: "/projects/stairs-full.webp",
    badge: "CLAWAR 2023",
    desc: "What body height should a quadruped keep when it walks on stairs? I built the simulations for this study.",
    url: "https://doi.org/10.1007/978-3-031-47269-5_24",
  },
];

export const PROJECTS_OZU: Project[] = [
  {
    title: "Compact actuator for quadrupeds",
    img: "/projects/actuator.webp",
    badge: "ACTUATOR 2022",
    desc: "48 Nm continuous torque at 1.6–1.7 kg. I was the sole designer, using topology optimization and FEM.",
    url: "https://ieeexplore.ieee.org/document/9899230", // ACTUATOR 2022 has no DOI; this is its IEEE Xplore page
  },
  {
    title: "12-DOF quadruped",
    img: "/projects/quadruped.webp",
    badge: "MSc thesis",
    desc: "A topology-optimized quadruped driven by these actuators. I designed it on my own, and two prototypes were built and tested in gait experiments.",
    url: "https://hdl.handle.net/10679/8061", // MSc thesis in the Özyeğin repository (theses have no DOI)
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
