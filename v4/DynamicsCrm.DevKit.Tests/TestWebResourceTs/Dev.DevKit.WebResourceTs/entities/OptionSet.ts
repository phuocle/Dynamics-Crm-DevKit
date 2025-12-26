/**
 * OptionSet.ts - Centralized OptionSet definitions
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Usage: import { OptionSet } from './OptionSet';
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

/** Structural property type for WebApi operations */
const StructuralProperty = {
    /** 0 */
    Unknown: 0,
    /** 1 */
    PrimitiveType: 1,
    /** 2 */
    ComplexType: 2,
    /** 3 */
    EnumerationType: 3,
    /** 4 */
    Collection: 4,
    /** 5 */
    EntityType: 5
} as const;

/** Operation type for WebApi operations */
const OperationType = {
    /** 0 */
    Action: 0,
    /** 1 */
    Function: 1,
    /** 2 */
    CRUD: 2
} as const;

/** The progress of the action step */
const ProcessProgress = {
    /** 0 */
    None: 0,
    /** 1 */
    Processing: 1,
    /** 2 */
    Completed: 2,
    /** 3 */
    Failure: 3,
    /** 4 */
    Invalid: 4
} as const;

/** Describes the type of operation for the privilege */
const PrivilegeType = {
    /** 0 - Specifies no privilege */
    None: 0,
    /** 1 - The create privilege */
    Create: 1,
    /** 2 - The read privilege */
    Read: 2,
    /** 3 - The write privilege */
    Write: 3,
    /** 4 - The delete privilege */
    Delete: 4,
    /** 5 - The assign privilege */
    Assign: 5,
    /** 6 - The share privilege */
    Share: 6,
    /** 7 - The append privilege */
    Append: 7,
    /** 8 - The append to privilege */
    AppendTo: 8
} as const;

/** File accept types */
const FileAccept = {
    /** "audio" */
    Audio: 'audio',
    /** "video" */
    Video: 'video',
    /** "image" */
    Image: 'image'
} as const;

/** Form navigation bar display options */
const FormNavBar = {
    /** "on" - The navigation bar is displayed */
    On: 'on',
    /** "off" - The navigation bar is not displayed */
    Off: 'off',
    /** "entity" - Only the navigation options for related entities are available */
    Entity: 'entity'
} as const;

/** Form window position options */
const FormWindowPosition = {
    /** 1 */
    Center: 1,
    /** 2 */
    Side: 2
} as const;

/** Form relationship type */
const FormRelationshipType = {
    /** 0 */
    OneToMany: 0,
    /** 1 */
    ManyToMany: 1
} as const;

