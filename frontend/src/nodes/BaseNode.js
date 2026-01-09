import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: 100,
        border: '1px solid black',
        padding: '8px',
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
        background: '#ffffff',
      }}
    >
      {/* INPUT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${30 + index * 20}%` }}
        />
      ))}

      <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
        {title}
      </div>

      <div>
        {children}
      </div>

      {/* OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${40 + index * 20}%` }}
        />
      ))}
    </div>
  );
};
