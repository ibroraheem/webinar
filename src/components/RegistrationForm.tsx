import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('your_publishable_key');

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  plan: Yup.string().required('Please select a plan'),
});

const CheckoutForm = ({ plan, onSuccess }: { plan: string; onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (stripeError) {
        setError(stripeError.message || 'An error occurred');
        return;
      }

      // Send payment info to your backend
      const response = await axios.post('/.netlify/functions/create-payment', {
        paymentMethodId: paymentMethod.id,
        plan,
      });

      if (response.data.success) {
        onSuccess();
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Card Details
        </label>
        <div className="p-3 border rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm mb-4">{error}</div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        className={`w-full bg-[#d4af37] text-white font-bold py-2 px-4 rounded-md hover:bg-[#d4af37]/90 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

const RegistrationForm = ({ onClose }: { onClose: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSubmit = async (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#0a1f44]">Register Now</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            plan: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    className="w-full p-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Plan
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Field
                        type="radio"
                        name="plan"
                        value="classic"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFieldValue('plan', e.target.value);
                          setSelectedPlan('classic');
                        }}
                      />
                      <span>Classic Access - $1,499</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Field
                        type="radio"
                        name="plan"
                        value="vip"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFieldValue('plan', e.target.value);
                          setSelectedPlan('vip');
                        }}
                      />
                      <span>VIP Access - $2,499</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="plan"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {selectedPlan && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      plan={selectedPlan}
                      onSuccess={() => {
                        // Handle successful payment
                        console.log('Payment successful');
                        onClose();
                      }}
                    />
                  </Elements>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm; 