using Community.VisualStudio.Toolkit;
using Microsoft.VisualStudio.Shell;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit
{
    internal class VsixHelper
    {
        public static class SelectedItem
        {
            public static SolutionItem GetPhysicalFile()
            {
                return ThreadHelper.JoinableTaskFactory.Run(GetPhysicalFileAsync);
            }
            public static async Task<SolutionItem> GetPhysicalFileAsync()
            {
                var selectedItem = await VS.Solutions.GetActiveItemAsync();
                return selectedItem;
            }
            public static string Extension
            {
                get
                {
                    var selectedItem = GetPhysicalFile();
                    return Path.GetExtension(selectedItem.FullPath);
                }
            }
        }
    }
}
