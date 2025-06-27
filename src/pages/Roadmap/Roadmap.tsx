import Subject from "../../components/Subject"
import { title } from "../../constant/roadmap"
import Steps from "./components/steps"

export default function Roadmap() {
  return (
    <>
      <Subject item={title} />
      <div className="mt-[10px] md:mt-[20px]">
        <Steps />
      </div>
    </>
  )
}
