using DynamicsCrm.DevKit.Shared;
using System;

namespace DynamicsCrm.DevKit.Cli
{
    internal static class CliLog
    {
        public const int StarLength = 110;
        public static void SetupCliLog()
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Title = Const.WindowTitle;
            Console.Clear();
        }

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

        public static void WriteLineError(params object[] values)
        {
            WriteLine(ConsoleColor.White, "|");
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.Red;
            Write(ConsoleColor.White, "|");
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            if (StarLength - countLength > 0)
                Console.Write(new string(' ', StarLength - countLength));
            Console.WriteLine();
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
            WriteLine(ConsoleColor.White, "|");
        }

        public static void WriteLineChanged(params object[] values)
        {
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.DarkMagenta;
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            if (StarLength - countLength > 0)
                Console.Write(new string(' ', StarLength - countLength));
            Console.WriteLine();
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
        }

        public static void WriteLineWarning(params object[] values)
        {
            WriteLine(ConsoleColor.White, "|");
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.DarkGray;
            Write(ConsoleColor.White, "|");
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            if (StarLength - countLength > 0)
                Console.Write(new string(' ', StarLength - countLength));
            Console.WriteLine();
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
            WriteLine(ConsoleColor.White, "|");
        }

        public static void Write(params object[] values)
        {
            var oldConsoleColor = Console.ForegroundColor;
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                    Console.Write(value);
            Console.ForegroundColor = oldConsoleColor;
        }
    }
}
