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
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
        }}
      >
        <div className="w-[298px] h-[298px] md:w-[498px] md:h-[498px] mix-blend-lighten">
          <Image
            src={profilePic}
            priority
            quality={100}
            fill
            alt="Profile picture"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;