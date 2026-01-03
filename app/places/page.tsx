"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  ArrowLeft,
  Eye,
  Heart,
  Share2,
  Star,
  Clock,
  Users,
  Camera,
  Navigation,
  Bookmark,
  Filter,
  Grid,
  List,
  Play,
  Crown,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [favorites, setFavorites] = useState<string[]>([])

  const categories = [
    { id: "all", name: "الكل", count: 234 },
    { id: "pyramids", name: "الأهرامات", count: 45 },
    { id: "temples", name: "المعابد", count: 67 },
    { id: "tombs", name: "المقابر", count: 89 },
    { id: "museums", name: "المتاحف", count: 23 },
    { id: "cities", name: "المدن الأثرية", count: 10 },
  ]

  const places = [
    {
      id: "1",
      name: "أهرامات الجيزة",
      description: "عجائب الدنيا السبع القديمة الوحيدة الباقية حتى اليوم",
      image: "/placeholder.svg?height=300&width=400&text=أهرامات+الجيزة",
      category: "pyramids",
      location: "الجيزة، مصر",
      rating: 4.9,
      visitors: 125847,
      likes: 8934,
      period: "الدولة القديمة (2580-2510 ق.م)",
      highlights: ["الهرم الأكبر", "أبو الهول", "هرم خفرع", "هرم منقرع"],
      virtualTour: true,
      arExperience: true,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "2",
      name: "معبد الكرنك",
      description: "أكبر مجمع ديني في العالم القديم",
      image: "/placeholder.svg?height=300&width=400&text=معبد+الكرنك",
      category: "temples",
      location: "الأقصر، مصر",
      rating: 4.8,
      visitors: 98765,
      likes: 7234,
      period: "الدولة الوسطى والحديثة (2055-1070 ق.م)",
      highlights: ["قاعة الأعمدة الكبرى", "البحيرة المقدسة", "مسلة حتشبسوت", "معبد آمون"],
      virtualTour: true,
      arExperience: true,
      isNew: false,
      isFeatured: true,
    },
    {
      id: "3",
      name: "وادي الملوك",
      description: "مقبرة الفراعنة العظام في الدولة الحديثة",
      image: "/placeholder.svg?height=300&width=400&text=وادي+الملوك",
      category: "tombs",
      location: "الأقصر، مصر",
      rating: 4.7,
      visitors: 76543,
      likes: 5678,
      period: "الدولة الحديثة (1550-1077 ق.م)",
      highlights: ["مقبرة توت عنخ آمون", "مقبرة رمسيس الثاني", "مقبرة سيتي الأول", "مقبرة نفرتاري"],
      virtualTour: true,
      arExperience: false,
      isNew: false,
      isFeatured: false,
    },
    {
      id: "4",
      name: "معبد أبو سمبل",
      description: "تحفة رمسيس الثاني المنحوتة في الصخر",
      image: "/placeholder.svg?height=300&width=400&text=معبد+أبو+سمبل",
      category: "temples",
      location: "أسوان، مصر",
      rating: 4.9,
      visitors: 89012,
      likes: 6789,
      period: "الدولة الحديثة (1264 ق.م)",
      highlights: ["التماثيل الأربعة العملاقة", "معبد نفرتاري", "ظاهرة الإضاءة", "النقوش الجدارية"],
      virtualTour: true,
      arExperience: true,
      isNew: true,
      isFeatured: true,
    },
    {
      id: "5",
      name: "المتحف المصري",
      description: "أكبر مجموعة آثار مصرية في العالم",
      image: "/placeholder.svg?height=300&width=400&text=المتحف+المصري",
      category: "museums",
      location: "القاهرة، مصر",
      rating: 4.6,
      visitors: 67890,
      likes: 4567,
      period: "جميع العصور",
      highlights: ["كنوز توت عنخ آمون", "المومياوات الملكية", "تمثال خفرع", "لوحة نارمر"],
      virtualTour: true,
      arExperience: false,
      isNew: false,
      isFeatured: false,
    },
    {
      id: "6",
      name: "معبد فيلة",
      description: "جوهرة النوبة المقدسة للإلهة إيزيس",
      image: "/placeholder.svg?height=300&width=400&text=معبد+فيلة",
      category: "temples",
      location: "أسوان، مصر",
      rating: 4.8,
      visitors: 54321,
      likes: 3456,
      period: "العصر البطلمي (380-362 ق.م)",
      highlights: ["معبد إيزيس", "بوابة هادريان", "كشك تراجان", "النقوش النوبية"],
      virtualTour: true,
      arExperience: true,
      isNew: false,
      isFeatured: false,
    },
  ]

  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.includes(searchQuery) ||
      place.description.includes(searchQuery) ||
      place.location.includes(searchQuery)
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const formatVisitors = (visitors: number) => {
    if (visitors >= 1000000) {
      return `${(visitors / 1000000).toFixed(1)}M`
    } else if (visitors >= 1000) {
      return `${(visitors / 1000).toFixed(1)}K`
    }
    return visitors.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white shadow-2xl">
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
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">🏛️ الأماكن الأثرية</h1>
                  <p className="text-green-100">استكشف المعابد والمقابر الفرعونية</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white border-white/30">{filteredPlaces.length} مكان</Badge>
              <Badge className="bg-white/20 text-white border-white/30">{favorites.length} مفضل</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200 shadow-xl mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                <Input
                  placeholder="ابحث عن مكان أثري..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 border-2 border-green-300 focus:border-green-500"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="border-2 border-green-300"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="border-2 border-green-300"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-2 border-green-300 bg-transparent">
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
                      ? "bg-green-500 text-white"
                      : "border-green-300 text-green-700 hover:bg-green-50"
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

        {/* Featured Places */}
        <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Crown className="h-6 w-6" />
              الأماكن المميزة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {places
                .filter((p) => p.isFeatured)
                .slice(0, 3)
                .map((place, index) => (
                  <Card
                    key={place.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-green-200 hover:border-green-400"
                  >
                    <div className="relative">
                      <img
                        src={place.image || "/placeholder.svg"}
                        alt={place.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white">مميز</Badge>
                      {place.arExperience && (
                        <Badge className="absolute top-2 left-2 bg-purple-500 text-white">AR</Badge>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-bold text-green-800 text-sm line-clamp-1 mb-1">{place.name}</h3>
                      <p className="text-green-700 text-xs line-clamp-2 mb-2">{place.description}</p>
                      <div className="flex items-center justify-between text-xs text-green-600">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatVisitors(place.visitors)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {place.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Places Grid/List */}
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredPlaces.map((place) => (
            <Card
              key={place.id}
              className="group hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-2 border-green-200 hover:border-green-400 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {place.virtualTour && (
                      <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                        <Play className="h-5 w-5" />
                      </Button>
                    )}
                    <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                      <Camera className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {place.isNew && <Badge className="bg-green-500 text-white">جديد</Badge>}
                  {place.isFeatured && <Badge className="bg-orange-500 text-white">مميز</Badge>}
                  {place.arExperience && <Badge className="bg-purple-500 text-white">AR</Badge>}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(place.id)}
                  className={`absolute bottom-2 right-2 ${
                    favorites.includes(place.id) ? "text-red-500 hover:text-red-600" : "text-white hover:text-red-300"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(place.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-green-800 text-lg line-clamp-1 flex-1">{place.name}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="font-medium text-sm">{place.rating}</span>
                  </div>
                </div>

                <p className="text-green-700 text-sm line-clamp-2 mb-3">{place.description}</p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <MapPin className="h-4 w-4" />
                    <span>{place.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Clock className="h-4 w-4" />
                    <span>{place.period}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="font-bold text-green-800 text-sm mb-1">أبرز المعالم:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-green-300 text-green-700">
                        {highlight}
                      </Badge>
                    ))}
                    {place.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                        +{place.highlights.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-green-600 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {formatVisitors(place.visitors)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {formatVisitors(place.likes)}
                    </div>
                  </div>
                  <Badge variant="secondary">{categories.find((c) => c.id === place.category)?.name}</Badge>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-green-200">
                  <div className="flex items-center gap-1">
                    {place.virtualTour && (
                      <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-800">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-800">
                      <Navigation className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-800">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    استكشف الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">إجراءات سريعة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 bg-blue-500 hover:bg-blue-600 text-white flex flex-col items-center gap-1">
                <Navigation className="h-6 w-6" />
                <span className="text-sm">خريطة تفاعلية</span>
              </Button>
              <Button className="h-16 bg-purple-500 hover:bg-purple-600 text-white flex flex-col items-center gap-1">
                <Bookmark className="h-6 w-6" />
                <span className="text-sm">المفضلة ({favorites.length})</span>
              </Button>
              <Button className="h-16 bg-orange-500 hover:bg-orange-600 text-white flex flex-col items-center gap-1">
                <Camera className="h-6 w-6" />
                <span className="text-sm">جولة افتراضية</span>
              </Button>
              <Button className="h-16 bg-green-500 hover:bg-green-600 text-white flex flex-col items-center gap-1">
                <Sparkles className="h-6 w-6" />
                <span className="text-sm">واقع معزز</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Travel Tips */}
        <Card className="mt-8 bg-white/90 backdrop-blur-sm border-2 border-green-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Crown className="h-6 w-6" />
              نصائح للزيارة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">أفضل وقت للزيارة</h3>
                <p className="text-green-700 text-sm">من أكتوبر إلى أبريل للطقس المعتدل</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">احجز مرشد</h3>
                <p className="text-green-700 text-sm">احصل على تجربة أغنى مع مرشد متخصص</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">التصوير</h3>
                <p className="text-green-700 text-sm">تحقق من قوانين التصوير في كل موقع</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
