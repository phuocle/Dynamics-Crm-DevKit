# Lessons: Clone Dataverse Calculated Column Across Entities

## Task summary

Clone the calculated column whose display name starts with `40` from table `All In One` (`all_in_one`) to table `All In One Clone` (`all_allinoneclone`), preserving the formula body correctly.

## Verified result

```
Source table: all_in_one (All In One)
Target table: all_allinoneclone (All In One Clone)
Source column: all_40calculated (display: 40.Calculated, type: String, sourceType: 1)
SUCCESS: Created column all_40calculated_clone with id ff36177a-5b82-f111-8075-70a8a5b16a37
```

## Key findings

### 1. FormulaDefinition at the SDK level is raw XAML, not gz:...

- `AttributeMetadata.FormulaDefinition` returns the raw XAML workflow definition.
- The `gz:` compression seen in MCP tool output is added by the MCP helper (`FormulaCompressionHelper`) for structured output only.
- When writing C# code against `IOrganizationService` / `ServiceClient`, work with the raw XML directly.

### 2. Reflection is required in some SDK versions

- The `FormulaDefinition` property may not be visible at compile time depending on the assembly version bundled with `Microsoft.PowerPlatform.Dataverse.Client`.
- Read and write it via reflection:
  ```csharp
  var prop = attr.GetType().GetProperty("FormulaDefinition");
  var xml = prop?.GetValue(attr, null)?.ToString();
  prop?.SetValue(newAttr, rewrittenXml);
  ```

### 3. XAML must be rewritten for the target entity AND the new attribute name

A verbatim copy fails with `invalid XAML formula definition`. Three patterns must be rewritten:

| Pattern in source XAML         | Rewritten for target                 |
| ------------------------------ | ------------------------------------ |
| `EntityName="all_in_one"`      | `EntityName="all_allinoneclone"`     |
| `New Entity("all_in_one")`     | `New Entity("all_allinoneclone")`    |
| `Attribute="all_40calculated"` | `Attribute="all_40calculated_clone"` |

The third one is easy to miss: the formula sets the value of the field itself, so after cloning to a differently-named attribute the self-reference must point to the new attribute name.

### 4. Other referenced fields are assumed to exist on the target entity

The source formula referenced `all_01stringtext`, `all_05stringphone`, `all_07stringtext`, `statecode`, `statuscode`. These were left unchanged because the target table is a clone and contains the same fields. If target fields had different logical names, those references would also need rewriting.

### 5. Project namespace conflicts with System.Console

- The project namespace is `Dev.AllInOne.Console`, which shadows `System.Console`.
- Use `System.Console.WriteLine(...)` explicitly.

### 6. Avoid Console.ReadKey in automated/test runs

- It causes the process to hang waiting for keyboard input when run from scripts or CI.

### 7. OptionSetMetadata constructor takes OptionMetadataCollection

- Do not pass `OptionMetadata[]`.
- Correct:
  ```csharp
  var optionsCollection = new OptionMetadataCollection(options);
  var optionSet = new OptionSetMetadata(optionsCollection) { ... };
  ```

## Rollup column clone (field display name starts with `41`)

### Verified result

```
Source column: all_41rollup (display: 41.Rollup, type: Integer, sourceType: 2)
Found rollup relationship in formula: all_contact_all_in_one_id_all_in_one, lookup: all_all_in_one_id, related entity: contact
Source relationship: all_contact_all_in_one_id_all_in_one, referencing entity: contact, referencing attribute: all_all_in_one_id, referenced entity: all_in_one
Target relationship: all_contact_all_in_one_clone_2_id_all_allinoneclone, referencing attribute: all_all_in_one_clone_2_id
Relationship mapping: all_contact_all_in_one_id_all_in_one -> all_contact_all_in_one_clone_2_id_all_allinoneclone
Lookup attribute mapping: all_all_in_one_id -> all_all_in_one_clone_2_id
SUCCESS: Created rollup column all_41rollup_clone with id 04db35e5-5d82-f111-8075-70a8a5b16a37
```

### Key differences from calculated columns

1. **Rollup formulas contain a 1:N relationship reference**, not just entity/attribute names.
2. The relationship name and lookup attribute on the target entity are **different** from the source, so they must be discovered at runtime.
3. Discovery approach:
   - Parse the formula XAML for the `relatedlinked_<relationshipName>#<lookupAttribute>#<relatedEntity>#` pattern.
   - Retrieve `OneToManyRelationships` for both source and target entities.
   - Match the target relationship by `ReferencingEntity == sourceRelationship.ReferencingEntity` and `ReferencedEntity == targetEntity`.
4. Rewrite both the relationship name and the lookup attribute name in the XAML.

### Rollup formula rewrite rules

| Pattern in source XAML                 | Rewritten for target                                  |
| -------------------------------------- | ----------------------------------------------------- |
| `EntityName="all_in_one"`              | `EntityName="all_allinoneclone"`                      |
| `New Entity("all_in_one")`             | `New Entity("all_allinoneclone")`                     |
| `Attribute="all_41rollup"`             | `Attribute="all_41rollup_clone"`                      |
| `all_contact_all_in_one_id_all_in_one` | `all_contact_all_in_one_clone_2_id_all_allinoneclone` |
| `all_all_in_one_id`                    | `all_all_in_one_clone_2_id`                           |

## Reference implementation location

`Program.cs` in this folder contains the full working implementation:

- `FindEntityByDisplayName`
- `FindAttributeByDisplayNamePrefix`
- `RewriteFormulaReferences`
- `RewriteRollupFormulaReferences`
- `FindRollupRelationshipMapping`
- `CloneAttribute`
- `CreateAttributeRequest` execution
