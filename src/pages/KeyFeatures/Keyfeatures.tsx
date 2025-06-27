import { features, title } from "../../constant/keyfeature"
import Subject from "../../components/Subject"

export default function Keyfeatures() {
    return (
        <>
            <Subject item={title} />
            <div className="grid grid-rows-12 gap-4 mt-[10px] md:mt-[20px]">
                {
                    features.map((item, index) =>
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="group rounded-2xl bg-btn p-[30px]">
                                <div className="flex gap-2 items-center">
                                    {item.icon}
                                    <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                                        {item.title}
                                    </h2>
                                </div>
                                <p className="mt-[10px] text-text">{item.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}