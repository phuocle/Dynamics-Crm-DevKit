using System;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public static class CliLog
    {
        public const ConsoleColor COLOR_ERROR = ConsoleColor.Red;
        public const ConsoleColor COLOR_GREEN = ConsoleColor.Green;
        public const ConsoleColor COLOR_YELLOW = ConsoleColor.Yellow;
        public const ConsoleColor COLOR_CYAN = ConsoleColor.Cyan;
        public const ConsoleColor COLOR_RED = ConsoleColor.Red;
        public const ConsoleColor COLOR_BLUE = ConsoleColor.Blue;
        public const ConsoleColor COLOR_MAGENTA = ConsoleColor.Magenta;
        public const ConsoleColor COLOR_WHITE = ConsoleColor.White;
        public const int STAR_LENGTH = 60;

        public static void WriteLine(params object[] values)
        {
            var oldConsoleColor = Console.ForegroundColor;
            foreach (var value in values)
                if (value is ConsoleColor)
                    Console.ForegroundColor = (ConsoleColor) value;
                else
                    Console.Write(value);
            Console.WriteLine();
            Console.ForegroundColor = oldConsoleColor;
        }
    }
}