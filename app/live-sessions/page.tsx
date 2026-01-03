"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Users, Calendar, Clock, MessageCircle, Heart, Share2, Bell } from "lucide-react"

interface LiveSession {
  id: string
  title: string
  description: string
  expert: {
    name: string
    title: string
    avatar: string
    specialization: string
  }
  scheduledTime: Date
  duration: number
  viewers: number
  isLive: boolean
  category: string
  language: "ar" | "en"
  level: "beginner" | "intermediate" | "advanced"
}

interface UpcomingSession {
  id: string
  title: string
  expert: string
  date: string
  time: string
  topic: string
  registered: boolean
}

export default function LiveSessionsPage() {
  const [liveSessions, setLiveSessions] = useState<LiveSession[]>([])
  const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([])
  const [selectedSession, setSelectedSession] = useState<LiveSession | null>(null)
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    // محاكاة تحميل الجلسات المباشرة
    const mockLiveSessions: LiveSession[] = [
      {
        id: "1",
        title: "أسرار بناء الأهرامات: تقنيات مفقودة",
        description: "جلسة تفاعلية مع د. أحمد فخري لاستكشاف التقنيات المتقدمة المستخدمة في بناء الأهرامات",
        expert: {
          name: "د. أحمد فخري",
          title: "أستاذ علم المصريات",
          avatar: "/placeholder.svg?height=100&width=100",
          specialization: "الهندسة المعمارية الفرعونية",
        },
        scheduledTime: new Date(),
        duration: 90,
        viewers: 1247,
        isLive: true,
        category: "الهندسة المعمارية",
        language: "ar",
        level: "intermediate",
      },
      {
        id: "2",
        title: "فك رموز البردي: ورشة الهيروغليفية",
        description: "تعلم قراءة وكتابة الهيروغليفية مع خبيرة اللغات القديمة",
        expert: {
          name: "د. سارة محمود",
          title: "خبيرة اللغات القديمة",
          avatar: "/placeholder.svg?height=100&width=100",
          specialization: "الهيروغليفية والنصوص القديمة",
        },
        scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
        duration: 120,
        viewers: 0,
        isLive: false,
        category: "اللغة والكتابة",
        language: "ar",
        level: "beginner",
      },
    ]

    const mockUpcomingSessions: UpcomingSession[] = [
      {
        id: "1",
        title: "الحياة اليومية في مصر القديمة",
        expert: "د. محمد الخولي",
        date: "2024-01-15",
        time: "19:00",
        topic: "الثقافة والمجتمع",
        registered: false,
      },
      {
        id: "2",
        title: "كنوز توت عنخ آمون المفقودة",
        expert: "د. زاهي حواس",
        date: "2024-01-18",
        time: "20:00",
        topic: "الاكتشافات الأثرية",
        registered: true,
      },
      {
        id: "3",
        title: "الطب في مصر القديمة",
        expert: "د. عبد الحليم نور الدين",
        date: "2024-01-22",
        time: "18:30",
        topic: "العلوم والطب",
        registered: false,
      },
    ]

    setLiveSessions(mockLiveSessions)
    setUpcomingSessions(mockUpcomingSessions)
  }, [])

  const joinLiveSession = (session: LiveSession) => {
    setSelectedSession(session)
  }

  const registerForSession = (sessionId: string) => {
    setUpcomingSessions((prev) =>
      prev.map((session) => (session.id === sessionId ? { ...session, registered: !session.registered } : session)),
    )
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (selectedSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <Button onClick={() => setSelectedSession(null)} className="mb-6 bg-cyan-600 hover:bg-cyan-700">
            ← العودة للجلسات
          </Button>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* مشغل الفيديو */}
            <div className="lg:col-span-2">
              <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-lg">
                <CardContent className="p-0">
                  <div className="relative bg-black rounded-t-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Video className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-white text-lg mb-2">البث المباشر</p>
                      <p className="text-gray-400">{selectedSession.title}</p>
                    </div>

                    {selectedSession.isLive && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        مباشر
                      </div>
                    )}

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="flex items-center text-white">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{selectedSession.viewers.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-2">{selectedSession.title}</h2>
                    <p className="text-gray-300 mb-4">{selectedSession.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={selectedSession.expert.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{selectedSession.expert.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-semibold">{selectedSession.expert.name}</p>
                          <p className="text-gray-400 text-sm">{selectedSession.expert.title}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        >
                          <Heart className="w-4 h-4 mr-1" />
                          إعجاب
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                        >
                          <Share2 className="w-4 h-4 mr-1" />
                          مشاركة
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* الدردشة المباشرة */}
            <div className="lg:col-span-1">
              <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-lg h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    الدردشة المباشرة
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-96">
                  <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                    {/* رسائل الدردشة */}
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <span className="text-cyan-400 text-sm font-semibold">أحمد محمد</span>
                        <span className="text-gray-500 text-xs mr-2">منذ دقيقتين</span>
                      </div>
                      <p className="text-gray-300 text-sm">شكراً دكتور على هذه المعلومات القيمة!</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <span className="text-purple-400 text-sm font-semibold">سارة أحمد</span>
                        <span className="text-gray-500 text-xs mr-2">منذ 3 دقائق</span>
                      </div>
                      <p className="text-gray-300 text-sm">هل يمكن توضيح كيفية نقل الأحجار الضخمة؟</p>
                    </div>

                    <div className="bg-cyan-900/30 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <span className="text-cyan-400 text-sm font-semibold">د. أحمد فخري</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs mr-2">
                          خبير
                        </Badge>
                        <span className="text-gray-500 text-xs">منذ دقيقة</span>
                      </div>
                      <p className="text-gray-300 text-sm">سؤال ممتاز! سأوضح ذلك في الجزء القادم من الجلسة</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="اكتب رسالتك..."
                      className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none text-sm"
                    />
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      إرسال
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">الجلسات المباشرة مع الخبراء</h1>
          <p className="text-gray-300">تفاعل مباشرة مع خبراء علم المصريات واطرح أسئلتك</p>
        </div>

        {/* الجلسات المباشرة الآن */}
        {liveSessions.filter((s) => s.isLive).length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
              مباشر الآن
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {liveSessions
                .filter((s) => s.isLive)
                .map((session) => (
                  <Card key={session.id} className="bg-black/40 border-red-500/30 backdrop-blur-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-red-500 text-white animate-pulse">مباشر</Badge>
                        <div className="flex items-center text-white">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{session.viewers.toLocaleString()}</span>
                        </div>
                      </div>
                      <CardTitle className="text-white">{session.title}</CardTitle>
                      <p className="text-gray-300 text-sm">{session.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={session.expert.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{session.expert.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-white font-semibold text-sm">{session.expert.name}</p>
                            <p className="text-gray-400 text-xs">{session.expert.title}</p>
                          </div>
                        </div>
                        <Badge className={getLevelColor(session.level)}>
                          {session.level === "beginner"
                            ? "مبتدئ"
                            : session.level === "intermediate"
                              ? "متوسط"
                              : "متقدم"}
                        </Badge>
                      </div>

                      <Button
                        onClick={() => joinLiveSession(session)}
                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        انضم للجلسة المباشرة
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* الجلسات القادمة */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
            الجلسات القادمة
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingSessions.map((session) => (
              <Card key={session.id} className="bg-black/40 border-cyan-500/30 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{session.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{session.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-cyan-400 font-semibold">{session.expert}</p>
                      <p className="text-gray-300 text-sm">{session.topic}</p>
                    </div>

                    <Button
                      onClick={() => registerForSession(session.id)}
                      className={`w-full ${
                        session.registered ? "bg-green-600 hover:bg-green-700" : "bg-cyan-600 hover:bg-cyan-700"
                      }`}
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      {session.registered ? "مسجل ✓" : "سجل الآن"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* الجلسات المسجلة */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">الجلسات المسجلة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveSessions
              .filter((s) => !s.isLive)
              .map((session) => (
                <Card key={session.id} className="bg-black/40 border-cyan-500/30 backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-white">{session.title}</CardTitle>
                    <p className="text-gray-300 text-sm">{session.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={session.expert.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{session.expert.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-semibold text-sm">{session.expert.name}</p>
                          <p className="text-gray-400 text-xs">{session.duration} دقيقة</p>
                        </div>
                      </div>
                      <Badge className={getLevelColor(session.level)}>
                        {session.level === "beginner" ? "مبتدئ" : session.level === "intermediate" ? "متوسط" : "متقدم"}
                      </Badge>
                    </div>

                    <Button
                      onClick={() => joinLiveSession(session)}
                      variant="outline"
                      className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      مشاهدة التسجيل
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
