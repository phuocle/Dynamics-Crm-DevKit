using DynamicsCrm.DevKit.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        [STAThread]
        public static void Main(string[] args)
        {
            CliLog.SetupCliLog();
#if DEBUG
            CliLog.WriteLine(ConsoleColor.Red, new string('█', CliLog.StarLength));
            CliLog.WriteLine(ConsoleColor.Red, "!!! DEBUG !!!");
            CliLog.WriteLine(ConsoleColor.Red, new string('█', CliLog.StarLength));
#endif
            CliLog.WriteLine(ConsoleColor.Green, " ____                              _           ____                  ____             _  ___ _     ____ _ _ ");
            CliLog.WriteLine(ConsoleColor.Green, "|  _ \\ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \\  _____   _| |/ (_) |_  / ___| (_)");
            CliLog.WriteLine(ConsoleColor.Green, "| | | | | | | '_ \\ / _` | '_ ` _ \\| |/ __/ __| |   | '__| '_ ` _ \\  | | | |/ _ \\ \\ / / ' /| | __|| |   | | |");
            CliLog.WriteLine(ConsoleColor.Green, "| |_| | |_| | | | | (_| | | | | | | | (__\\__ \\ |___| |  | | | | | |_| |_| |  __/\\ V /| . \\| | |_ | |___| | |");
            CliLog.WriteLine(ConsoleColor.Green, "|____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|___/\\____|_|  |_| |_| |_(_)____/ \\___| \\_/ |_|\\_\\_|\\__(_)____|_|_|");
            CliLog.WriteLine(ConsoleColor.Green, "       |___/                        ", ConsoleColor.White, "https://github.com/phuocle/Dynamics-Crm-DevKit", ConsoleColor.Blue, $" {Const.Version}", ConsoleColor.White, " Build: ", ConsoleColor.Blue, Const.Build);
            CliLog.WriteLine();


#if DEBUG



            CliLog.WriteLine("ABC");
            CliLog.WriteLineChanged(ConsoleColor.White, "123 ", ConsoleColor.Red, "456 ", ConsoleColor.Blue, "789");
            CliLog.WriteLine("DEF");

#endif



#if DEBUG
            CliLog.WriteLine(ConsoleColor.Red, new string('█', CliLog.StarLength));
            CliLog.WriteLine(ConsoleColor.Red, "!!! FINISHED !!!");
            CliLog.WriteLine(ConsoleColor.Red, new string('█', CliLog.StarLength));
            Console.ReadKey();
#endif
        }
    }
}
