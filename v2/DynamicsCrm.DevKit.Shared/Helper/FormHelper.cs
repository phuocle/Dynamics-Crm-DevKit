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
            else if (formName.ToLower() == "new form") return $"{@class} New_Form";
            else if (formName.ToLower() == "adobe sign") return $"{@class} Adobe_Sign";
            else if (formName.ToLower() == "sales insights") return $"{@class} Sales_Insights";
            else if (formName.ToLower() == "agreement") return $"{@class} Agreement";
            else if (formName.ToLower() == "project information") return $"{@class} Project Information";
            else if (formName.ToLower() == "project quick create") return $"{@class} Project Quick Create";
            else if (formName.ToLower() == "omnichannel information") return $"{@class} Omnichannel Information";
            else if (formName.ToLower() == "field service information") return $"{@class} Field Service Information";
            else if (formName.ToLower() == "main form") return $"{@class} Main Form";
            else if (formName.ToLower() == "quick create form") return $"{@class} Quick Create Form";
            else if (formName.ToLower() == "quick create from requirement") return $"{@class} Quick Create from Requirement";
            return formName;
        }

        //

        public static string GetFormName(string formName)
        {
            if (formName.EndsWith(" AI for Sales")) return "AI for Sales";
            if (formName.EndsWith(" Wizard")) return "Wizard";
            if (formName.EndsWith(" Project Information")) return "Project Information";
            if (formName.EndsWith(" Omnichannel Information")) return "Omnichannel Information";
            if (formName.EndsWith(" Field Service Information")) return "Field Service Information";
            if (formName.EndsWith(" Information")) return "Information";
            if (formName.EndsWith(" Quick Create")) return "Quick Create";
            if (formName.EndsWith(" QuickCreate")) return "QuickCreate";
            if (formName.EndsWith(" New Form")) return "New Form";
            if (formName.EndsWith(" Adobe Sign")) return "Adobe Sign";
            if (formName.EndsWith(" Sales Insights")) return "Sales Insights";
            if (formName.EndsWith(" Agreement")) return "Agreement";
            if (formName.EndsWith(" Project Quick Create")) return "Project Quick Create";
            if (formName.EndsWith(" Main Form")) return "Main Form";
            if (formName.EndsWith(" Quick Create Form")) return "Quick Create Form";
            if (formName.EndsWith(" Quick Create from Requirement")) return "Quick Create from Requirement";

            return formName;
        }
    }
}
