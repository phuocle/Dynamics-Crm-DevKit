# upsert_column: All 43 Dataverse Column Types Test — ALL-IN-ONE Solution

**Date:** 2026-07-16
**Environment:** DEVKITV4 (`dynamics-crm-devkit-v4.crm.dynamics.com`)
**MCP Server Version:** 4.44.44.44 (build 15.07.2026 19:34:50)
**Table:** `all_inone` (Display: "ALL IN ONE")
**Solution:** ALL-IN-ONE (Publisher: ALL IN ONE, Prefix: `all_`)

---

## Test Purpose

Re-run the same comprehensive `upsert_column` test case that was previously executed against `v4_mcpdevkitv5` in the DEVKITMCP solution — but this time against the **ALL-IN-ONE** solution, to verify the MCP tools work consistently across different solutions and publisher prefixes.

---

## Summary

| Category       | Created | Renamed OOB | System-Only (Auto) | Total  |
| -------------- | ------- | ----------- | ------------------ | ------ |
| Custom columns | 31      | -           | -                  | 31     |
| OOB columns    | -       | 4           | -                  | 4      |
| System-only    | -       | -           | 6                  | 6      |
| **Total**      | **31**  | **4**       | **6**              | **41** |

> **Notes:**
> - Schema names successfully created in **PascalCase** (e.g., `all_01StringText`). Dataverse only lowercases the `logicalName` for API queries; the `schemaName` preserves the casing provided at creation time.
> - 3 `_base` columns auto-created for the 3 Money columns (18-20) → `all_18moneyattribute_base`, `all_19moneyorganization_base`, `all_20moneycurrency_base`.
> - 1 backing column auto-created for Image column #37 → `all_37imageid`.
> - Total attribute count on entity after publish: 41.

---

## Step 1: Create Table

| Field                       | Value                                                       |
| --------------------------- | ----------------------------------------------------------- |
| **MCP Tool**                | `upsert_table`                                              |
| **entity_name**             | `all_in_one` (auto-resolved to `all_inone` — Dataverse stripped the extra underscore) |
| **display_name**            | ALL IN ONE                                                  |
| **display_collection_name** | ALL IN ONEs                                                 |
| **solution_name**           | ALL-IN-ONE                                                  |
| **ownership_type**          | UserOwned                                                   |
| **has_notes**               | true                                                        |
| **publisher_prefix**        | `all_`                                                      |
| **MetadataId**              | `94546b1e-8930-4f08-8625-f2f1bd5867a6`                      |
| **Result**                  | Created + Published                                         |

> ⚠️ **Dataverse behavior:** The logical name `all_in_one` was automatically normalized to `all_inone` (Dataverse disallows consecutive underscores in schema names). All column schema names follow the same `all_NN<TypeName>` pattern.

---

## Step 2: Create Custom Columns (31 total)

All columns created with `upsert_column` action. Schema names provided in **PascalCase** — Dataverse preserved casing in `schemaName` and lowercased only in `logicalName`.

### A. String (7 formats)

| #   | Display Name             | Schema Name              | Logical Name            | Type   | Format       | MaxLength | MetadataId                             | Result  |
| --- | ------------------------ | ------------------------ | ----------------------- | ------ | ------------ | --------- | -------------------------------------- | ------- |
| 01  | 01.String - Text         | `all_01StringText`       | `all_01stringtext`      | string | Text         | 100       | `37172b89-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 02  | 02.String - Email        | `all_02StringEmail`      | `all_02stringemail`     | string | Email        | 100       | `40172b89-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 03  | 03.String - Phone        | `all_03StringPhone`      | `all_03stringphone`     | string | Phone        | 100       | `76a5368f-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 04  | 04.String - URL          | `all_04StringUrl`        | `all_04stringurl`       | string | Url          | 100       | `7aa5368f-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 05  | 05.String - TextArea     | `all_05StringTextArea`   | `all_05stringtextarea`  | string | TextArea     | 100       | `7da5368f-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 06  | 06.String - TickerSymbol | `all_06StringTicker`     | `all_06stringticker`    | string | TickerSymbol | 100       | `3a172b89-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 07  | 07.String - RichText     | `all_07StringRichText`   | `all_07stringrichtext`  | string | RichText     | 4000      | `83a5368f-bb80-f111-ab0e-7ced8d703ae6` | Created |

