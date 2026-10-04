using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Pure client-side validator for Dataverse autonumber patterns
    /// (<c>StringAttributeMetadata.AutoNumberFormat</c>).
    ///
    /// Dataverse does NOT validate the placeholders when the column is created or
    /// updated — a bad pattern only surfaces when the first record is saved. This
    /// validator catches those errors at tool-validation time instead.
    ///
    /// Placeholder rules (learn.microsoft.com: create-auto-number-attributes):
    /// - <c>{SEQNUM:n}</c> — n ≥ 1, a MINIMUM zero-padded length (the number keeps growing).
    /// - <c>{RANDSTRING:n}</c> — n must be 1-6 (7+ fails at record save time).
    /// - <c>{DATETIMEUTC:fmt}</c> — fmt is any .NET date/time format string.
    /// Placeholder names are upper-case only (matches the Microsoft docs; case
    /// sensitivity is unverified there, strict is the safe choice).
    /// </summary>
    internal static class AutoNumberFormatValidator
    {
        private const int MaxPatternLength = 4000;

        private static readonly Regex PlaceholderRegex =
            new(@"\{(?<name>[A-Z]+):(?<arg>[^{}]+)\}", RegexOptions.Compiled);

        private static readonly Regex AnyNamedPlaceholderRegex =
            new(@"\{(?<name>[A-Za-z]+):", RegexOptions.Compiled);

        /// <summary>
        /// Validate an autonumber pattern.
        /// Returns null when the pattern is valid; otherwise an error message.
        /// </summary>
        /// <param name="pattern">The raw pattern as passed by the caller.</param>
        /// <param name="estimatedMinLength">
        /// Literal characters + minimum SEQNUM digits + RANDSTRING characters +
        /// the formatted DATETIMEUTC length — a floor for the column's MaxLength.
        /// </param>
        /// <param name="warnings">Non-fatal findings (e.g. pattern without SEQNUM).</param>
        public static string Validate(string pattern, out int estimatedMinLength, out List<string> warnings)
        {
            estimatedMinLength = 0;
            warnings = new List<string>();

            var trimmed = pattern?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return "auto_number_format is empty. Pass a pattern like 'TKT-{SEQNUM:5}' or omit it.";

            if (trimmed.Length > MaxPatternLength)
                return $"auto_number_format is {trimmed.Length} characters — the maximum is {MaxPatternLength} (the string MaxLength cap).";

            // Minimum output length = literal characters (everything outside
            // placeholders) + the minimum length contributed by each placeholder.
            var remainder = PlaceholderRegex.Replace(trimmed, "");
            var minLength = remainder.Length;
            var hasSeqNum = false;

            foreach (Match match in PlaceholderRegex.Matches(trimmed))
            {
                var name = match.Groups["name"].Value;
                var arg = match.Groups["arg"].Value;

                switch (name)
                {
                    case "SEQNUM":
                        if (!int.TryParse(arg, out var seq) || seq < 1)
                            return $"Invalid placeholder {{{name}:{arg}}} — SEQNUM needs an integer ≥ 1 (minimum zero-padded length), e.g. {{SEQNUM:5}}.";
                        minLength += seq;
                        hasSeqNum = true;
                        break;

                    case "RANDSTRING":
                        if (!int.TryParse(arg, out var rand) || rand < 1 || rand > 6)
                            return $"Invalid placeholder {{{name}:{arg}}} — RANDSTRING needs an integer 1-6 (Microsoft limit; 7+ fails when a record is saved), e.g. {{RANDSTRING:6}}.";
                        minLength += rand;
                        break;

                    case "DATETIMEUTC":
                        if (string.IsNullOrWhiteSpace(arg))
                            return $"Invalid placeholder {{{name}:{arg}}} — DATETIMEUTC needs a non-empty .NET date/time format string, e.g. {{DATETIMEUTC:yyyyMMddhhmmss}}.";
                        string formatted;
                        try
                        {
                            formatted = DateTime.UtcNow.ToString(arg, CultureInfo.InvariantCulture);
                        }
                        catch (FormatException)
                        {
                            return $"Invalid placeholder {{{name}:{arg}}} — '{arg}' is not a valid .NET date/time format string.";
                        }
                        minLength += formatted.Length;
                        break;

                    default:
                        return
                            $"Unknown autonumber placeholder '{{{name}:{arg}}}'. " +
                            "Valid placeholders: {SEQNUM:n}, {RANDSTRING:n} (1-6), {DATETIMEUTC:format}.";
                }
            }

            // Any brace left outside a matched placeholder is unbalanced or malformed.
            if (remainder.Contains('{') || remainder.Contains('}'))
            {
                var named = AnyNamedPlaceholderRegex.Match(remainder);
                if (named.Success && named.Groups["name"].Value != named.Groups["name"].Value.ToUpperInvariant())
                    return
                        $"Invalid placeholder '{{{named.Groups["name"].Value}:…}}' — placeholder names are case-sensitive upper-case: " +
                        "{SEQNUM:n}, {RANDSTRING:n}, {DATETIMEUTC:format}.";
                return
                    "auto_number_format has unbalanced or malformed braces. " +
                    "Every placeholder must look like {SEQNUM:n}, {RANDSTRING:n} (1-6), or {DATETIMEUTC:format}.";
            }

            if (!hasSeqNum)
                warnings.Add(
                    "auto_number_format has no {SEQNUM:n} placeholder — generated values may not be unique. " +
                    "Add {SEQNUM:n} (e.g. {RANDSTRING:6} alone is not guaranteed unique).");

            estimatedMinLength = minLength;
            return null;
        }
    }
}
