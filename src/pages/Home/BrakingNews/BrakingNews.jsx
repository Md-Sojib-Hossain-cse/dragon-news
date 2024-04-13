import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className="mr-8">Match Highlights: Germany vs Spain — as it happened</Link>
                <Link to="/" className="mr-8">Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-8">Match Highlights: Germany vs Spain — as it happened</Link>
                <Link to="/" className="mr-8">Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;