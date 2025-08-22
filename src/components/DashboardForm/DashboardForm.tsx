import { useState } from "react";
import { Button } from "../Button/Button";


export default function DashboardForm() {
  const [assetType, setAssetType] = useState("");
  const [assetValue, setAssetValue] = useState<number | "">("");
  const [coveragePeriod, setCoveragePeriod] = useState("");


  return (
    <div className="mx-auto bg-background-card text-white rounded-xl shadow-lg p-6 space-y-6">

      <h1 className='text-white font-Outfit text-lg mb-3'>Get an Instant Insurance Quote</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="block font-Outfit text-sm mb-2">Asset Type</h2>
          <select
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
            className="w-full bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select asset type</option>
            <option value="nft">NFT</option>
            <option value="land">Virtual Land</option>
            <option value="wearable">Avatar Wearable</option>
          </select>
        </div>

        <div>
          <h2 className="block font-Outfit text-sm mb-2">Asset Value(USD)</h2>
          <input
            type="number"
            value={assetValue}
            onChange={(e) => setAssetValue(Number(e.target.value))}
            placeholder="e.g., 1500"
            className="w-full bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <h2 className="block font-Outfit text-sm mb-2">Coverage Period</h2>
        <select
          value={coveragePeriod}
          onChange={(e) => setCoveragePeriod(e.target.value)}
          className="w-full bg-gray-600 font-Outfit border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select period</option>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
          <option value="180">180 days</option>
        </select>
      </div>


      <div className="flex items-center justify-between bg-gray-700 px-4 py-3 rounded-lg">
        <div className="font-Outfit text-gray-500">
          <p className="text-sm">Estimated Premium: </p>
          <span className="text-blue text-md font-semibold">$12.5 / month</span>
        </div>
        <Button
          className="bg-blue text-white text-sm rounded-[10px] font-medium px-8 py-2 transition"
        >
          Purchase Policy
        </Button>
      </div>
    </div>
  );
}