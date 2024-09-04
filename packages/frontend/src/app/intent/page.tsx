import React from 'react';

function UserForm() {
  return (
    <>
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-800 to-black shadow-lg">
  <div className="flex items-center space-x-6">
    <div className="text-red-500 text-xl font-extrabold tracking-wide">Intent</div>
    <nav className="space-x-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
        Create an intent
      </a>
      <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
        Market
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
        About
      </a>
    </nav>
  </div>
  <div className="flex space-x-4">
    <button className="bg-transparent border border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out shadow-sm">
      Connect Wallet
    </button>
  </div>
</header>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-900">
  <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-md w-full mx-4 my-8">
    <h2 className="text-3xl font-extrabold text-white text-center mb-8">Create an Intent</h2>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Collateral Token</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Collateral Amount</label>
        <input
          type="number"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Borrow Token</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Borrow Amount</label>
        <input
          type="number"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Interest Rate</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Loan Duration</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Repayment Date</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-white mb-2">Collateral Ratio</label>
        <input
          type="text"
          className="w-full px-5 py-3 bg-white bg-opacity-20 text-white border border-transparent focus:border-indigo-500 rounded-lg focus:outline-none transition duration-300 ease-in-out"
        />
      </div>
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
