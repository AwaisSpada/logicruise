import React from "react";
import { Link } from "react-router-dom";
// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";
initTWE({ Collapse });
const Doubts = () => {
  return (
    <div className="mt-20 text-white">
      <div className="text-center mb-20">
        <h4 className="text-[#ADDAB2] text-[12px]">
          S O M E &nbsp; D O U B T S
        </h4>
        <h1 className="heroheading text-4xl text-white mt-3">
          Frequently Asked Questions
        </h1>
        <h5 className="text-white text-[17px]">
          Your answers await right here
        </h5>
      </div>
      <div className="lg:flex justify-center gap-[20px]">
        <div className="left md:w-[100%] lg:w-[30%] relative">
          <div class="block rounded-2xl border-4 border-[#2d3b46] p-8 bg-[#0C1821]/60 shadow-secondary-1 dark:bg-surface-dark">
            <div class="text-surface dark:text-white">
              <p class="mb-4 text-base mt-5 text-center mainheading text-xl">
                Have any more questions or want to start collaborating?
              </p>
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://framerusercontent.com/images/yYdklccnAyP8hogD2YvPwbRrsU.png"
                  alt=""
                />
                <div>
                  <button className="py-2 px-10 rounded-lg font-bold bg-white text-black absolute bottom-14 left-[140px] mb-2">
                    Let's Talk
                  </button>
                  <h5 className="text-center text-sm">
                    * Response time is typically around 12 hours
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="right lg:w-[45%]">
          <div id="accordionExample">
            <div class="rounded-t-xl border-4 border-[#2d3b46] bg-[#0C1821]/60 dark:border-neutral-600 dark:bg-body-dark">
              <h2 class="mb-0" id="headingOne">
                <Link
                  class="group relative flex w-full items-center rounded-t-lg border-0 bg-[#0C1821]/60 px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-[#0C1821] [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                  type="button"
                  data-twe-collapse-init
                  data-twe-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Are you available to hire full time?
                  <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </h2>
              <div
                id="collapseOne"
                class="!visible"
                data-twe-collapse-item
                data-twe-collapse-show
                aria-labelledby="headingOne"
                data-twe-parent="#accordionExample"
              >
                <div class="px-5 py-4">
                  At the moment, I'm pretty happy where I am. Currently I am not
                  looking for any full-time opportunities. But that being said,
                  I am always open to discuss interesting opportunities,
                  collaborations and other fun stuff. If you’re interested in
                  discussing a project, making something great together,please
                  fill the form above. Simply want to get get in touch? Happy to
                  connect on socials.
                </div>
                <div class="px-5 py-4 mt-10">Happy to connect on socials.</div>
              </div>
            </div>
          </div>
          <div id="accordionExample">
            <div class="rounded-t-xl border-4 border-[#2d3b46] bg-[#0C1821]/60 dark:border-neutral-600 dark:bg-body-dark">
              <h2 class="mb-0" id="headingTwo">
                <Link
                  class="group relative flex w-full items-center rounded-t-lg border-0 bg-[#0C1821]/60 px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-[#0C1821] [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                  type="button"
                  data-twe-collapse-init
                  data-twe-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  How do your quote pricing works and 
                  when can we get on call?
                  <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </h2>
              <div
                id="collapseTwo"
                class="!visible"
                data-twe-collapse-item
                data-twe-collapse-show
                aria-labelledby="headingTwo"
                data-twe-parent="#accordionExample"
              >
                <div class="px-5 py-4">
                Our hiring process typically involves an initial phone screen with a recruiter, followed by a technical assessment and interviews with the hiring manager and team members.
                </div>
              </div>
            </div>
          </div>
          <div id="accordionExample">
            <div class="rounded-t-xl border-4 border-[#2d3b46] bg-[#0C1821]/60 dark:border-neutral-600 dark:bg-body-dark">
              <h2 class="mb-0" id="headingThree">
                <Link
                  class="group relative flex w-full items-center rounded-t-lg border-0 bg-[#0C1821]/60 px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-[#0C1821]/60 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                  type="button"
                  data-twe-collapse-init
                  data-twe-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Can you facelift my design?
                  <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </h2>
              <div
                id="collapseThree"
                class="!visible"
                data-twe-collapse-item
                data-twe-collapse-show
                aria-labelledby="headingThree"
                data-twe-parent="#accordionExample"
              >
                <div class="px-5 py-4">
                Our hiring process typically involves an initial phone screen with a recruiter, followed by a technical assessment and interviews with the hiring manager and team members.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubts;