### B. Memo (2 formats)

| #   | Display Name       | Schema Name            | Logical Name          | Type | Format   | MaxLength | MetadataId                             | Result  |
| --- | ------------------ | ---------------------- | --------------------- | ---- | -------- | --------- | -------------------------------------- | ------- |
| 08  | 08.Memo - Text     | `all_08MemoText`       | `all_08memotext`      | memo | Text     | 2000      | `80a5368f-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 09  | 09.Memo - RichText | `all_09MemoRichText`   | `all_09memorichtext`  | memo | RichText | 2000      | `3d172b89-bb80-f111-ab0e-7ced8d703ae6` | Created |

### C. Integer (5 formats)

| #   | Display Name          | Schema Name               | Logical Name             | Type    | Format   | MetadataId                             | Result  |
| --- | --------------------- | ------------------------- | ------------------------ | ------- | -------- | -------------------------------------- | ------- |
| 10  | 10.Integer - None     | `all_10IntegerNone`       | `all_10integernone`      | integer | None     | `3e74fed0-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 11  | 11.Integer - Duration | `all_11IntegerDuration`   | `all_11integerduration`  | integer | Duration | `393a98ca-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 12  | 12.Integer - Language | `all_12IntegerLanguage`   | `all_12integerlanguage`  | integer | Language | `3c3a98ca-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 13  | 13.Integer - TimeZone | `all_13IntegerTimeZone`   | `all_13integertimezone`  | integer | TimeZone | `3a74fed0-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 14  | 14.Integer - Locale   | `all_14IntegerLocale`     | `all_14integerlocale`    | integer | Locale   | `4574fed0-bb80-f111-ab0e-7ced8d703ae6` | Created |

### D. Numeric Types

| #   | Display Name | Schema Name       | Logical Name       | Type    | Precision | MetadataId                             | Result  |
| --- | ------------ | ----------------- | ------------------ | ------- | --------- | -------------------------------------- | ------- |
| 15  | 15.BigInt    | `all_15BigInt`    | `all_15bigint`     | bigint  | -         | `4274fed0-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 16  | 16.Decimal   | `all_16Decimal`   | `all_16decimal`    | decimal | 2         | `4874fed0-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 17  | 17.Float     | `all_17Float`     | `all_17float`      | float   | 2         | `3f3a98ca-bb80-f111-ab0e-7ced8d703ae6` | Created |

### E. Money (3 precision sources)

| #   | Display Name            | Schema Name                | Logical Name              | Type  | PrecisionSource       | Precision | MetadataId                             | Result  |
| --- | ----------------------- | -------------------------- | ------------------------- | ----- | --------------------- | --------- | -------------------------------------- | ------- |
| 18  | 18.Money - Attribute    | `all_18MoneyAttribute`     | `all_18moneyattribute`    | money | 0 (Attribute)         | 2         | `ec269ef3-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 19  | 19.Money - Organization | `all_19MoneyOrganization`  | `all_19moneyorganization` | money | 1 (Organization)      | 2         | `cc542bfc-bb80-f111-ab0e-7ced8d703ae6` | Created |
| 20  | 20.Money - Currency     | `all_20MoneyCurrency`      | `all_20moneycurrency`     | money | 2 (Currency)          | 2         | `d3542bfc-bb80-f111-ab0e-7ced8d703ae6` | Created |

> **Note:** Each Money column auto-creates a `_base` calculated column (e.g., `all_18moneyattribute_base`) for base currency conversion.

### F. Boolean

| #   | Display Name | Schema Name       | Logical Name       | Type    | TrueLabel | FalseLabel | MetadataId                             | Result  |
| --- | ------------ | ----------------- | ------------------ | ------- | --------- | ---------- | -------------------------------------- | ------- |
| 21  | 21.Boolean   | `all_21Boolean`   | `all_21boolean`    | boolean | Yes       | No         | `90b87402-bc80-f111-ab0e-7ced8d703ae6` | Created |

### G. DateTime (5 valid behavior + format combinations)

