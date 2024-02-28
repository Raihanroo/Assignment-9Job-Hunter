import Banner from "../Banner/Banner";
import AppliedJobimg from "../../../public/appliedJob.gif";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, romoveData } from "../localstorage/localstorage";
import Item from "../Item/Item";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { space } from "postcss/lib/list";
import Loading from "../Loading/Loading";

const AppliedJob = () => {
  const data = useLoaderData();

  const [localdata, setLocalData] = useState([]);

  useEffect(() => {
    const serverData = getData();
    const newData = [];

    for (let id in serverData) {
      let finddata = data.find((item) => item.id === id);
      if (finddata) {
        finddata.quantity = serverData[id];
        newData.push(finddata);
      }
    }

    setLocalData(newData);
  }, [data]);

  const deleteData = (id) => {
    const newData = localdata.filter((item) => item.id !== id);
    setLocalData(newData);

    toast("DATA REMOVE");
    romoveData(id);
  };

  const jobTypeOne = (value) => {
    const data = localdata.filter((item) => item.job_time === value);
    setLocalData(data);
  };

  const jobTypeTwo = (value) => {
    const data = localdata.filter((item) => item.job_time === value);
    setLocalData(data);
  };

  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === "loading" ? <Loading></Loading> : ""}
      <Banner
        heading={<p className="text-[5rem] font-medium text-fuchsia-950">I Liked</p>}
        subHeading={<p className="text-[2.5rem] font-medium text-fuchsia-950">My-Fevorite Job In</p>}
        img={AppliedJobimg}
      ></Banner>
      <div className="container mx-auto mb-10">
        <div className="flex gap-2 my-2">
          {localdata.length > 0 ? (
            <span
              onClick={() => {
                jobTypeTwo("full");
              }}
            >
              <button className="p-3 bg-slate-600 text-white rounded">
                Full Time
              </button>
            </span>
          ) : (
            ""
          )}
          {localdata.length > 0 ? (
            <span
              onClick={() => {
                jobTypeOne("remote");
              }}
            >
              <button className="p-3 bg-slate-600 text-white rounded">
                Remote
              </button>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {localdata.map((item) => (
            <Item key={item.id} item={item} deleteData={deleteData}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
