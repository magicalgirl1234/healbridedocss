import React from 'react';
import { customColors } from '../components/Sidebar';
import CodeBlock from '../components/CodeBlock';
import { Key, Lock } from 'lucide-react';

const Authentication: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Authentication</h2>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <p className="text-lg mb-4 leading-relaxed text-gray-700">
          The API supports multiple authentication methods depending on your deployment configuration. 
          In demo mode, endpoints are open and require no authentication.
        </p>
        
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <Key size={20} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800">Demo Mode</h3>
          </div>
          <p className="text-blue-700">
            No authentication required. All endpoints are publicly accessible with seeded data.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h3 className="text-xl font-bold mb-4" style={{ color: customColors.brandSecondary }}>JWT Authentication</h3>
        <p className="text-gray-700 mb-4">
          For production environments, you can enable JSON Web Token (JWT) authentication for write operations:
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Lock size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Protected endpoints:</span>
              <div className="text-gray-700 text-sm mt-1">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/terminology/ingest</span>
                <span className="mx-2">•</span>
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/fhir/bundle</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Lock size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Header format:</span>
              <div className="text-gray-700 text-sm mt-1">
                Authorization: Bearer &lt;JWT&gt;
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Lock size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Configuration:</span>
              <div className="text-gray-700 text-sm mt-1">
                Set JWT_SECRET environment variable
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
          <h4 className="font-semibold mb-2 text-gray-300">Example Authorization Header</h4>
          <CodeBlock 
            code="Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." 
            language="http"
            showLineNumbers={false}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4" style={{ color: customColors.brandSecondary }}>API Key Authentication</h3>
        <p className="text-gray-700 mb-4">
          Alternatively, you can use API key authentication for service-to-service communication:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Key size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Header format:</span>
              <div className="text-gray-700 text-sm mt-1">
                X-API-Key: &lt;your-api-key&gt;
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Key size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Configuration:</span>
              <div className="text-gray-700 text-sm mt-1">
                Set API_KEY_SECRET environment variable
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Key size={20} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <span className="font-medium text-gray-800">Key management:</span>
              <div className="text-gray-700 text-sm mt-1">
                Rotate keys regularly and use secure storage
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900 rounded-xl p-5 overflow-x-auto">
          <h4 className="font-semibold mb-2 text-gray-300">Example API Key Header</h4>
          <CodeBlock 
            code="X-API-Key: namaste-2f9a8d6c-1b7e-4c3f-a5d9-8e7b6c5a4d3f" 
            language="http"
            showLineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;