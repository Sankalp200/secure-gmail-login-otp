
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap, Shield, Download, Users, VideoIcon } from 'lucide-react';

const Premium = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started',
      features: [
        'Access to basic study materials',
        'SGPA Calculator',
        'Join up to 3 study groups',
        'Basic chatbot support',
        'Community forums access'
      ],
      limitations: [
        'Limited downloads per month',
        'No premium video content',
        'Standard support only'
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'Best for active students',
      features: [
        'Unlimited access to all study materials',
        'Premium video lectures & tutorials',
        'Join unlimited study groups',
        'Priority chatbot & human support',
        'Advanced SGPA tracking & analytics',
        'Download materials for offline use',
        'Ad-free experience',
        'Early access to new features'
      ],
      limitations: [],
      buttonText: 'Upgrade to Premium',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Premium+',
      price: '$19.99',
      period: '/month',
      description: 'For serious academic achievers',
      features: [
        'Everything in Premium',
        'One-on-one tutoring sessions',
        'Personalized study plans',
        'Career guidance & mentorship',
        'Industry expert webinars',
        'Certification courses access',
        'Priority faculty connections',
        'Custom study group creation'
      ],
      limitations: [],
      buttonText: 'Go Premium+',
      buttonVariant: 'default' as const,
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: Download,
      title: 'Unlimited Downloads',
      description: 'Download all study materials, notes, and previous year questions without limits'
    },
    {
      icon: VideoIcon,
      title: 'Premium Video Content',
      description: 'Access exclusive video lectures from top educators and industry experts'
    },
    {
      icon: Users,
      title: 'Advanced Collaboration',
      description: 'Create private study groups and collaborate with premium features'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: 'Get instant help with priority access to our support team'
    },
    {
      icon: Shield,
      title: 'Ad-Free Experience',
      description: 'Focus on your studies without any distractions from advertisements'
    },
    {
      icon: Star,
      title: 'Analytics & Insights',
      description: 'Track your academic progress with detailed analytics and insights'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Computer Science Student',
      content: 'Premium subscription helped me access quality study materials and improved my GPA significantly!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Electronics Engineering',
      content: 'The video lectures and one-on-one tutoring in Premium+ made complex topics much easier to understand.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Mathematics Major',
      content: 'Best investment for my education. The analytics feature helps me track my progress effectively.',
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="h-8 w-8 text-yellow-600" />
          <h1 className="text-4xl font-bold">Premium Features</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Unlock your full academic potential with our premium plans designed for serious students
        </p>
      </div>

      {/* Pricing Plans */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center gap-2 text-gray-500">
                      <span className="w-4 h-4 text-center text-gray-400">×</span>
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  disabled={plan.name === 'Basic'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Premium Features Showcase */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Go Premium?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. You'll continue to have access 
                to premium features until the end of your billing cycle.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is there a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Yes! New users get a 7-day free trial of Premium features. No credit card required 
                to start your trial.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express), 
                PayPal, and digital wallets like Apple Pay and Google Pay.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. 
                Changes will be reflected in your next billing cycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <Crown className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Academic Success?</h3>
            <p className="text-xl mb-6">Join thousands of students who have upgraded their learning experience</p>
            <Button size="lg" variant="secondary" className="text-primary">
              Start Your Free Trial
            </Button>
            <p className="text-sm mt-4 opacity-90">No credit card required • Cancel anytime</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Premium;
