"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Globe, Camera, Mic, ArrowLeft, Sparkles, Eye } from "lucide-react"
import Link from "next/link"

export default function RealTimeTranslatorPage() {
  const [inputText, setInputText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [isTranslating, setIsTranslating] = useState(false)
  const [confidence, setConfidence] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const hieroglyphicSamples = [
    { hieroglyph: "𓂀", meaning: "رجل", pronunciation: "s" },
    { hieroglyph: "𓊃", meaning: "امرأة", pronunciation: "st" },
    { hieroglyph: "𓇳", meaning: "شمس", pronunciation: "ra" },
    { hieroglyph: "𓈖", meaning: "ماء", pronunciation: "n" },
    { hieroglyph: "𓊪", meaning: "خبز", pronunciation: "t" },
  ]

  const handleTranslate = async () => {
    if (!inputText.trim()) return

    setIsTranslating(true)
    setConfidence(0)

    // محاكاة الترجمة بالذكاء الاصطناعي
    const interval = setInterval(() => {
      setConfidence((prev) => {
        if (prev >= 99.7) {
          clearInterval(interval)
          setIsTranslating(false)
          setTranslatedText("مرحباً، أنا أحب تعلم الحضارة المصرية القديمة")
          return 99.7
        }
        return prev + Math.random() * 10
      })
    }, 100)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsTranslating(true)
      setTimeout(() => {
        setIsTranslating(false)
        setTranslatedText("تم اكتشاف نص هيروغليفي: 'حياة، ازدهار، صحة'")
        setConfidence(97.3)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-blue-300 hover:text-blue-100">
              <ArrowLeft className="h-5 w-5 mr-2" />
              العودة للرئيسية
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                المترجم الفوري
              </h1>
              <p className="text-blue-300">ترجمة فورية للهيروغليفية بالذكاء الاصطناعي</p>
            </div>
          </div>
        </div>

        {/* Translation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-300">النص المدخل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="اكتب النص هنا أو ارفع صورة..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="bg-slate-900/50 border border-blue-500/30 text-blue-100"
              />

              <div className="flex gap-2">
                <Button
                  onClick={handleTranslate}
                  disabled={isTranslating}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  {isTranslating ? "جاري الترجمة..." : "ترجمة"}
                </Button>

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  رفع صورة
                </Button>

                <Button
                  variant="outline"
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 bg-transparent"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  تسجيل صوتي
                </Button>
              </div>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-xl border border-indigo-500/30">
            <CardHeader>
              <CardTitle className="text-indigo-300 flex items-center justify-between">
                الترجمة
                {confidence > 0 && (
                  <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    دقة: {confidence.toFixed(1)}%
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isTranslating ? (
                <div className="text-center py-8">
                  <div className="inline-block w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-indigo-300">جاري تحليل النص بالذكاء الاصطناعي...</p>
                  {confidence > 0 && (
                    <div className="mt-4">
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${confidence}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-indigo-400 mt-2">{confidence.toFixed(1)}% مكتمل</p>
                    </div>
                  )}
                </div>
              ) : translatedText ? (
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
                    <p className="text-indigo-100 text-lg">{translatedText}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm text-indigo-300">تم بواسطة الذكاء الاصطناعي الكمي</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400">الترجمة ستظهر هنا...</div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Hieroglyphic Samples */}
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-blue-300 flex items-center gap-2">
              <Eye className="h-6 w-6" />
              عينات هيروغليفية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {hieroglyphicSamples.map((sample, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/30 text-center cursor-pointer hover:bg-slate-600/50 transition-colors"
                  onClick={() => {
                    setInputText(sample.hieroglyph)
                    setTranslatedText(sample.meaning)
                    setConfidence(99.7)
                  }}
                >
                  <div className="text-4xl mb-2">{sample.hieroglyph}</div>
                  <div className="text-blue-300 font-bold">{sample.meaning}</div>
                  <div className="text-sm text-slate-400">{sample.pronunciation}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
