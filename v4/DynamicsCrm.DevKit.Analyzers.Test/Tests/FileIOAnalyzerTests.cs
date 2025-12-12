using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.Analyzers.Test.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.Analyzers.Test.Tests
{
    public class FileIOAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace System.Activities
{
    public abstract class CodeActivity
    {
        protected abstract void Execute(object context);
    }
}
namespace System.IO
{
    public static class File
    {
        public static string ReadAllText(string path) => null;
        public static byte[] ReadAllBytes(string path) => null;
        public static string[] ReadAllLines(string path) => null;
        public static void WriteAllText(string path, string contents) { }
        public static void WriteAllBytes(string path, byte[] bytes) { }
        public static bool Exists(string path) => false;
        public static void Delete(string path) { }
    }
    public class FileStream
    {
        public FileStream(string path, FileMode mode) { }
    }
    public class StreamReader { public StreamReader(string path) { } }
    public class StreamWriter { public StreamWriter(string path) { } }
    public class DirectoryInfo { public DirectoryInfo(string path) { } }
    public class BinaryReader { public BinaryReader(System.IO.Stream s) { } }
    public enum FileMode { Open, Create }
    public abstract class Stream { }
}
";

        private static string WrapInPlugin(string body) => $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        {body}
    }}
}}
";

        private static string WrapInWorkflow(string body) => $@"
{Stubs}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        {body}
    }}
}}
";

        private static string WrapInRegularClass(string body) => $@"
{Stubs}
public class RegularClass
{{
    public void Run()
    {{
        {body}
    }}
}}
";

        #region File.ReadAllText Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_FileReadAllText()
        {
            var src = WrapInPlugin("[|System.IO.File.ReadAllText|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Uses_FileReadAllText()
        {
            var src = WrapInRegularClass("System.IO.File.ReadAllText(\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region File Write Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_FileWriteAllText()
        {
            var src = WrapInPlugin("[|System.IO.File.WriteAllText|](\"test.txt\", \"content\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_FileWriteAllBytes()
        {
            var src = WrapInPlugin("[|System.IO.File.WriteAllBytes|](\"test.bin\", new byte[0]);");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region File Exists/Delete Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_FileExists()
        {
            var src = WrapInPlugin("var exists = [|System.IO.File.Exists|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_FileDelete()
        {
            var src = WrapInPlugin("[|System.IO.File.Delete|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Stream Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewFileStream()
        {
            var src = WrapInPlugin("var fs = [|new System.IO.FileStream|](\"test.txt\", System.IO.FileMode.Open);");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewStreamReader()
        {
            var src = WrapInPlugin("var sr = [|new System.IO.StreamReader|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_NewStreamWriter()
        {
            var src = WrapInPlugin("var sw = [|new System.IO.StreamWriter|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Workflow Tests

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_FileReadAllText()
        {
            var src = WrapInWorkflow("[|System.IO.File.ReadAllText|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_NewStreamWriter()
        {
            var src = WrapInWorkflow("var sw = [|new System.IO.StreamWriter|](\"test.txt\");");
            await CSharpAnalyzerVerifier<FileIOAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
