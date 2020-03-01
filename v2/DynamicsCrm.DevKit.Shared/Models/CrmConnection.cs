namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CrmConnection
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Type { get; set; } = "Office365";
    }
}
