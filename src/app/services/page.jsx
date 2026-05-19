"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create modern, responsive, and high-performance web applications using React, Next.js, Node.js, MongoDB, and Tailwind CSS to deliver clean and user-friendly digital experiences.",
  },

  {
    num: "02",
    title: "Frontend Development",
    description:
      "I create interactive and visually appealing user interfaces using React, Next.js, Tailwind CSS, and TypeScript. My focus is on responsive layouts, smooth user experience, and clean component-based architecture.",
  },

  {
    num: "03",
    title: "Backend Development",
    description:
      "I develop secure and scalable backend systems using Node.js, Express.js, and MongoDB. From REST APIs to authentication and database management, I build efficient server-side applications for modern web platforms.",
  },

  {
    num: "04",
    title: "Video Editing",
    description:
      "I create engaging and professional video edits for social media, promotional content, reels, and personal branding. I focus on smooth transitions, clean cuts, motion effects, and visually appealing storytelling.",
  },

  {
    num: "05",
    title: "Photo Editing",
    description:
      "I provide creative and high-quality photo editing services including color correction, retouching, background editing, and social media content enhancement to create visually attractive designs.",
  },

  {
    num: "06",
    title: "Social Media Handling",
    description:
      "I manage social media content and branding by creating engaging posts, maintaining consistency, improving audience reach, and helping brands build a strong online presence across different platforms.",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl-py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {service.map((item, index) => {
            return (
              <div className="flex-1  flex flex-col justify-center items-center gap-6 group" key={index}>
                {/* top */}
                <div className="w-full flex justify-between items-center text-outline text-transparent group-hover:text-outline-hover">
                  <div className="text-5xl font-extrabold"> {item.num}</div>
                  <Link href={item.href ||"" }>
                    <BsArrowDownRight />
                  </Link>
                </div>

                {/*title */}
                <h2>{item.title}</h2>
                {/*description */}
                <p>{item.description}</p>
                 {/*Border */}
                 <div className="border-b border-white/20 w-full"></div>

              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
