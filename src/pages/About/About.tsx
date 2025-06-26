import SectionDescription from '../../components/SectionDescription'
import { description } from '../../constant/about'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import PersonalInfo from './components/PersonalInfo'

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-[20px]">
      <AboutMe />
      <div className="col-span-12 lg:col-span-8">
        <SectionDescription item={description} wide={true}/>
        <PersonalInfo />
        <Experience />
        <Education />
      </div>
    </div>
  )
}
