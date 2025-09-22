import React from 'react';
import { customColors } from '../components/Sidebar';
import { Play } from 'lucide-react';

const Quickstart: React.FC = () => {
  return (
    <div className="max-w-4xl text-gray-900">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Quickstart (Demo Mode)</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <p className="text-gray-700 mb-6">
          Get started with the NAMASTE API in minutes using our demo mode. No authentication or setup required.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
              1
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">Open the home page</h3>
              <p className="text-gray-600">Navigate to the main page and scroll to the Demo section.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
              2
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">Try sample searches</h3>
              <p className="text-gray-600">Try searches like "Agnimandya", "Kasa", or "headache".</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
              3
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">Review results</h3>
              <p className="text-gray-600">Review NAMASTE results and suggested ICD-11 matches.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
              4
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">Explore the API</h3>
              <p className="text-gray-600">Click Docs for API examples and endpoints.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-green-100">
            <Play size={20} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800">Jump to the Demo</h3>
        </div>
        <p className="text-green-700 mb-4">
          Experience the NAMASTE terminology service in action with our interactive demo.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Try the Demo
          </button>
          <button className="px-4 py-2 bg-white text-green-600 border border-green-300 rounded-lg hover:bg-green-50 transition-colors">
            View API Reference
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Sample API Calls</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Search NAMASTE concepts</h4>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              GET /api/terminology/search?q=Agnimandya
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Expand a ValueSet</h4>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              GET /api/fhir/ValueSet/$expand?url=http://example.org/ValueSet/digestive
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Translate a concept</h4>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              POST /api/fhir/ConceptMap/$translate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickstart;