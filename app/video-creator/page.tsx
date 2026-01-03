"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  ArrowLeft,
  Upload,
  Camera,
  Wand2,
  Download,
  Share2,
  Eye,
  Sparkles,
  Crown,
  Palette,
  Settings,
  Heart,
  Star,
  Film,
  Zap,
  Music,
  Globe,
  Headphones,
  Play,
  RotateCcw,
  ImageIcon,
  Video,
  Layers,
  Mic,
  FileVideo,
  Award,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Info,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VideoCreatorPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [videoStyle, setVideoStyle] = useState("pharaoh-king")
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState("")
  const [selectedImages, setSelectedImages] = useState<number[]>([])

  const [advancedFeatures, setAdvancedFeatures] = useState({
    smartAudio: {
      enabled: true,
      voiceType: "pharaoh-male",
      lipSyncAccuracy: [95],
      emotionalTone: [80],
      ancientLanguage: true,
      modernTranslation: true,
    },
    augmentedReality: {
      enabled: true,
      arMode: "holographic",
      interactivity: [90],
      threeDDepth: [85],
      environmentMapping: true,
      gestureControl: true,
    },
    interactiveMusic: {
      enabled: true,
      adaptiveMode: "emotion-based",
      musicStyle: "ancient-egyptian",
      intensityResponse: [75],
      rhythmSync: [88],
      instrumentalLayers: [6],
    },
    advancedCustomization: {
      enabled: true,
      detailLevel: [95],
      colorPrecision: [90],
      lightingControl: [85],
      textureQuality: [92],
      animationSmoothing: [88],
      particleEffects: [80],
    },
  })

  const [videoSettings, setVideoSettings] = useState({
    duration: [45],
    quality: [95],
    faceAccuracy: [98],
    backgroundStyle: [85],
    voiceSync: [90],
    emotionalExpression: [80],
    cinematicEffects: [75],
    musicIntensity: [70],
    frameRate: [30],
    resolution: [4],
    colorGrading: [80],
    lightingEffects: [75],
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const videoStyles = [
    {
      id: "pharaoh-king",
      name: "الملك الفرعوني العظيم",
      description: "تحويل إلى فرعون مهيب بالتاج الذهبي والعرش الملكي مع حركات ملكية",
      preview: "/placeholder.svg?height=200&width=300&text=Pharaoh+King",
      premium: false,
      features: ["تاج ذهبي متحرك", "عرش ملكي", "حركات مهيبة", "خلفية قصر فرعوني"],
      difficulty: "مبتدئ",
      estimatedTime: "30-45 ثانية",
      popularity: 95,
    },
    {
      id: "queen-nefertiti",
      name: "الملكة نفرتيتي الأسطورية",
      description: "تحويل إلى ملكة بجمال نفرتيتي مع التاج الأزرق والمجوهرات الذهبية",
      preview: "/placeholder.svg?height=200&width=300&text=Queen+Nefertiti",
      premium: true,
      features: ["التاج الأزرق", "مجوهرات ذهبية", "حركات أنثوية راقية", "خلفية معبد إيزيس"],
      difficulty: "متوسط",
      estimatedTime: "45-60 ثانية",
      popularity: 88,
    },
    {
      id: "high-priest",
      name: "الكاهن الأعظم المقدس",
      description: "تحويل إلى كاهن مقدس بالأردية البيضاء والرموز الدينية المتوهجة",
      preview: "/placeholder.svg?height=200&width=300&text=High+Priest",
      premium: true,
      features: ["أردية مقدسة", "رموز متوهجة", "حركات طقوسية", "خلفية معبد مقدس"],
      difficulty: "متقدم",
      estimatedTime: "60-90 ثانية",
      popularity: 76,
    },
    {
      id: "royal-scribe",
      name: "الكاتب الملكي الحكيم",
      description: "تحويل إلى كاتب فرعوني بأدوات الكتابة المقدسة والبردي الذهبي",
      preview: "/placeholder.svg?height=200&width=300&text=Royal+Scribe",
      premium: false,
      features: ["أدوات كتابة ذهبية", "بردي مقدس", "حركات كتابية", "خلفية بيت الحياة"],
      difficulty: "مبتدئ",
      estimatedTime: "30-45 ثانية",
      popularity: 82,
    },
    {
      id: "warrior-general",
      name: "القائد المحارب الأسطوري",
      description: "تحويل إلى قائد عسكري بالدرع الذهبي والسيف المقدس",
      preview: "/placeholder.svg?height=200&width=300&text=Warrior+General",
      premium: true,
      features: ["درع ذهبي", "سيف مقدس", "حركات حربية", "خلفية ساحة معركة"],
      difficulty: "متقدم",
      estimatedTime: "60-90 ثانية",
      popularity: 91,
    },
    {
      id: "goddess-isis",
      name: "الإلهة إيزيس المقدسة",
      description: "تحويل إلى إلهة بالأجنحة الذهبية والقوى السحرية المتوهجة",
      preview: "/placeholder.svg?height=200&width=300&text=Goddess+Isis",
      premium: true,
      features: ["أجنحة ذهبية", "قوى سحرية", "حركات إلهية", "خلفية عالم الآلهة"],
      difficulty: "خبير",
      estimatedTime: "90-120 ثانية",
      popularity: 94,
    },
    {
      id: "sphinx-guardian",
      name: "حارس أبو الهول الأبدي",
      description: "تحويل إلى حارس أسطوري بجسد الأسد ووجه الإنسان الحكيم",
      preview: "/placeholder.svg?height=200&width=300&text=Sphinx+Guardian",
      premium: true,
      features: ["جسد أسد", "وجه حكيم", "حركات حراسة", "خلفية صحراء الجيزة"],
      difficulty: "خبير",
      estimatedTime: "90-120 ثانية",
      popularity: 87,
    },
    {
      id: "anubis-guide",
      name: "أنوبيس دليل العالم الآخر",
      description: "تحويل إلى إله الموت بالرأس الذئبي والقوى الخارقة",
      preview: "/placeholder.svg?height=200&width=300&text=Anubis+Guide",
      premium: true,
      features: ["رأس ذئبي", "قوى خارقة", "حركات إلهية", "خلفية العالم الآخر"],
      difficulty: "خبير",
      estimatedTime: "90-120 ثانية",
      popularity: 89,
    },
  ]

  const resolutionOptions = [
    { value: 1, label: "HD (720p)", description: "جودة عالية - سريع" },
    { value: 2, label: "Full HD (1080p)", description: "جودة فائقة - متوسط" },
    { value: 3, label: "2K (1440p)", description: "جودة احترافية - بطيء" },
    { value: 4, label: "4K (2160p)", description: "جودة سينمائية - بطيء جداً" },
  ]

  const voiceTypes = [
    { id: "pharaoh-male", name: "فرعون ذكر", description: "صوت ملكي عميق وقوي" },
    { id: "queen-female", name: "ملكة أنثى", description: "صوت ملكي أنثوي راقي" },
    { id: "priest-wise", name: "كاهن حكيم", description: "صوت روحاني مقدس" },
    { id: "warrior-strong", name: "محارب قوي", description: "صوت حربي شجاع" },
  ]

  const arModes = [
    { id: "holographic", name: "هولوجرافي", description: "عرض ثلاثي الأبعاد متقدم" },
    { id: "interactive", name: "تفاعلي", description: "تفاعل مع البيئة المحيطة" },
    { id: "immersive", name: "غامر", description: "تجربة واقع معزز كاملة" },
  ]

  const musicStyles = [
    { id: "ancient-egyptian", name: "مصري قديم", description: "آلات فرعونية أصيلة" },
    { id: "epic-orchestral", name: "أوركسترالي ملحمي", description: "موسيقى سينمائية فخمة" },
    { id: "mystical-ambient", name: "غامض محيطي", description: "أجواء روحانية مقدسة" },
    { id: "royal-ceremonial", name: "احتفالي ملكي", description: "موسيقى المراسم الملكية" },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages: string[] = []
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          newImages.push(e.target?.result as string)
          if (newImages.length === files.length) {
            setUploadedImages((prev) => [...prev, ...newImages])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const generatePharaonicVideo = async () => {
    if (uploadedImages.length === 0) return

    setIsGeneratingVideo(true)
    setVideoProgress(0)
    setActiveTab("generate")

    const progressSteps = [
      { step: 5, message: "🚀 تهيئة نظام الذكاء الاصطناعي المتقدم..." },
      { step: 10, message: "🔍 تحليل ملامح الوجه بدقة فائقة..." },
      { step: 15, message: "🎭 تحديد نقاط الوجه الرئيسية..." },
      { step: 20, message: "🎤 تحليل الصوت وإعداد المزامنة الذكية..." },
      { step: 25, message: "👑 تطبيق النمط الفرعوني المختار..." },
      { step: 30, message: "🌐 إعداد بيئة الواقع المعزز ثلاثية الأبعاد..." },
      { step: 35, message: "✨ إنشاء الحركات والتعبيرات الطبيعية..." },
      { step: 40, message: "🎵 توليد الموسيقى التفاعلية المخصصة..." },
      { step: 45, message: "🎨 تحسين الألوان والإضاءة السينمائية..." },
      { step: 50, message: "🏛️ إضافة الخلفية والبيئة الفرعونية..." },
      { step: 55, message: "🔊 مزامنة الصوت الذكي مع حركة الشفاه..." },
      { step: 60, message: "🎬 تطبيق المؤثرات السينمائية المتقدمة..." },
      { step: 65, message: "🌟 إضافة التأثيرات الهولوجرافية..." },
      { step: 70, message: "🎯 ضبط التفاصيل المخصصة..." },
      { step: 75, message: "🧠 تحسين الذكاء العاطفي للشخصية..." },
      { step: 80, message: "🎪 إضافة التفاعلية والاستجابة..." },
      { step: 85, message: "💎 تحسين الجودة النهائية..." },
      { step: 90, message: "🔄 معالجة الواقع المعزز..." },
      { step: 95, message: "🎉 إضافة اللمسات الأخيرة..." },
      { step: 100, message: "✅ اكتمل إنشاء الفيديو الفرعوني الاحترافي المتقدم!" },
    ]

    for (const { step, message } of progressSteps) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setVideoProgress(step)
      setCurrentStep(message)
    }

    setGeneratedVideo("/videos/pharaonic-avatar-video.mp4")
    setIsGeneratingVideo(false)
    setActiveTab("result")
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
    setSelectedImages((prev) => prev.filter((i) => i !== index))
  }

  const toggleImageSelection = (index: number) => {
    setSelectedImages((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const resetVideoCreator = () => {
    setGeneratedVideo(null)
    setUploadedImages([])
    setSelectedImages([])
    setVideoProgress(0)
    setCurrentStep("")
    setActiveTab("upload")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "مبتدئ":
        return "bg-green-100 text-green-800"
      case "متوسط":
        return "bg-yellow-100 text-yellow-800"
      case "متقدم":
        return "bg-orange-100 text-orange-800"
      case "خبير":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return "text-green-600"
    if (popularity >= 80) return "text-yellow-600"
    if (popularity >= 70) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/pharaonic-bg.png'), linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay, normal",
      }}
    >
      {/* Advanced Pharaonic Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/papyrus-texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Hieroglyphic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {["𓂀", "𓇳", "𓊪", "𓏏", "𓊖", "𓋹", "𓋴", "𓈖", "🎬", "🎭", "👑", "✨"].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-purple-400/20 text-2xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Enhanced Header */}
      <header
        className="relative text-white p-4 shadow-2xl border-b-4 border-purple-400"
        style={{
          backgroundImage: `url('/images/pharaonic-header.png'), linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "overlay, normal",
        }}
      >
        <div className="flex items-center gap-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600/20">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-xl border-3 border-purple-300 animate-pulse">
                <Film className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold drop-shadow-lg" style={{ fontFamily: "serif" }}>
                𓊪𓏏𓊖 استوديو الفيديو الفرعوني الاحترافي 𓊪𓏏𓊖
              </h1>
              <p className="text-purple-200 text-sm">منشئ الفيديوهات الفرعونية بالذكاء الاصطناعي المتقدم</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse">
              🎬 استوديو نشط
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">⚡ AI متقدم</Badge>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6 relative z-10">
        {/* Enhanced Video Creator Header */}
        <Card className="bg-gradient-to-r from-purple-100/95 to-pink-100/95 border-2 border-purple-400 shadow-2xl backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-purple-900 text-center flex items-center justify-center gap-2">
              <Video className="h-8 w-8" />🎬 استوديو الفيديو الفرعوني الاحترافي المتطور
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl mb-3">🎭 👑 🎬 ✨ 🏛️ 🎵</div>
              <p className="text-purple-800 mb-4">
                تقنية ثورية لتحويل صورك إلى فيديو فرعوني سينمائي بدقة 8K وذكاء اصطناعي متقدم!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/80 rounded-lg p-3 shadow-md">
                  <div className="text-2xl font-bold text-purple-800">8K</div>
                  <div className="text-sm text-purple-700">دقة فائقة</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3 shadow-md">
                  <div className="text-2xl font-bold text-purple-800">99.5%</div>
                  <div className="text-sm text-purple-700">دقة الملامح</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3 shadow-md">
                  <div className="text-2xl font-bold text-purple-800">AI+</div>
                  <div className="text-sm text-purple-700">ذكاء متقدم</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3 shadow-md">
                  <div className="text-2xl font-bold text-purple-800">4D</div>
                  <div className="text-sm text-purple-700">تجربة غامرة</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6 bg-gradient-to-r from-purple-900/90 to-pink-800/90 backdrop-blur-md border-2 border-purple-400/50 shadow-xl">
            <TabsTrigger
              value="upload"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <Upload className="h-4 w-4 mr-1" />
              رفع الصور
            </TabsTrigger>
            <TabsTrigger
              value="customize"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              disabled={uploadedImages.length === 0}
            >
              <Palette className="h-4 w-4 mr-1" />
              اختيار النمط
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              disabled={uploadedImages.length === 0}
            >
              <Settings className="h-4 w-4 mr-1" />
              الإعدادات
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              disabled={uploadedImages.length === 0}
            >
              <Sparkles className="h-4 w-4 mr-1" />
              الميزات المتقدمة
            </TabsTrigger>
            <TabsTrigger
              value="generate"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              disabled={uploadedImages.length === 0}
            >
              <Wand2 className="h-4 w-4 mr-1" />
              التحويل
            </TabsTrigger>
            <TabsTrigger
              value="result"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
              disabled={!generatedVideo}
            >
              <Eye className="h-4 w-4 mr-1" />
              النتيجة
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  رفع الصور الشخصية عالية الجودة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center mb-4 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                  <div className="text-6xl mb-4">📸✨🎬</div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">ارفع صورك الشخصية عالية الجودة</h3>
                  <p className="text-purple-700 text-sm mb-4">
                    يمكنك رفع عدة صور للحصول على أفضل النتائج (يُنصح بـ 3-10 صور مختلفة الزوايا)
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      اختيار الصور
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-700 bg-transparent hover:bg-purple-50"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      التقاط صورة
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-700 bg-transparent hover:bg-blue-50">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      من المعرض
                    </Button>
                  </div>
                </div>

                {uploadedImages.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-purple-900">الصور المرفوعة ({uploadedImages.length}):</h4>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-600 text-green-700 bg-transparent hover:bg-green-50"
                          onClick={() => setSelectedImages(uploadedImages.map((_, i) => i))}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          تحديد الكل
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-600 text-red-700 bg-transparent hover:bg-red-50"
                          onClick={() => setUploadedImages([])}
                        >
                          <RotateCcw className="h-4 w-4 mr-1" />
                          مسح الكل
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <div
                            className={`relative border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                              selectedImages.includes(index)
                                ? "border-purple-600 shadow-lg scale-105"
                                : "border-gray-200 hover:border-purple-400"
                            }`}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Uploaded ${index + 1}`}
                              width={150}
                              height={150}
                              className="w-full h-32 object-cover transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-white hover:bg-white/20"
                                  onClick={() => toggleImageSelection(index)}
                                >
                                  {selectedImages.includes(index) ? (
                                    <CheckCircle className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-white hover:bg-red-500/20"
                                  onClick={() => removeImage(index)}
                                >
                                  ×
                                </Button>
                              </div>
                            </div>
                            {selectedImages.includes(index) && (
                              <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                ✓
                              </div>
                            )}
                            <Badge className="absolute bottom-1 left-1 bg-purple-600 text-white text-xs">
                              {index + 1}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button
                        onClick={() => setActiveTab("customize")}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg transition-all duration-300 hover:scale-105"
                        disabled={uploadedImages.length === 0}
                      >
                        <Palette className="h-4 w-4 mr-2" />
                        المتابعة لاختيار النمط
                      </Button>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-100/95 to-indigo-100/95 border-2 border-blue-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  نصائح احترافية للحصول على أفضل النتائج
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 text-sm text-blue-800">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4" />📸 جودة الصور:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>استخدم صور عالية الجودة (على الأقل 1080p)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تأكد من وضوح الوجه ومواجهته للكاميرا</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تجنب الظلال القوية والإضاءة الخافتة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>استخدم خلفية بسيطة وغير معقدة</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-blue-800">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4" />🎬 إعدادات متقدمة:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>ارفع 3-10 صور مختلفة الزوايا</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>اختر النمط المناسب لشخصيتك</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>اضبط الإعدادات حسب تفضيلاتك</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>استخدم جودة 95% للنتائج المثلى</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  اختر النمط الفرعوني المتقدم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videoStyles.map((style) => (
                    <Card
                      key={style.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        videoStyle === style.id
                          ? "border-2 border-purple-600 bg-purple-50 shadow-xl scale-105"
                          : "border border-gray-200 hover:border-purple-400 hover:shadow-lg hover:scale-102"
                      }`}
                      onClick={() => setVideoStyle(style.id)}
                    >
                      <CardContent className="p-4">
                        <div className="relative mb-4">
                          <Image
                            src={style.preview || "/placeholder.svg"}
                            alt={style.name}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 right-2 flex gap-1">
                            {style.premium && (
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                                ⭐ مميز
                              </Badge>
                            )}
                            <Badge className={`text-xs ${getDifficultyColor(style.difficulty)}`}>
                              {style.difficulty}
                            </Badge>
                          </div>
                          <div className="absolute bottom-2 left-2 flex items-center gap-1">
                            <TrendingUp className={`h-3 w-3 ${getPopularityColor(style.popularity)}`} />
                            <span className={`text-xs font-bold ${getPopularityColor(style.popularity)}`}>
                              {style.popularity}%
                            </span>
                          </div>
                          {videoStyle === style.id && (
                            <div className="absolute inset-0 bg-purple-600/20 rounded-lg flex items-center justify-center">
                              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-lg text-purple-900 mb-2">{style.name}</h4>
                        <p className="text-sm text-purple-700 mb-3">{style.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            <span>{style.estimatedTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Users className="h-3 w-3" />
                            <span>{style.popularity}% شعبية</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {style.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                              {feature}
                            </Badge>
                          ))}
                          {style.features.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                              +{style.features.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                onClick={() => setActiveTab("settings")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Settings className="h-5 w-5 mr-2" />
                المتابعة للإعدادات المتقدمة
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  إعدادات الفيديو المتقدمة والاحترافية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      مدة الفيديو: {videoSettings.duration[0]} ثانية
                    </label>
                    <Slider
                      value={videoSettings.duration}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, duration: value })}
                      max={180}
                      min={15}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>15s</span>
                      <span>180s</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      جودة الفيديو: {videoSettings.quality[0]}%
                    </label>
                    <Slider
                      value={videoSettings.quality}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, quality: value })}
                      max={100}
                      min={60}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>60%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      دقة مطابقة الملامح: {videoSettings.faceAccuracy[0]}%
                    </label>
                    <Slider
                      value={videoSettings.faceAccuracy}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, faceAccuracy: value })}
                      max={100}
                      min={80}
                      step={2}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>80%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      نمط الخلفية: {videoSettings.backgroundStyle[0]}%
                    </label>
                    <Slider
                      value={videoSettings.backgroundStyle}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, backgroundStyle: value })}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      مزامنة الصوت: {videoSettings.voiceSync[0]}%
                    </label>
                    <Slider
                      value={videoSettings.voiceSync}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, voiceSync: value })}
                      max={100}
                      min={50}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      التعبيرات العاطفية: {videoSettings.emotionalExpression[0]}%
                    </label>
                    <Slider
                      value={videoSettings.emotionalExpression}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, emotionalExpression: value })}
                      max={100}
                      min={30}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>30%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Film className="h-4 w-4" />
                      المؤثرات السينمائية: {videoSettings.cinematicEffects[0]}%
                    </label>
                    <Slider
                      value={videoSettings.cinematicEffects}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, cinematicEffects: value })}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      كثافة الموسيقى: {videoSettings.musicIntensity[0]}%
                    </label>
                    <Slider
                      value={videoSettings.musicIntensity}
                      onValueChange={(value) => setVideoSettings({ ...videoSettings, musicIntensity: value })}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-purple-900 mb-3 block flex items-center gap-2">
                    <FileVideo className="h-4 w-4" />
                    دقة الفيديو:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {resolutionOptions.map((option) => (
                      <Card
                        key={option.value}
                        className={`cursor-pointer transition-all duration-300 ${
                          videoSettings.resolution[0] === option.value
                            ? "border-2 border-purple-600 bg-purple-50"
                            : "border border-gray-200 hover:border-purple-400"
                        }`}
                        onClick={() => setVideoSettings({ ...videoSettings, resolution: [option.value] })}
                      >
                        <CardContent className="p-3 text-center">
                          <div className="font-bold text-sm text-purple-900">{option.label}</div>
                          <div className="text-xs text-purple-700 mt-1">{option.description}</div>
                          {videoSettings.resolution[0] === option.value && (
                            <CheckCircle className="h-4 w-4 text-purple-600 mx-auto mt-2" />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                onClick={() => setActiveTab("generate")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Wand2 className="h-5 w-5 mr-2" />
                بدء إنشاء الفيديو الفرعوني
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-100/95 to-pink-100/95 border-2 border-purple-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  الميزات المتقدمة للفيديو الفرعوني
                </CardTitle>
                <CardDescription className="text-purple-700">
                  تحكم في الميزات المتطورة لإنشاء فيديو فرعوني استثنائي
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* الصوت الذكي */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                        <Headphones className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900">الصوت الذكي</h3>
                        <p className="text-sm text-purple-700">صوت فرعوني أصيل مع مزامنة الشفاه</p>
                      </div>
                    </div>
                    <Switch
                      checked={advancedFeatures.smartAudio.enabled}
                      onCheckedChange={(checked) =>
                        setAdvancedFeatures((prev) => ({
                          ...prev,
                          smartAudio: { ...prev.smartAudio, enabled: checked },
                        }))
                      }
                    />
                  </div>

                  {advancedFeatures.smartAudio.enabled && (
                    <div className="bg-white/80 rounded-lg p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-purple-900 font-medium">نوع الصوت</Label>
                          <Select
                            value={advancedFeatures.smartAudio.voiceType}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                smartAudio: { ...prev.smartAudio, voiceType: value },
                              }))
                            }
                          >
                            <SelectTrigger className="bg-white border-purple-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pharaoh-male">فرعون ذكر مهيب</SelectItem>
                              <SelectItem value="queen-female">ملكة أنثى راقية</SelectItem>
                              <SelectItem value="priest-wise">كاهن حكيم</SelectItem>
                              <SelectItem value="god-divine">إله مقدس</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            دقة مزامنة الشفاه: {advancedFeatures.smartAudio.lipSyncAccuracy[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.smartAudio.lipSyncAccuracy}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                smartAudio: { ...prev.smartAudio, lipSyncAccuracy: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            النبرة العاطفية: {advancedFeatures.smartAudio.emotionalTone[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.smartAudio.emotionalTone}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                smartAudio: { ...prev.smartAudio, emotionalTone: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <Label className="text-purple-900 font-medium">اللغة المصرية القديمة</Label>
                          <Switch
                            checked={advancedFeatures.smartAudio.ancientLanguage}
                            onCheckedChange={(checked) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                smartAudio: { ...prev.smartAudio, ancientLanguage: checked },
                              }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* الواقع المعزز */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900">الواقع المعزز</h3>
                        <p className="text-sm text-purple-700">تجربة تفاعلية ثلاثية الأبعاد</p>
                      </div>
                    </div>
                    <Switch
                      checked={advancedFeatures.augmentedReality.enabled}
                      onCheckedChange={(checked) =>
                        setAdvancedFeatures((prev) => ({
                          ...prev,
                          augmentedReality: { ...prev.augmentedReality, enabled: checked },
                        }))
                      }
                    />
                  </div>

                  {advancedFeatures.augmentedReality.enabled && (
                    <div className="bg-white/80 rounded-lg p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-purple-900 font-medium">نمط الواقع المعزز</Label>
                          <Select
                            value={advancedFeatures.augmentedReality.arMode}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                augmentedReality: { ...prev.augmentedReality, arMode: value },
                              }))
                            }
                          >
                            <SelectTrigger className="bg-white border-purple-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="holographic">هولوجرافي متقدم</SelectItem>
                              <SelectItem value="immersive">غامر تفاعلي</SelectItem>
                              <SelectItem value="mixed-reality">واقع مختلط</SelectItem>
                              <SelectItem value="portal">بوابة زمنية</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            مستوى التفاعل: {advancedFeatures.augmentedReality.interactivity[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.augmentedReality.interactivity}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                augmentedReality: { ...prev.augmentedReality, interactivity: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            العمق ثلاثي الأبعاد: {advancedFeatures.augmentedReality.threeDDepth[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.augmentedReality.threeDDepth}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                augmentedReality: { ...prev.augmentedReality, threeDDepth: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <Label className="text-purple-900 font-medium">التحكم بالإيماءات</Label>
                          <Switch
                            checked={advancedFeatures.augmentedReality.gestureControl}
                            onCheckedChange={(checked) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                augmentedReality: { ...prev.augmentedReality, gestureControl: checked },
                              }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* الموسيقى التفاعلية */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                        <Music className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900">الموسيقى التفاعلية</h3>
                        <p className="text-sm text-purple-700">موسيقى تتكيف مع المشاعر والحركات</p>
                      </div>
                    </div>
                    <Switch
                      checked={advancedFeatures.interactiveMusic.enabled}
                      onCheckedChange={(checked) =>
                        setAdvancedFeatures((prev) => ({
                          ...prev,
                          interactiveMusic: { ...prev.interactiveMusic, enabled: checked },
                        }))
                      }
                    />
                  </div>

                  {advancedFeatures.interactiveMusic.enabled && (
                    <div className="bg-white/80 rounded-lg p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-purple-900 font-medium">نمط التكيف</Label>
                          <Select
                            value={advancedFeatures.interactiveMusic.adaptiveMode}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                interactiveMusic: { ...prev.interactiveMusic, adaptiveMode: value },
                              }))
                            }
                          >
                            <SelectTrigger className="bg-white border-purple-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emotion-based">حسب المشاعر</SelectItem>
                              <SelectItem value="movement-sync">مزامنة الحركة</SelectItem>
                              <SelectItem value="scene-adaptive">تكيف المشهد</SelectItem>
                              <SelectItem value="ai-composed">تأليف ذكي</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-purple-900 font-medium">نمط الموسيقى</Label>
                          <Select
                            value={advancedFeatures.interactiveMusic.musicStyle}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                interactiveMusic: { ...prev.interactiveMusic, musicStyle: value },
                              }))
                            }
                          >
                            <SelectTrigger className="bg-white border-purple-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ancient-egyptian">مصري قديم</SelectItem>
                              <SelectItem value="temple-chants">ترانيم المعبد</SelectItem>
                              <SelectItem value="royal-fanfare">موسيقى ملكية</SelectItem>
                              <SelectItem value="mystical-ambient">غامض محيطي</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            استجابة الشدة: {advancedFeatures.interactiveMusic.intensityResponse[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.interactiveMusic.intensityResponse}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                interactiveMusic: { ...prev.interactiveMusic, intensityResponse: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            مزامنة الإيقاع: {advancedFeatures.interactiveMusic.rhythmSync[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.interactiveMusic.rhythmSync}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                interactiveMusic: { ...prev.interactiveMusic, rhythmSync: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            طبقات الآلات: {advancedFeatures.interactiveMusic.instrumentalLayers[0]}
                          </Label>
                          <Slider
                            value={advancedFeatures.interactiveMusic.instrumentalLayers}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                interactiveMusic: { ...prev.interactiveMusic, instrumentalLayers: value },
                              }))
                            }
                            max={12}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* التخصيص المتقدم */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Palette className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900">التخصيص المتقدم</h3>
                        <p className="text-sm text-purple-700">تحكم كامل في كل تفصيلة</p>
                      </div>
                    </div>
                    <Switch
                      checked={advancedFeatures.advancedCustomization.enabled}
                      onCheckedChange={(checked) =>
                        setAdvancedFeatures((prev) => ({
                          ...prev,
                          advancedCustomization: { ...prev.advancedCustomization, enabled: checked },
                        }))
                      }
                    />
                  </div>

                  {advancedFeatures.advancedCustomization.enabled && (
                    <div className="bg-white/80 rounded-lg p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            مستوى التفاصيل: {advancedFeatures.advancedCustomization.detailLevel[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.detailLevel}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, detailLevel: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            دقة الألوان: {advancedFeatures.advancedCustomization.colorPrecision[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.colorPrecision}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, colorPrecision: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            تحكم الإضاءة: {advancedFeatures.advancedCustomization.lightingControl[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.lightingControl}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, lightingControl: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            جودة الملمس: {advancedFeatures.advancedCustomization.textureQuality[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.textureQuality}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, textureQuality: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            نعومة الحركة: {advancedFeatures.advancedCustomization.animationSmoothing[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.animationSmoothing}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, animationSmoothing: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-purple-900 font-medium">
                            تأثيرات الجسيمات: {advancedFeatures.advancedCustomization.particleEffects[0]}%
                          </Label>
                          <Slider
                            value={advancedFeatures.advancedCustomization.particleEffects}
                            onValueChange={(value) =>
                              setAdvancedFeatures((prev) => ({
                                ...prev,
                                advancedCustomization: { ...prev.advancedCustomization, particleEffects: value },
                              }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ملخص الميزات المفعلة */}
                <Card className="bg-gradient-to-r from-green-100/90 to-emerald-100/90 border-2 border-green-400">
                  <CardHeader>
                    <CardTitle className="text-green-900 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      ملخص الميزات المفعلة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div
                        className={`p-3 rounded-lg text-center ${advancedFeatures.smartAudio.enabled ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"}`}
                      >
                        <Headphones className="h-6 w-6 mx-auto mb-1" />
                        <div className="font-medium">الصوت الذكي</div>
                        <div className="text-xs">{advancedFeatures.smartAudio.enabled ? "مفعل" : "معطل"}</div>
                      </div>
                      <div
                        className={`p-3 rounded-lg text-center ${advancedFeatures.augmentedReality.enabled ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"}`}
                      >
                        <Globe className="h-6 w-6 mx-auto mb-1" />
                        <div className="font-medium">الواقع المعزز</div>
                        <div className="text-xs">{advancedFeatures.augmentedReality.enabled ? "مفعل" : "معطل"}</div>
                      </div>
                      <div
                        className={`p-3 rounded-lg text-center ${advancedFeatures.interactiveMusic.enabled ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"}`}
                      >
                        <Music className="h-6 w-6 mx-auto mb-1" />
                        <div className="font-medium">الموسيقى التفاعلية</div>
                        <div className="text-xs">{advancedFeatures.interactiveMusic.enabled ? "مفعل" : "معطل"}</div>
                      </div>
                      <div
                        className={`p-3 rounded-lg text-center ${advancedFeatures.advancedCustomization.enabled ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"}`}
                      >
                        <Palette className="h-6 w-6 mx-auto mb-1" />
                        <div className="font-medium">التخصيص المتقدم</div>
                        <div className="text-xs">
                          {advancedFeatures.advancedCustomization.enabled ? "مفعل" : "معطل"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-100/95 to-emerald-100/95 border-2 border-green-400 shadow-xl backdrop-blur-sm">
              <CardContent className="p-8">
                {isGeneratingVideo ? (
                  <div className="text-center space-y-6">
                    <div className="text-6xl mb-4">🎬✨🏛️</div>
                    <h3 className="text-2xl font-bold text-green-900">جاري إنشاء الفيديو الفرعوني الاحترافي...</h3>
                    <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 h-8 rounded-full transition-all duration-500 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                        style={{ width: `${videoProgress}%` }}
                      >
                        {videoProgress}%
                      </div>
                    </div>
                    <p className="text-green-700 font-medium text-lg">{currentStep}</p>
                    <div className="flex items-center justify-center gap-3">
                      <Zap className="h-6 w-6 text-green-600 animate-pulse" />
                      <span className="text-green-600 font-medium">الذكاء الاصطناعي يعمل بكامل قوته...</span>
                      <Sparkles className="h-6 w-6 text-green-600 animate-spin" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-800">AI</div>
                        <div className="text-sm text-green-700">نشط</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-800">
                          {videoSettings.resolution[0] === 4 ? "8K" : "4K"}
                        </div>
                        <div className="text-sm text-green-700">جودة</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-800">{videoSettings.duration[0]}s</div>
                        <div className="text-sm text-green-700">مدة</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="text-6xl mb-4">🎬👑✨</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-4">جاهز لإنشاء الفيديو الفرعوني الاحترافي!</h3>
                    <p className="text-green-800 mb-6 text-lg">
                      سيتم استخدام أحدث تقنيات الذكاء الاصطناعي لإنشاء فيديو سينمائي بجودة{" "}
                      {videoSettings.resolution[0] === 4 ? "8K" : "4K"}
                    </p>

                    <Card className="bg-white/90 border border-green-300 mb-6">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-green-900 mb-3">ملخص الإعدادات:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-green-800">النمط</div>
                            <div className="text-green-700">{videoStyles.find((s) => s.id === videoStyle)?.name}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-green-800">الصور</div>
                            <div className="text-green-700">{uploadedImages.length} صورة</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-green-800">المدة</div>
                            <div className="text-green-700">{videoSettings.duration[0]} ثانية</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-green-800">الجودة</div>
                            <div className="text-green-700">{videoSettings.quality[0]}%</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button
                      onClick={generatePharaonicVideo}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-xl px-12 py-4 shadow-xl transition-all duration-300 hover:scale-105"
                      disabled={uploadedImages.length === 0}
                    >
                      <Sparkles className="h-6 w-6 mr-3" />
                      إنشاء الفيديو الفرعوني الاحترافي
                    </Button>
                    {uploadedImages.length === 0 && (
                      <p className="text-sm text-red-600 mt-2">يرجى رفع الصور أولاً للبدء</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="result" className="space-y-6">
            <Card className="bg-white/95 backdrop-blur border-2 border-green-400 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-green-900 text-center flex items-center justify-center gap-2">
                  <Crown className="h-6 w-6" />🎉 فيديوك الفرعوني الاحترافي جاهز!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {generatedVideo && (
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <div className="bg-black rounded-xl p-4 shadow-2xl">
                        <video
                          src={generatedVideo || "/placeholder.mp4"}
                          controls
                          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                          poster="/placeholder.svg?height=400&width=600&text=Pharaonic+Video+8K"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg px-3 py-1">
                          <Sparkles className="h-4 w-4 mr-1" />
                          جديد
                        </Badge>
                      </div>
                    </div>

                    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-green-900 mb-3 text-center">إحصائيات الفيديو</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div className="bg-white/80 rounded-lg p-3">
                            <div className="text-xl font-bold text-green-800">
                              {videoSettings.resolution[0] === 4 ? "8K" : "4K"}
                            </div>
                            <div className="text-sm text-green-700">الدقة</div>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3">
                            <div className="text-xl font-bold text-green-800">{videoSettings.duration[0]}s</div>
                            <div className="text-sm text-green-700">المدة</div>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3">
                            <div className="text-xl font-bold text-green-800">98.5%</div>
                            <div className="text-sm text-green-700">دقة الملامح</div>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3">
                            <div className="text-xl font-bold text-green-800">25.6MB</div>
                            <div className="text-sm text-green-700">حجم الملف</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg">
                        <Download className="h-4 w-4 mr-2" />
                        تحميل الفيديو {videoSettings.resolution[0] === 4 ? "8K" : "4K"}
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-700 hover:bg-blue-50 bg-transparent shadow-lg"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        مشاركة على وسائل التواصل
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-600 text-purple-700 hover:bg-purple-50 bg-transparent shadow-lg"
                        onClick={resetVideoCreator}
                      >
                        <Wand2 className="h-4 w-4 mr-2" />
                        إنشاء فيديو جديد
                      </Button>
                      <Button
                        variant="outline"
                        className="border-pink-600 text-pink-700 hover:bg-pink-50 bg-transparent shadow-lg"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        إضافة للمفضلة
                      </Button>
                    </div>

                    <Card className="bg-amber-50 border-amber-200">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-bold text-amber-900 mb-3">قيم تجربتك مع منشئ الفيديو</h4>
                        <div className="flex justify-center gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-8 w-8 text-yellow-400 fill-yellow-400 cursor-pointer hover:scale-110 transition-transform"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-amber-700">ساعدنا في تحسين منشئ الفيديو الفرعوني</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-br from-indigo-100/95 to-purple-100/95 border-2 border-indigo-400 shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-indigo-900 text-center flex items-center justify-center gap-2">
              <Video className="h-5 w-5" />
              معرض الفيديوهات الفرعونية المميزة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative group">
                  <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=120&width=160&text=Video+${i}`}
                      alt={`Sample Video ${i}`}
                      width={160}
                      height={120}
                      className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      0:{30 + i}
                    </div>
                    <div className="absolute top-1 left-1">
                      <Badge className="bg-purple-600 text-white text-xs">
                        {videoStyles[i % videoStyles.length]?.difficulty || "مبتدئ"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-indigo-700 text-sm mt-4">
              أمثلة على الفيديوهات الفرعونية المُنشأة بالذكاء الاصطناعي
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
