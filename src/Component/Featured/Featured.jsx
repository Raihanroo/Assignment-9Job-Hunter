
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const [featuredes, setFeaturedes] = useState([]);

  
  // for button Show All & Show Less
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setFeaturedes(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">Featured Jobs</h3>
          <p className="text-lg font-semibold">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:my-5 my-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {featuredes.slice(0,show ? 10: 4).map((item) => (
            <div
              className="border-[2px] border-black rounded p-5 "
              key={item.id}
            >
              <ul className="space-y-2">
                <li>
                  <img className="w-32 h-20" src={item.company_logo} alt="" />
                </li>
                <li>
                  <h2>{item.company_name}</h2>
                </li>
                <li>
                  <h4>{item.job_title}</h4>
                </li>
                <li>
                  <button className="p-2 bg-slate-400 text-yellow-200">
                    Full Time
                  </button>
                  <button className="p-2 mx-2 bg-slate-400 text-yellow-200">
                    Remote
                  </button>
                </li>

                <li>
                  <p>{item.ompany_location}</p> <p>{item.salary}</p>
                </li>
                <li>
                  <Link to={`/userDatails/${item.id}`}>
                    <button className="p-2 bg-yellow-400 rounded">
                      Veiw Details
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
       <div className="text-center mx-auto my-2">
        {
          show? (<button onClick={() => setShow(false)} className="p-3 bg-slate-700 rounded text-white text-center mx-auto inline-block">Show Less</button>):(<button onClick={() => setShow(true)} className="p-3 bg-slate-700 rounded text-white text-center mx-auto inline-block">Show All</button>)
        }
       </div>
      
      </div>
    </div>
  );
};

export default Featured;
