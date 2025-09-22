import React from 'react';
import { customColors } from '../components/Sidebar';
// ...existing code...

const Overview: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4" style={{ color: customColors.brandSecondary }}>
          Documentation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A complete guide to what this platform does and how to use it—perfect for beginners and integrators.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Overview</h2>
        <p className="text-lg mb-8 leading-relaxed text-gray-700">
          This demo-ready terminology microservice bridges AYUSH NAMASTE concepts with WHO ICD-11 TM2 via FHIR R4 patterns. 
          It ships with seeded values so you can search concepts, review dual-code mappings, expand ValueSets, and validate FHIR Bundles without external credentials.
        </p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalAyurveda }}></div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Dual coding</h4>
                <p className="text-gray-600 text-sm">NAMASTE concepts with suggested ICD-11 matches</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalFhir }}></div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">FHIR operations</h4>
                <p className="text-gray-600 text-sm">ValueSet $expand and ConceptMap $translate</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalSiddha }}></div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">CSV ingestion</h4>
                <p className="text-gray-600 text-sm">Easy import of NAMASTE concepts</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalUnani }}></div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Demo-first</h4>
                <p className="text-gray-600 text-sm">Run immediately with seeded data</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Getting Started</h3>
          <p className="text-blue-700 mb-4">
            The service is ready to use out of the box with demo data. No setup required for basic functionality.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Try the Demo
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
              View API Reference
            </button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Supported Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalAyurveda}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalAyurveda }}></div>
              </div>
              <h3 className="font-bold text-gray-900">Ayurveda</h3>
            </div>
            <p className="text-gray-600 text-sm">Traditional Indian system of medicine with focus on balance between body, mind, and spirit.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalSiddha}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalSiddha }}></div>
              </div>
              <h3 className="font-bold text-gray-900">Siddha</h3>
            </div>
            <p className="text-gray-600 text-sm">Ancient Tamil system of medicine emphasizing herbs, minerals, and yoga for health.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalUnani}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalUnani }}></div>
              </div>
              <h3 className="font-bold text-gray-900">Unani</h3>
            </div>
            <p className="text-gray-600 text-sm">Traditional system based on ancient Greek philosophy with focus on four humors.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalHomeopathy}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalHomeopathy }}></div>
              </div>
              <h3 className="font-bold text-gray-900">Homeopathy</h3>
            </div>
            <p className="text-gray-600 text-sm">Alternative medical system based on "like cures like" and potentization principles.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalIcd11}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalIcd11 }}></div>
              </div>
              <h3 className="font-bold text-gray-900">ICD-11 TM2</h3>
            </div>
            <p className="text-gray-600 text-sm">WHO International Classification of Diseases Traditional Medicine Module 2.</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${customColors.medicalFhir}20` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.medicalFhir }}></div>
              </div>
              <h3 className="font-bold text-gray-900">FHIR R4</h3>
            </div>
            <p className="text-gray-600 text-sm">Fast Healthcare Interoperability Resources standard for health data exchange.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;