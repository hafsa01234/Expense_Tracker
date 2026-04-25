import React from 'react'

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-3xl font-bold text-primary mb-4">Create Account</h2>
        <p className="text-gray-600">Join us to start tracking your expenses.</p>
        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
          Register
        </button>
      </div>
    </div>
  )
}

export default SignUp