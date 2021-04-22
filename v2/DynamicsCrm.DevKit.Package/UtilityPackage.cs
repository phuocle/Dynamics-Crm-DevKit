using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Models.Cli;
using EnvDTE;

namespace DynamicsCrm.DevKit.Package
{
    public class UtilityPackage
    {
        public static object GetGlobal(string globalName, DTE dte)
        {
            var globals = dte.Globals;
            return globals.VariableExists[globalName] ? globals[globalName] : null;
        }

        public static void SetGlobal(string globalName, object value, DTE dte)
        {
            var globals = dte.Globals;
            globals[globalName] = value;
        }

        public static void SetDTEStatusBar(DTE dte, string text, bool isStopAnimate = false)
        {
            if (isStopAnimate)
            {
                dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
            }
            dte.StatusBar.Text = text;
        }
    }
}
