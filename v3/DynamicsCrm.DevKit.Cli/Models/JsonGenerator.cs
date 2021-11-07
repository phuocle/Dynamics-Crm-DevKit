namespace DynamicsCrm.DevKit.Cli.Models
{
    internal class JsonGenerator : JsonBase
    {
        public string rootfolder { get; set; }
        public string rootnamespace { get; set; }
        public string type { get; set; }
        public string debug { get; set; }
        public string entities { get; set; }
    }
}