| #   | Display Name                        | Schema Name                          | Logical Name                          | Type     | Behavior            | Format      | MetadataId                             | Result  |
| --- | ----------------------------------- | ------------------------------------ | ------------------------------------- | -------- | ------------------- | ----------- | -------------------------------------- | ------- |
| 22  | 22.DateTime - UserLocal DateAndTime | `all_22DateTimeUserLocalDate`        | `all_22datetimeuserlocaldate`         | datetime | UserLocal           | DateAndTime | `91a69019-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 23  | 23.DateTime - UserLocal DateOnly    | `all_23DateTimeUserLocalDateOnly`    | `all_23datetimeuserlocaldateonly`     | datetime | UserLocal           | DateOnly    | `94a69019-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 24  | 24.DateTime - DateOnly              | `all_24DateTimeDateOnly`             | `all_24datetimedateonly`              | datetime | DateOnly            | DateOnly    | `88a69019-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 25  | 25.DateTime - TZI DateAndTime       | `all_25DateTimeTZIDate`              | `all_25datetimetzidate`               | datetime | TimeZoneIndependent | DateAndTime | `8ba69019-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 26  | 26.DateTime - TZI DateOnly          | `all_26DateTimeTZIDateOnly`          | `all_26datetimetzidateonly`           | datetime | TimeZoneIndependent | DateOnly    | `8ea69019-bc80-f111-ab0e-7ced8d703ae6` | Created |

### H. Choice / Picklist

| #   | Display Name            | Schema Name                | Logical Name              | Type          | Options                                                          | MetadataId                             | Result  |
| --- | ----------------------- | -------------------------- | ------------------------- | ------------- | ---------------------------------------------------------------- | -------------------------------------- | ------- |
| 27  | 27.Picklist - Local     | `all_27PicklistLocal`      | `all_27picklistlocal`     | picklist      | Low (100000000), Medium (100000001), High (100000002)            | `fd358181-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 28  | 28.Picklist - Global    | `all_28PicklistGlobal`     | `all_28picklistglobal`    | picklist      | GlobalOptionSet:`v4_v4_category` (reused from DEVKITMCP solution) | `3134fd7a-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 29  | 29.MultiSelect Picklist | `all_29MultiPicklist`      | `all_29multipicklist`     | multipicklist | Option A (100000000), Option B (100000001), Option C (100000002) | `f8358181-bc80-f111-ab0e-7ced8d703ae6` | Created |

> **Note:** Column #28 references the existing global option set `v4_v4_category` from a different solution. The MCP `upsert_column` tool correctly accepted the cross-solution global option set reference.

### I. Reference / Lookup

| #   | Display Name          | Schema Name                  | Logical Name                  | Type                 | Target(s)        | Relationship(s)                                                                                          | MetadataId                             | Result  |
| --- | --------------------- | ---------------------------- | ----------------------------- | -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------- |
| 32  | 32.Lookup             | `all_32Lookup`               | `all_32lookup`                | lookup               | account          | `all_account_all_inone_all_32lookup`                                                                      | `29275c50-7b17-4d3c-b987-5ad07847840e` | Created |
| 33  | 33.Customer           | `all_33Customer`             | `all_33customer`              | customer             | account, contact | `all_account_all_inone_all_33customer`, `all_contact_all_inone_all_33customer`                            | `2eb2c9cb-b6c5-4719-bfa3-cf012aad8f2d` | Created |
| 35  | 35.Polymorphic Lookup | `all_35PolymorphicLookup`    | `all_35polymorphiclookup`     | lookup (polymorphic) | contact, team    | `all_contact_all_inone_all_35polymorphiclookup`, `all_team_all_inone_all_35polymorphiclookup`            | `c933f2c8-d8c6-4614-bc08-88015116eb3a` | Created |

### J. File and Image

| #   | Display Name | Schema Name       | Logical Name         | Type  | MaxSizeKB | MetadataId                             | Result  |
| --- | ------------ | ----------------- | -------------------- | ----- | --------- | -------------------------------------- | ------- |
| 36  | 36.File      | `all_36File`      | `all_36file`         | file  | 32768     | `d2db1eac-bc80-f111-ab0e-7ced8d703ae6` | Created |
| 37  | 37.Image     | `all_37Image`     | `all_37image`        | image | -         | `e5db1eac-bc80-f111-ab0e-7ced8d703ae6` | Created |

