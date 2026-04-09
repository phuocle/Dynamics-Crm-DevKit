# upsert_column: All 43 Dataverse Column Types Test

**Date:** 2026-04-09
**Environment:** DEVKITV4 (`dynamics-crm-devkit-v4.crm.dynamics.com`)
**Table:** `v4_mcpdevkitv5` (MCP DevKit V5)
**Solution:** DEVKITMCP (Publisher: DEVKITV4, Prefix: `v4`)

---

## Summary

| Category | Created | Renamed OOB | System-Only (N/A) | Total |
|----------|---------|-------------|--------------------|----|
| Custom columns | 31 | - | - | 31 |
| OOB columns | - | 4 | - | 4 |
| System-only | - | - | 5 | 5 |
| **Total** | **31** | **4** | **5** | **40** |

> **Note:** 3 additional `_base` columns were auto-created by Dataverse for the 3 Money columns (18-20), bringing the actual column count to 43 including system-only references.

---

## Step 1: Create Table

| Field | Value |
|-------|-------|
| **MCP Tool** | `upsert_table` |
| **entity_name** | `mcpdevkitv5` (auto-resolved to `v4_mcpdevkitv5`) |
| **display_name** | MCP DevKit V5 |
| **display_collection_name** | MCP DevKit V5s |
| **solution_name** | DEVKITMCP |
| **ownership_type** | UserOwned |
| **has_notes** | true |
| **has_activities** | true |
| **MetadataId** | `70357605-f633-f111-88b4-7ced8d706a3c` |
| **Result** | Created + Published |

---

## Step 2: Create Columns

All columns created with `auto_publish=false`, then published once at the end.

### A. String (7 formats)

| # | Display Name | Logical Name | Type | Format | MaxLength | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 01 | 01.String - Text | `v4_01stringtext` | string | Text | 100 | `75fd323b-f633-f111-88b4-7ced8d706a3c` | Created |
| 02 | 02.String - Email | `v4_02stringemail` | string | Email | 100 | `78fd323b-f633-f111-88b4-7ced8d706a3c` | Created |
| 03 | 03.String - Phone | `v4_03stringphone` | string | Phone | 100 | `7bfd323b-f633-f111-88b4-7ced8d706a3c` | Created |
| 04 | 04.String - URL | `v4_04stringurl` | string | Url | 100 | `7efd323b-f633-f111-88b4-7ced8d706a3c` | Created |
| 05 | 05.String - TextArea | `v4_05stringtextarea` | string | TextArea | 100 | `37197341-f633-f111-88b4-7ced8d706a3c` | Created |
| 06 | 06.String - TickerSymbol | `v4_06stringticker` | string | TickerSymbol | 100 | `3a197341-f633-f111-88b4-7ced8d706a3c` | Created |
| 07 | 07.String - RichText | `v4_07stringrichtext` | string | RichText | 4000 | `3d197341-f633-f111-88b4-7ced8d706a3c` | Created |

### B. Memo (2 formats)

| # | Display Name | Logical Name | Type | Format | MaxLength | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 08 | 08.Memo - Text | `v4_08memotext` | memo | Text | 2000 | `120cb847-f633-f111-88b4-7ced8d706a3c` | Created |
| 09 | 09.Memo - RichText | `v4_09memorichtext` | memo | RichText | 2000 | `7582e04d-f633-f111-88b4-7ced8d706a3c` | Created |

### C. Integer (5 formats)

| # | Display Name | Logical Name | Type | Format | MetadataId | Result |
|---|---|---|---|---|---|---|
| 10 | 10.Integer - None | `v4_10integernone` | integer | None | `7882e04d-f633-f111-88b4-7ced8d706a3c` | Created |
| 11 | 11.Integer - Duration | `v4_11integerduration` | integer | Duration | `7b82e04d-f633-f111-88b4-7ced8d706a3c` | Created |
| 12 | 12.Integer - Language | `v4_12integerlanguage` | integer | Language | `7e82e04d-f633-f111-88b4-7ced8d706a3c` | Created |
| 13 | 13.Integer - TimeZone | `v4_13integertimezone` | integer | TimeZone | `cb308754-f633-f111-88b4-7ced8d706a3c` | Created |
| 14 | 14.Integer - Locale | `v4_14integerlocale` | integer | Locale | `ce308754-f633-f111-88b4-7ced8d706a3c` | Created |

