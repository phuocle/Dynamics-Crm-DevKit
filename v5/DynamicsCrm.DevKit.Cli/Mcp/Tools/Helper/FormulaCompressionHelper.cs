using System;
using System.IO;
using System.IO.Compression;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Compress / decompress Dataverse <c>FormulaDefinition</c> values so that
    /// <c>get_tables</c> structured output stays small even for Calculated / Rollup
    /// columns whose formula is stored as a large XAML (XML workflow definition).
    ///
    /// Compressed payloads are prefixed with the literal marker <c>"gz:"</c> so the
    /// <c>upsert_column</c> tool can detect them and transparently decompress before
    /// sending the raw formula to Dataverse. Plain-text values (no marker) are passed
    /// through unchanged, which keeps the contract safe for callers that hand-write a
    /// small Power Fx formula.
    /// </summary>
    internal static class FormulaCompressionHelper
    {
        /// <summary>Prefix identifying a gzip+base64 compressed payload.</summary>
        public const string GzipMarker = "gz:";

        /// <summary>
        /// Gzip-compress <paramref name="raw"/> and return <c>"gz:" + base64</c>.
        /// Returns <c>null</c> for null/whitespace input so callers can rely on the
        /// <c>[JsonIgnore(WhenWritingNull)]</c> convention used by the entry models.
        /// </summary>
        public static string Compress(string raw)
        {
            if (string.IsNullOrWhiteSpace(raw)) return null;

            var bytes = Encoding.UTF8.GetBytes(raw);
            using var output = new MemoryStream();
            // LeaveOpen not needed; input stream is short-lived.
            using (var gzip = new GZipStream(output, CompressionLevel.Optimal, leaveOpen: true))
            {
                gzip.Write(bytes, 0, bytes.Length);
            }
            return GzipMarker + Convert.ToBase64String(output.ToArray());
        }

        /// <summary>
        /// Inverse of <see cref="Compress"/>. If <paramref name="value"/> carries the
        /// <c>"gz:"</c> marker the remainder is base64-decoded then gzip-inflated.
        /// Any other value is returned unchanged (plain-text Power Fx formula, raw
        /// XAML, empty string). Returns <c>null</c> only for null input.
        /// </summary>
        public static string Decompress(string value)
        {
            if (value == null) return null;
            if (!value.StartsWith(GzipMarker, StringComparison.Ordinal)) return value;

            var b64 = value.Substring(GzipMarker.Length);
            try
            {
                var bytes = Convert.FromBase64String(b64);
                using var input = new MemoryStream(bytes);
                using var gzip = new GZipStream(input, CompressionMode.Decompress);
                using var output = new MemoryStream();
                gzip.CopyTo(output);
                return Encoding.UTF8.GetString(output.ToArray());
            }
            catch (FormatException)
            {
                // Not actually base64 despite the marker — return as-is rather than throw,
                // so a malformed/partial payload never breaks a column create.
                return value;
            }
            catch (InvalidDataException)
            {
                return value;
            }
        }
    }
}
