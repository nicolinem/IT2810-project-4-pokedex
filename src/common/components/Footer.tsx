import programming from "../../public/assets/programming.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121A36] text-white p-4 shadow md:px-6 md:py-8 bg-skin-secondary">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <img src={programming} className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-skin-primary">
            Team 1
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-skin-primary">
          <li>
            <a
              href="https://www.ntnu.no/studier/emner/IT2810#tab=omEmnet"
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-1/project-3"
              className="mr-4 hover:underline md:mr-6 "
            >
              GitLab
            </a>
          </li>
          <li>
            <a href="https://www.ntnu.no/idi" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 text-skin-primary sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center text-skin-primary">
        © 2022
        <p> </p>
        <a href="https://www.ntnu.no/" className="hover:underline">
          Women in Tech NTNU™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;