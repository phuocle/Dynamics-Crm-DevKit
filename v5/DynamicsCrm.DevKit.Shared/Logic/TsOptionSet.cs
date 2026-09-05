using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class TsOptionSet
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        /// <summary>
        /// List of global optionset constant names for export
        /// </summary>
        private static readonly string[] GlobalOptionSetNames = new[]
        {
            "AdvancedConfigSetting",
            "StructuralProperty",
            "OperationType",
            "ProcessProgress",
            "PrivilegeType",
            "FileAccept",
            "FormNavBar",
            "FormWindowPosition",
            "FormRelationshipType",
            "FormRelationshipRoleType",
            "ClientName",
            "ClientState",
            "FieldAttributeType",
            "FieldControlType",
            "FieldFormat",
            "FieldNotificationLevel",
            "FieldRequiredLevel",
            "FieldSubmitMode",
            "FormFactor",
            "FormNotificationLevel",
            "FormType",
            "FullNameConventionCode",
            "GridType",
            "OpenFileOption",
            "ProcessCategory",
            "ProcessDisplayState",
            "ProcessStatus",
            "ProcessStageStatus",
            "SaveMode",
            "SaveOption",
            "SidePaneState",
            "TabContentType",
            "TabDisplayState",
            "TimerState"
        };

        /// <summary>
        /// JavaScript reserved words that cannot be used as variable names
        /// </summary>
        private static readonly HashSet<string> JsReservedWords = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "package", "private", "protected", "public", "static", "yield",
            "let", "class", "enum", "export", "extends", "import", "super",
            "implements", "interface", "await", "break", "case", "catch",
            "continue", "debugger", "default", "delete", "do", "else",
            "finally", "for", "function", "if", "in", "instanceof", "new",
            "return", "switch", "this", "throw", "try", "typeof", "var",
            "void", "while", "with", "const"
        };

        /// <summary>
        /// Entity names that conflict with export name
        /// </summary>
        private static readonly HashSet<string> ConflictingNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "OptionSet"
        };

        /// <summary>
        /// Get safe entity name (escapes reserved words and conflicting names)
        /// </summary>
        private static string GetSafeEntityName(string entityName)
        {
            if (JsReservedWords.Contains(entityName) || ConflictingNames.Contains(entityName))
            {
                return $"_{entityName}";
            }
            return entityName;
        }

        /// <summary>
        /// Generate OptionSet.ts content for the given entities
        /// </summary>
        /// <param name="orgServiceAsync">The organization service</param>
        /// <param name="entities">List of EntityMetadata to generate optionsets for</param>
        /// <param name="existingContent">Optional existing file content to merge with</param>
        /// <returns>Complete OptionSet.ts content</returns>
        public static async Task<string> GetTsOptionSetCodeAsync(
            IOrganizationServiceAsync2 orgServiceAsync,
            List<EntityMetadata> entities,
            string existingContent = null)
        {
            // Parse existing entities from content
            var existingEntities = ParseExistingEntities(existingContent);
            var metadataService = new MetadataService(orgServiceAsync);

            // Generate optionsets for each new entity
            foreach (var entity in entities)
            {
                // Use safe name as dictionary key to match ParseExistingEntities behavior
                var safeName = GetSafeEntityName(entity.SchemaName);
                if (entity.Attributes == null)
                {
                    var metadata = await metadataService.FetchEntityMetadataAsync(entity.LogicalName);
                    existingEntities[safeName] = GenerateEntityOptionSet(metadata);
                }
                else
                {
                    existingEntities[safeName] = GenerateEntityOptionSet(entity);
                }
            }

            // Build the complete file
            return BuildOptionSetFile(existingEntities);
        }

        /// <summary>
        /// Parse existing OptionSet.ts content to extract entity optionsets
        /// </summary>
        private static Dictionary<string, string> ParseExistingEntities(string content)
        {
            var entities = new Dictionary<string, string>();
            if (string.IsNullOrEmpty(content)) return entities;

            // Match pattern: /** Entity entity OptionSets */\nconst EntityName = {...} as const;
            // Use regex to find entity blocks
            var pattern = @"/\*\*\s*(\w+)\s+entity OptionSets\s*\*/\s+const\s+(\w+)\s*=\s*\{";
            var matches = Regex.Matches(content, pattern, RegexOptions.IgnoreCase);

            foreach (Match match in matches)
            {
                var entityName = match.Groups[2].Value;
                
                // Find the complete block from "const EntityName = {" to "} as const;"
                var startIndex = match.Index;
                var searchStart = content.IndexOf("const " + entityName, startIndex);
                if (searchStart < 0) continue;

                // Find the closing "} as const;"
                var depth = 0;
                var inBlock = false;
                var endIndex = searchStart;
                
                for (int i = searchStart; i < content.Length; i++)
                {
                    if (content[i] == '{')
                    {
                        depth++;
                        inBlock = true;
                    }
                    else if (content[i] == '}')
                    {
                        depth--;
                        if (inBlock && depth == 0)
                        {
                            // Find "as const;" after this
                            var remaining = content.Substring(i);
                            var asConstMatch = Regex.Match(remaining, @"^\}\s*as\s+const\s*;");
                            if (asConstMatch.Success)
                            {
                                endIndex = i + asConstMatch.Length;
                            }
                            else
                            {
                                endIndex = i + 1;
                            }
                            break;
                        }
                    }
                }

                // Extract the complete entity block including the comment
                if (endIndex > startIndex)
                {
                    var entityBlock = content.Substring(startIndex, endIndex - startIndex);
                    entities[entityName] = entityBlock;
                }
            }

            return entities;
        }

        /// <summary>
        /// Generate optionset code for a single entity
        /// </summary>
        private static string GenerateEntityOptionSet(EntityMetadata entityMetadata)
        {
            var code = new StringBuilder();
            var safeName = GetSafeEntityName(entityMetadata.SchemaName);
            
            code.AppendLine($"/** {entityMetadata.SchemaName} entity OptionSets */");
            code.AppendLine($"const {safeName} = {{");

            var optionSets = new List<string>();

            foreach (var attribute in entityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (!Helper.IsOptionSet(attribute)) continue;
                if (attribute.SchemaName == "OwnerIdType") continue;

                var values = attribute.OptionSetValues();
                if (values.Count == 0)
                {
                    optionSets.Add($"{TAB}/** {attribute.SchemaName} */\r\n{TAB}{attribute.SchemaName}: {{}}");
                }
                else
                {
                    var sb = new StringBuilder();
                    sb.AppendLine($"{TAB}/** {GetOptionSetComment(attribute)} */");
                    sb.Append($"{TAB}{attribute.SchemaName}: {{ ");
                    
                    var valueStrings = values.Select(v => $"{v.Name}: {v.Value}");
                    sb.Append(string.Join(", ", valueStrings));
                    
                    sb.Append(" }");
                    optionSets.Add(sb.ToString());
                }
            }

            // Always add RollupState
            optionSets.Add($"{TAB}/** Rollup State */\r\n{TAB}RollupState: {{ NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }}");

            code.Append(string.Join("," + NEW_LINE, optionSets));
            code.AppendLine();
            code.AppendLine("} as const;");

            return code.ToString();
        }

        /// <summary>
        /// Get comment for optionset attribute
        /// </summary>
        private static string GetOptionSetComment(AttributeMetadata attribute)
        {
            if (attribute.DisplayName?.UserLocalizedLabel?.Label != null)
            {
                return attribute.DisplayName.UserLocalizedLabel.Label.Replace("*/", "");
            }
            return attribute.SchemaName;
        }

        /// <summary>
        /// Build the complete OptionSet.ts file
        /// </summary>
        private static string BuildOptionSetFile(Dictionary<string, string> entityOptionSets)
        {
            var code = new StringBuilder();

            // Header
            code.AppendLine("/**");
            code.AppendLine(" * OptionSet.ts - Centralized OptionSet definitions");
            code.AppendLine(" * Generated file - DO NOT MODIFY MANUALLY");
            code.AppendLine(" * ");
            code.AppendLine(" * Usage: import { OptionSet } from './OptionSet';");
            code.AppendLine(" *        OptionSet.FormType.Create");
            code.AppendLine(" *        OptionSet.Account.IndustryCode.Consulting");
            code.AppendLine(" */");
            code.AppendLine();

            // Global OptionSets
            code.AppendLine("// ============================================================================");
            code.AppendLine("// Global OptionSets");
            code.AppendLine("// ============================================================================");
            code.AppendLine();
            code.Append(GetGlobalOptionSetsTemplate());
            code.AppendLine();

            // Entity OptionSets
            code.AppendLine("// ============================================================================");
            code.AppendLine("// Entity OptionSets");
            code.AppendLine("// ============================================================================");
            code.AppendLine();

            foreach (var entityName in entityOptionSets.Keys.OrderBy(x => x))
            {
                code.Append(entityOptionSets[entityName]);
                code.AppendLine();
            }

            // Export statement
            code.AppendLine("// ============================================================================");
            code.AppendLine("// Export combined OptionSet");
            code.AppendLine("// ============================================================================");
            code.AppendLine();
            code.AppendLine("export const OptionSet = {");
            code.AppendLine($"{TAB}// Global OptionSets");
            
            foreach (var name in GlobalOptionSetNames)
            {
                code.AppendLine($"{TAB}{name},");
            }
            
            code.AppendLine($"{TAB}// Entity OptionSets");
            
            var entityNames = entityOptionSets.Keys.OrderBy(x => x).ToList();
            for (int i = 0; i < entityNames.Count; i++)
            {
                var comma = i < entityNames.Count - 1 ? "," : "";
                // Keys are already safe names from GetTsOptionSetCodeAsync
                code.AppendLine($"{TAB}{entityNames[i]}{comma}");
            }
            
            code.AppendLine("} as const;");
            code.AppendLine();

            return code.ToString();
        }

        /// <summary>
        /// Get the static global optionsets template
        /// </summary>
        private static string GetGlobalOptionSetsTemplate()
        {
            return @"/**
 * Advanced configuration settings for the organization
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
 */
const AdvancedConfigSetting = {
    /** Maximum number of child cases allowed for a parent case */
    MaxChildIncidentNumber: 'MaxChildIncidentNumber',
    /** Maximum number of cases that can be merged */
    MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
} as const;

/**
 * Defines the structural type of a parameter for Xrm.WebApi.online.execute
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
 */
const StructuralProperty = {
    /** 0 - Unknown structural type */
    Unknown: 0,
    /** 1 - Primitive type (e.g., string, integer, boolean, guid) */
    PrimitiveType: 1,
    /** 2 - Complex type (structured object) */
    ComplexType: 2,
    /** 3 - Enumeration type */
    EnumerationType: 3,
    /** 4 - Collection (array of items) */
    Collection: 4,
    /** 5 - Entity type (reference to a Dynamics 365 record) */
    EntityType: 5
} as const;

/**
 * Specifies the type of Web API operation for Xrm.WebApi.online.execute
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
 */
const OperationType = {
    /** 0 - Action (custom or unbound action) */
    Action: 0,
    /** 1 - Function (custom or built-in function) */
    Function: 1,
    /** 2 - CRUD operation (Create, Retrieve, Update, Delete) */
    CRUD: 2
} as const;

/**
 * The progress of an action step in a business process flow
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
 */
const ProcessProgress = {
    /** 0 - No progress set */
    None: 0,
    /** 1 - Action step is in progress */
    Processing: 1,
    /** 2 - Action step completed successfully */
    Completed: 2,
    /** 3 - Action step failed */
    Failure: 3,
    /** 4 - Action step is invalid */
    Invalid: 4
} as const;

/**
 * Describes the type of privilege for security operations
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
 */
const PrivilegeType = {
    /** 0 - No privilege assigned */
    None: 0,
    /** 1 - Create privilege - can create new records */
    Create: 1,
    /** 2 - Read privilege - can view records */
    Read: 2,
    /** 3 - Write privilege - can update records */
    Write: 3,
    /** 4 - Delete privilege - can delete records */
    Delete: 4,
    /** 5 - Assign privilege - can assign records to other users/teams */
    Assign: 5,
    /** 6 - Share privilege - can share records with other users/teams */
    Share: 6,
    /** 7 - Append privilege - can attach to this entity */
    Append: 7,
    /** 8 - AppendTo privilege - can attach other entities to this */
    AppendTo: 8
} as const;

/**
 * Specifies the accepted file types for file picker
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
 */
const FileAccept = {
    /** Audio files (mp3, wav, etc.) */
    Audio: 'audio',
    /** Video files (mp4, avi, etc.) */
    Video: 'video',
    /** Image files (jpg, png, gif, etc.) */
    Image: 'image'
} as const;

/**
 * Controls whether the navigation bar is displayed
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
 */
const FormNavBar = {
    /** ""on"" - The navigation bar is displayed (default) */
    On: 'on',
    /** ""off"" - The navigation bar is not displayed */
    Off: 'off',
    /** ""entity"" - Only navigation options for related entities are available */
    Entity: 'entity'
} as const;

/**
 * Specifies the position of a form window
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
 */
const FormWindowPosition = {
    /** 1 - Open the form in the center of the screen */
    Center: 1,
    /** 2 - Open the form on the side (as a side panel) */
    Side: 2
} as const;

/**
 * Specifies the type of entity relationship
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
 */
const FormRelationshipType = {
    /** 0 - One-to-Many relationship */
    OneToMany: 0,
    /** 1 - Many-to-Many relationship */
    ManyToMany: 1
} as const;

/**
 * Specifies the role type in a relationship
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
 */
const FormRelationshipRoleType = {
    /** 1 - Referencing entity (the ""many"" side of 1:N) */
    Referencing: 1,
    /** 2 - Association entity (for N:N relationships) */
    AssociationEntity: 2
} as const;

/**
 * Returns a value to indicate which client the script is executing in
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
 */
const ClientName = {
    /** Web browser client */
    Web: 'Web',
    /** Outlook client (Dynamics 365 for Outlook) */
    Outlook: 'Outlook',
    /** Mobile application (phone or tablet app) */
    Mobile: 'Mobile'
} as const;

/**
 * Returns a value to indicate the state of the client
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
 */
const ClientState = {
    /** The client is connected to the server (normal operation) */
    Online: 'Online',
    /** The client is in offline mode (mobile app with offline sync) */
    Offline: 'Offline'
} as const;

/**
 * Returns the type of attribute
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
 */
const FieldAttributeType = {
    /** boolean - True/False attribute */
    Boolean: 'boolean',
    /** datetime - Date and time attribute */
    DateTime: 'datetime',
    /** decimal - Decimal number attribute */
    Decimal: 'decimal',
    /** double - Floating point number attribute */
    Double: 'double',
    /** integer - Whole number attribute */
    Integer: 'integer',
    /** lookup - Lookup/reference to another record */
    Lookup: 'lookup',
    /** memo - Multi-line text attribute */
    Memo: 'memo',
    /** money - Currency attribute */
    Money: 'money',
    /** multiselectoptionset - Multi-select option set attribute */
    MultiOptionSet: 'multiselectoptionset',
    /** optionset - Single-select option set attribute */
    OptionSet: 'optionset',
    /** string - Single-line text attribute */
    String: 'string'
} as const;

/**
 * Categorizes the type of control
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
 */
const FieldControlType = {
    /** A standard data-bound control */
    Standard: 'standard',
    /** An IFRAME control for embedding external content */
    Iframe: 'iframe',
    /** A knowledge base search control */
    KbSearch: 'kbsearch',
    /** A lookup control for selecting related records */
    Lookup: 'lookup',
    /** A multi-select option set control */
    MultiSelectOptionset: 'multiselectoptionset',
    /** A notes/timeline control for activities */
    Notes: 'notes',
    /** A single-select option set control */
    OptionSet: 'optionset',
    /** A quick view form control */
    QuickForm: 'quickform',
    /** A subgrid control for displaying related records */
    SubGrid: 'subgrid',
    /** A timer control for SLA tracking */
    TimerControl: 'timercontrol',
    /** A timeline wall control (Unified Interface) */
    TimelineWall: 'timelinewall',
    /** A web resource control */
    WebResource: 'webresource'
} as const;

/**
 * Returns formatting options for the attribute
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getformat
 */
const FieldFormat = {
    /** Date only (no time component) */
    Date: 'date',
    /** Date and time */
    DateTime: 'datetime',
    /** Duration in minutes */
    Duration: 'duration',
    /** Email address format */
    Email: 'email',
    /** Language code format */
    Language: 'language',
    /** No specific format */
    None: 'none',
    /** Multi-line text area */
    TextArea: 'textarea',
    /** Single-line text */
    Text: 'text',
    /** Stock ticker symbol */
    TickerSymbol: 'tickersymbol',
    /** Phone number format */
    Phone: 'phone',
    /** Time zone format */
    TimeZone: 'timezone',
    /** URL/web address format */
    Url: 'url'
} as const;

/**
 * The type of field notification
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
 */
const FieldNotificationLevel = {
    /** Error notification - prevents save until resolved */
    Error: 'ERROR',
    /** Recommendation notification - allows save but suggests action */
    Recommendation: 'RECOMMENDATION'
} as const;

/**
 * Value indicating whether a field value is required
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
 */
const FieldRequiredLevel = {
    /** Field is optional */
    None: 'none',
    /** Field is required - form cannot be saved without a value */
    Required: 'required',
    /** Field is recommended - shows indicator but allows save */
    Recommended: 'recommended'
} as const;

/**
 * Controls when field data is submitted on save
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
 */
const FieldSubmitMode = {
    /** Data is always sent with a save, even if unchanged */
    Always: 'always',
    /** Data is never sent with a save (field becomes read-only) */
    Never: 'never',
    /** Default - Data is only sent when it has changed */
    Dirty: 'dirty'
} as const;

/**
 * Returns information about the kind of device the user is using
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
 */
const FormFactor = {
    /** 0 - Unknown device type */
    Unknown: 0,
    /** 1 - Desktop (includes web browser, even from tablet) */
    Desktop: 1,
    /** 2 - Tablet application */
    Tablet: 2,
    /** 3 - Phone application */
    Phone: 3
} as const;

/**
 * The level of form notification message
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
 */
const FormNotificationLevel = {
    /** Error notification with system error icon (red) */
    Error: 'ERROR',
    /** Warning notification with system warning icon (yellow) */
    Warning: 'WARNING',
    /** Informational notification with system info icon (blue) */
    Info: 'INFO'
} as const;

/**
 * Gets the form type for the record
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
 */
const FormType = {
    /** 0 - Form type is undefined */
    Undefined: 0,
    /** 1 - Create form (Quick Create forms also return 1) */
    Create: 1,
    /** 2 - Update form (editing an existing record) */
    Update: 2,
    /** 3 - Read-only form */
    ReadOnly: 3,
    /** 4 - Disabled form */
    Disabled: 4,
    /** 5 - Bulk edit form */
    BulkEdit: 5
} as const;

/**
 * The full name conventionCode setting of the current organization
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#fullnameconventioncode
 */
const FullNameConventionCode = {
    /** 0 - Last Name, First Name (e.g., ""Smith, John"") */
    LastName_Comma_FirstName: 0,
    /** 1 - First Name Last Name (e.g., ""John Smith"") */
    FirstName_LastName: 1,
    /** 2 - Last Name, First Name Middle Initial (e.g., ""Smith, John A."") */
    LastName_Comma_FirstName_MiddleInitial: 2,
    /** 3 - First Name Middle Initial Last Name (e.g., ""John A. Smith"") */
    FirstName_MiddleInitial_LastName: 3,
    /** 4 - Last Name, First Name Middle Name (e.g., ""Smith, John Andrew"") */
    LastName_Comma_FirstName_MiddleName: 4,
    /** 5 - First Name Middle Name Last Name (e.g., ""John Andrew Smith"") */
    FirstName_MiddleName_LastName: 5,
    /** 6 - Last Name First Name (e.g., ""SmithJohn"") */
    LastName_FirstName: 6,
    /** 7 - Last Name First Name (no space) */
    LastNameFirstName: 7
} as const;

/**
 * Specifies the type of grid control
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
 */
const GridType = {
    /** 1 - HomePageGrid (main entity list view) */
    HomePageGrid: 1,
    /** 2 - Subgrid (embedded grid on a form) */
    Subgrid: 2
} as const;

/**
 * Describes whether to open or save a file
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
 */
const OpenFileOption = {
    /** 1 - Open the file in a new browser tab */
    Open: 1,
    /** 2 - Download/save the file */
    Save: 2
} as const;

/**
 * The integer value of the business process flow category for a stage
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getcategory
 */
const ProcessCategory = {
    /** 0 - Qualify stage (typically for Lead entity) */
    Qualify: 0,
    /** 1 - Develop stage (sales process development phase) */
    Develop: 1,
    /** 2 - Propose stage (proposal phase in sales) */
    Propose: 2,
    /** 3 - Close stage (closing phase in sales) */
    Close: 3,
    /** 4 - Identify stage (service/case identification) */
    Identify: 4,
    /** 5 - Research stage (service/case research) */
    Research: 5,
    /** 6 - Resolve stage (service/case resolution) */
    Resolve: 6
} as const;

/** Display state of the business process flow */
const ProcessDisplayState = {
    /** expanded */
    Expanded: 'expanded',
    /** collapsed */
    Collapsed: 'collapsed',
    /** floating */
    Floating: 'floating'
} as const;

/** The integer value status of the stage */
const ProcessStatus = {
    /** active */
    Active: 'active',
    /** aborted */
    Aborted: 'aborted',
    /** finished */
    Finished: 'finished'
} as const;

/**
 * Returns the status of the stage.
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getstatus
 */
const ProcessStageStatus = {
    /** Stage is currently active */
    Active: 'active',
    /** Stage is currently inactive */
    Inactive: 'inactive'
} as const;

/** Returns a value indicating how the save event was initiated by the user */
const SaveMode = {
    /** 1 - All entities */
    Save: 1,
    /** 2 - All entities */
    SaveAndClose: 2,
    /** 5 - All entities */
    Deactivate: 5,
    /** 6 - All entities */
    Reactivate: 6,
    /** 7 - Email */
    Email: 7,
    /** 15 - Lead */
    Disqualify: 15,
    /** 16 - Lead */
    Qualify: 16,
    /** 47 - User or Team */
    Assign: 47,
    /** 58 - Activities */
    SaveAsCompleted: 58,
    /** 59 - All entities */
    SaveAndNew: 59,
    /** 70 - All entities */
    AutoSave: 70
} as const;

/** Specify options for saving the record */
const SaveOption = {
    /** saveandclose - This is the equivalent of using the Save and Close command */
    SaveAndClose: 'saveandclose',
    /** saveandnew - This is the equivalent of the using the Save and New command */
    SaveAndNew: 'saveandnew'
} as const;

/** Display state of the side pane */
const SidePaneState = {
    /** 0 - Collapsed */
    Collapsed: 0,
    /** 1 - Expanded */
    Expanded: 1
} as const;

/** The control type of tab */
const TabContentType = {
    /** cardSections: The default tab behavior */
    CardSections: 'cardSections',
    /** singleComponent: Maximizes the content of the first component in the tab */
    SingleComponent: 'singleComponent'
} as const;

/** Display state of the tab */
const TabDisplayState = {
    /** expanded */
    Expanded: 'expanded',
    /** collapsed */
    Collapsed: 'collapsed'
} as const;

/** The state of the timer control - This method is only supported for Unified Interface */
const TimerState = {
    /** 1 */
    NotSet: 1,
    /** 2 */
    InProgress: 2,
    /** 3 */
    Warning: 3,
    /** 4 */
    Violated: 4,
    /** 5 */
    Success: 5,
    /** 6 */
    Expired: 6,
    /** 7 */
    Canceled: 7,
    /** 8 */
    Paused: 8
} as const;
";
        }
    }
}
