"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 7543967429",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vijaydas0078@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bangalore, Karnataka",
  },
];

const Contact = () => {
  const router = useRouter();

  const formEndPoint = "https://getform.io/f/amdponxb"
  const [clientData, setClientData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClientData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: ''
    });

    // Redirect the user to home
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center md:items-start">
          <div className="md:w-[50%] order-2 md:order-none flex justify-center">
            {/* form */}
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] w-full max-w-md rounded-lg"
          action={formEndPoint}
          method="POST"
    >
      <h3 className="text-4xl text-accent bg-[#27272c]">Let's work together!</h3>
      {/* input*/}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 bg-[#27272c]">
      <input type="hidden" name="_gotcha" style={{display:"none !important"}} /> 
        <Input 
          type="text"
          placeholder="firstName" 
          id="firstname" 
          name="firstname" 
          value={clientData.firstname} 
          onChange={handleChange} 
        />
        <Input 
          type="text"
          placeholder="lastName" 
          id="lastname" 
          name="lastname" 
          value={clientData.lastname}
          onChange={handleChange} 
        />
        <Input 
          type="email"
          placeholder="EmailAddress" 
          id="email" 
          name="email" 
          value={clientData.email}
          onChange={handleChange} 
        />
        <Input 
          type="text"
          placeholder="Phone Number" 
          id="phone" 
          name="phone" 
          value={clientData.phone}
          onChange={handleChange} 
        />
      </div>

      {/* TextArea */}
      <Textarea 
        className="h-[200px]" 
        placeholder="Type your message here!" 
        id="message" 
        name="message" 
        value={clientData.message} 
        onChange={handleChange} 
      />

      {/* submit btn */}
      <Button size="lg" className="max-w-40 text-black/60" onClick={handleClick}>
        Send message
      </Button>
    </form>
          </div>
          {/* info */}
          {/* <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
      <ul className="flex flex-col gap-10">
        {info.map((item, index)=>{
          return <li key={index} className="flex items-center gap-6">
              <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] items-center justify-center rounded-md">
                {/* <div className="text-[28px] bg-[#27272c] text-accent">{item.icon}</div> */}
          {/* </div>
              <div className="flex-1">
                <p className="text-white/60"> {item.title}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
          </li>
        })}
      </ul> */}
          {/* </div>  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
