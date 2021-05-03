using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared
{
    public class SavedMappingWebResource
    {
        public string FullFileName { get; set; }
        public string WebResourceName { get; set; }
    }

    public static class DevKitSetting
    {
        public static List<SavedMappingWebResource> SelectedWebResources { get; set; } = new List<SavedMappingWebResource>();
    }
}
