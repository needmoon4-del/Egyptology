"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Crown, Zap, Star, Trophy, Clock, Users, Target } from "lucide-react"

interface LearningPath {
  id: string
  title: string
  description: string
  icon: any
  difficulty: "مبتدئ" | "متوسط" | "متقدم"
  duration: string
  lessons: number
  progress: number
  piReward: number
  color: string
  topics: string[]
}

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [userProgress, setUserProgress] = useState<Record<string, number>>({})

  const learningPaths: LearningPath[] = [
    {
      id: "pharaohs",
      title: "مسار الفراعنة العظام",
      description: "اكتشف تاريخ أعظم الفراعنة وإنجازاتهم الخالدة",
      icon: Crown,
      difficulty: "متوسط",
      duration: "4 أسابيع",
      lessons: 16,
      progress: 65,
      piReward: 500,
      color: "from-yellow-400 to-orange-500",
      topics: ["رمسيس الثاني", "توت عنخ آمون", "حتشبسوت", "أخناتون"],
    },
    {
      id: "gods",
      title: "مسار الآلهة المصرية",
      description: "تعرف على الآلهة المصرية القديمة وأساطيرها",
      icon: Star,
      difficulty: "مبتدئ",
      duration: "3 أسابيع",
      lessons: 12,
      progress: 30,
      piReward: 350,
      color: "from-purple-400 to-pink-500",
      topics: ["رع", "إيزيس", "أوزوريس", "حورس"],
    },
    {
      id: "architecture",
      title: "مسار العمارة الفرعونية",
      description: "استكشف أسرار بناء الأهرامات والمعابد",
      icon: Target,
      difficulty: "متقدم",
      duration: "6 أسابيع",
      lessons: 24,
      progress: 15,
      piReward: 750,
      color: "from-blue-400 to-cyan-500",
      topics: ["الأهرامات", "المعابد", "المقابر", "التقنيات"],
    },
    {
      id: "hieroglyphs",
      title: "مسار الهيروغليفية",
      description: "تعلم قراءة وكتابة الرموز الهيروغليفية",
      icon: BookOpen,
      difficulty: "متوسط",
      duration: "5 أسابيع",
      lessons: 20,
      progress: 80,
      piReward: 600,
      color: "from-green-400 to-emerald-500",
      topics: ["الأبجدية", "القواعد", "النصوص", "الترجمة"],
    },
  ]

  const achievements = [
    { title: "باحث مبتدئ", description: "أكمل مسارك الأول", icon: Trophy, earned: true },
    { title: "عالم آثار", description: "أكمل 3 مسارات", icon: Star, earned: false },
    { title: "خبير مصريات", description: "أكمل جميع المسارات", icon: Crown, earned: false },
  ]

  useEffect(() => {
    // محاكاة تحميل تقدم المستخدم
    const progress = learningPaths.reduce(
      (acc, path) => {
        acc[path.id] = path.progress
        return acc
      },
      {} as Record<string, number>,
    )
    setUserProgress(progress)
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "مبتدئ":
        return "bg-green-500"
      case "متوسط":
        return "bg-yellow-500"
      case "متقدم":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const startPath = (pathId: string) => {
    setSelectedPath(pathId)
    // هنا يمكن إضافة منطق بدء المسار
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              المسارات التعليمية المخصصة
            </h1>
            <p className="text-xl text-gray-300 mb-6">اختر مسارك التعليمي واكتشف أسرار الحضارة المصرية القديمة</p>

            {/* إحصائيات سريعة */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-cyan-500/30">
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">72</div>
                  <div className="text-sm text-gray-300">درس تفاعلي</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2,847</div>
                  <div className="text-sm text-gray-300">متعلم نشط</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-yellow-500/30">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">1,250</div>
                  <div className="text-sm text-gray-300">Pi مكتسبة</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-green-500/30">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">18</div>
                  <div className="text-sm text-gray-300">أسبوع تعلم</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المسارات التعليمية */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-400" />
              المسارات المتاحة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPaths.map((path) => {
                const IconComponent = path.icon
                return (
                  <Card
                    key={path.id}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${path.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge className={`${getDifficultyColor(path.difficulty)} text-white`}>{path.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{path.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{path.description}</p>

                      {/* معلومات المسار */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">المدة:</span>
                          <span className="text-white">{path.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">الدروس:</span>
                          <span className="text-white">{path.lessons} درس</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">مكافأة Pi:</span>
                          <span className="text-yellow-400 font-bold">{path.piReward} π</span>
                        </div>
                      </div>

                      {/* شريط التقدم */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">التقدم</span>
                          <span className="text-white">{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>

                      {/* المواضيع */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">المواضيع:</div>
                        <div className="flex flex-wrap gap-1">
                          {path.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-cyan-500/30 text-cyan-300">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => startPath(path.id)}
                        className={`w-full bg-gradient-to-r ${path.color} hover:opacity-90 transition-opacity`}
                      >
                        {path.progress > 0 ? "متابعة المسار" : "بدء المسار"}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6">
            {/* الإنجازات */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  الإنجازات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg ${achievement.earned ? "bg-yellow-500/20 border border-yellow-500/30" : "bg-gray-500/20 border border-gray-500/30"}`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${achievement.earned ? "text-yellow-400" : "text-gray-400"}`}
                        />
                        <div>
                          <div className={`font-semibold ${achievement.earned ? "text-yellow-300" : "text-gray-400"}`}>
                            {achievement.title}
                          </div>
                          <div className="text-sm text-gray-400">{achievement.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* إحصائيات شخصية */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  إحصائياتك
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">المسارات المكتملة</span>
                    <span className="text-white font-bold">1/4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الدروس المكتملة</span>
                    <span className="text-white font-bold">28/72</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pi المكتسبة</span>
                    <span className="text-yellow-400 font-bold">1,250 π</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الترتيب العام</span>
                    <span className="text-cyan-400 font-bold">#247</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* نصائح التعلم */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  نصيحة اليوم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  "تعلم الهيروغليفية يبدأ بفهم أن كل رمز له معنى وصوت. ابدأ بالرموز البسيطة واتقنها قبل الانتقال
                  للمعقدة."
                </p>
                <div className="mt-3 text-xs text-purple-300">- د. زاهي حواس، عالم آثار</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
