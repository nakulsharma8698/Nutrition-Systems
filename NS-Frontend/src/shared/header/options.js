import socialIcon1 from "./../../images/social_icon1.jpg";
import socialIcon2 from "./../../images/social_icon2.jpg";
import aminoAcidImg from "./../../images/amino_acids.jpg";
import accessoriesImg from "./../../images/accessories.jpg";
import barsImg from "./../../images/bars.jpg";
import drinkImg from "./../../images/drinks.jpg";
import fatBurnerImg from "./../../images/fat_burner.jpg";
import lCarnitineImg from "./../../images/l-carnitine.jpg";
import proteinImg from "./../../images/protein.jpg";
import vitaminImg from "./../../images/vitamins.jpg";

const menuOptions = [
  {
    name: "Store",
    mainOptions: [
      {
        path: "/product?search=best_seller",
        name: "Best Sellers"
      },
      {
        path: "/product?search=promos",
        name: "Promos"
      },
      {
        path: "/product?search=new",
        name: "New"
      },
      {
        path: "/product?search=discovery_boxes",
        name: "Discovery Boxes"
      }
    ],
    subOptions: [
      {
        title: "Protein",
        imgPath: proteinImg,
        options: [
          {
            path: "/product?search=casein",
            name: "Casein"
          },
          {
            path: "/product?search=gainer",
            name: "Gainer"
          },
          {
            path: "/product?search=isolate",
            name: "Isolate"
          },
          {
            path: "/product?search=vegan",
            name: "Vegan"
          },
          {
            path: "/product?search=whey",
            name: "Whey"
          }
        ]
      },
      {
        title: "Drinks",
        imgPath: drinkImg,
        options: [
          {
            path: "/product?search=drinks",
            name: "Energy"
          },
          {
            path: "/product?search=protein",
            name: "Protein"
          },
          {
            path: "/product?search=amino_acid",
            name: "Amino Acids"
          },
          {
            path: "/product?search=l_carnitine",
            name: "L-Carnitine"
          }
        ]
      },
      {
        title: "Fat Burner",
        imgPath: fatBurnerImg,
        options: [
          {
            path: "/product?search=capsules",
            name: "Capsules"
          },
          {
            path: "/product?search=liquid",
            name: "Liquid"
          }
        ]
      },
      {
        title: "Bars",
        imgPath: barsImg,
        options: [
          {
            path: "/product?search=energy_bar",
            name: "Energy"
          },
          {
            path: "/product?search=protein_bar",
            name: "Protein"
          }
        ]
      },
      {
        title: "Vitamins",
        imgPath: vitaminImg,
        options: [
          {
            path: "/product?search=capsules",
            name: "Capsules"
          },
          {
            path: "/product?search=ready_to_drink",
            name: "Ready to drink"
          },
          {
            path: "/product?search=shots",
            name: "Shots  "
          }
        ]
      },
      {
        title: "Accessories",
        imgPath: accessoriesImg,
        options: [
          {
            path: "/product?search=belts",
            name: "Belts"
          },
          {
            path: "/product?search=gloves",
            name: "Gloves"
          },
          {
            path: "/product?search=others",
            name: "Others"
          },
          {
            path: "/product?search=shakers",
            name: "Shakers"
          },
          {
            path: "/product?search=t_shirts",
            name: "T-Shirts"
          }
        ]
      },
      {
        title: "Amino Acids",
        imgPath: aminoAcidImg,
        options: [
          {
            path: "/product?search=liquid",
            name: "Liquid"
          },
          {
            path: "/product?search=capsules",
            name: "Capsules"
          },
          {
            path: "/product?search=powders",
            name: "Powders"
          }
        ]
      },
      {
        title: "L-Carnitine",
        imgPath: lCarnitineImg,
        options: [
          {
            path: "/product?search=ready_to_drink",
            name: "Ready to drink"
          },
          {
            path: "/product?search=capsules",
            name: "Capsules"
          },
          {
            path: "/product?search=shots",
            name: "Shots"
          }
        ]
      }
    ]
  },
  {
    name: "Goal",
    goalOptions: [
      {
        path: "/product?search=endurance",
        imgPath: "/images/goal1.png",
        name: "Endurance"
      },
      {
        path: "/product?search=energy",
        imgPath: "/images/goal2.png",
        name: "Energy"
      },
      {
        path: "/product?search=muscle",
        imgPath: "/images/goal3.png",
        name: "Muscle"
      },
      {
        path: "/product?search=strength",
        imgPath: "/images/goal4.png",
        name: "Strength"
      },
      {
        path: "/product?search=weight_loss",
        imgPath: "/images/goal6.png",
        name: "Weight Loss"
      },
      {
        path: "/product?search=wellness",
        imgPath: "/images/goal7.png",
        name: "Wellness"
      }
    ]
  },
  {
    name: "Brand",
    brandOptions: [
      {
        path: "/product?search=brand1",
        imgPath: "/images/shop-brand.png",
        name: "Brand 1"
      },
      {
        path: "/product?search=brand2",
        imgPath: "/images/shop-brand.png",
        name: "Brand 2"
      },
      {
        path: "/product?search=brand3",
        imgPath: "/images/shop-brand.png",
        name: "Brand 3"
      },
      {
        path: "/product?search=brand4",
        imgPath: "/images/shop-brand.png",
        name: "Brand 4"
      },
      {
        path: "/product?search=brand5",
        imgPath: "/images/shop-brand.png",
        name: "Brand 5"
      },
      {
        path: "/product?search=brand6",
        imgPath: "/images/shop-brand.png",
        name: "Brand 6"
      }
    ]
  },
  {
    name: "Offer",
    offerOptions: [
      {
        path: "/product?search=flash_sale",
        imgPath: "/images/lightning.svg",
        name: "Flash Sale"
      },
      {
        path: "/product?search=crazy_deals",
        imgPath: "/images/banking.svg",
        name: "Crazy Deals"
      },
      {
        path: "/product?search=wipe_out_sale",
        imgPath: "/images/shopping-bag.svg",
        name: "Wipe Out Sale"
      },
      {
        path: "/product?search=half_price_store",
        imgPath: "/images/percent.svg",
        name: "Half Price Store"
      }
    ]
  },
  {
    name: "Why Us",
    path: "#"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Whatsapp",
    imgPath: socialIcon1,
    path: "#"
  },
  /*{
    name: "i-Nutrition",
    imgPath: socialIcon2,
    path: "/i-nutrition"
  }*/
];

export default menuOptions;
