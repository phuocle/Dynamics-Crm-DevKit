using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class OldCommentTypeScriptDeclaration
    {
        public List<string> JsForm { get; set; }
        public bool JsWebApi { get; set; }
        public bool IsDebugForm { get; set; }
        public bool IsDebugWebApi { get; set; }
        public string Version { get; set; }
        public string JsFormVersion { get; set; }
    }
}
