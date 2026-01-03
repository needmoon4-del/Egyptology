"use client"

import { useState, useEffect } from "react"
import { MapPin, Globe, Eye, Compass } from 'lucide-react'

export default function PlacesLoading() {
  const [progress, setProgress] = useState(0)
  const [currentLocation, setCurrentLocation] = useState(0)

  const locations = [
    { name: "الأهرامات", icon: "🏛️" },
    { name: "معبد الكرنك", icon: "🏺" },
    { name: "وادي الملوك", icon: "⚱️" },
    { name: "أبو سمبل", icon: "🗿" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 12
      })
      setCurrentLocation((prev) => (prev + 1) % locations.length)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Map Points */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-md mx-auto px-6">
        {/* Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <Compass className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">الأماكن الأثرية</h2>
          <p className="text-green-600">جاري تحضير الجولة الافتراضية...</p>
        </div>

        {/* Current Location */}
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl">
          <div className="text-4xl mb-2">{locations[currentLocation].icon}</div>
          <div className="text-lg font-bold text-gray-800 mb-2">{locations[currentLocation].name}</div>
          <div className="text-sm text-gray-600">جاري التحميل...</div>
        </div>

        {/* Progress */}
        <div className="w-full bg-green-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-sm text-green-700">{Math.round(Math.min(progress, 100))}% مكتمل</div>
      </div>
    </div>
  )
}
