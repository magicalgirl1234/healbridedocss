import React from 'react';
// ...existing code...
import Badge from './Badge';
import CodeBlock from './CodeBlock';

interface ApiCardProps {
  title: string;
  description: string;
  method: string;
  endpoint: string;
  icon: React.ReactNode;
  color: string;
  parameters?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  responseExample?: string;
}

const ApiCard: React.FC<ApiCardProps> = ({ 
  title, 
  description, 
  method, 
  endpoint, 
  icon, 
  color,
  parameters,
  responseExample
}) => {
  const getMethodColor = (method: string) => {
    switch(method.toLowerCase()) {
      case 'get': return 'bg-blue-100 text-blue-800';
      case 'post': return 'bg-green-100 text-green-800';
      case 'put': return 'bg-yellow-100 text-yellow-800';
      case 'delete': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-8 border border-gray-200">
      <div className="p-6 border-l-4" style={{ borderColor: color }}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
            <div style={{ color }}>{icon}</div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <div className="flex gap-2">
                <Badge color={color}>{method}</Badge>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMethodColor(method)}`}>
                  {method}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <CodeBlock code={endpoint} />
          </div>
        </div>
      </div>

      {parameters && parameters.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Parameters</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {parameters.map((param) => (
                  <tr key={param.name}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{param.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{param.type}</td>
                    <td className="px-4 py-3 text-sm">
                      {param.required ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Required</span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Optional</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {responseExample && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Response Example</h4>
          <CodeBlock code={responseExample} language="json" />
        </div>
      )}
    </div>
  );
};

export default ApiCard;