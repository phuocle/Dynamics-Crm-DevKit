using System.Threading.Tasks;
using DynamicsCrm.DevKit.Analyzers.CrmAnalyzers;
using DynamicsCrm.DevKit.UnitTests.Analyzers.Verifier;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class GetAwaiterGetResultAnalyzerTests
    {
        private const string Stubs = @"
namespace Microsoft.Xrm.Sdk
{
    public interface IPlugin
    {
        void Execute(System.IServiceProvider serviceProvider);
    }
}
namespace System.Threading.Tasks
{
    public class Task
    {
        public TaskAwaiter GetAwaiter() => new TaskAwaiter();
        public void Wait() { }
        public static Task Run(System.Action action) => new Task();
    }
    public class Task<TResult>
    {
        public TaskAwaiter<TResult> GetAwaiter() => new TaskAwaiter<TResult>();
        public TResult Result { get; }
        public void Wait() { }
    }
    public struct TaskAwaiter
    {
        public void GetResult() { }
    }
    public struct TaskAwaiter<TResult>
    {
        public TResult GetResult() => default;
    }
}
";

        #region Diagnostic Tests - GetAwaiter().GetResult()

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_GetAwaiterGetResult()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = System.Threading.Tasks.Task.Run(() => {{ }});
        [|task.GetAwaiter().GetResult()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Diagnostic Tests - Task.Wait()

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_TaskWait()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = System.Threading.Tasks.Task.Run(() => {{ }});
        [|task.Wait()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Diagnostic Tests - Task.Result

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_TaskResult()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = new System.Threading.Tasks.Task<int>();
        var result = [|task.Result|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region No Diagnostic Tests

        [Fact]
        public async Task NoDiagnostic_When_NonPlugin_Uses_GetAwaiterGetResult()
        {
            var src = $@"
{Stubs}
public class RegularClass
{{
    public void DoWork()
    {{
        var task = System.Threading.Tasks.Task.Run(() => {{ }});
        task.GetAwaiter().GetResult();
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
