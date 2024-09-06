import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-pink-500 text-white flex flex-col items-center w-full py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* First section with two columns of links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center md:text-left">
          {/* Column 1 - Information Related To */}
          <div className="md:col-span-2">
            <ul>
              <li className="font-semibold text-xxl md:text-xl pl-56 underline mb-4 ">Departments</li>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <li><a href="https://agriwelfare.gov.in/" className="hover:underline">Agriculture</a></li>
                <li><a href="https://www.commerce.gov.in/" className="hover:underline">Commerce</a></li>
                <li><a href="https://mod.gov.in/" className="hover:underline">Defence</a></li>
                <li><a href="https://moef.gov.in/" className="hover:underline">Environment & Forest</a></li>
                <li><a href="https://dfpd.gov.in/" className="hover:underline">Food & Public Distribution</a></li>
                <li><a href="https://darpg.gov.in/" className="hover:underline">Governance & Administration</a></li>
                <li><a href="https://mohua.gov.in/" className="hover:underline">Housing</a></li>
                <li><a href="https://heavyindustries.gov.in" className="hover:underline">Industries</a></li>
                <li><a href="https://mib.gov.in/" className="hover:underline">Information & Broadcasting</a></li>
                <li><a href="https://socialjustice.gov.in/" className="hover:underline">Law & Justice</a></li>
                <li><a href="https://www.msd.govt.nz/" className="hover:underline">Social Development</a></li>
                <li><a href="https://tourism.gov.in/" className="hover:underline">Travel & Tourism</a></li>
              </ul>
            </ul>
          </div>

          {/* Column 2 - Logos and Information */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://data.gov.in/"
              title="Data Portal India (External site that opens in a new window)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/img-ftr-open-data-portal.png"
                alt="Data Portal India"
                className="h-10"
              />
            </a>
            <a
              href="https://pib.gov.in/"
              title="Press Information Bureau Government of India (External site that opens in a new window)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/pib.png"
                alt="Press Information Bureau"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* NIC Information */}
        <div className="mt-10 flex flex-col items-center text-center">
          <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nic.png"
              alt="NIC"
              className="h-10"
            />
          </a>
          <p className="mt-4">
            This Portal is a{" "}
            <a
              href="https://www.meity.gov.in/content/mission-mode-projects"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              Mission Mode Project
            </a>{" "}
            under the{" "}
            <a
              href="https://www.meity.gov.in/divisions/national-e-governance-plan"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              National E-Governance Plan
            </a>
            , owned by the{" "}
            <a
              href="https://www.nic.in/"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              National Informatics Centre (NIC)
            </a>
          </p>
        </div>

        {/* Last Updated Section */}
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Government of India. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
