"use client"

import { useState, useEffect } from "react"
import { BookOpen, Crown, Sparkles, Star } from 'lucide-react'

export default function StoriesLoading() {
  const [progress, setProgress] = useState(0)
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    { title: "أسطورة إيزيس وأوزوريس", icon: "👑" },
    { title: "رحلة رع عبر العالم السفلي", icon: "☀️" },
    { title: "حكاية الملكة نفرتيتي", icon: "💎" },
    { title: "أسرار توت عنخ آمون", icon: "🏺" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 10
      })
      setCurrentStory((prev) => (prev + 1) % stories.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating Story Elements */}
      <div className="absolute inset-0">
        {["📜", "👑", "⚱️", "🏺", "💎", "☀️"].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-3xl text-orange-300/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10 max-w-md mx-auto px-6">
        {/* Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Crown className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-1 -left-1 w-8 h-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center animate-spin">
            <Star className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-orange-800 mb-2">قصص الفراعنة</h2>
          <p className="text-orange-600">جاري تحضير الحكايات الأسطورية...</p>
        </div>

        {/* Current Story */}
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-xl">
          <div className="text-4xl mb-2">{stories[currentStory].icon}</div>
          <div className="text-lg font-bold text-gray-800 mb-2">{stories[currentStory].title}</div>
          <div className="text-sm text-gray-600">جاري التحميل...</div>
        </div>

        {/* Progress */}
        <div className="w-full bg-orange-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-sm text-orange-700">{Math.round(Math.min(progress, 100))}% مكتمل</div>
      </div>
    </div>
  )
}
