"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Heart, Leaf, Shield, Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const BibleSupplementLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">The Bible Supplement</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-600 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105">
                Shop Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-2 space-y-2">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">About</button>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Products</button>
                <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Contact</button>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Biblical Health & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Wholeness</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover God's design for vibrant health through natural supplements rooted in biblical wisdom. 
                Nurture your body as the temple it was created to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </button>
                <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <Heart className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Health • Faith • Wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Biblical Approach to Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embrace wellness through God's natural provisions, combining ancient wisdom with modern nutritional science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">
                Pure, natural supplements derived from God's creation, free from harmful additives.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Biblical Foundation</h3>
              <p className="text-gray-600">
                Rooted in scripture and the understanding that your body is God's temple.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic Wellness</h3>
              <p className="text-gray-600">
                Supporting body, mind, and spirit for complete health and vitality.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorously tested and crafted with the highest standards of purity and potency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Sacred Supplements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully formulated supplements that honor God's design for optimal health and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl mb-6 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Garden of Eden Greens</h3>
              <p className="text-gray-600 mb-4">
                A powerful blend of superfoods and greens to nourish your body with nature's finest nutrients.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-amber-600">$49.99</span>
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all">
                Shop Now
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-violet-300 rounded-2xl mb-6 flex items-center justify-center">
                <Shield className="w-16 h-16 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Armor of God Immunity</h3>
              <p className="text-gray-600 mb-4">
                Strengthen your body's natural defenses with this powerful immune system support formula.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-amber-600">$39.99</span>
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5" />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-violet-700 transition-all">
                Shop Now
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl mb-6 flex items-center justify-center">
                <Heart className="w-16 h-16 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Living Water Vitality</h3>
              <p className="text-gray-600 mb-4">
                Essential vitamins and minerals to energize your body and enhance your daily vitality.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-amber-600">$59.99</span>
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimonies of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community about how biblical health principles have transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl p-8 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Bible Supplement has been a blessing to my health journey. I feel more energized and my faith has grown stronger knowing I'm caring for my body as God intended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Martinez</p>
                  <p className="text-gray-600 text-sm">Faithful Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Amazing products with a heart for God. My whole family uses these supplements and we've never felt healthier. The biblical approach really resonates with our values."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-semibold">DJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">David Johnson</p>
                  <p className="text-gray-600 text-sm">Family Man & Pastor</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I love how these supplements align with my faith. Quality ingredients, biblical foundation, and real results. God's design for health is truly amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-semibold">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Rebecca Kim</p>
                  <p className="text-gray-600 text-sm">Health Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Biblical Foundation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At The Bible Supplement, we believe that God has provided everything we need for health and healing through His creation. 
                Our mission is to help you honor your body as the temple of the Holy Spirit by providing natural, 
                high-quality supplements based on biblical principles.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? 
                You are not your own; you were bought at a price. Therefore honor God with your bodies." - 1 Corinthians 6:19-20
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every product we create is formulated with prayer, backed by science, and inspired by God's natural pharmacy. 
                We're committed to helping you achieve optimal health while drawing closer to your Creator.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105">
                Learn Our Story
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <Shield className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-xl font-semibold">"Your body is a temple"</p>
                  <p className="text-lg">1 Corinthians 6:19</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">The Bible Supplement</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Honoring God through natural health and wellness. Your journey to biblical wholeness starts here.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-amber-400 transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-amber-400 transition-colors">Testimonials</button></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">1-619-500-4403</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">info@biblesupplement.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                  <div className="text-gray-300">
                    <p>123 Faith Way</p>
                    <p>San Diego, CA 92101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 The Bible Supplement. All rights reserved. | 
              <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Privacy Policy</a> | 
              <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Terms of Service</a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};