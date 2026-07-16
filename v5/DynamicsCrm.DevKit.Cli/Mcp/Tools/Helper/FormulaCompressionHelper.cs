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

        /// <summary>
        /// Attempt to rewrite the host-entity references inside a Calculated (or Rollup)
        /// formula XAML payload so it can be cloned into a different entity.
        ///
        /// Calculated/Rollup XAML embeds the source entity name in <c>EntityName="&lt;name&gt;"</c>
        /// attributes (e.g. <c>EntityName="all_in_one"</c>). Dataverse stores the formula as-is
        /// and does NOT rewrite it when the XAML is attached verbatim to a column on another
        /// entity, which breaks the Power Apps formula editor (it can only resolve the if/condition
        /// branches and not the return <c>SetAttributeValue</c> steps because the referenced
        /// entity does not match the owning entity).
        ///
        /// This helper:
        /// <list type="number">
        /// <item>Decompresses the <paramref name="formulaDefinition"/> (or treats it as plain XML if not gz:-prefixed).</item>
        /// <item>Detects the source entity name from the first <c>EntityName="..."</c> occurrence.</item>
        /// <item>If the detected source differs from <paramref name="targetEntityName"/>, replaces every
        /// <c>EntityName="&lt;source&gt;"</c> with <c>EntityName="&lt;target&gt;"</c>.</item>
        /// <item>Re-compresses (or returns plain XML) and returns the rewritten payload.</item>
        /// </list>
        ///
        /// If parsing/rewrite fails for any reason, the original <paramref name="formulaDefinition"/>
        /// is returned unchanged so callers can fall back to the empty-formula path themselves.
        /// </summary>
        /// <param name="formulaDefinition">Possibly <c>gz:</c>-prefixed formula payload (XAML for Calculated/Rollup; plain text for Power Fx).</param>
        /// <param name="sourceEntityName">Logical name of the source (owning) entity the formula was originally defined on.
        /// When provided and non-empty, it is used directly for rewriting — this is the recommended path because the XAML
        /// relationship key (<c>relatedlinked_&lt;owner&gt;_&lt;RelName&gt;</c>) is ambiguous to parse when the owner entity
        /// name itself contains underscores (e.g. <c>all_in_one</c>). When empty/whitespace, the owner is discovered from
        /// the XAML via <see cref="DiscoverSourceEntityFromFormulaXaml"/> as a fallback.</param>
        /// <param name="targetEntityName">Logical name of the entity the column is being created on (the new owner of the formula).</param>
        /// <param name="rewritten">True when a replacement actually happened (source ≠ target); false when payload was already correct or no EntityName refs were found.</param>
        /// <returns>The (possibly rewritten) formula payload, ready to be handed to Dataverse.</returns>
        public static string RewriteFormulaEntityReferences(string formulaDefinition, string sourceEntityName, string targetEntityName, out bool rewritten)
        {
            rewritten = false;
            if (string.IsNullOrWhiteSpace(formulaDefinition) || string.IsNullOrWhiteSpace(targetEntityName))
                return formulaDefinition;

            try
            {
                var decompressed = Decompress(formulaDefinition);
                if (string.IsNullOrWhiteSpace(decompressed)) return formulaDefinition;

                // ===== Resolve the source (owner) entity embedded in the XAML =====
                // Prefer an explicitly-provided sourceEntityName (caller knows it from the
                // get_tables call on the source entity). This is unambiguous and avoids the
                // regex-discovery ambiguity when the owner logical name contains underscores
                // (e.g. "all_in_one" — the lazy regex would split it as owner="all",
                // rel="in_one_..."). When no explicit source is provided, fall back to
                // discovery from the XAML itself.
                //
                // Calculated field XAML is simple: EntityName="<owner>" attributes. Rollup
                // field XAML is more complex: EntityName attributes refer to the RELATED
                // target entity (e.g. "deleteditemreference"), NOT the owning entity. The
                // owning entity is embedded instead in:
                //   1. CreatedEntities("relatedlinked_<owner>_<RelName>#...")   (rollup)
                //   2. SetAttributeValue DisplayName="...relatedEntity.<owner>_<RelName>"
                string sourceEntity = sourceEntityName;
                if (string.IsNullOrWhiteSpace(sourceEntity))
                    sourceEntity = DiscoverSourceEntityFromFormulaXaml(decompressed);
                if (string.IsNullOrEmpty(sourceEntity))
                    return formulaDefinition; // no owner reference could be detected

                if (string.Equals(sourceEntity, targetEntityName, StringComparison.Ordinal))
                    return formulaDefinition; // already correct, no rewrite needed

                var escapedSource = System.Text.RegularExpressions.Regex.Escape(sourceEntity);
                string newXml = decompressed;

                // Rewrite (1): CreatedEntities("relatedlinked_<source>_<rel>...") keys.
                // Also covers GetEntityCollectionProperty / InputEntities expressions that use
                // the same created-entity-key naming convention.
                newXml = System.Text.RegularExpressions.Regex.Replace(
                    newXml,
                    $@"(relatedlinked_){escapedSource}(_)",
                    $@"$1{targetEntityName}$2",
                    System.Text.RegularExpressions.RegexOptions.Compiled);

                // Rewrite (2): SetAttributeValue DisplayName="...relatedEntity.<source>_<rel>"
                // The relationship suffix is appended after a dot, e.g.
                //   deleteditemreference.deletedobject.all_in_one_DeletedItemReferences
                // →  deleteditemreference.deletedobject.all_allinoneclone3_DeletedItemReferences
                newXml = System.Text.RegularExpressions.Regex.Replace(
                    newXml,
                    $@"(\.){escapedSource}(_[A-Za-z0-9_]+)",
                    $@"$1{targetEntityName}$2",
                    System.Text.RegularExpressions.RegexOptions.Compiled);

                // Rewrite (3): EntityName="<source>" — ONLY for the owning entity. For
                // Calculated fields this is correct (EntityName is the owner). For Rollup
                // fields, EntityName refers to the RELATED entity and must NOT be touched;
                // the discovery step guarantees sourceEntity here is the owner, so this is
                // safe when the value matches the owner entity name.
                newXml = System.Text.RegularExpressions.Regex.Replace(
                    newXml,
                    $@"EntityName=""{escapedSource}""",
                    $@"EntityName=""{targetEntityName}""",
                    System.Text.RegularExpressions.RegexOptions.Compiled);

                if (string.Equals(newXml, decompressed, StringComparison.Ordinal))
                    return formulaDefinition; // nothing changed

                // Re-compress to same format as input (gz: or plain).
                var wasCompressed = formulaDefinition.StartsWith(GzipMarker, StringComparison.Ordinal);
                rewritten = true;
                return wasCompressed ? Compress(newXml) : newXml;
            }
            catch
            {
                // Any parsing/rewrite failure: return original payload untouched.
                // Caller decides whether to drop the formula entirely.
                return formulaDefinition;
            }
        }

        /// <summary>
        /// Discover the source (owning) entity name embedded in a formula XAML payload,
        /// preferring relationship-key patterns that are reliable for Rollup formulas and
        /// falling back to <c>EntityName="..."</c> for plain Calculated formulas.
        ///
        /// For Rollup: the owner entity appears in created-entity keys like
        /// <c>relatedlinked_&lt;owner&gt;_&lt;RelName&gt;#...</c> and in
        /// <c>SetAttributeValue</c> <c>DisplayName="...relatedEntity.&lt;owner&gt;_&lt;RelName&gt;"</c>,
        /// while <c>EntityName="..."</c> refers to the RELATED entity (not the owner).
        ///
        /// For Calculated: <c>EntityName="&lt;owner&gt;"</c> is the only carrier, so it is
        /// used directly.
        ///
        /// IMPORTANT: the owner/rel-suffix split is ambiguous when the owner entity name
        /// itself contains underscores (e.g. <c>all_in_one_DeletedItemReferences</c>).
        /// The greedy-owner + lazy-relsuffix quantifiers below, anchored on the trailing
        /// <c>#</c> (rel key) or <c>"</c> (display name), force the engine to backtrack the
        /// owner down to the largest prefix that still leaves a <c>_&lt;rel&gt;#</c> (or
        /// <c>_&lt;rel&gt;"</c>) tail — yielding the correct owner token.
        /// </summary>
        /// <param name="xaml">Decompressed formula XAML.</param>
        /// <returns>The detected source entity logical name, or null/empty when none was found.</returns>
        private static string DiscoverSourceEntityFromFormulaXaml(string xaml)
        {
            // Prefer relationship-key patterns (rollup-aware). Try the created-entity key
            // first: relatedlinked_<owner>_<RelName>#..., with GREEDY owner + LAZY rel
            // suffix + literal '#' anchor so the owner captures the longest token that
            // still leaves a "_<rel>#" tail (resolves owner names with underscores).
            var relKeyMatch = System.Text.RegularExpressions.Regex.Match(
                xaml,
                @"relatedlinked_([A-Za-z0-9_]+)_([A-Za-z0-9_]+?)#",
                System.Text.RegularExpressions.RegexOptions.Compiled);
            if (relKeyMatch.Success)
                return relKeyMatch.Groups[1].Value;

            // Fallback: SetAttributeValue DisplayName="...relatedEntity.<owner>_<RelName>"
            // Same greedy-owner + lazy-relsuffix strategy, anchored on the closing quote.
            var displayNameMatch = System.Text.RegularExpressions.Regex.Match(
                xaml,
                @"DisplayName=""[^""]*\.([A-Za-z0-9_]+)_([A-Za-z0-9_]+?)""",
                System.Text.RegularExpressions.RegexOptions.Compiled);
            if (displayNameMatch.Success)
                return displayNameMatch.Groups[1].Value;

            // Pure Calculated case: EntityName="<owner>". Return the value; the caller
            // will skip rewriting when it equals the target (already correct).
            var entityMatch = System.Text.RegularExpressions.Regex.Match(
                xaml,
                @"EntityName=""([^""]+)""",
                System.Text.RegularExpressions.RegexOptions.Compiled);
            if (entityMatch.Success)
                return entityMatch.Groups[1].Value;

            return null;
        }
    }
}
