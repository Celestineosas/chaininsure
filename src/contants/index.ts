import React from "react";
import { crest } from "../assets";

export interface NavLink {
  label: string;
  link: string;
}

export interface topTItems {
  id: number;
  label: string;
}
export interface bottomTItems {
  id: number;
  label: string;
  asset: string;
  value: number;
  img: string;
  status: string

}
export interface activeCoverageItems {
  id: number;
  label: string;
  policyID: string;
  coverage: number;
  date: number;
  percentage: number

}

export interface PolicyDetailItems {
  id: number;
  label: string;
  value: string;
}


export const navLinks: NavLink[] = [
  { label: "Dashboard", link: "dashboard" },
  { label: "Pools", link: "pools" },
  { label: "Claims", link: "claims" },
  { label: "Features", link: "Governance" },
];


export const topT: topTItems[] = [
  { id: 1, label: "Assets" },
  { id: 2, label: "Value(USD)" },
  { id: 3, label: "Status" },
];
export const bottomTItems: bottomTItems[] = [
  { id: 1, label: "Dream Title #123", asset:"NFT", value: 1500.00, img:crest, status:"Uninsured" },
  { id: 2, label: "Virtual Land Parcel #42", asset:"Virtual Asset", value: 82500.00, img:crest, status:"insured" },
  { id: 3, label: "Avatar Wearable #7", asset:"Digital Item", value: 500.00, img:crest, status:"Uninsured" },
];

export const activeCoverage: activeCoverageItems[] = [
  { id: 1, label: "Virtual Land Parcel #42", policyID: "8A3F...C2E1", coverage: 8250.00, date: 210, percentage: 80 },
  { id: 2, label: "CryptoPunk #7804", policyID: "8A3F...C2E1", coverage: 150000.00, date: 45, percentage: 25 },

];

export const policyDetails: PolicyDetailItems[] = [
  { id: 1, label: "Asset Covered", value: "Digital Assest X" },
  { id: 2, label: "Covered Period", value: "July 1, 2024 - June 30, 2025" },
  { id: 3, label: "Premium Paid", value: "1.5ETH" },
  { id: 4, label: "Covered Amount", value: "10ETH" },
  { id: 5, label: "Terms and Condtions", value: "View Terms" },
 
];
