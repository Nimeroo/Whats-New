import Academia from "../assets/Academia.jpg";
import Buissness from "../assets/Buissness.jpg";
import World from "../assets/Earth.jpg";
import Entertainment from "../assets/Entertainment.jpg";
import Food from "../assets/food.jpg";
import Games from "../assets/games.png";
import General from "../assets/General.jpg";
import Health from "../assets/Health.jpg";
import Lifestyle from "../assets/Lifestyle.jpeg";
import Finance from "../assets/Money.jpeg";
import Opinions from "../assets/opinions.png";
import Politics from "../assets/Politics.jpg";
import Technology from "../assets/Printed-Circuit-Board.jpg";
import Programming from "../assets/Programming.jpg";
import Regional from "../assets/Regional.jpg";
import Science from "../assets/Science.jpg";
import Sports from "../assets/Sports.jpg";
import National from "../assets/national.png";
import Markets from "../assets/markets.jpg";
import Business from "../assets/business.jpg";
import Legal from "../assets/legal.jpg";
import Celebrity from "../assets/celebrity.jpg";
import Industry from "../assets/industry.jpeg";
import Default from "../assets/default.jpg"

const thumbnailConverter = (category, imageStatus) => {
  if (imageStatus === "None") {
    switch (category[0]) {
      case "academia":
        return Academia;
      case "buissness":
        return Buissness;
      case "world":
        return World;
      case "entertainment":
        return Entertainment;
      case "food":
        return Food;
      case "games":
        return Games;
      case "general":
        return General;
      case "health":
        return Health;
      case "lifestyle":
        return Lifestyle;
      case "finance":
        return Finance;
      case "opinions":
        return Opinions;
      case "politics":
        return Politics;
      case "technology":
        return Technology;
      case "programming":
        return Programming;
      case "regional":
        return Regional;
      case "science":
        return Science;
      case "sports":
        return Sports;
      case "national":
        return National;
      case "markets":
        return Markets;
      case "business":
        return Business;
      case "legal":
        return Legal;
      case "celebrity":
        return Celebrity;
      case "industry":
        return Industry;
      default:
        return Default;
    }
  } else return imageStatus;
};

export default thumbnailConverter;
