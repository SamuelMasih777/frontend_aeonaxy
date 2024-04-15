import { Fragment } from "react";
import gif from "../../assests/video/dribbble.gif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateEmail, validateName, validatePassword } from "../../utils";
import { useSignUp } from "../../context/SignUp-Context";

let isEmailValid, isNameValid, isPasswordValid;

export const SignUp = ({onNext}) => {
  const {name, username, email, password, signUpDispatch} = useSignUp();

    const navigate = useNavigate();
    const handleSubmitButton = (e) =>{
        e.preventDefault();
        onNext();
    }
    const handleSignInClick=()=>{
      navigate('/')
    }
    const handleNameChange=(e)=>{
      // isNameValid = validateName(e.target.value);
      // if(isNameValid){
        signUpDispatch({
          type:"NAME",
          payload: e.target.value,
        })
      // } else {
      //   console.log("Invalid Name");
      // }
    }
    const handleUserNameChange=(e)=>{
      signUpDispatch({
        type:"USERNAME",
        payload:e.target.value,
      })
    }
    const handleEmailChange=(e)=>{
      isEmailValid = validateEmail(e.target.value);
      if(isEmailValid){
      signUpDispatch({
        type:"EMAIL",
        payload:e.target.value,
      })
    }else{
      console.log("Invalid Email");
    }
    }
    const handlePasswordChange=(e)=>{
      isPasswordValid = validatePassword(e.target.value);
      if(isPasswordValid){
      signUpDispatch({
        type:"PASSWORD",
        payload:e.target.value,
      })
    }else{
      console.log("Invalid Password");
    }
    }
    const handleDribbbleClick =()=>{
      navigate('/');
    }
  return (
    <Fragment>
      <section className="">
        <div className="container h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="relative h-screen mb-12 md:mb-0 md:w-8/12 lg:w-4/12">
              <img
                src={gif}
                alt="Dribbble GIF"
                className="w-full h-full"
              />
              <div>
              <button className="absolute top-16 left-24 italic font-mono text-4xl font-light text-sky-900 font-stylish" onClick={handleDribbbleClick}>Dribbble</button>
              <p className="absolute top-28 left-24 items-center justify-center font-extrabold text-2xl">Discover the world's<br></br> Top Designers and Creatives</p>
              </div>              
              <p className="absolute bottom-10 left-24 font-serif text-lg font-light text-green-800">Art by<span className="underline ml-2"><Link to="https://samuelmasihsls777.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer" >Samuel Masih</Link></span></p>
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 xl:mr-20 lg:mr-10 lg:w-6/12 mb-2">
                <div className="flex font-semibold justify-end mb-10">Already a Member? <span className="font-medium text-violet-700 ml-1"><button onClick={handleSignInClick}>Sign In</button></span></div>
              <h1 className="xl:ml-48 lg:ml-32 md:ml-16 mt-2 mb-12 text-3xl font-bold">
                Sign Up to Dribbble
              </h1>
              {/* <div className="xl:ml-48 mb-8"><ul className="font-semibold text-md text-red-500"><li>Error</li></ul></div> */}
              <form class="max-w-sm mx-auto" onSubmit={handleSubmitButton}>
                {/* <!-- Email input --> */}

                {/* <form > */}
                <div className="flex flex-rows">
                  <div class="grid grid-cols-2 gap-3 mb-4">
                    <label
                      for="name"
                      class="block mb-2 text-md font-bold text-gray-900 "
                    >
                      Name
                      <input
                        defaultValue={name}
                        type="name"
                        id="name"
                        class="focus:outline-none focus:border-transparent bg-gray-100 text-gray-900 font-bold text-md rounded-lg block w-full p-2.5"
                        placeholder="Johnny"
                        required
                        onChange={handleNameChange}
                      />
                    </label>
                    <label
                      for="username"
                      class="block mb-2 text-md font-bold text-gray-900"
                    >
                      Username
                      <input
                        defaultValue={username}
                        type="username"
                        id="username"
                        class="focus:outline-none focus:border-transparent bg-gray-100 text-gray-900 text-md rounded-lg   block w-full p-2.5 "
                        placeholder="John"
                        required
                        onChange={handleUserNameChange}
                      />
                    </label>
                  </div>
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block text-md font-bold text-gray-900 dark:text-gray"
                  >
                    Email
                  </label>
                  <input
                    defaultValue={email}
                    type="email"
                    id="email"
                    class="focus:outline-none focus:border-transparent bg-gray-100 text-gray-900 font-bold text-md rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="account@dribble.design"
                    required
                    onChange={handleEmailChange}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="password"
                    class="block text-md font-bold text-gray-900 dark:text-gray"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="focus:outline-none focus:border-transparent  bg-gray-100 font-bold text-gray-900 text-md rounded-lg  block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="6+ characters"
                    required
                    maxlength="12"
                    minlength="7"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-sm text-gray-300 dark:text-gray-500"
                  >
                    Creating an account means you're okay with our <span className="text-violet-700 cursor-pointer">Terms of
                    Service,</span> <button><span className="text-violet-700">Privacy Policy,</span></button> and our default <span className="text-violet-700 cursor-pointer">Notification
                    Settings.</span>
                  </label>
                </div>
                <button
                  type="submit"
                  class=" text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                  Create Account
                </button>
                {/* </form> */}
                <div className="grid grid-cols-1 text-xs font-sm mt-4 dark:text-gray-400">
                  <p>
                    This site is protected by reCAPTCHA and the Google<br></br>{" "}
                    <button><span className="text-violet-700">Privacy Policy</span></button> and <button><span className="text-violet-700">Terms of Service</span></button> apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
