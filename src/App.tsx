import emekLogo from "./assets/compare-icon.png";

import { DataComparison } from "./components/comparison/data-comparison";

const App = () => {

  return (
    <div className="flex flex-col gap-6 items-center h-screen bg-slate-900 dark">
      <div className="h-28 bg-slate-900 w-full flex items-center justify-start">
        <img src={emekLogo} alt="Emek" width={75} height={75} className="animate-spin animation-duration-3000" />
        <div className="text-white text-5xl font-bold">Emek</div>
      </div>

      <DataComparison />
    </div >
  );
};

export { App };
