import SectionDescription from "../../components/SectionDescription";
import Subject from "../../components/Subject";
import { description, title } from "../../constant/contact";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
    <Subject item={title} />
    <SectionDescription item={description} />
    <ContactForm />
    </>
  )
}
