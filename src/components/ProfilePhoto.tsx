"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/assets/profileImage.png";

const ProfilePhoto = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[298px] h-[298px] md:w-[498px] md:h-[498px] mix-blend-lighten absolute"
        >

          <Image
            src={profilePic}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] h-[300px]  md:w-[506px] md:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="280"
            cy="280" 
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 3601],
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;