"use client";
import React, { useState, useRef, useEffect } from "react";
import { LoanIntentAddress, ERC20Addresses, ERC721Addresses } from "common/constants";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract } from "wagmi";
import {LoanIntentConfig} from "./contractConfig";


export default function Home() {

    const {data: borrowerIntentsData} = useReadContract({
        ...LoanIntentConfig,
        functionName: "getBorrowerIntents"
    });

    const borrowerIntents = borrowerIntentsData as any[] || []

    const {data: lenderIntentsData} = useReadContract({
        ...LoanIntentConfig,
        functionName: "getLenderIntents"
    });

    const lenderIntents = lenderIntentsData as any[] || []

    const {data: solutionsData} = useReadContract({
        ...LoanIntentConfig,
        functionName: "getSolution"
    });

    const solutions = solutionsData as any[] || []
    console.log("Borrower: ", borrowerIntents);
    console.log("Lender: ",  lenderIntents);
    console.log("Solutions: ",  solutions);


  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);
  const networkDropdownRef = useRef<HTMLDivElement | null>(null);
  const cryptoDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      networkDropdownRef.current &&
      !networkDropdownRef.current.contains(event.target as Node)
    ) {
      setShowNetworkDropdown(false);
    }
    if (
      cryptoDropdownRef.current &&
      !cryptoDropdownRef.current.contains(event.target as Node)
    ) {
      setShowCryptoDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCryptoButtonClick = () => {
    setShowCryptoDropdown((prev) => !prev);
  };

  const handleNetworkButtonClick = () => {
    setShowNetworkDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cryptoDropdownRef.current &&
        !cryptoDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCryptoDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-800 to-black shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="text-red-500 text-xl font-extrabold tracking-wide">
            Intent
          </div>
          <nav className="space-x-6">
            <a
              href="/intent"
              className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Create an intent
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Market
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              About
            </a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <ConnectButton/>
        </div>
      </header>

      <main className="px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Collateralized Intent Creation and Transaction Execution
        </h1>
        <p className="text-center text-sm mb-5">Powered by Intents</p>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="text-white px-14 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Lend
          </button>
          <button
            type="button"
            className="text-white px-14 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Borrow
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex space-x-6 items-center">
            <div className="relative inline-flex items-center">
              <input
                type="text"
                placeholder="Enter address"
                className="w-full px-5 py-2.5 text-sm font-medium text-white bg-opacity-30 rounded-lg border border-gray-300 backdrop-blur-md hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-black border-blue-800 dark:bg-opacity-30 dark:hover:bg-opacity-50 dark:focus:ring-blue-800 pl-10 pr-12"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <div
              ref={cryptoDropdownRef}
              className="relative inline-block text-left"
            >
              <button
                id="dropdownDelayButton"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-opacity-30 rounded-lg border border-gray-300 backdrop-blur-md hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300  border-blue-800 dark:bg-opacity-30 dark:hover:bg-opacity-50 dark:focus:ring-blue-800"
                type="button"
                onClick={handleCryptoButtonClick}
              >
                Crypto
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {showCryptoDropdown && (
                <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        USDC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        ETH
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        TRBTC
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              ref={networkDropdownRef}
              className="relative inline-block text-left"
              onClick={handleNetworkButtonClick}
            >
              <button
                id="dropdownDelayButton"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-opacity-30 rounded-lg border border-gray-300 backdrop-blur-md hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300  border-blue-800 dark:bg-opacity-30 dark:hover:bg-opacity-50 dark:focus:ring-blue-800"
                type="button"
              >
                Network
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {showNetworkDropdown && (
                <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Polygon
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        RootStock testnet
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Borrower Intents</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y divide-gray-800 bg-gray-900 text-white backdrop-blur-md bg-opacity-30 border border-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  Address
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  Token Address
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  Value
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  Interest (%)
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  NFT ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                  NFT Address
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {borrowerIntents.map((item, index) => (
                <tr
                  key={index}
                  className="transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-md"
                >
                  <td className="px-4 py-4 text-sm flex items-center space-x-2 font-medium text-gray-200">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 text-white">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <span>{item.address}</span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {item.tokenAddress}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {item.value.toLocaleString()} USDT
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {Number(item.maxInterest)}%
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {Number(item.collateral.nftId)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">
                    {item.collateral.nftAddress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">Lender Intents</h2>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-800 bg-gray-900 text-white backdrop-blur-md bg-opacity-30 border border-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Address
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Token Address
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Value
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider text-gray-400">
                    Interest (%)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {lenderIntents.map((item, index) => (
                  <tr
                    key={index}
                    className="transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-md"
                  >
                    <td className="px-4 py-4 text-sm flex items-center space-x-2 font-medium text-gray-200">
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 text-white">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <span>{item.address}</span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {item.tokenAddress}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {item.value.toLocaleString()} USDT
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {Number(item.minInterest)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
