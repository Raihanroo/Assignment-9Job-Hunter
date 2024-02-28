
import Banner from "../Banner/Banner";
import StaticsImg from "../../../public/statices.gif";
import Rechart from "../Rechart/Rechart";

const Statistics = () => {
 
  return (
    <div>
      <Banner
        heading={"Job Statistics"}
        subHeading={"Carrer Cerimony Platfrom"}
        img={StaticsImg}
      ></Banner>
      <Rechart></Rechart>
    </div>
  );
};

export default Statistics;
