"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WallpapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "جميع الخلفيات" },
    { id: "mobile", name: "موبايل" },
    { id: "desktop", name: "كمبيوتر" },
    { id: "tablet", name: "تابلت" },
    { id: "4k", name: "4K عالي الجودة" },
  ]

  const wallpapers = [
    {
      id: 1,
      title: "الأهرامات الذهبية عند الغروب",
      category: "mobile",
      resolution: "1080x1920",
      size: "2.5 MB",
      downloads: 1250,
      likes: 89,
      image: "/images/mobile-wallpaper.png",
      tags: ["أهرامات", "غروب", "ذهبي"],
    },
    {
      id: 2,
      title: "معبد الكرنك المقدس",
      category: "desktop",
      resolution: "3840x2160",
      size: "8.2 MB",
      downloads: 2100,
      likes: 156,
      image: "/images/desktop-wallpaper.png",
      tags: ["معبد", "كرنك", "أعمدة"],
    },
    {
      id: 3,
      title: "الهيروغليفية الذهبية",
      category: "tablet",
      resolution: "2048x2732",
      size: "4.1 MB",
      downloads: 890,
      likes: 67,
      image: "/placeholder.svg?height=400&width=300",
      tags: ["هيروغليفية", "ذهبي", "رموز"],
    },
    {
      id: 4,
      title: "أبو الهول الأسطوري",
      category: "4k",
      resolution: "3840x2160",
      size: "12.5 MB",
      downloads: 3200,
      likes: 234,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["أبو الهول", "صحراء", "غموض"],
    },
    {
      id: 5,
      title: "نهر النيل والفلوكة",
      category: "mobile",
      resolution: "1080x1920",
      size: "3.2 MB",
      downloads: 1800,
      likes: 123,
      image: "/placeholder.svg?height=600&width=300",
      tags: ["نيل", "فلوكة", "نهر"],
    },
    {
      id: 6,
      title: "مقبرة توت عنخ آمون",
      category: "desktop",
      resolution: "2560x1440",
      size: "6.8 MB",
      downloads: 2800,
      likes: 198,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["توت عنخ آمون", "مقبرة", "كنوز"],
    },
  ]

  const filteredWallpapers = wallpapers.filter(
    (wallpaper) => selectedCategory === "all" || wallpaper.category === selectedCategory,
  )

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/images/pharaonic-bg.png'), linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay, normal",
      }}
    >
      {/* Pharaonic Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/papyrus-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header */}
      <header
        className="relative text-white p-4 shadow-2xl border-b-4 border-yellow-400"
        style={{
          backgroundImage: `url('/images/pharaonic-header.png'), linear-gradient(90deg, #92400e 0%, #d97706 50%, #f59e0b 100%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "overlay, normal",
        }}
      >
        <div className="flex items-center gap-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-yellow-600/20">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Download className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold drop-shadow-lg" style={{ fontFamily: "serif" }}>
                𓊪𓏏𓊖 خلفيات فرعونية عالية الجودة 𓊪𓏏𓊖
              </h1>
              <p className="text-yellow-200 text-sm">اختر من مجموعة رائعة من الخلفيات الفرعونية</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6 relative z-10">
        {/* Stats */}
        <Card className="bg-gradient-to-br from-yellow-50/95 to-amber-100/95 border-2 border-yellow-400 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-800">50+</div>
                <div className="text-sm text-amber-700">خلفية متاحة</div>
                <div className="text-xl mt-1">𓊪𓏏𓊖</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">25K+</div>
                <div className="text-sm text-amber-700">تحميل</div>
                <div className="text-xl mt-1">𓇳</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">4K</div>
                <div className="text-sm text-amber-700">جودة عالية</div>
                <div className="text-xl mt-1">𓈖</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-800">مجاني</div>
                <div className="text-sm text-amber-700">تحميل مجاني</div>
                <div className="text-xl mt-1">𓂀</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg"
                  : "border-2 border-yellow-400 text-amber-700 hover:bg-yellow-50 bg-white/90"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Wallpapers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWallpapers.map((wallpaper) => (
            <Card
              key={wallpaper.id}
              className="bg-white/95 backdrop-blur border-2 border-yellow-400 shadow-2xl pharaonic-card"
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <Image
                    src={wallpaper.image || "/placeholder.svg"}
                    alt={wallpaper.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                      {wallpaper.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-amber-900">{wallpaper.title}</h3>

                  <div className="flex flex-wrap gap-1">
                    {wallpaper.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs text-amber-700">
                    <div>
                      <span className="font-medium">الدقة:</span>
                      <div>{wallpaper.resolution}</div>
                    </div>
                    <div>
                      <span className="font-medium">الحجم:</span>
                      <div>{wallpaper.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-amber-600">
                    <div className="flex items-center gap-3">
                      <span>📥 {wallpaper.downloads.toLocaleString()}</span>
                      <span>❤️ {wallpaper.likes}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg">
                    <Download className="h-4 w-4 mr-2" />
                    تحميل مجاني
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Instructions */}
        <Card className="bg-gradient-to-br from-amber-50/95 to-yellow-100/95 border-2 border-yellow-400 shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-amber-900 text-center" style={{ fontFamily: "serif" }}>
              𓊪𓏏𓊖 تعليمات التحميل 𓊪𓏏𓊖
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-amber-800">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>اختر الخلفية المناسبة لجهازك</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>اضغط على زر "تحميل مجاني"</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>احفظ الصورة في معرض الصور</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>اذهب إلى إعدادات الجهاز واختر الخلفية</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
