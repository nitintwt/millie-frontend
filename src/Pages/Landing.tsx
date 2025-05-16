import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Sparkles, Rocket, Shield, Mail, Calendar, FileText, Check, Star, Globe, Cpu, FileSearch } from 'lucide-react';
import { useCookies } from 'react-cookie';

function Landing() {
  const [cookies]= useCookies()
  const navigate = useNavigate()
  useEffect(()=>{
    if(cookies?.userData?.userId){
      navigate("/chat")
    }
  },[cookies])
  return (
    <div className="min-h-screen bg-purple-50/30">
      {/* Floating Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20"></div>
              <Zap size={28} className="text-purple-600 relative" />
            </div>
            <span className="font-bold text-gray-900 text-xl">Millie</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to={`/api/v1/auth/googleOAuth`} className="ml-4 px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 active:scale-95">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Purple Gradient Background */}
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="px-4 py-1.5 bg-purple-100 rounded-full flex items-center gap-2">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-purple-600 font-medium">Millie JI</span>
              </div>
            </div>
            
            <h1 className="text-7xl font-bold text-center leading-tight mb-8">
              Your AI Assistant for
              <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Everyday Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience the future of productivity with Millie. Seamlessly manage emails, schedule meetings, and handle documents with AI-powered precision.
            </p>

            <div className="flex justify-center gap-6 mb-20">
              <Link
                to={`${import.meta.env.VITE_RENDER_MILLIE}/api/v1/auth/googleOAuth`}
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 active:scale-95 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Cpu className="text-purple-600" size={24} />,
                  title: "AI-Powered",
                  description: "Advanced machine learning for smart task handling"
                },
                {
                  icon: <Globe className="text-purple-600" size={24} />,
                  title: "Always Available",
                  description: "24/7 assistance whenever you need it"
                },
                {
                  icon: <Shield className="text-purple-600" size={24} />,
                  title: "Enterprise Security",
                  description: "Bank-grade encryption for your data"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-all hover:shadow-lg hover:shadow-purple-100/50">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section with Purple Background */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-600">Connect with your favorite tools instantly</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Mail size={32} />, name: "Gmail", desc: "Email Management" },
                { icon: <Calendar size={32} />, name: "Calendar", desc: "Smart Scheduling" },
                { icon: <FileText size={32} />, name: "Notion", desc: "Document Control" },
                { icon: <FileSearch size={32} />, name: "Chat with PDF", desc: "Smart Document Analysis" }
              ].map((tool, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl hover:shadow-purple-100/50 text-center">
                  <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Purple Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Millie?</h2>
              <p className="text-xl text-gray-600">Designed for modern productivity needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Smart Automation",
                  description: "Automate repetitive tasks with AI-powered workflows",
                  features: ["Email categorization", "Meeting scheduling", "Task prioritization"]
                },
                {
                  title: "Natural Language",
                  description: "Communicate naturally as you would with a human assistant",
                  features: ["Context awareness", "Memory retention", "Learning capabilities"]
                },
                {
                  title: "Deep Integration",
                  description: "Works seamlessly with your existing tools and workflows",
                  features: ["API connectivity", "Custom workflows", "Data sync"]
                },
                {
                  title: "PDF Intelligence",
                  description: "Extract insights from your documents effortlessly",
                  features: ["Smart analysis", "Quick summaries", "Contextual answers"]
                }
              ].map((feature, index) => (
                <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-200 transition-all hover:shadow-xl hover:shadow-purple-100/50">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-purple-600" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Purple Accents */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
              <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  description: "Perfect for trying out Millie",
                  features: ["5 tasks per day", "Basic integrations", "Community support"]
                },
                {
                  name: "Pro",
                  price: "$19",
                  period: "/month",
                  popular: true,
                  description: "Best for professionals",
                  features: ["Unlimited tasks", "All integrations", "Priority support", "Advanced analytics"]
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations",
                  features: ["Custom solutions", "Dedicated support", "SLA guarantee", "Custom integrations"]
                }
              ].map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl bg-white transition-all hover:shadow-xl hover:shadow-purple-100/50 ${
                  plan.popular ? 'border-2 border-purple-400' : 'border border-purple-100'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-500">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={18} className="text-purple-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`${import.meta.env.VITE_RENDER_MILLIE}/api/v1/auth/googleOAuth`}
                    className={`block text-center py-3 rounded-xl font-medium transition-all ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200'
                        : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Purple Gradient */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who are already experiencing the future of productivity with Millie.
            </p>
            <Link
              to={`${import.meta.env.VITE_RENDER_MILLIE}/api/v1/auth/googleOAuth`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-medium transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 active:scale-95"
            >
              Get Started Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Purple Border */}
      <footer className="py-12 border-t border-purple-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap size={24} className="text-purple-600" />
              <span className="font-bold text-xl">Millie</span>
            </div>
            <div className="flex items-center gap-8 text-gray-600">
              <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
            <p className="text-gray-500">&copy; 2024 Millie AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;