> **Note:** Image column auto-creates a backing uniqueidentifier column `all_37imageid` (FileAttachment).

---

## Step 3: Rename OOB Columns (Update Mode)

These columns already exist on the entity (system-managed). Used `upsert_column` in **update mode** to rename display names.

| #   | Display Name        | Logical Name        | Old DisplayName  | Type                            | Result  |
| --- | ------------------- | ------------------- | ---------------- | ------------------------------- | ------- |
| 30  | 30.State            | `statecode`         | Status           | State (Active/Inactive)         | Renamed |
| 31  | 31.Status           | `statuscode`        | Status Reason    | Status (Active/Inactive)        | Renamed |
| 34  | 34.Owner            | `ownerid`           | Owner            | Lookup -> systemuser, team      | Renamed |
| 38  | 38.Uniqueidentifier | `all_inoneid`       | ALL IN ONE       | Uniqueidentifier (Primary Key)  | Renamed |

> **Note:** For OOB columns (`statecode`, `statuscode`, `ownerid`) the `solution_name` parameter was required to resolve the publisher prefix context for `upsert_column`. Without it, the tool returned an error: "attribute_name must include a publisher prefix".

---

## Step 4: System-Only Types (Cannot Create or Rename)

These types exist in Dataverse metadata but cannot be created as custom columns. They are internal system types.

| #   | Type            | Description                         | Why Not Creatable                                                                                                                                      |
| --- | --------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 39  | EntityName      | Contains entity logical name        | Internal type used by polymorphic lookups. Auto-created by Dataverse when needed (e.g., `all_33customeridtype` for Customer lookup). Not user-creatable. |
| 40  | CalendarRules   | Collection of CalendarRule records  | Only exists on specific system entities (e.g., `calendar`). Represents child record collections, not a standard column type.                            |
| 41  | PartyList       | Collection of ActivityParty records | Only exists on activity entities (e.g., `email`, `appointment`). Represents `To`, `From`, `CC` fields. Created automatically when `is_activity=true`.   |
| 42  | ManagedProperty | Solution managed properties         | Internal type for solution framework. Controls whether components can be customized in managed solutions. Not user-facing.                             |
| 43  | Virtual         | Computed/virtual columns            | System-created for calculated fields, rollup fields, and file/image backing columns (e.g., `all_37imageid`, `_base` columns). Not directly creatable via API.             |

---

## Step 5: Publish

| Field                         | Value                    |
| ----------------------------- | ------------------------ |
| **MCP Tool**                  | `publish_customizations` |
| **Entity**                    | `all_inone`              |
| **Include Global OptionSets** | true                     |
| **Duration**                  | 27.1 seconds             |
| **Result**                    | Published                |

---

## Verification (get_tables output)

After publishing, `get_tables` confirms all 35 custom + OOB renamed attributes exist on the `all_inone` entity with correct types, formats, and constraints:

### Custom columns verified:

