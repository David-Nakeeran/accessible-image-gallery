import { AnimatePresence, motion } from "motion/react";

export const Thumbnails = ({
  apiData,
  handleClick,
  isVisible,
  handleVisibilityClick,
}) => {
  const imgElements = apiData.map((element) => {
    return (
      <img
        className="w-[30%] focus:outline-2 focus:outline-offset-none focus:outline-[#d1b3ff]"
        role="button"
        tabIndex="0"
        key={element.id}
        src={element.urls.thumb}
        alt={element.alt_description}
        onClick={() => handleClick(element.id)}
        onKeyDown={(e) => (e.key === "Enter" ? handleClick(element.id) : null)}
      />
    );
  });
  return (
    <>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.section
            className="thumbnail-container flex w-[50%] overflow-x-scroll gap-3 bg-[#00000098] mb-15 md:w-[30%] md:mb-13 lg:w-[20%]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="imgs"
          >
            {imgElements}
          </motion.section>
        ) : null}
      </AnimatePresence>
      <button
        className="thumbnail-button mb-2 bg-[#00000098] hover:bg-[#1a1a2e] rounded-md p-2 font-medium text-lg cursor-pointer text-purple-400 hover:text-purple-500 md:mt-2"
        onClick={() => handleVisibilityClick()}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </>
  );
};
