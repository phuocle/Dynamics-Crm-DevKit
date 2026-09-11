using Microsoft.VisualStudio.Shell;
using System;

namespace DynamicsCrm.DevKit
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    internal sealed class ReportProjectItemTemplateRegistrationAttribute : RegistrationAttribute
    {
        private const string ReportProjectGuid = "F14B399A-7131-4C87-9E4B-1186C45EF12D";
        private const string TemplateDirectory = @"$PackageFolder$\ItemTemplates\CSharp\DynamicsCrm.DevKit\1033\ReportProject";
        private const string RegistrationKey = @"Projects\{" + ReportProjectGuid + @"}\AddItemTemplates\TemplateDirs\{525190A4-9C61-4AA5-8319-7C5FB75DAE58}\1";

        public override void Register(RegistrationContext context)
        {
            using (var key = context.CreateKey(RegistrationKey))
            {
                key.SetValue(null, "DynamicsCrm.DevKit");
                key.SetValue("SortPriority", 1);
                key.SetValue("TemplatesDir", TemplateDirectory);
            }
        }

        public override void Unregister(RegistrationContext context)
        {
            context.RemoveKey(RegistrationKey);
        }
    }
}
