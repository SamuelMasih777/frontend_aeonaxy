import { Fragment } from "react";
import { MainNavbar } from "../../components/Navbar/MainNavbar";
import { useNavigate } from "react-router-dom";
// import Card from '../components/Card/Card'
import { Card } from "../../components/Card/Card";
import { useSignUp } from "../../context/SignUp-Context";
import { Footer } from "../../components/Footer";
export const Home = () => {
  const navigate = useNavigate();
  const {username, image} = useSignUp()
  const handleSignUpClick = () => {navigate("/signup")};
  return (
    <Fragment>
      <MainNavbar />
      <div className="mt-8 mb-12 flex flex-col items-center justify-center">
        {/* < */}
        {username && image ? (
          <p className="font-semibold font-stylish text-4xl text-pink-700 hover:text-pink-600 cursor-pointer">{`Start Exploring, "${username}"`}</p>
        ) : (
          <p className="font-semibold font-stylish text-4xl text-pink-700 hover:text-pink-600 cursor-pointer">{`Sign-In to Explore`}</p>
        )}
        <div className="mt-8 flex flex-col  gap-4 lg:flex-row md:flex-row ">
          <Card />
          <Card />
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};
