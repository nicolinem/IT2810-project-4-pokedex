import React from "react";
import { isLoggedInVar } from "../../../cache";
import { useSignout } from "../../hooks/useSignOut";
import Button from "../button/Button";
import LoginButton from "../button/LoginButton";


type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};
const Header: React.FC<Props> = ({ children, onClick }) => {
  let auth = isLoggedInVar();
  const { signout } = useSignout();
  
  return (
    <div className="bg-[#121A36] text-center h-44 ">
      <header className="text-4xl font-extrabold text-white tracking-widest py-32">
        P o k é d e x
      </header>
      {
          !auth ?
          <div className="absolute right-5 top-5 z-40">
          <LoginButton></LoginButton>
            </div> :
            <div className="absolute right-5 top-5 z-10">
            <Button buttonType="primary"  onClick={signout}> Sign out </Button>
          </div>
        }
    </div>
  );
};

export default Header;