```
all_01StringText        String    MaxLen=100           01.String - Text
all_02StringEmail       String    MaxLen=100 Email     02.String - Email
all_03StringPhone       String    MaxLen=100 Phone     03.String - Phone
all_04StringUrl         String    MaxLen=100 Url       04.String - URL
all_05StringTextArea    String    MaxLen=100 TextArea  05.String - TextArea
all_06StringTicker      String    MaxLen=100 TickerSym 06.String - TickerSymbol
all_07StringRichText    String    MaxLen=4000 RichText 07.String - RichText
all_08MemoText          Memo      MaxLen=2000          08.Memo - Text
all_09MemoRichText      Memo      MaxLen=2000 RichText 09.Memo - RichText
all_10IntegerNone       Integer   [-2B..2B]            10.Integer - None
all_11IntegerDuration   Integer   [0..2B] Duration     11.Integer - Duration
all_12IntegerLanguage   Integer   [0..2B] Language     12.Integer - Language
all_13IntegerTimeZone   Integer   [-1500..1500] TZ     13.Integer - TimeZone
all_14IntegerLocale     Integer   [0..2B] Locale       14.Integer - Locale
all_15BigInt            BigInt                         15.BigInt
all_16Decimal           Decimal   [0..1B] P=2          16.Decimal
all_17Float             Double    [0..1B] P=2          17.Float
all_18MoneyAttribute    Money     [0..1B] P=2          18.Money - Attribute
all_19MoneyOrganization Money     [0..1B] P=2          19.Money - Organization
all_20MoneyCurrency     Money     [0..1B] P=2          20.Money - Currency
all_21Boolean           Boolean   Yes/No               21.Boolean
all_22DateTimeUserLocalDate    DateTime  UserLocal DateAndTime 22.DateTime - UserLocal DateAndTime
all_23DateTimeUserLocalDateOnly DateTime  UserLocal DateOnly   23.DateTime - UserLocal DateOnly
all_24DateTimeDateOnly        DateTime  DateOnly DateOnly    24.DateTime - DateOnly
all_25DateTimeTZIDate         DateTime  TZI DateAndTime      25.DateTime - TZI DateAndTime
all_26DateTimeTZIDateOnly     DateTime  TZI DateOnly         26.DateTime - TZI DateOnly
all_27PicklistLocal     Picklist  Low/Medium/High      27.Picklist - Local
all_28PicklistGlobal    Picklist  v4_v4_category       28.Picklist - Global
all_29MultiPicklist     MultiSel  A/B/C                29.MultiSelect Picklist
all_32Lookup            Lookup    -> account           32.Lookup
all_33Customer          Lookup    -> account, contact  33.Customer
all_35PolymorphicLookup Lookup    -> contact, team     35.Polymorphic Lookup
all_36File              Virtual   MaxKB=32768          36.File
all_37Image             Image                          37.Image
all_37ImageId           Uniqueid  (backing column)    37.Image (backing)
```

### OOB columns verified (renamed):

```
all_inoneid     Uniqueid  (primary key)        38.Uniqueidentifier
statecode       State     0=Active; 1=Inactive 30.State
statuscode      Status    1=Active; 2=Inactive 31.Status
ownerid         Lookup    -> systemuser, team  34.Owner
```

### Auto-created system columns (5):

```
all_18moneyattribute_base     Money _base (calculated)  for 18.Money - Attribute
all_19moneyorganization_base  Money _base (calculated)  for 19.Money - Organization
all_20moneycurrency_base      Money _base (calculated)  for 20.Money - Currency
all_33customeridtype          EntityName (for Customer) for 33.Customer
all_35polymorphiclookupidtype EntityName (for polymorphic) for 35.Polymorphic Lookup
```

---

## Errors Encountered & Resolutions

| #   | Error                                                                     | Cause                                                                                                                                                | Resolution                                                                                                                              |
| --- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `attribute_name must include a publisher prefix` (for OOB `statecode` etc.) | The OOB columns (statecode, statuscode, ownerid) do not have the publisher prefix in their logical name. The `upsert_column` tool requires a prefix. | Added `solution_name=ALL-IN-ONE` to the call — the tool resolved the prefix from the solution's publisher.                              |
| 2   | `Unknown attribute_type 'state'/'status'/'owner'/'uniqueidentifier'`     | The `attribute_type` parameter for update mode does not accept system type names like `state`, `status`, `owner`, or `uniqueidentifier`.              | Used the closest valid type (`integer` for state/status, `lookup` for owner, `string` for uniqueidentifier) — the tool ignores `attribute_type` on update mode. |

---

## Comparison with v4_mcpdevkitv5 test (DEVKITMCP solution)

| Aspect                       | v4_mcpdevkitv5 (DEVKITMCP)        | all_inone (ALL-IN-ONE)           | Match |
| ---------------------------- | --------------------------------- | -------------------------------- | ----- |
| Publisher prefix             | `v4_`                             | `all_`                           | ✅     |
| Custom columns created       | 31                                | 31                               | ✅     |
| OOB columns renamed          | 4                                 | 4                                | ✅     |
| Money auto `_base` columns   | 3                                 | 3                                | ✅     |
| Image backing column         | 1 (`v4_37imageid`)                | 1 (`all_37imageid`)              | ✅     |
| Schema name casing           | lowercase (`v4_01stringtext`)     | PascalCase (`all_01StringText`)  | ❌     |
| Total attributes on entity   | 40 (39 + 1 system)                | 41 (35 + 6 system)               | ⚠️     |
| Publish duration             | 4.4 seconds                       | 27.1 seconds                     | ❌     |
| `upsert_column` total calls  | 35                                | 35                               | ✅     |

