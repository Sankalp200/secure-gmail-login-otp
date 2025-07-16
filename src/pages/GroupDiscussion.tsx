
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Users, MessageCircle, Plus, Search, Clock, User } from 'lucide-react';

const GroupDiscussion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const groups = [
    {
      id: '1',
      name: 'Data Structures Study Group',
      subject: 'Computer Science',
      members: 15,
      activeNow: 3,
      description: 'Weekly discussions on algorithms and data structures',
      lastMessage: '2 hours ago',
      isJoined: true
    },
    {
      id: '2',
      name: 'Mathematics Problem Solving',
      subject: 'Mathematics',
      members: 22,
      activeNow: 7,
      description: 'Solve complex math problems together',
      lastMessage: '1 hour ago',
      isJoined: false
    },
    {
      id: '3',
      name: 'Project Collaboration Hub',
      subject: 'General',
      members: 8,
      activeNow: 2,
      description: 'Find teammates for academic projects',
      lastMessage: '30 minutes ago',
      isJoined: true
    }
  ];

  const messages = [
    {
      id: '1',
      user: 'Alice Johnson',
      avatar: '',
      message: 'Can someone explain the time complexity of merge sort?',
      time: '2:30 PM',
      replies: 3
    },
    {
      id: '2',
      user: 'Bob Smith',
      avatar: '',
      message: 'Sure! Merge sort has O(n log n) time complexity in all cases.',
      time: '2:32 PM',
      replies: 0
    },
    {
      id: '3',
      user: 'Carol Davis',
      avatar: '',
      message: 'I have some great resources on sorting algorithms. Let me share them.',
      time: '2:35 PM',
      replies: 1
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Group Discussion</h1>
        <p className="text-lg text-gray-600">Join study groups and collaborate with your peers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Groups Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Groups
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search groups..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Group
              </Button>
              
              <div className="space-y-3">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedGroup === group.id 
                        ? 'bg-primary/10 border border-primary' 
                        : 'hover:bg-gray-50 border border-gray-200'
                    }`}
                    onClick={() => setSelectedGroup(group.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-sm">{group.name}</h3>
                      {group.isJoined && (
                        <Badge variant="secondary" className="text-xs">Joined</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{group.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{group.members} members</span>
                      <span>{group.activeNow} active</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {group.lastMessage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Discussion Area */}
        <div className="lg:col-span-3">
          {selectedGroup ? (
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      {groups.find(g => g.id === selectedGroup)?.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span>{groups.find(g => g.id === selectedGroup)?.members} members</span>
                      <span>{groups.find(g => g.id === selectedGroup)?.activeNow} active now</span>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {!groups.find(g => g.id === selectedGroup)?.isJoined && (
                      <Button size="sm">Join Group</Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Members
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {message.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{message.user}</span>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{message.message}</p>
                      {message.replies > 0 && (
                        <Button variant="ghost" size="sm" className="mt-1 h-6 px-2 text-xs">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {message.replies} replies
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
              
              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Type your message..." 
                    className="min-h-[60px] resize-none"
                  />
                  <Button className="self-end">Send</Button>
                </div>
              </div>
            </Card>
          ) : (
            /* Welcome Screen */
            <Card className="h-[600px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <Users className="h-16 w-16 mx-auto text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-600">Welcome to Group Discussions</h3>
                <p className="text-gray-500 max-w-md">
                  Select a study group from the sidebar to start participating in discussions, 
                  or create your own group to collaborate with peers.
                </p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Your First Group
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Popular Discussion Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Exam Preparation',
            'Project Ideas',
            'Career Guidance',
            'Study Techniques'
          ].map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium mb-2">{topic}</h3>
                <p className="text-sm text-gray-600">
                  {Math.floor(Math.random() * 50) + 10} active discussions
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussion;
