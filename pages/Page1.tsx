import {Imagie} from "../src/components/Imagie"
import Paragraph from "../src/components/Paragraph"
import Title from "../src/components/Title"

function Page1(){
  return <>
    <Title  title="My first Blog" date="20 nov 2026"/>
    <Paragraph> under test 
    </Paragraph>

    <Imagie src="../images/20_nov_26.png" alt="only if it works" />
  </>
}

export default Page1