using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.PlatformUI;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public class BaseDialogWindow : DialogWindow
    {
        public BaseDialogWindow(string helpTopic) : base(helpTopic)
        {
        }

        public BaseDialogWindow()
        {
            Title = $"DynamicsCrm.DevKit v.{Const.Version} Build: {Const.Build}";
            HasMinimizeButton = false;
            HasMaximizeButton = false;
        }
    }
}
