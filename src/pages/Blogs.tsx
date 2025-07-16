
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Effective Study Techniques for Engineering Students",
      excerpt: "Discover proven methods to improve your learning efficiency and retention.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Study Tips",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Career Opportunities in Computer Science",
      excerpt: "Explore the diverse career paths available for CS graduates.",
      author: "Prof. Mike Chen",
      date: "March 12, 2024",
      category: "Career",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 3,
      title: "Time Management for Students",
      excerpt: "Learn how to balance academics, projects, and personal life effectively.",
      author: "Dr. Emily Davis",
      date: "March 10, 2024",
      category: "Productivity",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Study Tips", "Career", "Productivity", "Technology", "Research"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Educational Blogs</h1>
        <p className="text-lg text-gray-600">Stay updated with the latest insights and tips for academic success</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search blog posts..." 
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === "All" ? "default" : "outline"} 
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <Card key={post.id} className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Featured</Badge>
              <Badge variant="outline">{post.category}</Badge>
            </div>
            <CardTitle className="text-2xl">{post.title}</CardTitle>
            <CardDescription className="text-base">{post.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
              <Button>
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Regular Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.filter(post => !post.featured).map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{post.readTime}</span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
