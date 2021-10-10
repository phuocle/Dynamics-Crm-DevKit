using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    //public class NameValue
    //{
    //    public string Name {  get; set; }
    //    public object Value { get; set; }
    //}

    //public class NameValue2 : NameValue
    //{
    //    public object Value2 { get; set; }
    //}

    public class DeployWebResource
    {
        public string FullFileName { get; set; }
        public Guid WebResourceId { get; set; }
        public string WebResourceName { get; set; }
    }
}
