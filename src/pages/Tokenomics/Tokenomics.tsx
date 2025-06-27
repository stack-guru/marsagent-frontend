import { title } from "../../constant/tokenomics";
import Subject from "../../components/Subject";
import tokenomicsImg from "@/assets/tokenomics.png";

export default function Tokenomics() {
    return (
        <>
            <Subject item={title} />
            <img
                data-aos="fade-up"
                data-aos-delay="200"
                src={tokenomicsImg}
                alt="Tokenomics"
                className="w-full rounded-2xl object-cover mt-8"
            />
        </>
    );
}
