import { useState } from "react"
import { benefits } from "../constants"
import Heading from "./heading"
import Section from "./section"
import Arrow from "../../assets/svg/Arrow"
import { GradientLight } from "../design/Gradient"
import ClipPath from "../../assets/svg/ClipPath"

const Benefit = () => {

  // const [collapsing, setCollapsing] = useState(false)

  // const handleCollapse = () => {
  //   setCollapsing(!collapsing)
  // }

  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl text-center rounded-lg bg-n-7 px-3 background-blur-lg"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {
            benefits?.map(
              (benefit, index) => (
                  <div
                    className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                    style={{ backgroundImage : `url(${benefit.backgroundUrl})` }}
                    key={benefit.id || index}>
                    <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem] pointer-events-none">
                      <h5 className="h5 mb-5">{benefit.title}</h5>
                      <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                      <div className="flex items-center mt-auto">
                        <img
                          src={benefit.iconUrl}
                          height={48}
                          width={48}
                          alt={benefit.title}
                          />
                        <p className="ml-auto text-sm font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                        <Arrow />
                      </div>
                    </div>
                  {
                    benefit.light && <GradientLight/>
                  }
                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{
                      clipPath : "url(#benefits)"
                    }}>
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-10">
                        {
                          benefit.imageUrl && (
                            <img
                              src={benefit.imageUrl}
                              width={380}
                              height={362}
                              alt={benefit.text}
                              className="w-full h-full object-cover"
                            />
                          )
                        }
                      </div>
                  </div>
                  <ClipPath/>
                </div>
            ))
          }
          {/* <button onClick={handleCollapse} className="hidden lg:block">Expand</button> */}
        </div>
      </div>

    </Section>
  )
}

export default Benefit