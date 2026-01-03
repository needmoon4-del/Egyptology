"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Heart,
  Share2,
  Plus,
  Minus,
  ShoppingCart,
  Truck,
  Zap,
  Shield,
  Cpu,
  Sparkles,
  Eye,
  Scan,
  Wallet,
  Globe,
  Brain,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState<any[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [piWalletConnected, setPiWalletConnected] = useState(false)
  const [piBalance, setPiBalance] = useState(1247.89)
  const [isScanning, setIsScanning] = useState(false)
  const [hologramMode, setHologramMode] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPiBalance((prev) => prev + Math.random() * 0.1)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const categories = [
    { id: "all", name: "جميع المنتجات", count: 156, icon: "🌟" },
    { id: "nft", name: "NFT فرعونية", count: 45, icon: "🎨" },
    { id: "ar", name: "واقع معزز", count: 28, icon: "🥽" },
    { id: "hologram", name: "هولوجرام", count: 18, icon: "✨" },
    { id: "ai", name: "ذكاء اصطناعي", count: 32, icon: "🤖" },
    { id: "quantum", name: "كمي", count: 15, icon: "⚛️" },
    { id: "digital", name: "رقمي", count: 38, icon: "💎" },
  ]

  const products = [
    {
      id: 1,
      name: "NFT الهرم الكمي التفاعلي",
      description: "هرم رقمي ثلاثي الأبعاد مع تقنية الواقع المعزز والذكاء الاصطناعي",
      piPrice: 25.5,
      image: "/placeholder.svg?height=300&width=300&text=NFT+الهرم+الكمي",
      category: "nft",
      rating: 4.9,
      reviews: 234,
      sales: 456,
      inStock: true,
      features: ["واقع معزز", "ذكاء اصطناعي", "تفاعل صوتي", "هولوجرام"],
      rarity: "أسطوري",
      blockchain: "Pi Network",
      tags: ["NFT", "تفاعلي", "كمي", "مستقبلي"],
    },
    {
      id: 2,
      name: "مساعد توت عنخ آمون الذكي",
      description: "مساعد ذكي ثلاثي الأبعاد يحاكي شخصية الملك الذهبي مع تقنية الهولوجرام",
      piPrice: 45.8,
      image: "/placeholder.svg?height=300&width=300&text=مساعد+توت+عنخ+آمون",
      category: "ai",
      rating: 4.8,
      reviews: 189,
      sales: 267,
      inStock: true,
      features: ["هولوجرام", "ذكاء اصطناعي", "تعلم آلي", "واقع افتراضي"],
      rarity: "نادر جداً",
      blockchain: "Pi Network",
      tags: ["AI", "هولوجرام", "تفاعلي", "تعليمي"],
    },
    {
      id: 3,
      name: "عدسات الواقع المعزز الهيروغليفية",
      description: "عدسات ذكية تترجم الهيروغليفية فوراً وتعرض معلومات تفاعلية",
      piPrice: 89.2,
      image: "/placeholder.svg?height=300&width=300&text=عدسات+الواقع+المعزز",
      category: "ar",
      rating: 4.7,
      reviews: 156,
      sales: 123,
      inStock: true,
      features: ["ترجمة فورية", "واقع معزز", "ذكاء اصطناعي", "تتبع العين"],
      rarity: "نادر",
      blockchain: "Pi Network",
      tags: ["AR", "ترجمة", "ذكي", "مستقبلي"],
    },
    {
      id: 4,
      name: "خاتم عين حورس الكمي",
      description: "خاتم ذكي مع تقنية الحوسبة الكمية وحماية البيانات المتقدمة",
      piPrice: 67.3,
      image: "/placeholder.svg?height=300&width=300&text=خاتم+عين+حورس",
      category: "quantum",
      rating: 4.9,
      reviews: 89,
      sales: 234,
      inStock: true,
      features: ["حوسبة كمية", "حماية البيانات", "مستشعرات حيوية", "اتصال لاسلكي"],
      rarity: "أسطوري",
      blockchain: "Pi Network",
      tags: ["كمي", "أمان", "ذكي", "حيوي"],
    },
    {
      id: 5,
      name: "كتاب الموتى الرقمي التفاعلي",
      description: "نسخة رقمية تفاعلية من كتاب الموتى مع الواقع الافتراضي والذكاء الاصطناعي",
      piPrice: 34.7,
      image: "/placeholder.svg?height=300&width=300&text=كتاب+الموتى+الرقمي",
      category: "digital",
      rating: 4.8,
      reviews: 267,
      sales: 345,
      inStock: true,
      features: ["واقع افتراضي", "تفاعل صوتي", "ترجمة ذكية", "محاكاة ثلاثية"],
      rarity: "نادر",
      blockchain: "Pi Network",
      tags: ["رقمي", "تفاعلي", "VR", "تعليمي"],
    },
    {
      id: 6,
      name: "هولوجرام أبو الهول الناطق",
      description: "عرض هولوجرافي ثلاثي الأبعاد لأبو الهول مع ذكاء اصطناعي متقدم",
      piPrice: 156.4,
      image: "/placeholder.svg?height=300&width=300&text=هولوجرام+أبو+الهول",
      category: "hologram",
      rating: 5.0,
      reviews: 78,
      sales: 89,
      inStock: true,
      features: ["هولوجرام 4K", "ذكاء اصطناعي", "تفاعل صوتي", "إضاءة ذكية"],
      rarity: "أسطوري نادر",
      blockchain: "Pi Network",
      tags: ["هولوجرام", "AI", "4K", "تفاعلي"],
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.includes(searchTerm) || product.description.includes(searchTerm)
    const matchesCategory = activeTab === "all" || product.category === activeTab
    return matchesSearch && matchesCategory
  })

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }])
  }

  const getTotalPiPrice = () => {
    return cart.reduce((total, item) => total + item.piPrice * item.quantity, 0)
  }

  const connectPiWallet = async () => {
    setIsScanning(true)
    // محاكاة ربط المحفظة
    setTimeout(() => {
      setPiWalletConnected(true)
      setIsScanning(false)
    }, 2000)
  }

  const scanProduct = (product: any) => {
    setIsScanning(true)
    setTimeout(() => {
      setSelectedProduct(product)
      setIsScanning(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Matrix+Background')] opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />

      {/* شبكة مستقبلية */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Header مستقبلي */}
      <header className="relative bg-gradient-to-r from-slate-800/90 via-purple-800/90 to-indigo-800/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl">
        <div className="flex items-center gap-4 p-4 relative z-10">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>

          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                🏺 متجر المستقبل الفرعوني π
              </h1>
              <p className="text-cyan-300 text-sm">تسوق بتقنيات المستقبل • Pi Network حصرياً</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* محفظة Pi */}
            <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur border border-purple-500/30">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">π</div>
                  <div>
                    <div className="text-sm font-bold text-purple-300">π {piBalance.toFixed(2)}</div>
                    <div className="text-xs text-purple-400">Pi Balance</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-400 relative border border-cyan-500/30 hover:bg-cyan-500/20"
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs animate-bounce">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6 relative z-10">
        <Card className="bg-gradient-to-r from-purple-900/80 via-pink-900/80 to-indigo-900/80 backdrop-blur-xl border border-purple-500/30 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="text-3xl">π</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    العملة الوحيدة: Pi Network
                  </h3>
                  <p className="text-purple-300">تسوق بأمان مع تقنية البلوك تشين المتقدمة</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-400">محمي بالتشفير الكمي</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                {!piWalletConnected ? (
                  <Button
                    onClick={connectPiWallet}
                    disabled={isScanning}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border border-purple-500/30"
                  >
                    {isScanning ? (
                      <>
                        <Scan className="h-4 w-4 mr-2 animate-spin" />
                        جاري المسح...
                      </>
                    ) : (
                      <>
                        <Wallet className="h-4 w-4 mr-2" />
                        ربط محفظة Pi
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-green-400">
                    <Shield className="h-5 w-5" />
                    <span className="font-bold">محفظة متصلة</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30">
          <CardContent className="p-4">
            <div className="relative">
              <Brain className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400 animate-pulse" />
              <Input
                placeholder="ابحث بالذكاء الاصطناعي... (جرب: 'هولوجرام ذكي')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 bg-slate-900/50 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/70 focus:border-cyan-400"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                <span className="text-xs text-purple-400">AI مدعوم</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-6 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-cyan-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs flex flex-col items-center gap-1"
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card className="bg-gradient-to-r from-slate-800/80 via-purple-800/80 to-indigo-800/80 backdrop-blur-xl border border-cyan-500/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                    <div className="text-3xl font-bold text-cyan-400">156</div>
                    <div className="text-sm text-cyan-300">منتج مستقبلي</div>
                    <Cpu className="h-6 w-6 mx-auto mt-2 text-cyan-400 animate-pulse" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                    <div className="text-3xl font-bold text-purple-400">4.9</div>
                    <div className="text-sm text-purple-300">تقييم AI</div>
                    <Brain className="h-6 w-6 mx-auto mt-2 text-purple-400 animate-pulse" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400">2.5K</div>
                    <div className="text-sm text-green-300">مبيعات كمية</div>
                    <Zap className="h-6 w-6 mx-auto mt-2 text-green-400 animate-pulse" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg border border-pink-500/30">
                    <div className="text-3xl font-bold text-pink-400">π</div>
                    <div className="text-sm text-pink-300">Pi حصرياً</div>
                    <Globe className="h-6 w-6 mx-auto mt-2 text-pink-400 animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="bg-gradient-to-br from-slate-800/80 via-purple-800/50 to-indigo-800/80 backdrop-blur-xl border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <CardContent className="p-0">
                    <div className="relative group overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />

                      {/* تأثير هولوجرافي */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => scanProduct(product)}
                            className="bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-600 hover:to-blue-600 text-white backdrop-blur border border-cyan-400/30"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            مسح AR
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600 hover:to-pink-600 text-white backdrop-blur border border-purple-400/30"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-green-500/80 to-emerald-500/80 hover:from-green-600 hover:to-emerald-600 text-white backdrop-blur border border-green-400/30"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* شارات الندرة */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <Badge
                          className={`${
                            product.rarity === "أسطوري نادر"
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                              : product.rarity === "أسطوري"
                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                : product.rarity === "نادر جداً"
                                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                  : "bg-gradient-to-r from-green-500 to-emerald-500"
                          } text-white border-0 animate-pulse`}
                        >
                          {product.rarity}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                          {product.blockchain}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-cyan-100 mb-1">{product.name}</h3>
                        <p className="text-sm text-cyan-300/80 line-clamp-2">{product.description}</p>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-yellow-400">{product.rating}</span>
                        </div>
                        <span className="text-cyan-400">({product.reviews} تقييم)</span>
                        <span className="text-green-400">• {product.sales} مبيعات</span>
                      </div>

                      {/* ميزات المنتج */}
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge
                            key={index}
                            className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            π {product.piPrice}
                          </div>
                          <div className="text-xs text-purple-400">Pi Network حصرياً</div>
                        </div>
                        <Button
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border border-purple-500/30"
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          إضافة للسلة
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {cart.length > 0 && (
          <Card className="bg-gradient-to-br from-slate-800/80 via-purple-800/50 to-indigo-800/80 backdrop-blur-xl border border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-cyan-100 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                سلة التسوق المستقبلية ({cart.length} منتج)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-cyan-500/20"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-cyan-100">{item.name}</h4>
                    <div className="text-sm text-purple-400">π {item.piPrice}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 bg-transparent"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-bold text-cyan-100">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 bg-transparent"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="border-t border-cyan-500/30 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-cyan-100">الإجمالي:</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      π {getTotalPiPrice().toFixed(2)}
                    </div>
                    <div className="text-sm text-purple-400">Pi Network حصرياً</div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border border-purple-500/30 text-lg py-6"
                  disabled={!piWalletConnected}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl">π</div>
                    <span>دفع بـ Pi Network</span>
                    <Shield className="h-5 w-5" />
                  </div>
                </Button>

                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-cyan-400">
                  <Truck className="h-4 w-4" />
                  <span>شحن فوري عبر التقنيات الكمية</span>
                  <Zap className="h-4 w-4 animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
