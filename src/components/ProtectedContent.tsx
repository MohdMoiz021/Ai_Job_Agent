'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Briefcase, Upload, Search, UserCircle } from 'lucide-react';

export default function ProtectedContent() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <UserCircle className="h-16 w-16 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}! 👋
        </h2>
        <p className="text-gray-600 mb-6">
          Ready to find your next opportunity? Here's what you can do:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/upload-cv" className="group">
            <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors text-center">
              <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload New CV</h3>
              <p className="text-gray-600 text-sm">
                Update your CV for better job matches
              </p>
            </div>
          </Link>
          
          <Link href="/jobs" className="group">
            <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors text-center">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Jobs</h3>
              <p className="text-gray-600 text-sm">
                View personalized job recommendation
              </p>
            </div>
          </Link>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Profile</h3>
            <p className="text-gray-600 text-sm">
              Manage your preferences and settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
