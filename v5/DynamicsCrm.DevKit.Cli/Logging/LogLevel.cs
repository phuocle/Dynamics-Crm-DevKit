namespace DynamicsCrm.DevKit.Cli
{
    /// <summary>
    /// Log indentation levels for CLI output hierarchy.
    /// </summary>
    public enum LogLevel
    {
        /// <summary>Level 0 - File header (.dll, .nupkg)</summary>
        Level0 = 0,
        /// <summary>Level 1 - Assembly, Package, Managed Identity</summary>
        Level1 = 1,
        /// <summary>Level 2 - Plugin Type, DataProvider</summary>
        Level2 = 2,
        /// <summary>Level 3 - Plugin Step, Custom API Step</summary>
        Level3 = 3,
        /// <summary>Level 4 - Plugin Image, Fields, Configuration</summary>
        Level4 = 4
    }
}
