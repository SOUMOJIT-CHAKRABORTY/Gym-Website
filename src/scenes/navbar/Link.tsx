import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  pageSelected: SelectedPage;
  setPageSelected: (val: SelectedPage) => void;
};

const Link = ({ page, pageSelected, setPageSelected }: Props) => {
  const toLowercase = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        pageSelected === toLowercase ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${toLowercase}`}
      onClick={() => setPageSelected(toLowercase)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
