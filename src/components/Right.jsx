import React from "react";
import Logo from "../assets/BreakoutAI.png";
import Login from "../assets/LoginBG.png";

const Right = () => {
  return (
    <div className="w-[50%] h-[100%] flex  justify-center items-center">
      <div className="relative 2xl:p-16 xl:p-14 xl:top-3 lg:top-4 bg-custom-image bg-no-repeat bg-contain h-fit right-5 md:p-2">
        {/* <img src={Login} className="absolute top-0 left-0 h-[100%] z-[1]" alt="" /> */}
        <div className="login flex flex-col gap-6 pl-5 pr-5  " >
          <div className="flex flex-col items-center justify-center ">
            <img src={Logo} alt="" className="w-[70px] h-[60px] lg:w-[50px] lg:h-[40px]" />
            <h1 className="font-sans font-bold text-3xl lg:text-2xl">Welcome!</h1>
          </div>

          <div className="google flex flex-col items-center justify-center gap-3 lg:gap-2">
            <button class="flex items-center bg-white  border-gray-300 rounded-xl shadow-md px-7 py-3 lg:px-5 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                class="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    {" "}
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
              <span className="text-gray-700 lg:text-sm">Google</span>
            </button>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-[50px] bg-[#CBCACA]"></div>
              <p className=" text-[#CBCACA] lg:text-sm" > or continue with </p>
              <div className="h-[1px] w-[50px] bg-[#CBCACA]"></div>
            </div>
            
          </div>

          <div className="flex flex-col ">
            <form class="space-y-4 lg:space-y-3">
              <div class="relative">
                <input
                  type="email"
                  class="w-full px-4 py-3 lg:py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-[#897BCB] active:bg-[#897BCB] hover:bg-[#897BCB]"
                  placeholder="Email"
                />
                <i class="fas fa-envelope absolute left-4 top-4 lg:top-3 text-gray-400"></i>
              </div>
              <div class="relative">
                <input
                  type="password"
                  class="w-full px-4 py-3 lg:py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 bg-[#897BCB] active:bg-[#897BCB] hover:bg-[#897BCB] "
                  placeholder="Password"
                />
                <i class="fas fa-lock absolute left-4 top-4 lg:top-3 text-gray-400"></i>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="h-4 w-4 lg:h-3 lg:w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500  disabled:cursor-wait disabled:opacity-50"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm text-gray-900 dark:text-white "
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a
                    class="font-medium lg:font-normal text-indigo-400 hover:text-indigo-500"
                    href=""
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  data-testid="login"
                  type="submit"
                  class="m-auto group relative flex w-[30%] justify-center rounded-lg border border-transparent px-4 py-2  lg:py-1.5 text-md font-medium text-black bg-white "
                >
                  Submit
                </button>
              </div>
            </form>
            <div class=""></div>
            <div class=" mt-3 lg:mt-2 w-fit md:mt-4 ">
              <span class="m-auto text-indigo-100 lg:font-normal">
                Don't have an account?
                <a
                  class="font-semibold text-white lg:font-normal"
                  href="/register"
                >
                  Create Account
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
