import { SectionDescriptionProps, SubjectProps } from "../types";
import { ServiceCardProps } from "../types/service";
import { FaTools, FaBrain, FaRobot, FaChartLine } from "react-icons/fa";

const title: SubjectProps["item"] = {
  svg: (
    <FaTools />
  ),
  title: "All Service",
};

const description: SectionDescriptionProps["item"] = {
  first_text: "ALL THE GENERAL SERVICES THAT",
  second_text: "I PROVIDE TO",
  third_text: "CLIENTS!",
  description:
    "The imperative for integrated, expansive, and seamless digital experiences is fueling software product design and development across organizations at an unprecedented scale. These demands require capabilities to imagine, build, and run digital products and services for new and existing.",
};

const services: ServiceCardProps["item"] = [
  {
    icon: (
      <FaChartLine size={56} className="text-theme" />
    ),
    title: "AI Prediction Markets",
    description:
      "Leverage the wisdom of decentralized AI agents to forecast crypto prices, market trends, or real-world events. Token holders can stake MRAI to submit predictions or vote on the most accurate AI models — rewarding precision with MRAI incentives.",
  },
  {
    icon: (
      <FaRobot size={56} className="text-theme" />
    ),
    title: "Autonomous Agent Execution",
    description:
      "Use MRAI to deploy and manage AI agents that execute on-chain tasks like auto-trading, liquidity balancing, or governance automation. Only MRAI holders can launch or authorize agents, giving them access to autonomous DeFi utilities.",
  },
  {
    icon: (
      <FaTools size={56} className="text-theme" />
    ),
    title: "AI-Powered Data Analytics Hub",
    description: "A decentralized data intelligence platform where AI models analyze blockchain data, user behavior, and project metrics. MRAI is required to run analysis tasks, access insights, or subscribe to custom AI dashboards for dApps and DAOs.",
  },
];

export { title, description, services };
