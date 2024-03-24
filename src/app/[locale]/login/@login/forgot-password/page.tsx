"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <motion.div
        initial={"closed"}
        animate={"open"}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => {
            router.back();
          }}
        >{`<-`}</button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta id mollitia quis voluptate, magnam blanditiis optio delectus vitae ipsa natus deleniti fugiat doloribus et quidem praesentium alias voluptatibus accusamus?
      </motion.div>
    </div>
  );
};

export default Page;
