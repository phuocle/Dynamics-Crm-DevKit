namespace DynamicsCrm.DevKit.Cli.Models
{
    internal class JsonProxyType : JsonBase
    {
        public string @namespace { get; set; }
        public string output { get; set; }
        public string entities { get; set; }
    }
}
