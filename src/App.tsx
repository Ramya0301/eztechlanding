import React, { useEffect, useState } from 'react'
import { Cpu, Database, Globe, MessageSquare, BarChart, Layout, Bot } from 'lucide-react'

const services = [
  { icon: <Cpu size={24} />, title: 'Digital Transformation', description: 'Modernize your business with cutting-edge digital solutions.' },
  { icon: <Database size={24} />, title: 'Artificial Intelligence & Machine Learning', description: 'Harness the power of AI and ML, including advanced forecasting capabilities.' },
  { icon: <Globe size={24} />, title: 'Web Scraping Solutions', description: 'Extract valuable data from the web efficiently and accurately.' },
  { icon: <MessageSquare size={24} />, title: 'Custom Solutions', description: 'Share your unique problem, and we\'ll create a tailored solution.' },
  { icon: <BarChart size={24} />, title: 'Data Analytics', description: 'Transform raw data into actionable insights for your business.' },
  { icon: <Layout size={24} />, title: 'Dashboards', description: 'Visualize your data with interactive and intuitive dashboards.' },
]

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EZ Tech</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-blue-600 transition-colors duration-300">Services</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition-colors duration-300">Our Products</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'} text-gray-900`} style={{animationDelay: '0.2s'}}>Innovative Tech Solutions for Your Business</h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'} text-gray-600`} style={{animationDelay: '0.4s'}}>EZ Tech provides cutting-edge technological solutions to transform your business and solve complex problems.</p>
            <a href="#contact" className={`btn btn-primary ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>Get Started</a>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift shine-border">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Products</h2>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift shine-border">
              <div className="flex items-center mb-4">
                <Bot size={24} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">EZ Chat</h3>
              </div>
              <p className="text-gray-600 mb-4">Experience the power of multiple LLMs in one place with EZ Chat. Access your favorite language models without individual subscriptions.</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Chat GPT 4.0 from OpenAI</li>
                <li>Claude 3.5 Sonnet from Anthropic</li>
                <li>And many more!</li>
              </ul>
              <a href="https://ezchat.up.railway.app/c/new" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Check it out</a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300" required></textarea>
              </div>
              <button type="submit" className="btn btn-secondary w-full">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 EZ Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App