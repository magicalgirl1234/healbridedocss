import React from 'react';
import { customColors } from '../components/Sidebar';

const Glossary: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Glossary & FAQ</h2>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4" style={{ color: customColors.brandSecondary }}>Key Terms</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800">NAMASTE</h4>
            <p className="text-gray-700">National Ayurveda Morbidity and Standardized Terminology of Elements: AYUSH terminology initiative for traditional medicine systems in India.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800">ICD-11 TM2</h4>
            <p className="text-gray-700">International Classification of Diseases, 11th Revision, Traditional Medicine Module 2: WHO classification for traditional medicine conditions.</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800">FHIR</h4>
            <p className="text-gray-700">Fast Healthcare Interoperability Resources: HL7 standard for healthcare data exchange, used here for terminology operations.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800">ValueSet</h4>
            <p className="text-gray-700">FHIR resource that defines a set of codes from one or more code systems, used for specifying valid values in clinical contexts.</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800">ConceptMap</h4>
            <p className="text-gray-700">FHIR resource that defines mappings between concepts in different code systems, enabling translation between terminologies.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4" style={{ color: customColors.brandSecondary }}>Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">Can I run this without credentials?</h4>
            <p className="text-gray-700">Yes—demo seeds are included. The service works out-of-the-box with sample data for all NAMASTE, ICD-11 TM2, and FHIR operations.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">How do I persist data?</h4>
            <p className="text-gray-700">Set the USE_PERSISTENT_STORAGE environment variable to true and provide a DATABASE_URL. The service supports PostgreSQL and other SQL databases.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">Is this production-ready?</h4>
            <p className="text-gray-700">It's a demo foundation—add authentication, persistent storage, and proper error handling for production deployments.</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">How do I add my own terminology?</h4>
            <p className="text-gray-700">Use the CSV ingestion endpoints to upload your own terminology data. The service supports Ayurveda, Siddha, and Unani systems.</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">Can I integrate with external terminology services?</h4>
            <p className="text-gray-700">Yes—configure the ICD11_BASE_URL and ICD11_API_TOKEN to enable integration with the WHO ICD-11 API for additional terminology lookup.</p>
          </div>
          
          <div className="border-l-4 border-indigo-500 pl-4 py-1">
            <h4 className="font-semibold text-gray-800 mb-2">How do I customize the UI?</h4>
            <p className="text-gray-700">The UI is built with React and Tailwind CSS. You can customize colors, layout, and components by modifying the source code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;