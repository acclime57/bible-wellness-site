"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Leaf, Church, Star, Shield, Truck, Heart, Crown } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  location: string;
  verified: boolean;
}

interface Ingredient {
  name: string;
  scriptureRef: string;
  benefits: string[];
  verse: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    rating: 5,
    review: "This supplement has truly blessed my health journey. I feel more energized and at peace knowing I'm nourishing my body as God's temple.",
    location: "Texas",
    verified: true
  },
  {
    name: "Pastor David R.",
    rating: 5,
    review: "The Biblical foundation behind this formula is remarkable. My congregation has noticed the positive changes in my energy and overall well-being.",
    location: "California",
    verified: true
  },
  {
    name: "Maria L.",
    rating: 5,
    review: "Six months using The Bible Supplement and I've never felt better. The ancient wisdom combined with modern science is truly God's blessing.",
    location: "Florida",
    verified: true
  }
];

const ingredients: Ingredient[] = [
  {
    name: "Cinnamon",
    scriptureRef: "Exodus 30:23",
    benefits: ["Blood sugar support", "Anti-inflammatory", "Antioxidant rich"],
    verse: "Take the finest spices: of liquid myrrh 500 shekels, and of sweet-smelling cinnamon half as much"
  },
  {
    name: "Olive Leaf",
    scriptureRef: "Genesis 8:11",
    benefits: ["Heart health", "Immune support", "Blood pressure balance"],
    verse: "And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf"
  },
  {
    name: "Pomegranate",
    scriptureRef: "1 Kings 7:20",
    benefits: ["Cardiovascular health", "Brain function", "Anti-aging properties"],
    verse: "The capitals on the two pillars had pomegranates also above, near the bulging part next to the latticework"
  },
  {
    name: "Coriander",
    scriptureRef: "Exodus 16:31",
    benefits: ["Digestive health", "Antioxidant support", "Blood sugar balance"],
    verse: "Now the house of Israel called its name manna. It was like coriander seed, white, and the taste of it was like wafers made with honey"
  },
  {
    name: "Hyssop",
    scriptureRef: "Psalm 51:7",
    benefits: ["Respiratory health", "Purification", "Antimicrobial"],
    verse: "Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow"
  },
  {
    name: "Aloe Vera",
    scriptureRef: "John 19:39",
    benefits: ["Skin health", "Digestive support", "Anti-inflammatory"],
    verse: "Nicodemus also, who earlier had come to Jesus by night, came bringing a mixture of myrrh and aloes"
  },
  {
    name: "Mustard Seed",
    scriptureRef: "Matthew 17:20",
    benefits: ["Metabolism boost", "Circulation", "Detoxification"],
    verse: "If you have faith like a grain of mustard seed, you will say to this mountain, 'Move from here to there'"
  },
  {
    name: "Frankincense",
    scriptureRef: "Matthew 2:11",
    benefits: ["Brain health", "Mood support", "Inflammation reduction"],
    verse: "And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts: gold and frankincense and myrrh"
  }
];