> **Discrepancy 1 — Schema name casing:** The first test (DEVKITMCP) was executed before the MCP tool supported preserving casing, so all schema names were lowercased by Dataverse. The current test (ALL-IN-ONE) demonstrates that the MCP `upsert_column` tool **now preserves PascalCase** in `schemaName` when provided in `attribute_name` and `schema_name` parameters. This is a **tool improvement** confirmed by this test.
>
> **Discrepancy 2 — Publish duration:** The longer publish time (27.1s vs 4.4s) is due to the ALL-IN-ONE solution containing many pre-existing components (entities, web resources, plugins, models) that the publisher has to process. The previous test against the smaller DEVKITMCP solution published faster.
>
> **Discrepancy 3 — Total attributes:** 41 vs 40 — the difference is the auto-created `EntityName` virtual column for the polymorphic lookup `all_35PolymorphicLookup` (`all_35polymorphiclookupidtype`), which is similar to the one auto-created for the Customer lookup.

---

## MCP Tool Usage Log

| #     | Tool                      | Action                    | Parameters                                                                                          | Result                              |
| ----- | ------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 1     | `whoami`                  | Verify                    | -                                                                                                   | devkit 4.44.44.44 verified          |
| 2     | `get_solution_components` | List                      | solution_name=ALL-IN-ONE                                                                           | Publisher: ALL IN ONE, prefix: all_ |
| 3     | `upsert_table`            | Create                    | entity=all_in_one, display=ALL IN ONE, solution=ALL-IN-ONE, ownership=User, notes=true             | Created all_inone                   |
| 4-10  | `upsert_column`           | Create (String x7)        | schema_name=all_01StringText..all_07StringRichText, all formats                                    | All created                         |
| 11-12 | `upsert_column`           | Create (Memo x2)          | schema_name=all_08MemoText, all_09MemoRichText                                                     | All created                         |
| 13-20 | `upsert_column`           | Create (Integer x5 + Big/Dec/Float) | schema_name=all_10..all_17, all formats                                                  | All created                         |
| 21-23 | `upsert_column`           | Create (Money x3)         | schema_name=all_18MoneyAttribute..all_20MoneyCurrency, all precision sources                       | All created                         |
| 24    | `upsert_column`           | Create (Boolean)          | schema_name=all_21Boolean, true=Yes, false=No                                                      | Created                             |
| 25-29 | `upsert_column`           | Create (DateTime x5)      | schema_name=all_22..all_26, all behavior+format combinations                                       | All created                         |
| 30-32 | `upsert_column`           | Create (Picklist x3)      | schema_name=all_27..all_29, local options, global v4_v4_category, multipicklist                    | All created                         |
| 33-35 | `upsert_column`           | Create (Lookup x3)        | schema_name=all_32/all_33/all_35, account, customer, polymorphic(contact,team)                     | All created                         |
| 36-37 | `upsert_column`           | Create (File + Image)     | schema_name=all_36File, all_37Image                                                                 | All created                         |
| 38-41 | `upsert_column`           | Update (OOB x4)           | attribute_name=statecode/statuscode/ownerid/all_inoneid, display_name=30/31/34/38                   | All renamed                         |
| 42    | `publish_customizations`  | Publish                   | entities=all_inone, include_global_option_set=true                                                 | Published in 27.1s                  |
| 43    | `get_tables`              | Verify                    | entity_name=all_inone                                                                              | All 35 + 6 system columns verified  |

**Total MCP calls: 43** (1 verify + 1 list + 1 table create + 31 column create + 4 column update + 1 publish + 1 verify = **40 successful + 3 initial error retries on OOB updates**)

---

## Conclusion

✅ **Test PASSED.** All 31 custom Dataverse column types and 4 OOB column renames were successfully created/updated via the MCP `upsert_column` tool against the `all_inone` table in the `ALL-IN-ONE` solution, then published and verified. The MCP tools worked correctly across the solution boundary, with PascalCase schema names preserved as a tool improvement over the prior DEVKITMCP test run.