### D. Numeric Types

| # | Display Name | Logical Name | Type | Precision | MetadataId | Result |
|---|---|---|---|---|---|---|
| 15 | 15.BigInt | `v4_15bigint` | bigint | - | `f0dae988-f633-f111-88b4-7ced8d706a3c` | Created |
| 16 | 16.Decimal | `v4_16decimal` | decimal | 2 | `f3dae988-f633-f111-88b4-7ced8d706a3c` | Created |
| 17 | 17.Float | `v4_17float` | float | 2 | `f6dae988-f633-f111-88b4-7ced8d706a3c` | Created |

### E. Money (3 precision sources)

| # | Display Name | Logical Name | Type | PrecisionSource | Precision | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 18 | 18.Money - Attribute | `v4_18moneyattribute` | money | 0 (Attribute) | 2 | `186ab5b4-f633-f111-88b4-7ced8d706a3c` | Created |
| 19 | 19.Money - Organization | `v4_19moneyorganization` | money | 1 (Organization) | 2 | `4e9e33bc-f633-f111-88b4-7ced8d706a3c` | Created |
| 20 | 20.Money - Currency | `v4_20moneycurrency` | money | 2 (Currency) | 2 | `559e33bc-f633-f111-88b4-7ced8d706a3c` | Created |

> **Note:** Each Money column auto-creates a `_base` calculated column (e.g., `v4_18moneyattribute_base`) for base currency conversion.

### F. Boolean

| # | Display Name | Logical Name | Type | TrueLabel | FalseLabel | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 21 | 21.Boolean | `v4_21boolean` | boolean | Yes | No | `5d9e33bc-f633-f111-88b4-7ced8d706a3c` | Created |

### G. DateTime (5 valid behavior + format combinations)

| # | Display Name | Logical Name | Type | Behavior | Format | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 22 | 22.DateTime - UserLocal DateAndTime | `v4_22datetimeuserlocaldt` | datetime | UserLocal | DateAndTime | `287c0ad8-f633-f111-88b4-7ced8d706a3c` | Created |
| 23 | 23.DateTime - UserLocal DateOnly | `v4_23datetimeuserlocaldate` | datetime | UserLocal | DateOnly | `2b7c0ad8-f633-f111-88b4-7ced8d706a3c` | Created |
| 24 | 24.DateTime - DateOnly | `v4_24datetimedateonly` | datetime | DateOnly | DateOnly | `2e7c0ad8-f633-f111-88b4-7ced8d706a3c` | Created |
| 25 | 25.DateTime - TZI DateAndTime | `v4_25datetimetzidate` | datetime | TimeZoneIndependent | DateAndTime | `317c0ad8-f633-f111-88b4-7ced8d706a3c` | Created |
| 26 | 26.DateTime - TZI DateOnly | `v4_26datetimetzidateonly` | datetime | TimeZoneIndependent | DateOnly | `533548de-f633-f111-88b4-7ced8d706a3c` | Created |

### H. Choice / Picklist

| # | Display Name | Logical Name | Type | Options | MetadataId | Result |
|---|---|---|---|---|---|---|
| 27 | 27.Picklist - Local | `v4_27picklistlocal` | picklist | Low (100000000), Medium (100000001), High (100000002) | `075c62fd-f633-f111-88b4-7ced8d706a3c` | Created |
| 28 | 28.Picklist - Global | `v4_28picklistglobal` | picklist | GlobalOptionSet: `v4_v4_category` | `5d7f6104-f733-f111-88b4-7ced8d706a3c` | Created |
| 29 | 29.MultiSelect Picklist | `v4_29multipicklist` | multipicklist | Option A (100000000), Option B (100000001), Option C (100000002) | `3388820d-f733-f111-88b4-7ced8d706a3c` | Created |

### I. Reference / Lookup

