using System.Linq;
using System.Threading;
using DynamicsCrm.DevKit.Analyzers;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Analyzers.UnitTests.Tests
{
    [TestClass]
    public class AnalyzerHelperTests
    {
        #region InheritsFromWorkflowBase Tests

        [TestMethod]
        public void InheritsFromWorkflowBase_NullSymbol_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.InheritsFromWorkflowBase(null));
        }

        [TestMethod]
        public void InheritsFromWorkflowBase_OrdinaryClass_ReturnsFalse()
        {
            var symbol = GetClassSymbol("public class TestClass { }");
            Assert.IsFalse(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [TestMethod]
        public void InheritsFromWorkflowBase_InheritsFromCodeActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.CodeActivity { }
namespace System.Activities { public class CodeActivity { } }", "TestClass");
            Assert.IsTrue(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [TestMethod]
        public void InheritsFromWorkflowBase_InheritsFromNativeActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.NativeActivity { }
namespace System.Activities { public class NativeActivity { } }", "TestClass");
            Assert.IsTrue(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [TestMethod]
        public void InheritsFromWorkflowBase_InheritsFromActivity_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : System.Activities.Activity { }
namespace System.Activities { public class Activity { } }", "TestClass");
            Assert.IsTrue(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        [TestMethod]
        public void InheritsFromWorkflowBase_DeepInheritance_ReturnsTrue()
        {
            var symbol = GetClassSymbol(@"
public class TestClass : BaseClass { }
public class BaseClass : System.Activities.CodeActivity { }
namespace System.Activities { public class CodeActivity { } }", "TestClass");
            Assert.IsTrue(AnalyzerHelper.InheritsFromWorkflowBase(symbol));
        }

        #endregion

        #region ImplementsIPlugin Tests

        [TestMethod]
        public void ImplementsIPlugin_NullSymbol_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.ImplementsIPlugin(null));
        }

        [TestMethod]
        public void ImplementsIPlugin_ClassNotImplementingIPlugin_ReturnsFalse()
        {
            var symbol = GetClassSymbol("public class TestClass { }");
            Assert.IsFalse(AnalyzerHelper.ImplementsIPlugin(symbol));
        }

        #endregion

        #region IsPluginOrWorkflowClass Tests

        [TestMethod]
        public void IsPluginOrWorkflowClass_NullSymbol_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.IsPluginOrWorkflowClass(null));
        }

        #endregion

        #region IsInsidePluginOrWorkflow Tests

        [TestMethod]
        public void IsInsidePluginOrWorkflow_NullNode_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("class C { }");
            var compilation = CreateCompilation(tree);
            var model = compilation.GetSemanticModel(tree);
            Assert.IsFalse(AnalyzerHelper.IsInsidePluginOrWorkflow(null, model, CancellationToken.None));
        }

        [TestMethod]
        public void IsInsidePluginOrWorkflow_NullSemanticModel_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("class C { public void M() { var x = 1; } }");
            var node = tree.GetRoot().DescendantNodes().OfType<LocalDeclarationStatementSyntax>().First();
            Assert.IsFalse(AnalyzerHelper.IsInsidePluginOrWorkflow(node, null, CancellationToken.None));
        }

        [TestMethod]
        public void IsInsidePluginOrWorkflow_NotInsideClass_ReturnsFalse()
        {
            var tree = CSharpSyntaxTree.ParseText("namespace N { }");
            var compilation = CreateCompilation(tree);
            var model = compilation.GetSemanticModel(tree);
            var nsNode = tree.GetRoot().DescendantNodes().OfType<NamespaceDeclarationSyntax>().First();
            Assert.IsFalse(AnalyzerHelper.IsInsidePluginOrWorkflow(nsNode, model, CancellationToken.None));
        }

        #endregion

        #region RemoveQuote Tests

        [TestMethod]
        public void RemoveQuote_Null_ReturnsNull()
        {
            Assert.IsNull(AnalyzerHelper.RemoveQuote(null));
        }

        [TestMethod]
        public void RemoveQuote_RemovesSurroundingQuotes()
        {
            Assert.AreEqual("hello", AnalyzerHelper.RemoveQuote("\"hello\""));
        }

        #endregion

        #region TestIsEmpty Tests

        [TestMethod]
        public void TestIsEmpty_NullString_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.TestIsEmpty(null));
        }

        [TestMethod]
        public void TestIsEmpty_EmptyString_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.TestIsEmpty(""));
        }

        [TestMethod]
        public void TestIsEmpty_OnlyWhitespace_BetweenQuotes_ReturnsTrue()
        {
            Assert.IsTrue(AnalyzerHelper.TestIsEmpty("\"   \""));
        }

        [TestMethod]
        public void TestIsEmpty_NonEmptyString_ReturnsFalse()
        {
            Assert.IsFalse(AnalyzerHelper.TestIsEmpty("\"hello\""));
        }

        [TestMethod]
        public void TestIsEmpty_EmptyQuotes_ReturnsTrue()
        {
            Assert.IsTrue(AnalyzerHelper.TestIsEmpty("\"\""));
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