"use client"

import { useState, useEffect } from "react"
import { BookOpen, Search, Sparkles, Eye, Brain } from 'lucide-react'

export default function DictionaryLoading() {
  const [progress, setProgress] = useState(0)
  const [currentSymbol, setCurrentSymbol] = useState(0)

  const hieroglyphSymbols = ["𓂀", "𓇳", "𓊪", "𓏏", "𓊖", "𓋹", "𓋴", "𓈖"]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 15
      })
      setCurrentSymbol((prev) => (prev + 1) % hieroglyphSymbols.length)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating Hieroglyphs */}
      <div className="absolute inset-0">
        {hieroglyphSymbols.map((symbol, index) => (
          <div
            key={index}
            className="absolute text-4xl text-blue-300/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-md mx-auto px-6">
        {/* Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center animate-spin">
            <Brain className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-2">قاموس الهيروغليفية</h2>
          <p className="text-blue-600">جاري تحميل الرموز المقدسة...</p>
        </div>

        {/* Current Symbol Display */}
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl">
          <div className="text-6xl mb-4 animate-pulse">{hieroglyphSymbols[currentSymbol]}</div>
          <div className="text-sm text-gray-600">تحميل الرموز الهيروغليفية...</div>
        </div>

        {/* Progress */}
        <div className="w-full bg-blue-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-sm text-blue-700">{Math.round(Math.min(progress, 100))}% مكتمل</div>
      </div>
    </div>
  )
}
