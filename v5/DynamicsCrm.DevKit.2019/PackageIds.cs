using System;

namespace DynamicsCrm.DevKit._2019
{
    internal static class PackageGuids
    {
        public const string CommandSetString = "9fcf358f-d3b6-45ec-b9f4-ec07f76d020b";
        public static readonly Guid CommandSet = new Guid(CommandSetString);
    }

    internal static class PackageIds
    {
        public const int UploadReportGroup = 0x1000;
        public const int UploadReportCommand = 0x0100;
    }
}
