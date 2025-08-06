using DynamicsCrm.DevKit.Shared;
using System;
using System.Linq;

namespace DynamicsCrm.DevKit
{
    internal class Helper
    {
        public static bool IsWebResourceExtension(string extension)
        {
            return Const.WEB_RESOURCE_EXTENSIONS.Contains(extension);
        }
    }
}
