"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Coins, Star, Gift } from 'lucide-react'

export default function ShopLoading() {
  const [progress, setProgress] = useState(0)
  const [currentProduct, setCurrentProduct] = useState(0)

  const products = [
    { name: "تمثال توت عنخ آمون", icon: "🏺" },
    { name: "قلادة عين حورس", icon: "💎" },
    { name: "تيشيرت فرعوني", icon: "👕" },
    { name: "كتاب الهيروغليفية", icon: "📚" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 8
      })
      setCurrentProduct((prev) => (prev + 1) % products.length)
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating Products */}
      <div className="absolute inset-0">
        {["🏺", "💎", "👕", "📚", "🎁", "💰"].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-3xl text-indigo-300/40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-md mx-auto px-6">
        {/* Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <ShoppingBag className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center animate-spin">
            <Coins className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">المتجر الفرعوني</h2>
          <p className="text-indigo-600">جاري تحميل المنتجات الأثرية...</p>
        </div>

        {/* Current Product */}
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl">
          <div className="text-4xl mb-2">{products[currentProduct].icon}</div>
          <div className="text-lg font-bold text-gray-800 mb-2">{products[currentProduct].name}</div>
          <div className="text-sm text-gray-600">جاري التحميل...</div>
        </div>

        {/* Progress */}
        <div className="w-full bg-indigo-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-sm text-indigo-700">{Math.round(Math.min(progress, 100))}% مكتمل</div>
      </div>
    </div>
  )
}
