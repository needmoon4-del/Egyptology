"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft, Shield, Sparkles, Globe, Facebook, Twitter, Github } from 'lucide-react'
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home page
      window.location.href = "/"
    }, 2000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home page
      window.location.href = "/"
    }, 2000)
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Egyptian+Temple+Background'), linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
        backgroundBlendMode: 'overlay, normal'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Floating Hieroglyphs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-amber-300/20 animate-pulse">𓂀</div>
        <div className="absolute top-40 right-20 text-8xl text-amber-300/20 animate-bounce">𓇳</div>
        <div className="absolute bottom-32 left-32 text-7xl text-amber-300/20 animate-pulse">𓊪𓏏𓊖</div>
        <div className="absolute bottom-20 right-10 text-5xl text-amber-300/20 animate-bounce">𓋹𓋴𓈖𓏏𓊖</div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-amber-200 mb-4">
            <ArrowLeft className="h-5 w-5" />
            العودة للرئيسية
          </Link>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 border-white/30">
            <Crown className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">مرحباً بك في علم المصريات</h1>
          <p className="text-amber-100">ادخل لاستكشاف أسرار الحضارة المصرية القديمة</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-2 border-amber-200 shadow-2xl">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="text-amber-700 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  تسجيل الدخول
                </TabsTrigger>
                <TabsTrigger value="register" className="text-amber-700 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                  إنشاء حساب
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-800 font-medium">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="pr-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-amber-800 font-medium">كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="أدخل كلمة المرور"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="pr-10 pl-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.rememberMe}
                        onCheckedChange={(checked) => setLoginData({...loginData, rememberMe: checked as boolean})}
                      />
                      <Label htmlFor="remember" className="text-sm text-amber-700">تذكرني</Label>
                    </div>
                    <Link href="#" className="text-sm text-amber-600 hover:text-amber-800">
                      نسيت كلمة المرور؟
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        جاري تسجيل الدخول...
                      </div>
                    ) : (
                      "تسجيل الدخول"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-amber-800 font-medium">الاسم الكامل</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="أدخل اسمك الكامل"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        className="pr-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-amber-800 font-medium">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="reg-email"
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="pr-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-amber-800 font-medium">رقم الهاتف</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="أدخل رقم هاتفك"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                        className="pr-10 border-2 border-amber-200 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-amber-800 font-medium">كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="reg-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="أدخل كلمة المرور"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="pr-10 pl-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-amber-800 font-medium">تأكيد كلمة المرور</Label>
                    <div className="relative">
                      <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                      <Input
                        id="confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="أعد إدخال كلمة المرور"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="pr-10 border-2 border-amber-200 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={registerData.agreeTerms}
                      onCheckedChange={(checked) => setRegisterData({...registerData, agreeTerms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm text-amber-700">
                      أوافق على <Link href="#" className="text-amber-600 hover:text-amber-800">الشروط والأحكام</Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3"
                    disabled={isLoading || !registerData.agreeTerms}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        جاري إنشاء الحساب...
                      </div>
                    ) : (
                      "إنشاء حساب جديد"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-amber-700">أو سجل الدخول باستخدام</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Button variant="outline" className="border-2 border-amber-200 hover:border-amber-400">
                  <Facebook className="h-4 w-4 text-blue-600" />
                </Button>
                <Button variant="outline" className="border-2 border-amber-200 hover:border-amber-400">
                  <Twitter className="h-4 w-4 text-blue-400" />
                </Button>
                <Button variant="outline" className="border-2 border-amber-200 hover:border-amber-400">
                  <Github className="h-4 w-4 text-gray-800" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <Card className="mt-6 bg-white/90 backdrop-blur-sm border-2 border-amber-200 shadow-xl">
          <CardContent className="p-4">
            <h3 className="text-amber-800 font-bold mb-3 text-center">ما ينتظرك داخل التطبيق</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-amber-700">ذكاء اصطناعي</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-amber-700">محتوى ثري</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-amber-700">تجربة ملكية</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
