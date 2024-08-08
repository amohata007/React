import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          alt="Food_Logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const resObj = [
//   {
//     info: {
//       id: "408231",
//       name: "Shree Tirupati Balaji Idli",
//       cloudinaryImageId: "nicowsp9pufgiwxyhhsr",
//       locality: "Bhatar Char Rasta",
//       areaName: "Athwa",
//       costForTwo: "₹200 for two",
//       cuisines: ["South Indian"],
//       avgRating: 4.6,
//       veg: true,
//       parentId: "255248",
//       avgRatingString: "4.6",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 3.9,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "3.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 14:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "FREE ITEM",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/shree-tirupati-balaji-idli-bhatar-char-rasta-athwa-surat-408231",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "689085",
//       name: "Chamunda Chai ",
//       cloudinaryImageId: "772069b1f686fd45fa4b7b093c41d8a7",
//       locality: "Nawab S Palace",
//       areaName: "Sahara Darwaja",
//       costForTwo: "₹250 for two",
//       cuisines: [
//         "Tea",
//         "Fast Food",
//         "Snacks",
//         "Gujarati",
//         "Beverages",
//         "Street Food",
//       ],
//       avgRating: 4.6,
//       veg: true,
//       parentId: "418890",
//       avgRatingString: "4.6",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 23,
//         lastMileTravel: 2.9,
//         serviceability: "SERVICEABLE",
//         slaString: "20-25 mins",
//         lastMileTravelString: "2.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 23:59:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "10% OFF",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/chamunda-chai-nawab-s-palace-sahara-darwaja-surat-689085",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "175281",
//       name: "Jalaram Locho & Khaman",
//       cloudinaryImageId: "ilmplqyvasqq0igkmobz",
//       locality: "Gotalawadi",
//       areaName: "Katargam",
//       costForTwo: "₹250 for two",
//       cuisines: ["Gujarati", "Snacks", "Fast Food", "Street Food", "Indian"],
//       avgRating: 4.4,
//       veg: true,
//       parentId: "230558",
//       avgRatingString: "4.4",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 19:45:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/jalaram-locho-and-khaman-gotalawadi-katargam-surat-175281",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "81093",
//       name: "Richie Rich On Wheels",
//       cloudinaryImageId: "0cf528098f8a9032cf53197c88ef7469",
//       locality: "Square Complex",
//       areaName: "Square Complex",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "North Indian",
//         "Pastas",
//         "Italian",
//         "Indian",
//         "American",
//         "Chinese",
//         "South Indian",
//         "Pizzas",
//         "Tandoor",
//         "Punjabi",
//       ],
//       avgRating: 4.4,
//       veg: true,
//       parentId: "169433",
//       avgRatingString: "4.4",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 36,
//         lastMileTravel: 6.2,
//         serviceability: "SERVICEABLE",
//         slaString: "35-40 mins",
//         lastMileTravelString: "6.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 23:59:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/richie-rich-on-wheels-square-complex-surat-81093",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "843187",
//       name: "Shiv Shakti Sweets And Snacks",
//       cloudinaryImageId: "a389f3de72f770f5e7c83fdb6a5a8d09",
//       locality: "Ghod Dod Rd",
//       areaName: "Athwa",
//       costForTwo: "₹300 for two",
//       cuisines: ["Sweets", "Indian", "Desserts", "Snacks"],
//       avgRating: 4.6,
//       veg: true,
//       parentId: "289640",
//       avgRatingString: "4.6",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 4.1,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "4.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 21:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       isNewlyOnboarded: true,
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/shiv-shakti-sweets-and-snacks-ghod-dod-rd-athwa-surat-843187",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "84562",
//       name: "G Dada",
//       cloudinaryImageId: "cbf6dda38f6e908be6dd706d5dea010a",
//       locality: "Adajan Gam",
//       areaName: "Adajan Gam",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "Gujarati",
//         "Snacks",
//         "Street Food",
//         "North Indian",
//         "Punjabi",
//         "Thalis",
//       ],
//       avgRating: 4.4,
//       parentId: "419400",
//       avgRatingString: "4.4",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 4.6,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "4.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 22:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "4.0",
//           ratingCount: "1K+",
//         },
//         source: "GOOGLE",
//         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/g-dada-adajan-gam-surat-84562",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "152983",
//       name: "Jani Locho",
//       cloudinaryImageId: "nni5t4imm0m5odzlqav6",
//       locality: "Navyug College Road",
//       areaName: "Adajan Patiya",
//       costForTwo: "₹200 for two",
//       cuisines: ["Gujarati", "Snacks"],
//       avgRating: 4.5,
//       veg: true,
//       parentId: "22262",
//       avgRatingString: "4.5",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 24,
//         lastMileTravel: 4.2,
//         serviceability: "SERVICEABLE",
//         slaString: "20-25 mins",
//         lastMileTravelString: "4.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 20:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Dhokla.png",
//             description: "Delivery!",
//           },
//           {
//             imageId: "Rxawards/_CATEGORY-Gujrati.png",
//             description: "Delivery!",
//           },
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Dhokla.png",
//                 },
//               },
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Gujrati.png",
//                 },
//               },
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹49",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/jani-locho-navyug-college-road-adajan-patiya-surat-152983",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "70750",
//       name: "Surti Khaman House",
//       cloudinaryImageId: "vhqptzx28p1jo8dgxp1j",
//       locality: "Anand Mahal Road",
//       areaName: "Gopipura",
//       costForTwo: "₹300 for two",
//       cuisines: ["Gujarati", "Snacks"],
//       avgRating: 4.2,
//       veg: true,
//       parentId: "197899",
//       avgRatingString: "4.2",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 20,
//         lastMileTravel: 1.1,
//         serviceability: "SERVICEABLE",
//         slaString: "15-20 mins",
//         lastMileTravelString: "1.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-08-08 19:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/surti-khaman-house-anand-mahal-road-gopipura-surat-70750",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
// ];

const resObj = {
  info: {
    id: "408231",
    name: "Shree Tirupati Balaji Idli",
    cloudinaryImageId: "nicowsp9pufgiwxyhhsr",
    locality: "Bhatar Char Rasta",
    areaName: "Athwa",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.6,
    veg: true,
    parentId: "255248",
    avgRatingString: "4.6",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-08 14:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "FREE ITEM",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-40b20b5b-a7df-4a8b-88f2-834d0b13a07a",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/shree-tirupati-balaji-idli-bhatar-char-rasta-athwa-surat-408231",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://t4.ftcdn.net/jpg/02/54/92/05/360_F_254920579_xOIyVqIWxgUi0fSQ8FwBC95YlIVZpuCd.jpg"
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>4.5 stars</h4>
      <h4>32 minutes ETA</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
