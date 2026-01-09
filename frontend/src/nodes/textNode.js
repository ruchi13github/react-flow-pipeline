import { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';

// Extract {{variable}} names from text
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  // Get variables only when text changes
  const variables = useMemo(() => extractVariables(text), [text]);

  // Auto-resize height based on lines
  const rows = Math.min(10, Math.max(2, text.split('\n').length));

  return (
    <div
      style={{
        padding: 10,
        border: '1px solid #cbd5e1',
        borderRadius: 8,
        background: '#ffffff',
        minWidth: 220,
        position: 'relative',
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Text</div>

      {/* Dynamic LEFT handles for {{variables}} */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${40 + index * 20}px` }}
        />
      ))}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={rows}
        style={{
          width: '100%',
          resize: 'none',
          padding: 6,
          fontSize: 12,
          borderRadius: 4,
          border: '1px solid #cbd5e1',
        }}
        placeholder="Type text with {{variables}}"
      />

      {/* RIGHT output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />
    </div>
  );
};
