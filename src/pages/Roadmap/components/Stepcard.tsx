import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// import { ExperienceProps } from "../../../types/about";
import { FaRocket } from "react-icons/fa";

const Stepcard: React.FC<any> = ({ item }) => {
    const { title, description } = item;

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>

            <h3
                className="text-[20px] font-medium text-white md:text-[25px] flex items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <FaRocket className="mr-3" size={16} /> 
                <span className="text-theme">{title}</span>
            </h3>

            {
                description.map((item: any, index: number) => <ul
                    className="list-disc ml-5 marker:text-white"
                    key={index + 10}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <li className="mt-1">
                        <p className="font-medium text-white">{item.stepTitle}</p>
                        <p className="text-text">{item.stepDescription}</p>
                    </li>
                </ul>
                )
            }
        </div>
    );
};

export default Stepcard;
