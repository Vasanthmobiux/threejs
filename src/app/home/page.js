"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "@/config/motion";
import state from "@/store";
import Custombutton from "@/components/custombutton";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LETS
                <br className="xl:block hidden" />
                DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-wd-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with brand-new 3D
                cusomization tool. <strong>Unleash your imagination</strong> and
                define your own style.{" "}
              </p>

              <Custombutton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyle={"w-fit px-4 py-2.5 font-bold text-xm"}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
