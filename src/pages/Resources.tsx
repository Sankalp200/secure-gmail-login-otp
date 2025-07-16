
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Video, Download, Search, Filter, Star } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = ['All', 'Mathematics', 'Physics', 'Computer Science', 'Electronics', 'Mechanical'];

  const notes = [
    {
      id: 1,
      title: "Calculus and Differential Equations",
      subject: "Mathematics",
      semester: "2nd Semester",
      downloads: 1254,
      rating: 4.8,
      size: "2.3 MB",
      type: "PDF"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      subject: "Computer Science",
      semester: "3rd Semester",
      downloads: 2156,
      rating: 4.9,
      size: "5.1 MB",
      type: "PDF"
    },
    {
      id: 3,
      title: "Thermodynamics Fundamentals",
      subject: "Physics",
      semester: "2nd Semester",
      downloads: 876,
      rating: 4.6,
      size: "3.7 MB",
      type: "PDF"
    }
  ];

  const pyqs = [
    {
      id: 1,
      title: "Mathematics Mid-Term 2023",
      subject: "Mathematics",
      year: "2023",
      semester: "2nd Semester",
      downloads: 965,
      type: "Previous Year Question"
    },
    {
      id: 2,
      title: "CS Final Exam 2023",
      subject: "Computer Science",
      year: "2023",
      semester: "4th Semester",
      downloads: 1432,
      type: "Previous Year Question"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Linear Algebra Complete Course",
      subject: "Mathematics",
      duration: "12 hours",
      views: 45200,
      rating: 4.7,
      instructor: "Prof. Ahmed Khan"
    },
    {
      id: 2,
      title: "Object-Oriented Programming in Java",
      subject: "Computer Science",
      duration: "8 hours",
      views: 32100,
      rating: 4.8,
      instructor: "Dr. Lisa Wang"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Study Resources</h1>
        <p className="text-lg text-gray-600">Access comprehensive study materials, previous year questions, and video lectures</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search resources..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Filter className="h-4 w-4 mt-2 text-gray-400" />
          {subjects.map((subject) => (
            <Button 
              key={subject} 
              variant={subject === selectedSubject ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="notes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="pyqs">Previous Year Questions</TabsTrigger>
          <TabsTrigger value="videos">Video Lectures</TabsTrigger>
        </TabsList>

        <TabsContent value="notes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{note.subject}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{note.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                  <CardDescription>{note.semester}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{note.downloads} downloads</span>
                      <span>{note.size}</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download {note.type}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pyqs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pyqs.map((pyq) => (
              <Card key={pyq.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{pyq.subject}</Badge>
                    <Badge>{pyq.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{pyq.title}</CardTitle>
                  <CardDescription>{pyq.semester}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      {pyq.downloads} downloads
                    </div>
                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Download PYQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{video.subject}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{video.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>By {video.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{video.duration}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                    <Button className="w-full">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
