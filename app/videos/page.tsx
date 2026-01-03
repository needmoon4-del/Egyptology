"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Video, ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Heart, Share2, Eye, Clock, Star, Filter, Grid, List, Download, Bookmark, ThumbsUp, MessageCircle, Crown, Sparkles, Award, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [favorites, setFavorites] = useState<string[]>([])
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "الكل", count: 856 },
    { id: "history", name: "التاريخ", count: 234 },
    { id: "pharaohs", name: "الفراعنة", count: 156 },
    { id: "temples", name: "المعابد", count: 123 },
    { id: "pyramids", name: "الأهرامات", count: 89 },
    { id: "culture", name: "الثقافة", count: 167 },
    { id: "archaeology", name: "الآثار", count: 87 },
  ]

  const videos = [
    {
      id: "1",
      title: "أسرار الهرم الأكبر - رحلة داخل عجائب الدنيا السبع",
      description: "استكشف الأسرار المخفية داخل الهرم الأكبر في الجيزة واكتشف التقنيات المتقدمة التي استخدمها المصريون القدماء",
      thumbnail: "/placeholder.svg?height=200&width=350&text=الهرم+الأكبر",
      duration: "15:42",
      views: 125847,
      likes: 8934,
      category: "pyramids",
      uploadDate: "2024-01-15",
      quality: "4K",
      rating: 4.8,
      comments: 1247,
      isNew: true,
      isTrending: true,
    },
    {
      id: "2",
      title: "الملك توت عنخ آمون - قصة الفرعون الذهبي",
      description: "تعرف على حياة وموت الملك الشاب توت عنخ آمون واكتشف كنوز مقبرته الذهبية",
      thumbnail: "/placeholder.svg?height=200&width=350&text=توت+عنخ+آمون",
      duration: "22:18",
      views: 98765,
      likes: 7234,
      category: "pharaohs",
      uploadDate: "2024-01-12",
      quality: "HD",
      rating: 4.9,
      comments: 2156,
      isNew: false,
      isTrending: true,
    },
    {
      id: "3",
      title: "معبد الكرنك - أعظم المعابد في التاريخ",
      description: "جولة شاملة في معبد الكرنك العظيم وتاريخ بنائه عبر القرون",
      thumbnail: "/placeholder.svg?height=200&width=350&text=معبد+الكرنك",
      duration: "18:35",
      views: 76543,
      likes: 5678,
      category: "temples",
      uploadDate: "2024-01-10",
      quality: "HD",
      rating: 4.7,
      comments: 987,
      isNew: false,
      isTrending: false,
    },
    {
      id: "4",
      title: "الملكة نفرتيتي - جمال لا يُنسى",
      description: "قصة الملكة الجميلة نفرتيتي وتأثيرها على الفن والثقافة المصرية",
      thumbnail: "/placeholder.svg?height=200&width=350&text=نفرتيتي",
      duration: "12:27",
      views: 89012,
      likes: 6789,
      category: "pharaohs",
      uploadDate: "2024-01-08",
      quality: "4K",
      rating: 4.8,
      comments: 1456,
      isNew: false,
      isTrending: false,
    },
    {
      id: "5",
      title: "فن التحنيط في مصر القديمة",
      description: "تعلم عن عملية التحنيط المعقدة والمعتقدات الدينية وراءها",
      thumbnail: "/placeholder.svg?height=200&width=350&text=التحنيط",
      duration: "25:14",
      views: 67890,
      likes: 4567,
      category: "culture",
      uploadDate: "2024-01-05",
      quality: "HD",
      rating: 4.6,
      comments: 789,
      isNew: false,
      isTrending: false,
    },
    {
      id: "6",
      title: "اكتشافات أثرية حديثة في مصر",
      description: "أحدث الاكتشافات الأثرية في مصر وما تكشفه عن الحضارة القديمة",
      thumbnail: "/placeholder.svg?height=200&width=350&text=اكتشافات+أثرية",
      duration: "19:48",
      views: 54321,
      likes: 3456,
      category: "archaeology",
      uploadDate: "2024-01-03",
      quality: "4K",
      rating: 4.5,
      comments: 654,
      isNew: true,
      isTrending: false,
    },
  ]

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.includes(searchQuery) || 
                         video.description.includes(searchQuery)
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const formatDuration = (duration: string) => {
    return duration
  }

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">🎬 الفيديوهات التعليمية</h1>
                  <p className="text-red-100">شاهد محتوى تعليمي عن الحضارة المصرية</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white border-white/30">
                {filteredVideos.length} فيديو
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                {favorites.length} مفضل
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                <Input
                  placeholder="ابحث عن فيديو..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 border-2 border-red-300 focus:border-red-500"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="border-2 border-red-300"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="border-2 border-red-300"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-2 border-red-300">
                  <Filter className="h-4 w-4 mr-2" />
                  فلترة
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-red-500 text-white"
                      : "border-red-300 text-red-700 hover:bg-red-50"
                  }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trending Videos */}
        <Card className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              الفيديوهات الأكثر مشاهدة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {videos.filter(v => v.isTrending).slice(0, 3).map((video, index) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-red-200 hover:border-red-400">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                      #{index + 1}
                    </Badge>
                    <Badge className="absolute bottom-2 left-2 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-bold text-red-800 text-sm line-clamp-2 mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-xs text-red-600">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {formatViews(video.views)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        {video.rating}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Videos Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="group hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-2 border-red-200 hover:border-red-400 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="icon" 
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    onClick={() => setCurrentVideo(video.id)}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                
                {/* Badges */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {video.isNew && (
                    <Badge className="bg-green-500 text-white">جديد</Badge>
                  )}
                  {video.isTrending && (
                    <Badge className="bg-orange-500 text-white">شائع</Badge>
                  )}
                  <Badge className="bg-black/70 text-white">{video.quality}</Badge>
                </div>
                
                <Badge className="absolute bottom-2 left-2 bg-black/70 text-white">
                  {video.duration}
                </Badge>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(video.id)}
                  className={`absolute bottom-2 right-2 ${
                    favorites.includes(video.id)
                      ? "text-red-500 hover:text-red-600"
                      : "text-white hover:text-red-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(video.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-red-800 text-lg line-clamp-2 flex-1">
                    {video.title}
                  </h3>
                </div>
                
                <p className="text-red-700 text-sm line-clamp-2 mb-3">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-sm text-red-600 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {formatViews(video.views)}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {formatViews(video.likes)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {video.comments}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium">{video.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      {categories.find(c => c.id === video.category)?.name}
                    </Badge>
                    <span className="text-xs text-red-500">{video.uploadDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-800"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-800"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">إجراءات سريعة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 bg-blue-500 hover:bg-blue-600 text-white flex flex-col items-center gap-1">
                <Download className="h-6 w-6" />
                <span className="text-sm">تحميل للمشاهدة لاحقاً</span>
              </Button>
              <Button className="h-16 bg-purple-500 hover:bg-purple-600 text-white flex flex-col items-center gap-1">
                <Bookmark className="h-6 w-6" />
                <span className="text-sm">المفضلة ({favorites.length})</span>
              </Button>
              <Link href="/video-creator">
                <Button className="w-full h-16 bg-green-500 hover:bg-green-600 text-white flex flex-col items-center gap-1">
                  <Sparkles className="h-6 w-6" />
                  <span className="text-sm">أنشئ فيديوك</span>
                </Button>
              </Link>
              <Button className="h-16 bg-orange-500 hover:bg-orange-600 text-white flex flex-col items-center gap-1">
                <Award className="h-6 w-6" />
                <span className="text-sm">قائمة التشغيل</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card className="mt-8 bg-white/90 backdrop-blur-sm border-2 border-red-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Crown className="h-6 w-6" />
              تقدمك في التعلم
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">فيديوهات مشاهدة</h3>
                <div className="text-2xl font-bold text-red-600">47</div>
                <p className="text-red-700 text-sm">من أصل {videos.length} فيديو</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">وقت المشاهدة</h3>
                <div className="text-2xl font-bold text-red-600">12.5</div>
                <p className="text-red-700 text-sm">ساعة إجمالية</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">الإنجازات</h3>
                <div className="text-2xl font-bold text-red-600">8</div>
                <p className="text-red-700 text-sm">شارة مكتسبة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
