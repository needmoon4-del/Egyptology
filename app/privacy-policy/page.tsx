"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Users, Globe, FileText } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              العودة للرئيسية
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">سياسة الخصوصية</h1>
          </div>
        </div>

        {/* Last Updated */}
        <Card className="mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
          <CardContent className="p-4">
            <p className="text-cyan-300 text-center">آخر تحديث: {new Date().toLocaleDateString("ar-EG")}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {/* Introduction */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Eye className="w-5 h-5 text-purple-400" />
                مقدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                نحن في تطبيق علم المصريات نلتزم بحماية خصوصيتك وبياناتك الشخصية. تشرح هذه السياسة كيفية جمعنا واستخدامنا
                وحمايتنا لمعلوماتك الشخصية وفقاً للمعايير الدولية بما في ذلك اللائحة العامة لحماية البيانات (GDPR) وقانون
                خصوصية المستهلك في كاليفورنيا (CCPA).
              </p>
              <p>باستخدام تطبيقنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة.</p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-cyan-800/30 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-cyan-400" />
                البيانات التي نجمعها
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">البيانات الشخصية:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>الاسم وعنوان البريد الإلكتروني</li>
                  <li>معلومات الحساب في Pi Network</li>
                  <li>تفضيلات التعلم والاهتمامات</li>
                  <li>سجل التفاعل مع المحتوى التعليمي</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">البيانات التقنية:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>عنوان IP ونوع المتصفح</li>
                  <li>معلومات الجهاز ونظام التشغيل</li>
                  <li>ملفات تعريف الارتباط وتقنيات التتبع</li>
                  <li>بيانات الاستخدام والتحليلات</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-green-800/30 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Lock className="w-5 h-5 text-green-400" />
                كيف نستخدم بياناتك
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تقديم وتحسين خدماتنا التعليمية</li>
                <li>تخصيص تجربة التعلم حسب اهتماماتك</li>
                <li>معالجة المدفوعات عبر Pi Network</li>
                <li>إرسال التحديثات والإشعارات المهمة</li>
                <li>تحليل الاستخدام لتحسين التطبيق</li>
                <li>ضمان الأمان ومنع الاحتيال</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-orange-800/30 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5 text-orange-400" />
                مشاركة البيانات
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p className="font-semibold text-orange-300">نحن لا نبيع بياناتك الشخصية لأطراف ثالثة.</p>
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">قد نشارك البيانات مع:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>مقدمي الخدمات التقنية (الاستضافة، التحليلات)</li>
                  <li>شبكة Pi Network لمعالجة المدفوعات</li>
                  <li>السلطات القانونية عند الضرورة</li>
                  <li>شركاء تعليميين معتمدين (بموافقتك)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-blue-400" />
                حقوقك
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">حقوقك تشمل:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>الوصول إلى بياناتك الشخصية</li>
                  <li>تصحيح البيانات غير الصحيحة</li>
                  <li>حذف بياناتك (الحق في النسيان)</li>
                  <li>تقييد معالجة البيانات</li>
                  <li>نقل البيانات إلى خدمة أخرى</li>
                  <li>الاعتراض على معالجة البيانات</li>
                  <li>سحب الموافقة في أي وقت</li>
                </ul>
              </div>
              <p className="text-blue-300">لممارسة هذه الحقوق، يرجى التواصل معنا عبر: privacy@egyptology-app.com</p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-red-800/30 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-red-400" />
                أمان البيانات
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>نستخدم تدابير أمنية متقدمة لحماية بياناتك بما في ذلك:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>التشفير المتقدم للبيانات (SSL/TLS)</li>
                <li>المصادقة متعددة العوامل</li>
                <li>مراقبة الأمان على مدار الساعة</li>
                <li>النسخ الاحتياطي المنتظم</li>
                <li>اختبارات الاختراق الدورية</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white">اتصل بنا</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية:</p>
              <p>البريد الإلكتروني: privacy@egyptology-app.com</p>
              <p>الهاتف: +20-XXX-XXXX</p>
              <p>العنوان: القاهرة، مصر</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
