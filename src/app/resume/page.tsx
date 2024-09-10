"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const about = {
  title: "About me",
  description:
    "Fullstack developer with over 2 years of experience specializing in Java, Spring boot, React, NextJs, tailwind etc. development. Led cross- functional teams of up to 10 members in delivering scalable solutions, resulting in a 60% improvement in application performance. Committed to continuous improvement, staying updated with the latest technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vijay Das",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7543967429",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Email",
      fieldValue: "vijaydas0078@gmail.com",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Fullstack developer with over 2 years of experience specializing in Java, Spring boot, React, NextJs, tailwind etc. development. Led cross- functional teams of up to 10 members in delivering scalable solutions, resulting in a 60% improvement in application performance. Committed to continuous improvement, staying updated with the latest technologies.",
  items: [
    {
      Company: "Allstate India Solution pvt. ltd.",
      Position: "Software Engineer 1",
      Duration: "Mar, 2024 - Present",
    },
    {
      Company: "Allstate India Solution pvt. ltd.",
      Position: "Associate Engineer",
      Duration: "Aug, 2022 - Mar, 2024",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description: "",
  items: [
    {
      Institute: "Chandigarh University, Punjab",
      Degree: "B.tech in Information Technology",
      Duration: "Mar, 2018 - May, 2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "description",
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
      name: "JavaScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
  ],
};


const Resume = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2, duration: 0.4, ease: "easeIn" }
    }}
    className="min-h[80vh] flex items-center justify-center py-12 md:py-0"
  >
    <div className="container mx-auto">
      <Tabs
        defaultValue="experience"
        className="flex flex-col md:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="w-full min-h[60vh]">

          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 
                                rounded-xl flex flex-col justify-center 
                                items-center md:items-start gap-1"
                    >
                      <span className="text-accent bg-[#232329]">{item.Duration}</span>
                      <h3 className="text-xl max-w-[260px] max-h-[60] text-center md:text-left bg-[#232329]">{item.Position}</h3>
                      <div className="bg-[#232329] flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <p className="bg-[#232329] text-white/60">{item.Company}</p>
                      </div>

                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 
                                rounded-xl flex flex-col justify-center 
                                items-center md:items-start gap-1"
                    >
                      <span className="text-accent bg-[#232329]">{item.Duration}</span>
                      <h3 className="text-xl max-w-[260px] max-h-[60] text-center md:text-left bg-[#232329]">{item.Degree}</h3>
                      <div className="bg-[#232329] flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <p className="bg-[#232329] text-white/60">{item.Institute}</p>
                      </div>

                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 md:gap-[30px] gap-4">
                {skills.skillList.map((item, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl group flex justify-center items-center group-hover:text-accent hover:bg-accent transition-all duration-300">
                          <div className="text-6xl">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-2xl capitalize">{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          {/* about */}
          <TabsContent value="about" className="w-full text-center lg:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px mx-auto md:mx-0 text-white/60]">{about.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0">
                    {about.info.map((item, index)=>{
                      return<li key={index} className="flex items-center justify-center md:justify-start gap-4 ">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
