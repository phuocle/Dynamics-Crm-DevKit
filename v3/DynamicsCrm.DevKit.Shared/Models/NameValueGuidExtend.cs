using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class NameValueGuidExtend : NameValueGuid
    {
        public string SolutionPrefix { get; set; }
        public string SolutionUniqueName { get; set; }
    }
}
