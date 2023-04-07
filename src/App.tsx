import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benifits from "@/scenes/benifits";

function App() {
  const [pageSelected, setPageSelected] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setPageSelected(SelectedPage.Home);
      }

      if (window.scrollY !== 0 && window.scrollY > 50) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 text-gray-500">
      <Navbar
        isTopOfPage={isTopOfPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <Home setPageSelected={setPageSelected} />
      <Benifits setPageSelected={setPageSelected} />
    </div>
  );
}

export default App;
