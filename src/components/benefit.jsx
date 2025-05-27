import { benefits } from "../constants"
import Heading from "./heading"
import Section from "./section"

const Benefit = () => {
  return (
    <Section id="feaures">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {
            benefits?.map(
              (benefit, index) => (
                <div key={benefit.id || index}>
                  <div>
                    <h5>{benefit.title}</h5>
                  </div>
                </div>
            ))
          }
        </div>
      </div>

    </Section>
  )
}

export default Benefit