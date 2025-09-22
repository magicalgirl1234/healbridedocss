import React from 'react';
import { customColors } from '../components/Sidebar';
import { Database, Globe, Search, Server } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Architecture</h2>
      
      <div className="mb-8">
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          Built with Next.js (App Router). API routes expose health, terminology search, FHIR operations, ingestion, and 
          optional ICD-11 lookup. An in-memory store holds seeded concepts and mappings for the demo. The UI 
          provides a dual-search workflow and simple tools for expansion, translation, ingestion, and validation.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">System Components</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${customColors.medicalFhir}20` }}>
              <Server size={24} style={{ color: customColors.medicalFhir }} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">API Layer</h4>
              <p className="text-gray-600 text-sm mb-2">RESTful endpoints for all terminology operations</p>
              <div className="text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/health</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/terminology/search</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/fhir/ValueSet/$expand</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${customColors.medicalIcd11}20` }}>
              <Database size={24} style={{ color: customColors.medicalIcd11 }} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Storage Layer</h4>
              <p className="text-gray-600 text-sm mb-2">In-memory seeds for demo; swap to DB later if needed</p>
              <div className="text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">USE_PERSISTENT_STORAGE=false</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">DATABASE_URL</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${customColors.brandPrimary}20` }}>
              <Search size={24} style={{ color: customColors.brandPrimary }} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">UI Layer</h4>
              <p className="text-gray-600 text-sm mb-2">Dual search with mapping review, CSV ingest, and Bundle validate</p>
              <div className="text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">React + Tailwind CSS</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">Responsive design</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${customColors.medicalIcd11}20` }}>
              <Globe size={24} style={{ color: customColors.medicalIcd11 }} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">External Integration</h4>
              <p className="text-gray-600 text-sm mb-2">Optional ICD-11 WHO API connectivity</p>
              <div className="text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">ICD11_BASE_URL</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">ICD11_API_TOKEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Flow</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${customColors.medicalAyurveda}20` }}>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: customColors.medicalAyurveda }}></div>
            </div>
            <h4 className="font-medium text-gray-900">NAMASTE</h4>
            <p className="text-sm text-gray-600">Source terminology</p>
          </div>
          
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${customColors.medicalFhir}20` }}>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: customColors.medicalFhir }}></div>
            </div>
            <h4 className="font-medium text-gray-900">FHIR Service</h4>
            <p className="text-sm text-gray-600">Processing layer</p>
          </div>
          
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${customColors.medicalIcd11}20` }}>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: customColors.medicalIcd11 }}></div>
            </div>
            <h4 className="font-medium text-gray-900">ICD-11</h4>
            <p className="text-sm text-gray-600">Target terminology</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: customColors.brandSecondary }}>Next.js</div>
            <div className="text-sm text-gray-600">App Router</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: customColors.brandSecondary }}>React</div>
            <div className="text-sm text-gray-600">UI Components</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: customColors.brandSecondary }}>Tailwind</div>
            <div className="text-sm text-gray-600">Styling</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: customColors.brandSecondary }}>TypeScript</div>
            <div className="text-sm text-gray-600">Type Safety</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;