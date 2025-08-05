namespace DynamicsCrm.DevKit.Shared.Models
{
    public class JsonGenerator : JsonBase
    {
        public string rootfolder { get; set; }
        public string rootnamespace { get; set; }
        public string type { get; set; }
        public string debug { get; set; }
        public string entities { get; set; }
        public string version { get; set; }
    }
}
