import wellness from "./assets/images/total-wellness.jpg"
import muscle from "./assets/images/total-muscle.jpg"
import weightLoss from "./assets/images/total-weight-loss.jpg"
import nutrition from "./assets/images/total-nutrition.jpg"
import recovery from "./assets/images/total-recovery.jpg"

const programData = [
  {
    id: 15,
    img: wellness,
    name: "Total Wellness",
    price: 99,
    experience: "Beginner to Intermediate",
    inPerson: true,
    category: "Program",
    quantity: 1,
    description:
      "The Total Wellness program is designed to educate clients on all levels of fitness and wellness while providing a comprehensive path towards healthy weight loss and strength attainment. The program includes strength training, cardiovascular training, nutrition and recovery systems.",
    perks: [
      "60 day fitness program",
      "Nutritional program",
      "Strength Training",
      "Stretching",
      "Recovery",
    ],
  },
  {
    id: 16,
    img: muscle,
    name: "Total Muscle",
    price: 99,
    experience: "Intermediate to Advanced",
    inPerson: true,
    category: "Program",
    quantity: 1,
    description:
      "Take your workouts to the next level and learn key concepts to build muscle quickly and effectively with Total Muscle. This program is aimed at those already possessing foundational knowledge in fitness but are looking to maximize their results. This program will focus on split isolation workouts, nutrition and recovery.",
    perks: [
      "60 day fitness program",
      "Nutritional program",
      "Strength Training",
      "Stretching",
      "Recovery",
    ],
  },
  {
    id: 17,
    img: weightLoss,
    name: "Total Weight Loss",
    price: 99,
    experience: "Beginner to Intermediate",
    inPerson: true,
    category: "Program",
    quantity: 1,
    description:
      "The most commonly asked question by fitness professionals is “how can I lose weight?”. Total weight loss answers this very question by addressing the root cause of unhealthy weight gain - lifestyle. In this program you will learn the fundamentals of healthy living that are practical and sustainable for long term weight management. ",
    perks: [
      "60 day fitness program",
      "Nutritional program",
      "Strength Training",
      "Stretching",
      "Recovery",
    ],
  },
  {
    id: 18,
    img: nutrition,
    name: "Total Nutrition",
    price: 99,
    category: "Program",
    experience: "Beginner to Intermediate",
    inPerson: false,
    quantity: 1,
    description:
      "Take a deep dive into the wonderful world of nutrition in this educational and stimulating program. Here, we will cover common pitfalls and misconceptions as well as delicious and simple recipes, grocery lists and supplements designed to take your energy levels and mood to an all time high. ",
    perks: [
      "60 day fitness program",
      "Nutritional program",
      "Strength Training",
      "Stretching",
      "Recovery",
    ],
  },
  {
    id: 19,
    img: recovery,
    name: "Total Recovery",
    price: 99,
    category: "Program",
    experience: "Beginner to Intermediate",
    inPerson: false,
    quantity: 1,
    description:
      "No matter who you are or what fitness level, recovery and maintenance of your body is a must. As humans we will inevitably encounter pain and soreness whether exercising or just living our lives. In this program you will learn how to properly use stretching, foam rolling, lacrosse ball and massage gun to prevent injury, keep you mobile and feeling your best.",
    perks: [
      "60 day fitness program",
      "Nutritional program",
      "Strength Training",
      "Stretching",
      "Recovery",
    ],
  },
]

export default programData
