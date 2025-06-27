import { SubjectProps } from "../types";

const title: SubjectProps["item"] = {
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
    title: "Roadmap",
};

const steps = [
    {
        title: "Phase 1: Foundation & Token Launch (Q2 2025)",
        description: [
            {
                stepTitle: "Smart Contract Development",
                stepDescription: "Launch upgradable ERC-20 contract with built-in features: AI action execution, transfer burn fee, and supply cap."
            },
            {
                stepTitle: "Tokenomics Finalization",
                stepDescription: "Define total supply, reward logic, burn mechanism, and DAO eligibility."
            },
            {
                stepTitle: "Initial Mint & Airdrop",
                stepDescription: "Mint 500M tokens for initial distribution, team, ecosystem, and community rewards."
            },
            {
                stepTitle: "Token Deployment",
                stepDescription: "Deploy on Ethereum mainnet with audit (planned via AssureDeFi or similar)."
            },
            {
                stepTitle: "Website & Branding",
                stepDescription: "Launch minimal official website, logo, docs, and social media."
            },
        ]
    },
    {
        title: "Phase 2: AI Integration & Ecosystem Expansion (Q3 2025)",
        description: [
            {
                stepTitle: "AI Agent Registry",
                stepDescription: "Allow owner-approved AI agents to interact with smart contracts (on-chain logging, auto rewards)."
            },
            {
                stepTitle: "AI Action Logging",
                stepDescription: "Every execution logs metadata: agent, timestamp, command, and payload."
            },
            {
                stepTitle: "Early Ecosystem Grants",
                stepDescription: "Fund small AI-related projects that integrate MRAI."
            },
            {
                stepTitle: "Developer SDKs",
                stepDescription: "Launch TypeScript SDK for agent interaction and execution."
            },
            {
                stepTitle: "Listing on Aggregators",
                stepDescription: "Add token to CoinGecko, CoinMarketCap, and token explorers. "
            },
        ]
    },
    {
        title: "Phase 3: AI Platform Launch & Utility Boost (Q4 2025)",
        description: [
            {
                stepTitle: "AI Smart Services",
                stepDescription: "MRAI powers AI Prediction Markets where agents stake tokens on forecasts, Auto-Executor Bots that automate DeFi strategies using AI signals, and an AI Marketplace offering fine-tuned models and on-chain agent services."
            },
            {
                stepTitle: "MRAI Access Layer",
                stepDescription: "Token-gated access to smart contracts and off-chain APIs."
            },
            {
                stepTitle: "Token Holder Dashboard",
                stepDescription: "Show rewards, execution logs, governance proposals, and usage stats."
            }
        ]
    },
    {
        title: "Phase 4: DAO & Governance Launch (Q1 2026)",
        description: [
            {
                stepTitle: "On-Chain Proposals",
                stepDescription: "Token holders can submit actions: approve agents, fund AI tools, change burn rate etc."
            },
            {
                stepTitle: "Snapshot Voting Support",
                stepDescription: "Integrate off-chain voting snapshot tools."
            },
            {
                stepTitle: "Agent Incentive Voting",
                stepDescription: "Let community vote to increase/decrease rewards for top agents."
            }
        ]
    },
    {
        title: "Phase 5: Cross-Chain Expansion & Scaling (Q2 2026 and beyond)",
        description: [
            {
                stepTitle: "Bridge to L2s/Solana",
                stepDescription: "Launch wrapped MRAI (e.g. wMRAI) on Arbitrum, Base, and Solana (SPL2022) via Wormhole."
            },
            {
                stepTitle: "AI Cross-Chain Relayers",
                stepDescription: "Allow AI agents to act across EVM and Solana ecosystems."
            },
            {
                stepTitle: "AI Research Collaborations",
                stepDescription: "Partner with AI protocols and Web3 labs to build open-source models powered by MRAI."
            }
        ]
    }
];

export { title, steps };
