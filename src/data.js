import wheyProtein from "./assets/images/whey-protein.jpg"
import peaProtein from "./assets/images/pea-protein.jpg"
import creatine from "./assets/images/creatine.jpg"
import caffeinePills from "./assets/images/caffeine-pills.jpg"
import multivitamin from "./assets/images/multivitamin.jpg"
import primalGreens from "./assets/images/primal-greens.jpg"
import jumpRope from "./assets/images/jump-rope.jpg"
import stabilityBall from "./assets/images/swiss-ball.jpg"
import bosuBall from "./assets/images/bosu-ball.jpg"
import suspensionTrainer from "./assets/images/suspension-trainer.jpg"
import resistanceBands from "./assets/images/resistance-bands.jpg"
import lacrosseBall from "./assets/images/lacrosse-ball.jpg"
import foamRoller from "./assets/images/foam-roller.jpg"
import cbd from "./assets/images/cbd.jpg"

const productData = [
  {
    id: 1,
    name: "Naked Whey",
    brand: "Naked Nutrition",
    category: "Supplements",
    price: 94.99,
    img: wheyProtein,
    description:
      "Naked Whey is sourced from small Northern California and Idaho dairy farms. Our cows are grass-fed, free roaming, and raised without growth hormones like rBGH or rBST. Each serving includes 25 grams of protein and 5.9 grams of branched-chain amino acids (BCAAs). Naked Whey is completely free of additives and artificial sweeteners. We are committed to shortening the steps between our farms and you. Don't let the supplement industry fool you; additives are for their bottom line, not your health.",
    availability: true,
    quantity: 1,
  },
  {
    id: 2,
    name: "Naked Pea",
    brand: "Naked Nutrition",
    category: "Supplements",
    price: 57.99,
    img: peaProtein,
    description:
      "Naked Pea has only one ingredient: Pea protein extracted from yellow split peas grown on US and Canadian farms. Pea protein is easily absorbed by the body, making it an excellent plant-based alternative to whey protein. Naked Pea is free of additives and artificial sweeteners. We are committed to shortening the steps between our farms and you. Independent third-party tested for heavy metals. Don't let the supplement industry fool you; additives are for their bottom line, not your health.",
    availability: true,
    quantity: 1,
  },
  {
    id: 3,
    name: "Creatine",
    brand: "1st Phrom",
    category: "Supplements",
    price: 23.99,
    img: creatine,
    description:
      "Creatine is a naturally occurring energy source that your body uses in periods of stress or exertion to fight off muscle fatigue and increase endurance and anaerobic capacity. Creatine Monohydrate acts as a muscle cell volumizer, leading to increased anabolism and muscle protein synthesis. Increasing creatine levels in the body through supplementation allows for improved ATP regeneration within your muscles and acts as a supply of power on demand for you during intense exercise training. With creatine monohydrate as a source of fast, available energy, glycolysis (the metabolic breakdown of glucose into energy) decreases, which in turn reduces lactic acid build-up in muscle and leads to increased endurance and strength.",
    availability: true,
    quantity: 1,
  },
  {
    id: 4,
    name: "Caffeine Pills",
    brand: "Kaged",
    category: "Supplements",
    price: 14.99,
    img: caffeinePills,
    description:
      "PurCaf® Organic caffeine capsules will support your energy, focus, and endurance.* We use PurCaf® caffeine because it comes from 100% organic green coffee beans for efficient absorption and a clean caffeine rush.",
    availability: true,
    quantity: 1,
  },
  {
    id: 5,
    name: "Multivitamin",
    brand: "Kaged",
    category: "Supplements",
    price: 34.99,
    img: multivitamin,
    description:
      "The whole-food multivitamin with 21 essential vitamins and minerals. It's sourced from organic fruits and vegetables, so you can actually absorb the key micronutrients. Bioavailable, properly dosed, and with prebiotic fibers to cover your nutritional bases.",
    availability: true,
    quantity: 1,
  },
  {
    id: 6,
    name: "Primal Greens",
    brand: "Primal Harvest",
    category: "Supplements",
    price: 49.99,
    img: primalGreens,
    description:
      "Formulated with a super greens blend of 50+ vitamin-containing ingredients, Primal Greens powder makes getting your daily serving of energy-supporting nutrients both convenient and enjoyable!",
    availability: true,
    quantity: 1,
  },
  {
    id: 7,
    name: "Jump Rope",
    brand: "Sweet Sweat",
    category: "Equipment",
    price: 19.99,
    img: jumpRope,
    description:
      "Our most versatile jump rope yet! With a removable weight in the handle, you can build endurance & muscle while you jump or remove the weight to focus on coordination & stamina without missing a beat. The Pro Jump Rope puts the choice literally in your hands.",
    availability: true,
    quantity: 1,
  },
  {
    id: 8,
    name: "Stability Ball 65cm",
    brand: "TRX",
    category: "Equipment",
    price: 34.99,
    img: stabilityBall,
    description:
      "Balance out your training. Improve core strength, overall balance, and—yes—even your posture by adding our TRX® Stabiilty Ball to any workout.",
    availability: true,
    quantity: 1,
  },
  {
    id: 9,
    name: "Bosu Ball",
    brand: "Rogue Fitness",
    category: "Equipment",
    price: 149.99,
    img: bosuBall,
    description:
      "The Bosu balance trainer is a staple in gyms, physical therapy offices, and homes across the globe. You know and love the Blue Bosu but now we've produced a limited number of Matte Black home Balance trainers. Same functionality as the original balance trainer but with a sleek, modern, updated look. The Bosu black balance trainer features textured dome material so hands and feet won't slip",
    availability: true,
    quantity: 1,
  },
  {
    id: 10,
    name: "Suspension Trainer",
    brand: "TRX",
    category: "Equipment",
    price: 198.99,
    img: suspensionTrainer,
    description:
      "These blue suspension trainer straps are the toughest and most durable suspension system worldwide to withstand 24/7 commercial club or gym use.",
    availability: true,
    quantity: 1,
  },
  {
    id: 11,
    name: "Resistance Bands",
    brand: "Bala",
    category: "Equipment",
    price: 34.99,
    img: resistanceBands,
    description:
      "Sensibly designed for yoga, pilates, home workouts, strength training and rehabilitation. Made with premium, woven fabric elastic. Includes 3x increasingly resistant fabric bands and a nifty carrying case. Strength Levels: Heavy, Medium, Light",
    availability: true,
    quantity: 1,
  },
  {
    id: 12,
    name: "Lacrosse Ball",
    brand: "JXM",
    category: "Recovery",
    price: 9.99,
    img: lacrosseBall,
    description:
      "If there’s one thing you should implement to increase mobility, it’s a lacrosse ball. It’s great for breaking up muscle knots and hard to reach trigger points. Use the Lacrosse ball on your traps and delts after a heavy upper body workout or on glutes and calves after a long run.",
    availability: true,
    quantity: 1,
  },
  {
    id: 13,
    name: "Foam Roller",
    brand: "Trigger Point",
    category: "Recovery",
    price: 44.99,
    img: foamRoller,
    description:
      "Prevent injury and relieve sore muscles with the TriggerPoint GRID Foam Roller. The TriggerPoint GRID Foam Roller features environmentally friendly technology while maintaining durability. With this TriggerPoint foam roller, you'll be able to target sore muscles in order to relieve aches and pains. Plus, the compact design makes it ideal for traveling. Whether you need to improve muscle recovery or work out muscle knots, try the TriggerPoint GRID Foam Roller.",
    availability: true,
    quantity: 1,
  },
  {
    id: 14,
    name: "CBD Cream",
    brand: "Cymbiotika",
    category: "Recovery",
    price: 55.99,
    img: cbd,
    description:
      "Infused with powerful plant compounds and stem cells that relieve pain, this medicinal balm penetrates deep below the skin to relax and warm muscles while reducing inflammation. The Ultimate Pain Balm is specially formulated to address sore muscles, joint pain, minor aches, and muscle pain, making it a versatile and reliable solution for managing pain associated with tension headaches, menstruation, rheumatoid arthritis, and gout. It combines the natural healing properties of essential oils and active ingredients such as menthol and camphor to provide fast and targeted relief for pain and discomfort.",
    availability: true,
    quantity: 1,
  },
]

export default productData
