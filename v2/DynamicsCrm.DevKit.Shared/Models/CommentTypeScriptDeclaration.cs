﻿using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CommentTypeScriptDeclaration
    {
        public List<string> JsForm { get; set; }
        public bool JsWebApi { get; set; }
        public bool IsDebugForm { get; set; }
        public bool IsDebugWebApi { get; set; }
        public string Version { get; set; }
        public string JsFormVersion { get; set; }
    }
}
