import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-bold text-primary mb-4">Login</h2>
        <p className="text-gray-600">Enter your details to access your account.</p>
        {/* You will build the actual form here next */}
        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login