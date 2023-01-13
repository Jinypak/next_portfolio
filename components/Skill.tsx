import React from "react";
import { motion } from "framer-motion";

type Props = {
};

function Skill({}: Props) {
    return (
      <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
                x: -200
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://avatars.githubusercontent.com/u/79570234?v=4"
            className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-black opacity-100">
                      100%
                  </p>
              </div>
          </div>
      </div>
    );
}

export default Skill;