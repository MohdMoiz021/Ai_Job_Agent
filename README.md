# AI Job Agent Platform

A modern, AI-powered job matching platform built with Next.js and Tailwind CSS. Upload your CV and let our AI analyze your skills, experience, and preferences to find the perfect job matches.

## 🚀 Features

- **AI-Powered CV Analysis**: Upload your CV and get intelligent analysis of your skills and experience
- **Smart Job Matching**: Find jobs that perfectly match your profile with AI-driven recommendations
- **Modern UI/UX**: Beautiful, responsive design built with Tailwind CSS
- **Advanced Search & Filters**: Search jobs by skills, location, experience level, and more
- **User Authentication**: Secure login and registration system
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **File Upload**: React Dropzone
- **Language**: TypeScript
- **UI Components**: Custom components with Tailwind CSS

## 📁 Project Structure

```
src/
├── app/
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   ├── upload-cv/      # CV upload and analysis
│   ├── jobs/           # Job listings and search
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── Navigation.tsx  # Navigation component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-job-agent
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Feature highlights
- Statistics and testimonials
- Footer with navigation links

### Login Page (`/login`)
- Email and password authentication
- Social login options (Google, LinkedIn)
- Remember me functionality
- Forgot password link

### Registration Page (`/register`)
- Comprehensive user registration form
- Personal and professional information
- Skills and industry preferences
- Terms and conditions acceptance

### CV Upload (`/upload-cv`)
- Drag & drop file upload
- Support for PDF, DOC, DOCX, TXT
- AI analysis simulation
- Detailed results with skills, experience, and match score
- Suggested job roles

### Jobs Page (`/jobs`)
- Advanced search and filtering
- AI-powered job matching
- Sort by match score, date, or salary
- Job details with company information
- Apply, save, and share functionality

## 🎨 Design Features

- **Modern Color Scheme**: Professional blue and gray palette
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects, transitions, and animations
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Icon Integration**: Lucide React icons for consistent visual language

## 🔧 Customization

### Colors
The platform uses a consistent color scheme defined in Tailwind CSS:
- Primary: Blue (`blue-600`, `blue-700`)
- Secondary: Gray (`gray-50`, `gray-100`, `gray-900`)
- Accent: Yellow (`yellow-400`, `yellow-300`)
- Success: Green (`green-500`, `green-600`)

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the className props.

## 📊 AI Features

### CV Analysis
- Document text extraction
- Skill identification
- Experience level assessment
- Industry preference detection
- Match score calculation

### Job Matching
- Skills-based matching
- Experience level alignment
- Location preferences
- Industry compatibility
- Personalized recommendations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Variables
Create a `.env.local` file for any environment-specific configurations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Next.js and Tailwind CSS**
