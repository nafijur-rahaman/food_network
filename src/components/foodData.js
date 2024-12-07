// foodData.js

import appleImage from '../assets/images/apple.jpg'; 
import appleImage2 from '../assets/images/apple.jpg'; 
import strawberryImage from '../assets/images/strawberry.jpg';
import strawberryImage2 from '../assets/images/strawberry.jpg';
import bananaImage from '../assets/images/banana.png';
import bananaImage2 from '../assets/images/banana.png';
import carrotImage from '../assets/images/carrot.jpg';
import carrotImage2 from '../assets/images/carrot.jpg';
import tomatoImage from '../assets/images/tomato.jpg';
import tomatoImage2 from '../assets/images/tomato.jpg';

export const foodItems = {
Fruits: [
  {
    name: "Apple",
    title: "Why We Eat Apple",
    description: "Apples are rich in Vitamin A and are known for their health benefits, including boosting the immune system.",
    vitamin: "Vitamin A",
    subheading1: "Health Benefits",
    subparagraph1: "Apples are packed with antioxidants that help protect the body from oxidative stress and inflammation.",
    subheading2: "Boosting Immunity",
    subparagraph2: "The high Vitamin A content in apples can help strengthen the immune system and promote overall health.",
    image1: appleImage,
    image2: appleImage2
  },
  {
    name: "Strawberry",
    title: "The Power of Strawberries",
    description: "Strawberries are packed with Vitamin C and antioxidants, supporting skin health and boosting immunity.",
    vitamin: "Vitamin C",
    subheading1: "Rich in Vitamin C",
    subparagraph1: "Strawberries are an excellent source of Vitamin C, which helps in collagen production for healthier skin.",
    subheading2: "Skin Health and Antioxidants",
    subparagraph2: "The antioxidants in strawberries fight free radicals, supporting healthy and glowing skin.",
    image1: strawberryImage,
    image2: strawberryImage2
  },
  {
    name: "Banana",
    title: "Banana Benefits for Energy",
    description: "Bananas are a great source of Vitamin B6 and are known for their energy-boosting properties.",
    vitamin: "Vitamin B6",
    subheading1: "Natural Energy Booster",
    subparagraph1: "Bananas provide natural sugars like glucose, fructose, and sucrose, which are great for a quick energy boost.",
    subheading2: "Rich in Vitamin B6",
    subparagraph2: "The Vitamin B6 in bananas helps in the production of neurotransmitters that regulate mood and brain function.",
    image1: bananaImage,
    image2: bananaImage2
  }
],

Vegetables: [
  {
    name: "Carrot",
    title: "Carrot for Better Vision",
    description: "Carrots are rich in Vitamin C and beta-carotene, promoting good vision and healthy skin.",
    vitamin: "Vitamin C, Beta-Carotene",
    subheading1: "Vitamin C for Immunity",
    subparagraph1: "Carrots provide a boost of Vitamin C, which helps to improve immune function and skin health.",
    subheading2: "Beta-Carotene and Vision",
    subparagraph2: "The beta-carotene in carrots is converted into Vitamin A, which supports eye health and good vision.",
    image1: carrotImage,
    image2: carrotImage2
  },
  {
    name: "Tomato",
    title: "Tomato: A Nutrient Powerhouse",
    description: "Tomatoes are packed with Vitamin C and lycopene, helping to maintain skin health and reduce inflammation.",
    vitamin: "Vitamin C, Lycopene",
    subheading1: "Lycopene and Antioxidants",
    subparagraph1: "Tomatoes are rich in lycopene, an antioxidant that supports heart health and reduces inflammation.",
    subheading2: "Boosting Skin Health",
    subparagraph2: "The Vitamin C content in tomatoes helps in collagen production, making skin firm and youthful.",
    image1: tomatoImage,
    image2: tomatoImage2
  }
],

};
