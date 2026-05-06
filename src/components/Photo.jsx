"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import photo from "../app/assets/io.png"

const Photo = () => {
  return (
    <div className="w-full  ">
      <motion.div
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2.4 ,duration:0.4,ease:"easeInOut"}
      }}
      
      >
        <div className=" mt-2 w-[298px] h-[285px] xl:w-[498px] xl:h-[488px] absolute ">
          <Image
            src={photo}
            alt="image"
            fill
            priority
            className="object-contain rounded-full "
           
          />
        </div>
      </motion.div>

      <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] z-80" fill="transparent" viewBox={"0 0 506 506"} xmlns="http://www.w3.org/2000/svg">
        <motion.circle
  cx="253"
  cy="253"
  r="250"
  stroke="#00ff99"
  strokeWidth="4"
  strokeLinecap="round"
  strokeLinejoin="round"
  initial={{ strokeDasharray: "24 10 0 0" }}
  animate={{
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
    rotate: [120, 360],
  }}
  transition={{
    duration:20,
    repeat:Infinity,
    repeatType:"reverse"
  }}
/>
      </motion.svg>
    </div> 
  )
}

export default Photo