using System;
using System.Collections.Generic;
using System.Linq;
using DynamicsCrm.DevKit.Analyzers;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Xunit;

namespace DynamicsCrm.DevKit.UnitTests.Analyzers.Tests
{
    public class ExtensionMethodsTests
    {
        #region TryElementAt Tests

        [Fact]
        public void TryElementAt_NullSource_ReturnsFalse()
        {
            Assert.False(((IEnumerable<int>)null).TryElementAt(0, out var result));
            Assert.Equal(default(int), result);
        }

        [Fact]
        public void TryElementAt_EmptySource_ReturnsFalse()
        {
            Assert.False(Array.Empty<int>().TryElementAt(0, out var result));
        }

        [Fact]
        public void TryElementAt_IndexOutOfRange_ReturnsFalse()
        {
            Assert.False(new[] { 1, 2, 3 }.TryElementAt(5, out var result));
        }

        [Fact]
        public void TryElementAt_ValidIndex_ReturnsTrue()
        {
            Assert.True(new[] { 1, 2, 3 }.TryElementAt(1, out var result));
            Assert.Equal(2, result);
        }

        [Fact]
        public void TryElementAt_FirstElement_ReturnsTrue()
        {
            Assert.True(new[] { 42 }.TryElementAt(0, out var result));
            Assert.Equal(42, result);
        }

        #endregion

        #region TryFindArgument Tests

        [Fact]
        public void TryFindArgument_NullAttribute_ReturnsFalse()
        {
            Assert.False(((AttributeSyntax)null).TryFindArgument(0, null, out var arg));
            Assert.Null(arg);
        }

        [Fact]
        public void TryFindArgument_NoArgumentList_ReturnsFalse()
        {
            var attr = GetAttribute("[System.Obsolete]");
            Assert.False(attr.TryFindArgument(0, null, out var arg));
        }

        [Fact]
        public void TryFindArgument_ByNameColon_Found_ReturnsTrue()
        {
            var attr = GetAttribute(@"[Test(message: ""hello"")]");
            Assert.True(attr.TryFindArgument(0, "message", out var arg));
            Assert.NotNull(arg);
        }

        [Fact]
        public void TryFindArgument_ByNameColon_NotFound_FallsThroughToIndex()
        {
            var attr = GetAttribute(@"[Test(""arg0"", ""arg1"")]");
            Assert.True(attr.TryFindArgument(1, "message", out var arg));
        }

        [Fact]
        public void TryFindArgument_ByNameColon_NotFound_IndexOutOfRange()
        {
            var attr = GetAttribute(@"[Test(""arg0"")]");
            Assert.False(attr.TryFindArgument(5, "message", out var arg));
        }

        [Fact]
        public void TryFindArgument_ByNameColon_Found_IgnoresIndex()
        {
            var attr = GetAttribute(@"[Test(message: ""hello"", ""arg"")]");
            Assert.True(attr.TryFindArgument(100, "message", out var arg));
        }

        [Fact]
        public void TryFindArgument_NoNameSpecified_UsesIndex_Valid()
        {
            var attr = GetAttribute(@"[Test(""arg0"", ""arg1"")]");
            Assert.True(attr.TryFindArgument(0, null, out var arg));
        }

        [Fact]
        public void TryFindArgument_NoNameSpecified_UsesIndex_Invalid()
        {
            var attr = GetAttribute(@"[Test(""arg0"")]");
            Assert.False(attr.TryFindArgument(5, null, out var arg));
        }

        [Fact]
        public void TryFindArgument_NoName_EmptyArgList_ReturnsFalse()
        {
            var attr = GetAttribute("[Test()]");
            Assert.False(attr.TryFindArgument(0, null, out var arg));
        }

        [Fact]
        public void TryFindArgument_ByNameEquals_Skipped_FallsThroughToIndex()
        {
            var attr = GetAttribute(@"[Test(Name = ""value"", ""arg0"")]");
            Assert.True(attr.TryFindArgument(1, "NotExists", out var arg));
        }

        private static AttributeSyntax GetAttribute(string code)
        {
            var tree = CSharpSyntaxTree.ParseText(code + " class C { }");
            return tree.GetRoot().DescendantNodes().OfType<AttributeSyntax>().First();
        }

        #endregion

        #region RemoveWhitespace Tests

        [Fact]
        public void RemoveWhitespace_RemovesAllWhitespace()
        {
            Assert.Equal("ab", " a b ".RemoveWhitespace());
        }

        [Fact]
        public void RemoveWhitespace_NoWhitespace_ReturnsSame()
        {
            Assert.Equal("abc", "abc".RemoveWhitespace());
        }

        [Fact]
        public void RemoveWhitespace_OnlyWhitespace_ReturnsEmpty()
        {
            Assert.Equal("", "   \t\n\r".RemoveWhitespace());
        }

        #endregion
    }
}