export default function BibleSupplementLanding() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = () => {
    // Stripe integration preparation
    console.log('Adding to cart:', { quantity, email });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ActiveCampaign integration
    console.log('Email captured:', email);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-primary-foreground" />
              <span className="font-heading text-xl font-bold text-primary-foreground">The Bible Supplement</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-primary-foreground hover:text-accent transition-colors font-body"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('scripture')}
                className="text-primary-foreground hover:text-accent transition-colors font-body"
              >
                Scripture
              </button>
              <button 
                onClick={() => scrollToSection('ingredients')}
                className="text-primary-foreground hover:text-accent transition-colors font-body"
              >
                Ingredients
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-primary-foreground hover:text-accent transition-colors font-body"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('purchase')}
                className="text-primary-foreground hover:text-accent transition-colors font-body"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary-foreground mb-6">
                The Bible Supplement
              </h1>
              <p className="font-body text-xl lg:text-2xl text-accent mb-8 italic">
                God's Garden for Your Temple - Ancient Wisdom, Modern Wellness
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-body text-lg text-primary-foreground/90">
                  Eight sacred botanicals mentioned in Scripture, carefully formulated to honor your body as God's temple.
                </p>
                <p className="font-body text-base text-primary-foreground/80">
                  "Do you not know that your bodies are temples of the Holy Spirit?" - 1 Corinthians 6:19
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-heading text-lg px-8 py-4"
                onClick={() => scrollToSection('purchase')}
              >
                Nourish Your Temple
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-4 border-accent shadow-2xl">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756750703033-ssp3prnv2k8.png"
                  alt="The Bible Supplement Product"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Foundation Section */}
      <section id="scripture" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Biblical Foundation
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Throughout Scripture, God provides natural remedies from His creation to heal and nourish His people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-accent bg-card shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl text-primary">God's Provision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="font-body text-lg text-foreground italic mb-4">
                  "Then God said, 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food.'"
                </blockquote>
                <cite className="font-heading text-accent font-semibold">Genesis 1:29</cite>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent bg-card shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Church className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl text-primary">Body as Temple</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="font-body text-lg text-foreground italic mb-4">
                  "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies."
                </blockquote>
                <cite className="font-heading text-accent font-semibold">1 Corinthians 6:19-20</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="ingredients" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              The Eight Pillars Formula
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Each ingredient carefully selected from Scripture, backed by modern science and ancient wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="border-2 border-accent bg-card shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl text-primary">{ingredient.name}</CardTitle>
                  <Badge variant="secondary" className="font-facts text-xs">
                    {ingredient.scriptureRef}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="font-body text-sm text-foreground italic mb-4 text-center">
                    "{ingredient.verse}"
                  </blockquote>
                  <div className="space-y-1">
                    {ingredient.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supplement Facts Panel */}
          <div className="max-w-md mx-auto">
            <Card className="border-4 border-primary bg-card shadow-2xl">
              <CardHeader className="text-center bg-primary text-primary-foreground">
                <CardTitle className="font-heading text-2xl">Supplement Facts</CardTitle>
                <p className="font-facts text-sm">Serving Size: 2 Capsules</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 font-facts">
                  <div className="flex justify-between border-b border-border pb-1">
                    <span className="font-semibold">Amount Per Serving</span>
                    <span className="font-semibold">% Daily Value*</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cinnamon powder (Ceylon)</span>
                    <span>150mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Olive leaf powder</span>
                    <span>120mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pomegranate fruit powder</span>
                    <span>100mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coriander seed powder</span>
                    <span>100mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hyssop herb powder</span>
                    <span>80mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aloe vera powder (200:1)</span>
                    <span>60mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mustard seed powder</span>
                    <span>60mg †</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frankincense powder (Boswellia)</span>
                    <span>60mg †</span>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-xs text-muted-foreground">
                    † Daily Value not established.<br/>
                    *Percent Daily Values are based on a 2,000 calorie diet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Blessed Testimonies
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from faithful individuals who have experienced God's healing through His natural provisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-accent bg-card shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CardTitle className="font-heading text-lg text-primary">{testimonial.name}</CardTitle>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs">Verified</Badge>
                    )}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.location}</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="font-body text-base text-foreground italic text-center">
                    "{testimonial.review}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                Nourish Your Temple Today
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Begin your journey to wellness with God's natural provisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card className="border-4 border-primary bg-card shadow-2xl">
                  <CardHeader className="text-center bg-primary text-primary-foreground">
                    <CardTitle className="font-heading text-3xl">Special Launch Price</CardTitle>
                    <div className="flex items-center justify-center space-x-3 mt-4">
                      <span className="font-body text-2xl line-through text-primary-foreground/70">$89.99</span>
                      <span className="font-heading text-5xl font-bold">$59.99</span>
                    </div>
                    <p className="font-body text-lg">Free shipping on all orders</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-lg">Quantity:</span>
                        <div className="flex items-center space-x-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="h-10 w-10 p-0"
                          >
                            -
                          </Button>
                          <span className="font-heading text-xl font-bold w-12 text-center">{quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setQuantity(quantity + 1)}
                            className="h-10 w-10 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between text-2xl font-bold">
                        <span className="font-body">Total:</span>
                        <span className="font-heading">${(59.99 * quantity).toFixed(2)}</span>
                      </div>

                      <Button 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl py-4"
                        onClick={handleAddToCart}
                      >
                        Add to Cart - Order Now
                      </Button>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                          <Shield className="h-8 w-8 text-accent mb-2" />
                          <span className="font-facts text-sm">30-Day Guarantee</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Truck className="h-8 w-8 text-accent mb-2" />
                          <span className="font-facts text-sm">Free Shipping</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Heart className="h-8 w-8 text-accent mb-2" />
                          <span className="font-facts text-sm">Made in USA</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent bg-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-primary text-center">
                      Join Our Faith & Wellness Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-accent rounded-lg font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-body">
                        Get Exclusive Updates & Scripture Devotions
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-2 border-accent bg-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-primary">Product Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">Eight biblical botanicals in one powerful formula</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">Supports overall wellness and vitality</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">Made with premium, standardized extracts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">Third-party tested for purity and potency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">Manufactured in FDA-registered facility</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="font-body text-foreground">60 capsules - 30-day supply</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent bg-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-primary">Shipping & Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-heading text-lg text-primary mb-2">Free Shipping</h4>
                      <p className="font-body text-foreground">Free standard shipping on all orders within the United States. Orders typically arrive within 5-7 business days.</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-primary mb-2">30-Day Money-Back Guarantee</h4>
                      <p className="font-body text-foreground">If you're not completely satisfied with your purchase, return it within 30 days for a full refund.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Church className="h-8 w-8" />
                <span className="font-heading text-2xl font-bold">The Bible Supplement</span>
              </div>
              <p className="font-body text-primary-foreground/80 mb-4">
                Honoring your body as God's temple through His natural provisions.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="font-facts">FDA Registered</Badge>
                <Badge variant="secondary" className="font-facts">Made in USA</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p>747 S Mission Rd #2064</p>
                <p>Fallbrook, CA 92088</p>
                <p>Email: info@thebiblesupplement.com</p>
                <p>Phone: 1-619-500-4403</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Legal</h3>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></p>
                <p><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></p>
                <p><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></p>
                <p><a href="#" className="hover:text-accent transition-colors">FDA Disclaimer</a></p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center">
            <p className="font-body text-primary-foreground/60 text-sm mb-2">
              *This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="font-body text-primary-foreground/80">
              © 2024 The Bible Supplement. All rights reserved. | Blessed by His Grace
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}