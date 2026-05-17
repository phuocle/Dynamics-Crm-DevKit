using System.Linq;
using System.Threading;
using DynamicsCrm.DevKit.Analyzers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class AnalyzerHelperTests
    {
        #region InheritsFromWorkflowBase Tests

        [Fact]
        public void InheritsFromWorkflowBase_NullSymbol_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.InheritsFromWorkflowBase(null));
        }

        [Fact]
        public void InheritsFromWorkflowBase_OrdinaryClass_ReturnsFalse()
        {
            var symbol = GetClassSymbol("public class TestClass { }");
            Assert.False(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [Fact]
        public void InheritsFromWorkflowBase_InheritsFromCodeActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.CodeActivity { }
namespace System.Activities { public class CodeActivity { } }", "TestClass");
            Assert.True(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [Fact]
        public void InheritsFromWorkflowBase_InheritsFromNativeActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.NativeActivity { }
namespace System.Activities { public class NativeActivity { } }", "TestClass");
            Assert.True(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [Fact]
        public void InheritsFromWorkflowBase_InheritsFromActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.Activity { }
namespace System.Activities { public class Activity { } }", "TestClass");
            Assert.True(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [Fact]
        public void InheritsFromWorkflowBase_DeepInheritance_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : BaseClass { }
public class BaseClass : System.Activities.CodeActivity { }
namespace System.Activities { public class CodeActivity { } }", "TestClass");
            Assert.True(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        #endregion

        #region ImplementsIPlugin Tests

        [Fact]
        public void ImplementsIPlugin_NullSymbol_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.ImplementsIPlugin(null));
        }

        [Fact]
        public void ImplementsIPlugin_ClassNotImplementingIPlugin_ReturnsFalse()
        {
            var symbol = GetClassSymbol("public class TestClass { }");
            Assert.False(AnalyzerHelper.ImplementsIPlugin(symbol));
        }

        #endregion

        #region IsPluginOrWorkflowClass Tests

        [Fact]
        public void IsPluginOrWorkflowClass_NullSymbol_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.IsPluginOrWorkflowClass(null));
        }

        #endregion

        #region IsInsidePluginOrWorkflow Tests

        [Fact]
        public void IsInsidePluginOrWorkflow_NullNode_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("class C { }");
            var compilation = CreateCompilation(tree);
            var model = compilation.GetSemanticModel(tree);
            Assert.False(AnalyzerHelper.IsInsidePluginOrWorkflow(null, model, CancellationToken.None));
        }

        [Fact]
        public void IsInsidePluginOrWorkflow_NullSemanticModel_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("class C { public void M() { var x = 1; } }");
            var node = tree.GetRoot().DescendantNodes().OfType<LocalDeclarationStatementSyntax>().First();
            Assert.False(AnalyzerHelper.IsInsidePluginOrWorkflow(node, null, CancellationToken.None));
        }

        [Fact]
        public void IsInsidePluginOrWorkflow_NotInsideClass_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("namespace N { }");
            var compilation = CreateCompilation(tree);
            var model = compilation.GetSemanticModel(tree);
            var nsNode = tree.GetRoot().DescendantNodes().OfType<NamespaceDeclarationSyntax>().First();
            Assert.False(AnalyzerHelper.IsInsidePluginOrWorkflow(nsNode, model, CancellationToken.None));
        }

        #endregion

        #region RemoveQuote Tests

        [Fact]
        public void RemoveQuote_Null_ReturnsNull()
        {
            Assert.Null(AnalyzerHelper.RemoveQuote(null));
        }

        [Fact]
        public void RemoveQuote_RemovesSurroundingQuotes()
        {
            Assert.Equal("hello", AnalyzerHelper.RemoveQuote("\"hello\""));
        }

        #endregion

        #region TestIsEmpty Tests

        [Fact]
        public void TestIsEmpty_NullString_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.TestIsEmpty(null));
        }

        [Fact]
        public void TestIsEmpty_EmptyString_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.TestIsEmpty(""));
        }

        [Fact]
        public void TestIsEmpty_OnlyWhitespace_BetweenQuotes_ReturnsTrue()
        {
            Assert.True(AnalyzerHelper.TestIsEmpty("\"   \""));
        }

        [Fact]
        public void TestIsEmpty_NonEmptyString_ReturnsFalse()
        {
            Assert.False(AnalyzerHelper.TestIsEmpty("\"hello\""));
        }

        [Fact]
        public void TestIsEmpty_EmptyQuotes_ReturnsTrue()
        {
            Assert.True(AnalyzerHelper.TestIsEmpty("\"\""));
        }

        #endregion

        #region Helpers

        private static INamedTypeSymbol GetClassSymbol(string sourceCode, string className = null)
        {
            var tree = CSharpSyntaxTree.ParseText(sourceCode);
            var compilation = CSharpCompilation.Create("TestAssembly")
                .AddSyntaxTrees(tree)
                .AddReferences(MetadataReference.CreateFromFile(typeof(object).Assembly.Location));
            var classDecls = tree.GetRoot().DescendantNodes().OfType<ClassDeclarationSyntax>();
            var classDecl = className != null
                ? classDecls.First(c => c.Identifier.Text == className)
                : classDecls.First();
            var semanticModel = compilation.GetSemanticModel(tree);
            return semanticModel.GetDeclaredSymbol(classDecl);
        }

        private static CSharpCompilation CreateCompilation(SyntaxTree tree)
        {
            return CSharpCompilation.Create("TestAssembly")
                .AddSyntaxTrees(tree)
                .AddReferences(MetadataReference.CreateFromFile(typeof(object).Assembly.Location));
        }

        #endregion
    }
}