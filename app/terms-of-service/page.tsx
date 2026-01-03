"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Scale, Coins } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
            <Scale className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">شروط الخدمة</h1>
          </div>
        </div>

        {/* Last Updated */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
          <CardContent className="p-4">
            <p className="text-blue-300 text-center">آخر تحديث: {new Date().toLocaleDateString("ar-EG")}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {/* Acceptance */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-400" />
                قبول الشروط
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                مرحباً بك في تطبيق علم المصريات. باستخدام تطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت
                لا توافق على أي من هذه الشروط، يرجى عدم استخدام التطبيق.
              </p>
              <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية.</p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-cyan-800/30 border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-cyan-400" />
                وصف الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>تطبيق علم المصريات هو منصة تعليمية تفاعلية تقدم:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>محتوى تعليمي عن الحضارة المصرية القديمة</li>
                <li>قاموس هيروغليفي تفاعلي</li>
                <li>جولات افتراضية للمواقع الأثرية</li>
                <li>مساعد ذكي متخصص في علم المصريات</li>
                <li>متجر رقمي يقبل عملة Pi Network</li>
                <li>مجتمع تفاعلي للمهتمين بالتاريخ المصري</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-orange-800/30 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                مسؤوليات المستخدم
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">يجب عليك:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>تقديم معلومات صحيحة ومحدثة</li>
                  <li>الحفاظ على سرية بيانات حسابك</li>
                  <li>استخدام التطبيق للأغراض التعليمية المشروعة</li>
                  <li>احترام حقوق الملكية الفكرية</li>
                  <li>عدم نشر محتوى مسيء أو غير قانوني</li>
                  <li>الامتثال للقوانين المحلية والدولية</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pi Network Integration */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-yellow-800/30 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Coins className="w-5 h-5 text-yellow-400" />
                تكامل Pi Network
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>تطبيقنا متكامل مع شبكة Pi Network لمعالجة المدفوعات:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>جميع المعاملات تتم بعملة Pi حصرياً</li>
                <li>يجب أن يكون لديك حساب Pi Network صالح</li>
                <li>المعاملات غير قابلة للإلغاء بعد التأكيد</li>
                <li>نحن لسنا مسؤولين عن تقلبات قيمة Pi</li>
                <li>رسوم الشبكة قد تطبق حسب سياسات Pi Network</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Uses */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-red-800/30 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <XCircle className="w-5 h-5 text-red-400" />
                الاستخدامات المحظورة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>يُحظر استخدام التطبيق في:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>أي أنشطة غير قانونية أو احتيالية</li>
                <li>انتهاك حقوق الآخرين أو خصوصيتهم</li>
                <li>نشر محتوى مسيء أو تمييزي</li>
                <li>محاولة اختراق أو تعطيل النظام</li>
                <li>استخدام برامج آلية أو روبوتات</li>
                <li>إعادة بيع أو توزيع المحتوى دون إذن</li>
                <li>انتحال الشخصية أو التضليل</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-purple-400" />
                الملكية الفكرية
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>جميع المحتويات في التطبيق محمية بحقوق الطبع والنشر:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>النصوص والصور والفيديوهات ملك لنا أو لشركائنا</li>
                <li>يُسمح بالاستخدام الشخصي والتعليمي فقط</li>
                <li>يُحظر النسخ أو التوزيع التجاري</li>
                <li>المحتوى المُنشأ بواسطة المستخدمين يخضع لشروط منفصلة</li>
                <li>نحترم حقوق الملكية الفكرية للآخرين</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/30 border-gray-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <AlertTriangle className="w-5 h-5 text-gray-400" />
                إخلاء المسؤولية
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>التطبيق يُقدم "كما هو" دون ضمانات:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>لا نضمن دقة جميع المعلومات التاريخية</li>
                <li>قد تحدث انقطاعات في الخدمة للصيانة</li>
                <li>لسنا مسؤولين عن خسائر Pi Network</li>
                <li>المحتوى التعليمي لأغراض إعلامية فقط</li>
                <li>نحتفظ بالحق في تعديل أو إيقاف الخدمات</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-indigo-800/30 border-indigo-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <XCircle className="w-5 h-5 text-indigo-400" />
                إنهاء الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>يمكننا إنهاء أو تعليق حسابك في الحالات التالية:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>انتهاك شروط الخدمة</li>
                <li>استخدام غير مشروع للتطبيق</li>
                <li>عدم النشاط لفترة طويلة</li>
                <li>طلب من السلطات القانونية</li>
              </ul>
              <p>يمكنك إنهاء حسابك في أي وقت من خلال الإعدادات.</p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-green-800/30 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Scale className="w-5 h-5 text-green-400" />
                القانون الحاكم
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>تخضع هذه الشروط للقوانين المصرية والدولية. أي نزاعات ستُحل عبر:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>التفاوض الودي أولاً</li>
                <li>الوساطة إذا لزم الأمر</li>
                <li>المحاكم المصرية المختصة</li>
                <li>التحكيم الدولي للنزاعات الكبرى</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white">اتصل بنا</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>لأي استفسارات حول شروط الخدمة:</p>
              <p>البريد الإلكتروني: legal@egyptology-app.com</p>
              <p>الهاتف: +20-XXX-XXXX</p>
              <p>العنوان: القاهرة، مصر</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
