"use client";
import { Authorization } from "@/features/Authorization/Authorization";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { useState } from "react";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const AuthorizationPage: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-7xl">Регистрация </h1>
      <motion.div
        initial={"closed"}
        animate={"open"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Authorization />
      </motion.div>
    </div>
  );
};

export default AuthorizationPage;
