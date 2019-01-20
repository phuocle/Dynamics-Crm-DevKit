using System;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public static class CliLog
    {
        public const ConsoleColor ColorError = ConsoleColor.Red;
        public const ConsoleColor ColorGreen = ConsoleColor.Green;
        public const ConsoleColor ColorYellow = ConsoleColor.Yellow;
        public const ConsoleColor ColorCyan = ConsoleColor.Cyan;
        public const ConsoleColor ColorRed = ConsoleColor.Red;
        public const ConsoleColor ColorBlue = ConsoleColor.Blue;
        public const ConsoleColor ColorMagenta = ConsoleColor.Magenta;
        public const ConsoleColor ColorWhite = ConsoleColor.White;
        public const int StarLength = 60;

        public static void WriteLine(params object[] values)
        {
            var oldConsoleColor = Console.ForegroundColor;
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                    Console.Write(value);
            Console.WriteLine();
            Console.ForegroundColor = oldConsoleColor;
        }
    }
}