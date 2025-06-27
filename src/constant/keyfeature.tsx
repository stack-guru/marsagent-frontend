import { SubjectProps } from "../types";
import { FaLink, FaRobot, FaBrain, FaVoteYea, FaFire, FaCoins } from "react-icons/fa";

export const features = [
    {
        title: "AI Integration",
        description: "Marsagent (MRAI) powers seamless interaction between smart contracts and off-chain AI models. It allows intelligent automation, decision-making, and execution based on real-world data, making blockchain applications smarter.",
        icon: <FaLink className="text-theme" size={"32"} />
    },
    {
        title: "Smart Contract Automation",
        description: "MRAI supports automated workflows triggered by AI agents. These smart contracts can perform actions like minting, rewards, and decision logic without manual input, enabling autonomous Web3 operations.",
        icon: <FaRobot className="text-theme" size={"32"} />
    },
    {
        title: "Agent Rewards & Incentives",
        description: "AI agents that execute tasks using MRAI can earn token rewards. The protocol includes a built-in incentive mechanism, such as minting 3% of remaining supply as a reward to approved agents that trigger actions.",
        icon: <FaBrain className="text-theme" size={"32"} />
    },
    {
        title: "DAO Governance",
        description: "Holders of MRAI can vote on proposals, protocol upgrades, and future AI logic changes. This community-driven governance empowers users to shape the direction of the ecosystem collectively.",
        icon: <FaVoteYea className="text-theme" size={"32"} />
    },
    {
        title: "Transfer Burn Mechanism",
        description: "Each MRAI transfer automatically burns a small percentage (e.g., 2%) of the amount, reducing total supply over time. This deflationary feature adds scarcity and long-term value to the token.",
        icon: <FaFire className="text-theme" size={"32"} />
    }
]


export const title: SubjectProps["item"] = {
    svg: (
        <FaCoins />
    ),
    title: "Key features",
};