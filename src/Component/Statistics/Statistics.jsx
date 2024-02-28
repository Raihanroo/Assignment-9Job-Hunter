
import Banner from "../Banner/Banner";
import StaticsImg from "../../../public/statices.gif";
import Rechart from "../Rechart/Rechart";

const Statistics = () => {
 
  return (
    <div>
      <Banner
        heading={<p className="text-[5rem]  font-medium text-fuchsia-900">Job-Statistics</p>}
        subHeading={<p className="text-[2.5rem] font-medium text-fuchsia-950">Carrer Cerimony Platfrom</p>}
        img={StaticsImg}
      ></Banner>
      <Rechart></Rechart>
    </div>
  );
};

export default Statistics;
