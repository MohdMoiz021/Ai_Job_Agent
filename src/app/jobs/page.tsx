'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, Building, Clock, DollarSign, Star, Briefcase, Bookmark, Share2 } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  skills: string[];
  matchScore: number;
  postedDate: string;
  description: string;
  isRemote: boolean;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    experience: '3-5 years',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    matchScore: 95,
    postedDate: '2 days ago',
    description: 'We are looking for a Senior Frontend Developer to join our growing team...',
    isRemote: true,
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100k - $130k',
    experience: '2-4 years',
    skills: ['JavaScript', 'Python', 'React', 'Django'],
    matchScore: 88,
    postedDate: '1 day ago',
    description: 'Join our fast-growing startup and help build the next big thing...',
    isRemote: false,
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110k - $140k',
    experience: '4-6 years',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    matchScore: 82,
    postedDate: '3 days ago',
    description: 'We need a DevOps engineer to help us scale our infrastructure...',
    isRemote: true,
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataCorp',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130k - $160k',
    experience: '3-5 years',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    matchScore: 78,
    postedDate: '5 days ago',
    description: 'Join our data science team and help drive insights...',
    isRemote: false,
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'ProductHub',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$140k - $170k',
    experience: '5-7 years',
    skills: ['Product Strategy', 'User Research', 'Agile', 'Analytics'],
    matchScore: 75,
    postedDate: '1 week ago',
    description: 'Lead product development for our flagship platform...',
    isRemote: true,
  },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [sortBy, setSortBy] = useState('matchScore');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = mockJobs
    .filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);
      const matchesType = !selectedType || job.type === selectedType;
      const matchesExperience = !selectedExperience || job.experience === selectedExperience;
      
      return matchesSearch && matchesLocation && matchesType && matchesExperience;
    })
    .sort((a, b) => {
      if (sortBy === 'matchScore') return b.matchScore - a.matchScore;
      if (sortBy === 'postedDate') return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
      if (sortBy === 'salary') return parseInt(b.salary.split('$')[1]) - parseInt(a.salary.split('$')[1]);
      return 0;
    });

  const locations = [...new Set(mockJobs.map(job => job.location.split(',')[0]))];
  const jobTypes = [...new Set(mockJobs.map(job => job.type))];
  const experienceLevels = [...new Set(mockJobs.map(job => job.experience))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Job Agent</span>
            </Link>
            <Link href="/upload-cv" className="text-blue-600 hover:text-blue-700 font-medium">
              Upload CV
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Job</h1>
          <p className="text-gray-600">AI-powered job matching based on your skills and preferences</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="matchScore">Sort by Match Score</option>
              <option value="postedDate">Sort by Date Posted</option>
              <option value="salary">Sort by Salary</option>
            </select>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Types</option>
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Levels</option>
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Job Results */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                            {job.isRemote && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                                Remote
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Match Score */}
                      <div className="text-right">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {job.matchScore}% Match
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Bookmark className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{job.postedDate}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Apply Now
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    View Details
                  </button>
                  <button className="flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors font-medium">
                    Save Job
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
