using System;

namespace SunFlower.Shared
{
    public enum DocumentMethodMessage
    {
        Create,
        Update,
        CreateUpdate,
        Delete,
        Retrieve,
        RetrieveMultiple,
        Action,
        Others
    }

    public enum DocumentMethodStage
    {
        PreValidation,
        Pre,
        PostSync,
        PostAsync
    }

    [AttributeUsage(AttributeTargets.Method, Inherited = false, AllowMultiple = true)]
    public class DocumentMethodAttribute : Attribute
    {
        public string WI { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Fields { get; set; } = string.Empty;
        public string Entity { get; set; } = string.Empty;
        public DocumentMethodStage Stage { get; set; }
        public DocumentMethodMessage Message { get; set; }

        public DocumentMethodAttribute(string wi, string description, DocumentMethodStage stage, string entity, DocumentMethodMessage message, string fields)
        {
            Message = message;
            Stage = stage;
            Entity = entity;
            WI = wi;
            Description = description;
            Fields = fields;
        }
    }
}