/** Form relationship role type */
const FormRelationshipRoleType = {
    /** 1 */
    Referencing: 1,
    /** 2 */
    AssociationEntity: 2
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
    /** Account Category Code - Preferred Customer or Standard */
    AccountCategoryCode: {
        Preferred_Customer: 1,
        Standard: 2
    },
    /** Account Classification Code */
    AccountClassificationCode: {
        Default_Value: 1
    },
    /** Account Rating Code */
    AccountRatingCode: {
        Default_Value: 1
    },
    /** Address 1 Address Type Code */
    Address1_AddressTypeCode: {
        Bill_To: 1,
        Other: 4,
        Primary: 3,
        Ship_To: 2
    },
    /** Address 1 Freight Terms Code */
    Address1_FreightTermsCode: {
        FOB: 1,
        No_Charge: 2
    },
    /** Address 1 Shipping Method Code */
    Address1_ShippingMethodCode: {
        Airborne: 1,
        DHL: 2,
        FedEx: 3,
        Full_Load: 6,
        Postal_Mail: 5,
        UPS: 4,
        Will_Call: 7
    },
    /** Address 2 Address Type Code */
    Address2_AddressTypeCode: {
        Default_Value: 1
    },
    /** Address 2 Freight Terms Code */
    Address2_FreightTermsCode: {
        Default_Value: 1
    },
    /** Address 2 Shipping Method Code */
    Address2_ShippingMethodCode: {
        Default_Value: 1
    },
    /** Business Type Code */
    BusinessTypeCode: {
        Default_Value: 1
    },
    /** Customer Size Code */
    CustomerSizeCode: {
        Default_Value: 1
    },
    /** Customer Type Code */
    CustomerTypeCode: {
        Competitor: 1,
        Consultant: 2,
        Customer: 3,
        Influencer: 6,
        Investor: 4,
        Other: 12,
        Partner: 5,
        Press: 7,
        Prospect: 8,
        Reseller: 9,
        Supplier: 10,
        Vendor: 11
    },
    /** Industry Code - Select the account's primary industry */
    IndustryCode: {
        Accounting: 1,
        Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
        Broadcasting_Printing_and_Publishing: 3,
        Brokers: 4,
        Building_Supply_Retail: 5,
        Business_Services: 6,
        Consulting: 7,
        Consumer_Services: 8,
        Design_Direction_and_Creative_Management: 9,
        Distributors_Dispatchers_and_Processors: 10,
        Doctors_Offices_and_Clinics: 11,
        Durable_Manufacturing: 12,
        Eating_and_Drinking_Places: 13,
        Entertainment_Retail: 14,
        Equipment_Rental_and_Leasing: 15,
        Financial: 16,
        Food_and_Tobacco_Processing: 17,
        Inbound_Capital_Intensive_Processing: 18,
        Inbound_Repair_and_Services: 19,
        Insurance: 20,
        Legal_Services: 21,
        Non_Durable_Merchandise_Retail: 22,
        Outbound_Consumer_Service: 23,
        Petrochemical_Extraction_and_Distribution: 24,
        Service_Retail: 25,
        SIG_Affiliations: 26,
        Social_Services: 27,
        Special_Outbound_Trade_Contractors: 28,
        Specialty_Realty: 29,
        Transportation: 30,
        Utility_Creation_and_Distribution: 31,
        Vehicle_Retail: 32,
        Wholesale: 33
    },
    /** Ownership Code */
    OwnershipCode: {
        Other: 4,
        Private: 2,
        Public: 1,
        Subsidiary: 3
    },
    /** Payment Terms Code */
    PaymentTermsCode: {
        _2_10_Net_30: 2,
        Net_30: 1,
        Net_45: 3,
        Net_60: 4
    },
    /** Preferred Appointment Day Code */
    PreferredAppointmentDayCode: {
        Friday: 5,
        Monday: 1,
        Saturday: 6,
        Sunday: 0,
        Thursday: 4,
        Tuesday: 2,
        Wednesday: 3
    },
    /** Preferred Appointment Time Code */
    PreferredAppointmentTimeCode: {
        Afternoon: 2,
        Evening: 3,
        Morning: 1
    },
    /** Preferred Contact Method Code */
    PreferredContactMethodCode: {
        Any: 1,
        Email: 2,
        Fax: 4,
        Mail: 5,
        Phone: 3
    },
    /** Shipping Method Code */
    ShippingMethodCode: {
        Default_Value: 1
    },
    /** State Code */
    StateCode: {
        Active: 0,
        Inactive: 1
    },
    /** Status Code */
    StatusCode: {
        Active: 1,
        Inactive: 2
    },
    /** Territory Code */
    TerritoryCode: {
        Default_Value: 1
    },
    /** Custom OptionSet - v4_Categories */
    v4_Categories: {
        Category_A: 100000000,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
    },
    /** Custom MultiOptionSet - v4_MultiOptionSet */
    v4_MultiOptionSet: {
        Category_A: 100000000,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
    },
    /** Custom OptionSet - v4_OptionSet */
    v4_OptionSet: {
        Category_A: 100000000,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
    },
    /** Rollup State */
    RollupState: {
        NotCalculated: 0,
        Calculated: 1,
        OverflowError: 2,
        OtherError: 3,
        RetryLimitExceeded: 4,
        HierarchicalRecursionLimitReached: 5,
        LoopDetected: 6
    }
} as const;

// ============================================================================
// Export combined OptionSet
// ============================================================================

export const OptionSet = {
    // Global OptionSets
    AdvancedConfigSetting,
    StructuralProperty,
    OperationType,
    ProcessProgress,
    PrivilegeType,
    FileAccept,
    FormNavBar,
    FormWindowPosition,
    FormRelationshipType,
    FormRelationshipRoleType,
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


