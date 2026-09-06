using System;
using System.Collections.Generic;
using System.Linq;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    internal sealed class RemainingArgumentsStub : IRemainingArguments
    {
        public ILookup<string, string> Parsed => Array.Empty<string>().ToLookup(x => x, x => x);
        public IReadOnlyList<string> Raw => Array.Empty<string>();
    }

    internal static class CommandContextFactory
    {
        public static CommandContext Create() =>
            new CommandContext(Array.Empty<string>(), new RemainingArgumentsStub(), "test", null);
    }
}
