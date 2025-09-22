import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'http', 
  title,
  showLineNumbers = true 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format code with line numbers if needed
  const formattedCode = showLineNumbers
    ? code.split('\n').map((line, i) => `${(i + 1).toString().padStart(2, ' ')}  ${line}`).join('\n')
    : code;

  return (
    <div className="mb-6">
      {title && (
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-medium text-gray-700">{title}</h4>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{language}</span>
        </div>
      )}
      
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10"
          aria-label={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        
        <pre className="p-5 overflow-x-auto text-sm">
          <code className="text-gray-300 font-mono">{formattedCode}</code>
        </pre>
      </div>
      
      {copied && (
        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md animate-fadeInOut">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CodeBlock;