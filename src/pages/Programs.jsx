import { IoScaleOutline, IoNutritionOutline } from "react-icons/io5"
import { IoIosFitness, IoIosBicycle, IoIosBody } from "react-icons/io"
import { TbStretching } from "react-icons/tb"

export default function Programs() {
  return (
    <section>
      <div className="program-container">
        <div>
          <h4 className="section-statement">Get started</h4>
          <h1 className="programs-title">Choose your program</h1>
          <hr className="left" />
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <IoScaleOutline className="icons" />
          <h4>weight loss</h4>
        </div>
        <div className="grid-item">
          <IoIosFitness className="icons" />
          <h4>Bodybuilding</h4>
        </div>
        <div className="grid-item">
          <IoIosBicycle className="icons" />
          <h4>Functional</h4>
        </div>
        <div className="grid-item">
          <IoIosBody className="icons" />
          <h4>Total Wellness</h4>
        </div>
        <div className="grid-item">
          <IoNutritionOutline className="icons" />
          <h4>Nutrition</h4>
        </div>
        <div className="grid-item">
          <TbStretching className="icons" />
          <h4>Stretching</h4>
        </div>
      </div>
    </section>
  )
}
