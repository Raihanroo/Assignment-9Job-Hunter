import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

const Item = ({item, deleteData}) => {
    

    const {company_logo, company_name, job_title, company_location, salary, job_type, quantity, id} = item
    return (
        <div className="border-[2px] border-black rounded-md p-3 flex justify-between items-center">
            <div>
                <img className="w-48 h-32" src={company_logo} />
            </div>
            <div className="">
                <h1 className="text-opacity-25 md:text-3xl md:font-bold">{company_name}</h1>
                <ul>
                    <li>
                        <p><b>Job Title:</b> {job_title}</p>
                    </li>
                    <li>
                        <p><b>Job Type:</b> {job_type}</p>
                    </li>
                    <li>
                        <p><b>Job Quentity: </b>{quantity}</p>
                    </li>
                    <li className="flex-wrap">
                        <span className="flex"><MdLocationPin/> {company_location}</span>
                        <span className="flex"><GrMoney/> {salary}</span>
                    </li>
                    <li>
                    <button onClick={()=> {deleteData(id)}} className="p-2 bg-gray-700 rounded text-white">Remove</button> 
                    </li>
                    
                </ul>
            </div>
            <div>
                <Link to={`/userDatails/${id}`}><button className="p-5 bg-gray-700 rounded text-white">View Details</button></Link>
            </div>
        </div>
    );
};

export default Item;