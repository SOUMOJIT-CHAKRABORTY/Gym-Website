import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  pageSelected: SelectedPage;
  setPageSelected: (val: SelectedPage) => void;
};

const Navbar = ({ pageSelected, setPageSelected }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left Side */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
          </div>
          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  pageSelected={pageSelected}
                  setPageSelected={setPageSelected}
                />
                <Link
                  page="Benifits"
                  pageSelected={pageSelected}
                  setPageSelected={setPageSelected}
                />
                <Link
                  page="Our Classes"
                  pageSelected={pageSelected}
                  setPageSelected={setPageSelected}
                />
                <Link
                  page="Contact Us"
                  pageSelected={pageSelected}
                  setPageSelected={setPageSelected}
                />
              </div>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>sign in</p>
                <ActionButton setPageSelected={setPageSelected}>
                  Become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
