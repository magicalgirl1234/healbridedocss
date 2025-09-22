import React from 'react';
import { customColors } from '../components/Sidebar';
import ApiCard from '../components/ApiCard';
import Badge from '../components/Badge';
import { Code, Database, FileText, Globe, Search, Shield, Zap } from 'lucide-react';

const ApiReference: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-2" style={{ color: customColors.brandSecondary }}>API Reference</h2>
      <p className="text-gray-600 mb-8">Comprehensive documentation for all API endpoints with examples and detailed descriptions.</p>
      
      <div className="space-y-6">
        <ApiCard 
          title="Health Check"
          description="Verify the service is running and healthy. Returns status and version information."
          method="GET"
          endpoint="/api/health"
          icon={<Zap size={24} />}
          color={customColors.medicalFhir}
          responseExample={`{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2023-05-15T12:34:56Z"
}`}
        />

        <ApiCard 
          title="Terminology Search"
          description="Search NAMASTE concepts, ICD-11 TM2, or ICD-11 Biomedicine terminology. Supports partial matches and filters."
          method="GET"
          endpoint="/api/terminology/search?q={query}"
          icon={<Search size={24} />}
          color={customColors.medicalAyurveda}
          parameters={[
            {
              name: "q",
              type: "string",
              required: true,
              description: "Search query string"
            },
            {
              name: "system",
              type: "string",
              required: false,
              description: "Filter by code system (namaste, icd11-tm2, icd11-biomedicine)"
            },
            {
              name: "limit",
              type: "integer",
              required: false,
              description: "Maximum number of results to return (default: 20)"
            }
          ]}
          responseExample={`{
  "results": [
    {
      "code": "AYU-DIG-001",
      "display": "Agnimandya",
      "system": "http://namaste.gov.in/CodeSystem",
      "definition": "Digestive disorder characterized by weak digestion"
    }
  ]
}`}
        />
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h4 className="font-semibold mb-3 text-gray-800">Specialized Search Endpoints</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalAyurveda}>NAMASTE</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                GET /api/terminology/search/namaste?query={'{query}'}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalIcd11}>ICD-11 TM2</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                GET /api/terminology/search/icd11-tm2?query={'{query}'}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalIcd11}>ICD-11 Biomedicine</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                GET /api/terminology/search/icd11-biomedicine?query={'{query}'}
              </div>
            </div>
          </div>
        </div>

        <ApiCard 
          title="ICD-11 Search"
          description="Optional endpoint for direct ICD-11 terminology lookup. Requires configuration with WHO API credentials."
          method="GET"
          endpoint="/api/icd11/search?q={query}"
          icon={<Globe size={24} />}
          color={customColors.medicalIcd11}
          parameters={[
            {
              name: "q",
              type: "string",
              required: true,
              description: "Search query string"
            },
            {
              name: "limit",
              type: "integer",
              required: false,
              description: "Maximum number of results to return (default: 20)"
            }
          ]}
        />

        <ApiCard 
          title="ValueSet Expansion"
          description="FHIR R4 operation to expand a ValueSet to include all matching concepts. Supports filtering by text."
          method="GET"
          endpoint="/api/fhir/ValueSet/$expand?url={valueSetUrl}&filter={text}"
          icon={<FileText size={24} />}
          color={customColors.medicalFhir}
          parameters={[
            {
              name: "url",
              type: "string",
              required: true,
              description: "ValueSet URL to expand"
            },
            {
              name: "filter",
              type: "string",
              required: false,
              description: "Text filter to apply to the expansion"
            },
            {
              name: "count",
              type: "integer",
              required: false,
              description: "Maximum number of concepts to return"
            }
          ]}
          responseExample={`{
  "resourceType": "ValueSet",
  "expansion": {
    "contains": [
      {
        "system": "http://namaste.gov.in/CodeSystem",
        "code": "AYU-DIG-001",
        "display": "Agnimandya"
      }
    ]
  }
}`}
        />

        <ApiCard 
          title="Concept Translation"
          description="FHIR R4 operation to translate a concept from one code system to another using ConceptMap resources."
          method="POST"
          endpoint="/api/fhir/ConceptMap/$translate"
          icon={<Code size={24} />}
          color={customColors.medicalFhir}
          responseExample={`{
  "result": true,
  "match": [
    {
      "equivalence": "equivalent",
      "concept": {
        "system": "http://id.who.int/icd/release/11/mms",
        "code": "9A00.0",
        "display": "Weak digestion"
      }
    }
  ]
}`}
        />
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h4 className="font-semibold mb-3 text-gray-800">Request Body Example</h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`{
  "coding": { 
    "system": "http://namaste.gov.in/CodeSystem", 
    "code": "AYU-DIG-001" 
  },
  "targetSystem": "http://id.who.int/icd/release/11/mms"
}`}
            </pre>
          </div>
        </div>

        <ApiCard 
          title="CSV Ingestion"
          description="Upload NAMASTE terminology data in CSV format. Supports Ayurveda, Siddha, and Unani systems."
          method="POST"
          endpoint="/api/terminology/ingest"
          icon={<Database size={24} />}
          color={customColors.medicalSiddha}
        />
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h4 className="font-semibold mb-3 text-gray-800">System-Specific Upload Endpoints</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalAyurveda}>Ayurveda</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                POST /api/codesystem/upload/ayurveda
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalSiddha}>Siddha</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                POST /api/codesystem/upload/siddha
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Badge color={customColors.medicalUnani}>Unani</Badge>
              <div className="mt-3 text-sm font-mono text-gray-800">
                POST /api/codesystem/upload/unani
              </div>
            </div>
          </div>
        </div>

        <ApiCard 
          title="Bundle Validation"
          description="Validate FHIR R4 Bundle resources against the terminology service. Returns validation results and issues."
          method="POST"
          endpoint="/api/fhir/bundle"
          icon={<Shield size={24} />}
          color={customColors.medicalFhir}
          responseExample={`{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "text": "Bundle validated successfully"
      }
    }
  ]
}`}
        />
      </div>
    </div>
  );
};

export default ApiReference;