
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, MapPin, Clock, Search, Filter, MessageSquare } from 'lucide-react';

const FacultyContact = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Computer Science', 'Electronics', 'Mechanical', 'Mathematics', 'Physics'];

  const faculty = [
    {
      id: '1',
      name: 'Dr. John Smith',
      designation: 'Professor & Head',
      department: 'Computer Science',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 'john.smith@university.edu',
      phone: '+1 234 567 8901',
      office: 'CS Block, Room 301',
      officeHours: 'Mon-Fri: 10:00 AM - 12:00 PM',
      avatar: '',
      isAvailable: true,
      courses: ['AI & ML', 'Data Mining', 'Advanced Algorithms']
    },
    {
      id: '2',
      name: 'Prof. Sarah Johnson',
      designation: 'Associate Professor',
      department: 'Computer Science',
      specialization: 'Software Engineering, Database Systems',
      email: 'sarah.johnson@university.edu',
      phone: '+1 234 567 8902',
      office: 'CS Block, Room 302',
      officeHours: 'Tue-Thu: 2:00 PM - 4:00 PM',
      avatar: '',
      isAvailable: false,
      courses: ['Software Engineering', 'Database Management', 'Web Development']
    },
    {
      id: '3',
      name: 'Dr. Mike Chen',
      designation: 'Assistant Professor',
      department: 'Electronics',
      specialization: 'Digital Signal Processing, Embedded Systems',
      email: 'mike.chen@university.edu',
      phone: '+1 234 567 8903',
      office: 'EC Block, Room 201',
      officeHours: 'Mon-Wed: 11:00 AM - 1:00 PM',
      avatar: '',
      isAvailable: true,
      courses: ['Digital Electronics', 'Microprocessors', 'Signal Processing']
    },
    {
      id: '4',
      name: 'Prof. Emily Davis',
      designation: 'Professor',
      department: 'Mathematics',
      specialization: 'Applied Mathematics, Statistics',
      email: 'emily.davis@university.edu',
      phone: '+1 234 567 8904',
      office: 'Math Block, Room 101',
      officeHours: 'Mon-Fri: 9:00 AM - 11:00 AM',
      avatar: '',
      isAvailable: true,
      courses: ['Calculus', 'Linear Algebra', 'Probability & Statistics']
    }
  ];

  const filteredFaculty = faculty.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Faculty Contact Directory</h1>
        <p className="text-lg text-gray-600">Connect with faculty members for academic guidance and support</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search by name, specialization, or courses..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Filter className="h-4 w-4 mt-2 text-gray-400" />
          {departments.map((dept) => (
            <Button 
              key={dept} 
              variant={dept === selectedDepartment ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </Button>
          ))}
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredFaculty.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.designation}</CardDescription>
                  </div>
                </div>
                <Badge variant={member.isAvailable ? "default" : "secondary"}>
                  {member.isAvailable ? "Available" : "Busy"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge variant="outline" className="mb-2">{member.department}</Badge>
                <p className="text-sm text-gray-600">{member.specialization}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{member.office}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>{member.officeHours}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Courses Teaching:</p>
                <div className="flex flex-wrap gap-1">
                  {member.courses.map((course, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Contact Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Quick Contact Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <ul className="space-y-1 text-sm">
                <li>• Please respect the scheduled office hours</li>
                <li>• For urgent matters, send an email first</li>
                <li>• Book appointments for extended discussions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Communication Etiquette</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use your official university email</li>
                <li>• Include subject line and student ID</li>
                <li>• Be clear and concise in your communication</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacultyContact;
