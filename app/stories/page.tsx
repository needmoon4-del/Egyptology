"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Scroll,
  ArrowLeft,
  Play,
  Volume2,
  Heart,
  Share2,
  Bookmark,
  Eye,
  Clock,
  Star,
  Crown,
  Sparkles,
  Award,
  Filter,
  Grid,
  List,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function StoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [favorites, setFavorites] = useState<string[]>([])
  const [currentStory, setCurrentStory] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const categories = [
    { id: "all", name: "الكل", count: 156 },
    { id: "pharaohs", name: "الفراعنة", count: 45 },
    { id: "queens", name: "الملكات", count: 23 },
    { id: "gods", name: "الآلهة", count: 34 },
    { id: "adventures", name: "مغامرات", count: 28 },
    { id: "mysteries", name: "ألغاز", count: 26 },
  ]

  const stories = [
    {
      id: "1",
      title: "لعنة الفرعون الذهبي - توت عنخ آمون",
      description: "قصة مثيرة عن اكتشاف مقبرة توت عنخ آمون واللعنة الغامضة التي حلت بمكتشفيها",
      cover: "/placeholder.svg?height=300&width=200&text=توت+عنخ+آمون",
      category: "pharaohs",
      duration: "25 دقيقة",
      chapters: 8,
      rating: 4.9,
      reads: 15420,
      likes: 2847,
      difficulty: "متوسط",
      isNew: true,
      isFeatured: true,
      isInteractive: true,
      narrator: "د. زاهي حواس",
      tags: ["لعنة", "اكتشاف", "مقبرة", "ذهب"],
      progress: 0,
    },
    {
      id: "2",
      title: "كليوباترا السابعة - آخر ملكات مصر",
      description: "حكاية الملكة الأسطورية وحبها لمارك أنطونيوس وصراعها مع روما",
      cover: "/placeholder.svg?height=300&width=200&text=كليوباترا",
      category: "queens",
      duration: "32 دقيقة",
      chapters: 12,
      rating: 4.8,
      reads: 12890,
      likes: 2156,
      difficulty: "متقدم",
      isNew: false,
      isFeatured: true,
      isInteractive: true,
      narrator: "د. جويس تيلديسلي",
      tags: ["حب", "سياسة", "روما", "ملكة"],
      progress: 45,
    },
    {
      id: "3",
      title: "رحلة رع عبر العالم السفلي",
      description: "ملحمة إله الشمس رع في رحلته الليلية عبر العالم السفلي ومعركته مع الثعبان أبوفيس",
      cover: "/placeholder.svg?height=300&width=200&text=رع+والعالم+السفلي",
      category: "gods",
      duration: "18 دقيقة",
      chapters: 6,
      rating: 4.7,
      reads: 9876,
      likes: 1654,
      difficulty: "سهل",
      isNew: false,
      isFeatured: false,
      isInteractive: true,
      narrator: "أ. مريم أحمد",
      tags: ["آلهة", "رع", "عالم سفلي", "أسطورة"],
      progress: 0,
    },
    {
      id: "4",
      title: "سر الهرم المفقود",
      description: "مغامرة شيقة للبحث عن هرم مفقود في الصحراء الغربية وكنوزه المخفية",
      cover: "/placeholder.svg?height=300&width=200&text=الهرم+المفقود",
      category: "adventures",
      duration: "28 دقيقة",
      chapters: 10,
      rating: 4.6,
      reads: 8765,
      likes: 1456,
      difficulty: "متوسط",
      isNew: true,
      isFeatured: false,
      isInteractive: true,
      narrator: "د. مارك لينر",
      tags: ["مغامرة", "هرم", "كنز", "صحراء"],
      progress: 0,
    },
    {
      id: "5",
      title: "حتشبسوت - الملكة التي أصبحت ملكاً",
      description: "قصة الملكة حتشبسوت التي حكمت مصر كفرعون وإنجازاتها العظيمة",
      cover: "/placeholder.svg?height=300&width=200&text=حتشبسوت",
      category: "queens",
      duration: "22 دقيقة",
      chapters: 9,
      rating: 4.8,
      reads: 11234,
      likes: 1987,
      difficulty: "متوسط",
      isNew: false,
      isFeatured: true,
      isInteractive: true,
      narrator: "د. كارا كوني",
      tags: ["ملكة", "حكم", "معبد", "إنجازات"],
      progress: 78,
    },
    {
      id: "6",
      title: "لغز أبو الهول العظيم",
      description: "استكشاف أسرار أبو الهول وألغازه التي حيرت العلماء لقرون",
      cover: "/placeholder.svg?height=300&width=200&text=أبو+الهول",
      category: "mysteries",
      duration: "20 دقيقة",
      chapters: 7,
      rating: 4.5,
      reads: 7654,
      likes: 1234,
      difficulty: "متوسط",
      isNew: false,
      isFeatured: false,
      isInteractive: false,
      narrator: "د. روبرت شوك",
      tags: ["لغز", "أبو الهول", "أسرار", "تاريخ"],
      progress: 0,
    },
  ]

  const filteredStories = stories.filter((story) => {
    const matchesSearch = story.title.includes(searchQuery) || story.description.includes(searchQuery)
    const matchesCategory = selectedCategory === "all" || story.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const startStory = (storyId: string) => {
    setCurrentStory(storyId)
    setIsPlaying(true)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "سهل":
        return "bg-green-100 text-green-800"
      case "متوسط":
        return "bg-yellow-100 text-yellow-800"
      case "متقدم":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatReads = (reads: number) => {
    if (reads >= 1000000) {
      return `${(reads / 1000000).toFixed(1)}M`
    } else if (reads >= 1000) {
      return `${(reads / 1000).toFixed(1)}K`
    }
    return reads.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white shadow-2xl">
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
                  <Scroll className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">📜 القصص التفاعلية</h1>
                  <p className="text-orange-100">اقرأ قصص الملوك والملكات</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white border-white/30">{filteredStories.length} قصة</Badge>
              <Badge className="bg-white/20 text-white border-white/30">{favorites.length} مفضل</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                <Input
                  placeholder="ابحث عن قصة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 border-2 border-orange-300 focus:border-orange-500"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="border-2 border-orange-300"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="border-2 border-orange-300"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-2 border-orange-300 bg-transparent">
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
                      ? "bg-orange-500 text-white"
                      : "border-orange-300 text-orange-700 hover:bg-orange-50"
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

        {/* Featured Stories */}
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Crown className="h-6 w-6" />
              القصص المميزة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stories
                .filter((s) => s.isFeatured)
                .slice(0, 3)
                .map((story, index) => (
                  <Card
                    key={story.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-orange-200 hover:border-orange-400"
                  >
                    <div className="relative">
                      <img
                        src={story.cover || "/placeholder.svg"}
                        alt={story.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          className="bg-white/20 hover:bg-white/30 text-white"
                          onClick={() => startStory(story.id)}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-orange-500 text-white">مميز</Badge>
                      {story.isInteractive && (
                        <Badge className="absolute top-2 left-2 bg-purple-500 text-white">تفاعلي</Badge>
                      )}
                      {story.progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                          <Progress value={story.progress} className="h-1" />
                          <span className="text-white text-xs">تقدم القراءة: {story.progress}%</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-orange-800 text-sm line-clamp-1 mb-1">{story.title}</h3>
                      <p className="text-orange-700 text-xs line-clamp-2 mb-2">{story.description}</p>
                      <div className="flex items-center justify-between text-xs text-orange-600">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatReads(story.reads)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {story.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Stories Grid/List */}
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredStories.map((story) => (
            <Card
              key={story.id}
              className="group hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={story.cover || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    onClick={() => startStory(story.id)}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>

                {/* Badges */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {story.isNew && <Badge className="bg-green-500 text-white">جديد</Badge>}
                  {story.isFeatured && <Badge className="bg-orange-500 text-white">مميز</Badge>}
                  {story.isInteractive && <Badge className="bg-purple-500 text-white">تفاعلي</Badge>}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(story.id)}
                  className={`absolute bottom-2 right-2 ${
                    favorites.includes(story.id) ? "text-red-500 hover:text-red-600" : "text-white hover:text-red-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(story.id) ? "fill-current" : ""}`} />
                </Button>

                {/* Progress Bar */}
                {story.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                    <Progress value={story.progress} className="h-1 mb-1" />
                    <span className="text-white text-xs">تقدم القراءة: {story.progress}%</span>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-orange-800 text-lg line-clamp-1 flex-1">{story.title}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium text-sm">{story.rating}</span>
                  </div>
                </div>

                <p className="text-orange-700 text-sm line-clamp-2 mb-3">{story.description}</p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{story.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Scroll className="h-4 w-4" />
                      <span>{story.chapters} فصل</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <span>الراوي: {story.narrator}</span>
                    <Badge className={getDifficultyColor(story.difficulty)}>{story.difficulty}</Badge>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {story.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-orange-300 text-orange-700">
                        #{tag}
                      </Badge>
                    ))}
                    {story.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">
                        +{story.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-orange-600 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {formatReads(story.reads)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {formatReads(story.likes)}
                    </div>
                  </div>
                  <Badge variant="secondary">{categories.find((c) => c.id === story.category)?.name}</Badge>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-orange-200">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-800">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-800">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-800">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                    {story.progress > 0 ? "متابعة القراءة" : "ابدأ القراءة"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 text-center">إجراءات سريعة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 bg-blue-500 hover:bg-blue-600 text-white flex flex-col items-center gap-1">
                <Bookmark className="h-6 w-6" />
                <span className="text-sm">المفضلة ({favorites.length})</span>
              </Button>
              <Button className="h-16 bg-purple-500 hover:bg-purple-600 text-white flex flex-col items-center gap-1">
                <Play className="h-6 w-6" />
                <span className="text-sm">قائمة التشغيل</span>
              </Button>
              <Button className="h-16 bg-green-500 hover:bg-green-600 text-white flex flex-col items-center gap-1">
                <Award className="h-6 w-6" />
                <span className="text-sm">الإنجازات</span>
              </Button>
              <Button className="h-16 bg-orange-500 hover:bg-orange-600 text-white flex flex-col items-center gap-1">
                <Sparkles className="h-6 w-6" />
                <span className="text-sm">قصة عشوائية</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <Card className="mt-8 bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-8 w-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-orange-800">علم المصريات</h2>
            </div>
            <p className="text-orange-700 mb-4">
              تطبيق تعليمي تفاعلي يأخذك في رحلة عبر الزمن لاستكشاف عظمة الحضارة المصرية القديمة
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-orange-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                آخر تحديث: 8/8/2025, 11:24:32 PM
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                متاح بـ 3 لغات
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                تطبيق معتمد تعليمياً
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
