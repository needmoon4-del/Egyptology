"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Volume2,
  Copy,
  Heart,
  Share2,
  BookOpen,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  Eye,
  Award,
  Zap,
  Target,
  Users,
  Clock,
} from "lucide-react"
import PageLayout from "@/components/page-layout"

interface HieroglyphEntry {
  id: string
  symbol: string
  name: string
  meaning: string
  pronunciation: string
  category: "gods" | "pharaohs" | "animals" | "objects" | "nature" | "numbers" | "actions" | "concepts"
  difficulty: "beginner" | "intermediate" | "advanced" | "expert"
  description: string
  usage: string
  examples: string[]
  culturalSignificance: string
  historicalPeriod: string
  relatedSymbols: string[]
  etymology: string
  modernUsage: string
  learningTips: string[]
  commonMistakes: string[]
  isFavorite?: boolean
  viewCount: number
  learnedBy: number
  accuracy: number
}

const hieroglyphsData: HieroglyphEntry[] = [
  {
    id: "1",
    symbol: "𓂀",
    name: "الإنسان",
    meaning: "شخص، إنسان، رجل",
    pronunciation: "s",
    category: "concepts",
    difficulty: "beginner",
    description:
      "رمز أساسي يمثل الإنسان في الكتابة الهيروغليفية. يُستخدم كمحدد للكلمات المتعلقة بالأشخاص والأفعال البشرية.",
    usage: "يُستخدم كمحدد في نهاية الكلمات للدلالة على الأشخاص أو الأفعال التي يقوم بها الإنسان",
    examples: ["𓂀𓈖 - رجل", "𓂀𓏏 - امرأة", "𓂀𓊪 - شخص مهم"],
    culturalSignificance: "يعكس أهمية الإنسان في الفكر المصري القديم كمحور الحضارة والثقافة",
    historicalPeriod: "جميع العصور المصرية القديمة",
    relatedSymbols: ["𓂋", "𓈖", "𓏏"],
    etymology: "مشتق من الشكل المبسط لجسم الإنسان الواقف",
    modernUsage: "يُستخدم في الدراسات الأكاديمية والمتاحف لتعليم أساسيات الهيروغليفية",
    learningTips: ["ابدأ بهذا الرمز لأنه الأساس", "لاحظ الوضعية الواقفة", "تذكر أنه يأتي في نهاية الكلمات عادة"],
    commonMistakes: ["الخلط مع رموز الآلهة", "عدم وضعه في المكان الصحيح"],
    viewCount: 15420,
    learnedBy: 8934,
    accuracy: 94,
  },
  {
    id: "2",
    symbol: "𓇳",
    name: "رع - إله الشمس",
    meaning: "الشمس، النور، الإله رع",
    pronunciation: "ra",
    category: "gods",
    difficulty: "intermediate",
    description: "رمز الإله رع، إله الشمس الأعظم في الديانة المصرية القديمة. يمثل القوة الإلهية والنور والحياة.",
    usage: "يُستخدم في النصوص الدينية والملكية للإشارة إلى الإله رع أو مفهوم الشمس والنور الإلهي",
    examples: ["𓇳𓏺 - رع الإله", "𓇳𓊪𓏏 - نور الشمس", "𓇳𓋹 - حياة رع"],
    culturalSignificance: "رع هو أهم الآلهة في البانثيون المصري، رمز القوة الملكية والحياة الأبدية",
    historicalPeriod: "الدولة القديمة حتى العصر البطلمي",
    relatedSymbols: ["𓊪𓏏𓊖", "𓋹", "𓈖"],
    etymology: "من الكلمة المصرية القديمة 'رع' التي تعني الشمس",
    modernUsage: "رمز شائع في الفن المصري المعاصر والسياحة الثقافية",
    learningTips: ["اربطه بشروق الشمس", "تذكر أنه ملك الآلهة", "لاحظ الدائرة التي تمثل قرص الشمس"],
    commonMistakes: ["الخلط مع آلهة أخرى", "عدم فهم السياق الديني"],
    viewCount: 23156,
    learnedBy: 12847,
    accuracy: 89,
  },
  {
    id: "3",
    symbol: "𓊪𓏏𓊖",
    name: "السماء",
    meaning: "السماء، الآلهة، العالم العلوي",
    pronunciation: "pet",
    category: "nature",
    difficulty: "intermediate",
    description: "يمثل السماء والعالم الإلهي. رمز مقدس يشير إلى مسكن الآلهة والحياة الأبدية.",
    usage: "يُستخدم في النصوص الدينية والجنائزية للإشارة إلى السماء كمسكن الآلهة والأرواح",
    examples: ["𓊪𓏏𓊖𓈖 - من السماء", "𓊪𓏏𓊖𓇳 - سماء رع", "𓊪𓏏𓊖𓋹 - حياة السماء"],
    culturalSignificance: "السماء في الفكر المصري هي مسكن الآلهة ومصدر البركات والحياة الأبدية",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓇳", "𓋹", "𓈖"],
    etymology: "من الكلمة المصرية 'بت' التي تعني السماء",
    modernUsage: "يُستخدم في الدراسات الفلكية والدينية المقارنة",
    learningTips: ["تخيل السماء كسقف مقوس", "اربطه بالآلهة والقداسة", "لاحظ الخط المنحني"],
    commonMistakes: ["الخلط مع رموز الأرض", "عدم فهم البعد الروحي"],
    viewCount: 18743,
    learnedBy: 9876,
    accuracy: 91,
  },
  {
    id: "4",
    symbol: "𓋹",
    name: "عنخ - الحياة",
    meaning: "الحياة، الحياة الأبدية، القوة الحيوية",
    pronunciation: "ankh",
    category: "concepts",
    difficulty: "beginner",
    description: "أشهر الرموز المصرية، يمثل الحياة والحياة الأبدية. رمز القوة الإلهية التي تمنح الحياة.",
    usage: "يُستخدم في جميع السياقات للدلالة على الحياة، خاصة في النصوص الدينية والملكية",
    examples: ["𓋹𓈖 - الحياة", "𓋹𓇳 - حياة رع", "𓋹𓊪𓏏𓊖 - الحياة الأبدية"],
    culturalSignificance: "رمز الحياة الأبدية والقوة الإلهية، يحمله الآلهة والملوك كعلامة على القدرة على منح الحياة",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓇳", "𓊪𓏏𓊖", "𓂀"],
    etymology: "من الكلمة المصرية 'عنخ' التي تعني يعيش أو الحياة",
    modernUsage: "رمز شائع جداً في الثقافة الشعبية والمجوهرات والفن المعاصر",
    learningTips: ["تذكر شكل المفتاح", "اربطه بالحياة والخلود", "لاحظ الحلقة في الأعلى"],
    commonMistakes: ["رسم الشكل بطريقة خاطئة", "عدم فهم المعنى الروحي العميق"],
    viewCount: 45231,
    learnedBy: 28934,
    accuracy: 96,
  },
  {
    id: "5",
    symbol: "𓈖",
    name: "الماء",
    meaning: "الماء، النيل، التطهير",
    pronunciation: "n",
    category: "nature",
    difficulty: "beginner",
    description: "يمثل الماء والنيل المقدس. رمز الحياة والتطهير والخصوبة في الحضارة المصرية.",
    usage: "يُستخدم للدلالة على الماء والنيل، وكحرف 'ن' في الكتابة الصوتية",
    examples: ["𓈖𓏏 - ماء", "𓈖𓇳 - ماء الشمس", "𓈖𓊪 - ماء مقدس"],
    culturalSignificance: "النيل هو شريان الحياة في مصر، والماء رمز التطهير والولادة الجديدة",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓋹", "𓇳", "𓊪"],
    etymology: "من الشكل المموج للماء",
    modernUsage: "يُستخدم في دراسات علم المياه والبيئة في مصر القديمة",
    learningTips: ["تذكر شكل الأمواج", "اربطه بالنيل", "لاحظ الخطوط المتموجة"],
    commonMistakes: ["رسم الخطوط مستقيمة", "عدم فهم أهمية النيل"],
    viewCount: 19876,
    learnedBy: 11234,
    accuracy: 93,
  },
  {
    id: "6",
    symbol: "𓅃",
    name: "الصقر",
    meaning: "الصقر، حورس، القوة الملكية",
    pronunciation: "bik",
    category: "animals",
    difficulty: "advanced",
    description: "يمثل الصقر المقدس والإله حورس. رمز القوة الملكية والحماية الإلهية والبصيرة الثاقبة.",
    usage: "يُستخدم في السياقات الملكية والدينية للإشارة إلى حورس أو القوة الملكية",
    examples: ["𓅃𓇳 - حورس الشمس", "𓅃𓊪 - الصقر المقدس", "𓅃𓋹 - حياة حورس"],
    culturalSignificance: "حورس هو إله السماء والملكية، والفرعون يُعتبر تجسيداً له على الأرض",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓇳", "𓊪𓏏𓊖", "𓋹"],
    etymology: "من شكل الصقر الطائر أو الواقف",
    modernUsage: "رمز مصر الحديثة ويظهر في الشعارات الرسمية",
    learningTips: ["تذكر الصقر كملك الطيور", "اربطه بالفرعون", "لاحظ الشكل المميز للرأس"],
    commonMistakes: ["الخلط مع طيور أخرى", "عدم فهم الرمزية الملكية"],
    viewCount: 16543,
    learnedBy: 8765,
    accuracy: 87,
  },
  {
    id: "7",
    symbol: "𓏺",
    name: "الخبز",
    meaning: "الخبز، الطعام، القربان",
    pronunciation: "t",
    category: "objects",
    difficulty: "beginner",
    description: "يمثل الخبز والطعام. رمز أساسي للحياة والقوت اليومي والقرابين المقدسة.",
    usage: "يُستخدم للدلالة على الخبز والطعام، وكحرف 'ت' في الكتابة الصوتية",
    examples: ["𓏺𓈖 - خبز", "𓏺𓇳 - خبز الشمس", "𓏺𓊪 - خبز مقدس"],
    culturalSignificance: "الخبز هو أساس الحياة في مصر القديمة، ويُقدم كقربان للآلهة والموتى",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓋹", "𓈖", "𓊪"],
    etymology: "من شكل رغيف الخبز المصري التقليدي",
    modernUsage: "يُستخدم في دراسات الطعام والزراعة في مصر القديمة",
    learningTips: ["تذكر شكل الرغيف", "اربطه بالحياة اليومية", "لاحظ الشكل نصف الدائري"],
    commonMistakes: ["رسم الشكل مربعاً", "عدم فهم أهمية الخبز الثقافية"],
    viewCount: 12987,
    learnedBy: 7654,
    accuracy: 95,
  },
  {
    id: "8",
    symbol: "𓊨",
    name: "البيت",
    meaning: "البيت، المنزل، المعبد",
    pronunciation: "pr",
    category: "objects",
    difficulty: "intermediate",
    description: "يمثل البيت أو المعبد. رمز المأوى والحماية والمكان المقدس.",
    usage: "يُستخدم للدلالة على البيت أو المعبد، وفي تركيب كلمات مثل 'فرعون' (البيت العظيم)",
    examples: ["𓊨𓇳 - بيت رع (معبد)", "𓊨𓊪 - البيت المقدس", "𓊨𓋹 - بيت الحياة"],
    culturalSignificance: "البيت رمز الأمان والاستقرار، والمعبد هو بيت الإله على الأرض",
    historicalPeriod: "جميع العصور المصرية",
    relatedSymbols: ["𓇳", "𓊪", "𓋹"],
    etymology: "من الشكل المبسط للبيت المصري التقليدي",
    modernUsage: "يُستخدم في دراسات العمارة والمجتمع المصري القديم",
    learningTips: ["تذكر شكل البيت البسيط", "اربطه بالحماية والأمان", "لاحظ الخطوط المستقيمة"],
    commonMistakes: ["رسم الشكل معقداً جداً", "عدم فهم الفرق بين البيت والمعبد"],
    viewCount: 14321,
    learnedBy: 8432,
    accuracy: 90,
  },
]

