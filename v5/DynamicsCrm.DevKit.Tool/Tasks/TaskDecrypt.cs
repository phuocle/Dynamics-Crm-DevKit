using DynamicsCrm.DevKit.Tool.Lib;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskDecrypt
    {
        internal static void Run(string password)
        {
            var decrypted = Helper.DecryptString(password);
            DynamicsCrm.DevKit.Tool.ToolConsole.MarkupLine($"[cyan]Decrypted:[/] {Markup.Escape(decrypted)}");
        }
    }
}
