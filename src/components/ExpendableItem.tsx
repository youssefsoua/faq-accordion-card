import { useState } from "react";

interface IExpendableItemProps {
  question: string;
  answer: string;
  expanded?: boolean;
}

const ExpendableItem = (props: IExpendableItemProps) => {
  const { question, answer, expanded } = props;
  const [isExpanded, setIsExpanded] = useState(!!expanded);

  const onToggle = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div className="flex w-[100%] flex-col border-b border-light-grayish-blue py-4 ">
      <div
        className={`flex cursor-pointer flex-row items-center justify-between ${
          isExpanded ? "font-bold" : ""
        }`}
        onClick={onToggle}
      >
        <p className="text-[13px] text-very-dark-grayish-blue hover:text-soft-red sm:text-[14px]">
          {question}
        </p>
        <img
          src="./icon-arrow-down.svg"
          alt="arrow-down"
          className={`${isExpanded ? "rotate-180" : ""}`}
        />
      </div>
      {isExpanded && (
        <p className="pr-3 pt-2 text-dark-grayish-blue sm:text-[13px]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default ExpendableItem;