const categories = {
  gods: { name: "الآلهة", icon: "👑", color: "bg-yellow-100 text-yellow-800" },
  pharaohs: { name: "الفراعنة", icon: "🏺", color: "bg-purple-100 text-purple-800" },
  animals: { name: "الحيوانات", icon: "🦅", color: "bg-green-100 text-green-800" },
  objects: { name: "الأشياء", icon: "🏛️", color: "bg-blue-100 text-blue-800" },
  nature: { name: "الطبيعة", icon: "🌊", color: "bg-cyan-100 text-cyan-800" },
  numbers: { name: "الأرقام", icon: "🔢", color: "bg-indigo-100 text-indigo-800" },
  actions: { name: "الأفعال", icon: "⚡", color: "bg-orange-100 text-orange-800" },
  concepts: { name: "المفاهيم", icon: "💭", color: "bg-pink-100 text-pink-800" },
}

const difficulties = {
  beginner: { name: "مبتدئ", color: "bg-green-100 text-green-800" },
  intermediate: { name: "متوسط", color: "bg-yellow-100 text-yellow-800" },
  advanced: { name: "متقدم", color: "bg-orange-100 text-orange-800" },
  expert: { name: "خبير", color: "bg-red-100 text-red-800" },
}

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [hieroglyphs, setHieroglyphs] = useState<HieroglyphEntry[]>(hieroglyphsData)
  const [selectedHieroglyph, setSelectedHieroglyph] = useState<HieroglyphEntry | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const itemsPerPage = 12

  const filteredHieroglyphs = useMemo(() => {
    return hieroglyphs.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || item.difficulty === selectedDifficulty
      const matchesFavorites = !showFavoritesOnly || item.isFavorite

      return matchesSearch && matchesCategory && matchesDifficulty && matchesFavorites
    })
  }, [hieroglyphs, searchTerm, selectedCategory, selectedDifficulty, showFavoritesOnly])

  const paginatedHieroglyphs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredHieroglyphs.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredHieroglyphs, currentPage])

  const totalPages = Math.ceil(filteredHieroglyphs.length / itemsPerPage)

  const toggleFavorite = (id: string) => {
    setHieroglyphs((prev) => prev.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : item)))
  }

  const speakPronunciation = (pronunciation: string, name: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(`${name}: ${pronunciation}`)
      utterance.lang = "ar-SA"
      utterance.rate = 0.7
      speechSynthesis.speak(utterance)
    }
  }

  const copySymbol = (symbol: string) => {
    navigator.clipboard.writeText(symbol)
  }

  const shareHieroglyph = (hieroglyph: HieroglyphEntry) => {
    if (navigator.share) {
      navigator.share({
        title: `${hieroglyph.name} - ${hieroglyph.symbol}`,
        text: `${hieroglyph.meaning}\n\n${hieroglyph.description}`,
        url: window.location.href,
      })
    }
  }

  const getStats = () => {
    const totalSymbols = hieroglyphs.length
    const favorites = hieroglyphs.filter((h) => h.isFavorite).length
    const avgAccuracy = Math.round(hieroglyphs.reduce((sum, h) => sum + h.accuracy, 0) / totalSymbols)
    const totalViews = hieroglyphs.reduce((sum, h) => sum + h.viewCount, 0)

    return { totalSymbols, favorites, avgAccuracy, totalViews }
  }

  const stats = getStats()

  return (
    <PageLayout
      title="قاموس الهيروغليفية التفاعلي"
      description="اكتشف أسرار الكتابة المقدسة للحضارة المصرية العظيمة"
      icon={<BookOpen className="h-8 w-8" />}
      badge="2,847 رمز"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 text-white">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
            <div className="text-2xl font-bold text-cyan-400">{stats.totalSymbols}</div>
            <div className="text-sm text-cyan-300">رمز هيروغليفي</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 text-white">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-purple-400">{stats.favorites}</div>
            <div className="text-sm text-purple-300">المفضلة</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-green-500/30 text-white">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-green-400">{stats.avgAccuracy}%</div>
            <div className="text-sm text-green-300">دقة التعلم</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-orange-500/30 text-white">
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <div className="text-2xl font-bold text-orange-400">{stats.totalViews.toLocaleString()}</div>
            <div className="text-sm text-orange-300">مشاهدة</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <Input
                placeholder="ابحث في الرموز والمعاني..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-slate-900/50 border border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/70"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
            >
              <Filter className="w-4 h-4" />
              الفلاتر
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                }
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                }
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-cyan-500/30">
              <div>
                <label className="block text-sm font-medium mb-2 text-cyan-300">التصنيف</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-slate-900/50 border border-cyan-500/30 rounded-md text-cyan-100"
                >
                  <option value="all">جميع التصنيفات</option>
                  {Object.entries(categories).map(([key, category]) => (
                    <option key={key} value={key}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-cyan-300">مستوى الصعوبة</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2 bg-slate-900/50 border border-cyan-500/30 rounded-md text-cyan-100"
                >
                  <option value="all">جميع المستويات</option>
                  {Object.entries(difficulties).map(([key, difficulty]) => (
                    <option key={key} value={key}>
                      {difficulty.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-cyan-300">
                  <input
                    type="checkbox"
                    checked={showFavoritesOnly}
                    onChange={(e) => setShowFavoritesOnly(e.target.checked)}
                    className="rounded border-cyan-500/30"
                  />
                  <span className="text-sm">المفضلة فقط</span>
                </label>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-cyan-300">
            عرض {paginatedHieroglyphs.length} من أصل {filteredHieroglyphs.length} رمز
          </div>
          <div className="text-sm text-cyan-300">
            الصفحة {currentPage} من {totalPages}
          </div>
        </div>

        {/* Hieroglyphs Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedHieroglyphs.map((hieroglyph) => (
              <Card
                key={hieroglyph.id}
                className="hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 cursor-pointer bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30 hover:border-purple-500/50 hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-6xl mb-2">{hieroglyph.symbol}</div>
                  <CardTitle className="text-lg text-cyan-100">{hieroglyph.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/30">
                      {categories[hieroglyph.category].icon} {categories[hieroglyph.category].name}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 border border-purple-500/30">
                      {difficulties[hieroglyph.difficulty].name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-300/80 text-sm mb-3 line-clamp-2">{hieroglyph.meaning}</p>
                  <div className="flex items-center justify-between text-xs text-cyan-400/70 mb-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {hieroglyph.viewCount.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {hieroglyph.learnedBy.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {hieroglyph.accuracy}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => speakPronunciation(hieroglyph.pronunciation, hieroglyph.name)}
                      className="flex-1 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copySymbol(hieroglyph.symbol)}
                      className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleFavorite(hieroglyph.id)}
                      className={`border-cyan-500/30 hover:bg-cyan-500/20 ${hieroglyph.isFavorite ? "text-red-400" : "text-cyan-300"}`}
                    >
                      <Heart className={`w-4 h-4 ${hieroglyph.isFavorite ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedHieroglyph(hieroglyph)}
                      className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                    >
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedHieroglyphs.map((hieroglyph) => (
              <Card key={hieroglyph.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl flex-shrink-0">{hieroglyph.symbol}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{hieroglyph.name}</h3>
                          <p className="text-gray-600">{hieroglyph.meaning}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={categories[hieroglyph.category].color}>
                            {categories[hieroglyph.category].icon} {categories[hieroglyph.category].name}
                          </Badge>
                          <Badge className={difficulties[hieroglyph.difficulty].color}>
                            {difficulties[hieroglyph.difficulty].name}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 line-clamp-2">{hieroglyph.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {hieroglyph.viewCount.toLocaleString()} مشاهدة
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {hieroglyph.learnedBy.toLocaleString()} متعلم
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {hieroglyph.accuracy}% دقة
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => speakPronunciation(hieroglyph.pronunciation, hieroglyph.name)}
                          >
                            <Volume2 className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => copySymbol(hieroglyph.symbol)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => shareHieroglyph(hieroglyph)}>
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleFavorite(hieroglyph.id)}
                            className={hieroglyph.isFavorite ? "text-red-600" : ""}
                          >
                            <Heart className={`w-4 h-4 ${hieroglyph.isFavorite ? "fill-current" : ""}`} />
                          </Button>
                          <Button variant="default" size="sm" onClick={() => setSelectedHieroglyph(hieroglyph)}>
                            <BookOpen className="w-4 h-4" />
                            التفاصيل
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
              السابق
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 ${
                    currentPage === pageNum
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                      : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                  }`}
                >
                  {pageNum}
                </Button>
              )
            })}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 disabled:opacity-50"
            >
              التالي
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Detailed View Modal */}
      {selectedHieroglyph && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-800/95 backdrop-blur-xl border border-cyan-500/30">
            <CardHeader className="text-center border-b border-cyan-500/30">
              <div className="text-8xl mb-4">{selectedHieroglyph.symbol}</div>
              <CardTitle className="text-2xl text-cyan-100">{selectedHieroglyph.name}</CardTitle>
              <p className="text-lg text-cyan-300">{selectedHieroglyph.meaning}</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Badge className={categories[selectedHieroglyph.category].color}>
                  {categories[selectedHieroglyph.category].icon} {categories[selectedHieroglyph.category].name}
                </Badge>
                <Badge className={difficulties[selectedHieroglyph.difficulty].color}>
                  {difficulties[selectedHieroglyph.difficulty].name}
                </Badge>
                <Badge variant="outline">النطق: {selectedHieroglyph.pronunciation}</Badge>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => speakPronunciation(selectedHieroglyph.pronunciation, selectedHieroglyph.name)}
                >
                  <Volume2 className="w-4 h-4 ml-2" />
                  استمع للنطق
                </Button>
                <Button variant="outline" onClick={() => copySymbol(selectedHieroglyph.symbol)}>
                  <Copy className="w-4 h-4 ml-2" />
                  نسخ الرمز
                </Button>
                <Button variant="outline" onClick={() => shareHieroglyph(selectedHieroglyph)}>
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toggleFavorite(selectedHieroglyph.id)}
                  className={selectedHieroglyph.isFavorite ? "text-red-600" : ""}
                >
                  <Heart className={`w-4 h-4 ml-2 ${selectedHieroglyph.isFavorite ? "fill-current" : ""}`} />
                  {selectedHieroglyph.isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">الوصف</TabsTrigger>
                  <TabsTrigger value="usage">الاستخدام</TabsTrigger>
                  <TabsTrigger value="examples">الأمثلة</TabsTrigger>
                  <TabsTrigger value="details">التفاصيل</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">الوصف العام</h4>
                      <p className="text-gray-700">{selectedHieroglyph.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">الأهمية الثقافية</h4>
                      <p className="text-gray-700">{selectedHieroglyph.culturalSignificance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">الفترة التاريخية</h4>
                      <p className="text-gray-700">{selectedHieroglyph.historicalPeriod}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="usage" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">كيفية الاستخدام</h4>
                      <p className="text-gray-700">{selectedHieroglyph.usage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">الاستخدام الحديث</h4>
                      <p className="text-gray-700">{selectedHieroglyph.modernUsage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">نصائح التعلم</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedHieroglyph.learningTips.map((tip, index) => (
                          <li key={index} className="text-gray-700">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">أمثلة الاستخدام</h4>
                      <div className="space-y-2">
                        {selectedHieroglyph.examples.map((example, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl mb-1">{example.split(" - ")[0]}</div>
                            <div className="text-gray-600">{example.split(" - ")[1]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">الأخطاء الشائعة</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedHieroglyph.commonMistakes.map((mistake, index) => (
                          <li key={index} className="text-red-600">
                            {mistake}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">أصل الكلمة</h4>
                      <p className="text-gray-700">{selectedHieroglyph.etymology}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">الرموز ذات الصلة</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedHieroglyph.relatedSymbols.map((symbol, index) => (
                          <Badge key={index} variant="outline" className="text-lg">
                            {symbol}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {selectedHieroglyph.viewCount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">مشاهدة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {selectedHieroglyph.learnedBy.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">متعلم</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{selectedHieroglyph.accuracy}%</div>
                        <div className="text-sm text-gray-600">دقة التعلم</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <div className="p-6 border-t">
              <Button variant="outline" onClick={() => setSelectedHieroglyph(null)} className="w-full">
                إغلاق
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Learning Tips */}
      <Card className="mt-8 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyan-100">
            <Zap className="w-5 h-5 text-yellow-400" />
            نصائح تعلم الهيروغليفية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-blue-300">ابدأ بالأساسيات</h4>
              </div>
              <p className="text-sm text-blue-200">
                تعلم الرموز الأساسية مثل الإنسان والماء والخبز قبل الانتقال للرموز المعقدة
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold text-green-300">مارس يومياً</h4>
              </div>
              <p className="text-sm text-green-200">خصص 15-20 دقيقة يومياً لمراجعة الرموز وممارسة كتابتها</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-purple-300">فهم السياق</h4>
              </div>
              <p className="text-sm text-purple-200">تعلم السياق الثقافي والتاريخي للرموز لفهمها بشكل أعمق</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
