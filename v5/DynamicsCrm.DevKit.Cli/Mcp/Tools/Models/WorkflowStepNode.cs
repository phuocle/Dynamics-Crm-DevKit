using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WorkflowStepNode
    {
        [JsonPropertyName("stepNumber")]
        public string StepNumber { get; set; }
        [JsonPropertyName("stepType")]
        public string StepType { get; set; }
        [JsonPropertyName("name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Name { get; set; }
        [JsonPropertyName("sourceDisplayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceDisplayName { get; set; }
        [JsonPropertyName("sourceActivityType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceActivityType { get; set; }
        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }
        [JsonPropertyName("target")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Target { get; set; }
        [JsonPropertyName("expression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Expression { get; set; }
        [JsonPropertyName("childWorkflowName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ChildWorkflowName { get; set; }
        [JsonPropertyName("owner")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Owner { get; set; }
        [JsonPropertyName("ownerExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OwnerExpression { get; set; }
        [JsonPropertyName("ownerReference")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WorkflowExpressionNode OwnerReference { get; set; }
        [JsonPropertyName("actionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ActionName { get; set; }
        [JsonPropertyName("actionId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ActionId { get; set; }
        [JsonPropertyName("arguments")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<WorkflowArgument> Arguments { get; set; }
        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Status { get; set; }
        [JsonPropertyName("stateCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? StateCode { get; set; }
        [JsonPropertyName("statusCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? StatusCode { get; set; }
        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }
        [JsonPropertyName("messageExpressionAst")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WorkflowExpressionNode MessageExpressionAst { get; set; }
        [JsonPropertyName("rawMessageExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawMessageExpression { get; set; }
        [JsonPropertyName("exceptionExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExceptionExpression { get; set; }
        [JsonPropertyName("assignments")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<WorkflowFieldAssignment> Assignments { get; set; }
        [JsonPropertyName("steps")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<WorkflowStepNode> Steps { get; set; }

        [JsonPropertyName("branches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<WorkflowConditionBranch> Branches { get; set; }
    }

    internal sealed class WorkflowConditionBranch
    {
        [JsonPropertyName("branchType")]
        public string BranchType { get; set; }
        [JsonPropertyName("conditionExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ConditionExpression { get; set; }
        [JsonPropertyName("rawConditionExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawConditionExpression { get; set; }
        [JsonPropertyName("conditionExpressionAst")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WorkflowExpressionNode ConditionExpressionAst { get; set; }
        [JsonPropertyName("isDefault")]
        public bool IsDefault { get; set; }
        [JsonPropertyName("steps")]
        public List<WorkflowStepNode> Steps { get; set; } = new();
    }

    internal sealed class WorkflowFieldAssignment
    {
        [JsonPropertyName("field")]
        public string Field { get; set; }
        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }
        [JsonPropertyName("targetExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TargetExpression { get; set; }
        [JsonPropertyName("valueType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ValueType { get; set; }
        [JsonPropertyName("value")]
        public string Value { get; set; }
        [JsonPropertyName("valueExpressionAst")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WorkflowExpressionNode ValueExpressionAst { get; set; }
        [JsonPropertyName("rawValueExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawValueExpression { get; set; }
    }

    internal sealed class WorkflowArgument
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("direction")]
        public string Direction { get; set; }
        [JsonPropertyName("type")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Type { get; set; }
        [JsonPropertyName("expression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Expression { get; set; }
        [JsonPropertyName("expressionAst")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public WorkflowExpressionNode ExpressionAst { get; set; }
        [JsonPropertyName("rawExpression")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawExpression { get; set; }
        [JsonPropertyName("isRequired")]
        public bool IsRequired { get; set; }
    }
}
