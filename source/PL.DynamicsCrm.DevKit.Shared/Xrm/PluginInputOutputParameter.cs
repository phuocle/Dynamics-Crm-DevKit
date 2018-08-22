namespace PL.DynamicsCrm.DevKit.Shared.Xrm
{
    public class PluginInputOutputParameter
    {
        public int Position { get; set; }
        public string Name { get; set; }
        public bool Require { get; set; }
        public string Type { get; set; }
        public ParameterType ParameterType { get; set; }
    }
}