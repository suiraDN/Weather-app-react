import React from 'react'

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Thusday, 31 May 2002 | Local time:
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium"> Vilnius, LT</p>
      </div>
    </div>
  )
}

export default TimeAndLocation