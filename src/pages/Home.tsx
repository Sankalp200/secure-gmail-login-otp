
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  Users, 
  Phone, 
  HelpCircle, 
  Crown,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: 'Study Resources',
      description: 'Access notes, previous year questions, and video lectures',
      link: '/resources',
      color: 'text-blue-600'
    },
    {
      icon: Calculator,
      title: 'SGPA Calculator',
      description: 'Calculate your semester GPA easily',
      link: '/calculator',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Group Discussion',
      description: 'Join study groups and discuss with peers',
      link: '/discussion',
      color: 'text-purple-600'
    },
    {
      icon: Phone,
      title: 'Faculty Contact',
      description: 'Get in touch with your professors',
      link: '/faculty',
      color: 'text-orange-600'
    },
    {
      icon: HelpCircle,
      title: 'Helpdesk',
      description: '24/7 support with AI chatbot assistance',
      link: '/helpdesk',
      color: 'text-red-600'
    },
    {
      icon: Crown,
      title: 'Premium Features',
      description: 'Unlock advanced tools and resources',
      link: '/premium',
      color: 'text-yellow-600'
    }
  ];

  const stats = [
    { label: 'Active Students', value: '10,000+', icon: Users },
    { label: 'Study Resources', value: '5,000+', icon: FileText },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Average Rating', value: '4.8', icon: Star }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to EduPortal
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your one-stop destination for academic excellence. Access study materials, 
          connect with peers, and achieve your educational goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resources">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/premium">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Go Premium
              <Crown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link to={feature.link}>
                <CardHeader>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Recent Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Blog Posts</CardTitle>
              <CardDescription>Stay updated with educational content</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Study Tips for Semester Exams</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Career Guidance for Students</span>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Time Management Techniques</span>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </li>
              </ul>
              <Link to="/blogs">
                <Button variant="outline" className="w-full mt-4">
                  View All Blogs
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Access frequently used features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/calculator">
                <Button variant="outline" className="w-full justify-start">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate SGPA
                </Button>
              </Link>
              <Link to="/sections">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Select Section
                </Button>
              </Link>
              <Link to="/helpdesk">
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Get Help
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
