import React from "react";

const AccordionPane = ({
  title,
  content,
  isOpen,
  setSelectedItemIndexHandle,
}) => {
  return (
    <>
      <div
        className="bg-gray-800 text-white mb-[1px] min-h-12 px-2 py-6 relative hover:bg-slate-600 text-2xl"
        onClick={setSelectedItemIndexHandle}
      >
        {title}
        <span className="text-white absolute top-0 end-4">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="bg-slate-200   text-black py-[1px] pl-[1px] min-h-12">
          {content}
        </div>
      )}
    </>
  );
};

export default AccordionPane;
