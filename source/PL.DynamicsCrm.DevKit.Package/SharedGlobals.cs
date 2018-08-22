using EnvDTE;

namespace PL.DynamicsCrm.DevKit.Package
{
    public static class SharedGlobals
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
    }
}