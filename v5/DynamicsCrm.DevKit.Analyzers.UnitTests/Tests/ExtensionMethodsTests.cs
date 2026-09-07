using System;
using System.Collections.Generic;
using System.Linq;
using DynamicsCrm.DevKit.Analyzers;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Analyzers.UnitTests.Tests
{
    [TestClass]
    public class ExtensionMethodsTests
    {
        #region TryElementAt Tests

        [TestMethod]
        public void TryElementAt_NullSource_ReturnsFalse()
        {
            Assert.IsFalse(((IEnumerable<int>)null).TryElementAt(0, out var result));
            Assert.AreEqual(default(int), result);
        }

        [TestMethod]
        public void TryElementAt_EmptySource_ReturnsFalse()
        {
            Assert.IsFalse(Array.Empty<int>().TryElementAt(0, out var result));
        }

        [TestMethod]
        public void TryElementAt_IndexOutOfRange_ReturnsFalse()
        {
            Assert.IsFalse(new[] { 1, 2, 3 }.TryElementAt(5, out var result));
        }

        [TestMethod]
        public void TryElementAt_ValidIndex_ReturnsTrue()
        {
            Assert.IsTrue(new[] { 1, 2, 3 }.TryElementAt(1, out var result));
            Assert.AreEqual(2, result);
        }

        [TestMethod]
        public void TryElementAt_FirstElement_ReturnsTrue()
        {
            Assert.IsTrue(new[] { 42 }.TryElementAt(0, out var result));
            Assert.AreEqual(42, result);
        }

        #endregion

        #region TryFindArgument Tests

        [TestMethod]
        public void TryFindArgument_NullAttribute_ReturnsFalse()
        {
            Assert.IsFalse(((AttributeSyntax)null).TryFindArgument(0, null, out var arg));
            Assert.IsNull(arg);
        }

        [TestMethod]
        public void TryFindArgument_NoArgumentList_ReturnsFalse()
        {
            var attr = GetAttribute("[System.Obsolete]");
            Assert.IsFalse(attr.TryFindArgument(0, null, out var arg));
        }

        [TestMethod]
        public void TryFindArgument_ByNameColon_Found_ReturnsTrue()
        {
            var attr = GetAttribute(@"[Test(message: ""hello"")]");
            Assert.IsTrue(attr.TryFindArgument(0, "message", out var arg));
            Assert.IsNotNull(arg);
        }

        [TestMethod]
        public void TryFindArgument_ByNameColon_NotFound_FallsThroughToIndex()
        {
            var attr = GetAttribute(@"[Test(""arg0"", ""arg1"")]");
            Assert.IsTrue(attr.TryFindArgument(1, "message", out var arg));
        }

        [TestMethod]
        public void TryFindArgument_ByNameColon_NotFound_IndexOutOfRange()
        {
            var attr = GetAttribute(@"[Test(""arg0"")]");
            Assert.IsFalse(attr.TryFindArgument(5, "message", out var arg));
        }

        [TestMethod]
        public void TryFindArgument_ByNameColon_Found_IgnoresIndex()
        {
            var attr = GetAttribute(@"[Test(message: ""hello"", ""arg"")]");
            Assert.IsTrue(attr.TryFindArgument(100, "message", out var arg));
        }

        [TestMethod]
        public void TryFindArgument_NoNameSpecified_UsesIndex_Valid()
        {
            var attr = GetAttribute(@"[Test(""arg0"", ""arg1"")]");
            Assert.IsTrue(attr.TryFindArgument(0, null, out var arg));
        }

        [TestMethod]
        public void TryFindArgument_NoNameSpecified_UsesIndex_Invalid()
        {
            var attr = GetAttribute(@"[Test(""arg0"")]");
            Assert.IsFalse(attr.TryFindArgument(5, null, out var arg));
        }

        [TestMethod]
        public void TryFindArgument_NoName_EmptyArgList_ReturnsFalse()
        {
            var attr = GetAttribute("[Test()]");
            Assert.IsFalse(attr.TryFindArgument(0, null, out var arg));
        }

        [TestMethod]
        public void TryFindArgument_ByNameEquals_Skipped_FallsThroughToIndex()
        {
            var attr = GetAttribute(@"[Test(Name = ""value"", ""arg0"")]");
            Assert.IsTrue(attr.TryFindArgument(1, "NotExists", out var arg));
        }

        private static AttributeSyntax GetAttribute(string code)
        {
            var tree = CSharpSyntaxTree.ParseText(code + " class C { }");
            return tree.GetRoot().DescendantNodes().OfType<AttributeSyntax>().First();
        }

        #endregion

        #region RemoveWhitespace Tests

        [TestMethod]
        public void RemoveWhitespace_RemovesAllWhitespace()
        {
            Assert.AreEqual("ab", " a b ".RemoveWhitespace());
        }

        [TestMethod]
        public void RemoveWhitespace_NoWhitespace_ReturnsSame()
        {
            Assert.AreEqual("abc", "abc".RemoveWhitespace());
        }

        [TestMethod]
        public void RemoveWhitespace_OnlyWhitespace_ReturnsEmpty()
        {
            Assert.AreEqual("", "   \t\n\r".RemoveWhitespace());
        }

        #endregion
    }
}