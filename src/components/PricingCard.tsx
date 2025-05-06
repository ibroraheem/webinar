import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  priceId: string;
}

export default function PricingCard({ 
  title, 
  price, 
  features, 
  featured = false,
  priceId
}: PricingCardProps) {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);
      
      // Create a Checkout Session
      const response = await axios.post('/api/stripe', {
        priceId,
        email: '', // You might want to collect this before payment
      });

      const { sessionId } = response.data;

      // Redirect to Checkout
      const result = await stripe?.redirectToCheckout({
        sessionId,
      });

      if (result?.error) {
        console.error(result.error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${
      featured ? 'border-2 border-[#d4af37] bg-gradient-to-br from-[#0a1f44] to-[#046307]' 
      : 'border-2 border-[#0a1f44] bg-gradient-to-br from-[#0a1f44] to-[#1a3f64]'
    }`}>
      <div className="px-6 py-8">
        <h3 className={`text-2xl font-bold text-center mb-4 ${
          featured ? 'text-[#d4af37]' : 'text-white'
        }`}>
          {title}
        </h3>
        <div className="text-center mb-6">
          <span className={`text-4xl font-bold ${
            featured ? 'text-[#d4af37]' : 'text-white'
          }`}>
            ${price}
          </span>
          <p className="text-sm text-gray-300 mt-2">
            {featured ? 'Early birds: $2,499 | Late birds: $8,999' 
            : 'Early birds: $1,499 | Late birds: $4,999'}
          </p>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className={`w-5 h-5 ${
                featured ? 'text-[#d4af37]' : 'text-white'
              } mr-2 flex-shrink-0`} />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleEnroll}
          disabled={loading}
          className={`w-full mt-8 px-6 py-3 rounded-md font-semibold transition-all ${
            featured 
              ? 'bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#0a1f44]' 
              : 'bg-white hover:bg-white/90 text-[#0a1f44]'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Processing...' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
} 