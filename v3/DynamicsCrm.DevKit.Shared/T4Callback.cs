using Microsoft.VisualStudio.TextTemplating.VSHost;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    internal class T4Callback : ITextTemplatingCallback
    {
        public List<string> errorMessages = new List<string>();
        public string fileExtension = ".txt";
        public Encoding outputEncoding = Encoding.UTF8;

        public void ErrorCallback(bool warning, string message, int line, int column)
        {
            errorMessages.Add($"line: {line}, column: {column}, message: {message}");
        }

        public void SetFileExtension(string extension)
        {
            fileExtension = extension;
        }

        public void SetOutputEncoding(Encoding encoding, bool fromOutputDirective)
        {
            outputEncoding = encoding;
        }
    }
}