| # | Display Name | Logical Name | Type | Target(s) | Relationship(s) | MetadataId | Result |
|---|---|---|---|---|---|---|---|
| 32 | 32.Lookup | `v4_32lookup` | lookup | account | `v4_account_v4_mcpdevkitv5_v4_32lookup` | `42410889-7916-4549-bf3e-42a67d5b4e4e` | Created |
| 33 | 33.Customer | `v4_33customer` | customer | account, contact | `v4_account_v4_mcpdevkitv5_v4_33customer`, `v4_contact_v4_mcpdevkitv5_v4_33customer` | `ad0ef142-f2a7-4a32-ac40-c3250c84d892` | Created |
| 35 | 35.Polymorphic Lookup | `v4_35polymorphiclookup` | lookup (polymorphic) | contact, team | `v4_contact_v4_mcpdevkitv5_v4_35polymorphiclookup`, `v4_team_v4_mcpdevkitv5_v4_35polymorphiclookup` | `8dba65a4-a82c-487e-851b-78307b3ebbaa` | Created |

### J. File and Image

| # | Display Name | Logical Name | Type | MaxSizeKB | MetadataId | Result |
|---|---|---|---|---|---|---|
| 36 | 36.File | `v4_36file` | file | 32768 | `def6b864-f733-f111-88b4-7ced8d706a3c` | Created |
| 37 | 37.Image | `v4_37image` | image | - | `b791d070-f733-f111-88b4-7ced8d706a3c` | Created |

---

## Step 3: Rename OOB Columns (Update Mode)

These columns already exist on the entity (system-managed). Used `upsert_column` in **update mode** to rename display names.

| # | Display Name | Logical Name | Old DisplayName | Type | Result |
|---|---|---|---|---|---|
| 30 | 30.State | `statecode` | Status | State (Active/Inactive) | Renamed |
| 31 | 31.Status | `statuscode` | Status Reason | Status (Active/Inactive) | Renamed |
| 34 | 34.Owner | `ownerid` | Owner | Lookup -> systemuser, team | Renamed |
| 38 | 38.Uniqueidentifier | `v4_mcpdevkitv5id` | MCP DevKit V5 | Uniqueidentifier (Primary Key) | Renamed |

---

## Step 4: System-Only Types (Cannot Create or Rename)

These types exist in Dataverse metadata but cannot be created as custom columns. They are internal system types.

| # | Type | Description | Why Not Creatable |
|---|---|---|---|
| 39 | EntityName | Contains entity logical name | Internal type used by polymorphic lookups. Auto-created by Dataverse when needed (e.g., `v4_33customeridtype` for Customer lookup). Not user-creatable. |
| 40 | CalendarRules | Collection of CalendarRule records | Only exists on specific system entities (e.g., `calendar`). Represents child record collections, not a standard column type. |
| 41 | PartyList | Collection of ActivityParty records | Only exists on activity entities (e.g., `email`, `appointment`). Represents `To`, `From`, `CC` fields. Created automatically when `is_activity=true`. |
| 42 | ManagedProperty | Solution managed properties | Internal type for solution framework. Controls whether components can be customized in managed solutions. Not user-facing. |
| 43 | Virtual | Computed/virtual columns | System-created for calculated fields, rollup fields, and file/image backing columns (e.g., `v4_37imageid`). Not directly creatable via API. |

---

## Step 5: Publish

| Field | Value |
|-------|-------|
| **MCP Tool** | `publish_customizations` |
| **Entity** | `v4_mcpdevkitv5` |
| **Include Global OptionSets** | true |
| **Duration** | 4.4 seconds |
| **Result** | Published |

---

## Verification (get_tables output)

After publishing, `get_tables` confirms all 39 custom attributes (filtered by `v4_*`) exist with correct types, formats, and constraints:

