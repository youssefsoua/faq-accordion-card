import ExpendableItem from "./components/ExpendableItem";

type Question = {
  question: string;
  answer: string;
  expanded: boolean;
};

const questionsList: Question[] = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    expanded: false,
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    expanded: true,
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    expanded: false,
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
    expanded: false,
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    expanded: false,
  },
];

const App = () => {
  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-3xl bg-white px-6 py-10 sm:w-2/3 sm:flex-row sm:overflow-hidden sm:py-20">
      <div className="relative flex h-20 w-[100%] justify-center sm:h-[100%]">
        <img
          src="./illustration-woman-online-mobile.svg"
          alt="LOGO"
          className="absolute mt-[-9.25rem] w-60 sm:hidden"
        />
        <img
          src="./bg-pattern-mobile.svg"
          alt="LOGO"
          className="absolute mt-[-2.5rem] w-60 sm:hidden"
        />
      </div>
      <div className="flex w-[100%] flex-col py-2 sm:px-16 sm:py-0">
        <h1 className="text-center text-3xl font-bold text-very-dark-desaturated-blue sm:text-left sm:text-4xl">
          FAQ
        </h1>
        <div className="w-[100%] p-1 sm:px-0 sm:py-4">
          {questionsList.map((question) => (
            <ExpendableItem {...question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
