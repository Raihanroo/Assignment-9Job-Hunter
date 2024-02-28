
import Banner from "../Banner/Banner";
import DetailsImg from "../../assets/details.jpeg"
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addData } from "../localstorage/localstorage";
import Loading from "../Loading/Loading";



const UserDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const finddata = data.find((item) => item.id === id);

// heading localstorage
const localStorage =(id)=>{
  toast("Wow so easy!")
  addData(id)
}

const navigation = useNavigation();

  return (
    <div>
         {
                navigation.state === 'loading' ? <Loading></Loading> : ''
            }
       <Banner
        heading={"Job Details"}
        subHeading={"for The IOT Company Globaly!!"}
        img={DetailsImg}
      ></Banner>
      <div>
        <div className="container mx-auto my-5 md:my-10">
          <div className="md:flex justify-between items-center">
            <div className="md:flex-1">
              <ul>
                <li>
                  <p>
                    <b>Job Description:</b>
                    {finddata.job_description}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Job Responsebility:</b>
                    {finddata.job_responsibility}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Educational Requerments:</b>
                  </p>
                  <p>{finddata.educational_requirements}</p>
                </li>
                <li>
                  <p>
                    <b>Expriences:</b>
                  </p>
                  <p>{finddata.experiences}</p>
                </li>
              </ul>
            </div>
            <div className="md:flex-2 bg-slate-400 p-3">
              <ul>
                <li>
                  <p>
                    <b>Job Details</b>
                  </p>
                  <hr />
                </li>
                <li>
                  <p>
                    <b>Salary: </b>
                    {finddata.salary}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Job Tit: </b>
                    {finddata.job_title}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Contact Information</b>
                  </p>
                  <hr />
                </li>
                <li>
                  <p>
                    <b>phone: </b>
                    {finddata.phone}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Email: </b>
                    {finddata.email}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Address: </b>
                    {finddata.address}
                  </p>
                </li>
                <li>
                  <button onClick={()=> {localStorage(finddata.id)}} className="p-2 w-full bg-red-400 text-white rounded">
                    Apply Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserDetails;
