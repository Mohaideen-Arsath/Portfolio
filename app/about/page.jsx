"use client";
import { FaPython, FaJava } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiMysql, SiExpress } from 'react-icons/si';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,

} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "Pursuing my final year of B.Tech in Computer Science and Business Systems at Sri Eshwar College of Engineering, Coimbatore, I am adept at creatively solving problems and developing efficient software solutions. My commitment to collaboration and professional growth drives me to make a significant impact through my work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohaideen Arsath",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7558101911",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Projects",
    },
    {
      fieldName: "Email",
      fieldValue: "mohaideenarsath16@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil",
    },
  ],
};

// experience data
const Internship = {
  icon: "/assets/about/badge.svg",
  title: "Internship",
  items: [
    {
      company: "Trained in MERN Stack at Channel B.Tech, with hands-on experience in MongoDB, Express.js, React.js, and Node.js.",
      position: "MERN Stack",
      duration: "Channel B.Tech",
    },
    {
      company: "At PNt Academy,I gained hands-on skills in data science, data cleaning, algorithm selection,and Power BI dashboards.",
      position: "Data Science",
      duration: "PNT Academy",
    },
  ],
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "Tansri Ubaidulla Matriculation Higher Secoundary School.",
      degree: "85.6%",
      duration: "SSLC - 2019",
    },
    {
      institution: "Tansri Ubaidulla Matriculation Higher Secoundary School.",
      degree: "88.6%",
      duration: "HSC - 2021",
    },
    {
      institution: "Sri Eshwar College Of Engineering.",
      degree: "8.26*",
      duration: "2021 - 2025",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiMysql />,
      name: "sql",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto xl:h-[564px]">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="Internship">Internship</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* experience */}
            <TabsContent value="Internship" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Internship.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Internship.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Internship.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[11px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
