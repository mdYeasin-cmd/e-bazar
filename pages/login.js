import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    return (
        <div>
            <Navbar />
            <div className="w-2/5 mx-auto shadow-2xl p-8 my-10 rounded-lg">
                <h2 className="text-3xl w-4/12 mx-auto py-2 rounded-lg font-semibold text-center bg-[#f55e3d] bg-opacity-50">Log In</h2>
                <form>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="submit"
                            value="Log In"
                            className="btn bg-[#f55e3d] hover:bg-[#f55e3d] hover:bg-opacity-95 border-0 mt-4 w-4/12 mx-auto"
                        />
                    </div>
                </form>

                <div className="divider my-5">OR</div>

                <div className="text-center my-3">
                    <button className="bg-slate-100 p-2 social-login-btn">
                        <FcGoogle></FcGoogle>
                    </button>
                </div>
                <div>
                    <p className="text-center mt-3 text-lg">
                        <small>Don't have an account? <Link className="text-blue-900" href="/signUp">Sign Up</Link></small>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;