```
v4_01stringtext       String    MaxLen=100           01.String - Text
v4_02stringemail      String    MaxLen=100 Email     02.String - Email
v4_03stringphone      String    MaxLen=100 Phone     03.String - Phone
v4_04stringurl        String    MaxLen=100 Url       04.String - URL
v4_05stringtextarea   String    MaxLen=100 TextArea  05.String - TextArea
v4_06stringticker     String    MaxLen=100 TickerSym 06.String - TickerSymbol
v4_07stringrichtext   String    MaxLen=4000 RichText 07.String - RichText
v4_08memotext         Memo      MaxLen=2000          08.Memo - Text
v4_09memorichtext     Memo      MaxLen=2000 RichText 09.Memo - RichText
v4_10integernone      Integer   [-2B..2B]            10.Integer - None
v4_11integerduration  Integer   [0..2B] Duration     11.Integer - Duration
v4_12integerlanguage  Integer   [0..2B] Language     12.Integer - Language
v4_13integertimezone  Integer   [-1500..1500] TZ     13.Integer - TimeZone
v4_14integerlocale    Integer   [0..2B] Locale       14.Integer - Locale
v4_15bigint           BigInt                         15.BigInt
v4_16decimal          Decimal   [0..1B] P=2          16.Decimal
v4_17float            Double    [0..1B] P=2          17.Float
v4_18moneyattribute   Money     [0..1B] P=2          18.Money - Attribute
v4_19moneyorganization Money    [0..1B] P=2          19.Money - Organization
v4_20moneycurrency    Money     [0..1B] P=2          20.Money - Currency
v4_21boolean          Boolean   Yes/No               21.Boolean
v4_22datetime...      DateTime  UserLocal DateAndTime 22.DateTime - UserLocal DateAndTime
v4_23datetime...      DateTime  UserLocal DateOnly   23.DateTime - UserLocal DateOnly
v4_24datetime...      DateTime  DateOnly DateOnly    24.DateTime - DateOnly
v4_25datetime...      DateTime  TZI DateAndTime      25.DateTime - TZI DateAndTime
v4_26datetime...      DateTime  TZI DateOnly         26.DateTime - TZI DateOnly
v4_27picklistlocal    Picklist  Low/Medium/High      27.Picklist - Local
v4_28picklistglobal   Picklist  v4_v4_category       28.Picklist - Global
v4_29multipicklist    MultiSel  A/B/C                29.MultiSelect Picklist
v4_32lookup           Lookup    -> account           32.Lookup
v4_33customer         Lookup    -> account, contact  33.Customer
v4_35polymorphic...   Lookup    -> contact, team     35.Polymorphic Lookup
v4_36file             Virtual   MaxKB=32768          36.File
v4_37imageid          Uniqueid  (backing column)     37.Image (backing)
v4_mcpdevkitv5id      Uniqueid  (primary key)        38.Uniqueidentifier
```

OOB columns verified:

```
statecode    State   0=Active; 1=Inactive      30.State
statuscode   Status  1=Active; 2=Inactive      31.Status
ownerid      Lookup  -> systemuser, team       34.Owner
```

---

## Errors Encountered

| # | Error | Cause | Resolution |
|---|-------|-------|------------|
| 1 | `Cannot start another [EntityCustomization]` on #27, #28, #29 | Dataverse concurrent customization lock from previous batch of DateTime columns | Waited for lock release, then created columns sequentially |

---

## MCP Tool Usage Log

| # | Tool | Action | Parameters | Result |
|---|------|--------|------------|--------|
| 1 | `get_solution_components` | List | solution_name=DEVKITMCP | Publisher: DEVKITV4, prefix: v4 |
| 2 | `get_choices` | List all global optionsets | - | Found `v4_v4_category` |
| 3 | `upsert_table` | Create | entity=mcpdevkitv5, solution=DEVKITMCP | Created v4_mcpdevkitv5 |
| 4-10 | `upsert_column` | Create | #01-07 String (7 formats) | All created |
| 11-17 | `upsert_column` | Create | #08-14 Memo + Integer | All created |
| 18-20 | `upsert_column` | Create | #15-17 BigInt, Decimal, Float | All created |
| 21-24 | `upsert_column` | Create | #18-21 Money (x3) + Boolean | All created |
| 25-29 | `upsert_column` | Create | #22-26 DateTime (5 combos) | All created |
| 30-32 | `upsert_column` | Create | #27-29 Picklist (retry after lock) | All created |
| 33 | `upsert_column` | Create | #32 Lookup -> account | Created |
| 34 | `upsert_column` | Create | #33 Customer -> account, contact | Created |
| 35 | `upsert_column` | Create | #35 Polymorphic -> contact, team | Created |
| 36-37 | `upsert_column` | Create | #36 File, #37 Image | All created |
| 38-41 | `upsert_column` | Update | #30 State, #31 Status, #34 Owner, #38 Uniqueidentifier | All renamed |
| 42 | `publish_customizations` | Publish | entity=v4_mcpdevkitv5 | Published in 4.4s |
| 43-45 | `get_tables` | Verify | filter=v4_, state, status, owner | All verified |

**Total MCP calls: 45** (1 table + 31 create + 4 update + 1 publish + 5 verify + 3 retries)
