using DynamicsCrm.DevKit.Tool.Lib;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskDecrypt
    {
        internal static void Run(string password)
        {
            var decrypted = Helper.DecryptString(password);
            AnsiConsole.MarkupLine($"[cyan]Decrypted:[/] {Markup.Escape(decrypted)}");
        }
    }
}
