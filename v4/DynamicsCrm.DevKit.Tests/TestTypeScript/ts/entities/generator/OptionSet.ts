/**
 * OptionSet.ts - Centralized OptionSet definitions
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Usage: import { OptionSet } from './generator/OptionSet';
 *        OptionSet.FormType.Create
 *        OptionSet.Account.IndustryCode.Consulting
 */

// ============================================================================
// Global OptionSets
// ============================================================================

/** Information about the advanced configuration settings for the organization */
const AdvancedConfigSetting = {
    /** MaxChildIncidentNumber */
    MaxChildIncidentNumber: 'MaxChildIncidentNumber',
    /** MaxIncidentMergeNumber */
    MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
} as const;

/** Returns a value to indicate which client the script is executing in */
const ClientName = {
    /** Web */
    Web: 'Web',
    /** Outlook */
    Outlook: 'Outlook',
    /** Mobile */
    Mobile: 'Mobile'
} as const;

/** Returns a value to indicate the state of the client */
const ClientState = {
    /** Online */
    Online: 'Online',
    /** Offline */
    Offline: 'Offline'
} as const;

/** Returns a string value that represents the type of attribute */
const FieldAttributeType = {
    /** boolean */
    Boolean: 'boolean',
    /** datetime */
    DateTime: 'datetime',
    /** decimal */
    Decimal: 'decimal',
    /** double */
    Double: 'double',
    /** integer */
    Integer: 'integer',
    /** lookup */
    Lookup: 'lookup',
    /** memo */
    Memo: 'memo',
    /** money */
    Money: 'money',
    /** multiselectoptionset */
    MultiOptionSet: 'multioptionset',
    /** optionset */
    OptionSet: 'optionset',
    /** string */
    String: 'string'
} as const;

/** A value that categorizes controls */
const FieldControlType = {
    /** standard - A standard control */
    Standard: 'standard',
    /** iframe - An IFRAME control */
    Iframe: 'iframe',
    /** kbsearch - A knowledge base search control */
    KbSearch: 'kbsearch',
    /** lookup - A lookup control */
    Lookup: 'lookup',
    /** multiselectoptionset - A multi-select option set control */
    MultiSelectOptionset: 'multiselectoptionset',
    /** notes - A notes control */
    Notes: 'notes',
    /** optionset - An option set control */
    OptionSet: 'optionset',
    /** quickform - A quick view control */
    QuickForm: 'quickform',
    /** subgrid - A subgrid control */
    SubGrid: 'subgrid',
    /** timercontrol - A timer control */
    TimerControl: 'timercontrol',
    /** timelinewall - A timeline control (for Unified Interface) */
    TimelineWall: 'timelinewall',
    /** webresource - A web resource control */
    WebResource: 'webresource'
} as const;

/** Returns a string value that represents formatting options for the attribute */
const FieldFormat = {
    /** date */
    Date: 'date',
    /** datetime */
    DateTime: 'datetime',
    /** duration */
    Duration: 'duration',
    /** email */
    Email: 'email',
    /** language */
    Language: 'language',
    /** none */
    None: 'none',
    /** textarea */
    TextArea: 'textarea',
    /** text */
    Text: 'text',
    /** tickersymbol */
    TickerSymbol: 'tickersymbol',
    /** phone */
    Phone: 'phone',
    /** timezone */
    TimeZone: 'timezone',
    /** url */
    Url: 'url'
} as const;

/** The type of notification */
const FieldNotificationLevel = {
    /** ERROR */
    Error: 'ERROR',
    /** RECOMMENDATION */
    Recommendation: 'RECOMMENDATION'
} as const;

/** Value indicating whether a value for the attribute is none or required or recommended */
const FieldRequiredLevel = {
    /** none */
    None: 'none',
    /** required */
    Required: 'required',
    /** recommended */
    Recommended: 'recommended'
} as const;

