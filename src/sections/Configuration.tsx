import React from 'react';
import { customColors } from '../components/Sidebar';
import CodeBlock from '../components/CodeBlock';

const Configuration: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6" style={{ color: customColors.brandSecondary }}>Configuration</h2>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          The service can be configured through environment variables. Below are the available options:
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">ICD-11 Integration</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalIcd11 }}></div>
                  <div>
                    <span className="font-medium text-gray-800">ICD11_BASE_URL</span>
                    <p className="text-gray-600 text-sm">WHO ICD-11 API base URL (optional)</p>
                    <p className="text-sm text-gray-500 mt-1 font-mono">https://id.who.int/icd/release/11</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalIcd11 }}></div>
                  <div>
                    <span className="font-medium text-gray-800">ICD11_API_TOKEN</span>
                    <p className="text-gray-600 text-sm">WHO ICD-11 API token (optional)</p>
                    <p className="text-sm text-gray-500 mt-1">Required for accessing ICD-11 API</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Authentication</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.brandPrimary }}></div>
                  <div>
                    <span className="font-medium text-gray-800">JWT_SECRET</span>
                    <p className="text-gray-600 text-sm">Enable JWT verification (optional)</p>
                    <p className="text-sm text-gray-500 mt-1">Generate a strong random secret for production</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.brandPrimary }}></div>
                  <div>
                    <span className="font-medium text-gray-800">API_KEY_SECRET</span>
                    <p className="text-gray-600 text-sm">Enable API key verification (optional)</p>
                    <p className="text-sm text-gray-500 mt-1">Store securely in environment or secret manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Storage</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalFhir }}></div>
                  <div>
                    <span className="font-medium text-gray-800">DATABASE_URL</span>
                    <p className="text-gray-600 text-sm">Database connection string (optional)</p>
                    <p className="text-sm text-gray-500 mt-1 font-mono">postgresql://user:pass@host:port/db</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.medicalFhir }}></div>
                  <div>
                    <span className="font-medium text-gray-800">USE_PERSISTENT_STORAGE</span>
                    <p className="text-gray-600 text-sm">Enable persistent storage (true/false)</p>
                    <p className="text-sm text-gray-500 mt-1">Set to true for production deployments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-1">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Service Settings</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.brandPrimary }}></div>
                  <div>
                    <span className="font-medium text-gray-800">SERVICE_NAME</span>
                    <p className="text-gray-600 text-sm">Custom service name (optional)</p>
                    <p className="text-sm text-gray-500 mt-1">Default: NAMASTE Terminology Service</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: customColors.brandPrimary }}></div>
                  <div>
                    <span className="font-medium text-gray-800">LOG_LEVEL</span>
                    <p className="text-gray-600 text-sm">Logging level (error, warn, info, debug)</p>
                    <p className="text-sm text-gray-500 mt-1">Default: info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
        <h4 className="font-semibold mb-3 text-gray-300">Example .env File</h4>
        <CodeBlock 
          code={`# ICD-11 Integration
ICD11_BASE_URL=https://id.who.int/icd/release/11
ICD11_API_TOKEN=your_icd11_token_here

# Authentication
JWT_SECRET=your_strong_jwt_secret_here
API_KEY_SECRET=your_api_key_secret_here

# Storage
DATABASE_URL=postgresql://user:pass@host:port/db
USE_PERSISTENT_STORAGE=true

# Service Settings
SERVICE_NAME=My NAMASTE Service
LOG_LEVEL=info`}
          language="bash"
          showLineNumbers={false}
        />
      </div>
    </div>
  );
};

export default Configuration;