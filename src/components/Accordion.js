import React, { useState } from "react";
import AccordionPane from "./AccordionPane";

const Accordion = ({ data, openMultiple = false }) => {
  const [selecctedItemIndex, setSelectedItemIndex] = useState(-1);
  const [selectedIndexes, setSelectedIndexes] = useState(
    Array(data.length).fill(false)
  );

  const setSelectedItemIndexHandle = (index) => {
    if (selecctedItemIndex === index) {
      setSelectedItemIndex(-1);
      return;
    }
    setSelectedItemIndex(index);
  };

  const setSelectedIndexesHandle = (index) => {
    setSelectedIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = !newIndexes[index];
      return newIndexes;
    });
  };

  return (
    <div>
      <div className=" text-white text-2xl mb-2 pl-0">
        Frequently Asked Questions
      </div>
      {data.map((item, index) => {
        return (
          <AccordionPane
            title={item.question}
            content={item.answer}
            isOpen={
              openMultiple
                ? selectedIndexes[index]
                : selecctedItemIndex === index
            }
            setSelectedItemIndexHandle={
              openMultiple
                ? () => setSelectedIndexesHandle(index)
                : () => setSelectedItemIndexHandle(index)
            }
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
