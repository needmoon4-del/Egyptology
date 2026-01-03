"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Coins,
  Wallet,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star,
  Gift,
  Crown,
  Clock,
  Award,
  Target,
  BarChart3,
  Download,
  RefreshCw,
  Eye,
  Lock,
  Smartphone,
  QrCode,
  Send,
  History,
  Settings,
  HelpCircle,
  BookOpen,
  Video,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function PiPaymentPage() {
  const [activeTab, setActiveTab] = useState("wallet")
  const [piBalance, setPiBalance] = useState(1247.89)
  const [isConnected, setIsConnected] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [transactionAmount, setTransactionAmount] = useState("")

  const subscriptionPlans = [
    {
      id: "basic",
      name: "الخطة الأساسية",
      price: 15,
      piPrice: 9.5,
      duration: "شهرياً",
      features: [
        "الوصول لجميع المحتوى التعليمي",
        "قاموس الهيروغليفية الكامل",
        "5 فيديوهات فرعونية شهرياً",
        "الدعم الفني الأساسي",
        "تحديثات المحتوى",
      ],
      popular: false,
      discount: 20,
    },
    {
      id: "premium",
      name: "الخطة المميزة",
      price: 35,
      piPrice: 22,
      duration: "شهرياً",
      features: [
        "جميع ميزات الخطة الأساسية",
        "فيديوهات فرعونية غير محدودة",
        "جودة 8K للفيديوهات",
        "الواقع المعزز والافتراضي",
        "المساعد الذكي المتقدم",
        "الألعاب التعليمية الحصرية",
        "الدعم الفني المتقدم 24/7",
        "محتوى حصري أسبوعي",
      ],
      popular: true,
      discount: 30,
    },
    {
      id: "ultimate",
      name: "الخطة النهائية",
      price: 65,
      piPrice: 40,
      duration: "شهرياً",
      features: [
        "جميع ميزات الخطة المميزة",
        "إنشاء محتوى مخصص بالذكاء الاصطناعي",
        "جلسات تعليمية مباشرة مع الخبراء",
        "تحليلات تقدم التعلم المتقدمة",
        "شهادات معتمدة في علم المصريات",
        "الوصول المبكر للميزات الجديدة",
        "مجتمع VIP حصري",
        "استشارات شخصية مع علماء الآثار",
      ],
      popular: false,
      discount: 40,
    },
  ]

  const piNetworkStats = {
    totalUsers: "47M+",
    dailyTransactions: "2.3M",
    networkValue: "$12.4B",
    miningRate: "0.25 π/hour",
    marketCap: "$8.9B",
    circulatingSupply: "68B π",
  }

  const recentTransactions = [
    {
      id: 1,
      type: "subscription",
      description: "اشتراك الخطة المميزة",
      amount: -22,
      status: "completed",
      date: "2024-01-20",
      time: "14:30",
    },
    {
      id: 2,
      type: "reward",
      description: "مكافأة إكمال الدورة التعليمية",
      amount: +5.5,
      status: "completed",
      date: "2024-01-19",
      time: "09:15",
    },
    {
      id: 3,
      type: "purchase",
      description: "شراء تمثال توت عنخ آمون",
      amount: -28,
      status: "completed",
      date: "2024-01-18",
      time: "16:45",
    },
    {
      id: 4,
      type: "mining",
      description: "مكافآت التعدين اليومية",
      amount: +12.3,
      status: "completed",
      date: "2024-01-17",
      time: "00:00",
    },
    {
      id: 5,
      type: "referral",
      description: "مكافأة دعوة صديق",
      amount: +15,
      status: "pending",
      date: "2024-01-16",
      time: "11:20",
    },
  ]

  const connectPiWallet = () => {
    setIsConnected(true)
    // Simulate Pi Network connection
    setTimeout(() => {
      setPiBalance(1247.89)
    }, 2000)
  }

  const subscribeToPlan = (planId: string) => {
    const plan = subscriptionPlans.find((p) => p.id === planId)
    if (plan && piBalance >= plan.piPrice) {
      setPiBalance((prev) => prev - plan.piPrice)
      // Add success notification logic here
    }
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "subscription":
        return <Crown className="h-4 w-4 text-purple-600" />
      case "reward":
        return <Gift className="h-4 w-4 text-green-600" />
      case "purchase":
        return <Coins className="h-4 w-4 text-blue-600" />
      case "mining":
        return <Zap className="h-4 w-4 text-yellow-600" />
      case "referral":
        return <Users className="h-4 w-4 text-orange-600" />
      default:
        return <Coins className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/images/pi-bg.png'), linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay, normal",
      }}
    >
      {/* Pi Network Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/blockchain-pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header */}
      <header
        className="relative text-white p-4 shadow-2xl border-b-4 border-purple-400"
        style={{
          backgroundImage: `linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)`,
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-xl border-3 border-purple-300">
                <span className="text-2xl font-bold">π</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold drop-shadow-lg">π محفظة Pi Network المتقدمة</h1>
              <p className="text-purple-200 text-sm">ادفع واربح بعملة Pi الرقمية في عالم المصريات</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Badge className={`${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"} text-white`}>
              {isConnected ? "🟢 متصل" : "🔴 غير متصل"}
            </Badge>
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              π {piBalance.toFixed(2)}
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6 relative z-10">
        {/* Pi Network Stats */}
        <Card className="bg-gradient-to-r from-purple-100/95 to-pink-100/95 border-2 border-purple-400 shadow-2xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Globe className="h-6 w-6" />
              إحصائيات شبكة Pi Network العالمية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-800">{piNetworkStats.totalUsers}</div>
                <div className="text-sm text-purple-700">إجمالي المستخدمين</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-green-800">{piNetworkStats.dailyTransactions}</div>
                <div className="text-sm text-green-700">المعاملات اليومية</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-800">{piNetworkStats.networkValue}</div>
                <div className="text-sm text-blue-700">قيمة الشبكة</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-orange-800">{piNetworkStats.miningRate}</div>
                <div className="text-sm text-orange-700">معدل التعدين</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-indigo-800">{piNetworkStats.marketCap}</div>
                <div className="text-sm text-indigo-700">القيمة السوقية</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-teal-800">{piNetworkStats.circulatingSupply}</div>
                <div className="text-sm text-teal-700">المعروض المتداول</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6 bg-gradient-to-r from-purple-900/90 to-pink-800/90 backdrop-blur-md border-2 border-purple-400/50 shadow-xl">
            <TabsTrigger
              value="wallet"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <Wallet className="h-4 w-4 mr-1" />
              المحفظة
            </TabsTrigger>
            <TabsTrigger
              value="subscriptions"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <Crown className="h-4 w-4 mr-1" />
              الاشتراكات
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <History className="h-4 w-4 mr-1" />
              المعاملات
            </TabsTrigger>
            <TabsTrigger
              value="mining"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <Zap className="h-4 w-4 mr-1" />
              التعدين
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="text-purple-100 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs"
            >
              <Gift className="h-4 w-4 mr-1" />
              المكافآت
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wallet" className="space-y-6">
            {/* Wallet Connection */}
            {!isConnected ? (
              <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-purple-900 text-center flex items-center justify-center gap-2">
                    <Wallet className="h-6 w-6" />
                    ربط محفظة Pi Network
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-6xl mb-4">π</div>
                  <h3 className="text-xl font-bold text-purple-900">اربط محفظتك لبدء الاستخدام</h3>
                  <p className="text-purple-700 mb-6">
                    اربط محفظة Pi Network الخاصة بك للاستفادة من جميع الميزات والخدمات المدفوعة
                  </p>
                  <Button
                    onClick={connectPiWallet}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 shadow-lg"
                  >
                    <Wallet className="h-5 w-5 mr-2" />
                    ربط محفظة Pi Network
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-bold text-purple-900 mb-1">آمن ومحمي</h4>
                      <p className="text-sm text-purple-700">تشفير متقدم لحماية أموالك</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-bold text-purple-900 mb-1">سريع وفوري</h4>
                      <p className="text-sm text-purple-700">معاملات فورية بدون رسوم</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-bold text-purple-900 mb-1">عالمي ومتاح</h4>
                      <p className="text-sm text-purple-700">استخدم Pi في أي مكان بالعالم</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Wallet Balance */}
                <Card className="bg-gradient-to-r from-green-100/95 to-emerald-100/95 border-2 border-green-400 shadow-xl backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-green-900 flex items-center gap-2">
                      <Wallet className="h-6 w-6" />
                      رصيد المحفظة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-6xl font-bold text-green-800 mb-2">π {piBalance.toFixed(2)}</div>
                      <div className="text-lg text-green-700">≈ ${(piBalance * 0.18).toFixed(2)} USD</div>
                      <Badge className="bg-green-500 text-white mt-2">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12.5% هذا الشهر
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 flex-col h-16">
                        <Send className="h-5 w-5 mb-1" />
                        <span className="text-xs">إرسال</span>
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 flex-col h-16">
                        <Download className="h-5 w-5 mb-1" />
                        <span className="text-xs">استقبال</span>
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 flex-col h-16">
                        <RefreshCw className="h-5 w-5 mb-1" />
                        <span className="text-xs">تحديث</span>
                      </Button>
                      <Button className="bg-orange-600 hover:bg-orange-700 flex-col h-16">
                        <QrCode className="h-5 w-5 mb-1" />
                        <span className="text-xs">QR كود</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-purple-900 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      إجراءات سريعة
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Input
                          placeholder="أدخل مبلغ Pi للإرسال"
                          value={transactionAmount}
                          onChange={(e) => setTransactionAmount(e.target.value)}
                          type="number"
                          className="flex-1"
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Send className="h-4 w-4 mr-2" />
                          إرسال
                        </Button>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setTransactionAmount("10")}
                          className="border-purple-600 text-purple-700 hover:bg-purple-50"
                        >
                          π 10
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setTransactionAmount("50")}
                          className="border-purple-600 text-purple-700 hover:bg-purple-50"
                        >
                          π 50
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setTransactionAmount("100")}
                          className="border-purple-600 text-purple-700 hover:bg-purple-50"
                        >
                          π 100
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            {/* Subscription Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl scale-105"
                      : "border border-gray-200 bg-white/95 hover:shadow-xl hover:scale-102"
                  } ${selectedPlan === plan.id ? "ring-2 ring-purple-600" : ""}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        الأكثر شعبية
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className={`text-xl ${plan.popular ? "text-purple-900" : "text-gray-900"}`}>
                      {plan.name}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-gray-800">${plan.price}</span>
                        <span className="text-gray-600">/{plan.duration}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold text-purple-800">π {plan.piPrice}</span>
                        <Badge className="bg-green-100 text-green-800 text-xs">وفر {plan.discount}%</Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => subscribeToPlan(plan.id)}
                      disabled={!isConnected || piBalance < plan.piPrice}
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      {!isConnected ? (
                        "اربط المحفظة أولاً"
                      ) : piBalance < plan.piPrice ? (
                        "رصيد غير كافي"
                      ) : (
                        <>
                          <Crown className="h-4 w-4 mr-2" />
                          اشترك بـ π {plan.piPrice}
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Current Subscription */}
            <Card className="bg-gradient-to-r from-blue-100/95 to-indigo-100/95 border-2 border-blue-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  اشتراكك الحالي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">الخطة المميزة</h3>
                    <p className="text-blue-700">نشط حتى 20 فبراير 2024</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-green-100 text-green-800">نشط</Badge>
                      <Badge className="bg-blue-100 text-blue-800">تجديد تلقائي</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-800">π 22</div>
                    <div className="text-sm text-blue-700">شهرياً</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-blue-700 mb-1">
                    <span>فترة الاشتراك</span>
                    <span>18 يوم متبقي</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    إدارة الاشتراك
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    ترقية الخطة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            {/* Transaction History */}
            <Card className="bg-white/95 backdrop-blur border-2 border-purple-400 shadow-xl">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <History className="h-6 w-6" />
                  سجل المعاملات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getTransactionIcon(transaction.type)}
                        <div>
                          <div className="font-medium text-gray-900">{transaction.description}</div>
                          <div className="text-sm text-gray-600">
                            {transaction.date} في {transaction.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                          {transaction.amount > 0 ? "+" : ""}π {Math.abs(transaction.amount)}
                        </div>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status === "completed" && "مكتمل"}
                          {transaction.status === "pending" && "قيد الانتظار"}
                          {transaction.status === "failed" && "فشل"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-700 hover:bg-purple-50 bg-transparent"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    عرض جميع المعاملات
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Stats */}
            <Card className="bg-gradient-to-r from-indigo-100/95 to-purple-100/95 border-2 border-indigo-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-indigo-900 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  إحصائيات المعاملات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-800">47</div>
                    <div className="text-sm text-indigo-700">إجمالي المعاملات</div>
                  </div>
                  <div className="text-center bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-800">+156.7π</div>
                    <div className="text-sm text-green-700">إجمالي المكاسب</div>
                  </div>
                  <div className="text-center bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-800">-89.2π</div>
                    <div className="text-sm text-red-700">إجمالي المصروفات</div>
                  </div>
                  <div className="text-center bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-800">+67.5π</div>
                    <div className="text-sm text-purple-700">صافي الربح</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mining" className="space-y-6">
            {/* Mining Dashboard */}
            <Card className="bg-gradient-to-r from-yellow-100/95 to-orange-100/95 border-2 border-yellow-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-yellow-900 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  لوحة تحكم التعدين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/80 rounded-lg p-6">
                    <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-yellow-800 mb-1">0.25π</div>
                    <div className="text-sm text-yellow-700">معدل التعدين/ساعة</div>
                    <Badge className="bg-green-100 text-green-800 mt-2">نشط</Badge>
                  </div>

                  <div className="text-center bg-white/80 rounded-lg p-6">
                    <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-800 mb-1">23:45</div>
                    <div className="text-sm text-blue-700">الوقت المتبقي</div>
                    <Badge className="bg-blue-100 text-blue-800 mt-2">جلسة نشطة</Badge>
                  </div>

                  <div className="text-center bg-white/80 rounded-lg p-6">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-800 mb-1">6.0π</div>
                    <div className="text-sm text-purple-700">مكاسب اليوم</div>
                    <Badge className="bg-purple-100 text-purple-800 mt-2">+20%</Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm text-yellow-700 mb-2">
                    <span>تقدم جلسة التعدين</span>
                    <span>75% مكتمل</span>
                  </div>
                  <Progress value={75} className="w-full mb-4" />

                  <div className="text-center">
                    <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                      <Zap className="h-4 w-4 mr-2" />
                      بدء جلسة تعدين جديدة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mining Statistics */}
            <Card className="bg-white/95 backdrop-blur border-2 border-yellow-400 shadow-xl">
              <CardHeader>
                <CardTitle className="text-yellow-900 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  إحصائيات التعدين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-800">247π</div>
                    <div className="text-sm text-yellow-700">إجمالي المُعدن</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-800">156</div>
                    <div className="text-sm text-green-700">أيام التعدين</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-800">98.5%</div>
                    <div className="text-sm text-blue-700">معدل النجاح</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-800">12</div>
                    <div className="text-sm text-purple-700">الأصدقاء المدعوون</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            {/* Rewards Program */}
            <Card className="bg-gradient-to-r from-green-100/95 to-emerald-100/95 border-2 border-green-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Gift className="h-6 w-6" />
                  برنامج المكافآت والإنجازات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-green-900 mb-3">المكافآت المتاحة:</h3>

                    <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-900">إكمال دورة تعليمية</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">+5π</Badge>
                      </div>
                      <Progress value={80} className="w-full" />
                      <div className="text-xs text-green-700 mt-1">80% مكتمل</div>
                    </div>

                    <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-green-900">دعوة 5 أصدقاء</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">+25π</Badge>
                      </div>
                      <Progress value={60} className="w-full" />
                      <div className="text-xs text-green-700 mt-1">3/5 أصدقاء</div>
                    </div>

                    <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Video className="h-5 w-5 text-purple-600" />
                          <span className="font-medium text-green-900">إنشاء 10 فيديوهات</span>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">+15π</Badge>
                      </div>
                      <Progress value={40} className="w-full" />
                      <div className="text-xs text-green-700 mt-1">4/10 فيديوهات</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-green-900 mb-3">الإنجازات المحققة:</h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3 border border-green-200">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-green-900">مستكشف مبتدئ</div>
                          <div className="text-sm text-green-700">زيارة 10 أماكن أثرية</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">+10π</Badge>
                      </div>

                      <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3 border border-green-200">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-green-900">عالم الهيروغليفية</div>
                          <div className="text-sm text-green-700">تعلم 100 رمز هيروغليفي</div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">+20π</Badge>
                      </div>

                      <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3 border border-green-200">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Crown className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-green-900">ملك المحتوى</div>
                          <div className="text-sm text-green-700">إنشاء أول فيديو فرعوني</div>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">+30π</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="bg-white/80 rounded-lg p-4 border border-green-200 inline-block">
                    <div className="text-2xl font-bold text-green-800 mb-1">π 127.5</div>
                    <div className="text-sm text-green-700">إجمالي المكافآت المحققة</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Program */}
            <Card className="bg-gradient-to-r from-orange-100/95 to-red-100/95 border-2 border-orange-400 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  برنامج الإحالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-2">ادع أصدقاءك واربح π</h3>
                  <p className="text-orange-700 mb-4">احصل على 15π لكل صديق ينضم عبر رابط الدعوة الخاص بك</p>

                  <div className="bg-white/80 rounded-lg p-4 border border-orange-200 mb-4">
                    <div className="text-sm text-orange-700 mb-2">رابط الدعوة الخاص بك:</div>
                    <div className="flex items-center gap-2">
                      <Input
                        value="https://egyptology.app/ref/user123"
                        readOnly
                        className="flex-1 text-center font-mono text-sm"
                      />
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        نسخ
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-800">12</div>
                      <div className="text-sm text-orange-700">أصدقاء مدعوون</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-800">π 180</div>
                      <div className="text-sm text-green-700">مكافآت الإحالة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800">8</div>
                      <div className="text-sm text-blue-700">أصدقاء نشطون</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Share2 className="h-4 w-4 mr-2" />
                    مشاركة الرابط
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    <QrCode className="h-4 w-4 mr-2" />
                    QR كود
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Notice */}
        <Card className="bg-gradient-to-r from-red-100/95 to-pink-100/95 border-2 border-red-400 shadow-xl backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-900 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              تنبيه أمني مهم
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-red-800">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>لا تشارك مفاتيحك الخاصة أو كلمات المرور مع أي شخص</span>
              </div>
              <div className="flex items-start gap-2">
                <Lock className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>تأكد من أنك تستخدم الموقع الرسمي لـ Pi Network</span>
              </div>
              <div className="flex items-start gap-2">
                <Smartphone className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>فعل المصادقة الثنائية لحماية إضافية</span>
              </div>
              <div className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>راجع جميع المعاملات بعناية قبل التأكيد</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <HelpCircle className="h-4 w-4 mr-2" />
                مركز المساعدة
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-red-600 text-red-700 hover:bg-red-50 bg-transparent"
              >
                <Shield className="h-4 w-4 mr-2" />
                إعدادات الأمان
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
