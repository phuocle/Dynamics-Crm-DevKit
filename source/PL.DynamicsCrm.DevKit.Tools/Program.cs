namespace PL.DynamicsCrm.DevKit.Tools
{
    public class Program
    {
        static void Main(string[] args)
        {
            var @function = args[0];
            switch (function)
            {
                case "coverage":
                    CoverageToXml.Convert(args);
                    break;
                case "nuglify":
                    NUglify.Minify(args);
                    break;
            }
        }
    }
}
