import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setPageSelected: (val: SelectedPage) => void;
};

const Benifit = ({ icon, title, description, setPageSelected }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p>{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setPageSelected(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benifit;
