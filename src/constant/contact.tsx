import { SectionDescriptionProps, SubjectProps } from "../types";

const title: SubjectProps["item"] = {
  svg: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="fa-light fa-user text-[14px] text-white"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
    </svg>
  ),
  title: "Contact",
};

const description: SectionDescriptionProps["item"] = {
  first_text: "LET’S DISCUSS ABOUT",
  second_text: "AN",
  third_text: "PROJECT!",
  description:
    "The imperative for integrated, expansive, and seamless digital experiences is fueling software product design and development across organizations at an unprecedented scale. These demands require capabilities to imagine, build, and run digital products and services for new and existing.",
};

export { title, description };
