// import Slider from "./Sliders";

import BestSell from "./BestSell";
import WeServe from "./WeServe";
import Reservation from "./Reservation";
import RateFeedback from "./RateFeedback";
import ContectInfo from "./ContactInfo";
import DynamicSlider from './DynamicSlider';
import menuDataAPI from '../../../assets/data/menuDataAPI';
const HomeBody = () => {
  // img for slider
  const ImagesSlider = menuDataAPI.slider.map(item => item.img);
  const bestSellingItems = menuDataAPI.slider;
  const services = menuDataAPI.menu.services;
  return (
    <div>
      <div className="container-xl mt-2">
        {/* Pass your images array as a prop */}
        <DynamicSlider images={ImagesSlider} />
      </div>
      <div className="container mt-4">
        <h1 className="text-center">Best Selling</h1>
        <BestSell items={bestSellingItems} />
      </div>
      <div className="container mt-4">
        <h1 className="text-center">We serve</h1>
        <WeServe serviceItems={services} />
      </div>
      <div className="container mt-4">
        <h1 className="text-center ">Make Reservation</h1>
        <Reservation />
      </div>
      <div className="container mt-4">
        <h1 className="text-center">Rate & Feedback</h1>
        <RateFeedback />
      </div>
      <div className="mt-4">
        <ContectInfo />
      </div>
    </div>
  );
};

export default HomeBody;
