import { BaseNode } from '../BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` },
      ]}
    >
      <div>If / Else</div>
    </BaseNode>
  );
};
