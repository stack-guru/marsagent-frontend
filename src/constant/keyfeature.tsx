import { SubjectProps } from "../types";
import { FaLink, FaRobot, FaBrain, FaVoteYea, FaFire } from "react-icons/fa";

export const features = [
    {
        title: "AI Integration",
        description: "Marsagent (MRAI) powers seamless interaction between smart contracts and off-chain AI models. It allows intelligent automation, decision-making, and execution based on real-world data, making blockchain applications smarter.",
        icon: <FaLink className="text-theme" size={"32"}/>
    },
    {
        title: "Smart Contract Automation",
        description: "MRAI supports automated workflows triggered by AI agents. These smart contracts can perform actions like minting, rewards, and decision logic without manual input, enabling autonomous Web3 operations.",
        icon: <FaRobot className="text-theme" size={"32"}/>
    },
    {
        title: "Agent Rewards & Incentives",
        description: "AI agents that execute tasks using MRAI can earn token rewards. The protocol includes a built-in incentive mechanism, such as minting 3% of remaining supply as a reward to approved agents that trigger actions.",
        icon: <FaBrain className="text-theme" size={"32"}/>
    },
    {
        title: "DAO Governance",
        description: "Holders of MRAI can vote on proposals, protocol upgrades, and future AI logic changes. This community-driven governance empowers users to shape the direction of the ecosystem collectively.",
        icon: <FaVoteYea className="text-theme" size={"32"}/>
    },
    {
        title: "Transfer Burn Mechanism",
        description: "Each MRAI transfer automatically burns a small percentage (e.g., 2%) of the amount, reducing total supply over time. This deflationary feature adds scarcity and long-term value to the token.",
        icon: <FaFire className="text-theme" size={"32"}/>
    }
]


export const title: SubjectProps["item"] = {
    svg: (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="fa-light fa-user text-[14px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
        </svg>
    ),
    title: "All Service",
};