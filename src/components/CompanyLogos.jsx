import { companyLogos } from "../constants"

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className || ''}`}>
      <h5 className="tagline text-center mb-6 text-n-1/50">Helping people create beautiful xontent at</h5>
      <ul className="flex">
        {
          companyLogos.map(
            (companylogo, index) => (
              <li
                key={index}
                className="flex items-center justify-center flex-1 h-[8rem]">
                  <img
                    src={companylogo}
                    width={134}
                    height={28}
                    alt={companylogo}
                  />
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CompanyLogos