/** Data from the attribute will be submitted when the record is saved */
const FieldSubmitMode = {
    /** always - The data is always sent with a save */
    Always: 'always',
    /** never - The data is never sent with a save */
    Never: 'never',
    /** dirty - Default behavior. The data is sent with the save when it has changed */
    Dirty: 'dirty'
} as const;

/** Returns information about the kind of device the user is using */
const FormFactor = {
    /** 0 */
    Unknown: 0,
    /** 1 */
    Desktop: 1,
    /** 2 */
    Tablet: 2,
    /** 3 */
    Phone: 3
} as const;

/** The level of the message, which defines how the message will be displayed */
const FormNotificationLevel = {
    /** ERROR - Notification will use the system error icon */
    Error: 'ERROR',
    /** WARNING - Notification will use the system warning icon */
    Warning: 'WARNING',
    /** INFO - Notification will use the system info icon */
    Info: 'INFO'
} as const;

/** Gets the form type for the record */
const FormType = {
    /** 0 */
    Undefined: 0,
    /** 1 - Quick Create forms return 1 */
    Create: 1,
    /** 2 */
    Update: 2,
    /** 3 */
    ReadOnly: 3,
    /** 4 */
    Disabled: 4,
    /** 5 */
    BulkEdit: 5
} as const;

/** The full name conventionCode setting of the current organization */
const FullNameConventionCode = {
    /** 0 */
    LastName_Comma_FirstName: 0,
    /** 1 */
    FirstName_LastName: 1,
    /** 2 */
    LastName_Comma_FirstName_MiddleInitial: 2,
    /** 3 */
    FirstName_MiddleInitial_LastName: 3,
    /** 4 */
    LastName_Comma_FirstName_MiddleName: 4,
    /** 5 */
    FirstName_MiddleName_LastName: 5,
    /** 6 */
    LastName_FirstName: 6,
    /** 7 */
    LastNameFirstName: 7
} as const;

/** The type of grid */
const GridType = {
    /** 1 */
    HomePageGrid: 1,
    /** 2 */
    Subgrid: 2
} as const;

/** Describing whether to open or save the file */
const OpenFileOption = {
    /** 1 */
    Open: 1,
    /** 2 */
    Save: 2
} as const;

/** The integer value of the business process flow category */
const ProcessCategory = {
    /** 0 */
    Qualify: 0,
    /** 1 */
    Develop: 1,
    /** 2 */
    Propose: 2,
    /** 3 */
    Close: 3,
    /** 4 */
    Identify: 4,
    /** 5 */
    Research: 5,
    /** 6 */
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

// ============================================================================
// Entity OptionSets
// ============================================================================

/** Account entity OptionSets */
const Account = {
    /** Select the account's primary industry for use in marketing segmentation and demographic analysis */
    IndustryCode: {
        /** 1 - Accounting */
        Accounting: 1,
        /** 7 - Consulting */
        Consulting: 7,
        /** 16 - Financial */
        Financial: 16,
        /** 20 - Insurance */
        Insurance: 20,
        /** 12 - Technology */
        Technology: 12
    },
    /** Custom MultiOptionSet - v4_Categories */
    v4_Categories: {
        /** 100000000 */
        Category_A: 100000000,
        /** 100000001 */
        Category_B: 100000001,
        /** 100000002 */
        Category_C: 100000002,
        /** 100000003 */
        Category_D: 100000003
    }
} as const;

// ============================================================================
// Export combined OptionSet
// ============================================================================

export const OptionSet = {
    // Global OptionSets
    AdvancedConfigSetting,
    ClientName,
    ClientState,
    FieldAttributeType,
    FieldControlType,
    FieldFormat,
    FieldNotificationLevel,
    FieldRequiredLevel,
    FieldSubmitMode,
    FormFactor,
    FormNotificationLevel,
    FormType,
    FullNameConventionCode,
    GridType,
    OpenFileOption,
    ProcessCategory,
    ProcessDisplayState,
    ProcessStatus,
    SaveMode,
    SaveOption,
    SidePaneState,
    TabContentType,
    TabDisplayState,
    TimerState,
    // Entity OptionSets
    Account
} as const;
