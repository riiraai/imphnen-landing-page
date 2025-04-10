"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Users, BookOpen, MessageSquare, Coffee, Star, ChevronRight, ArrowRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#e6f4ff] to-white overflow-hidden">
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[#0078d7] to-[#00a5ff]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="relative mb-8"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YdNQMLg3odT4i4JZuqLmKviaghQCx.png"
                  alt="IMPHNEN Logo"
                  width={300}
                  height={150}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
              <p className="text-white mt-4 text-lg font-medium">Ingin Menjadi Programmer Handal, Namun Enggan Ngoding</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#0078d7]/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#0078d7]/5 blur-3xl" />
        <div className="absolute top-[20%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#0078d7]/5 blur-3xl" />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YdNQMLg3odT4i4JZuqLmKviaghQCx.png"
              alt="IMPHNEN Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-[#0078d7] hover:text-[#005ea3] font-medium relative group">
              Fitur
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0078d7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#community" className="text-[#0078d7] hover:text-[#005ea3] font-medium relative group">
              Komunitas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0078d7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#testimonials" className="text-[#0078d7] hover:text-[#005ea3] font-medium relative group">
              Testimonial
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0078d7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#faq" className="text-[#0078d7] hover:text-[#005ea3] font-medium relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0078d7] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-[#0078d7]">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Join Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#0078d7] hover:bg-[#005ea3] rounded-full px-6">
              Bergabung
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-2xl z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#features"
                className="text-[#0078d7] hover:text-[#005ea3] font-medium p-2 rounded-lg hover:bg-[#e6f4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fitur
              </Link>
              <Link
                href="#community"
                className="text-[#0078d7] hover:text-[#005ea3] font-medium p-2 rounded-lg hover:bg-[#e6f4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Komunitas
              </Link>
              <Link
                href="#testimonials"
                className="text-[#0078d7] hover:text-[#005ea3] font-medium p-2 rounded-lg hover:bg-[#e6f4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonial
              </Link>
              <Link
                href="#faq"
                className="text-[#0078d7] hover:text-[#005ea3] font-medium p-2 rounded-lg hover:bg-[#e6f4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button className="bg-[#0078d7] hover:bg-[#005ea3] rounded-full w-full">
                Bergabung
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0078d7]/10 text-[#0078d7] text-sm font-medium mb-2 w-fit">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0078d7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0078d7]"></span>
                  </span>
                  Komunitas Programmer Terkini
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0078d7] leading-tight">
                  Ingin Menjadi{" "}
                  <span className="relative underline decoration-wavy">
                    Programmer Handal
                  </span>{" "}, Namun Enggan Ngoding
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-[600px]">
                  Bergabunglah dengan komunitas programmer yang ingin sukses tanpa harus menulis kode. Bersama-sama kita
                  bisa menemukan jalan pintas menuju kesuksesan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-[#0078d7] hover:bg-[#005ea3] rounded-full h-12 px-8 text-base">
                    Bergabung Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0078d7] text-[#0078d7] rounded-full h-12 px-8 text-base"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-[#e6f4ff] flex items-center justify-center text-[#0078d7] font-medium"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-[#0078d7]">1,000+</span> anggota telah bergabung
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0078d7]/20 to-[#00a5ff]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl w-full max-w-md">
                  <div className="absolute -top-4 -right-4 bg-[#0078d7] text-white rounded-full p-2">
                    <Star className="h-5 w-5" />
                  </div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YdNQMLg3odT4i4JZuqLmKviaghQCx.png"
                    alt="IMPHNEN Logo"
                    width={300}
                    height={150}
                    className="object-contain mx-auto mb-6"
                  />
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                      <h3 className="font-bold text-[#0078d7]">No-Code</h3>
                      <p className="text-sm text-gray-600">Tanpa perlu menulis kode</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                      <h3 className="font-bold text-[#0078d7]">Komunitas</h3>
                      <p className="text-sm text-gray-600">Dukungan sesama anggota</p>
                    </div>
                  </div>
                  <div className="bg-[#0078d7]/10 rounded-xl p-4">
                    <p className="text-sm text-gray-700 italic">
                      "Menjadi programmer handal tanpa perlu ngoding? Ya, di IMPHNEN!"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-40 h-40 bg-[#0078d7]/10 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0078d7]/5 rounded-full blur-3xl"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#e6f4ff]/50 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-[#0078d7]/10 px-4 py-1.5 text-sm text-[#0078d7] font-medium">
                  Fitur Utama
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0078d7]">
                  Menjadi Programmer Tanpa Coding
                </h2>
                <p className="max-w-[800px] text-gray-700 text-lg md:text-xl mx-auto">
                  Komunitas kami menyediakan berbagai fitur untuk membantu Anda menjadi programmer handal tanpa perlu
                  menulis kode.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Laptop className="h-10 w-10 text-white" />,
                  title: "No-Code Tools",
                  description:
                    "Akses ke berbagai alat no-code untuk membangun aplikasi tanpa menulis satu baris kode pun.",
                },
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "Komunitas Aktif",
                  description: "Bergabung dengan ribuan programmer yang berpikiran sama dan berbagi tips serta trik.",
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-white" />,
                  title: "Sumber Belajar",
                  description: "Akses ke tutorial, webinar, dan sumber daya lain untuk meningkatkan keterampilan Anda.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-white" />,
                  title: "Forum Diskusi",
                  description: "Diskusikan ide dan solusi dengan anggota lain dalam forum yang aktif dan bersahabat.",
                },
                {
                  icon: <Coffee className="h-10 w-10 text-white" />,
                  title: "Meetup",
                  description: "Pertemuan rutin online dan offline untuk membangun jaringan dan berbagi pengalaman.",
                },
                {
                  icon: <Star className="h-10 w-10 text-white" />,
                  title: "Mentoring",
                  description: "Dapatkan bimbingan dari programmer berpengalaman yang akan membantu perjalanan Anda.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#e6f4ff] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#0078d7] to-[#00a5ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div className="p-6">
                    <div className="mb-4 rounded-full bg-gradient-to-r from-[#0078d7] to-[#00a5ff] p-3 w-16 h-16 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0078d7] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 group-hover:translate-x-2 transition-transform duration-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-[#0078d7]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#e6f4ff] to-white -z-10"></div>
          <div className="absolute -right-40 top-1/4 w-80 h-80 bg-[#0078d7]/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-40 bottom-1/4 w-80 h-80 bg-[#0078d7]/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block rounded-full bg-[#0078d7]/10 px-4 py-1.5 text-sm text-[#0078d7] font-medium">
                  Komunitas
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0078d7]">
                  Bergabunglah dengan Komunitas Kami
                </h2>
                <p className="text-lg text-gray-700">
                  IMPHNEN adalah komunitas untuk programmer yang ingin sukses tanpa harus menulis kode. Kami percaya
                  bahwa ada cara lain untuk menjadi programmer handal.
                </p>
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-[#0078d7] to-[#00a5ff] hover:from-[#0067b8] hover:to-[#0094e6] rounded-full h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                    Gabung Facebook Group
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0078d7]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#0078d7]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0078d7]">1,000+</p>
                      <p className="text-sm text-gray-600">Anggota Aktif</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#0078d7]/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-[#0078d7]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0078d7]">5,000+</p>
                      <p className="text-sm text-gray-600">Diskusi</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0078d7]/10 to-[#00a5ff]/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: <MessageSquare className="h-8 w-8 text-[#0078d7]" />,
                        title: "Forum Diskusi",
                        description: "Diskusikan ide dan solusi dengan anggota lain",
                      },
                      {
                        icon: <Coffee className="h-8 w-8 text-[#0078d7]" />,
                        title: "Meetup",
                        description: "Pertemuan rutin online dan offline",
                      },
                      {
                        icon: <Star className="h-8 w-8 text-[#0078d7]" />,
                        title: "Mentoring",
                        description: "Dapatkan bimbingan dari programmer berpengalaman",
                      },
                      {
                        icon: <Laptop className="h-8 w-8 text-[#0078d7]" />,
                        title: "Workshop",
                        description: "Workshop tentang alat no-code terbaru",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-3 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="rounded-full bg-[#0078d7]/10 p-3">{item.icon}</div>
                        <h3 className="text-xl font-bold text-[#0078d7]">{item.title}</h3>
                        <p className="text-center text-gray-700 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6f4ff]/50 to-white -z-10"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-[#0078d7]/10 px-4 py-1.5 text-sm text-[#0078d7] font-medium">
                  Testimonial
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0078d7]">
                  Apa Kata Anggota Kami
                </h2>
                <p className="max-w-[800px] text-gray-700 text-lg mx-auto">
                  Dengarkan pengalaman dari anggota komunitas IMPHNEN yang telah merasakan manfaatnya
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Saya tidak pernah berpikir bisa menjadi programmer tanpa menulis kode. IMPHNEN mengubah pandangan saya tentang dunia programming.",
                  author: "Budi Santoso",
                  role: "UI/UX Designer",
                },
                {
                  quote:
                    "Komunitas yang luar biasa! Saya telah belajar banyak tentang alat no-code dan sekarang bisa membangun aplikasi sendiri.",
                  author: "Siti Rahayu",
                  role: "Digital Marketer",
                },
                {
                  quote:
                    "IMPHNEN adalah tempat yang tepat untuk programmer yang ingin fokus pada solusi, bukan pada kode.",
                  author: "Ahmad Hidayat",
                  role: "Product Manager",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V30"
                        stroke="#0078D7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.5 20H27.5C26.837 20 26.2011 19.7366 25.7322 19.2678C25.2634 18.7989 25 18.163 25 17.5V12.5C25 11.837 25.2634 11.2011 25.7322 10.7322C26.2011 10.2634 26.837 10 27.5 10H32.5C33.163 10 33.7989 10.2634 34.2678 10.7322C34.7366 11.2011 35 11.837 35 12.5V30"
                        stroke="#0078D7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="pt-6 pb-8">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#0078d7]">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#e6f4ff]/30 to-white -z-10"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-[#0078d7]/10 px-4 py-1.5 text-sm text-[#0078d7] font-medium">
                  FAQ
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#0078d7]">
                  Pertanyaan yang Sering Diajukan
                </h2>
                <p className="max-w-[800px] text-gray-700 text-lg mx-auto">
                  Jawaban untuk pertanyaan umum tentang komunitas IMPHNEN
                </p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Apakah saya benar-benar bisa menjadi programmer tanpa coding?",
                  answer:
                    "Ya, dengan alat no-code dan low-code yang tersedia saat ini, Anda bisa membangun aplikasi dan solusi tanpa harus menulis kode secara ekstensif. Komunitas kami akan membantu Anda menemukan dan menguasai alat-alat tersebut.",
                },
                {
                  question: "Apakah komunitas ini gratis?",
                  answer:
                    "Ya, bergabung dengan komunitas IMPHNEN di Facebook adalah gratis. Kami juga menawarkan beberapa sumber daya premium untuk anggota yang ingin memperdalam pengetahuan mereka.",
                },
                {
                  question: "Bagaimana cara bergabung dengan komunitas ini?",
                  answer:
                    "Anda bisa bergabung dengan grup Facebook kami di FACEBOOK.COM/GROUPS/PROGRAMMERHANDAL atau mendaftar melalui formulir di bawah ini.",
                },
                {
                  question: "Apakah saya perlu memiliki latar belakang IT untuk bergabung?",
                  answer:
                    "Tidak, komunitas kami terbuka untuk siapa saja yang tertarik dengan dunia programming tanpa coding. Baik Anda pemula atau sudah memiliki pengalaman, Anda akan menemukan nilai dalam komunitas kami.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-8 w-8 rounded-full bg-[#0078d7]/10 flex items-center justify-center">
                          <span className="text-[#0078d7] font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0078d7] mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden bg-[#0078d7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0078d7] to-[#00a5ff] -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 transform origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/10 skew-x-12 transform origin-bottom-left"></div>

          {/* Add subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-white space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter drop-shadow-md">
                    Bergabunglah dengan IMPHNEN Sekarang
                  </h2>
                  <p className="text-white/90 text-lg max-w-md">
                    Jadilah bagian dari komunitas programmer yang berpikir di luar kebiasaan dan temukan cara baru untuk
                    sukses di dunia teknologi.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/90 flex items-center justify-center text-[#0078d7] font-medium shadow-lg"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/90">
                      Bergabung dengan <span className="font-bold">1,000+</span> anggota lainnya
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-sm">Daftar Sekarang</h3>
                  <form className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl focus:ring-white/50 focus:border-white/50 shadow-inner"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl focus:ring-white/50 focus:border-white/50 shadow-inner"
                      />
                    </div>
                    <Button className="w-full bg-white hover:bg-white/90 text-[#0078d7] hover:text-[#0067b8] h-12 rounded-xl font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-xs text-white/80 mt-4 text-center">
                    Dengan mendaftar, Anda menyetujui syarat dan ketentuan kami.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white py-12 border-t border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YdNQMLg3odT4i4JZuqLmKviaghQCx.png"
                alt="IMPHNEN Logo"
                width={150}
                height={50}
                className="object-contain"
              />
              <p className="text-gray-600 text-sm">
                Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. Komunitas untuk programmer yang ingin sukses
                tanpa harus menulis kode.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0078d7] mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-[#0078d7] transition-colors">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="text-gray-600 hover:text-[#0078d7] transition-colors">
                    Komunitas
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-600 hover:text-[#0078d7] transition-colors">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-600 hover:text-[#0078d7] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0078d7] mb-4">Kontak</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Email: info@imphnen.com</li>
                <li className="text-gray-600">Facebook: IMPHNEN Group</li>
                <li className="text-gray-600">Twitter: @imphnen</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#0078d7] mb-4">Berlangganan</h4>
              <p className="text-gray-600 text-sm mb-4">Dapatkan update terbaru dari komunitas kami</p>
              <div className="flex">
                <Input type="email" placeholder="Email Anda" className="rounded-l-lg rounded-r-none border-r-0" />
                <Button className="rounded-l-none rounded-r-lg bg-[#0078d7]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} IMPHNEN. Ingin Menjadi Programmer Handal, Namun Enggan Ngoding.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://facebook.com/groups/programmerhandal" className="text-gray-600 hover:text-[#0078d7]">
                Facebook
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0078d7]">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0078d7]">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
