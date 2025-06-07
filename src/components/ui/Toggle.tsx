'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BodyLargeEn } from './Typography';

const Toggle = () => {
  const [isKorean, setIsKorean] = useState(true);

  const handleToggle = () => {
    setIsKorean(!isKorean);
  };

  return (
    <div className="relative cursor-pointer" onClick={handleToggle}>
      <div className="w-[120px] h-[43px] flex justify-between items-center px-[12px] border-[1px] rounded-[40px] border-white bg-black text-white">
        <BodyLargeEn className="text-white">KR</BodyLargeEn>
        <BodyLargeEn className="text-white">EN</BodyLargeEn>
      </div>

      <motion.div
        className="absolute top-0 w-[63px] h-[43px] flex justify-center items-center text-center border-[1px] rounded-[40px] border-black bg-white text-black"
        animate={{
          x: isKorean ? 0 : 57,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <BodyLargeEn>{isKorean ? 'KR' : 'EN'}</BodyLargeEn>
      </motion.div>
    </div>
  );
};

export default Toggle;
