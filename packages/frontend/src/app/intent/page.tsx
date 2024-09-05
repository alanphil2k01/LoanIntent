'use client'
import React, { useState } from 'react';

function UserForm() {
  const [isBorrower, setIsBorrower] = useState(true);
  const [tokenAddress, setTokenAddress] = useState('');
  const [value, setValue] = useState('');
  const [interest, setInterest] = useState('');
  const [nftId, setNftId] = useState('');
  const [nftAddress, setNftAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      tokenAddress,
      value,
      interest,
      ...(isBorrower && { nftId, nftAddress }),
    };
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-800 to-black shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="text-red-500 text-xl font-extrabold tracking-wide">Intent</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">Create an intent</a>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">Market</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">About</a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <button className="bg-transparent border border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out shadow-sm">Connect Wallet</button>
        </div>
      </header>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-900">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-md w-full mx-4 my-8">
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setIsBorrower(true)}
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out ${!isBorrower ? 'bg-gray-800 text-white' : 'bg-gray-400 text-gray-800'}`}
            >
              Borrower
            </button>
            <button
              onClick={() => setIsBorrower(false)}
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out ${isBorrower ? 'bg-gray-800 text-white' : 'bg-gray-400 text-gray-800'}`}
            >
              Lender
            </button>
          </div>

          <h2 className="text-3xl font-extrabold text-white text-center mb-8">
            {isBorrower ? 'Create an Intent (Borrower)' : 'Create an Intent (Lender)'}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Token Address</label>
              <input
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Value</label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Interest</label>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
              />
            </div>

            {isBorrower && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">NFT Id</label>
                  <input
                    type="text"
                    value={nftId}
                    onChange={(e) => setNftId(e.target.value)}
                    className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">NFT Address</label>
                  <input
                    type="text"
                    value={nftAddress}
                    onChange={(e) => setNftAddress(e.target.value)}
                    className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
                  />
                </div>
              </>
            )}

            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg rounded-lg hover:from-green-600 hover:to-teal-600 transition duration-300 ease-in-out shadow-lg"
              >
                Confirm Intent
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
