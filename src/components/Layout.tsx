
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Calculator, 
  Users, 
  Phone, 
  RotateCcw, 
  HelpCircle, 
  Crown,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/blogs', label: 'Blogs', icon: BookOpen },
    { path: '/resources', label: 'Notes/PYQ/Videos', icon: FileText },
    { path: '/sections', label: 'Section Selection', icon: Users },
    { path: '/calculator', label: 'SGPA Calculator', icon: Calculator },
    { path: '/discussion', label: 'Group Discussion', icon: Users },
    { path: '/faculty', label: 'Faculty Contact', icon: Phone },
    { path: '/helpdesk', label: 'Helpdesk', icon: HelpCircle },
    { path: '/premium', label: 'Premium', icon: Crown },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">EduPortal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigationItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-foreground/80 ${
                  isActive(item.path) ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset Login
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path) 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/resources" className="hover:text-foreground">Notes</Link></li>
                <li><Link to="/resources" className="hover:text-foreground">Previous Year Questions</Link></li>
                <li><Link to="/resources" className="hover:text-foreground">Video Lectures</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/calculator" className="hover:text-foreground">SGPA Calculator</Link></li>
                <li><Link to="/discussion" className="hover:text-foreground">Group Discussion</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/helpdesk" className="hover:text-foreground">Helpdesk</Link></li>
                <li><Link to="/faculty" className="hover:text-foreground">Faculty Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Premium</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/premium" className="hover:text-foreground">Upgrade</Link></li>
                <li><Link to="/premium" className="hover:text-foreground">Features</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 EduPortal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
