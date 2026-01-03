"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageSquare, TrendingUp, Brain, Plus, Shield, Zap, Activity, Globe, HardDrive } from "lucide-react"
import Link from "next/link"

export default function OwnerDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 15847,
    activeUsers: 8923,
    totalChats: 45621,
    piEarnings: 12847.5,
    contentPosts: 234,
    aiModels: 8,
    systemHealth: 98.5,
    serverLoad: 45,
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "user_join", message: "مستخدم جديد انضم للتطبيق", time: "5 دقائق" },
    { id: 2, type: "ai_training", message: "تم تدريب نموذج الذكاء الاصطناعي بنجاح", time: "15 دقيقة" },
    { id: 3, type: "content_add", message: "تم إضافة منشور جديد", time: "30 دقيقة" },
    { id: 4, type: "payment", message: "تم استلام دفعة Pi Network", time: "1 ساعة" },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">لوحة تحكم المالك</h1>
          <p className="text-gray-300">إدارة شاملة لتطبيق علم المصريات</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المستخدمين</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-blue-100">+12% من الشهر الماضي</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">أرباح Pi Network</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.piEarnings.toLocaleString()} π</div>
              <p className="text-xs text-green-100">+8% من الأسبوع الماضي</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 border-0 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المحادثات النشطة</CardTitle>
              <MessageSquare className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalChats.toLocaleString()}</div>
              <p className="text-xs text-purple-100">+25% من الأمس</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-600 to-orange-700 border-0 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">نماذج الذكاء الاصطناعي</CardTitle>
              <Brain className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.aiModels}</div>
              <p className="text-xs text-orange-100">جميعها تعمل بكفاءة</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800 border-slate-700">
            <TabsTrigger value="overview" className="text-white">
              نظرة عامة
            </TabsTrigger>
            <TabsTrigger value="content" className="text-white">
              إدارة المحتوى
            </TabsTrigger>
            <TabsTrigger value="ai" className="text-white">
              الذكاء الاصطناعي
            </TabsTrigger>
            <TabsTrigger value="users" className="text-white">
              المستخدمين
            </TabsTrigger>
            <TabsTrigger value="system" className="text-white">
              النظام
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Health */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    صحة النظام
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>الأداء العام</span>
                      <span>{stats.systemHealth}%</span>
                    </div>
                    <Progress value={stats.systemHealth} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>حمولة الخادم</span>
                      <span>{stats.serverLoad}%</span>
                    </div>
                    <Progress value={stats.serverLoad} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      آمن
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      <Zap className="h-3 w-3 mr-1" />
                      سريع
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">النشاط الأخير</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                        <div>
                          <p className="text-white text-sm">{activity.message}</p>
                          <p className="text-gray-400 text-xs">منذ {activity.time}</p>
                        </div>
                        <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">إضافة محتوى جديد</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/content-manager">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      إدارة المحتوى
                    </Button>
                  </Link>
                  <div className="text-center text-gray-400 text-sm">إضافة منشورات، صور، فيديوهات</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">إحصائيات المحتوى</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">المنشورات</span>
                      <span className="text-white font-bold">{stats.contentPosts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">الصور</span>
                      <span className="text-white font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">الفيديوهات</span>
                      <span className="text-white font-bold">89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">المحتوى الشائع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-2 bg-slate-700 rounded text-sm text-white">أسرار الأهرامات المصرية</div>
                    <div className="p-2 bg-slate-700 rounded text-sm text-white">رحلة في عالم الهيروغليفية</div>
                    <div className="p-2 bg-slate-700 rounded text-sm text-white">الآلهة المصرية القديمة</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">تدريب الذكاء الاصطناعي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/ai-trainer">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Brain className="h-4 w-4 mr-2" />
                      مدرب الذكاء الاصطناعي
                    </Button>
                  </Link>
                  <div className="text-center text-gray-400 text-sm">تدريب وتحسين النماذج الذكية</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">أداء النماذج</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>نموذج المحادثة</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>نموذج الترجمة</span>
                        <span>88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>نموذج التحليل</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">إحصائيات المستخدمين</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stats.activeUsers.toLocaleString()}</div>
                    <div className="text-gray-400">مستخدمين نشطين</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-gray-400">مستخدمين جدد هذا الشهر</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">78%</div>
                    <div className="text-gray-400">معدل الاحتفاظ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <HardDrive className="h-5 w-5" />
                    موارد النظام
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>استخدام المعالج</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>استخدام الذاكرة</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>مساحة التخزين</span>
                      <span>34%</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    حالة الخدمات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">قاعدة البيانات</span>
                      <Badge className="bg-green-600 text-white">متصلة</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Pi Network API</span>
                      <Badge className="bg-green-600 text-white">نشطة</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">خدمة الذكاء الاصطناعي</span>
                      <Badge className="bg-green-600 text-white">تعمل</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">خدمة الملفات</span>
                      <Badge className="bg-green-600 text-white">متاحة</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
