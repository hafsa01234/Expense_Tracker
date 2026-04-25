import React from 'react'

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Total Balance</p>
          <h3 className="text-2xl font-bold">$0.00</h3>
        </div>
      </div>
    </div>
  )
}

export default Home