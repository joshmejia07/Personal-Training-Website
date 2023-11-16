import { IoScaleOutline, IoNutritionOutline } from "react-icons/io5"
import { IoIosFitness, IoIosBody, IoMdHeart } from "react-icons/io"
import { TbStretching } from "react-icons/tb"
import { GiHealthNormal } from "react-icons/gi"

export default function ProgramIcons({ name }) {
  switch (name) {
    case "Total Wellness":
    case "Total Muscle":
    case "Total Weight Loss":
      return (
        <div className="feature-container">
          <div className="feature">
            <IoIosFitness className="program-icons" />
            <p>Build muscle</p>
          </div>
          <div className="feature">
            <IoScaleOutline className="program-icons" />
            <p>Lose unwanted fat</p>
          </div>
          <div className="feature">
            <IoNutritionOutline className="program-icons" />
            <p>Eat Clean</p>
          </div>
          <div className="feature">
            <TbStretching className="program-icons" />
            <p>Improve mobility</p>
          </div>
        </div>
      )
    case "Total Nutrition":
      return (
        <div className="feature-container">
          <div className="feature">
            <IoScaleOutline className="program-icons" />
            <p>Lose unwanted fat</p>
          </div>
          <div className="feature">
            <IoNutritionOutline className="program-icons" />
            <p>Eat Clean</p>
          </div>
          <div className="feature">
            <IoIosFitness className="program-icons" />
            <p>Build muscle</p>
          </div>
        </div>
      )
    case "Total Recovery":
      return (
        <div className="feature-container">
          <div className="feature">
            <TbStretching className="program-icons" />
            <p>Improve mobility</p>
          </div>
          <div className="feature">
            <GiHealthNormal className="program-icons" />
            <p>Decrease risk of injury</p>
          </div>
          <div className="feature">
            <IoMdHeart className="program-icons" />
            <p>Improve blood flow</p>
          </div>
          <div className="feature">
            <IoIosBody className="program-icons" />
            <p>Relieve soreness</p>
          </div>
        </div>
      )
    default:
      return null
  }
}
