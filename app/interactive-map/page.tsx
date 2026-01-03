"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Clock, Users, Star, Navigation, Compass, Mountain } from "lucide-react"

interface ArchaeologicalSite {
  id: string
  name: string
  nameEn: string
  location: { lat: number; lng: number }
  period: string
  description: string
  images: string[]
  significance: string
  visitInfo: {
    openHours: string
    ticketPrice: string
    bestTime: string
  }
  rating: number
  visitors: number
  category: "pyramid" | "temple" | "tomb" | "museum" | "city"
}

export default function InteractiveMapPage() {
  const [sites, setSites] = useState<ArchaeologicalSite[]>([])
  const [selectedSite, setSelectedSite] = useState<ArchaeologicalSite | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // محاكاة تحميل المواقع الأثرية
    const mockSites: ArchaeologicalSite[] = [
      {
        id: "1",
        name: "أهرامات الجيزة",
        nameEn: "Pyramids of Giza",
        location: { lat: 29.9792, lng: 31.1342 },
        period: "الدولة القديمة (2580-2510 ق.م)",
        description: "واحدة من عجائب الدنيا السبع القديمة، تضم الهرم الأكبر وأبو الهول",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "رمز الحضارة المصرية القديمة ومعجزة هندسية",
        visitInfo: {
          openHours: "8:00 ص - 5:00 م",
          ticketPrice: "200 جنيه مصري",
          bestTime: "أكتوبر - أبريل",
        },
        rating: 4.8,
        visitors: 2500000,
        category: "pyramid",
      },
      {
        id: "2",
        name: "معبد الكرنك",
        nameEn: "Karnak Temple",
        location: { lat: 25.7188, lng: 32.6573 },
        period: "الدولة الوسطى والحديثة (2055-1070 ق.م)",
        description: "أكبر مجمع ديني في العالم القديم مخصص للإله آمون رع",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "أعظم المعابد المصرية وأكثرها تعقيداً",
        visitInfo: {
          openHours: "6:00 ص - 6:00 م",
          ticketPrice: "150 جنيه مصري",
          bestTime: "نوفمبر - مارس",
        },
        rating: 4.7,
        visitors: 1800000,
        category: "temple",
      },
      {
        id: "3",
        name: "وادي الملوك",
        nameEn: "Valley of the Kings",
        location: { lat: 25.7402, lng: 32.6014 },
        period: "الدولة الحديثة (1550-1077 ق.م)",
        description: "مقبرة ملوك الدولة الحديثة بما في ذلك توت عنخ آمون",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "أهم موقع للمقابر الملكية في مصر القديمة",
        visitInfo: {
          openHours: "6:00 ص - 5:00 م",
          ticketPrice: "240 جنيه مصري",
          bestTime: "أكتوبر - أبريل",
        },
        rating: 4.6,
        visitors: 1200000,
        category: "tomb",
      },
      {
        id: "4",
        name: "معبد أبو سمبل",
        nameEn: "Abu Simbel Temple",
        location: { lat: 22.3372, lng: 31.6258 },
        period: "الدولة الحديثة (1264 ق.م)",
        description: "معبد رمسيس الثاني المنحوت في الصخر",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "تحفة معمارية وإنجاز في الحفظ الأثري",
        visitInfo: {
          openHours: "5:00 ص - 6:00 م",
          ticketPrice: "300 جنيه مصري",
          bestTime: "أكتوبر - مايو",
        },
        rating: 4.9,
        visitors: 800000,
        category: "temple",
      },
      {
        id: "5",
        name: "المتحف المصري",
        nameEn: "Egyptian Museum",
        location: { lat: 30.0475, lng: 31.2336 },
        period: "جميع العصور",
        description: "أكبر مجموعة من الآثار المصرية القديمة في العالم",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "كنز الحضارة المصرية ومقر كنوز توت عنخ آمون",
        visitInfo: {
          openHours: "9:00 ص - 7:00 م",
          ticketPrice: "200 جنيه مصري",
          bestTime: "طوال العام",
        },
        rating: 4.5,
        visitors: 1500000,
        category: "museum",
      },
      {
        id: "6",
        name: "مدينة الأقصر",
        nameEn: "Luxor City",
        location: { lat: 25.6872, lng: 32.6396 },
        period: "الدولة الوسطى والحديثة",
        description: "طيبة القديمة، عاصمة مصر في الدولة الحديثة",
        images: ["/placeholder.svg?height=300&width=400"],
        significance: "أكبر متحف مفتوح في العالم",
        visitInfo: {
          openHours: "مفتوح 24 ساعة",
          ticketPrice: "متنوع حسب الموقع",
          bestTime: "أكتوبر - أبريل",
        },
        rating: 4.7,
        visitors: 3000000,
        category: "city",
      },
    ]
    setSites(mockSites)
  }, [])

  const filteredSites = sites.filter((site) => {
    const matchesFilter = filter === "all" || site.category === filter
    const matchesSearch =
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pyramid":
        return <Mountain className="w-5 h-5" />
      case "temple":
        return <Compass className="w-5 h-5" />
      case "tomb":
        return <MapPin className="w-5 h-5" />
      case "museum":
        return <Camera className="w-5 h-5" />
      case "city":
        return <Navigation className="w-5 h-5" />
      default:
        return <MapPin className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "pyramid":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "temple":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "tomb":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "museum":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "city":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  if (selectedSite) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto">
          <Button onClick={() => setSelectedSite(null)} className="mb-6 bg-cyan-600 hover:bg-cyan-700">
            ← العودة للخريطة
          </Button>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-white mb-2">{selectedSite.name}</CardTitle>
                  <p className="text-gray-300">{selectedSite.nameEn}</p>
                </div>
                <Badge className={getCategoryColor(selectedSite.category)}>
                  {getCategoryIcon(selectedSite.category)}
                  <span className="mr-1">
                    {selectedSite.category === "pyramid"
                      ? "هرم"
                      : selectedSite.category === "temple"
                        ? "معبد"
                        : selectedSite.category === "tomb"
                          ? "مقبرة"
                          : selectedSite.category === "museum"
                            ? "متحف"
                            : "مدينة"}
                  </span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* الصورة الرئيسية */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={selectedSite.images[0] || "/placeholder.svg"}
                  alt={selectedSite.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span>{selectedSite.rating}</span>
                  </div>
                </div>
              </div>

              {/* المعلومات الأساسية */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">الوصف</h3>
                    <p className="text-gray-300">{selectedSite.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">الأهمية التاريخية</h3>
                    <p className="text-gray-300">{selectedSite.significance}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">الفترة التاريخية</h3>
                    <p className="text-gray-300">{selectedSite.period}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">معلومات الزيارة</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">ساعات العمل:</span>
                        <span className="text-white">{selectedSite.visitInfo.openHours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">سعر التذكرة:</span>
                        <span className="text-white">{selectedSite.visitInfo.ticketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">أفضل وقت للزيارة:</span>
                        <span className="text-white">{selectedSite.visitInfo.bestTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">إحصائيات</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          <span>الزوار سنوياً:</span>
                        </div>
                        <span className="text-white">{selectedSite.visitors.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <Star className="w-4 h-4 mr-1" />
                          <span>التقييم:</span>
                        </div>
                        <span className="text-yellow-400">{selectedSite.rating}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* أزرار الإجراءات */}
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700">
                  <Camera className="w-4 h-4 mr-2" />
                  جولة افتراضية
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  عرض على الخريطة
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* العنوان والبحث */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">الخريطة التفاعلية للمواقع الأثرية</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث عن موقع أثري..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            />
            <div className="flex gap-2">
              {[
                { key: "all", label: "الكل" },
                { key: "pyramid", label: "أهرامات" },
                { key: "temple", label: "معابد" },
                { key: "tomb", label: "مقابر" },
                { key: "museum", label: "متاحف" },
                { key: "city", label: "مدن" },
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  onClick={() => setFilter(key)}
                  variant={filter === key ? "default" : "outline"}
                  className={
                    filter === key
                      ? "bg-cyan-600 hover:bg-cyan-700"
                      : "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* خريطة مصر التفاعلية */}
        <Card className="mb-8 bg-black/40 border-cyan-500/30 backdrop-blur-lg">
          <CardContent className="p-6">
            <div className="relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-lg p-8 min-h-[400px]">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-center bg-no-repeat bg-contain opacity-20"></div>

              {/* نقاط المواقع على الخريطة */}
              {filteredSites.map((site, index) => (
                <div
                  key={site.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + index * 10}%`,
                  }}
                  onClick={() => setSelectedSite(site)}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                      {site.name}
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 right-4 text-gray-400 text-sm">انقر على النقاط لاستكشاف المواقع</div>
            </div>
          </CardContent>
        </Card>

        {/* قائمة المواقع */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <Card
              key={site.id}
              className="bg-black/40 border-cyan-500/30 backdrop-blur-lg hover:border-cyan-400/50 transition-all cursor-pointer"
              onClick={() => setSelectedSite(site)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(site.category)}>
                    {getCategoryIcon(site.category)}
                    <span className="mr-1">
                      {site.category === "pyramid"
                        ? "هرم"
                        : site.category === "temple"
                          ? "معبد"
                          : site.category === "tomb"
                            ? "مقبرة"
                            : site.category === "museum"
                              ? "متحف"
                              : "مدينة"}
                    </span>
                  </Badge>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm">{site.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-white">{site.name}</CardTitle>
                <p className="text-gray-400 text-sm">{site.nameEn}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <img
                    src={site.images[0] || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <p className="text-gray-300 text-sm line-clamp-2">{site.description}</p>

                  <div className="flex justify-between text-xs">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{(site.visitors / 1000000).toFixed(1)}M زائر</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{site.visitInfo.bestTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
