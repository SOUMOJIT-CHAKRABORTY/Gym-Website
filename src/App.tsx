import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [pageSelected, setPageSelected] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app bg-gray-20 text-gray-500">
      <Navbar pageSelected={pageSelected} setPageSelected={setPageSelected} />
    </div>
  );
}

export default App;
