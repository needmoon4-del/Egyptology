"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Video,
  Camera,
  Mic,
  Settings,
  Download,
  Share2,
  Play,
  Pause,
  RotateCcw,
  Palette,
  Music,
  Type,
  Sparkles,
  Crown,
  Eye,
  Zap,
} from "lucide-react"

interface VideoProject {
  id: string
  title: string
  duration: string
  thumbnail: string
  effects: string[]
  status: "draft" | "rendering" | "completed"
}

interface Effect {
  id: string
  name: string
  category: "background" | "overlay" | "transition" | "audio"
  icon: any
  preview: string
  piCost: number
}

export default function PharaohStudioPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null)
  const [currentProject, setCurrentProject] = useState<VideoProject | null>(null)
  const [audioLevel, setAudioLevel] = useState([50])
  const [videoQuality, setVideoQuality] = useState([80])
  const videoRef = useRef<HTMLVideoElement>(null)

  const effects: Effect[] = [
    {
      id: "pyramid-bg",
      name: "خلفية الأهرامات",
      category: "background",
      icon: Crown,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 10,
    },
    {
      id: "hieroglyph-overlay",
      name: "رموز هيروغليفية",
      category: "overlay",
      icon: Type,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 15,
    },
    {
      id: "golden-transition",
      name: "انتقال ذهبي",
      category: "transition",
      icon: Sparkles,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 20,
    },
    {
      id: "pharaoh-music",
      name: "موسيقى فرعونية",
      category: "audio",
      icon: Music,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 25,
    },
    {
      id: "temple-bg",
      name: "خلفية المعبد",
      category: "background",
      icon: Eye,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 12,
    },
    {
      id: "sand-effect",
      name: "تأثير الرمال",
      category: "overlay",
      icon: Zap,
      preview: "/placeholder.svg?height=100&width=100",
      piCost: 18,
    },
  ]

  const projects: VideoProject[] = [
    {
      id: "1",
      title: "رحلة إلى الأهرامات",
      duration: "2:34",
      thumbnail: "/placeholder.svg?height=120&width=200",
      effects: ["pyramid-bg", "hieroglyph-overlay"],
      status: "completed",
    },
    {
      id: "2",
      title: "أسرار المعابد",
      duration: "1:45",
      thumbnail: "/placeholder.svg?height=120&width=200",
      effects: ["temple-bg", "golden-transition"],
      status: "rendering",
    },
    {
      id: "3",
      title: "مشروع جديد",
      duration: "0:00",
      thumbnail: "/placeholder.svg?height=120&width=200",
      effects: [],
      status: "draft",
    },
  ]

  const startRecording = () => {
    setIsRecording(true)
    // هنا يمكن إضافة منطق بدء التسجيل
  }

  const stopRecording = () => {
    setIsRecording(false)
    // هنا يمكن إضافة منطق إيقاف التسجيل
  }

  const applyEffect = (effectId: string) => {
    setSelectedEffect(effectId)
    // هنا يمكن إضافة منطق تطبيق التأثير
  }

  const exportVideo = () => {
    // هنا يمكن إضافة منطق تصدير الفيديو
    alert("جاري تصدير الفيديو...")
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "background":
        return "from-blue-500 to-cyan-500"
      case "overlay":
        return "from-purple-500 to-pink-500"
      case "transition":
        return "from-yellow-500 to-orange-500"
      case "audio":
        return "from-green-500 to-emerald-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "rendering":
        return "bg-yellow-500"
      case "draft":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                الاستوديو الفرعوني المتقدم
              </h1>
              <p className="text-gray-300 mt-2">أنشئ فيديوهات احترافية بتأثيرات فرعونية مذهلة</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">رصيد Pi: 2,847</Badge>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90">
                <Crown className="w-4 h-4 mr-2" />
                الترقية للنسخة الذهبية
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* منطقة التسجيل والمعاينة */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Video className="w-5 h-5 text-yellow-400" />
                    منطقة التسجيل
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      onClick={isRecording ? stopRecording : startRecording}
                      className={isRecording ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
                    >
                      {isRecording ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          إيقاف التسجيل
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          بدء التسجيل
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative bg-black rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "16/9" }}>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=400&width=700"
                  />
                  {isRecording && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      جاري التسجيل
                    </div>
                  )}
                  {selectedEffect && (
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      تأثير مطبق: {effects.find((e) => e.id === selectedEffect)?.name}
                    </div>
                  )}
                </div>

                {/* أدوات التحكم */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Mic className="w-4 h-4 text-green-400" />
                        <span className="text-white text-sm">مستوى الصوت</span>
                      </div>
                      <Slider value={audioLevel} onValueChange={setAudioLevel} max={100} step={1} className="w-full" />
                      <div className="text-xs text-gray-400 mt-1">{audioLevel[0]}%</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Settings className="w-4 h-4 text-blue-400" />
                        <span className="text-white text-sm">جودة الفيديو</span>
                      </div>
                      <Slider
                        value={videoQuality}
                        onValueChange={setVideoQuality}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-xs text-gray-400 mt-1">
                        {videoQuality[0]}% - {videoQuality[0] > 80 ? "4K" : videoQuality[0] > 60 ? "HD" : "SD"}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Camera className="w-4 h-4 text-purple-400" />
                        <span className="text-white text-sm">إعدادات الكاميرا</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                          <RotateCcw className="w-3 h-3 mr-1" />
                          قلب
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                          <Palette className="w-3 h-3 mr-1" />
                          فلتر
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* التأثيرات والأدوات */}
            <Tabs defaultValue="effects" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="effects" className="text-white">
                  التأثيرات
                </TabsTrigger>
                <TabsTrigger value="text" className="text-white">
                  النصوص
                </TabsTrigger>
                <TabsTrigger value="audio" className="text-white">
                  الصوت
                </TabsTrigger>
                <TabsTrigger value="export" className="text-white">
                  التصدير
                </TabsTrigger>
              </TabsList>

              <TabsContent value="effects" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">مكتبة التأثيرات الفرعونية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {effects.map((effect) => {
                        const IconComponent = effect.icon
                        return (
                          <Card
                            key={effect.id}
                            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                              selectedEffect === effect.id
                                ? "bg-gradient-to-br from-yellow-500/30 to-orange-500/30 border-yellow-500/50"
                                : "bg-white/5 border-white/10 hover:border-white/30"
                            }`}
                            onClick={() => applyEffect(effect.id)}
                          >
                            <CardContent className="p-4 text-center">
                              <div
                                className={`w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br ${getCategoryColor(effect.category)} flex items-center justify-center`}
                              >
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-white text-sm font-semibold mb-2">{effect.name}</h3>
                              <Badge variant="outline" className="text-xs border-yellow-500/30 text-yellow-300 mb-2">
                                {effect.piCost} π
                              </Badge>
                              <div className="text-xs text-gray-400 capitalize">{effect.category}</div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="text" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">إضافة النصوص والعناوين</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-white text-sm mb-2 block">النص</label>
                        <Input
                          placeholder="اكتب النص هنا..."
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="text-white text-sm mb-2 block">الوصف</label>
                        <Textarea
                          placeholder="وصف إضافي..."
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                          <Type className="w-4 h-4 mr-2" />
                          خط هيروغليفي
                        </Button>
                        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500">
                          <Sparkles className="w-4 h-4 mr-2" />
                          تأثير ذهبي
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audio" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">المؤثرات الصوتية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold mb-3">الموسيقى الفرعونية</h3>
                          <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              🎵 موسيقى المعابد
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              🥁 إيقاعات الطقوس
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              🎺 أبواق الفراعنة
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold mb-3">المؤثرات الصوتية</h3>
                          <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              🌪️ صوت الرياح الصحراوية
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              🏺 صوت الأواني الفخارية
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                              👥 أصوات الحشود القديمة
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="export" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">تصدير ومشاركة الفيديو</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <Download className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <h3 className="text-white font-semibold mb-2">تحميل محلي</h3>
                            <p className="text-gray-400 text-sm mb-3">حفظ على جهازك</p>
                            <Button onClick={exportVideo} className="w-full bg-blue-500 hover:bg-blue-600">
                              تحميل
                            </Button>
                          </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <Share2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <h3 className="text-white font-semibold mb-2">مشاركة مباشرة</h3>
                            <p className="text-gray-400 text-sm mb-3">شارك مع الأصدقاء</p>
                            <Button className="w-full bg-green-500 hover:bg-green-600">مشاركة</Button>
                          </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                          <CardContent className="p-4 text-center">
                            <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                            <h3 className="text-white font-semibold mb-2">رفع للمعرض</h3>
                            <p className="text-gray-400 text-sm mb-3">اكسب Pi إضافية</p>
                            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">رفع</Button>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                        <h3 className="text-yellow-300 font-semibold mb-2">💡 نصيحة احترافية</h3>
                        <p className="text-gray-300 text-sm">
                          استخدم التأثيرات بحكمة - الأقل أحياناً يكون أكثر تأثيراً. ابدأ بخلفية بسيطة ثم أضف التأثيرات
                          تدريجياً.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* الشريط الجانبي - المشاريع */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">مشاريعي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className="bg-white/5 border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300"
                      onClick={() => setCurrentProject(project)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={project.thumbnail || "/placeholder.svg"}
                            alt={project.title}
                            className="w-12 h-8 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white text-sm font-semibold truncate">{project.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-gray-400 text-xs">{project.duration}</span>
                              <Badge className={`${getStatusColor(project.status)} text-white text-xs`}>
                                {project.status === "completed"
                                  ? "مكتمل"
                                  : project.status === "rendering"
                                    ? "معالجة"
                                    : "مسودة"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500">مشروع جديد</Button>
              </CardContent>
            </Card>

            {/* إحصائيات الاستوديو */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">إحصائيات الاستوديو</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">الفيديوهات المنشأة</span>
                    <span className="text-white font-bold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ساعات التسجيل</span>
                    <span className="text-white font-bold">23.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pi المكتسبة</span>
                    <span className="text-yellow-400 font-bold">1,847 π</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">التأثيرات المستخدمة</span>
                    <span className="text-white font-bold">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
