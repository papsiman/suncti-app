import NAVBAR from '@/components/navbar'
import React from 'react'

export default function AudioCode() {
  return (
    <div className="flex flex-col">
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-206px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-6xl font-semibold">Audiocodes</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Product</li>
              <li>Audiocodes</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-10 w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div></div>
    </div>
  )
}
