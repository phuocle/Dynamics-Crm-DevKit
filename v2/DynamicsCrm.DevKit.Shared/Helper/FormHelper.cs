namespace DynamicsCrm.DevKit.Shared.Helper
{
    public static class FormHelper
    {
        public static string GetFormName(string formName, string @class)
        {
            if (formName.ToLower() == "information") return $"{@class} Information";
            else if (formName.ToLower() == "wizard") return $"{@class} Wizard";
            else if (formName.ToLower() == "ai for sales") return $"{@class} AI for Sales";
            else if (formName.ToLower() == "quick create") return $"{@class} Quick Create";
            else if (formName.ToLower() == "quickcreate") return $"{@class} QuickCreate";
            return formName;
        }

        public static string GetFormName(string formName)
        {
            if (formName.EndsWith(" AI for Sales")) return "AI for Sales";
            if (formName.EndsWith(" Wizard")) return "Wizard";
            if (formName.EndsWith(" Information")) return "Information";
            if (formName.EndsWith(" Quick Create")) return "Quick Create";
            if (formName.EndsWith(" QuickCreate")) return "QuickCreate";
            return formName;
        }
    }
}
