import React from 'react'

const ReduxRTK = () => {
  return (
    <>
      <div className="text-center font-mont">
        <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
          REACT REDUX AND RTK
        </h1>
        <h2 className="font-gilroy text-center text-8xl">0</h2>
        <button type="button" className="bg-green-600 p-5" >
          Increase
        </button>
        <button type="button" className="bg-orange-400 p-5" >
          Reset
        </button>
        <button
          type="button"
          className="bg-red-600 p-5 cursor-not-allowed pointer-events-none opacity-50"
        >
          Decrease
        </button>
        <hr className="my-10" />
      </div>
    </>
  )
}

export default ReduxRTK
