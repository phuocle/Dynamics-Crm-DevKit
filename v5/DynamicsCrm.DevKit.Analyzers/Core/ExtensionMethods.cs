using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static class ExtensionMethods
    {
        public static bool TryElementAt<T>(this IEnumerable<T> source, int index, out T result)
        {
            result = default(T);
            if (source == null)
            {
                return false;
            }
            var current = 0;
            using (var e = source.GetEnumerator())
            {
                while (e.MoveNext())
                {
                    if (current == index)
                    {
                        result = e.Current;
                        return true;
                    }

                    current++;
                }
            }
            return false;
        }

        public static bool TryFindArgument(this AttributeSyntax attribute, int argumentIndex, string argumentName, out AttributeArgumentSyntax argument)
        {
            argument = null;
            if (attribute?.ArgumentList == null)
            {
                return false;
            }
            if (argumentName != null)
            {
                foreach (var candidate in attribute.ArgumentList.Arguments)
                {
                    if (candidate.NameColon is NameColonSyntax nameColon &&
                        nameColon.Name.Identifier.ValueText == argumentName)
                    {
                        argument = candidate;
                    }
                }
            }
            if (argument != null)
            {
                return true;
            }
            return attribute.ArgumentList.Arguments.TryElementAt(argumentIndex, out argument);
        }

        public static string RemoveWhitespace(this string input)
        {
            return new string(input.ToCharArray()
                .Where(c => !Char.IsWhiteSpace(c))
                .ToArray());
        }
    }
}
