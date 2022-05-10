using DynamicsCrm.DevKit.Shared;
using System;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli
{
    internal static class CliLog
    {
        public const int StarLength = 110;
        public static void SetupCliLog()
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Title = Const.WindowTitle;
        }

        public static void WriteLine(params object[] values)
        {
            var oldConsoleColor = Console.ForegroundColor;
            foreach (var value in values)
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                    Console.Write(value);
            Console.WriteLine(" ");
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
            {
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            }
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
            WriteLine(ConsoleColor.Black, "█");
            WriteLine(ConsoleColor.White, "|");
        }

        public static void WriteLineWarning(params object[] values)
        {
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.DarkGray;
            Write(ConsoleColor.White, "|");
            foreach (var value in values)
            {
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            }
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
            WriteLine(ConsoleColor.Black, "█");
        }

        public static void WriteWarning(params object[] values)
        {
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.DarkGray;
            foreach (var value in values)
            {
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            }
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
        }

        public static void WriteSuccess(params object[] values)
        {
            var oldConsoleBackgroundColor = Console.BackgroundColor;
            var oldConsoleForegroundColor = Console.ForegroundColor;
            var countLength = 0;
            Console.BackgroundColor = ConsoleColor.DarkGreen;
            foreach (var value in values)
            {
                if (value is ConsoleColor color)
                    Console.ForegroundColor = color;
                else
                {
                    Console.Write(value);
                    countLength += value.ToString().Length;
                }
            }
            Console.ForegroundColor = oldConsoleForegroundColor;
            Console.BackgroundColor = oldConsoleBackgroundColor;
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
        public static void Waiting()
        {
            Waiting("");
        }

        public static void Waiting(string message = "")
        {
            Write(ConsoleColor.White, "| ", message);
            int counter = 0;
            while (true)
            {
                switch (counter % 4)
                {
                    case 0: Console.Write("."); counter = 0; break;
                    case 1: Console.Write("."); break;
                    case 2: Console.Write("."); break;
                    case 3: Console.Write("."); break;
                }
                counter++;
                Thread.Sleep(1000);
            }
        }
    }
}
