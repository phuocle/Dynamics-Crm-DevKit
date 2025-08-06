using CmdLine;

namespace DynamicsCrm.DevKit.Tool.Args
{
    public class DecryptArgs
    {
        [CommandLineParameter(Command = "type", Name = "Type", Required = true, Description = "Decrypt Type task.")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "password", Name = "password", Required = true, Description = "The password you want to decrypt.")]
        public string Password { get; set; }
    }
}
