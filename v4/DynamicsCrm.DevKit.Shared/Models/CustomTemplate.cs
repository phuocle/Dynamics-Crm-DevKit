namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CustomTemplate
    {
        public string Type { get; set; }
        public string SubType { get; set; } = null;
        public string Title { get; set; }
        public string Body { get; set; } = null;
        public bool IsDefault { get; set; } = false;
    }
}
