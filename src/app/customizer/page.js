"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "@/config/config";
import state from "@/store/index";
import { download } from "@/assests/download.png";
import { downloadCanvasToImage, reader } from "@/config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "@/config/constants";
import { fadeAnimation, slideAnimation } from "@/config/motion";
import {
  AIpicker,
  Colorpicker,
  Tab,
  FilePicker,
  Custombutton,
} from "@/components/index";
import CanvasModel from "../canvas/page";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTabs, setActiveEditorTabs] = useState("");
  const [activeFilterTabs, setActiveFilterTabs] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTabs) {
      case "colorpicker":
        return <Colorpicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return <AIpicker />;
      default:
        return null;
    }
  };
  const handleDecals = (result, type) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTabs[decalType.filterTab]) {
      handleActiveFilterTabs(decalType.filterTab);
    }
  };

  const handleActiveFilterTabs = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTabs[tabName];
        break;
      case "stylishShirt":
        state.isStylishTexture = !activeFilterTabs[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isStylishTexture = false;
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(result, type);
      setActiveEditorTabs("");
    });
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      setActiveEditorTabs(tab.name);
                    }}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 right-5 top-5"
            {...fadeAnimation}
          >
            <Custombutton
              type="filled"
              title="Go Back"
              handleClick={() => {
                state.intro = true;
              }}
              customStyle="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div {...slideAnimation("up")}>
            <div className="flex items-center min-h-screen">
              <div className="filtertabs-container tabs">
                {FilterTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    isFilterTabs
                    isActiveTabs=""
                    handleClick={() => {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
