using CmdLine;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Tool.Args;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    class TaskDecrypt
    {
        internal static void Run()
        {
            // /type:"decrypt" /password:"5GPAYPENbFiSGR6RiANieg=="
            var args = CommandLine.Parse<DecryptArgs>();
            var decrypt = EncryptDecrypt.DecryptString(args.Password);
            System.Console.WriteLine(decrypt);
        }
    }
}
