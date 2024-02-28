import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center">
            <h3 className="text-4xl font-medium text-fuchsia-950">Job Category List</h3>
            <p className="text-[2.5rem] font-medium text-fuchsia-950">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 md:my-5 my-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                categories.map((item) => <div className="bg-slate-300 p-5 " key={item.id}>
                   <ul>
                    <li>
                        <img className="w-10 h-10" src={item.logo} alt="" />
                    </li>
                     <li>
                        <p className="font-medium mt-2">{item.category_name}</p>
                        
                     </li>
                     <li>
                        <p className="font-medium ">{item.availability}</p>
                     </li>
            
                   </ul>
                </div> )
            }
        </div>
      </div>
    </div>
  );
};

export default Category;
