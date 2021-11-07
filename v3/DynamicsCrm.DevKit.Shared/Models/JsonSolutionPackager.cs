namespace DynamicsCrm.DevKit.Shared.Models
{
    public class JsonSolutionPackager : JsonBase
    {
        public string solution { get; set; }
        public string folder { get; set; }
        public string type { get; set; }
        public string mapfile { get; set; }
        public string solutiontype { get; set; }
        public string rootfolder { get; set; }
    }
}
