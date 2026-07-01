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

        #region Workflow Tests

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_GetAwaiterGetResult()
        {
            var src = $@"
{Stubs}
namespace System.Activities
{{
    public abstract class CodeActivity
    {{
        protected abstract void Execute(object context);
    }}
}}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        var task = System.Threading.Tasks.Task.Run(() => {{ }});
        [|task.GetAwaiter().GetResult()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Workflow_Uses_TaskWait()
        {
            var src = $@"
{Stubs}
namespace System.Activities
{{
    public abstract class CodeActivity
    {{
        protected abstract void Execute(object context);
    }}
}}
public class TestWorkflow : System.Activities.CodeActivity
{{
    protected override void Execute(object context)
    {{
        var task = System.Threading.Tasks.Task.Run(() => {{ }});
        [|task.Wait()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Task<T>.Wait Tests

        [Fact]
        public async Task Diagnostic_When_Plugin_Uses_Generic_TaskWait()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = new System.Threading.Tasks.Task<int>();
        [|task.Wait()|];
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion

        #region Edge Case Tests

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Uses_GetResult_Without_GetAwaiter()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var awaiter = new System.Threading.Tasks.TaskAwaiter();
        awaiter.GetResult();
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Uses_Standalone_GetResult()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        GetResult();
    }}

    private void GetResult() {{ }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Waits_On_NonTask_Type()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var worker = new Worker();
        worker.Wait();
    }}

    private sealed class Worker
    {{
        public void Wait() {{ }}
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_TaskResult_Is_Outside_Plugin()
        {
            var src = $@"
{Stubs}
public class RegularClass
{{
    public void Run()
    {{
        var task = new System.Threading.Tasks.Task<int>();
        var result = task.Result;
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Result_Is_On_Dynamic_Value()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        dynamic value = null;
        var result = value.Result;
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task NoDiagnostic_When_Plugin_Uses_Result_On_NonGeneric_Task()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = new System.Threading.Tasks.Task();
        var result = task.GetAwaiter();
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        [Fact]
        public async Task Diagnostic_When_Result_Used_In_ToString_Chain()
        {
            var src = $@"
{Stubs}
public class TestPlugin : Microsoft.Xrm.Sdk.IPlugin
{{
    public void Execute(System.IServiceProvider serviceProvider)
    {{
        var task = new System.Threading.Tasks.Task<int>();
        var x = [|task.Result|].ToString();
    }}
}}
";
            await CSharpAnalyzerVerifier<GetAwaiterGetResultAnalyzer>.VerifyAnalyzerAsync(src);
        }

        #endregion
    }
}
