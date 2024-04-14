import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    } , [])
    return (
        <div>
            <h3 className="text-2xl font-bold">All Caterogy</h3>
            <div>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="block p-4 text-[#9F9F9F] font-medium hover:text-black hover:bg-slate-200" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;