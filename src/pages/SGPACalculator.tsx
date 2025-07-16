
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Calculator, RotateCcw } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const SGPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: '', credits: 0, grade: '' }
  ]);
  const [sgpa, setSGPA] = useState<number | null>(null);

  const gradePoints: { [key: string]: number } = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C+': 6,
    'C': 5,
    'D': 4,
    'F': 0
  };

  const addSubject = () => {
    const newId = (subjects.length + 1).toString();
    setSubjects([...subjects, { id: newId, name: '', credits: 0, grade: '' }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (const subject of subjects) {
      if (subject.grade && subject.credits > 0) {
        totalCredits += subject.credits;
        totalGradePoints += gradePoints[subject.grade] * subject.credits;
      }
    }

    if (totalCredits > 0) {
      setSGPA(Number((totalGradePoints / totalCredits).toFixed(2)));
    }
  };

  const resetCalculator = () => {
    setSubjects([{ id: '1', name: '', credits: 0, grade: '' }]);
    setSGPA(null);
  };

  const getSGPAColor = (sgpa: number) => {
    if (sgpa >= 9) return 'text-green-600';
    if (sgpa >= 8) return 'text-blue-600';
    if (sgpa >= 7) return 'text-yellow-600';
    if (sgpa >= 6) return 'text-orange-600';
    return 'text-red-600';
  };

  const getSGPAGrade = (sgpa: number) => {
    if (sgpa >= 9) return 'Excellent';
    if (sgpa >= 8) return 'Very Good';
    if (sgpa >= 7) return 'Good';
    if (sgpa >= 6) return 'Satisfactory';
    if (sgpa >= 5) return 'Pass';
    return 'Fail';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">SGPA Calculator</h1>
        <p className="text-lg text-gray-600">Calculate your Semester Grade Point Average easily</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Subject Details
              </CardTitle>
              <CardDescription>
                Enter your subjects, credits, and grades to calculate SGPA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                  <div>
                    <Label htmlFor={`subject-${subject.id}`}>Subject Name</Label>
                    <Input
                      id={`subject-${subject.id}`}
                      placeholder="e.g., Mathematics"
                      value={subject.name}
                      onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`credits-${subject.id}`}>Credits</Label>
                    <Input
                      id={`credits-${subject.id}`}
                      type="number"
                      min="1"
                      max="6"
                      placeholder="Credits"
                      value={subject.credits || ''}
                      onChange={(e) => updateSubject(subject.id, 'credits', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`grade-${subject.id}`}>Grade</Label>
                    <Select
                      value={subject.grade}
                      onValueChange={(value) => updateSubject(subject.id, 'grade', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(gradePoints).map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade} ({gradePoints[grade]} points)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeSubject(subject.id)}
                      disabled={subjects.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={addSubject} variant="outline" className="flex-1">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Subject
                </Button>
                <Button onClick={calculateSGPA} className="flex-1">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate SGPA
                </Button>
                <Button onClick={resetCalculator} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* SGPA Result */}
          <Card>
            <CardHeader>
              <CardTitle>Your SGPA</CardTitle>
            </CardHeader>
            <CardContent>
              {sgpa !== null ? (
                <div className="text-center space-y-4">
                  <div className={`text-4xl font-bold ${getSGPAColor(sgpa)}`}>
                    {sgpa}
                  </div>
                  <Badge className={`text-lg px-4 py-2 ${getSGPAColor(sgpa)}`}>
                    {getSGPAGrade(sgpa)}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    Out of 10.0
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter subject details and click calculate to see your SGPA</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Grade Scale */}
          <Card>
            <CardHeader>
              <CardTitle>Grade Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(gradePoints).map(([grade, points]) => (
                  <div key={grade} className="flex justify-between items-center py-1">
                    <span className="font-medium">{grade}</span>
                    <span className="text-gray-600">{points} points</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SGPA = Total Grade Points / Total Credits</li>
                <li>• Aim for consistent performance across all subjects</li>
                <li>• Focus more on high-credit subjects</li>
                <li>• Track your progress semester by semester</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SGPACalculator;
