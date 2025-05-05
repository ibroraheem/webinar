import React, { useState } from 'react';
import { Award, CheckCircle2, GraduationCap, Newspaper, Star, Trophy, Globe } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative bg-[#0a1f44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#d4af37]">
              GLOBAL BUSINESS ACQUISITION
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              (6-WEEK PREMIUM BUSINESS COACHING CLASS)
            </p>
            {/* Family Image Section */}
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src="./images/family.jpg" alt="My family of 7 starting our journey in Canada" className="w-full h-auto" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <p className="text-sm">My family of 7 starting our journey in Canada</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              ARE YOU READY TO ACQUIRE, FUND & SCALE YOUR BUSINESS IN CANADA?
            </h2>
            {/* Restaurant Image Section */}
            <div className="mb-12">
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src="./images/rest-1.jpg" alt="Restaurant 1" />
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src="./images/rest-2.jpg" alt="Restaurant 2" />
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src="./images/rest-3.jpg" alt="Restaurant 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why I Created This Business Cohort Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Why I Created This Business Cohort?</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed">
              Africans, especially Nigerians, are done with the 9-5 grind, shifts and unending job search in Canada. They're not just dreaming of business ownership in Canada — they're searching for a real roadmap.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4">
              But most of what they find is recycled, copy and paste ChatGPT contents from people who've never done the work. That's why I created this no-fluff, high-impact cohort for entrepreneurs ready to acquire, scale, and fund businesses in Canada — with someone who's actually done it, not someone who Googled it.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4">
              If you want real results and a proven path forward, welcome. You're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Why is the Business Cohort for 6 weeks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Why is the Business Cohort for 6 weeks?</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed">
              You can't learn how to buy, build, and fund a business — the kind that creates lasting wealth — in a day or two bootcamp. This isn't theory or shortcuts. This is a hands-on, step-by-step experience where I guide you like family, helping you avoid costly mistakes and blind risks. Over six focused weeks, we'll eliminate confusion, reduce risk, and build your confidence — from finding the right business to closing the deal and funding. You'll watch me negotiate, assess, and execute deals in real-time. This is where you stop guessing and start doing. I've compressed everything I learned in six months to buy a successful Chinese restaurant into a six-week live cohort — because I want you to succeed. You'll get real-time guidance, accountability, and access to my exact strategies. You'll learn by doing, and you won't have to do it alone.
            </p>
          </div>
        </div>
      </section>

      {/* Why am I the best to guide you Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Why am I the best to guide you?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Achievement icon={<Globe className="w-8 h-8 text-[#d4af37]" />} text="I established 44 Franchises across Nigeria, Middle East, Europe for our Food Spices and international export" />
            <Achievement icon={<Star className="w-8 h-8 text-[#d4af37]" />} text="Bought a Chinese restaurant 6 months after arriving in Canada" />
            <Achievement icon={<Trophy className="w-8 h-8 text-[#d4af37]" />} text="Getting Funding by winning grants to support my business growth in Canada" />
            <Achievement icon={<Newspaper className="w-8 h-8 text-[#d4af37]" />} text="Been featured in both local and national newspapers in Canada" />
            <Achievement icon={<Award className="w-8 h-8 text-[#d4af37]" />} text="Been recognized as a Woman Entrepreneur to Watch Out For by the top leading bank in Canada- Royal Bank of Canada" />
            <Achievement icon={<GraduationCap className="w-8 h-8 text-[#d4af37]" />} text="Interviewed few times by CBC News Manitoba" />
            <Achievement icon={<Globe className="w-8 h-8 text-[#d4af37]" />} text="Expanding by building the Franchise model of my Chinese Restaurant" />
            <Achievement icon={<Star className="w-8 h-8 text-[#d4af37]" />} text="Acquiring more profitable and reputable businesses in Canada" />
            <Achievement icon={<Trophy className="w-8 h-8 text-[#d4af37]" />} text="Building a thriving enterprise in my new home country" />
          </div>
        </div>
      </section>

      {/* Grant, Awards, Newspaper Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Grant, Awards, Newspaper</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Newspaper className="w-8 h-8 text-[#d4af37] mr-3" />
                <h3 className="text-xl font-semibold">The Free Press</h3>
              </div>
              <p className="text-gray-200">Featured story on successful immigrant entrepreneurship in Canada</p>
              <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <img src="./images/free-press.jpg" alt="" />
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Newspaper className="w-8 h-8 text-[#d4af37] mr-3" />
                <h3 className="text-xl font-semibold">Canadian SME</h3>
              </div>
              <p className="text-gray-200">Spotlight on innovative business acquisition strategies</p>
              <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <img src="./images/canadian-sme.jpg" alt="" />
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-[#d4af37] mr-3" />
                <h3 className="text-xl font-semibold">RBC Recognition</h3>
              </div>
              <p className="text-gray-200">Nominated for RBC Canadian Women Entrepreneur Awards 2025</p>
              <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <img src="./images/award-nominee.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Outline Section */}
      <section className="py-16 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">The Module Outline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard week="Week 1" title="Business Acquisition Foundation" topics={["Why Growth Through Acquisition?", "The Lifecycle of a Growth-Focused Acquisition", "DNA to Lead & Grow an Acquired Business"]} />
            <ModuleCard week="Week 2" title="Targeting the Right Business" topics={["Defining Your Acquisition Criteria", "Industry Selection & Market Trends", "Business Features That Align With Your Vision", "Building Your Seller Inquiry Strategy"]} />
            <ModuleCard week="Week 3" title="Deal Sourcing & Due Diligence" topics={["How to Position Yourself as the Ideal Buyer", "Sourcing On-Market vs. Off-Market Deals", "Seller Psychology & Communication Tactics", "Business Valuation and Automation Techniques", "Exclusive Business Background Check Strategies"]} />
            <ModuleCard week="Week 4" title="Art of Deal Negotiation" topics={["Do I need a Professional?", "How to present winning offer", "Learn Powerful Negotiation skill", "Seller Psychology Analysis"]} />
            <ModuleCard week="Week 5" title="Deal Financing" topics={["Learn ways to Finance a Deal Smartly & Interest Free", "Debt vs Equity", "Strategic ways of Seller Financing", "Sweat equity vs Debt"]} />
            <ModuleCard week="Week 6" title="Deal Possession Day" topics={["Use of Escrow during sealing", "Deep dive into closing: Products and Services", "Operational handover", "Team Integration", "Launching of Business"]} />
            <ModuleCard week="Bonus Module" title="Accessing Grant Funding" topics={["Crafting a winning pitch for different business grants", "Grant Business Readiness", "Finding the Right and Suitable Grants", "Writing a Winning Grant Proposal"]} />
            <ModuleCard week="Bonus Module" title="Franchising Your Business" topics={["Developing Franchise Systems & Manuals", "Franchise Financial Model", "Attracting Right Franchisees & onboarding", "Supporting & Scaling Your Franchise"]} />
            <ModuleCard week="Bonus Module" title="Start Bookkeeping Business" topics={["Introduction to Bookkeeping & the Opportunity", "Finding Clients", "Getting Paid by the first 30 Clients within 7 days", "Growing & Scaling Bookkeeping Business"]} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">Choose Your Preferred Access Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Classic Access" 
              price="1,499" 
              features={[
                "Full Access to the 6 Full Module Outline & 1 Bonus Module",
                "Weekly Live Group Sessions for 6 weeks",
                "Downloadable Business Acquisition Templates & Worksheets",
                "Actionable Workbooks for Each Week",
                "Access to Replays",
                "Access to Business networks and contacts",
                "Bonus Module Grant Funding Accelerator"
              ]} 
              onEnroll={() => setShowRegistration(true)}
            />
            <PricingCard 
              title="VIP Access" 
              price="2,499" 
              featured={true} 
              features={[
                "Full Access to the 6 Full Module Outline & 3 Bonus Modules",
                "Weekly Live Group Sessions for 6 weeks",
                "Downloadable Business Acquisition Templates & Worksheets",
                "Actionable Workbooks for Each Week",
                "Access to Replays",
                "Access to Business networks and contacts",
                "Bonus Module Grant Funding Accelerator",
                "Bonus Module: Starting a Bookkeeping Business",
                "Bonus: Setting up Billion Dollar Franchise Business"
              ]} 
              onEnroll={() => setShowRegistration(true)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <FaqItem question="Who should attend?" answer="Side Hustlers and Aspiring Entrepreneurs, Corporate Professionals and Executives, Business Owners and Entrepreneurs, Investors & Wealth Builders, Immigration Pathway Seekers, Consultants & Advisors." />
            <FaqItem question="What exactly is the Business Cohort?" answer="The Business Acquisition Cohort is an exclusive six-week, hands-on, live training program tailored for entrepreneurs, business owners, and professionals where I guide you through the entire process of acquiring, scaling, and funding a business in Canada. You'll learn from my personal experience and see live negotiations, deal assessments, and business acquisitions." />
            <FaqItem question="How can I attend the Cohort?" answer="To attend, simply buy your ticket online via Click Here. Once registered, you'll receive a confirmation email with all the details you need." />
            <FaqItem question="Can I transfer my ticket?" answer="Tickets are transferable. Kindly send details of the new attendees to info@mintrite.com before the cohort begins." />
            <FaqItem question="Can I upgrade my ticket?" answer="Yes, ticket upgrades are possible before the event day. To upgrade, send a mail to info@mintrite.com." />
            <FaqItem question="Is there any prior experience needed to join?" answer="No prior business acquisition experience is required. Whether you're completely new to buying businesses or you have some experience, this cohort will give you the tools and strategies to confidently acquire your first business." />
            <FaqItem question="How will the live classes work?" answer="The program is live and interactive, meaning you'll be engaging with me directly, seeing live negotiations, and walking through real case studies. Each week will focus on a different aspect of the business acquisition process, with plenty of opportunities for questions and feedback." />
            <FaqItem question="How is this different from other business courses or bootcamps?" answer="This cohort is built on real-world experience, not theory. I'm not just teaching — you'll see live negotiations, real strategies, and practical steps that I used to acquire my first successful business in Canada. It's designed to take you from confusion to execution in a structured and supportive environment." />
            <FaqItem question="How do I sign up?" answer="You can Click Here to register." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f44] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Business Acquisition Cohort. All rights reserved.</p>
        </div>
      </footer>

      {showRegistration && (
        <RegistrationForm onClose={() => setShowRegistration(false)} />
      )}
    </div>
  );
}

