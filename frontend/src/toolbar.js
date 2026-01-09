// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px', background: '#ffffff',borderBottom: '1px solid #e5e7eb',}}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                 {/* 🔥 Demo nodes */}
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='logger' label='Logger' />
                <DraggableNode type='api' label='API' />
            </div>
        </div>
    );
};
