'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { Upload, FileText, X, CheckCircle, AlertCircle, Briefcase, Search, Target, Building } from 'lucide-react';

export default function UploadCV() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResults, setAnalysisResults] = useState({
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
    experience: '3-5 years',
    industries: ['Technology', 'Software Development'],
    matchScore: 95,
    suggestedRoles: ['Frontend Developer', 'Full Stack Developer', 'React Developer'],
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
    },
    multiple: false,
  });

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setAnalysisComplete(false);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.pdf')) return '📄';
    if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) return '📝';
    if (fileName.endsWith('.txt')) return '📄';
    return '📄';
  };

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
            <Link href="/jobs" className="text-blue-600 hover:text-blue-700 font-medium">
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your CV for AI Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let our AI analyze your CV and find the perfect job matches based on your skills, experience, and preferences.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upload Your CV</h2>
          
          {!uploadedFile ? (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg text-gray-600 mb-2">
                {isDragActive ? 'Drop your CV here' : 'Drag & drop your CV here'}
              </p>
              <p className="text-gray-500 mb-4">or click to browse files</p>
              <p className="text-sm text-gray-400">
                Supports PDF, DOC, DOCX, and TEXT files (max 10MB)
              </p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getFileIcon(uploadedFile.name)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {!analysisComplete && (
                <div className="mt-6">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze CV with AI'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Analysis Results */}
        {analysisComplete && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <h2 className="text-2xl font-semibold text-gray-900">AI Analysis Complete!</h2>
            </div>

            {/* Match Score */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{analysisResults.matchScore}%</div>
                <div className="text-xl">Match Accuracy</div>
                <p className="text-blue-100 mt-2">
                  Your profile matches excellently with available opportunities
                </p>
              </div>
            </div>

            {/* Analysis Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Identified Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Experience Level</h3>
                </div>
                <p className="text-2xl font-bold text-green-600">{analysisResults.experience}</p>
                <p className="text-gray-600 mt-1">Years of professional experience</p>
              </div>

              {/* Industries */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Preferred Industries</h3>
                </div>
                <div className="space-y-2">
                  {analysisResults.industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Roles */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Suggested Roles</h3>
                </div>
                <div className="space-y-2">
                  {analysisResults.suggestedRoles.map((role, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/jobs"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                View Matching Jobs
              </Link>
              <button
                onClick={() => {
                  setAnalysisComplete(false);
                  setUploadedFile(null);
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Upload Another CV
              </button>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How AI Analysis Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Document Processing</h3>
              <p className="text-gray-600 text-sm">
                Our AI extracts and analyzes all text content from your CV
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Skill Recognition</h3>
              <p className="text-gray-600 text-sm">
                Identifies technical skills, experience, and industry preferences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Smart Matching</h3>
              <p className="text-gray-600 text-sm">
                Finds jobs that perfectly match your profile and career goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
