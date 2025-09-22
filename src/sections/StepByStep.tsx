import React from 'react';
import { customColors } from '../components/Sidebar';
import CodeBlock from '../components/CodeBlock';

const StepByStep: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Step-by-Step Guide for Beginners</h2>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <p className="text-gray-700 mb-6">
          Follow these steps to integrate and use the NAMASTE terminology service in your applications.
        </p>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Search a NAMASTE concept</h3>
            </div>
            <CodeBlock 
              code="GET /api/terminology/search?q=Agnimandya" 
              title="Search for digestive disorders"
            />
            <p className="mt-3 text-gray-600 text-sm">
              This endpoint returns NAMASTE concepts that match your query, including display names and definitions.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">See ICD-11 suggestions (if enabled)</h3>
            </div>
            <CodeBlock 
              code="GET /api/icd11/search?q=headache" 
              title="Search ICD-11 terminology"
            />
            <p className="mt-3 text-gray-600 text-sm">
              If configured with ICD-11 credentials, this endpoint returns matching concepts from the WHO ICD-11 classification.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expand a ValueSet</h3>
            </div>
            <CodeBlock 
              code="GET /api/fhir/ValueSet/$expand?url=http://example.org/ValueSet/digestive" 
              title="Expand a FHIR ValueSet"
            />
            <p className="mt-3 text-gray-600 text-sm">
              This FHIR operation returns all concepts in the specified ValueSet, with optional filtering.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Translate a code via ConceptMap</h3>
            </div>
            <CodeBlock 
              code={`POST /api/fhir/ConceptMap/$translate
Content-Type: application/json

{
  "coding": { "system": "http://namaste.gov.in/CodeSystem", "code": "AYU-DIG-001" },
  "targetSystem": "http://id.who.int/icd/release/11/mms"
}`}
              title="Translate a NAMASTE code to ICD-11"
              language="http"
            />
            <p className="mt-3 text-gray-600 text-sm">
              This FHIR operation translates a concept from one code system to another using a ConceptMap resource.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ingest NAMASTE CSV (demo)</h3>
            </div>
            <CodeBlock 
              code={`POST /api/terminology/ingest
Content-Type: text/csv

code,display,definition
AYU-DIG-002,Agnimandyajanya Roga,Digestive disorder secondary to weak digestion`}
              title="Upload NAMASTE terminology data"
              language="http"
            />
            <p className="mt-3 text-gray-600 text-sm">
              This endpoint allows you to upload NAMASTE terminology data in CSV format for ingestion into the system.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: customColors.brandPrimary }}>
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Validate a FHIR Bundle</h3>
            </div>
            <CodeBlock 
              code={`POST /api/fhir/bundle
Content-Type: application/json

{"resourceType":"Bundle","type":"collection","entry":[{"resource":{"resourceType":"Condition",...}}]}`}
              title="Validate a FHIR Bundle resource"
              language="http"
            />
            <p className="mt-3 text-gray-600 text-sm">
              This endpoint validates FHIR Bundle resources against the terminology service and returns validation results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">Next Steps</h3>
        <p className="text-blue-700 mb-4">
          Once you've tried these basic operations, explore the full API reference and consider configuring persistent storage for production use.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View API Reference
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
            Configuration Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;