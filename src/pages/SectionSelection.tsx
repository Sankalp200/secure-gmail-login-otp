
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Clock, BookOpen } from 'lucide-react';

const SectionSelection = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'sec-a',
      name: 'Section A',
      branch: 'Computer Science',
      semester: '4th Semester',
      strength: 60,
      timing: '9:00 AM - 4:00 PM',
      classroom: 'Room 301, CS Block',
      subjects: ['Data Structures', 'Computer Networks', 'Operating Systems', 'Software Engineering'],
      coordinator: 'Dr. John Smith'
    },
    {
      id: 'sec-b',
      name: 'Section B',
      branch: 'Computer Science',
      semester: '4th Semester',
      strength: 58,
      timing: '10:00 AM - 5:00 PM',
      classroom: 'Room 302, CS Block',
      subjects: ['Data Structures', 'Computer Networks', 'Operating Systems', 'Software Engineering'],
      coordinator: 'Prof. Sarah Johnson'
    },
    {
      id: 'sec-c',
      name: 'Section C',
      branch: 'Electronics',
      semester: '3rd Semester',
      strength: 55,
      timing: '9:30 AM - 4:30 PM',
      classroom: 'Room 201, EC Block',
      subjects: ['Digital Electronics', 'Circuit Analysis', 'Signals & Systems', 'Microprocessors'],
      coordinator: 'Dr. Mike Chen'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Section Selection</h1>
        <p className="text-lg text-gray-600">Choose your preferred section for the current semester</p>
      </div>

      {selectedSection && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✓ You have selected {sections.find(s => s.id === selectedSection)?.name}. 
            You can change your selection until the deadline.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {sections.map((section) => (
          <Card 
            key={section.id} 
            className={`hover:shadow-lg transition-all cursor-pointer ${
              selectedSection === section.id ? 'ring-2 ring-primary border-primary' : ''
            }`}
            onClick={() => setSelectedSection(section.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{section.name}</CardTitle>
                {selectedSection === section.id && (
                  <Badge className="bg-green-100 text-green-800">Selected</Badge>
                )}
              </div>
              <CardDescription className="text-base">
                {section.branch} - {section.semester}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{section.strength} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{section.timing}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{section.classroom}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Subjects:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {section.subjects.map((subject, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Coordinator:</span> {section.coordinator}
                </p>
              </div>

              <Button 
                className={`w-full ${selectedSection === section.id ? 'bg-green-600 hover:bg-green-700' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSection(section.id);
                }}
              >
                {selectedSection === section.id ? 'Selected' : 'Select Section'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Information */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Important Information</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700">
          <ul className="space-y-2 list-disc list-inside">
            <li>Section selection deadline: March 31, 2024</li>
            <li>You can change your selection multiple times before the deadline</li>
            <li>Contact the academic office for any queries regarding section changes</li>
            <li>Timetable and room allocations may be subject to change</li>
            <li>Please ensure you meet the prerequisite requirements for your selected section</li>
          </ul>
        </CardContent>
      </Card>

      {selectedSection && (
        <div className="mt-6 text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Confirm Selection
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionSelection;
