import { IoLogoGoogle, IoLogoGithub, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h3 className="text-2xl font-semibold">Login With</h3>
                <button className="btn btn-outline text-xl text-blue-500 font-medium w-full">
                    <IoLogoGoogle />
                    LogIn With Google
                </button>
                <button className="btn btn-outline text-xl font-medium w-full">
                    <IoLogoGithub />
                    LogIn With Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h3 className="text-2xl font-semibold">Find Us On</h3>
                <a href="#" className="border rounded-t-lg p-3 text-xl font-medium w-full flex gap-2 justify-start items-center">
                    <IoLogoFacebook />
                    Facebook
                </a>
                <a href="#" className="border-x  p-3 text-xl font-medium w-full flex gap-2 justify-start items-center">
                    <IoLogoTwitter />
                    Twitter
                </a>
                <a href="#" className="border rounded-b-lg p-3 text-xl font-medium w-full flex gap-2 justify-start items-center">
                    <IoLogoInstagram />
                    Instagram
                </a>
            </div>
            <div className="m-4 mb-6 pb-4 bg-[#F3F3F3] rounded-lg">
                <h3 className="text-2xl font-semibold p-4">Q-Zone</h3>
                <div className="flex flex-col gap-4">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;