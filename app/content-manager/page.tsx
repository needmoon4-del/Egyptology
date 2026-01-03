"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, ImageIcon, Video, Save, Eye, Trash2, Plus, Edit, Calendar, Tag } from "lucide-react"

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState("create")
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [postCategory, setPostCategory] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [existingPosts] = useState([
    {
      id: 1,
      title: "أسرار الأهرامات المصرية",
      category: "تاريخ",
      date: "2024-01-15",
      status: "منشور",
      views: 1247,
      type: "article",
    },
    {
      id: 2,
      title: "رحلة في عالم الهيروغليفية",
      category: "لغة",
      date: "2024-01-14",
      status: "مسودة",
      views: 0,
      type: "article",
    },
    {
      id: 3,
      title: "معبد الكرنك - جولة افتراضية",
      category: "أماكن",
      date: "2024-01-13",
      status: "منشور",
      views: 2156,
      type: "video",
    },
  ])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSavePost = () => {
    console.log("[v0] Saving post:", { postTitle, postContent, postCategory, selectedFiles })
    // Here you would typically save to database
    alert("تم حفظ المنشور بنجاح!")
    setPostTitle("")
    setPostContent("")
    setPostCategory("")
    setSelectedFiles([])
  }

  const handlePublishPost = () => {
    console.log("[v0] Publishing post:", { postTitle, postContent, postCategory, selectedFiles })
    // Here you would typically publish to database
    alert("تم نشر المنشور بنجاح!")
    setPostTitle("")
    setPostContent("")
    setPostCategory("")
    setSelectedFiles([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">مدير المحتوى</h1>
          <p className="text-gray-300">إضافة وإدارة المحتوى والوسائط</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="create" className="text-white">
              إنشاء محتوى
            </TabsTrigger>
            <TabsTrigger value="manage" className="text-white">
              إدارة المحتوى
            </TabsTrigger>
            <TabsTrigger value="media" className="text-white">
              مكتبة الوسائط
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">
              التحليلات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  إنشاء محتوى جديد
                </CardTitle>
                <CardDescription className="text-gray-400">أضف منشورات، صور، وفيديوهات جديدة للتطبيق</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Post Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    عنوان المنشور
                  </Label>
                  <Input
                    id="title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder="أدخل عنوان المنشور..."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <Label className="text-white">التصنيف</Label>
                  <Select value={postCategory} onValueChange={setPostCategory}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="اختر التصنيف" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="history">تاريخ</SelectItem>
                      <SelectItem value="language">لغة</SelectItem>
                      <SelectItem value="places">أماكن</SelectItem>
                      <SelectItem value="culture">ثقافة</SelectItem>
                      <SelectItem value="archaeology">آثار</SelectItem>
                      <SelectItem value="education">تعليم</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">
                    المحتوى
                  </Label>
                  <Textarea
                    id="content"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="اكتب محتوى المنشور هنا..."
                    rows={8}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <Label className="text-white">الوسائط</Label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      multiple
                      accept="image/*,video/*"
                      className="hidden"
                    />
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">اسحب الملفات هنا أو انقر للاختيار</p>
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-700"
                    >
                      اختيار الملفات
                    </Button>
                  </div>

                  {/* Selected Files */}
                  {selectedFiles.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-white">الملفات المحددة:</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                            <div className="flex items-center gap-2">
                              {file.type.startsWith("image/") ? (
                                <ImageIcon className="h-4 w-4 text-blue-400" />
                              ) : (
                                <Video className="h-4 w-4 text-green-400" />
                              )}
                              <span className="text-white text-sm truncate">{file.name}</span>
                            </div>
                            <Button
                              onClick={() => removeFile(index)}
                              size="sm"
                              variant="ghost"
                              className="text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleSavePost}
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-700 bg-transparent"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    حفظ كمسودة
                  </Button>
                  <Button
                    onClick={handlePublishPost}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    نشر الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">إدارة المحتوى الموجود</CardTitle>
                <CardDescription className="text-gray-400">عرض وتعديل المحتوى المنشور</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <Input placeholder="البحث في المحتوى..." className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="فلترة حسب التصنيف" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all">جميع التصنيفات</SelectItem>
                      <SelectItem value="history">تاريخ</SelectItem>
                      <SelectItem value="language">لغة</SelectItem>
                      <SelectItem value="places">أماكن</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Posts List */}
                <div className="space-y-4">
                  {existingPosts.map((post) => (
                    <div key={post.id} className="p-4 bg-slate-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white font-semibold">{post.title}</h3>
                            <Badge variant={post.status === "منشور" ? "default" : "secondary"}>{post.status}</Badge>
                            <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                              {post.type === "article" ? "مقال" : "فيديو"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Tag className="h-3 w-3" />
                              {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views} مشاهدة
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-slate-600 text-white bg-transparent">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-600 text-red-400 bg-transparent">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">مكتبة الوسائط</CardTitle>
                <CardDescription className="text-gray-400">إدارة الصور والفيديوهات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {/* Sample media items */}
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">إجمالي المشاهدات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">45,621</div>
                  <p className="text-green-400 text-sm">+12% من الشهر الماضي</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">المحتوى المنشور</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">234</div>
                  <p className="text-blue-400 text-sm">+8 هذا الأسبوع</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">معدل التفاعل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">78%</div>
                  <p className="text-purple-400 text-sm">+5% من الأسبوع الماضي</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
