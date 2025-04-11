import React from 'react';
import { Award, BookOpen, Calendar, CheckCircle2, GraduationCap, Users2, Newspaper, Star, Trophy, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative bg-[#0a1f44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#d4af37]">
              CANADA BUSINESS ACQUISITION/FUNDING COHORT 1.0
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              6-WEEK PREMIUM BUSINESS COACHING CLASS
            </p>
            {/* Family Image Section */}
            <div className="mb-12">
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for family image */}
                  <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                  <img src="./images/family.jpg" alt="" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <p className="text-sm">My family of 7 starting our journey in Canada</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              ARE YOU READY TO ACQUIRE, FUND & SCALE YOUR BUSINESS FROM MILLIONS TO BILLIONS IN CANADA?
            </h2>
            <p className="text-lg mb-8">
              For the first time in history, you will be exposed to the exact STEP by STEP STRATEGIES that helped me acquire 
              successful and profitable businesses, get grants just within SIX MONTHS of arriving in Canada with my family of 7 
              as a business immigrant from Nigeria!
            </p>
            {/* Restaurant Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative h-64">
                <div className="h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  <img src="./images/rest-1.jpg" alt="" />
                </div>
              </div>
              <div className="relative h-64">
                <div className="h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  <img src="./images/rest-2.jpg" alt="" />
                </div>
              </div>
              <div className="relative h-64">
                <div className="h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  <img src="./images/rest-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Media Coverage Section */}
      <section className="py-16 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">Featured In</h2>
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

      {/* Grant Success Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Grant Success Story</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-[#d4af37]/20">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 text-[#d4af37] mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-[#046307]">Business Development Grant Recipient</h3>
                <p className="text-gray-600 mt-2">Successfully secured government funding to support business growth and expansion</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              Learn the exact strategies and techniques used to secure business grants and scale operations in Canada. 
              Join the cohort to master the art of grant writing and business funding.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Why I Created This Business Cohort?</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed">
              Africans, especially Nigerians, are done with the 9-5 grind, shifts and unending job search in Canada. 
              They're not just dreaming of business ownership in Canada — they're searching for a real roadmap.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4">
              But most of what they find is recycled, copy and paste ChatGPT contents from people who've never done the work.
              That's why I created this no-fluff, high-impact cohort for entrepreneurs ready to acquire, scale, and fund 
              businesses in Canada — with someone who's actually done it, not someone who Googled it.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4">
              If you want real results and a proven path forward, welcome. You're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Why am I the best to guide you?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Achievement 
              icon={<Globe className="w-8 h-8 text-[#d4af37]" />}
              text="Established 44 Franchises across Nigeria, Middle East, Europe for Food Spices and international export"
            />
            <Achievement 
              icon={<Star className="w-8 h-8 text-[#d4af37]" />}
              text="Bought a Chinese restaurant 6 months after arriving in Canada"
            />
            <Achievement 
              icon={<Trophy className="w-8 h-8 text-[#d4af37]" />}
              text="Getting Funding by winning grants to support business growth in Canada"
            />
            <Achievement 
              icon={<Newspaper className="w-8 h-8 text-[#d4af37]" />}
              text="Featured in both local and national newspapers in Canada"
            />
            <Achievement 
              icon={<Award className="w-8 h-8 text-[#d4af37]" />}
              text="Recognized by Royal Bank of Canada as a Woman Entrepreneur to Watch"
            />
            <Achievement 
              icon={<GraduationCap className="w-8 h-8 text-[#d4af37]" />}
              text="Building a thriving enterprise in Canada through strategic acquisitions"
            />
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-16 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">The Module Outline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard 
              week="Week 1"
              title="Business Acquisition Foundation"
              topics={[
                "Why Growth Through Acquisition?",
                "The Lifecycle of a Growth-Focused Acquisition",
                "DNA to Lead & Grow an Acquired Business"
              ]}
            />
            <ModuleCard 
              week="Week 2"
              title="Targeting the Right Business"
              topics={[
                "Defining Your Acquisition Criteria",
                "Industry Selection & Market Trends",
                "Business Features That Align With Your Vision"
              ]}
            />
            <ModuleCard 
              week="Week 3"
              title="Deal Sourcing & Due Diligence"
              topics={[
                "How to Position Yourself as the Ideal Buyer",
                "Sourcing On-Market vs. Off-Market Deals",
                "Business Valuation Techniques"
              ]}
            />
            <ModuleCard 
              week="Week 4"
              title="Negotiation & Financing"
              topics={[
                "How to Use Professionals at the Offer Stage",
                "Present & Negotiate Your Offer Technique",
                "Best financing options for scaling"
              ]}
            />
            <ModuleCard 
              week="Week 5"
              title="Sealing the Deal & Onboarding"
              topics={[
                "Closing Checklist & Final Transition",
                "Post-Acquisition Onboarding Process",
                "Operational Handover & Team Integration"
              ]}
            />
            <ModuleCard 
              week="Week 6"
              title="Grant Funding Accelerator"
              topics={[
                "Crafting winning pitches for business grants",
                "Grant Business Readiness",
                "Writing a Winning Grant Proposal"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Who Should Attend?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AttendeeCard 
              icon={<Users2 className="w-8 h-8 text-[#d4af37]" />}
              title="Side Hustlers and Aspiring Entrepreneurs"
              description="Individuals looking to skip the startup phase and buy their way into business ownership."
            />
            <AttendeeCard 
              icon={<BookOpen className="w-8 h-8 text-[#d4af37]" />}
              title="Corporate Professionals"
              description="9-5 workers planning an exit strategy to gain freedom and ownership through acquisitions."
            />
            <AttendeeCard 
              icon={<Globe className="w-8 h-8 text-[#d4af37]" />}
              title="Immigration Pathway Seekers"
              description="Individuals exploring business acquisition as a route to permanent residency in Canada."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37]">Choose Your Preferred Access Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Standard Access"
              price="999"
              features={[
                "Full Access to 6-Week Business Acquisition Coaching",
                "Weekly Live Group Sessions",
                "Downloadable Business Acquisition Templates",
                "Actionable Workbooks for Each Week",
                "Access to Replays for 60 Days",
                "Bonus Module: Franchise Your Business"
              ]}
              priceId="standard_access"
            />
            <PricingCard 
              title="VIP Access"
              price="1299"
              featured={true}
              features={[
                "Everything in Standard Access",
                "1:1 Strategy Call (90 mins) with the Coach",
                "Access to Replays for 12 months",
                "Bonus Module: Starting a Bookkeeping Business",
                "Premium Templates & Due Diligence Checklist",
                "Priority Access to Q&A",
                "Certificate of Completion"
              ]}
              priceId="vip_access"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#046307]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <FaqItem 
              question="What exactly is the Business Cohort?"
              answer="The Business Acquisition Cohort is an exclusive six-week, hands-on, live training program tailored for entrepreneurs, business owners, and professionals where I guide you through the entire process of acquiring, scaling, and funding a business in Canada."
            />
            <FaqItem 
              question="Is there any prior experience needed to join?"
              answer="No prior business acquisition experience is required. Whether you're completely new to buying businesses or you have some experience, this cohort will give you the tools and strategies to confidently acquire your first business."
            />
            <FaqItem 
              question="How will the live classes work?"
              answer="The program is live and interactive, meaning you'll be engaging with me directly, seeing live negotiations, and walking through real case studies. Each week will focus on a different aspect of the business acquisition process, with plenty of opportunities for questions and feedback."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f44] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Business Acquisition Cohort. All rights reserved.</p>
        </div>
      </footer>
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

function AttendeeCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-[#d4af37]/20">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, featured = false, priceId }: { 
  title: string; 
  price: string; 
  features: string[];
  featured?: boolean;
  priceId: string;
}) {
  const handleEnrollClick = async () => {
    // Stripe integration will be added here
    console.log(`Enrolling in ${title} plan`);
  };

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${featured ? 'border-2 border-[#d4af37]' : ''}`}>
      <div className={`px-6 py-8 ${featured ? 'bg-white/10' : 'bg-white/5'}`}>
        <h3 className="text-2xl font-bold text-center mb-4 text-white">{title}</h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-[#d4af37]">${price}</span>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] mr-2 flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleEnrollClick}
          className={`w-full mt-8 px-6 py-3 rounded-md font-semibold text-white 
          ${featured ? 'bg-[#046307] hover:bg-[#046307]/90' : 'bg-[#0a1f44] hover:bg-[#0a1f44]/90'}`}
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