function Achievement({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-[#d4af37]/20">
      <div className="flex-shrink-0">{icon}</div>
      <p className="ml-4 text-gray-800">{text}</p>
    </div>
  );
}

function ModuleCard({ week, title, topics }: { week: string; title: string; topics: string[] }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#d4af37]/20">
      <h3 className="text-[#d4af37] font-bold mb-2">{week}</h3>
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-[#d4af37] mr-2 flex-shrink-0" />
            <span className="text-gray-200">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  features, 
  featured = false,
  onEnroll 
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
  onEnroll: () => void;
}) {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${featured ? 'border-2 border-[#d4af37] bg-gradient-to-br from-[#0a1f44] to-[#046307]' : 'border-2 border-[#0a1f44] bg-gradient-to-br from-[#0a1f44] to-[#1a3f64]'}`}>
      <div className="px-6 py-8">
        <h3 className={`text-2xl font-bold text-center mb-4 ${featured ? 'text-[#d4af37]' : 'text-white'}`}>{title}</h3>
        <div className="text-center mb-6">
          <span className={`text-4xl font-bold ${featured ? 'text-[#d4af37]' : 'text-white'}`}>${price}</span>
          <p className="text-sm text-gray-300 mt-2">{featured ? 'Early birds: $2,499 | Late birds: $8,999' : 'Early birds: $1,499 | Late birds: $4,999'}</p>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className={`w-5 h-5 ${featured ? 'text-[#d4af37]' : 'text-white'} mr-2 flex-shrink-0`} />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={onEnroll}
          className={`w-full mt-8 px-6 py-3 rounded-md font-semibold ${
            featured 
            ? 'bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#0a1f44]' 
            : 'bg-white hover:bg-white/90 text-[#0a1f44]'
          }`}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-[#d4af37]/20">
      <h3 className="text-xl font-semibold mb-3 text-[#046307]">{question}</h3>
      <p className="text-gray-800">{answer}</p>
    </div>
  );
}

export default App;