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

/**
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
    /** "on" - The navigation bar is displayed (default) */
    On: 'on',
    /** "off" - The navigation bar is not displayed */
    Off: 'off',
    /** "entity" - Only navigation options for related entities are available */
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
    /** 1 - Referencing entity (the "many" side of 1:N) */
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
    /** 0 - Last Name, First Name (e.g., "Smith, John") */
    LastName_Comma_FirstName: 0,
    /** 1 - First Name Last Name (e.g., "John Smith") */
    FirstName_LastName: 1,
    /** 2 - Last Name, First Name Middle Initial (e.g., "Smith, John A.") */
    LastName_Comma_FirstName_MiddleInitial: 2,
    /** 3 - First Name Middle Initial Last Name (e.g., "John A. Smith") */
    FirstName_MiddleInitial_LastName: 3,
    /** 4 - Last Name, First Name Middle Name (e.g., "Smith, John Andrew") */
    LastName_Comma_FirstName_MiddleName: 4,
    /** 5 - First Name Middle Name Last Name (e.g., "John Andrew Smith") */
    FirstName_MiddleName_LastName: 5,
    /** 6 - Last Name First Name (e.g., "SmithJohn") */
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

// ============================================================================
// Entity OptionSets
// ============================================================================

/** OptionSet entity OptionSets */
const _OptionSet = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
}
/** package entity OptionSets */
const _package = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
}
/** aaduser entity OptionSets */
const aaduser = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Account entity OptionSets */
const Account = {
	/** Category */
	AccountCategoryCode: { Preferred_Customer: 1, Standard: 2 },
	/** Classification */
	AccountClassificationCode: { Default_Value: 1 },
	/** Account Rating */
	AccountRatingCode: { Default_Value: 1 },
	/** Address 1: Address Type */
	Address1_AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
	/** Address 1: Freight Terms */
	Address1_FreightTermsCode: { FOB: 1, No_Charge: 2 },
	/** Address 1: Shipping Method */
	Address1_ShippingMethodCode: { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
	/** Address 2: Address Type */
	Address2_AddressTypeCode: { Default_Value: 1 },
	/** Address 2: Freight Terms */
	Address2_FreightTermsCode: { Default_Value: 1 },
	/** Address 2: Shipping Method */
	Address2_ShippingMethodCode: { Default_Value: 1 },
	/** Business Type */
	BusinessTypeCode: { Default_Value: 1 },
	/** Customer Size */
	CustomerSizeCode: { Default_Value: 1 },
	/** Relationship Type */
	CustomerTypeCode: { Competitor: 1, Consultant: 2, Customer: 3, Influencer: 6, Investor: 4, Other: 12, Partner: 5, Press: 7, Prospect: 8, Reseller: 9, Supplier: 10, Vendor: 11 },
	/** Industry */
	IndustryCode: { Accounting: 1, Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2, Broadcasting_Printing_and_Publishing: 3, Brokers: 4, Building_Supply_Retail: 5, Business_Services: 6, Consulting: 7, Consumer_Services: 8, Design_Direction_and_Creative_Management: 9, Distributors_Dispatchers_and_Processors: 10, Doctors_Offices_and_Clinics: 11, Durable_Manufacturing: 12, Eating_and_Drinking_Places: 13, Entertainment_Retail: 14, Equipment_Rental_and_Leasing: 15, Financial: 16, Food_and_Tobacco_Processing: 17, Inbound_Capital_Intensive_Processing: 18, Inbound_Repair_and_Services: 19, Insurance: 20, Legal_Services: 21, Non_Durable_Merchandise_Retail: 22, Outbound_Consumer_Service: 23, Petrochemical_Extraction_and_Distribution: 24, Service_Retail: 25, SIG_Affiliations: 26, Social_Services: 27, Special_Outbound_Trade_Contractors: 28, Specialty_Realty: 29, Transportation: 30, Utility_Creation_and_Distribution: 31, Vehicle_Retail: 32, Wholesale: 33 },
	/** Ownership */
	OwnershipCode: { Other: 4, Private: 2, Public: 1, Subsidiary: 3 },
	/** Payment Terms */
	PaymentTermsCode: { _2_10_Net_30: 2, Net_30: 1, Net_45: 3, Net_60: 4 },
	/** Preferred Day */
	PreferredAppointmentDayCode: { Friday: 5, Monday: 1, Saturday: 6, Sunday: 0, Thursday: 4, Tuesday: 2, Wednesday: 3 },
	/** Preferred Time */
	PreferredAppointmentTimeCode: { Afternoon: 2, Evening: 3, Morning: 1 },
	/** Preferred Method of Contact */
	PreferredContactMethodCode: { Any: 1, Email: 2, Fax: 4, Mail: 5, Phone: 3 },
	/** Shipping Method */
	ShippingMethodCode: { Default_Value: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Territory Code */
	TerritoryCode: { Default_Value: 1 },
	/** Categories */
	v4_Categories: { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
	/** MultiOptionSet */
	v4_MultiOptionSet: { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
	/** OptionSet */
	v4_OptionSet: { Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ACIViewMapper entity OptionSets */
const ACIViewMapper = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActionCard entity OptionSets */
const ActionCard = {
	/** ParentRegardingObjectTypeCode */
	ParentRegardingObjectTypeCode: {},
	/** RecordIdObjectTypeCode */
	RecordIdObjectTypeCode: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Action Card Source */
	Source: { CRM: 1, Exchange: 2 },
	/** Action Card State */
	State: { Active: 0, Completed: 2, Dismissed: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActionCardUserSettings entity OptionSets */
const ActionCardUserSettings = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActionCardUserState entity OptionSets */
const ActionCardUserState = {
	/** ActionCardIdObjectTypeCode */
	ActionCardIdObjectTypeCode: {},
	/** Action Card State */
	State: { Active: 0, Completed: 2, Dismissed: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** activityfileattachment entity OptionSets */
const activityfileattachment = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity */
	ObjectTypeCode: { Post: 8000, Post_Comment: 8005 },
	/** ParentIdType */
	ParentIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActivityMimeAttachment entity OptionSets */
const ActivityMimeAttachment = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity */
	ObjectTypeCode: { Email_Activity: 4200, Email_Template: 2010 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActivityParty entity OptionSets */
const ActivityParty = {
	/** Appointment Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Participation Type */
	ParticipationTypeMask: { BCC_Recipient: 4, CC_Recipient: 3, Chat_Participant: 12, Customer: 11, Optional_attendee: 6, Organizer: 7, Owner: 9, Regarding: 8, Related: 13, Required_attendee: 5, Resource: 10, Sender: 1, To_Recipient: 2 },
	/** PartyObjectTypeCode */
	PartyObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ActivityPointer entity OptionSets */
const ActivityPointer = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** Delivery Priority */
	DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Recurring Instance Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Canceled: 3, Completed: 2, Open: 1, Scheduled: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AdvancedSimilarityRule entity OptionSets */
const AdvancedSimilarityRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Filter Result By Status */
	FilterResultByStatus: { Active: 0, Inactive: 1 },
	/** Source Entity */
	SourceEntity: { Case: 112 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_externalidentity entity OptionSets */
const adx_externalidentity = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_invitation entity OptionSets */
const adx_invitation = {
	/** Type */
	adx_type: { Group: 756150001, Single: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Inactive: 2, New: 1, Redeemed: 756150001, Sent: 756150000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_invitation_invitecontacts entity OptionSets */
const adx_invitation_invitecontacts = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_invitation_mspp_webrole_powerpagecomponent entity OptionSets */
const adx_invitation_mspp_webrole_powerpagecomponent = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_invitation_redeemedcontacts entity OptionSets */
const adx_invitation_redeemedcontacts = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_inviteredemption entity OptionSets */
const adx_inviteredemption = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** Delivery Priority */
	DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Recurring Instance Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Canceled: 3, Completed: 2, Open: 1, Scheduled: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_kbarticle_kbarticle entity OptionSets */
const adx_kbarticle_kbarticle = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_portalcomment entity OptionSets */
const adx_portalcomment = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Direction */
	adx_PortalCommentDirectionCode: { Incoming: 1, Outgoing: 2 },
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** Delivery Priority */
	DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Recurring Instance Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Canceled: 4, Open: 1, Received: 3, Scheduled: 5, Sent: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_setting entity OptionSets */
const adx_setting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** adx_webformsession entity OptionSets */
const adx_webformsession = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agentconversationmessage entity OptionSets */
const agentconversationmessage = {
	/** Message Sender */
	MessageSender: { Agent: 200000001, User: 200000000 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agentconversationmessagefile entity OptionSets */
const agentconversationmessagefile = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agentfeeditem entity OptionSets */
const agentfeeditem = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agenthubgoal entity OptionSets */
const agenthubgoal = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agenthubinsight entity OptionSets */
const agenthubinsight = {
	/** Aggregation Window */
	AggregationWindow: { Bi_Weekly: 1, Monthly: 2, Weekly: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Insight Type */
	Type: { Analysis: 0, Prediction: 1, Recommendation: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agenthubmetric entity OptionSets */
const agenthubmetric = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agenticscenario entity OptionSets */
const agenticscenario = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agentmemory entity OptionSets */
const agentmemory = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** agenttask entity OptionSets */
const agenttask = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AICopilot entity OptionSets */
const AICopilot = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AICopilot_AIPlugin entity OptionSets */
const AICopilot_AIPlugin = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** aiinsightcard entity OptionSets */
const aiinsightcard = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Surface */
	surface: { Record: 1, Table: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPlugin entity OptionSets */
const AIPlugin = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PluginSubType */
	PluginSubType: { Certified_Connector: 1, Conversational: 5, Custom_Api: 6, Custom_Connector: 8, Dataverse: 0, Flow: 3, Prompt: 4, QA: 2, Rest_Api: 7 },
	/** PluginType */
	PluginType: { Connector: 2, CustomConnector: 1, Dataverse: 0, Flow: 3 },
	/** SchemaVersion */
	SchemaVersion: { _10: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginAuth entity OptionSets */
const AIPluginAuth = {
	/** AuthType */
	AuthType: { APIKey: 2, EntraSSO: 1, OAuth2: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginConversationStarter entity OptionSets */
const AIPluginConversationStarter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginConversationStarterMapping entity OptionSets */
const AIPluginConversationStarterMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginExternalSchema entity OptionSets */
const AIPluginExternalSchema = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginExternalSchemaProperty entity OptionSets */
const AIPluginExternalSchemaProperty = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginGovernance entity OptionSets */
const AIPluginGovernance = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginGovernanceExt entity OptionSets */
const AIPluginGovernanceExt = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Target Sub Type */
	TargetSubType: { Certified_Connector: 1, Conversational: 5, Custom_Api: 6, Custom_Connector: 8, Dataverse: 0, Flow: 3, Prompt: 4, QA: 2, Rest_Api: 7 },
	/** Target Type */
	TargetType: { Connector: 2, CustomConnector: 1, Dataverse: 0, Flow: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginInstance entity OptionSets */
const AIPluginInstance = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginOperation entity OptionSets */
const AIPluginOperation = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginOperationParameter entity OptionSets */
const AIPluginOperationParameter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Delete: 1, Upsert: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginOperationResponseTemplate entity OptionSets */
const AIPluginOperationResponseTemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginTitle entity OptionSets */
const AIPluginTitle = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AIPluginUserSetting entity OptionSets */
const AIPluginUserSetting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** aiskillconfig entity OptionSets */
const aiskillconfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Scope */
	scope: { Record: 1, Table: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** allowedmcpclient entity OptionSets */
const allowedmcpclient = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Annotation entity OptionSets */
const Annotation = {
	/** ObjectIdTypeCode */
	ObjectIdTypeCode: {},
	/** Object Type  */
	ObjectTypeCode: { Account: 1, Appointment: 4201, Bulk_Import: 4407, Calendar: 4003, Campaign: 4400, Campaign_Activity: 4402, Campaign_Response: 4401, Case: 112, Case_Resolution: 4206, Commitment: 4215, Competitor: 123, Contact: 2, Contract: 1010, Contract_Line: 1011, Email: 4202, FacilityEquipment: 4000, Fax: 4204, Invoice: 1090, Lead: 4, Letter: 4207, Marketing_List: 4300, Opportunity: 3, Opportunity_Close: 4208, Order: 1088, Order_Close: 4209, Phone_Call: 4210, Product: 1024, Quote: 1084, Quote_Close: 4211, Resource_Specification: 4006, Routing_Rule: 8181, Routing_Rule_Item: 8199, Service: 4001, Service_Activity: 4214, Task: 4212 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AnnualFiscalCalendar entity OptionSets */
const AnnualFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appaction entity OptionSets */
const appaction = {
	/** Client Type */
	ClientType: { Browser: 0, Mail_App: 2, Mobile: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Context */
	Context: { All: 0, Entity: 1 },
	/** Location */
	Location: { Associated_Grid: 3, Dashboard: 6, Form: 0, Global_Header: 5, Main_Grid: 1, Quick_Form: 4, Sub_Grid: 2 },
	/** On Click Event Type */
	OnClickEventType: { Formula: 1, JavaScript: 2, None: 0 },
	/** Origin */
	Origin: { Default: 0, Enhanced_Migrated: 2, Migrated: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Dropdown_Button: 1, Group: 3, Split_Button: 2, Standard_Button: 0 },
	/** Visibility Type */
	VisibilityType: { Classic_Rules: 2, Formula: 1, None: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appaction_appactionrule_classicrules entity OptionSets */
const appaction_appactionrule_classicrules = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appactionmigration entity OptionSets */
const appactionmigration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appactionrule entity OptionSets */
const appactionrule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Context */
	Context: { All: 0, Entity: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Display_Rule: 1, Enable_Rule: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appactionrule_webresource_scripts entity OptionSets */
const appactionrule_webresource_scripts = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppConfig entity OptionSets */
const AppConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppConfigInstance entity OptionSets */
const AppConfigInstance = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppConfigMaster entity OptionSets */
const AppConfigMaster = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppElement entity OptionSets */
const AppElement = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectIdType */
	ObjectIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppEntitySearchView entity OptionSets */
const AppEntitySearchView = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Application entity OptionSets */
const Application = {
	/** Access */
	Access: { Allowed: 0, Blocked: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ApplicationFile entity OptionSets */
const ApplicationFile = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ApplicationRoles entity OptionSets */
const ApplicationRoles = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ApplicationUser entity OptionSets */
const ApplicationUser = {
	/** ApplicationType */
	ApplicationType: { External_applications: 2, First_party_applications: 0, Platform_applications: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** applicationuserprofile entity OptionSets */
const applicationuserprofile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** applicationuserrole entity OptionSets */
const applicationuserrole = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModule entity OptionSets */
const AppModule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Navigation type */
	NavigationType: { Multi_session: 1, Single_session: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Deleted: 3, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleComponent entity OptionSets */
const AppModuleComponent = {
	/** Object Type Code */
	ComponentType: { Business_Process_Flows: 29, Charts: 59, Command_Ribbon_for_Forms_Grids_sub_grids: 48, Entities: 1, Forms: 60, Sitemap: 62, Views: 26 },
	/** Root Component Behavior */
	RootComponentBehavior: { Do_not_include_subcomponents: 1, Include_As_Shell_Only: 2, Include_Subcomponents: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleComponentEdge entity OptionSets */
const AppModuleComponentEdge = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleComponentNode entity OptionSets */
const AppModuleComponentNode = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** ValidationStatus */
	ValidationStatus: { Failure: 2, Success: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleMetadata entity OptionSets */
const AppModuleMetadata = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleMetadataDependency entity OptionSets */
const AppModuleMetadataDependency = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleMetadataOperationLog entity OptionSets */
const AppModuleMetadataOperationLog = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppModuleRoles entity OptionSets */
const AppModuleRoles = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** appnotification entity OptionSets */
const appnotification = {
	/** IconType */
	IconType: { Custom: 100000005, Failure: 100000002, Info: 100000000, Mention: 100000004, Success: 100000001, Warning: 100000003 },
	/** Priority */
	Priority: { High: 200000001, Normal: 200000000 },
	/** Toast Type */
	ToastType: { Hidden: 200000001, Timed: 200000000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Appointment entity OptionSets */
const Appointment = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** AttachmentErrors */
	AttachmentErrors: { None: 0, The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1 },
	/** Appointment Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Online Meeting Type */
	OnlineMeetingType: { Teams_Meeting: 1 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** approvalprocess entity OptionSets */
const approvalprocess = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** approvalstageapproval entity OptionSets */
const approvalstageapproval = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** approvalstagecondition entity OptionSets */
const approvalstagecondition = {
	/** Result Type */
	ResultType: { Continue: 192350000, Goto: 192350001, TerminateAsApproved: 192350002, TerminateAsRejected: 192350003 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** approvalstageintelligent entity OptionSets */
const approvalstageintelligent = {
	/** Next Steps Result */
	NextStepsResult: { Continue: 192350000, Goto: 192350001, TerminateAsApproved: 192350002, TerminateAsRejected: 192350003 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** approvalstageorder entity OptionSets */
const approvalstageorder = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Completed: 192350002, Inactive: 2, Initialized: 192350001, Skipped: 192350003 },
	/** Type */
	Type: { AI: 192350002, Approval: 192350000, Condition: 192350001 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppSetting entity OptionSets */
const AppSetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AppUserSetting entity OptionSets */
const AppUserSetting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ArchiveCleanupInfo entity OptionSets */
const ArchiveCleanupInfo = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ArchiveCleanupOperation entity OptionSets */
const ArchiveCleanupOperation = {
	/** OperationName */
	OperationName: { Purge: 10, Reconcile: 20 },
	/** Status */
	statecode: { Completed: 2, InProgress: 1, Waiting: 0 },
	/** Status Reason */
	statuscode: { Failed: 31, InProgress: 20, PartialRecordsIdentified: 33, Scheduled: 10, Succeeded: 30 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AsyncOperation entity OptionSets */
const AsyncOperation = {
	/** System Job Type */
	OperationType: { Activity_Propagation: 6, AI_Builder_Prediction_Events: 190690092, AI_Builder_Training_Events: 190690091, ALM_Anomaly_Detection_Operation: 73, App_Module_Metadata_Operation: 72, Archive_Execution_Async_Operation: 301, Async_Restore_Job: 187, AsyncArchive_Async_Operation: 102, Audit_Partition_Creation: 41, Background_Team_Service_Async_Operation: 106, Bulk_Archive_Operation: 300, Bulk_Delete: 13, Bulk_Delete_File_Attachment: 94, Bulk_Delete_Subprocess: 23, Bulk_Duplicate_Detection: 8, Bulk_Email: 2, Calculate_Organization_Maximum_Storage_Size: 22, Calculate_Organization_Storage_Size: 18, Calculate_Rollup_Field: 57, CallbackRegistration_Expander_Operation: 79, Cancel_Async_Operations_System: 103, Cascade_Assign_All_Async_Operation: 105, Cascade_FlowSession_Permissions_Async_Operation: 100, Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801, Cascade_Merge_Async_Operation: 89, Cascade_Reparent_DB_Async_Operation: 88, CascadeAssign: 90, CascadeDelete: 91, Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request: 335, Catalog_service_asyc_operation_to_submit_a_solution_checker_request: 336, Catalog_Service_Generate_Package_Async_Operation: 320, Catalog_Service_Install_Request_Async_Operation: 322, Catalog_Service_Submit_Approval_Request_Async_Operation: 321, Check_For_Language_Pack_Updates: 42, Cleanup_inactive_workflow_assemblies: 32, Cleanup_Solution_Components: 71, Collect_Organization_Database_Statistics: 19, Collect_Organization_Statistics: 16, Collection_Organization_Size_Statistics: 20, Convert_Date_And_Time_Behavior: 62, Create_Or_Refresh_Virtual_Entity: 98, Database_log_backup: 26, Database_Tuning: 21, DBCC_SHRINKDATABASE_maintenance_job: 28, DBCC_SHRINKFILE_maintenance_job: 29, DeleteAndPromote_Async_Operation: 207, Deletes_related_Elastic_or_SQL_Table_records_when_an_Elastic_Table_record_is_deleted: 334, Deletes_related_Elastic_Table_records_when_a_SQL_record_is_deleted: 333, Deletion_Service: 14, Denormalization_Async_Operation: 239, Duplicate_Detection_Rule_Publish: 7, Encryption_Health_Check: 53, EntityKey_Index_Creation: 63, Event_Expander_Operation: 92, Execute_Async_Request: 54, Execute_DataProcessing_Configuration: 306, Export_Solution_Async_Operation: 202, FinOps_DB_Sync_Async_Operation: 308, FinOps_Deploy_Custom_Package_Async_Operation: 332, FinOps_Deployment_Async_Operation: 302, FinOps_Unit_Test_Async_Operation: 309, Flow_Notification: 75, Goal_Roll_Up: 40, Import: 5, Import_File_Parse: 3, Import_Sample_Data: 38, Import_Solution_Async_Operation: 203, Import_Solution_Metadata: 93, Import_Subprocess: 17, Import_Translation: 59, ImportTranslation_Async_Operation: 210, Incoming_Email_Processing: 51, Index_Management: 15, Instant_entities_cleanup_operation: 339, Mailbox_Test_Access: 52, Mass_Calculate_Rollup_Field: 58, Matchcode_Update: 12, Migrate_article_content_to_file_storage: 86, Migrate_notes_to_attachments_job: 85, Organization_Full_Text_Catalog_Index: 25, Outgoing_Activity: 50, Post_to_Yammer: 49, Process_Table_For_RecycleBin: 104, Prompt_column_bulk_update_operation: 338, Provision_language_for_user: 201, Provision_Language_Pack: 43, ProvisionLanguage_Async_Operation: 209, PublishAll_Async_Operation: 204, Purge_Archived_Content_Operation: 304, Quick_Campaign: 11, Recurring_Series_Expansion: 35, Refresh_Business_Unit_for_Records_Owned_By_Principal: 95, Refresh_Runtime_Integration_Components_Async_Operation: 250, Regenerate_Entity_Row_Count_Snapshot_Data: 46, Regenerate_Read_Share_Snapshot_Data: 47, Register_Offering_Async_Operation: 305, Reindex_all_indices_maintenance_job: 30, Relationship_Assistant_Cards: 69, Resource_Booking_Sync: 68, Revoke_Inherited_Access: 96, Ribbon_Client_Metadata_Operation: 76, Solution_service_async_operation_to_install_solution_after_app_updates: 337, SQM_Data_Collection: 9, StageAndUpgrade_Async_Operation: 211, Storage_Limit_Notification: 31, Sync_Synapse_Tables_Schema: 307, System_Event: 1, TDS_endpoint_provisioning_new_TVF_functions_and_grant_permission_Async_Operation: 330, Transform_Parse_Data: 4, UninstallSolution_Async_Operation: 208, Update_Contract_States: 27, Update_Entitlement_States: 56, Update_Knowledge_Article_States: 65, Update_Modern_Flow_Async_Operation: 101, Update_Organization_Database: 44, Update_Solution: 45, Update_Statistic_Intervals: 24, Updated_Deactived_On_for_Resolved_Cases_job: 87, Workflow: 10 },
	/** OwningExtensionTypeCode */
	OwningExtensionTypeCode: {},
	/** PrimaryEntityType */
	PrimaryEntityType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Completed: 3, Locked: 2, Ready: 0, Suspended: 1 },
	/** Status Reason */
	StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Pausing: 21, Succeeded: 30, Waiting: 10, Waiting_For_Resources: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Attachment entity OptionSets */
const Attachment = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Attribute entity OptionSets */
const Attribute = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AttributeClusterConfig entity OptionSets */
const AttributeClusterConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AttributeImageConfig entity OptionSets */
const AttributeImageConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AttributeMap entity OptionSets */
const AttributeMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AttributeMaskingRule entity OptionSets */
const AttributeMaskingRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** EntityName */
	EntityName: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AttributePicklistValue entity OptionSets */
const AttributePicklistValue = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Audit entity OptionSets */
const Audit = {
	/** Event */
	Action: { Activate: 4, Add_Item: 37, Add_Member: 31, Add_Members: 35, Add_Privileges_to_Role: 57, Add_Substitute: 39, Add_To_Queue: 52, ApplicationBasedAccessAllowed: 122, ApplicationBasedAccessDenied: 121, Approve: 28, Archive: 115, Assign: 13, Assign_Role_To_Team: 53, Assign_Role_To_User: 55, Associate_Entities: 33, Attribute_Audit_Started: 106, Attribute_Audit_Stopped: 109, Audit_Change_at_Attribute_Level: 103, Audit_Change_at_Entity_Level: 102, Audit_Change_at_Org_Level: 104, Audit_Disabled: 110, Audit_Enabled: 107, Audit_Log_Deletion: 111, Book: 50, Cancel: 17, Cascade: 11, Clone: 61, Close: 16, Complete: 18, Create: 1, Create_AI_assisted: 123, Deactivate: 5, Delete: 3, Delete_Attribute: 101, Delete_Entity: 100, Disassociate_Entities: 34, Disqualify: 25, Enabled_for_organization: 63, Entity_Audit_Started: 105, Entity_Audit_Stopped: 108, Fulfill: 22, Generate_Quote_From_Opportunity: 51, Hold: 30, Import_Mappings: 60, Internal_Processing: 46, Invoice: 29, IPFirewallAcccesAllowed: 119, IPFirewallAcccesDenied: 118, Lose: 45, Merge: 12, Modify_Share: 48, Paid: 23, Qualify: 24, Read_Unmasked: 125, Reject: 27, Remove_Item: 38, Remove_Member: 32, Remove_Members: 36, Remove_Privileges_From_Role: 58, Remove_Role_From_Team: 54, Remove_Role_From_User: 56, Remove_Substitute: 40, Renew: 42, Reopen: 21, Replace_Privileges_In_Role: 59, Reschedule: 47, Resolve: 20, Restore: 120, Retain: 116, Retrieve: 15, Revise: 43, RollbackRetain: 117, Send_Direct_Email: 62, Set_State: 41, Share: 14, Submit: 26, Unknown: 0, Unshare: 49, Update: 2, Update_AI_assisted: 124, Upsert: 6, User_Access_Audit_Started: 112, User_Access_Audit_Stopped: 113, User_Access_via_Web: 64, User_Access_via_Web_Services: 65, Win: 44 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Operation */
	Operation: { Access: 4, Archive: 115, Create: 1, CustomOperation: 200, Delete: 3, Restore: 118, Retain: 116, RollbackRetain: 117, Update: 2, Upsert: 5 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AuthorizationServer entity OptionSets */
const AuthorizationServer = {
	/** Authorization Server Type */
	AuthorizationServerType: { Access_Control_Service: 0, Evolved_STS: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Disabled: 2, Enabled: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** AzureServiceConnection entity OptionSets */
const AzureServiceConnection = {
	/** Connection Type */
	ConnectionType: { Recommendation: 1, Text_Analytics: 2 },
	/** Last Connection Status */
	LastConnectionStatusCode: { Failure: 2, Success: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** backgroundoperation entity OptionSets */
const backgroundoperation = {
	/** Status */
	StateCode: { Completed: 3, Locked: 2, Ready: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Succeeded: 30, Waiting_For_Resources: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** bot entity OptionSets */
const bot = {
	/** Access Control Policy */
	accesscontrolpolicy: { Any: 0, Any_multi_tenant: 3, Copilot_readers: 1, Group_membership: 2 },
	/** Authentication Mode */
	authenticationmode: { Custom_Azure_Active_Directory: 3, Generic_OAuth2: 4, Integrated: 2, None: 1, Unspecified: 0 },
	/** Authentication trigger */
	authenticationtrigger: { Always: 1, As_Needed: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Language */
	Language: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
	/** Runtime provider */
	RuntimeProvider: { Nuance_Mix_Shell: 1, Power_Virtual_Agents: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Deprovisioned: 2, MissingLicense: 5, Provisioned: 1, ProvisionFailed: 4, Provisioning: 3 },
	/** Supported languages */
	SupportedLanguages: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** bot_botcomponent entity OptionSets */
const bot_botcomponent = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** bot_botcomponentcollection entity OptionSets */
const bot_botcomponentcollection = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** bot_environmentvariabledefinition entity OptionSets */
const bot_environmentvariabledefinition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent entity OptionSets */
const botcomponent = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ComponentType */
	ComponentType: { Bot_entity: 3, Bot_entity_V2: 11, Bot_File_Attachment: 14, Bot_translations_V2: 10, Bot_variable: 2, Bot_variable_V2: 12, Copilot_Settings: 18, Custom_GPT: 15, Dialog: 4, Dialog_schema: 8, External_Trigger: 17, Knowledge_Source: 16, Language_generation: 7, Language_understanding: 6, Skill: 1, Skill_V2: 13, Test_Case: 19, Topic: 0, Topic_V2: 9, Trigger: 5 },
	/** Language */
	Language: { Arabic: 1025, Chinese_Simplified: 2052, Chinese_Traditional: 1028, Czech: 1029, Danish: 1030, Dutch: 1043, English: 1033, English_Australia: 3081, English_United_Kingdom: 2057, Finnish: 1035, French: 1036, French_Canada: 3084, German: 1031, Greek: 1032, Hebrew: 1037, Hindi: 1081, Indonesian: 1057, Italian: 1040, Japanese: 1041, Korean: 1042, Norwegian: 1044, Polish: 1045, Portuguese_Brazilian: 1046, Portuguese_Portugal: 2070, Russian: 1049, Spanish: 1034, Spanish_United_States: 21514, Swedish: 1053, Thai: 1054, Turkish: 1055 },
	/** Reuse Policy */
	ReusePolicy: { None: 0, Private: 1, Public: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_aipluginoperation entity OptionSets */
const botcomponent_aipluginoperation = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_botcomponent entity OptionSets */
const botcomponent_botcomponent = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_connectionreference entity OptionSets */
const botcomponent_connectionreference = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_dvtablesearch entity OptionSets */
const botcomponent_dvtablesearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_environmentvariabledefinition entity OptionSets */
const botcomponent_environmentvariabledefinition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_msdyn_aimodel entity OptionSets */
const botcomponent_msdyn_aimodel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponent_workflow entity OptionSets */
const botcomponent_workflow = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** botcomponentcollection entity OptionSets */
const botcomponentcollection = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkArchiveConfig entity OptionSets */
const BulkArchiveConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** State */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active_1: 1, Active_10: 10, Cancelled: 30, Inactive: 2, Unscheduled: 20 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkArchiveFailureDetail entity OptionSets */
const BulkArchiveFailureDetail = {
	/** Operation */
	Operation: { Copy: 20, Delete: 30, Mark: 10 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkArchiveOperation entity OptionSets */
const BulkArchiveOperation = {
	/** Status */
	statecode: { Completed: 3, Inprogress: 2, Scheduled: 0 },
	/** Status Reason */
	statuscode: { Cancelled: 32, Copying: 21, Deleting: 22, Failed: 31, InComplete: 33, Marking: 20, Succeeded: 30, Waiting: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkArchiveOperationDetail entity OptionSets */
const BulkArchiveOperationDetail = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkDeleteFailure entity OptionSets */
const BulkDeleteFailure = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BulkDeleteOperation entity OptionSets */
const BulkDeleteOperation = {
	/** Status */
	StateCode: { Completed: 3, Locked: 2, Ready: 0, Suspended: 1 },
	/** Status Reason */
	StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Paused: 12, Pausing: 21, Retrying: 11, Succeeded: 30, Waiting: 10, Waiting_For_Resources: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessDataLocalizedLabel entity OptionSets */
const BusinessDataLocalizedLabel = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** businessprocess entity OptionSets */
const businessprocess = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Process Map Status */
	processmapstatus: { Processing: 100000001, Ready: 100000002, Refreshing: 100000003, Unknown: 100000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessProcessFlowInstance entity OptionSets */
const BusinessProcessFlowInstance = {
	/** Entity1ObjectTypeCode */
	Entity1ObjectTypeCode: {},
	/** Entity2ObjectTypeCode */
	Entity2ObjectTypeCode: {},
	/** Entity3ObjectTypeCode */
	Entity3ObjectTypeCode: {},
	/** Entity4ObjectTypeCode */
	Entity4ObjectTypeCode: {},
	/** Entity5ObjectTypeCode */
	Entity5ObjectTypeCode: {},
	/** State */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Aborted: 3, Active: 1, Finished: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessProcessLinkedArtifact entity OptionSets */
const BusinessProcessLinkedArtifact = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessUnit entity OptionSets */
const BusinessUnit = {
	/** Address 1: Address Type */
	Address1_AddressTypeCode: { Default_Value: 1 },
	/** Address 1: Shipping Method */
	Address1_ShippingMethodCode: { Default_Value: 1 },
	/** Address 2: Address Type */
	Address2_AddressTypeCode: { Default_Value: 1 },
	/** Address 2: Shipping Method */
	Address2_ShippingMethodCode: { Default_Value: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessUnitMap entity OptionSets */
const BusinessUnitMap = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** BusinessUnitNewsArticle entity OptionSets */
const BusinessUnitNewsArticle = {
	/** Visible To */
	ArticleTypeCode: { All_Users: 1, Sales_Users: 2, Service_Users: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Calendar entity OptionSets */
const Calendar = {
	/** Calendar type */
	Type: { Customer_Service: 1, Default: 0, Holiday_Schedule: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CalendarRule entity OptionSets */
const CalendarRule = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CallbackRegistration entity OptionSets */
const CallbackRegistration = {
	/** Specifies the message type */
	Message: { Added: 1, Added_or_Deleted: 5, Added_or_Modified: 4, Added_or_Modified_or_Deleted: 7, Deleted: 2, Modified: 3, Modified_or_Deleted: 6 },
	/** RunAs */
	RunAs: { Flow_owner: 3, Modifying_user: 1, Row_owner: 2 },
	/** Specifies the scope type */
	Scope: { BusinessUnit: 2, Organization: 4, ParentChildBusinessUnit: 3, User: 1 },
	/** Specifies the Callback registration version type */
	Version: { V1: 1, V2: 2, V3: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CanvasApp entity OptionSets */
const CanvasApp = {
	/** Canvas App Type */
	CanvasAppType: { App_Component_Library: 1, Classic_Canvas_App: 0, Code_App: 4, Custom_Canvas_Page: 2, Mobile_App: 5, Unified_App: 3 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CanvasAppExtendedMetadata entity OptionSets */
const CanvasAppExtendedMetadata = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** card entity OptionSets */
const card = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Sizes */
	Sizes: { Large: 200000002, Medium: 200000001, Small: 200000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** cardentityconnections entity OptionSets */
const cardentityconnections = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** cardstateitem entity OptionSets */
const cardstateitem = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CardType entity OptionSets */
const CardType = {
	/** Card Client Availability */
	ClientAvailability: { MocaAndWeb: 3, MocaOnly: 2, WebClientOnly: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** cascadegrantrevokeaccessrecordstracker entity OptionSets */
const cascadegrantrevokeaccessrecordstracker = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** cascadegrantrevokeaccessversiontracker entity OptionSets */
const cascadegrantrevokeaccessversiontracker = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Catalog entity OptionSets */
const Catalog = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CatalogAssignment entity OptionSets */
const CatalogAssignment = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectIdType */
	ObjectIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Category entity OptionSets */
const Category = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CertificateCredential entity OptionSets */
const CertificateCredential = {
	/** ComponentIdType */
	ComponentIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelAccessProfile entity OptionSets */
const ChannelAccessProfile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelAccessProfileEntityAccessLevel entity OptionSets */
const ChannelAccessProfileEntityAccessLevel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelAccessProfileRule entity OptionSets */
const ChannelAccessProfileRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	StateCode: { Active: 1, Draft: 0 },
	/** Status Reason */
	StatusCode: { Active: 2, Draft: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelAccessProfileRuleItem entity OptionSets */
const ChannelAccessProfileRuleItem = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelProperty entity OptionSets */
const ChannelProperty = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Data Type */
	DataType: { Floating_Point_Number: 0, Single_Line_Of_Text: 1, Whole_Number: 2 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ChannelPropertyGroup entity OptionSets */
const ChannelPropertyGroup = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Regarding Type */
	RegardingTypeCode: { Appointment: 4201, Email: 4202, Invite_Redemption: 10407, Phone_Call: 4210, Portal_Comment: 10408, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** chat entity OptionSets */
const chat = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** Delivery Priority */
	DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Recurring Instance Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Canceled: 3, Completed: 2, Open: 1, Scheduled: 4 },
	/** Sync Status */
	SyncStatus: { Enabled: 2, Not_Enabled: 0, Pending: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ClientUpdate entity OptionSets */
const ClientUpdate = {
	/** WhenExecute */
	WhenExecute: { After_download_data: 3, After_SchemaChanges_but_before_Download_data: 2, Before_SchemaChanges: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ColumnMapping entity OptionSets */
const ColumnMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Comment entity OptionSets */
const Comment = {
	/** Artifact Type */
	ArtifactType: { AppModule: 3, Bot: 4, BotComponent: 2, CanvasApp: 1, PowerPageSite: 5, Workflow: 0 },
	/** Kind */
	Kind: { Container: 0, Reply: 2, Thread: 1 },
	/** ParentIdType */
	ParentIdType: {},
	/** State */
	State: { Open: 0, Resolved: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ComplexControl entity OptionSets */
const ComplexControl = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Complex Control Type */
	Type: { LinkControl: 1, ProcessControl: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** componentchangesetpayload entity OptionSets */
const componentchangesetpayload = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** componentchangesetversion entity OptionSets */
const componentchangesetversion = {
	/** componentIdType */
	componentIdType: {},
	/** Operation */
	Operation: { Create: 0, Delete: 6, Publish: 2, Restore: 3, Solution_Import: 4, Unchanged: 5, Update: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** componentversion entity OptionSets */
const componentversion = {
	/** ComponentIdType */
	ComponentIdType: {},
	/** Operation */
	Operation: { Create: 0, Publish: 2, Restore: 3, Solution_Import: 4, Update: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** componentversiondatasource entity OptionSets */
const componentversiondatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** componentversionnrddatasource entity OptionSets */
const componentversionnrddatasource = {
	/** ComponentIdType */
	ComponentIdType: {},
	/** Operation */
	Operation: { Create: 0, Publish: 2, Restore: 3, Solution_Import: 4, Update: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Connection entity OptionSets */
const Connection = {
	/** Record1IdObjectTypeCode */
	Record1IdObjectTypeCode: {},
	/** Type (From) */
	Record1ObjectTypeCode: { Account: 1, Activity: 4200, Appointment: 4201, Channel_Access_Profile_Rule: 9400, Contact: 2, Email: 4202, Fax: 4204, Goal: 9600, Invitation: 10406, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Base_Record: 9930, Letter: 4207, Phone_Call: 4210, Position: 50, Process_Session: 4710, Publishing_State_Transition_Rule: 10426, Recurring_Appointment: 4251, Shortcut: 10428, Social_Activity: 4216, Social_Profile: 99, Task: 4212, Team: 9, Territory: 2013, User: 8, Website: 10440 },
	/** Record2IdObjectTypeCode */
	Record2IdObjectTypeCode: {},
	/** Type (To) */
	Record2ObjectTypeCode: { Account: 1, Activity: 4200, Appointment: 4201, Channel_Access_Profile_Rule: 9400, Contact: 2, Email: 4202, Fax: 4204, Goal: 9600, Invitation: 10406, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Base_Record: 9930, Letter: 4207, Phone_Call: 4210, Position: 50, Process_Session: 4710, Publishing_State_Transition_Rule: 10426, Recurring_Appointment: 4251, Shortcut: 10428, Social_Activity: 4216, Social_Profile: 99, Task: 4212, Team: 9, Territory: 2013, User: 8, Website: 10440 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConnectionInstance entity OptionSets */
const ConnectionInstance = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** connectionreference entity OptionSets */
const connectionreference = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Prompting Behavior */
	PromptingBehavior: { Prompt_on_import: 0, Skip: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConnectionRole entity OptionSets */
const ConnectionRole = {
	/** Connection Role Category */
	Category: { Business: 1, Family: 2, Other: 5, Sales: 4, Sales_Team: 1001, Service: 1002, Social: 3, Stakeholder: 1000 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConnectionRoleAssociation entity OptionSets */
const ConnectionRoleAssociation = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConnectionRoleObjectTypeCode entity OptionSets */
const ConnectionRoleObjectTypeCode = {
	/** AssociatedObjectTypeCode */
	AssociatedObjectTypeCode: {},
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** connector entity OptionSets */
const connector = {
	/** Capabilities */
	Capabilities: { actions: 118690005, blob: 118690002, cloud: 118690004, composite: 118690000, gateway: 118690003, tabular: 118690001 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Connector Type */
	ConnectorType: { ConnectionLess: 2, CustomConnector: 1, NotSpecified: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Contact entity OptionSets */
const Contact = {
	/** Role */
	AccountRoleCode: { Decision_Maker: 1, Employee: 2, Influencer: 3 },
	/** Address 1: Address Type */
	Address1_AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
	/** Address 1: Freight Terms */
	Address1_FreightTermsCode: { FOB: 1, No_Charge: 2 },
	/** Address 1: Shipping Method */
	Address1_ShippingMethodCode: { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
	/** Address 2: Address Type */
	Address2_AddressTypeCode: { Default_Value: 1 },
	/** Address 2: Freight Terms */
	Address2_FreightTermsCode: { Default_Value: 1 },
	/** Address 2: Shipping Method */
	Address2_ShippingMethodCode: { Default_Value: 1 },
	/** Address 3: Address Type */
	Address3_AddressTypeCode: { Default_Value: 1 },
	/** Address 3: Freight Terms */
	Address3_FreightTermsCode: { Default_Value: 1 },
	/** Address 3: Shipping Method */
	Address3_ShippingMethodCode: { Default_Value: 1 },
	/** Customer Size */
	CustomerSizeCode: { Default_Value: 1 },
	/** Relationship Type */
	CustomerTypeCode: { Default_Value: 1 },
	/** Education */
	EducationCode: { Default_Value: 1 },
	/** Marital Status */
	FamilyStatusCode: { Divorced: 3, Married: 2, Single: 1, Widowed: 4 },
	/** Gender */
	GenderCode: { Female: 2, Male: 1 },
	/** Has Children */
	HasChildrenCode: { Default_Value: 1 },
	/** Lead Source */
	LeadSourceCode: { Default_Value: 1 },
	/** Preferred Language */
	mspp_userpreferredlcid: { Arabic: 1025, Basque_Basque: 1069, Bulgarian_Bulgaria: 1026, Catalan_Catalan: 1027, Chinese_China: 2052, Chinese_Hong_Kong_SAR: 3076, Chinese_Traditional: 1028, Croatian_Croatia: 1050, Czech_Czech_Republic: 1029, Danish_Denmark: 1030, Dutch_Netherlands: 1043, English: 1033, Estonian_Estonia: 1061, Finnish_Finland: 1035, French_France: 1036, Galician_Spain: 1110, German_Germany: 1031, Greek_Greece: 1032, Hebrew: 1037, Hindi_India: 1081, Hungarian_Hungary: 1038, Indonesian_Indonesia: 1057, Italian_Italy: 1040, Japanese_Japan: 1041, Kazakh_Kazakhstan: 1087, Korean_Korea: 1042, Latvian_Latvia: 1062, Lithuanian_Lithuania: 1063, Malay_Malaysia: 1086, Norwegian_Bokmal_Norway: 1044, Polish_Poland: 1045, Portuguese_Brazil: 1046, Portuguese_Portugal: 2070, Romanian_Romania: 1048, Russian_Russia: 1049, Serbian_Cyrillic_Serbia: 3098, Serbian_Latin_Serbia: 2074, Slovak_Slovakia: 1051, Slovenian_Slovenia: 1060, Spanish_Traditional_Sort_Spain: 3082, Swedish_Sweden: 1053, Thai_Thailand: 1054, Turkish_Turkiye: 1055, Ukrainian_Ukraine: 1058, Vietnamese_Vietnam: 1066 },
	/** ParentCustomerIdType */
	ParentCustomerIdType: {},
	/** Payment Terms */
	PaymentTermsCode: { _2_10_Net_30: 2, Net_30: 1, Net_45: 3, Net_60: 4 },
	/** Preferred Day */
	PreferredAppointmentDayCode: { Friday: 5, Monday: 1, Saturday: 6, Sunday: 0, Thursday: 4, Tuesday: 2, Wednesday: 3 },
	/** Preferred Time */
	PreferredAppointmentTimeCode: { Afternoon: 2, Evening: 3, Morning: 1 },
	/** Preferred Method of Contact */
	PreferredContactMethodCode: { Any: 1, Email: 2, Fax: 4, Mail: 5, Phone: 3 },
	/** Shipping Method */
	ShippingMethodCode: { Default_Value: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Territory */
	TerritoryCode: { Default_Value: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** conversationtranscript entity OptionSets */
const conversationtranscript = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConvertRule entity OptionSets */
const ConvertRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Source Type */
	SourceChannelTypeCode: { Appointment: 4201, Email: 4202, Invite_Redemption: 10407, Phone_Call: 4210, Portal_Comment: 10408, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
	/** Source Type */
	SourceTypeCode: { Email: 2, Social_Monitoring: 1 },
	/** Status */
	StateCode: { Active: 1, Draft: 0 },
	/** Status Reason */
	StatusCode: { Active: 2, Draft: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ConvertRuleItem entity OptionSets */
const ConvertRuleItem = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CopilotExampleQuestion entity OptionSets */
const CopilotExampleQuestion = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Knowledge Type */
	knowledgetype: { Example_Knowledge: 1, Example_Question: 0 },
	/** SQLCorrectness */
	SQLCorrectness: { Invalid: 2, NotSure: 3, Pending_Validation: 0, Valid: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CopilotGlossaryTerm entity OptionSets */
const CopilotGlossaryTerm = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CopilotSynonyms entity OptionSets */
const CopilotSynonyms = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** credential entity OptionSets */
const credential = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Connection Type */
	connectiontype: { CertificateBasedAuthentication: 5, ConnectionReference: 7, CyberArkIdentity: 4, MachineMapping: 6, UsernamePassword: 1, UsernamePasswordList: 2, UsernamePasswordListWithGroupMapping: 3 },
	/** Credential Type */
	credentialtype: { ListOfCredentials: 2, SingleCredential: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Usage Type */
	usagetype: { Connection: 280920000, Cua: 280920003, DesktopScript: 280920001, Network: 280920002 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomAPI entity OptionSets */
const CustomAPI = {
	/** Allowed Custom Processing Step Type */
	AllowedCustomProcessingStepType: { Async_Only: 1, None: 0, Sync_and_Async: 2 },
	/** Binding Type */
	BindingType: { Entity: 1, Entity_Collection: 2, Global: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomAPIRequestParameter entity OptionSets */
const CustomAPIRequestParameter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Boolean: 0, DateTime: 1, Decimal: 2, Entity: 3, EntityCollection: 4, EntityReference: 5, Float: 6, Guid: 12, Integer: 7, Money: 8, Picklist: 9, String: 10, StringArray: 11 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomAPIResponseProperty entity OptionSets */
const CustomAPIResponseProperty = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Boolean: 0, DateTime: 1, Decimal: 2, Entity: 3, EntityCollection: 4, EntityReference: 5, Float: 6, Guid: 12, Integer: 7, Money: 8, Picklist: 9, String: 10, StringArray: 11 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomControl entity OptionSets */
const CustomControl = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomControlDefaultConfig entity OptionSets */
const CustomControlDefaultConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PrimaryEntityTypeCode */
	PrimaryEntityTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomControlResource entity OptionSets */
const CustomControlResource = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomerAddress entity OptionSets */
const CustomerAddress = {
	/** Address Type */
	AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
	/** Freight Terms */
	FreightTermsCode: { FOB: 1, No_Charge: 2 },
	/** Object Type  */
	ObjectTypeCode: { Account: 1, Contact: 2 },
	/** ParentIdTypeCode */
	ParentIdTypeCode: {},
	/** Shipping Method */
	ShippingMethodCode: { Airborne: 1, DHL: 2, FedEx: 3, Full_Load: 6, Postal_Mail: 5, UPS: 4, Will_Call: 7 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** CustomerRelationship entity OptionSets */
const CustomerRelationship = {
	/** CustomerIdType */
	CustomerIdType: {},
	/** PartnerIdType */
	PartnerIdType: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** datalakefolder entity OptionSets */
const datalakefolder = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** datalakefolderpermission entity OptionSets */
const datalakefolderpermission = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** datalakeworkspace entity OptionSets */
const datalakeworkspace = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** datalakeworkspacepermission entity OptionSets */
const datalakeworkspacepermission = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DataPerformance entity OptionSets */
const DataPerformance = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DataProcessingConfiguration entity OptionSets */
const DataProcessingConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Module type */
	ModuleType: { Dynamic: 1, Static: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DelegatedAuthorization entity OptionSets */
const DelegatedAuthorization = {
	/** Provider Type */
	ProviderType: { MCSBot: 3, None: 0, Roadmap: 2, SharePoint: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DeletedItemReference entity OptionSets */
const DeletedItemReference = {
	/** deletedobjectIdType */
	deletedobjectIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DelveActionHub entity OptionSets */
const DelveActionHub = {
	/** Card Type */
	CardType: { Default: 0, MeetingRequest: 3, SendContentRequest: 1, YesNo: 2 },
	/** RecordIdObjectTypeCode */
	RecordIdObjectTypeCode: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Completed: 1, Dismiss: 2, Pending: 0 },
	/** Status Reason */
	StatusCode: { Completed: 2, Dismiss: 3, Pending: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Dependency entity OptionSets */
const Dependency = {
	/** Dependency Type */
	DependencyType: { None: 0, Published: 2, Solution_Internal: 1, Unpublished: 4 },
	/** DependentComponentType */
	DependentComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** RequiredComponentType */
	RequiredComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DependencyFeature entity OptionSets */
const DependencyFeature = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DependencyNode entity OptionSets */
const DependencyNode = {
	/** Type Code */
	ComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** desktopflowbinary entity OptionSets */
const desktopflowbinary = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** desktopflowmodule entity OptionSets */
const desktopflowmodule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { CustomModule: 0, UIElementsCollection: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DisplayString entity OptionSets */
const DisplayString = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DisplayStringMap entity OptionSets */
const DisplayStringMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DocumentIndex entity OptionSets */
const DocumentIndex = {
	/** Document Type  */
	DocumentTypeCode: { Default_Value: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DocumentTemplate entity OptionSets */
const DocumentTemplate = {
	/** AssociatedEntityTypeCode */
	AssociatedEntityTypeCode: {},
	/** Type */
	DocumentType: { Microsoft_Excel: 1, Microsoft_Word: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DuplicateRecord entity OptionSets */
const DuplicateRecord = {
	/** BaseRecordIdTypeCode */
	BaseRecordIdTypeCode: {},
	/** DuplicateRecordIdTypeCode */
	DuplicateRecordIdTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DuplicateRule entity OptionSets */
const DuplicateRule = {
	/** Base Record Type */
	BaseEntityTypeCode: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Matching Record Type */
	MatchingEntityTypeCode: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** Status */
	StateCode: { Active: 1, Inactive: 0 },
	/** Status Reason */
	StatusCode: { Published: 2, Publishing: 1, Unpublished: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DuplicateRuleCondition entity OptionSets */
const DuplicateRuleCondition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Operator Code */
	OperatorCode: { Exact_Match: 0, Exact_Match_Pick_List_Label: 5, Exact_Match_Pick_List_Value: 6, Same_Date: 3, Same_Date_and_Time: 4, Same_First_Characters: 1, Same_Last_Characters: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVFileSearch entity OptionSets */
const DVFileSearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVFileSearchAttribute entity OptionSets */
const DVFileSearchAttribute = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVFileSearchEntity entity OptionSets */
const DVFileSearchEntity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVTableSearch entity OptionSets */
const DVTableSearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** SearchType */
	SearchType: { DataverseSearch: 0, FederatedSearch: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVTableSearchAttribute entity OptionSets */
const DVTableSearchAttribute = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** DVTableSearchEntity entity OptionSets */
const DVTableSearchEntity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ElasticFileAttachment entity OptionSets */
const ElasticFileAttachment = {
	/** ObjectIdTypeCode */
	ObjectIdTypeCode: {},
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Email entity OptionSets */
const Email = {
	/** AcceptingEntityTypeCode */
	AcceptingEntityTypeCode: {},
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Correlation Method */
	CorrelationMethod: { ConversationIndex: 5, CustomCorrelation: 7, InReplyTo: 3, None: 0, Skipped: 1, SmartMatching: 6, TrackingToken: 4, XHeader: 2 },
	/** Delivery Priority */
	DeliveryPriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Email Reminder Status */
	EmailReminderStatus: { NotSet: 0, ReminderExpired: 2, ReminderInvalid: 3, ReminderSet: 1 },
	/** Email Reminder Type */
	EmailReminderType: { If_I_do_not_receive_a_reply_by: 0, If_the_email_is_not_opened_by: 1, Remind_me_anyways_at: 2 },
	/** EmailSenderObjectTypeCode */
	EmailSenderObjectTypeCode: {},
	/** Notifications */
	Notifications: { None: 0, The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1, Truncated_body: 2 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** SendersAccountObjectTypeCode */
	SendersAccountObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 5, Completed: 2, Draft: 1, Failed: 8, Pending_Send: 6, Received: 4, Sending: 7, Sent: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EmailAddressConfiguration entity OptionSets */
const EmailAddressConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EmailHash entity OptionSets */
const EmailHash = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EmailSearch entity OptionSets */
const EmailSearch = {
	/** ParentObjectTypeCode */
	ParentObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EmailServerProfile entity OptionSets */
const EmailServerProfile = {
	/** Exchange Version */
	ExchangeVersion: { Exchange_2007: 0, Exchange_2007_SP1: 1, Exchange_2010: 2, Exchange_2010_SP1: 3, Exchange_2010_SP2: 4, Exchange_2013: 5 },
	/** Incoming Authentication Protocol */
	IncomingAuthenticationProtocol: { Auto_Detect: 0, Basic: 3, Negotiate: 1, NTLM: 2, OAuth: 4 },
	/** Incoming Email Credential Retrieval */
	IncomingCredentialRetrieval: { Credentials_Specified_by_a_User_or_Queue: 0, Credentials_Specified_in_Email_Server_Profile: 1, Exchange_Hybrid_Modern_Auth_HMA: 6, Gmail_OAuth: 5, OAuth_with_Microsoft_Entra_ID: 7, Server_to_Server_Authentication: 2, Windows_Integrated_Authentication: 3, Without_Credentials_Anonymous: 4 },
	/** Last Test Authorization Status */
	LastAuthorizationStatus: { Failure: 0, Success: 1 },
	/** Last Test Execution Status */
	LastTestExecutionStatus: { Failure: 0, Success: 1, Warning: 2 },
	/** Last Test Validation Status */
	LastTestValidationStatus: { Failure: 0, Success: 1 },
	/** Outgoing Authentication Protocol */
	OutgoingAuthenticationProtocol: { Auto_Detect: 0, Basic: 3, Negotiate: 1, NTLM: 2, OAuth: 4 },
	/** Outgoing Email Credential Retrieval */
	OutgoingCredentialRetrieval: { Credentials_Specified_by_a_User_or_Queue: 0, Credentials_Specified_in_Email_Server_Profile: 1, Exchange_Hybrid_Modern_Auth_HMA: 6, Gmail_OAuth: 5, OAuth_with_Microsoft_Entra_ID: 7, Server_to_Server_Authentication: 2, Windows_Integrated_Authentication: 3, Without_Credentials_Anonymous: 4 },
	/** Email server authority */
	ServerAuthority: { Automatic_determined_by_Dynamics_365_cloud: 3, China_21Vianet_httpsloginchinacloudapicn: 2, Public_GCC_httpsloginmicrosoftonlinecom: 0, US_Government_GCC_High_and_DoD_httpsloginmicrosoftonlineus: 1 },
	/** Email Server Type */
	ServerType: { Exchange_Online_Hybrid: 3, Exchange_Server: 0, Exchange_Server_Hybrid: 2, IMAPSMTP: 4, Other_POP3SMTP: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EmailSignature entity OptionSets */
const EmailSignature = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** enablearchivalrequest entity OptionSets */
const enablearchivalrequest = {
	/** isCascadedEntity */
	isCascadedEntity: { No: 0, Yes: 1 },
	/** IsEnabledForArchival */
	IsEnabledForArchival: { No: 0, NotReady: 2, Yes: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Entity entity OptionSets */
const Entity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityAnalyticsConfig entity OptionSets */
const EntityAnalyticsConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity Data Source */
	EntityDataSource: { Dataverse: 1, FnOTables: 2, None: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityClusterConfig entity OptionSets */
const EntityClusterConfig = {
	/** ClusterMode */
	ClusterMode: { Inherited: 3, Local: 2, Partitioned: 0, Replicated: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityDataProvider entity OptionSets */
const EntityDataProvider = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityDataSource entity OptionSets */
const EntityDataSource = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityImageConfig entity OptionSets */
const EntityImageConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityIndex entity OptionSets */
const EntityIndex = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityKey entity OptionSets */
const EntityKey = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityMap entity OptionSets */
const EntityMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityRecordFilter entity OptionSets */
const EntityRecordFilter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EntityRelationship entity OptionSets */
const EntityRelationship = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EnvironmentVariableDefinition entity OptionSets */
const EnvironmentVariableDefinition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** SecretStore */
	SecretStore: { Azure_Key_Vault: 0, Microsoft_Dataverse: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Boolean: 100000002, Data_Source: 100000004, JSON: 100000003, Number: 100000001, Secret: 100000005, String: 100000000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EnvironmentVariableValue entity OptionSets */
const EnvironmentVariableValue = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** EventExpanderBreadcrumb entity OptionSets */
const EventExpanderBreadcrumb = {
	/** Status */
	StateCode: { Completed: 3, Locked: 2, Ready: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Succeeded: 30, Waiting_For_Resources: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExchangeSyncIdMapping entity OptionSets */
const ExchangeSyncIdMapping = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExpanderEvent entity OptionSets */
const ExpanderEvent = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExpiredProcess entity OptionSets */
const ExpiredProcess = {
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Aborted: 3, Active: 1, Finished: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** exportedexcel entity OptionSets */
const exportedexcel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExportSolutionUpload entity OptionSets */
const ExportSolutionUpload = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExternalParty entity OptionSets */
const ExternalParty = {
	/** Status */
	StateCode: { Disabled: 1, Enabled: 0 },
	/** Status Reason */
	StatusCode: { Disabled: 2, Enabled: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ExternalPartyItem entity OptionSets */
const ExternalPartyItem = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Disabled: 1, Enabled: 0 },
	/** Status Reason */
	StatusCode: { Disabled: 2, Enabled: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** fabricaiskill entity OptionSets */
const fabricaiskill = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, InProgress: 1, Published: 2 },
	/** Status Reason */
	statuscode: { Deleting: 2, Draft: 0, Published: 3, PublishFailed: 4, Publishing: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Fax entity OptionSets */
const Fax = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 5, Completed: 2, Open: 1, Received: 4, Sent: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** featurecontrolsetting entity OptionSets */
const featurecontrolsetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FederatedKnowledgeCitation entity OptionSets */
const FederatedKnowledgeCitation = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FederatedKnowledgeConfiguration entity OptionSets */
const FederatedKnowledgeConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, Failed: 2, Published: 1 },
	/** Status Reason */
	statuscode: { ConnectionError: 2, Draft: 0, InternalError: 3, Success: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FederatedKnowledgeEntityConfiguration entity OptionSets */
const FederatedKnowledgeEntityConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, Failed: 2, Published: 1 },
	/** Status Reason */
	statuscode: { Draft: 0, Failure: 2, Success: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FederatedKnowledgeMetadataRefresh entity OptionSets */
const FederatedKnowledgeMetadataRefresh = {
	/** FederatedJobType */
	federatedjobtype: { Structured: 0, Unknown: 2, Unstructured: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Feedback entity OptionSets */
const Feedback = {
	/** msdyn_ContextObjectIdType */
	msdyn_ContextObjectIdType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Source */
	Source: { Internal: 0, Portal: 1 },
	/** Status */
	StateCode: { Closed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Accepted: 2, Closed: 3, Proposed: 1, Rejected: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FieldPermission entity OptionSets */
const FieldPermission = {
	/** Can create the attribute */
	CanCreate: { Allowed: 4, Not_Allowed: 0 },
	/** Can Read the attribute */
	CanRead: { Allowed: 4, Not_Allowed: 0 },
	/** Can this profile read unmasked value of attribute */
	CanReadUnMasked: { All_Records: 3, Not_Allowed: 0, One_Record: 1 },
	/** Can Update the attribute */
	CanUpdate: { Allowed: 4, Not_Allowed: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** EntityName */
	EntityName: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FieldSecurityProfile entity OptionSets */
const FieldSecurityProfile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FileAttachment entity OptionSets */
const FileAttachment = {
	/** ObjectIdTypeCode */
	ObjectIdTypeCode: {},
	/** Object Type  */
	ObjectTypeCode: { Account: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FilterTemplate entity OptionSets */
const FilterTemplate = {
	/** ReturnedTypeCode */
	ReturnedTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** FixedMonthlyFiscalCalendar entity OptionSets */
const FixedMonthlyFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowaggregation entity OptionSets */
const flowaggregation = {
	/** WorkflowCategory */
	WorkflowCategory: { AiFlow: 7, DesktopFlow: 6, ModernFlow: 5 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowcapacityassignment entity OptionSets */
const flowcapacityassignment = {
	/** Allocation Origin */
	AllocationOrigin: { System: 1, User: 0 },
	/** CapacitySource */
	CapacitySource: { AddOn: 0, FailOpen: 3, UserTrial: 2, ViralAdoption: 1 },
	/** CapacityType */
	CapacityType: { PowerAutomateHostedRpa: 0, PowerAutomatePerProcess: 1, PowerAutomateProcessMining: 2 },
	/** regardingIdType */
	regardingIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowcredentialapplication entity OptionSets */
const flowcredentialapplication = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Sharing Type */
	sharingtype: { Cascade: 0, UnCascade: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowevent entity OptionSets */
const flowevent = {
	/** parentobjectidIdType */
	parentobjectidIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowlog entity OptionSets */
const flowlog = {
	/** Level */
	level: { Debug: 100000001, Error: 100000004, Info: 100000002, Verbose: 100000000, Warning: 100000003 },
	/** parentobjectidIdType */
	parentobjectidIdType: {},
	/** Type */
	type: { CuaHumanInTheLoopRequest: 100000403, CuaReasoningStep: 100000401, CuaStartSession: 100000400, CuaWaitOrCompleteSession: 100000402, CustomLog: 100000000, DesktopFlowOrchestrationRepairSessionMismatchRequest: 100000300, DesktopFlowOrchestrationRepairSessionMismatchResponse: 100000301, DesktopFlowOrchestrationRepairWindowsIdentityIncorrectRequest: 100000310, DesktopFlowOrchestrationRepairWindowsIdentityIncorrectResponse: 100000311, DesktopFlowRunAction: 100000001, DesktopFlowRunQueueAssigned: 100000004, DesktopFlowRunQueueAssignFailed: 100000005, DesktopFlowRunQueued: 100000003, DesktopFlowRunQueuePriorityChanged: 100000002, DesktopFlowRunQueueRunCompleted: 100000007, DesktopFlowRunQueueRunConfirmed: 100000006, DesktopFlowRunUnattendedRepairUISelectorRequest: 100000100, DesktopFlowRunUnattendedRepairUISelectorResponse: 100000101, WorkqueueFlowSession: 100000200, WorkqueueProcessorLog: 100000201 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowmachine entity OptionSets */
const flowmachine = {
	/** Hosted Machine State */
	HostedMachineState: { Disabled: 0, Enabled: 1, Error: 2 },
	/** Flow Machine Hosting Type */
	HostingType: { CloudPc: 2, Customer: 0, Hosted: 1 },
	/** Machine Key Delivery Status */
	KeyDeliveryStatus: { Default: 1, KeyExpired: 3, PendingNewKey: 2 },
	/** Last known picture-in-picture support */
	LastKnownPictureInPictureSupport: { Disabled: 1, Enabled: 2, Unknown: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1, Maintenance: 2 },
	/** Status Reason */
	statuscode: { Active: 1, Disabled: 9, DrainMode: 5, Error: 8, HostedMachineOvercapacity: 13, HostedMachineOvercapacityDeleted: 14, HostedMachineOvercapacityDisabled: 15, Inactive: 2, ManualMaintenance: 4, ProvisionedWithError: 12, Provisioning: 10, RequiresGroupKey: 11, RequiresReconnection: 3, Temporary: 7, ToDelete: 6 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowmachinegroup entity OptionSets */
const flowmachinegroup = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Domain setting */
	DomainSetting: { AadJoined: 1, HybridEntraJoined: 2, None: 0 },
	/** Flow Group Type */
	FlowGroupType: { Default: 545940002, Keyless: 545940000, Standard: 545940001 },
	/** Managed Version */
	ManagedVersion: { V1: 1, V2: 2 },
	/** Management Type */
	ManagementType: { Customer: 0, Managed: 1, Shared: 2 },
	/** Preferred Queing Type */
	PreferredQueuingType: { ExtendedQueuePrioritization: 1, FIFO: 0 },
	/** Provisioning State */
	ProvisioningState: { Created: 0, Error: 3, Provisioned: 2, Provisioning: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1, Maintenance: 2 },
	/** Status Reason */
	statuscode: { Active: 1, HmgCmkOperation: 7, HmgIslandMove: 5, Inactive: 2, KeyExpired: 4, ManualMaintenance: 3, Quarantined: 6 },
	/** Flow Machine Group Usage Type */
	UsageType: { CuaOnly: 1, RpaAndCua: 2, RpaOnly: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowmachineimage entity OptionSets */
const flowmachineimage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Source */
	source: { Blob: 279640001, Service: 279640000, SharedImageGallery: 279640002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowmachineimageversion entity OptionSets */
const flowmachineimageversion = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Error: 3, Inactive: 2, Provisioning: 4, ProvisioningFailed: 5 },
	/** SupportedScenario */
	SupportedScenario: { HostedMachineGroup: 1, HostedMachineGroupdAndRpaBox: 3, RpaBox: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowmachinenetwork entity OptionSets */
const flowmachinenetwork = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Provisioning State */
	ProvisioningState: { Created: 0, Error: 3, Provisioned: 2, Provisioning: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Error: 3, Inactive: 2 },
	/** Supported Scenario */
	SupportedScenario: { HostedMachineGroup: 1, HostedMachineGroupdAndRpaBox: 3, RpaBox: 2 },
	/** Type */
	type: { azureAdJoin: 100000000, hybridAdJoin: 100000001 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowrun entity OptionSets */
const flowrun = {
	/** IsPrimary */
	IsPrimary: { _false: 0, _true: 1 },
	/** Power Automate Cloud Flow Type */
	ModernFlowType: { CopilotStudioFlow: 1, M365CopilotAgentFlow: 2, PowerAutomateFlow: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowsession entity OptionSets */
const flowsession = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Run mode */
	RunMode: { Attended: 1, Local: 0, Unattended: 2 },
	/** Run session mode */
	RunSessionMode: { Default: 1, PictureInPicture: 2, Unapplicable: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Aborted: 11, Cancelled: 7, Deleted: 13, Failed: 8, Faulted: 9, Ignored: 12, NotSpecified: 0, Paused: 1, Running: 2, Skipped: 5, Succeeded: 4, Suspended: 6, Terminated: 14, TimedOut: 10, Waiting: 3 },
	/** Sub-Category */
	SubCategory: { Default: 0, Test: 1 },
	/** Trigger type */
	TriggerType: { ApiFlow: 0, Cua: 4, DesktopFlow: 1, Local: 2, RunDesktopFlowDataverseApi: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** flowsessionbinary entity OptionSets */
const flowsessionbinary = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** fxexpression entity OptionSets */
const fxexpression = {
	/** Category */
	Category: { Business_Rule: 1, Workflow: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitBranch entity OptionSets */
const GitBranch = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitConfigurationRetrievalDataSource entity OptionSets */
const GitConfigurationRetrievalDataSource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitOrganization entity OptionSets */
const GitOrganization = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitProject entity OptionSets */
const GitProject = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitRepository entity OptionSets */
const GitRepository = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GitSolution entity OptionSets */
const GitSolution = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GlobalSearchConfiguration entity OptionSets */
const GlobalSearchConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Goal entity OptionSets */
const Goal = {
	/** Amount Data Type */
	AmountDataType: { Decimal: 1, Integer: 2, Money: 0 },
	/** Fiscal Period */
	FiscalPeriod: { Annual: 301, April: 104, August: 108, December: 112, February: 102, January: 101, July: 107, June: 106, March: 103, May: 105, November: 111, October: 110, P1: 401, P10: 410, P11: 411, P12: 412, P13: 413, P2: 402, P3: 403, P4: 404, P5: 405, P6: 406, P7: 407, P8: 408, P9: 409, Quarter_1: 1, Quarter_2: 2, Quarter_3: 3, Quarter_4: 4, Semester_1: 201, Semester_2: 202, September: 109 },
	/** Fiscal Year */
	FiscalYear: { FY1970: 1970, FY1971: 1971, FY1972: 1972, FY1973: 1973, FY1974: 1974, FY1975: 1975, FY1976: 1976, FY1977: 1977, FY1978: 1978, FY1979: 1979, FY1980: 1980, FY1981: 1981, FY1982: 1982, FY1983: 1983, FY1984: 1984, FY1985: 1985, FY1986: 1986, FY1987: 1987, FY1988: 1988, FY1989: 1989, FY1990: 1990, FY1991: 1991, FY1992: 1992, FY1993: 1993, FY1994: 1994, FY1995: 1995, FY1996: 1996, FY1997: 1997, FY1998: 1998, FY1999: 1999, FY2000: 2000, FY2001: 2001, FY2002: 2002, FY2003: 2003, FY2004: 2004, FY2005: 2005, FY2006: 2006, FY2007: 2007, FY2008: 2008, FY2009: 2009, FY2010: 2010, FY2011: 2011, FY2012: 2012, FY2013: 2013, FY2014: 2014, FY2015: 2015, FY2016: 2016, FY2017: 2017, FY2018: 2018, FY2019: 2019, FY2020: 2020, FY2021: 2021, FY2022: 2022, FY2023: 2023, FY2024: 2024, FY2025: 2025, FY2026: 2026, FY2027: 2027, FY2028: 2028, FY2029: 2029, FY2030: 2030, FY2031: 2031, FY2032: 2032, FY2033: 2033, FY2034: 2034, FY2035: 2035, FY2036: 2036, FY2037: 2037, FY2038: 2038 },
	/** GoalOwnerIdType */
	GoalOwnerIdType: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Closed: 1, Discarded: 2, Open: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GoalRollupQuery entity OptionSets */
const GoalRollupQuery = {
	/** QueryEntityType */
	QueryEntityType: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Closed: 1, Open: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** GovernanceConfiguration entity OptionSets */
const GovernanceConfiguration = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** HierarchyRule entity OptionSets */
const HierarchyRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** HierarchySecurityConfiguration entity OptionSets */
const HierarchySecurityConfiguration = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** holidaywrapper entity OptionSets */
const holidaywrapper = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImageDescriptor entity OptionSets */
const ImageDescriptor = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Import entity OptionSets */
const _Import = {
	/** Mode */
	ModeCode: { Create: 0, Update: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Completed: 4, Failed: 5, Importing: 3, Parsing: 1, Submitted: 0, Transforming: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportData entity OptionSets */
const ImportData = {
	/** Error Type */
	ErrorType: { Create: 0, Update: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportEntityMapping entity OptionSets */
const ImportEntityMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Remove Duplicates */
	DeDupe: { Eliminate: 2, Ignore: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportFile entity OptionSets */
const ImportFile = {
	/** Data Delimiter */
	DataDelimiterCode: { DoubleQuote: 1, None: 2, SingleQuote: 3 },
	/** Field Delimiter */
	FieldDelimiterCode: { Colon: 1, Comma: 2, Semicolon: 4, Tab: 3 },
	/** File Type */
	FileTypeCode: { Attachment: 2, CSV: 0, XLSX: 3, XML_Spreadsheet_2003: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Processing Status */
	ProcessingStatus: { Complex_Transformation: 4, Import_Complete: 11, Import_Pass_1: 9, Import_Pass_2: 10, Lookup_Transformation: 5, Not_Started: 1, Owner_Transformation: 7, Parsing: 2, Parsing_Complete: 3, Picklist_Transformation: 6, Primary_Key_Transformation: 12, Transformation_Complete: 8 },
	/** RecordsOwnerIdType */
	RecordsOwnerIdType: {},
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Completed: 4, Failed: 5, Importing: 3, Parsing: 1, Submitted: 0, Transforming: 2 },
	/** Upsert Mode */
	UpsertModeCode: { Create: 0, Ignore: 2, Update: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportJob entity OptionSets */
const ImportJob = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportLog entity OptionSets */
const ImportLog = {
	/** Log Phase */
	LogPhaseCode: { Import_Create: 2, Import_Update: 3, Parse: 0, Transform: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ImportMap entity OptionSets */
const ImportMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entities Per File */
	EntitiesPerFile: { Multiple_Entities_Per_File: 2, Single_Entity_Per_File: 1 },
	/** Map Type */
	ImportMapType: { In_Process: 3, Out_of_Box: 2, Standard: 1 },
	/** Source System Type */
	SourceType: { Generic_Map_for_Contact_and_Account: 5, Map_For_SalesForcecom_Contact_and_Account_Report_Export: 3, Map_For_SalesForcecom_Full_Data_Export: 1, Map_For_SalesForcecom_Report_Export: 2, Microsoft_Office_Outlook_2010_with_Business_Contact_Manager: 4 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Record Type */
	TargetEntity: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** IndexAttributes entity OptionSets */
const IndexAttributes = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** indexedtrait entity OptionSets */
const indexedtrait = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** IntegrationStatus entity OptionSets */
const IntegrationStatus = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** StateCode */
	StateCode: {},
	/** StatusCode */
	StatusCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** IntelligentMemory entity OptionSets */
const IntelligentMemory = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** InteractionForEmail entity OptionSets */
const InteractionForEmail = {
	/** Interaction Type */
	InteractionType: { AttachmentOpen: 2, EmailOpen: 0, EmailReply: 3, LinkOpen: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** InternalAddress entity OptionSets */
const InternalAddress = {
	/** AddressTypeCode */
	AddressTypeCode: {},
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** ShippingMethodCode */
	ShippingMethodCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** InternalCatalogAssignment entity OptionSets */
const InternalCatalogAssignment = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectIdType */
	ObjectIdType: {},
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** InterProcessLock entity OptionSets */
const InterProcessLock = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** InvalidDependency entity OptionSets */
const InvalidDependency = {
	/** Existing Object's Component Type */
	ExistingComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** Weight */
	ExistingDependencyType: { None: 0, Published: 2, Solution_Internal: 1, Unpublished: 4 },
	/** Type Code */
	MissingComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** IsvConfig entity OptionSets */
const IsvConfig = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KbArticle entity OptionSets */
const KbArticle = {
	/** Status  */
	StateCode: { Draft: 1, Published: 3, Unapproved: 2 },
	/** Status Reason */
	StatusCode: { Draft: 1, Published: 3, Unapproved: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KbArticleComment entity OptionSets */
const KbArticleComment = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KbArticleTemplate entity OptionSets */
const KbArticleTemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KeyVaultReference entity OptionSets */
const KeyVaultReference = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Key Type */
	KeyType: { Certificate: 1, CertificateWithX5c: 2, Secret: 0 },
	/** Pre-Authorized Application Type */
	PreAuthorizedApplicationType: { MicrosoftDataverseFirstParty: 0, Other: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeArticle entity OptionSets */
const KnowledgeArticle = {
	/** Expired Review Options */
	ExpiredReviewOptions: { Archive: 2, Needs_Updating: 0, Republish: 1 },
	/** Representative Review */
	msdyn_agentreviewstatus: { Not_Reviewed: 100000000, Reviewed: 100000001 },
	/** Compliance State */
	msdyn_compliancestatecode: { Compliant: 100000000, Non_Compliant: 100000001, Pending: 100000002 },
	/** Creation Mode */
	msdyn_creationmode: { Copilot: 1, Manual: 0 },
	/** Source of Creation */
	msdyn_sourceofcreation: { BulkHarvest: 3, DraftAssist: 1, Manual: 0, RealTimeHarvest: 2, RealTimeHarvest_Conversation: 4 },
	/** Review */
	Review: { Approved: 0, Rejected: 1 },
	/** Status */
	StateCode: { Approved: 1, Archived: 5, Discarded: 6, Draft: 0, Expired: 4, Published: 3, Scheduled: 2 },
	/** Status Reason */
	StatusCode: { Approved: 5, Archived: 12, Discarded: 13, Draft: 2, Expired: 10, In_review: 4, Needs_review_3: 3, Needs_review_8: 8, Proposed: 1, Published: 7, Rejected_11: 11, Rejected_14: 14, Scheduled: 6, Updating: 9 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeArticlesCategories entity OptionSets */
const KnowledgeArticlesCategories = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeArticleViews entity OptionSets */
const KnowledgeArticleViews = {
	/** Location */
	Location: { Internal: 1, Web: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeBaseRecord entity OptionSets */
const KnowledgeBaseRecord = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeFAQ entity OptionSets */
const KnowledgeFAQ = {
	/** Source */
	Source: { Relevant_Chunks: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeSearchModel entity OptionSets */
const KnowledgeSearchModel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Source Entity */
	SourceEntity: { Case: 112 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeSourceConsumer entity OptionSets */
const KnowledgeSourceConsumer = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { Agent: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** KnowledgeSourceProfile entity OptionSets */
const KnowledgeSourceProfile = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** LanguageLocale entity OptionSets */
const LanguageLocale = {
	/** State Code */
	statecode: { Active: 0, Inactive: 1 },
	/** Language Status Code */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** LanguageProvisioningState entity OptionSets */
const LanguageProvisioningState = {
	/** Provisioning Stage */
	ProvisioningStage: { FileBased: 1, MetadataHelperDependent: 2, Other: 4, Ribbon: 5, SystemOnly: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Letter entity OptionSets */
const Letter = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 5, Draft: 2, Open: 1, Received: 3, Sent: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** License entity OptionSets */
const License = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** LocalConfigStore entity OptionSets */
const LocalConfigStore = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** LookUpMapping entity OptionSets */
const LookUpMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Lookup Source */
	LookUpSourceCode: { Source: 0, System: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Mailbox entity OptionSets */
const Mailbox = {
	/** ACS Outgoing Email Status */
	ACSOutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
	/** Appointments, Contacts, and Tasks */
	ACTDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 0, None: 2, Server_Side_Synchronization: 1 },
	/** Appointments, Contacts, and Tasks Status */
	ACTStatus: { Failure: 2, Not_Run: 0, Success: 1 },
	/** Email Address Status */
	EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
	/** Exchange Contacts Import Status */
	ExchangeContactsImportStatus: { Imported: 1, ImportFailed: 2, NotImported: 0 },
	/** Incoming Email */
	IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
	/** Incoming Email Status */
	IncomingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
	/** Mailbox Status */
	MailboxStatus: { Failure: 2, Not_Run: 0, Success: 1 },
	/** Office Apps Deployment Type */
	OfficeAppsDeploymentStatus: { Installed: 1, InstallFailed: 2, NotInstalled: 0, UninstallFailed: 3, UpgradeRequired: 4 },
	/** Outgoing Email */
	OutgoingEmailDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization: 2 },
	/** Outgoing Email Status */
	OutgoingEmailStatus: { Failure: 2, Not_Run: 0, Success: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MailboxStatistics entity OptionSets */
const MailboxStatistics = {
	/** Mailbox Operation Type */
	OperationTypeId: { ACT: 2, Incoming_Email: 0, Outgoing_Email: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MailboxTrackingCategory entity OptionSets */
const MailboxTrackingCategory = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MailboxTrackingFolder entity OptionSets */
const MailboxTrackingFolder = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MailMergeTemplate entity OptionSets */
const MailMergeTemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Document Format */
	DocumentFormat: { _2003: 1, _2007: 2 },
	/** Mail Merge Type */
	MailMergeType: { Email_Message: 2, Envelope: 3, Fax: 6, Labels: 4, Letter: 1, Quotes: 5 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** TemplateTypeCode */
	TemplateTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mainfewshot entity OptionSets */
const mainfewshot = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity Type Supported */
	EntityType: { Custom: 1, OOB: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** makerfewshot entity OptionSets */
const makerfewshot = {
	/** SQL Correctness */
	SQLCorrectness: { Invalid: 2, NotSure: 3, Pending_Validation: 0, Valid: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ManagedIdentity entity OptionSets */
const ManagedIdentity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Credential Source */
	CredentialSource: { ClientSecret: 0, IsManaged: 2, KeyVault: 1, MicrosoftFirstPartyCertificate: 3 },
	/** Identity Type */
	IdentityType: { AgentId: 1, AgentIdentityBlueprint: 2, AgentUser: 3, App_Registeration: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Subject Scope */
	SubjectScope: { DevOnlyScope: 2, EnviornmentScope: 1, GlobalScope: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ManagedProperty entity OptionSets */
const ManagedProperty = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MaskingRule entity OptionSets */
const MaskingRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MCPServer entity OptionSets */
const MCPServer = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ServerType */
	ServerType: { Agent365: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MCPTool entity OptionSets */
const MCPTool = {
	/** BackendToolType */
	BackendToolType: { ConnectorAction: 1, DataverseCustomAPI: 0, Graph: 2, RemoteAPI: 4, RemoteMCP: 3, SdkMessagePair: 5 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** HTTPMethod */
	HTTPMethod: { DELETE: 4, GET: 0, PATCH: 3, POST: 1, PUT: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MetadataDifference entity OptionSets */
const MetadataDifference = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MetadataForArchival entity OptionSets */
const MetadataForArchival = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Metric entity OptionSets */
const Metric = {
	/** Amount Data Type */
	AmountDataType: { Decimal: 1, Integer: 2, Money: 0 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Closed: 1, Open: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MobileOfflineProfile entity OptionSets */
const MobileOfflineProfile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mobileofflineprofileextension entity OptionSets */
const mobileofflineprofileextension = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MobileOfflineProfileItem entity OptionSets */
const MobileOfflineProfileItem = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Data Download Filter */
	RecordDistributionCriteria: { All_records: 1, Custom_data_filter: 3, Download_related_data_only: 0, Other_data_filter: 2 },
	/** Entity */
	SelectedEntityTypeCode: { Account: 1, AccountBPF: 10919, Activity_File_Attachment: 10252, Appointment: 4201, Attachment: 1001, Contact: 2, Email: 4202, Image_Descriptor: 1007, Interim_Update_Knowledge_Article: 10705, Knowledge_Article_Attachment: 10267, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_Harvest_Job_Record: 10275, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Note: 5, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, PowerPagesDDOSAlert: 10451, Queue: 2020, Queue_Item: 2029, Reserve_entity_10701ed370: 10604, Reserve_entity_1bfb649ef5: 10488, Reserve_entity_26a8ef60be: 10810, Reserve_entity_2de89d6f96: 10819, Reserve_entity_2f931a2c87: 10468, Reserve_entity_3d0e4d135d: 10799, Reserve_entity_49318bf520: 10675, Reserve_entity_56035df1f6: 10571, Reserve_entity_58265009a3: 10822, Reserve_entity_6356b0c104: 10524, Reserve_entity_6a32540060: 10585, Reserve_entity_702362ceb4: 10787, Reserve_entity_7aab32d91e: 10669, Reserve_entity_878256b1bd: 10506, Reserve_entity_9520b6e405: 10807, Reserve_entity_9eafbd660d: 10686, Reserve_entity_a8cd77b9ac: 10825, Reserve_entity_af3e0052ac: 10816, Reserve_entity_b3331f12e0: 10715, Reserve_entity_ba02296c07: 10542, Reserve_entity_bbc4b9fafc: 10655, Reserve_entity_c15f669578: 10718, Reserve_entity_c21749bb70: 10621, Reserve_entity_cd9cd968cc: 10712, Reserve_entity_dc212544db: 10638, Reserve_entity_dfef254c8f: 10590, Reserve_entity_dff8308cc9: 10813, Reserve_entity_e113384c28: 10828, Reserve_entity_e4227f9f0f: 10557, Reserve_entity_ed7de5dd0b: 10700, SLA_KPI_Instance: 9752, Task: 4212, Team: 9, User: 8 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MobileOfflineProfileItemAssociation entity OptionSets */
const MobileOfflineProfileItemAssociation = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** SelectedRelationShipsSchema */
	SelectedRelationShipsSchema: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mobileofflineprofileitemfilter entity OptionSets */
const mobileofflineprofileitemfilter = {
	/** returnedtypecode */
	returnedtypecode: {},
	/** Subtype */
	subtype: { CUD_IN: 0, CUD_OUT: 4, FULL_SYNC: 5, RELATED_CUD_IN: 1, RELATED_ENTITIES: 6, RELATED_INTERSECT_ENTITIES: 7, RELATED_SHARED_IN: 3, SHARED_IN: 2 },
	/** Type */
	type: { DELTA_IN: 0, DELTA_OUT: 1, FULL_SYNC: 2, RELATED_ENTITIES: 4, TOP_1: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MonthlyFiscalCalendar entity OptionSets */
const MonthlyFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBDataset entity OptionSets */
const msdyn_AIBDataset = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBDatasetFile entity OptionSets */
const msdyn_AIBDatasetFile = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBDatasetRecord entity OptionSets */
const msdyn_AIBDatasetRecord = {
	/** RecordType */
	msdyn_RecordType: { eeInputRow: 190691000, eeNamedEntity: 190691001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBDatasetsContainer entity OptionSets */
const msdyn_AIBDatasetsContainer = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBFeedbackLoop entity OptionSets */
const msdyn_AIBFeedbackLoop = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBFile entity OptionSets */
const msdyn_AIBFile = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIBFileAttachedData entity OptionSets */
const msdyn_AIBFileAttachedData = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIConfiguration entity OptionSets */
const msdyn_AIConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Type */
	msdyn_Type: { RunConfiguration: 190690001, TrainingConfiguration: 190690000 },
	/** Status */
	statecode: { Done: 2, Draft: 0, Failed: 3, InProgress: 1 },
	/** Status Reason */
	statuscode: { CancelFailed: 12, Cancelling: 2, DeleteFailed: 13, Deleting: 5, Draft: 0, Published: 7, PublishFailed: 10, Publishing: 3, Scheduled: 8, Trained: 6, TrainFailed: 9, Training: 1, UnpublishFailed: 11, Unpublishing: 4, UnsuccessfulTraining: 14 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_aiconfiguration_documenttemplate entity OptionSets */
const msdyn_aiconfiguration_documenttemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_aiconfigurationsearch entity OptionSets */
const msdyn_aiconfigurationsearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIDataProcessingEvent entity OptionSets */
const msdyn_AIDataProcessingEvent = {
	/** Processing Status */
	msdyn_ProcessingStatus: { Exported: 375150005, Exporting_Failed: 375150006, Manual_Review: 375150004, New: 375150000, Processed: 375150001, Processing_Failed: 375150002, Rejected: 375150007, Validated: 375150003 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_aidocumenttemplate entity OptionSets */
const msdyn_aidocumenttemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIEvaluationConfiguration entity OptionSets */
const msdyn_AIEvaluationConfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Evaluation configuration state */
	msdyn_ConfigurationState: { Active: 0, Inactive: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIEvaluationMetric entity OptionSets */
const msdyn_AIEvaluationMetric = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIEvaluationRun entity OptionSets */
const msdyn_AIEvaluationRun = {
	/** EvaluationRun Status */
	msdyn_RunStatus: { Blocked: 3, Canceled: 6, Created: 0, Failed: 5, InProgress: 1, Paused: 2, Succeeded: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIEvent entity OptionSets */
const msdyn_AIEvent = {
	/** Consumption Source */
	msdyn_ConsumptionSource: { API: 2, MCS: 3, PowerApps: 1, PowerAutomation: 0 },
	/** Processing Status */
	msdyn_ProcessingStatus: { Failed: 1, Processed: 0, Processing: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIFpTrainingDocument entity OptionSets */
const msdyn_AIFpTrainingDocument = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIModel entity OptionSets */
const msdyn_AIModel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 1, Inactive: 0 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_aimodelcatalog entity OptionSets */
const msdyn_aimodelcatalog = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Model Submission Type */
	msdyn_modelsubmissiontype: { DataverseManagedFineTuneModel: 100000002, FineTuneModel: 100000001, None: 100000000 },
	/** Model Task Type */
	msdyn_modeltasktype: { Classification: 100000002, None: 100000000, QueryBoosting: 100000001 },
	/** Provider Type */
	msdyn_providertype: { AzureAIFoundry: 100000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOdImage entity OptionSets */
const msdyn_AIOdImage = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOdLabel entity OptionSets */
const msdyn_AIOdLabel = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_aiodlabel_msdyn_aiconfiguration entity OptionSets */
const msdyn_aiodlabel_msdyn_aiconfiguration = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOdTrainingBoundingBox entity OptionSets */
const msdyn_AIOdTrainingBoundingBox = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOdTrainingImage entity OptionSets */
const msdyn_AIOdTrainingImage = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOptimization entity OptionSets */
const msdyn_AIOptimization = {
	/** RunStatus */
	msdyn_RunStatus: { Created: 1, Creating: 0, Failed: 4, Running: 2, Success: 3 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AIOptimizationPrivateData entity OptionSets */
const msdyn_AIOptimizationPrivateData = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITemplate entity OptionSets */
const msdyn_AITemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITestCase entity OptionSets */
const msdyn_AITestCase = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** TestCase State */
	msdyn_TestCaseState: { ActionRequired: 2, Active: 0, Inactive: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITestCaseDocument entity OptionSets */
const msdyn_AITestCaseDocument = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITestCaseInput entity OptionSets */
const msdyn_AITestCaseInput = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITestRun entity OptionSets */
const msdyn_AITestRun = {
	/** TestRun Status */
	msdyn_TestRunStatus: { Blocked: 3, Canceled: 6, Created: 0, Failed: 5, InProgress: 1, Paused: 2, Succeeded: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_AITestRunBatch entity OptionSets */
const msdyn_AITestRunBatch = {
	/** Batch Run Status */
	msdyn_BatchRunStatus: { Blocked: 3, Canceled: 6, Created: 0, Failed: 5, InProgress: 1, Paused: 2, Succeeded: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_analysiscomponent entity OptionSets */
const msdyn_analysiscomponent = {
	/** Analysis Component Type */
	msdyn_AnalysisComponentType: { Component_Health: 192350001, Object_Health: 192350002, Organization_Health: 192350000 },
	/** Component Type */
	msdyn_ComponentType: { Configuration: 192350005, Entity: 192350001, Form: 192350003, Plugin: 192350004, Solution: 192350000, View: 192350002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Canceled: 2, Complete: 192350001, Completed_With_Exceptions: 192350003, Exception: 192350002, Pending: 1, Running: 192350000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_analysisjob entity OptionSets */
const msdyn_analysisjob = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Canceled: 2, Complete: 192350001, Completed_With_Exceptions: 192350003, Exception: 192350002, Pending: 1, Running: 192350000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_analysisoverride entity OptionSets */
const msdyn_analysisoverride = {
	/** Severity */
	msdyn_Severity: { Critical: 192350004, High: 192350003, Informational: 192350000, Low: 192350001, Medium: 192350002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_analysisresult entity OptionSets */
const msdyn_analysisresult = {
	/** AnalysisComponentType */
	msdyn_AnalysisComponentType: { Component_Health: 192350001, Organization_Health: 192350000 },
	/** Category */
	msdyn_Category: { Accessibility: 192350008, Design: 192350004, Licensing: 192350009, Maintainability: 192350006, Online_Migration: 192350005, Performance: 192350000, Security: 192350003, Supportability: 192350007, Upgrade_Readiness: 192350001, Usage: 192350002 },
	/** Component Type */
	msdyn_ComponentType: { Configuration: 192350002, Plug_In: 192350001, Web_Resources: 192350000 },
	/** Level */
	msdyn_Level: { Error: 192350000, Warning: 192350001 },
	/** Return Status */
	msdyn_ReturnStatus: { Config_Error: 192350002, Error: 192350005, Fail: 192350001, Pass: 192350000, Resolved: 192350003, Suggestion: 192350006, Warning: 192350004 },
	/** Severity */
	msdyn_Severity: { Critical: 192350003, High: 192350002, Low: 192350000, Medium: 192350001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_analysisresultdetail entity OptionSets */
const msdyn_analysisresultdetail = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_appinsightsmetadata entity OptionSets */
const msdyn_appinsightsmetadata = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_componentlayer entity OptionSets */
const msdyn_componentlayer = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_componentlayerdatasource entity OptionSets */
const msdyn_componentlayerdatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_connectordatasource entity OptionSets */
const msdyn_connectordatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_connectordatasource_environmentva entity OptionSets */
const msdyn_connectordatasource_environmentva = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_CopilotInteractions entity OptionSets */
const msdyn_CopilotInteractions = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_customcontrolextendedsettings entity OptionSets */
const msdyn_customcontrolextendedsettings = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dataflow entity OptionSets */
const msdyn_dataflow = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dataflow_datalakefolder entity OptionSets */
const msdyn_dataflow_datalakefolder = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_DataflowConnectionReference entity OptionSets */
const msdyn_DataflowConnectionReference = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dataflowrefreshhistory entity OptionSets */
const msdyn_dataflowrefreshhistory = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_DataflowTemplate entity OptionSets */
const msdyn_DataflowTemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Template State */
	msdyn_TemplateState: { Active: 100000001, Deprecated: 100000003, Draft: 100000000, Published: 100000002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_datalakeds entity OptionSets */
const msdyn_datalakeds = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_DataWorkspace entity OptionSets */
const msdyn_DataWorkspace = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dmsrequest entity OptionSets */
const msdyn_dmsrequest = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dmsrequeststatus entity OptionSets */
const msdyn_dmsrequeststatus = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dmssyncrequest entity OptionSets */
const msdyn_dmssyncrequest = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_dmssyncstatus entity OptionSets */
const msdyn_dmssyncstatus = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_entitylinkchatconfiguration entity OptionSets */
const msdyn_entitylinkchatconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_entityrefreshhistory entity OptionSets */
const msdyn_entityrefreshhistory = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_favoriteknowledgearticle entity OptionSets */
const msdyn_favoriteknowledgearticle = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_federatedarticle entity OptionSets */
const msdyn_federatedarticle = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_federatedarticleincident entity OptionSets */
const msdyn_federatedarticleincident = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_FileUpload entity OptionSets */
const msdyn_FileUpload = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_actionapprovalmodel entity OptionSets */
const msdyn_flow_actionapprovalmodel = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_actionapprovalmodel_systemuser entity OptionSets */
const msdyn_flow_actionapprovalmodel_systemuser = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_actionapprovalmodel_team entity OptionSets */
const msdyn_flow_actionapprovalmodel_team = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_approval entity OptionSets */
const msdyn_flow_approval = {
	/** Priority */
	msdyn_flow_approval_priority: { Important: 192350001, Low: 192350003, Medium: 192350002, Urgent: 192350000 },
	/** Request Type */
	msdyn_flow_approval_requesttype: { Basic: 192350001, eSign: 192350002, Other: 192350000, Templates: 192350003 },
	/** Stage */
	msdyn_flow_approval_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Abandoned: 192350007, Canceled: 192350006, Completed: 192350004, Created: 192350000, Expired: 192350005, Pending: 192350001, Suspended: 192350002 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_approvalrequest entity OptionSets */
const msdyn_flow_approvalrequest = {
	/** Response Options Type */
	msdyn_flow_approvalrequest_responseoptionstype: { BasicApproveReject: 192350001, CustomOptions: 192350002, NotSpecified: 192350000 },
	/** Stage */
	msdyn_flow_approvalrequest_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2, Reassigned: 192350000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_approvalresponse entity OptionSets */
const msdyn_flow_approvalresponse = {
	/** Stage */
	msdyn_flow_approvalresponse_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Committed: 192350002, Reviewing: 192350000, Saved: 192350001 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_approvalstep entity OptionSets */
const msdyn_flow_approvalstep = {
	/** msdyn_flow_approvalstep_modelIdType */
	msdyn_flow_approvalstep_modelIdType: {},
	/** Stage */
	msdyn_flow_approvalstep_stage: { Basic: 192350001, Complete: 192351000, Not_Specified: 192350000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallactionapprovalmodel entity OptionSets */
const msdyn_flow_awaitallactionapprovalmodel = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallactionapprovalmodel_team entity OptionSets */
const msdyn_flow_awaitallactionapprovalmodel_team = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallactionapprovalmodel_user entity OptionSets */
const msdyn_flow_awaitallactionapprovalmodel_user = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallapprovalmodel entity OptionSets */
const msdyn_flow_awaitallapprovalmodel = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallmodel_systemuser entity OptionSets */
const msdyn_flow_awaitallmodel_systemuser = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_awaitallmodel_team entity OptionSets */
const msdyn_flow_awaitallmodel_team = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_basicapprovalmodel entity OptionSets */
const msdyn_flow_basicapprovalmodel = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_basicapprovalmodel_systemuser entity OptionSets */
const msdyn_flow_basicapprovalmodel_systemuser = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_basicapprovalmodel_team entity OptionSets */
const msdyn_flow_basicapprovalmodel_team = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_flow_flowapproval entity OptionSets */
const msdyn_flow_flowapproval = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Completed: 192350003, Created: 192350000, NotifyingFlow: 192350002, WaitingForApproval: 192350001 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_FormMapping entity OptionSets */
const msdyn_FormMapping = {
	/** AllowedOperations */
	AllowedOperations: { Create: 0, Update: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Operation */
	Operation: { Create: 0, Update: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_function entity OptionSets */
const msdyn_function = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** language */
	language: { CSharp: 100000001, PowerFx: 100000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_healthcare_feedback entity OptionSets */
const msdyn_healthcare_feedback = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_helppage entity OptionSets */
const msdyn_helppage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_historicalcaseharvestbatch entity OptionSets */
const msdyn_historicalcaseharvestbatch = {
	/** Status */
	statecode: { Completed: 1, Created: 0, Stopped: 2 },
	/** Status Reason */
	statuscode: { Active: 1, Failed: 3, Stopped: 4, Success: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_historicalcaseharvestrun entity OptionSets */
const msdyn_historicalcaseharvestrun = {
	/** harvestingdatatype */
	msdyn_harvestingdatatype: { Case: 0, Conversation: 1, Custom_Entity: 2 },
	/** Status */
	statecode: { Completed: 1, Failed: 2, InProgress: 0, InQueue: 3, Stopped: 4 },
	/** Status Reason */
	statuscode: { CaseIdentificationCompleted_3: 3, CaseIdentificationCompleted_9: 9, CaseIdentificationFailed: 5, CaseIndentificationInProgress_2: 2, CaseIndentificationInProgress_8: 8, Completed: 4, CTandEACcheckFailed: 6, Ready_1: 1, Ready_7: 7, Stopped: 10 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_InsightsStoreVirtualEntity entity OptionSets */
const msdyn_InsightsStoreVirtualEntity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_integratedsearchprovider entity OptionSets */
const msdyn_integratedsearchprovider = {
	/** Authentication */
	msdyn_authenticationtype: { None: 0, OAuth: 1 },
	/** External search provider type */
	msdyn_datasourcetype: { Website: 0 },
	/** Lookback period */
	msdyn_lookbackperiod: { _1_hour: 6, _2_hours: 1, _30_mins: 5, _4_hours: 2, _6_hours: 3, _8_hours: 4, No_Lookback: 0 },
	/** Refresh schedule */
	msdyn_refreshschedule: { _1_day: 8, _1_hour: 4, _15_mins: 1, _2_days: 9, _2_hours: 5, _30_mins: 2, _4_days: 10, _4_hours: 6, _45_mins: 3, _7_days: 11, _8_hours: 7, No_refresh: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Draft: 3, Ingestion_Ready: 1, Validated: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_interimupdateknowledgearticle entity OptionSets */
const msdyn_interimupdateknowledgearticle = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_kalanguagesetting entity OptionSets */
const msdyn_kalanguagesetting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_kbattachment entity OptionSets */
const msdyn_kbattachment = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_kmfederatedsearchconfig entity OptionSets */
const msdyn_kmfederatedsearchconfig = {
	/** Search Type */
	SearchType: { Cross_Organizational_Search: 100000000, Microsoft_Graph_Connector: 100000002, Sharepoint: 100000001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_kmpersonalizationsetting entity OptionSets */
const msdyn_kmpersonalizationsetting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgearticlecustomentity entity OptionSets */
const msdyn_knowledgearticlecustomentity = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgearticleimage entity OptionSets */
const msdyn_knowledgearticleimage = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgearticletemplate entity OptionSets */
const msdyn_knowledgearticletemplate = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgeassetconfiguration entity OptionSets */
const msdyn_knowledgeassetconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, InProgress: 1, Published: 2 },
	/** Status Reason */
	statuscode: { Deleting: 2, Draft: 0, Published: 3, PublishFailed: 4, Publishing: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgeconfiguration entity OptionSets */
const msdyn_knowledgeconfiguration = {
	/** Data Type */
	msdyn_datatype: { Boolean: 1, Integer: 0, String: 2 },
	/** Group Name */
	msdyn_groupname: { GlobalSearchKnowledgeConfiguration: 5, Integrated_search: 0, Internal: 1, KnowledgeCopilot: 3, KnowledgeHarvesting: 4, ZeroSearch: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgeharvestjobrecord entity OptionSets */
const msdyn_knowledgeharvestjobrecord = {
	/** Entity Name */
	msdyn_entityname: { Conversation: 1, Incident: 0 },
	/** Status */
	statecode: { Completed: 2, Failed: 3, MavenInvoked: 1, Ready: 0 },
	/** Status Reason */
	statuscode: { ArticleCreated: 3, ArticleNOTCreated: 4, KBCreateFailed: 5, MavenInvoked: 2, Ready: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgeinteractioninsight entity OptionSets */
const msdyn_knowledgeinteractioninsight = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgemanagementsetting entity OptionSets */
const msdyn_knowledgemanagementsetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** msdyn_actionlist */
	msdyn_actionlist: { Copy_URL: 1, Link_article_and_email_URL: 2, Link_article_and_send_article_content: 3, Link_unlink_article: 0 },
	/** msdyn_status */
	msdyn_status: { Active: 0, Inactive: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgepersonalfilter entity OptionSets */
const msdyn_knowledgepersonalfilter = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgesearchfilter entity OptionSets */
const msdyn_knowledgesearchfilter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_knowledgesearchinsight entity OptionSets */
const msdyn_knowledgesearchinsight = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_mobileapp entity OptionSets */
const msdyn_mobileapp = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_modulerundetail entity OptionSets */
const msdyn_modulerundetail = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_msdyn_kbattachment_knowledgearticle entity OptionSets */
const msdyn_msdyn_kbattachment_knowledgearticle = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_nonrelationalds entity OptionSets */
const msdyn_nonrelationalds = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_ObjectDetectionProduct entity OptionSets */
const msdyn_ObjectDetectionProduct = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_odatav4ds entity OptionSets */
const msdyn_odatav4ds = {
	/** Pagination Mode */
	msdyn_paginationtype: { Client_side_Paging: 0, Server_side_Paging: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_onlineshopperintention entity OptionSets */
const msdyn_onlineshopperintention = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_Plan entity OptionSets */
const msdyn_Plan = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_PlanArtifact entity OptionSets */
const msdyn_PlanArtifact = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Artifact Status */
	msdyn_ArtifactStatus: { Created: 419550001, Modified: 419550002, Proposed: 419550000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_PlanAttachment entity OptionSets */
const msdyn_PlanAttachment = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmanalysishistory entity OptionSets */
const msdyn_pmanalysishistory = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Analysis Result */
	msdyn_analysisresult: { Analyzed: 0, AnalyzeFailed: 1 },
	/** Analysis Type */
	msdyn_analysistype: { OnDemand: 0, Scheduled: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmbusinessruleautomationconfig entity OptionSets */
const msdyn_pmbusinessruleautomationconfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmcalendar entity OptionSets */
const msdyn_pmcalendar = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmcalendarversion entity OptionSets */
const msdyn_pmcalendarversion = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pminferredtask entity OptionSets */
const msdyn_pminferredtask = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** AutomationStatus */
	msdyn_automationstatus: { Complete: 200000003, InProgress: 200000002, NotRecommended: 200000001, NotStarted: 200000000 },
	/** Report Provisioning Status */
	msdyn_reportprovisioningstatus: { Failed: 193350003, NotStarted: 193350000, Provisioned: 193350002, Provisioning: 193350001, Skipped: 193350004 },
	/** Pm Inferred Task Source */
	msdyn_source: { DataLake: 1, ObjectCentric: 2, Recording: 0 },
	/** Status */
	statecode: { Done: 2, Draft: 0, Failed: 3, Imported: 4, InProgress: 1 },
	/** Status Reason */
	statuscode: { Analyzed: 4, AnalyzeFailed: 5, Analyzing: 2, DeleteFailed: 6, Deleting: 3, Draft: 0, Imported: 7, Ingesting: 8, Queued: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmprocessextendedmetadataversion entity OptionSets */
const msdyn_pmprocessextendedmetadataversion = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmprocesstemplate entity OptionSets */
const msdyn_pmprocesstemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmprocessusersettings entity OptionSets */
const msdyn_pmprocessusersettings = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmprocessversion entity OptionSets */
const msdyn_pmprocessversion = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmrecording entity OptionSets */
const msdyn_pmrecording = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PublishingStatus */
	msdyn_publishingstatus: { NotIncluded: 192350000, Obsolete: 192350002, Published: 192350001 },
	/** Type */
	msdyn_type: { UiFlow: 192350000 },
	/** Status */
	statecode: { Complete: 2, Draft: 0, Failed: 3, Recorded: 1 },
	/** Status Reason */
	statuscode: { Complete: 6, Draft: 1, Failed: 7, Imported: 4, Importing: 3, Queued: 2, Recorded: 5 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmsimulation entity OptionSets */
const msdyn_pmsimulation = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** State */
	msdyn_state: { Cancelled: 4, Completed: 3, Failed: 5, InProgress: 2, NotStarted: 1, QueuedForStart: 6 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmtab entity OptionSets */
const msdyn_pmtab = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmtemplate entity OptionSets */
const msdyn_pmtemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_pmview entity OptionSets */
const msdyn_pmview = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Type */
	msdyn_type: { CompareLayer: 3, Persistent: 1, Snapshot: 2, Temporary: 0, TemporaryContext: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_qna entity OptionSets */
const msdyn_qna = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_richtextfile entity OptionSets */
const msdyn_richtextfile = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_salesforcestructuredobject entity OptionSets */
const msdyn_salesforcestructuredobject = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, Failed: 3, InProgress: 1, Published: 2 },
	/** Status Reason */
	statuscode: { Deleting: 2, Draft: 0, Published: 3, PublishFailed: 4, Publishing: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_salesforcestructuredqnaconfig entity OptionSets */
const msdyn_salesforcestructuredqnaconfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Draft: 0, Failed: 3, InProgress: 1, Published: 2 },
	/** Status Reason */
	statuscode: { ConnectionError: 5, Deleting: 2, Draft: 0, Published: 3, PublishFailed: 4, Publishing: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_schedule entity OptionSets */
const msdyn_schedule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ScheduleRefreshType */
	msdyn_schedulerefreshtype: { IntervalBased: 2, Manual: 0, TimeBased: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_serviceconfiguration entity OptionSets */
const msdyn_serviceconfiguration = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_slakpi entity OptionSets */
const msdyn_slakpi = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 1, Inactive: 0 },
	/** Status Reason */
	statuscode: { Active: 2, Inactive: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutioncomponentcountdatasource entity OptionSets */
const msdyn_solutioncomponentcountdatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutioncomponentcountsummary entity OptionSets */
const msdyn_solutioncomponentcountsummary = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutioncomponentdatasource entity OptionSets */
const msdyn_solutioncomponentdatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutioncomponentsummary entity OptionSets */
const msdyn_solutioncomponentsummary = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutionhealthrule entity OptionSets */
const msdyn_solutionhealthrule = {
	/** Resolution Type */
	msdyn_ResolutionType: { Auto_Heal: 192350000, Customer_Action_Required: 192350001, Documenation: 192350002, None: 192350003 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutionhealthruleargument entity OptionSets */
const msdyn_solutionhealthruleargument = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutionhealthruleset entity OptionSets */
const msdyn_solutionhealthruleset = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutionhistory entity OptionSets */
const msdyn_solutionhistory = {
	/** Operation */
	msdyn_operation: { Export: 2, ExportLite: 10, Import: 0, ImportTranslation: 6, LanguageProvision: 5, None: 9, Publish: 3, PublishAll: 4, RibbonMetadataGeneration: 7, Uninstall: 1, UpdatingMissingPackages: 11, WorkflowSetState: 8 },
	/** Status */
	msdyn_status: { Completed: 1, Queued: 2, Started: 0 },
	/** Suboperation */
	msdyn_suboperation: { Delete: 4, FailedInstallingMissingPackages: 8, InlineUpgrade: 5, InstalledMissingPackages: 7, New: 1, None: 0, Update: 3, Upgrade: 2, WaitingForMissingPackages: 6 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_solutionhistorydatasource entity OptionSets */
const msdyn_solutionhistorydatasource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_timelinepin entity OptionSets */
const msdyn_timelinepin = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_tour entity OptionSets */
const msdyn_tour = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_virtualtablecolumncandidate entity OptionSets */
const msdyn_virtualtablecolumncandidate = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdyn_workflowactionstatus entity OptionSets */
const msdyn_workflowactionstatus = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** msdynce_botcontent entity OptionSets */
const msdynce_botcontent = {
	/** State */
	msdynce_state: { Draft: 1, Released: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MsGraphResourceToSubscription entity OptionSets */
const MsGraphResourceToSubscription = {
	/** Resource Type */
	ResourceType: { Teams_Chat_Messages: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspcat_CatalogSubmissionFiles entity OptionSets */
const mspcat_CatalogSubmissionFiles = {
	/** File Type */
	mspcat_FileType: { Document: 526430001, Image: 526430000, Video: 526430002 },
	/** Image Size */
	mspcat_ImageSize: { _216_x_216: 526430001, _48_x_48: 526430000, Screen_Shot: 526430002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspcat_PackageStore entity OptionSets */
const mspcat_PackageStore = {
	/** Intended Deployment Type */
	mspcat_IntendedDeploymentType: { Standard: 526430000, Template: 526430001 },
	/** Operation */
	mspcat_Operation: { Create_Package: 958090001, Package_Upload: 526430001, Submit_To_Catalog: 958090000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Completed: 958090001, Draft: 958090003, Failed: 958090002, Inactive: 2, Pending: 1, Running: 958090000, Submitted: 958090004 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_accesscontrolrule_publishingstate entity OptionSets */
const mspp_accesscontrolrule_publishingstate = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_adplacement entity OptionSets */
const mspp_adplacement = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_columnpermission entity OptionSets */
const mspp_columnpermission = {
	/** Permissions */
	mspp_permissions: { Create: 746610000, Read: 746610001, Update: 746610002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_columnpermissionprofile entity OptionSets */
const mspp_columnpermissionprofile = {
	/** All Column Permissions */
	mspp_allcolumnpermissions: { Create: 746610000, Read: 746610001, Update: 746610002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_columnpermissionprofile_webrole entity OptionSets */
const mspp_columnpermissionprofile_webrole = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_contentsnippet entity OptionSets */
const mspp_contentsnippet = {
	/** Type */
	mspp_type: { HTML: 756150001, Text: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_entityform entity OptionSets */
const mspp_entityform = {
	/** Attach File Save Option */
	mspp_attachfilesaveoption: { Notes: 756150000, Portal_Comment: 756150001 },
	/** Attach File Storage Location */
	mspp_attachfilestoragelocation: { Azure_Blob_Storage: 756150001, Note_Attachment: 756150000 },
	/** Table Source Type */
	mspp_entitysourcetype: { Current_Portal_User: 756150002, Query_String: 756150001, Record_Associated_to_Current_Portal_User: 756150003 },
	/** Map Type */
	mspp_geolocation_maptype: { Bing: 756150000, Esri: 756150002, Google: 756150001 },
	/** Mode */
	mspp_mode: { Edit: 100000001, Insert: 100000000, ReadOnly: 100000002 },
	/** On Success */
	mspp_onsuccess: { Display_Success_Message: 756150000, Redirect: 756150001 },
	/** Source Type */
	mspp_referenceentitysourcetype: { Query_String: 756150000, Record_Associated_to_Current_Portal_User: 756150001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_entityformmetadata entity OptionSets */
const mspp_entityformmetadata = {
	/** Control Style */
	mspp_controlstyle: { Code_component: 756150001, Group_Whole_Number_as_Constant_Sum: 100000003, Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties: 100000005, Group_Whole_Number_as_Rank_Order_Scale_No_Ties: 100000004, Group_Whole_Number_as_Stack_Rank: 100000008, Multiple_Choice: 100000007, Multiple_Choice_Matrix: 100000006, Option_Set_as_Horizontal_Radio_Button_List: 100000001, Option_Set_as_Vertical_Radio_Button_List: 100000000, Render_Lookup_as_Dropdown: 756150000, Single_Line_of_Text_as_Geolocation_Lookup_Validator: 100000002 },
	/** Position */
	mspp_descriptionposition: { Above_the_field: 100000000, Above_the_label: 100000002, Below_the_field: 100000001 },
	/** On Save Type */
	mspp_onsavetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
	/** Prepopulate Type */
	mspp_prepopulatetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
	/** Type */
	mspp_type: { Attribute: 100000000, Notes: 100000005, Section: 100000001, Subgrid: 100000003, Tab: 100000002, Timeline: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_entitylist entity OptionSets */
const mspp_entitylist = {
	/** Calendar Initial View */
	mspp_calendar_initialview: { Day: 756150003, Month: 756150001, Week: 756150002, Year: 756150000 },
	/** Calendar Style */
	mspp_calendar_style: { Event_list: 756150001, Full_calendar: 756150000 },
	/** Time Zone Display Mode */
	mspp_calendar_timezonemode: { Specific_Time_Zone: 756150001, User_Local_Time_Zone: 756150000 },
	/** Filter Orientation */
	mspp_filter_orientation: { Horizontal: 756150000, Vertical: 756150001 },
	/** Distance Units */
	mspp_map_distanceunits: { Km: 756150000, miles: 756150001 },
	/** Map Type */
	mspp_map_type: { Bing: 756150000, Esri: 756150002, Google: 756150001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_entitypermission entity OptionSets */
const mspp_entitypermission = {
	/** Access Type */
	mspp_scope: { Account: 756150002, Contact: 756150001, Global: 756150000, Parent: 756150003, Self: 756150004 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_entitypermission_webrole entity OptionSets */
const mspp_entitypermission_webrole = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_pagetemplate entity OptionSets */
const mspp_pagetemplate = {
	/** Type */
	mspp_type: { Rewrite: 756150000, Web_Template: 756150001 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_pollplacement entity OptionSets */
const mspp_pollplacement = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_powerpagescoreentityds entity OptionSets */
const mspp_powerpagescoreentityds = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_publishingstate entity OptionSets */
const mspp_publishingstate = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_publishingstatetransitionrule entity OptionSets */
const mspp_publishingstatetransitionrule = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_publishingstatetransitionrule_webrole entity OptionSets */
const mspp_publishingstatetransitionrule_webrole = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_redirect entity OptionSets */
const mspp_redirect = {
	/** Status Code */
	mspp_statuscode: { _301_Permanent_Redirect: 301, _302_Temporary_Redirect: 302 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_shortcut entity OptionSets */
const mspp_shortcut = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_sitemarker entity OptionSets */
const mspp_sitemarker = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_sitesetting entity OptionSets */
const mspp_sitesetting = {
	/** Source */
	mspp_source: { Environment_Variable: 1, Table: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webfile entity OptionSets */
const mspp_webfile = {
	/** Content-Disposition */
	mspp_contentdisposition: { attachment: 756150001, inline: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webform entity OptionSets */
const mspp_webform = {
	/** Position */
	mspp_progressindicatorposition: { Bottom: 756150001, Left: 756150002, Right: 756150003, Top: 756150000 },
	/** Type */
	mspp_progressindicatortype: { Numeric_Step_1_of_N: 756150001, Progress_Bar: 756150002, Title: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webformmetadata entity OptionSets */
const mspp_webformmetadata = {
	/** Control Style */
	mspp_controlstyle: { Code_component: 756150001, Group_Whole_Number_as_Constant_Sum: 100000003, Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties: 100000005, Group_Whole_Number_as_Rank_Order_Scale_No_Ties: 100000004, Group_Whole_Number_as_Stack_Rank: 100000008, Multiple_Choice: 100000007, Multiple_Choice_Matrix: 100000006, Option_Set_as_Horizontal_Radio_Button_List: 100000001, Option_Set_as_Vertical_Radio_Button_List: 100000000, Render_Lookup_as_Dropdown: 756150000, Single_Line_of_Text_as_Geolocation_Lookup_Validator: 100000002 },
	/** Position */
	mspp_descriptionposition: { Above_the_field: 100000000, Above_the_label: 100000002, Below_the_field: 100000001 },
	/** On Save Type */
	mspp_onsavetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
	/** Prepopulate Type */
	mspp_prepopulatetype: { Current_Portal_User: 100000002, Todays_Date: 100000001, Value: 100000000 },
	/** Type */
	mspp_type: { Attribute: 100000000, Notes: 100000005, Purchase: 100000003, Section: 100000001, Subgrid: 100000004, Tab: 100000002, Timeline: 756150000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webformstep entity OptionSets */
const mspp_webformstep = {
	/** Attach File Storage Location */
	mspp_attachfilestoragelocation: { Azure_Blob_Storage: 756150001, Note_Document: 756150000 },
	/** Table Source Type */
	mspp_entitysourcetype: { Current_Portal_User: 100000002, Query_String: 100000001, Record_Associated_to_Current_Portal_User: 100000004, Result_From_Previous_Step: 100000003 },
	/** Map Type */
	mspp_geolocation_maptype: { Bing: 756150000, Esri: 756150002, Google: 756150001 },
	/** Mode */
	mspp_mode: { Edit: 100000001, Insert: 100000000, ReadOnly: 100000002 },
	/** Source Type */
	mspp_referenceentitysourcetype: { Previous_Step: 100000001, Query_String: 100000000, Record_Associated_to_Current_Portal_User: 100000002 },
	/** Type */
	mspp_type: { Condition: 100000000, Load_Form: 100000001, Load_Tab: 100000002, Load_User_Control: 100000004, Redirect: 100000003 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_weblink entity OptionSets */
const mspp_weblink = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_weblinkset entity OptionSets */
const mspp_weblinkset = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webpage entity OptionSets */
const mspp_webpage = {
	/** Category */
	mspp_category: { News: 1 },
	/** Comment Policy */
	mspp_feedbackpolicy: { Closed: 756150005, Inherit: 756150000, Item: 756150003, Moderated: 756150004, None: 756150001, Open: 756150002 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webpageaccesscontrolrule entity OptionSets */
const mspp_webpageaccesscontrolrule = {
	/** Right */
	mspp_right: { Grant_Change: 1, Restrict_Read: 2 },
	/** Access Type */
	mspp_scope: { All_content: 1, Exclude_direct_child_web_files: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webpageaccesscontrolrule_webrole entity OptionSets */
const mspp_webpageaccesscontrolrule_webrole = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webrole entity OptionSets */
const mspp_webrole = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_website entity OptionSets */
const mspp_website = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_websiteaccess entity OptionSets */
const mspp_websiteaccess = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_websiteaccess_webrole entity OptionSets */
const mspp_websiteaccess_webrole = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_websitelanguage entity OptionSets */
const mspp_websitelanguage = {
	/** Power Pages Language */
	mspp_websitelcid: { Arabic: 1025, Basque_Basque: 1069, Bulgarian_Bulgaria: 1026, Catalan_Catalan: 1027, Chinese_China: 2052, Chinese_Hong_Kong_SAR: 3076, Chinese_Traditional: 1028, Croatian_Croatia: 1050, Czech_Czech_Republic: 1029, Danish_Denmark: 1030, Dutch_Netherlands: 1043, English: 1033, Estonian_Estonia: 1061, Finnish_Finland: 1035, French_France: 1036, Galician_Spain: 1110, German_Germany: 1031, Greek_Greece: 1032, Hebrew: 1037, Hindi_India: 1081, Hungarian_Hungary: 1038, Indonesian_Indonesia: 1057, Italian_Italy: 1040, Japanese_Japan: 1041, Kazakh_Kazakhstan: 1087, Korean_Korea: 1042, Latvian_Latvia: 1062, Lithuanian_Lithuania: 1063, Malay_Malaysia: 1086, Norwegian_Bokmal_Norway: 1044, Polish_Poland: 1045, Portuguese_Brazil: 1046, Portuguese_Portugal: 2070, Romanian_Romania: 1048, Russian_Russia: 1049, Serbian_Cyrillic_Serbia: 3098, Serbian_Latin_Serbia: 2074, Slovak_Slovakia: 1051, Slovenian_Slovenia: 1060, Spanish_Traditional_Sort_Spain: 3082, Swedish_Sweden: 1053, Thai_Thailand: 1054, Turkish_Turkiye: 1055, Ukrainian_Ukraine: 1058, Vietnamese_Vietnam: 1066 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** mspp_webtemplate entity OptionSets */
const mspp_webtemplate = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MultiEntitySearch entity OptionSets */
const MultiEntitySearch = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MultiEntitySearchEntities entity OptionSets */
const MultiEntitySearchEntities = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** MultiSelectAttributeOptionValues entity OptionSets */
const MultiSelectAttributeOptionValues = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** NavigationSetting entity OptionSets */
const NavigationSetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Group Type */
	SettingType: { Advanced_Setup: 0, Advanced_Setup_Summary: 2, Basic_Setup: 1, Basic_Setup_Summary: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** NewProcess entity OptionSets */
const NewProcess = {
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Aborted: 3, Active: 1, Finished: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** nlsqregistration entity OptionSets */
const nlsqregistration = {
	/** Registration Status */
	RegistrationStatus: { Failed: 3, InProgress: 2, NotRegistered: 0, Registered: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Notification entity OptionSets */
const Notification = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OfficeDocument entity OptionSets */
const OfficeDocument = {
	/** Type */
	DocumentType: { Microsoft_Excel: 1, Microsoft_Word: 2 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OfficeGraphDocument entity OptionSets */
const OfficeGraphDocument = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OfflineCommandDefinition entity OptionSets */
const OfflineCommandDefinition = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OptionSet entity OptionSets */
const _OptionSet = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Organization entity OptionSets */
const Organization = {
	/** Application Based Access Control Mode */
	ApplicationBasedAccessControlMode: { AuditMode: 2, Disabled: 0, Enabled: 1, Enabled_for_roles: 3 },
	/** Computer use logs verbosity */
	CuaFlowLogsVerbosity: { All_data: 0, Data_without_screenshots: 1, Minimal: 2 },
	/** Display Currencies Using */
	CurrencyDisplayOption: { Currency_code: 1, Currency_symbol: 0 },
	/** Currency Format Code */
	CurrencyFormatCode: { _123_0: 0, _123_1: 1, _123_2: 2, _123_3: 3 },
	/** DateFormatCode */
	DateFormatCode: {},
	/** Default Recurrence End Range Type */
	DefaultRecurrenceEndRangeType: { End_By_Date: 3, No_End_Date: 1, Number_of_Occurrences: 2 },
	/** Desktop Flow Run Action Logs Status */
	DesktopFlowRunActionLogsStatus: { Disabled: 2, Enabled: 0, OnFailure: 1 },
	/** Desktop Flow Run Action Log Verbosity */
	DesktopFlowRunActionLogVerbosity: { Custom: 2, Debug: 1, Error: 4, Full: 0, Warning: 3 },
	/** Desktop Flow Run Action Log Version */
	DesktopFlowRunActionLogVersion: { AdditionalContext: 0, AdditionalContextAndFlowLogs: 2, FlowLogs: 1 },
	/** Discount calculation method */
	DiscountCalculationMethod: { Line_item: 0, Per_unit: 1 },
	/** Email Connection Channel */
	EmailConnectionChannel: { Microsoft_Dynamics_365_Email_Router: 1, Server_Side_Synchronization: 0 },
	/** Format for Fiscal Period */
	FiscalPeriodFormatPeriod: { M0: 5, Month_0: 4, Month_Name: 7, P0: 3, Q0: 2, Quarter_0: 1, Semester_0: 6 },
	/** Prefix for Fiscal Year */
	FiscalYearFormatPrefix: { FY: 1 },
	/** Suffix for Fiscal Year */
	FiscalYearFormatSuffix: { Fiscal_Year: 2, FY: 1 },
	/** Fiscal Year Format Year */
	FiscalYearFormatYear: { GGYY: 3, YY: 2, YYYY: 1 },
	/** Full Name Display Order */
	FullNameConventionCode: { First_Name: 1, First_Name_Middle_Initial_Last_Name: 3, First_Name_Middle_Name_Last_Name: 5, Last_Name_First_Name: 0, Last_Name_First_Name_Middle_Initial: 2, Last_Name_First_Name_Middle_Name: 4, Last_Name_no_space_First_Name: 7, Last_Name_space_First_Name: 6 },
	/** IP Based SAS mode */
	IpBasedStorageAccessSignatureMode: { IP_Binding_and_IP_Firewall: 2, IP_Binding_only: 0, IP_Binding_or_IP_Firewall: 3, IP_Firewall_only: 1 },
	/** ISV Integration Mode */
	ISVIntegrationCode: { All: 7, None: 0, Outlook: 6, Outlook_Laptop_Client: 4, Outlook_Workstation_Client: 2, Web: 1, Web_Outlook_Laptop_Client: 5, Web_Outlook_Workstation_Client: 3 },
	/** Show legacy app for admins */
	LegacyAppToggle: { Auto: 0, Off: 2, On: 1 },
	/** Negative Format */
	NegativeFormatCode: { Brackets: 0, Dash: 1, Dash_plus_Space: 2, Space_plus_Trailing_Dash: 4, Trailing_Dash: 3 },
	/** Organization State */
	OrganizationState: { Active: 3, Creating: 0, Updating: 2, Upgrading: 1 },
	/** Plug-in Trace Log Setting */
	PluginTraceLogSetting: { All: 2, Exception: 1, Off: 0 },
	/** Model app refresh channel */
	ReleaseChannel: { Auto: 0, Microsoft_Inner_channel: 2, Monthly_channel: 1, Semi_annual_channel: 3 },
	/** Report Script Errors */
	ReportScriptErrors: { Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1, Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2, Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3, No_preference_for_sending_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 0 },
	/** Samesite mode for Session Cookie */
	SameSiteModeForSessionCookie: { Default: 0, Lax: 2, None: 1, Strict: 3 },
	/** Choose SharePoint Deployment Type */
	SharePointDeploymentType: { On_Premises: 1, Online: 0 },
	/** Status of opt-in or opt-out operation for dynamics 365 azure sync. */
	SyncOptInSelectionStatus: { Failed: 3, Passed: 2, Processing: 1 },
	/** TimeFormatCode */
	TimeFormatCode: {},
	/** Validation mode for apps in this environment */
	ValidationMode: { Block: 2, Off: 0, Warn: 1 },
	/** WeekStartDayCode */
	WeekStartDayCode: {},
	/** Internal Use Only */
	YammerPostMethod: { Private: 1, Public: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** organizationdatasyncfnostate entity OptionSets */
const organizationdatasyncfnostate = {
	/** currentfullsyncstate */
	currentfullsyncstate: { AcceptMerge: 5, Completed: 3, Failed: 6, Initiating: 1, InProgress: 2, Invalid: 4, NotInitialized: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** organizationdatasyncstate entity OptionSets */
const organizationdatasyncstate = {
	/** currentfullsyncstate */
	currentfullsyncstate: { AcceptMerge: 5, Completed: 3, Failed: 6, Initiating: 1, InProgress: 2, Invalid: 4, NotInitialized: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** organizationdatasyncsubscription entity OptionSets */
const organizationdatasyncsubscription = {
	/** BlobPartitionBy */
	BlobPartitionBy: { Day: 1, Month: 2, None: 0, Year: 3 },
	/** DataEndpointPostingType */
	DataEndpointPostingType: { DefaultEndpoint: 0, HTTPS: 2, ServiceBusEventHub: 3, ServiceBusTopic: 1 },
	/** DataProcessingType */
	DataProcessingType: { Batch: 2, Mixed: 3, NotificationOnly: 4, Streaming: 1, Unknown: 0 },
	/** MigrationState */
	MigrationState: { DsfCloudService: 0, DsfSdk: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Activated: 4, Deactivated: 5, Uninitialized: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** organizationdatasyncsubscriptionentity entity OptionSets */
const organizationdatasyncsubscriptionentity = {
	/** BlobPartitionBy */
	BlobPartitionBy: { Day: 1, Month: 2, None: 0, Year: 3 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** organizationdatasyncsubscriptionfnotable entity OptionSets */
const organizationdatasyncsubscriptionfnotable = {
	/** BlobPartitionBy */
	BlobPartitionBy: { Day: 1, Month: 2, None: 0, Year: 3 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OrganizationSetting entity OptionSets */
const OrganizationSetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OrganizationStatistic entity OptionSets */
const OrganizationStatistic = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OrganizationUI entity OptionSets */
const OrganizationUI = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OrgInsightsMetric entity OptionSets */
const OrgInsightsMetric = {
	/** Metric Type */
	MetricType: { Category: 2, Time_Series: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OrgInsightsNotification entity OptionSets */
const OrgInsightsNotification = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Owner entity OptionSets */
const Owner = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** OwnerMapping entity OptionSets */
const OwnerMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** package entity OptionSets */
const _package = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** package_solution entity OptionSets */
const package_solution = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** packagehistory entity OptionSets */
const packagehistory = {
	/** Package Type */
	PackageType: { App: 0, DatabaseVersionUpdate: 2, Solution: 1 },
	/** Priority */
	Priority: { High: 1, Low: 3, Medium: 2 },
	/** Stage */
	StageValue: { Configuration: 2, CustomCode: 4, DataImport: 5, FnO: 6, PackageInit: 3, PackageProcessing: 0, QueuedForCluster: 8, SchemaDeployed: 7, Solutions: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Completed: 526430003, Failed: 526430004, In_Process: 526430002, Requested: 526430000, Scheduled: 526430001, Uninstalled: 526430005 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PartnerApplication entity OptionSets */
const PartnerApplication = {
	/** Application Role */
	ApplicationRole: { Client: 0, Server: 1 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Disabled: 2, Enabled: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PDFSetting entity OptionSets */
const PDFSetting = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PersonalDocumentTemplate entity OptionSets */
const PersonalDocumentTemplate = {
	/** AssociatedEntityTypeCode */
	AssociatedEntityTypeCode: {},
	/** Type */
	DocumentType: { Microsoft_Excel: 1, Microsoft_Word: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PhoneCall entity OptionSets */
const PhoneCall = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 3, Made: 2, Open: 1, Received: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PickListMapping entity OptionSets */
const PickListMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1, Unmapped: 4 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** plannerbusinessscenario entity OptionSets */
const plannerbusinessscenario = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PlannerSyncAction entity OptionSets */
const PlannerSyncAction = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** plugin entity OptionSets */
const plugin = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Language */
	Language: { C: 100000001, PoweFx: 100000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** TriggerType */
	TriggerType: { Automated: 100000001, Instant: 100000000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PluginAssembly entity OptionSets */
const PluginAssembly = {
	/** Specifies mode of authentication with web sources */
	AuthType: { BasicAuth: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Isolation Mode */
	IsolationMode: { External: 3, None: 1, Sandbox: 2 },
	/** Source Type */
	SourceType: { AzureWebApp: 3, Database: 0, Disk: 1, File_Store: 4, Normal: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PluginPackage entity OptionSets */
const PluginPackage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PluginTraceLog entity OptionSets */
const PluginTraceLog = {
	/** Mode */
	Mode: { Asynchronous: 1, Synchronous: 0 },
	/** Operation Type */
	OperationType: { Plug_in: 1, Unknown: 0, Workflow_Activity: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PluginType entity OptionSets */
const PluginType = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PluginTypeStatistic entity OptionSets */
const PluginTypeStatistic = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Position entity OptionSets */
const Position = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Post entity OptionSets */
const Post = {
	/** RegardingObjectOwnerIdType */
	RegardingObjectOwnerIdType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Source */
	Source: { ActionHub_Post: 3, Auto_Post: 1, Manual_Post: 2 },
	/** Type */
	Type: { Check_in: 1, Idea: 2, News: 3, Private_Message: 4, Question: 5, Re_post: 6, Status: 7 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PostComment entity OptionSets */
const PostComment = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PostFollow entity OptionSets */
const PostFollow = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PostLike entity OptionSets */
const PostLike = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PostRegarding entity OptionSets */
const PostRegarding = {
	/** RegardingObjectOwnerIdType */
	RegardingObjectOwnerIdType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** RegardingObjectTypeCodeForSharing */
	RegardingObjectTypeCodeForSharing: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PostRole entity OptionSets */
const PostRole = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Post Role, Regarding, Mention, Topic, etc */
	Type: { Mentioning: 2, Mentioning_And_Regarding: 3, Regarding: 1, Topic: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerbidataset entity OptionSets */
const powerbidataset = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerbidatasetapdx entity OptionSets */
const powerbidatasetapdx = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerbimashupparameter entity OptionSets */
const powerbimashupparameter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Parameter Value Source */
	ParameterValueSource: { Environment_Domain: 200000002, Environment_Variable: 200000001, Literal: 200000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerbireport entity OptionSets */
const powerbireport = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerbireportapdx entity OptionSets */
const powerbireportapdx = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerfxrule entity OptionSets */
const powerfxrule = {
	/** Category */
	Category: { Business_Rule: 1, Workflow: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagecomponent entity OptionSets */
const powerpagecomponent = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Component Type */
	powerpagecomponenttype: { Ad_Placement: 26, Advanced_Form: 19, Advanced_Form_Metadata: 21, Advanced_Form_Step: 20, Basic_Form: 15, Basic_Form_Metadata: 16, Bot_Consumer: 27, Cloud_Flow: 33, Column_Permission: 29, Column_Permission_Profile: 28, Content_Snippet: 7, List: 17, Page_Template: 6, Poll_Placement: 24, Publishing_State: 1, Publishing_State_Transition_Rule: 31, Redirect: 30, Server_Logic: 35, Shortcut: 32, Site_Marker: 13, Site_Setting: 9, Table_Permission: 18, UX_Component: 34, Web_File: 3, Web_Link: 5, Web_Link_Set: 4, Web_Page: 2, Web_Page_Access_Control_Rule: 10, Web_Role: 11, Web_Template: 8, Website_Access: 12 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagecomponent_mspp_webrole_account entity OptionSets */
const powerpagecomponent_mspp_webrole_account = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagecomponent_mspp_webrole_contact entity OptionSets */
const powerpagecomponent_mspp_webrole_contact = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagecomponent_powerpagecomponent entity OptionSets */
const powerpagecomponent_powerpagecomponent = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagecomponent_webrole_systemuser entity OptionSets */
const powerpagecomponent_webrole_systemuser = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PowerPagesDDOSAlert entity OptionSets */
const PowerPagesDDOSAlert = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagesite entity OptionSets */
const powerpagesite = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Site Type */
	powerpagesitetype: { Code_Site: 2, Default: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagesite_dvfilesearch entity OptionSets */
const powerpagesite_dvfilesearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagesite_dvtablesearch entity OptionSets */
const powerpagesite_dvtablesearch = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagesitelanguage entity OptionSets */
const powerpagesitelanguage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagesitepublished entity OptionSets */
const powerpagesitepublished = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PowerPagesLog entity OptionSets */
const PowerPagesLog = {
	/** Type */
	Type: { CDNLog: 1, WAFLog: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PowerPagesManagedIdentity entity OptionSets */
const PowerPagesManagedIdentity = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PowerPagesScanReport entity OptionSets */
const PowerPagesScanReport = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { json_type_of_scan_report: 100000000, pdf_type_of_scan_report: 100000001, xml_type_of_scan_report: 100000002 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PowerPagesSiteAIFeedback entity OptionSets */
const PowerPagesSiteAIFeedback = {
	/** Feedback */
	Feedback: { Down: 195620001, Up: 195620000 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** powerpagessourcefile entity OptionSets */
const powerpagessourcefile = {
	/** Source File Type */
	codetype: { CSS: 3, Html: 1, Java_script: 2, JSON: 6, TSX: 4, Web_Template: 8, XML: 5, Yml: 7 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalAttributeAccessMap entity OptionSets */
const PrincipalAttributeAccessMap = {
	/** CreateAccess */
	CreateAccess: { Allowed: 4, Not_Allowed: 0 },
	/** ReadAccess */
	ReadAccess: { Allowed: 4, Not_Allowed: 0 },
	/** ReadUnMaskedAccess */
	ReadUnMaskedAccess: { All_Records: 3, Not_Allowed: 0, One_Record: 1 },
	/** UpdateAccess */
	UpdateAccess: { Allowed: 4, Not_Allowed: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalEntityMap entity OptionSets */
const PrincipalEntityMap = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalObjectAccess entity OptionSets */
const PrincipalObjectAccess = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** PrincipalTypeCode */
	PrincipalTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalObjectAccessReadSnapshot entity OptionSets */
const PrincipalObjectAccessReadSnapshot = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalObjectAttributeAccess entity OptionSets */
const PrincipalObjectAttributeAccess = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** PrincipalIdType */
	PrincipalIdType: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrincipalSyncAttributeMap entity OptionSets */
const PrincipalSyncAttributeMap = {
	/** Sync Direction */
	DefaultSyncDirection: { Bidirectional: 3, None: 0, ToCRM: 2, ToExchange: 1 },
	/** EntityTypeCode */
	EntityTypeCode: {},
	/** Sync Direction */
	SyncDirection: { Bidirectional: 3, None: 0, ToCRM: 2, ToExchange: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Privilege entity OptionSets */
const Privilege = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrivilegeCheckerLog entity OptionSets */
const PrivilegeCheckerLog = {
	/** Check Type */
	CheckType: { Access_check: 2, Privilege_Check: 1 },
	/** Privilege Depth */
	PrivilegeDepth: { Basic: 0, Deep: 2, Global: 3, Local: 1, NA: 5, Record_Filter: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrivilegeCheckerRun entity OptionSets */
const PrivilegeCheckerRun = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrivilegeObjectTypeCodes entity OptionSets */
const PrivilegeObjectTypeCodes = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PrivilegesRemovalSetting entity OptionSets */
const PrivilegesRemovalSetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** processorregistration entity OptionSets */
const processorregistration = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ProcessSession entity OptionSets */
const ProcessSession = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Complete: 1, Incomplete: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 5, Completed: 4, Failed: 6, In_Progress: 2, Not_Started: 1, Paused: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ProcessStage entity OptionSets */
const ProcessStage = {
	/** Operation Kind */
	OperationKind: { AddToTime: 473330011, Alert: 473330005, ApiConnection: 473330004, AzureMonitorAlert: 473330013, Button: 473330003, ConvertTimeZone: 473330008, CurrentTime: 473330007, EventGrid: 473330006, FormatNumber: 473330024, Geofence: 473330019, GetFutureTime: 473330009, GetPastTime: 473330010, Http: 473330000, IndexOf: 473330021, JsonToJson: 473330015, JsonToText: 473330016, ODataOpenApiConnection: 473330020, PowerApp: 473330001, PowerAppV2: 473330002, PowerPages: 473330026, SecurityCenterAlert: 473330014, Skills: 473330025, Substring: 473330022, SubtractFromTime: 473330012, TeamsWebhook: 473330027, VirtualAgent: 473330023, XmlToJson: 473330017, XmlToText: 473330018 },
	/** Operation Type */
	OperationType: { ApiApp: 473330001, ApiConnection: 473330006, ApiConnectionNotification: 473330050, ApiConnectionWebhook: 473330009, ApiManagement: 473330016, AppendToArrayVariable: 473330037, AppendToStringVariable: 473330038, As2Decode: 473330045, As2Encode: 473330046, Batch: 473330039, Changeset: 473330051, Compose: 473330013, DecrementVariable: 473330035, Expression: 473330042, FlatFileDecoding: 473330025, FlatFileEncoding: 473330018, Flow: 473330004, Foreach: 473330022, Function: 473330015, Http: 473330000, HttpWebhook: 473330012, If: 473330021, IncrementVariable: 473330034, InitializeVariable: 473330033, IntegrationAccountArtifactLookup: 473330027, JavascriptCode: 473330044, Join: 473330031, Liquid: 473330043, Manual: 473330008, OpenApiConnection: 473330007, OpenApiConnectionWebhook: 473330010, ParseJson: 473330029, Query: 473330014, Recurrence: 473330002, Request: 473330020, Response: 473330011, RosettaNetDecode: 473330048, RosettaNetEncode: 473330047, RosettaNetWaitForResponse: 473330049, Scope: 473330019, Select: 473330032, SendToBatch: 473330040, SetVariable: 473330036, SlidingWindow: 473330041, SwiftEncode: 473330052, Switch: 473330028, Table: 473330030, Terminate: 473330026, Until: 473330023, Wait: 473330005, Workflow: 473330003, XmlValidation: 473330017, Xslt: 473330024 },
	/** PrimaryEntityTypeCode */
	PrimaryEntityTypeCode: {},
	/** Stage Category */
	StageCategory: { Approval: 7, Close: 3, Develop: 1, Identify: 4, Propose: 2, Qualify: 0, Research: 5, Resolve: 6 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** processstageparameter entity OptionSets */
const processstageparameter = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ProcessTrigger entity OptionSets */
const ProcessTrigger = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Control Type */
	ControlType: { Attribute: 1, Form_Tab: 2 },
	/** PipelineStage */
	PipelineStage: { After_Main_Operation: 40, Before_Main_Operation: 20, Default_Value: 0 },
	/** PrimaryEntityTypeCode */
	PrimaryEntityTypeCode: {},
	/** Scope */
	Scope: { Entity: 2, Form: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ProvisionLanguageForUser entity OptionSets */
const ProvisionLanguageForUser = {
	/** OperationStatus */
	OperationStatus: { Completed: 1, Failed: 3, Queued: 0, Waiting_For_Language_Provision: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Publisher entity OptionSets */
const Publisher = {
	/** Address 1: Address Type */
	Address1_AddressTypeCode: { Default_Value: 1 },
	/** Address 1: Shipping Method */
	Address1_ShippingMethodCode: { Default_Value: 1 },
	/** Address 2: Address Type */
	Address2_AddressTypeCode: { Default_Value: 1 },
	/** Address 2: Shipping Method */
	Address2_ShippingMethodCode: { Default_Value: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** PublisherAddress entity OptionSets */
const PublisherAddress = {
	/** Address Type */
	AddressTypeCode: { Bill_To: 1, Other: 4, Primary: 3, Ship_To: 2 },
	/** Freight Terms */
	FreightTermsCode: { FOB: 1, No_Charge: 2 },
	/** ParentIdTypeCode */
	ParentIdTypeCode: {},
	/** Shipping Method */
	ShippingMethodCode: { Default: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** purviewlabelinfo entity OptionSets */
const purviewlabelinfo = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** purviewlabelsynccache entity OptionSets */
const purviewlabelsynccache = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** QuarterlyFiscalCalendar entity OptionSets */
const QuarterlyFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Queue entity OptionSets */
const Queue = {
	/** Primary Email Status */
	EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
	/** Incoming Email Delivery Method */
	IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
	/** Convert Incoming Email To Activities */
	IncomingEmailFilteringMethod: { All_email_messages: 0, Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2, Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3, Email_messages_in_response_to_Dynamics_365_email: 1, No_email_messages: 4 },
	/** Outgoing Email Delivery Method */
	OutgoingEmailDeliveryMethod: { None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
	/** Queue Type */
	QueueTypeCode: { Default_Value: 1 },
	/** Type */
	QueueViewType: { Private: 1, Public: 0 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** QueueItem entity OptionSets */
const QueueItem = {
	/** ObjectIdTypeCode */
	ObjectIdTypeCode: {},
	/** Type */
	ObjectTypeCode: { Activity: 4200, Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Knowledge_Article: 9953, Knowledge_Article_Template: 10269, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Social_Activity: 4216, Task: 4212, Teams_chat: 10253 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** WorkerIdType */
	WorkerIdType: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** QueueItemCount entity OptionSets */
const QueueItemCount = {
	/** QueueItemCount */
	QueueItemCount: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** QueueMemberCount entity OptionSets */
const QueueMemberCount = {
	/** QueueMemberCount */
	QueueMemberCount: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** QueueMembership entity OptionSets */
const QueueMembership = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** recentlyused entity OptionSets */
const recentlyused = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecommendedDocument entity OptionSets */
const RecommendedDocument = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** reconciliationentityinfo entity OptionSets */
const reconciliationentityinfo = {
	/** Status */
	statecode: { Completed: 2, InProgress: 1, Submitted: 0 },
	/** Status Reason */
	statuscode: { CompletedNoMatchingRecords: 31, Failed: 32, InProgress: 20, PartialRecordsIdentified: 33, Submitted: 10, Succeeded: 30 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** reconciliationentitystepinfo entity OptionSets */
const reconciliationentitystepinfo = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** reconciliationinfo entity OptionSets */
const reconciliationinfo = {
	/** Status */
	statecode: { Completed: 2, InProgress: 1, Submitted: 0 },
	/** Status Reason */
	statuscode: { Failed: 32, InProgress: 20, Submitted: 10, Succeeded: 30 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecordCountSnapshot entity OptionSets */
const RecordCountSnapshot = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecordFilter entity OptionSets */
const RecordFilter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecurrenceRule entity OptionSets */
const RecurrenceRule = {
	/** Instance */
	Instance: { First: 1, Fourth: 4, Last: 5, Second: 2, Third: 3 },
	/** Month Of Year */
	MonthOfYear: { April: 4, August: 8, December: 12, February: 2, Invalid_Month_Of_Year: 0, January: 1, July: 7, June: 6, March: 3, May: 5, November: 11, October: 10, September: 9 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Pattern End Type */
	PatternEndType: { No_End_Date: 1, Occurrences: 2, Pattern_End_Date: 3 },
	/** Recurrence Pattern */
	RecurrencePatternType: { Daily: 0, Monthly: 2, Weekly: 1, Yearly: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecurringAppointmentMaster entity OptionSets */
const RecurringAppointmentMaster = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Expansion State Code */
	ExpansionStateCode: { Full: 2, Partial: 1, Unexpanded: 0 },
	/** Instance */
	Instance: { First: 1, Fourth: 4, Last: 5, Second: 2, Third: 3 },
	/** Appointment Type */
	InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
	/** Month Of Year */
	MonthOfYear: { April: 4, August: 8, December: 12, February: 2, Invalid_Month_Of_Year: 0, January: 1, July: 7, June: 6, March: 3, May: 5, November: 11, October: 10, September: 9 },
	/** Online Meeting Type */
	OnlineMeetingType: { Teams_Meeting: 1 },
	/** Pattern End Type */
	PatternEndType: { No_End_Date: 1, Occurrences: 2, Pattern_End_Date: 3 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** Recurrence Frequency */
	RecurrencePatternType: { Daily: 0, Monthly: 2, Weekly: 1, Yearly: 3 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
	/** Status Reason */
	StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RecycleBinConfig entity OptionSets */
const RecycleBinConfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Relationship entity OptionSets */
const Relationship = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RelationshipAttribute entity OptionSets */
const RelationshipAttribute = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RelationshipRole entity OptionSets */
const RelationshipRole = {
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RelationshipRoleMap entity OptionSets */
const RelationshipRoleMap = {
	/** AssociateObjectTypeCode */
	AssociateObjectTypeCode: {},
	/** PrimaryObjectTypeCode */
	PrimaryObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReplicationBacklog entity OptionSets */
const ReplicationBacklog = {
	/** Replication Backlog Type */
	ReplicationBacklogType: { Create: 0, Delete: 2, Update: 1 },
	/** TargetObjectTypeCode */
	TargetObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Report entity OptionSets */
const Report = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ManagedType */
	ManagedType: { Customer: 1, Dataverse: 0 },
	/** Report Type */
	ReportTypeCode: { Excel_Embedded_Report: 6, Excel_Embedded_Report_Template: 7, Linked_Report: 3, Other_Report: 2, Power_BI_Analytic_Report: 5, Power_BI_Paginated_Report: 4, Reporting_Services_Report: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReportCategory entity OptionSets */
const ReportCategory = {
	/** Category */
	CategoryCode: { Administrative_Reports: 4, Marketing_Reports: 3, Sales_Reports: 1, Service_Reports: 2 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReportEntity entity OptionSets */
const ReportEntity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReportLink entity OptionSets */
const ReportLink = {
	/** Link Type */
	LinkTypeCode: { Drill_through: 1, Drill_through_and_sub_report: 3, Sub_report: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReportParameter entity OptionSets */
const ReportParameter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ReportVisibility entity OptionSets */
const ReportVisibility = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Visibility */
	VisibilityCode: { Forms_for_related_record_types: 2, Lists_for_related_record_types: 3, Reports_area: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retaineddataexcel entity OptionSets */
const retaineddataexcel = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentioncleanupinfo entity OptionSets */
const retentioncleanupinfo = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentioncleanupoperation entity OptionSets */
const retentioncleanupoperation = {
	/** OperationName */
	OperationName: { Purge: 10, Reconcile: 20 },
	/** Status */
	statecode: { Completed: 2, InProgress: 1, Waiting: 0 },
	/** Status Reason */
	statuscode: { Failed: 31, InProgress: 20, PartialRecordsIdentified: 33, Scheduled: 10, Succeeded: 30 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentionconfig entity OptionSets */
const retentionconfig = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** State */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active_1: 1, Active_10: 10, Cancelled: 30, Inactive: 2, Unscheduled: 20 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentionfailuredetail entity OptionSets */
const retentionfailuredetail = {
	/** Operation */
	Operation: { Copy: 20, Delete: 30, Mark: 10 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentionoperation entity OptionSets */
const retentionoperation = {
	/** Status */
	statecode: { Completed: 3, Inprogress: 2, Scheduled: 0 },
	/** Status Reason */
	statuscode: { Cancelled: 32, Copying: 21, Deleting: 22, Failed: 31, Marking: 20, Succeeded: 30, Waiting: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentionoperationdetail entity OptionSets */
const retentionoperationdetail = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** retentionsuccessdetail entity OptionSets */
const retentionsuccessdetail = {
	/** msft_DataState */
	msft_DataState: { Default: 0, Retain: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** revokeinheritedaccessrecordstracker entity OptionSets */
const revokeinheritedaccessrecordstracker = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonClientMetadata entity OptionSets */
const RibbonClientMetadata = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonCommand entity OptionSets */
const RibbonCommand = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonContextGroup entity OptionSets */
const RibbonContextGroup = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonCustomization entity OptionSets */
const RibbonCustomization = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonDiff entity OptionSets */
const RibbonDiff = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** DiffType */
	DiffType: { Layout_Template: 2, Localized_Label: 3, Standard: 0, Tab: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonMetadataToProcess entity OptionSets */
const RibbonMetadataToProcess = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonRule entity OptionSets */
const RibbonRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** RuleType */
	RuleType: { Enable: 1, Tab_Selection: 3, Trim: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RibbonTabToCommandMap entity OptionSets */
const RibbonTabToCommandMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Role entity OptionSets */
const Role = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Is Auto Assigned */
	IsAutoAssigned: { No: 0, Yes: 1 },
	/** Is Inherited */
	IsInherited: { Direct_User_Basic_access_level_and_Team_privileges: 1, Team_privileges_only: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RoleEditorLayout entity OptionSets */
const RoleEditorLayout = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ItemType */
	ItemType: { Entity: 4, Miscellaneous_Section: 3, Privilege: 5, Root: 1, Tab: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RolePrivileges entity OptionSets */
const RolePrivileges = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RoleTemplate entity OptionSets */
const RoleTemplate = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RoleTemplatePrivileges entity OptionSets */
const RoleTemplatePrivileges = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RollupField entity OptionSets */
const RollupField = {
	/** EntityForDateAttribute */
	EntityForDateAttribute: {},
	/** SourceEntity */
	SourceEntity: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RollupJob entity OptionSets */
const RollupJob = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** StateCode */
	StateCode: { Completed: 3, Locked: 2, Ready: 0, Suspended: 1 },
	/** StatusCode */
	StatusCode: { Canceled: 32, Canceling: 22, Failed: 31, In_Progress: 20, Pausing: 21, Succeeded: 30, Waiting: 10, Waiting_For_Resources: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RollupProperties entity OptionSets */
const RollupProperties = {
	/** Rollup Aggregation Type */
	AggregateType: { Average: 2, Count: 0, Max: 4, Min: 3, Sum: 1 },
	/** Initial Value Calculation Status */
	InitialValueCalculationStatus: { Completed: 3, Failed: 4, In_Progress: 1, Paused: 2, Pending: 0 },
	/** Status */
	StateCode: { Invalid: 1, Valid: 0 },
	/** Status Reason */
	StatusCode: { Invalid: 2, Valid: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RoutingRule entity OptionSets */
const RoutingRule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	StateCode: { Active: 1, Draft: 0 },
	/** Status Reason */
	StatusCode: { Active: 2, Draft: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RoutingRuleItem entity OptionSets */
const RoutingRuleItem = {
	/** AssignObjectIdType */
	AssignObjectIdType: {},
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** RuntimeDependency entity OptionSets */
const RuntimeDependency = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sa_SuggestedAction entity OptionSets */
const sa_SuggestedAction = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sa_SuggestedActionCriteria entity OptionSets */
const sa_SuggestedActionCriteria = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SavedOrgInsightsConfiguration entity OptionSets */
const SavedOrgInsightsConfiguration = {
	/** Lookback */
	Lookback: { _2H: 1, _30D: 4, _48H: 2, _7D: 3 },
	/** Metric Type */
	MetricType: { Category: 2, Time_Series: 1 },
	/** Plot Option */
	PlotOption: { Area: 3, Bar: 5, Bubble: 11, Column: 2, Donut: 6, DoubleDonut: 9, Infocard: 7, Line: 1, LinearGauge: 10, List: 8, Pie: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SavedQuery entity OptionSets */
const SavedQuery = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** ReturnedTypeCode */
	ReturnedTypeCode: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SavedQueryVisualization entity OptionSets */
const SavedQueryVisualization = {
	/** Chart Type */
	ChartType: { ASPNET_Charts: 0, Power_BI: 1 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PrimaryEntityTypeCode */
	PrimaryEntityTypeCode: {},
	/** Form Type */
	Type: { for_data_centric_as_well_as_interaction_centric: 0, just_for_interaction_centric: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** savingrule entity OptionSets */
const savingrule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessage entity OptionSets */
const SdkMessage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageFilter entity OptionSets */
const SdkMessageFilter = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PrimaryObjectTypeCode */
	PrimaryObjectTypeCode: {},
	/** SecondaryObjectTypeCode */
	SecondaryObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessagePair entity OptionSets */
const SdkMessagePair = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageProcessingStep entity OptionSets */
const SdkMessageProcessingStep = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** EventHandlerTypeCode */
	EventHandlerTypeCode: {},
	/** Invocation Source */
	InvocationSource: { Child: 1, Parent: 0 },
	/** Execution Mode */
	Mode: { Asynchronous: 1, Synchronous: 0 },
	/** Execution Stage */
	Stage: { Final_Post_operation_For_internal_use_only: 55, Initial_Pre_operation_For_internal_use_only: 5, Internal_Post_operation_After_External_Plugins_For_internal_use_only: 45, Internal_Post_operation_Before_External_Plugins_For_internal_use_only: 35, Internal_Pre_operation_After_External_Plugins_For_internal_use_only: 25, Internal_Pre_operation_Before_External_Plugins_For_internal_use_only: 15, Main_Operation_For_internal_use_only: 30, Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only: 90, Post_operation: 40, Post_operation_Deprecated: 50, Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only: 80, Pre_operation: 20, Pre_validation: 10 },
	/** Status */
	StateCode: { Disabled: 1, Enabled: 0 },
	/** Status Reason */
	StatusCode: { Disabled: 2, Enabled: 1 },
	/** Deployment */
	SupportedDeployment: { Both: 2, Microsoft_Dynamics_365_Client_for_Outlook_Only: 1, Server_Only: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageProcessingStepImage entity OptionSets */
const SdkMessageProcessingStepImage = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Image Type */
	ImageType: { Both: 2, PostImage: 1, PreImage: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageProcessingStepSecureConfig entity OptionSets */
const SdkMessageProcessingStepSecureConfig = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageRequest entity OptionSets */
const SdkMessageRequest = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PrimaryObjectTypeCode */
	PrimaryObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageRequestField entity OptionSets */
const SdkMessageRequestField = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageResponse entity OptionSets */
const SdkMessageResponse = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SdkMessageResponseField entity OptionSets */
const SdkMessageResponseField = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** searchattributesettings entity OptionSets */
const searchattributesettings = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** searchcustomanalyzer entity OptionSets */
const searchcustomanalyzer = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** searchrelationshipsettings entity OptionSets */
const searchrelationshipsettings = {
	/** SearchEntity */
	SearchEntity: { Entity1: 200004747, Entity2: 200004748, ReferencedEntity: 200004749 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SearchResultsCache entity OptionSets */
const SearchResultsCache = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** searchtelemetry entity OptionSets */
const searchtelemetry = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SemiAnnualFiscalCalendar entity OptionSets */
const SemiAnnualFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sensitivitylabel entity OptionSets */
const sensitivitylabel = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sensitivitylabelattributemapping entity OptionSets */
const sensitivitylabelattributemapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ServiceEndpoint entity OptionSets */
const ServiceEndpoint = {
	/** Specifies mode of authentication with SB */
	AuthType: { Access_Key: 8, ACS: 1, Connection_String: 7, Http_Header: 5, Http_Query_String: 6, Managed_Identity: 9, Not_Specified: 0, SAS_Key: 2, SAS_Token: 3, Webhook_Key: 4 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Connection Mode */
	ConnectionMode: { Federated: 2, Normal: 1 },
	/** Contract */
	Contract: { Container_Storage: 11, Event_Grid: 9, Event_Hub: 7, Managed_Data_Lake: 10, OneWay: 1, Queue: 2, Queue_Persistent: 6, Rest: 3, Topic: 5, TwoWay: 4, Webhook: 8 },
	/** Specifies the character encoding to be used for messages sent to a service endpoint */
	MessageCharset: { Default: 0, UTF8: 1, Windows1252: 2 },
	/** Content type of the message */
	MessageFormat: { Binary_XML: 1, Json: 2, Text_XML: 3 },
	/** Format of Service Bus Namespace */
	NamespaceFormat: { Namespace_Address: 2, Namespace_Name: 1 },
	/** Specifies schema type for event grid events */
	SchemaType: { Cloud_Events: 2, Event_Grid: 1 },
	/** User Claim */
	UserClaim: { None: 1, UserId: 2, UserInfo: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ServicePlan entity OptionSets */
const ServicePlan = {
	/** AccessMode */
	AccessMode: { Custom_applications: 0, First_party_and_Custom_applications: 2, First_party_applications: 1, No_restrictions_For_legacy_license_only_overrides_012: 3, Restricted_to_ISV_applications_and_will_Override_all_other_access_modes_including_access_mode_3: 4 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ServicePlanAppModules entity OptionSets */
const ServicePlanAppModules = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ServicePlanCustomControl entity OptionSets */
const ServicePlanCustomControl = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ServicePlanMapping entity OptionSets */
const ServicePlanMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SettingDefinition entity OptionSets */
const SettingDefinition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Data Type */
	DataType: { Boolean: 2, Number: 0, String: 1 },
	/** Overridable Level */
	OverridableLevel: { App_And_Organization: 0, App_Only: 2, Organization_Only: 1 },
	/** Release Level */
	ReleaseLevel: { Early_Access: 1, GA: 0, Preview: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharedLinkSetting entity OptionSets */
const SharedLinkSetting = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sharedobject entity OptionSets */
const sharedobject = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharedObjectsForRead entity OptionSets */
const SharedObjectsForRead = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sharedworkspace entity OptionSets */
const sharedworkspace = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sharedworkspaceaccesstoken2 entity OptionSets */
const sharedworkspaceaccesstoken2 = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sharedworkspacepool entity OptionSets */
const sharedworkspacepool = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharePointData entity OptionSets */
const SharePointData = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharePointDocument entity OptionSets */
const SharePointDocument = {
	/** Document Location Type */
	DocumentLocationType: { Dedicated_for_OneNote_Integration: 1, General: 0 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Source */
	ServiceType: { MS_Teams: 3, OneDrive: 1, Shared_with_me: 2, SharePoint: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharePointDocumentLocation entity OptionSets */
const SharePointDocumentLocation = {
	/** Location Type  */
	LocationType: { Dedicated_for_OneNote_Integration: 1, General: 0 },
	/** ParentSiteOrLocationTypeCode */
	ParentSiteOrLocationTypeCode: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Service Type */
	ServiceType: { MS_Teams: 3, OneDrive: 1, Shared_with_me: 2, SharePoint: 0 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharePointManagedIdentity entity OptionSets */
const SharePointManagedIdentity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SharePointSite entity OptionSets */
const SharePointSite = {
	/** Entity for SharePoint Folder Structure */
	FolderStructureEntity: { Account: 1, Contact: 2, None: 0 },
	/** ParentSiteObjectTypeCode */
	ParentSiteObjectTypeCode: {},
	/** Service Type */
	ServiceType: { MS_Teams: 3, OneDrive: 1, Shared_with_me: 2, SharePoint: 0 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Last Validation Status */
	ValidationStatus: { Could_not_validate: 5, In_Progress: 2, Invalid: 3, Not_Validated: 1, Valid: 4 },
	/** Additional Information */
	ValidationStatusErrorCode: { Authentication_failure: 6, Invalid_certificates: 7, The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings: 5, The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different: 4, This_records_URL_has_not_been_validated: 1, This_records_URL_is_not_valid: 3, This_records_URL_is_valid: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** sideloadedaiplugin entity OptionSets */
const sideloadedaiplugin = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** signal entity OptionSets */
const signal = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** signalregistration entity OptionSets */
const signalregistration = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SimilarityRule entity OptionSets */
const SimilarityRule = {
	/** Base Record Type */
	BaseEntityTypeCode: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Matching Record Type */
	MatchingEntityTypeCode: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** Status */
	statecode: { Active: 1, Draft: 0 },
	/** Status Reason */
	statuscode: { Active: 1, Draft: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SiteMap entity OptionSets */
const SiteMap = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SLA entity OptionSets */
const SLA = {
	/** Applicable From */
	ApplicableFromPickList: { No: 1, Yes: 2 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Object Type Code */
	ObjectTypeCode: { Account: 1, AccountBPF: 10919, ACIViewMapper: 8040, Action_Approval_Model: 10133, Action_Card: 9962, Action_Card_Type: 9983, Action_Card_User_Settings: 9973, ActionCardUserState: 9968, Activity: 4200, Activity_File_Attachment: 10252, Activity_Party: 135, Ad_Placement: 10414, Address: 1071, Advanced_Similarity_Rule: 9949, Agent_Conversation_Message: 10349, Agent_Conversation_Message_File: 10350, Agent_Feed_Item: 10920, Agent_Hub_Goal: 10921, Agent_Hub_Insight: 10922, Agent_Hub_Metric: 10923, Agent_Memory: 10925, Agent_Task: 10926, Agentic_Scenario: 10924, AI_Builder_Dataset: 10191, AI_Builder_Dataset_File: 10192, AI_Builder_Dataset_Record: 10193, AI_Builder_Datasets_Container: 10194, AI_Builder_Feedback_Loop: 10184, AI_Builder_File: 10195, AI_Builder_File_Attached_Data: 10196, AI_Configuration: 402, AI_Configuration_Search: 10178, AI_Document_Template: 10180, AI_Evaluation_Configuration: 10197, AI_Evaluation_Metric: 10198, AI_Evaluation_Run: 10199, AI_Event: 10181, AI_Form_Processing_Document: 10185, AI_Insight_Card: 10337, AI_Model: 401, AI_Model_Catalog: 10182, AI_Object_Detection_Bounding_Box: 10188, AI_Object_Detection_Image: 10186, AI_Object_Detection_Image_Mapping: 10189, AI_Object_Detection_Label: 10187, AI_Optimization: 10200, AI_Optimization_Private_Data: 10201, AI_Plugin_Conversation_Starter: 10163, AI_Plugin_Conversation_Starter_Mapping: 10164, AI_Plugin_Governance: 10165, AI_Plugin_Governance_Extended: 10166, AI_Skill_Config: 10338, AI_Template: 400, AI_Test_Case: 10202, AI_Test_Case_Document: 10203, AI_Test_Case_Input: 10204, AI_Test_Run: 10205, AI_Test_Run_Batch: 10206, AICopilot: 10161, AIPlugin: 10170, AIPluginAuth: 10162, AIPluginExternalSchema: 10171, AIPluginExternalSchemaProperty: 10172, AIPluginInstance: 10173, AIPluginOperation: 10174, AIPluginOperationParameter: 10175, AIPluginOperationResponseTemplate: 10167, AIPluginTitle: 10168, AIPluginUserSetting: 10176, Allowed_MCP_Client: 10242, Analysis_Component: 10371, Analysis_Job: 10372, Analysis_Override: 10373, Analysis_Result: 10374, Analysis_Result_Detail: 10375, Announcement: 132, Annual_Fiscal_Calendar: 2000, App_Action: 10326, App_Action_Migration: 10327, App_Action_Rule: 10328, App_Config_Master: 9011, App_Configuration: 9012, App_Configuration_Instance: 9013, App_Insights_Metadata: 10227, App_Module_Component: 9007, App_Module_Roles: 9009, AppEntitySearchView: 10385, Application: 1204, Application_File: 4707, Application_Ribbons: 1120, ApplicationUser: 10099, AppModule_Metadata: 8700, AppModule_Metadata_Async_Operation: 8702, AppModule_Metadata_Dependency: 8701, Appointment: 4201, Approval: 10134, Approval_Process: 10128, Approval_Request: 10135, Approval_Response: 10136, Approval_Stage_Approval: 10129, Approval_Stage_Condition: 10130, Approval_Stage_Intelligent: 10131, Approval_Stage_Order: 10132, Approval_Step: 10137, ArchiveCleanupInfo: 10299, ArchiveCleanupOperation: 10300, Article: 127, Article_Comment: 1082, Article_Template: 1016, Attachment_1001: 1001, Attachment_1002: 1002, Attribute: 9808, Attribute_Cluster_Config: 10276, Attribute_Map: 4601, Auditing: 4567, Authorization_Server: 1094, Await_All_Action_Approval_Model: 10138, Await_All_Approval_Model: 10139, Azure_Service_Connection: 9936, Background_Operation: 10288, Basic_Approval_Model_Data: 10140, Basic_Form: 10418, Basic_Form_Metadata: 10419, BotContent: 10209, Bulk_Delete_Failure: 4425, Bulk_Delete_Operation: 4424, BulkArchiveConfig: 10301, BulkArchiveFailureDetail: 10302, BulkArchiveOperation: 10303, BulkArchiveOperationDetail: 10304, Business_Data_Localized_Label: 4232, Business_Process: 10104, Business_Process_Flow_Instance: 4725, Business_Process_Linked_Artifact: 10589, Business_Unit: 10, Business_Unit_Map: 6, Calendar: 4003, Calendar_Rule: 4004, Callback_Registration: 301, Canvas_App: 300, CanvasApp_Extended_Metadata: 10095, Card: 10331, Card_State_Item: 10332, CascadeGrantRevokeAccessRecordsTracker: 10084, CascadeGrantRevokeAccessVersionTracker: 10085, Catalog: 10033, Catalog_Assignment: 10034, Catalog_Submission_Files: 10460, Category: 9959, CertificateCredential: 10317, Channel_Access_Profile: 3005, Channel_Access_Profile_Rule: 9400, Channel_Access_Profile_Rule_Item: 9401, Channel_Property: 1236, Channel_Property_Group: 1234, Client_update: 36, Column_Mapping: 4417, Column_Permission: 10415, Column_Permission_Profile: 10416, Comment_10224: 10224, Comment_8005: 8005, Component_Changeset_Payload: 10063, Component_Changeset_Version: 10064, Component_Layer: 10006, Component_Layer_Data_Source: 10007, Component_Version: 10065, Component_Version_Data_Source: 10066, Component_Version_Internal: 10067, Connection: 3234, Connection_Instance: 373, Connection_Reference: 10150, Connection_Role: 3231, Connection_Role_Object_Type_Code: 3233, Connector: 372, Contact: 2, Content_Snippet: 10417, ConversationTranscript: 10210, Copilot: 10211, Copilot_component: 10212, Copilot_component_collection: 10213, Copilot_Interactions: 10250, CopilotExampleQuestion: 10395, CopilotGlossaryTerm: 10396, CopilotSynonyms: 10397, Credential: 10105, Currency: 9105, Custom_API: 10036, Custom_API_Request_Parameter: 10037, Custom_API_Response_Property: 10038, Custom_Control: 9753, Custom_Control_Default_Config: 9755, Custom_Control_Extended_Setting: 10352, Custom_Control_Resource: 9754, Customer_Relationship: 4502, Data_Import: 4410, Data_Lake_Folder: 10050, Data_Lake_Folder_Permission: 10051, Data_Lake_Workspace: 10052, Data_Lake_Workspace_Permission: 10053, Data_Map: 4411, Data_Movement_Service_Request: 10232, Data_Movement_Service_Request_Status: 10233, Data_Performance_Dashboard: 4450, Data_Processing_configuration: 10054, Data_Processing_Event: 10179, Data_Workspace: 10341, Dataflow: 418, Dataflow_Connection_Reference: 10228, Dataflow_DatalakeFolder: 10231, Dataflow_Template: 10230, DataflowRefreshHistory: 10079, DelegatedAuthorization: 10082, Deleted_Record_Reference: 10324, DelveActionHub: 9961, Dependency: 7105, Dependency_Feature: 7108, Dependency_Node: 7106, Desktop_Flow_Binary: 10124, Desktop_Flow_Module: 10106, Display_String: 4102, Display_String_Map: 4101, DMS_Sync_Request: 10234, DMS_Sync_Status: 10235, Document_Location: 9508, Document_Suggestions: 1189, Document_Template: 9940, Duplicate_Detection_Rule: 4414, Duplicate_Record: 4415, Duplicate_Rule_Condition: 4416, DVFileSearch: 10155, DVFileSearchAttribute: 10156, DVFileSearchEntity: 10157, DVTableSearch: 10158, DVTableSearchAttribute: 10159, DVTableSearchEntity: 10160, ElasticFileAttachment: 7755, Email: 4202, Email_Address_Configuration: 10285, Email_Hash: 4023, Email_Search: 4299, Email_Server_Profile: 9605, Email_Signature: 9997, Email_Template: 2010, EnableArchivalRequest: 10305, Entity: 9800, Entity_Analytics_Config: 430, Entity_Cluster_Configuration: 10277, Entity_Image_Configuration: 432, Entity_Index: 9815, Entity_Key: 9810, Entity_link_chat_configuration: 10335, Entity_Map: 4600, Entity_Relationship: 9811, EntityRecordFilter: 73, EntityRefreshHistory: 10080, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Event_Expander_Breadcrumb: 5006, Exchange_Sync_Id_Mapping: 4120, Expander_Event: 4711, Expired_Process: 955, Exported_Excel: 10055, ExportSolutionUpload: 10012, External_Identity: 10405, External_Party: 3008, External_Party_Item: 9987, Fabric_AISkill: 10226, Favorite_knowledge_article: 10265, Fax: 4204, FeatureControlSetting: 10013, FederatedKnowledgeCitation: 10243, FederatedKnowledgeConfiguration: 10244, FederatedKnowledgeEntityConfiguration: 10245, FederatedKnowledgeMetadataRefresh: 10246, Feedback: 9958, Field_Permission: 1201, Field_Security_Profile: 1200, Field_Sharing: 44, File_Upload: 10384, FileAttachment: 55, Filter_Template: 30, Fixed_Monthly_Fiscal_Calendar: 2004, Flow_Aggregation: 10125, Flow_Approval: 10141, Flow_Capacity_Assignment: 10107, Flow_Credential_Application: 10108, Flow_Event: 10109, Flow_Log: 10126, Flow_Machine: 10110, Flow_Machine_Group: 10111, Flow_Machine_Image: 10112, Flow_Machine_Image_Version: 10113, Flow_Machine_Network: 10114, Flow_Run: 10127, Flow_Session: 4720, Flow_Session_Binary: 10115, Follow: 8003, Form_Mapping: 10249, Form_Step: 10434, Function: 10280, FxExpression: 10279, Git_Branch: 10068, Git_Configuration_Retrieval_Data_Source: 10069, Git_Organization: 10070, Git_Project: 10071, Git_Repository: 10072, Git_Solution: 10073, Global_Search_Configuration: 54, Goal: 9600, Goal_Metric: 9603, Governance_Configuration: 10225, Healthcare_Feedback: 10586, Help_Page: 10207, Hierarchy_Rule: 8840, Hierarchy_Security_Configuration: 9919, HolidayWrapper: 9996, Image_Attribute_Configuration: 431, Image_Descriptor: 1007, Import_Data: 4413, Import_Entity_Mapping: 4428, Import_Job: 9107, Import_Log: 4423, Import_Source_File: 4412, Index_Attribute: 9816, Indexed_Article: 126, indexedtrait: 10462, Insights_Store_Data_Source: 10321, Insights_Store_Virtual_Entity: 10322, Integrated_search_provider: 10256, Integration_Status: 3000, IntelligentMemory: 10247, Inter_Process_Lock: 4011, Interaction_for_Email: 9986, Interim_Update_Knowledge_Article: 10705, Internal_Address: 1003, Internal_Catalog_Assignment: 10035, Invalid_Dependency: 7107, Invitation: 10406, Invite_Redemption: 10407, ISV_Config: 4705, Key_Vault_Reference: 10031, Knowledge_Article: 9953, Knowledge_Article_Attachment: 10267, Knowledge_Article_Category: 9960, Knowledge_Article_Custom_Entity: 10706, Knowledge_Article_Image: 10261, Knowledge_article_language_setting: 10266, Knowledge_Article_Template: 10269, Knowledge_Article_Views: 9955, Knowledge_Asset_Configuration: 10236, Knowledge_Base_Record: 9930, Knowledge_Configuration: 10262, Knowledge_FAQ: 10248, Knowledge_Federated_Article: 10258, Knowledge_Federated_Article_Incident: 10259, Knowledge_Harvest_Job_Record: 10275, Knowledge_Interaction_Insight: 10263, Knowledge_Management_Setting: 10257, Knowledge_personalization: 10268, Knowledge_search_filter: 10271, Knowledge_Search_Insight: 10264, Knowledge_Search_Model: 9947, Knowledge_search_personal_filter_config: 10270, Knowledge_Source_Consumer: 10151, Knowledge_Source_Profile: 10152, Language: 9957, Language_Provisioning_State: 9875, Letter: 4207, License: 2027, Like: 8006, List: 10420, List_Value_Mapping: 4418, LocalConfigStore: 9201, Lookup_Mapping: 4419, Mail_Merge_Template: 9106, Mailbox: 9606, Mailbox_Auto_Tracking_Folder: 9608, Mailbox_Statistics: 9607, Mailbox_Tracking_Category: 9609, MainFewShot: 10386, MakerFewShot: 10387, Managed_Identity: 10032, Managed_Property: 9812, MCPServer: 10708, MCPTool: 10709, Metadata_Difference: 4231, MetadataForArchival: 10306, Microsoft_Entra_ID: 10018, Mobile_App: 10320, Mobile_Offline_Profile: 9866, Mobile_Offline_Profile_Item: 9867, Mobile_Offline_Profile_Item_Association: 9868, MobileOfflineProfileExtension: 10290, MobileOfflineProfileItemFilter: 10291, Model_driven_App: 9006, Model_Driven_App_Component_Node: 10090, Model_Driven_App_Component_Nodes_Edge: 10089, Model_Driven_App_Element: 10088, Model_Driven_App_Setting: 10091, Model_Driven_App_User_Setting: 10092, Module_Run_Detail: 10237, Monthly_Fiscal_Calendar: 2003, Ms_Graph_Resource_To_Subscription: 10286, msdyn_historicalcaseharvestbatch: 10273, msdyn_historicalcaseharvestrun: 10274, Multi_Select_Option_Value: 9912, MultiEntitySearch: 9910, Multistep_Form: 10432, Multistep_Form_Metadata: 10433, Multistep_Form_Session: 10410, Navigation_Setting: 9900, New_Process: 950, NL2SQ_Registration_Information: 5004, NonRelational_Data_Source: 10041, Note: 5, Notification_10318: 10318, Notification_4110: 4110, Object_Detection_Product: 10587, OData_v4_Data_Source: 10102, Office_Document: 4490, Office_Graph_Document: 9950, Offline_Command_Definition: 9870, Online_Shopper_Intention: 10588, Option_Set_Value: 9817, OptionSet: 9809, Organization: 1019, Organization_Insights_Metric: 9699, Organization_Insights_Notification: 9690, Organization_Setting: 10093, Organization_Statistic: 4708, Organization_UI: 1021, OrganizationDataSyncFnoState: 10297, OrganizationDataSyncState: 10298, OrganizationDataSyncSubscription: 10294, OrganizationDataSyncSubscriptionEntity: 10295, OrganizationDataSyncSubscriptionFnoTable: 10296, Owner: 7, Owner_Mapping: 4420, Package: 10008, Package_History: 10009, Package_Submission_Store: 10461, Page_Template: 10422, Partner_Application: 1095, PDF_Setting: 10251, Personal_Document_Template: 9941, Phone_Call: 4210, Plan: 10342, Plan_Artifact: 10343, Plan_Attachment: 10344, Planner_Business_Scenario: 10283, Planner_Sync_Action: 10284, Plug_in: 10281, Plug_in_Assembly: 4605, Plug_in_Trace_Log: 4619, Plug_in_Type: 4602, Plug_in_Type_Statistic: 4603, Plugin_Package: 10039, PM_Analysis_History: 10357, PM_Business_Rule_Automation_Config: 10358, PM_Calendar: 10359, PM_Calendar_Version: 10360, PM_Inferred_Task: 10361, PM_Process_Extended_Metadata_Version: 10362, PM_Process_Template: 10363, PM_Process_User_Settings: 10364, PM_Process_Version: 10365, PM_Recording: 10366, PM_Simulation: 10367, PM_Tab: 10368, PM_Template: 10369, PM_View: 10370, Poll_Placement: 10423, Portal_Comment: 10408, Position: 50, Post: 8000, Post_Regarding: 8002, Post_Role: 8001, Power_BI_Dataset: 10379, Power_BI_Mashup_Parameter: 10381, Power_BI_Report: 10382, Power_Pages_Core_Entity_DS: 10424, Power_Pages_Log: 10452, Power_Pages_Scan_Report: 10450, Power_Pages_Site_AI_Feedback: 10454, Power_Pages_Site_Published: 10401, powerbidatasetapdx: 10380, powerbireportapdx: 10383, PowerfxRule: 10282, PowerPagesDDOSAlert: 10451, PowerPagesManagedIdentity: 10453, Principal_Sync_Attribute_Map: 1404, Privilege: 1023, Privilege_Checker_Log: 76, Privilege_Checker_Run: 75, Privilege_Object_Type_Code: 31, Privileges_Removal_Setting: 103, Process: 4703, Process_Configuration: 9650, Process_Dependency: 4704, Process_Log: 4706, Process_Session: 4710, Process_Stage: 4724, Process_Trigger: 4712, processor_registration: 10463, ProcessStageParameter: 10116, ProvisionLanguageForUser: 10042, Publisher: 7101, Publisher_Address: 7102, Publishing_State: 10425, Publishing_State_Transition_Rule: 10426, Purview_Label_Info: 10043, Purview_Label_Sync_Cache: 10044, QnA: 10238, Quarterly_Fiscal_Calendar: 2002, Queue: 2020, Queue_Item: 2029, QueueItemCount: 2023, QueueMemberCount: 2024, Recently_Used: 5000, ReconciliationEntityInfo: 10307, ReconciliationEntityStepInfo: 10308, ReconciliationInfo: 10309, Record_Creation_and_Update_Rule: 9300, Record_Creation_and_Update_Rule_Item: 9301, Record_Filter: 72, Recurrence_Rule: 4250, Recurring_Appointment: 4251, Redirect: 10427, Relationship_Attribute: 9814, Relationship_Entity: 9813, Relationship_Role: 4500, Relationship_Role_Map: 4501, Replication_Backlog: 1140, Report: 9100, Report_Link: 9104, Report_Parameter: 10289, Report_Related_Category: 9102, Report_Related_Entity: 9101, Report_Visibility: 9103, Restore_Deleted_Records_Configuration: 10325, RetainedData_Excel: 10056, RetentionCleanupInfo: 10310, RetentionCleanupOperation: 10311, RetentionConfig: 10312, RetentionFailureDetail: 10313, RetentionOperation: 10314, RetentionOperationDetail: 10315, RetentionSuccessDetail: 10316, RevokeInheritedAccessRecordsTracker: 10086, Ribbon_Client_Metadata: 4579, Ribbon_Command: 1116, Ribbon_Context_Group: 1115, Ribbon_Difference: 1130, Ribbon_Metadata_To_Process: 9880, Ribbon_Rule: 1117, Ribbon_Tab_To_Command_Mapping: 1113, Rich_Text_Attachment: 10351, Role_Template: 1037, RoleEditorLayout: 10323, Rollup_Field: 9604, Rollup_Job: 9511, Rollup_Properties: 9510, Rollup_Query: 9602, Routing_Rule_Set: 8181, Rule_Item: 8199, RuntimeDependency: 7200, Salesforce_Structured_Object: 10239, Salesforce_Structured_QnA_Config: 10240, Saved_Organization_Insights_Configuration: 1309, Saved_View: 4230, Saving_Rule: 10117, Schedule: 10229, Sdk_Message: 4606, Sdk_Message_Filter: 4607, Sdk_Message_Pair: 4613, Sdk_Message_Processing_Step: 4608, Sdk_Message_Processing_Step_Image: 4615, Sdk_Message_Processing_Step_Secure_Configuration: 4616, Sdk_Message_Request: 4609, Sdk_Message_Request_Field: 4614, Sdk_Message_Response: 4610, Sdk_Message_Response_Field: 4611, Search_provider: 10260, Search_Telemetry: 10392, SearchAttributeSettings: 10388, SearchCustomAnalyzer: 10389, SearchRelationshipSettings: 10390, SearchResultsCache: 10391, Secured_Masking_Column: 9820, Secured_Masking_Rule: 74, Security_Role: 1036, Semiannual_Fiscal_Calendar: 2001, Sensitivity_Label: 10040, Sensitivity_Label_Attribute_Mapping: 10045, Service_Configuration: 10254, Service_Endpoint: 4618, Service_Plan: 101, Service_Plan_Custom_Control: 10097, Service_Plan_Mapping: 10096, Setting: 10409, Setting_Definition: 10094, Shared_Link_Setting: 10081, Shared_Object: 10046, Shared_Workspace: 10047, Shared_Workspace_Access_Token: 10048, Shared_Workspace_Pool: 10049, SharePoint_Data: 9509, Sharepoint_Document: 9507, SharePoint_Managed_Identity: 10336, SharePoint_Site: 9502, Shortcut: 10428, SideloadedAIPlugin: 10169, signal: 10464, signal_registration: 10465, Similarity_Rule: 9951, Site: 10399, Site_Component: 10398, Site_Language: 10400, Site_Map: 4709, Site_Marker: 10429, Site_Setting: 10430, Site_Source_File: 10402, SLA: 9750, SLA_Item: 9751, SLA_KPI: 10255, SLA_KPI_Instance: 9752, Social_Activity: 4216, Social_Profile: 99, SocialInsightsConfiguration: 1300, Solution: 7100, Solution_Component: 7103, Solution_Component_Attribute_Configuration: 10000, Solution_Component_Batch_Configuration: 10001, Solution_Component_Configuration: 10002, Solution_Component_Count_Data_Source: 10017, Solution_Component_Count_Summary: 10015, Solution_Component_Data_Source: 10016, Solution_Component_Definition: 7104, Solution_Component_Relationship_Configuration: 10003, Solution_Component_Summary: 10014, Solution_Health_Rule: 10376, Solution_Health_Rule_Argument: 10377, Solution_Health_Rule_Set: 10378, Solution_History: 10004, Solution_History_Data_Source: 10005, SolutionHistoryData: 9890, Source_Control_Branch_Configuration: 10074, Source_Control_Component: 10075, Source_Control_Component_Payload: 10076, Source_Control_Configuration: 10077, Sql_DataSource: 10704, Staged_attribute_lookup_value: 10019, Staged_attribute_picklist_value: 10020, Staged_Entity: 10021, Staged_Entity_Attribute: 10022, Staged_entity_relationship: 10023, Staged_entity_relationship_relationships: 10024, Staged_entity_relationship_role: 10025, Staged_Metadata_Async_Operation: 10026, Staged_optionset: 10027, Staged_relationship_10028: 10028, Staged_relationship_10029: 10029, Staged_relationship_10030: 10030, Staged_Source_Control_Component: 10078, StageSolutionUpload: 10011, Status_Map: 1075, String_Map: 1043, Subject: 129, Subscription: 29, Subscription_Clients: 1072, Subscription_Manually_Tracked_Object: 37, Subscription_Statistic_Offline: 45, Subscription_Statistic_Outlook: 46, Subscription_Sync_Entry_Offline: 47, Subscription_Sync_Entry_Outlook: 48, Subscription_Synchronization_Information: 33, Suggested_Action: 10339, Suggested_Action_Criteria: 10340, SuggestionCardTemplate: 1190, SupportUserTable: 10278, Synapse_Database: 10057, Synapse_Link_External_Table_State: 10058, Synapse_Link_Profile: 10059, Synapse_Link_Profile_Entity: 10060, Synapse_Link_Profile_Entity_State: 10061, Synapse_Link_Schedule: 10062, Sync_Attribute_Mapping: 1401, Sync_Attribute_Mapping_Profile: 1400, Sync_Error: 9869, System_Application_Metadata: 7000, System_Chart: 1111, System_Form: 1030, System_Job: 4700, System_User_Manager_Map: 51, System_User_Principal: 14, SystemUser_BusinessUnit_Entity_Map: 42, SystemUserAuthorizationChangeTracker: 60, Table_Permission: 10421, Tag: 10118, Tagged_Flow_Session: 10119, Tagged_Process: 10120, Task: 4212, TdsMetadata: 10087, Team: 9, Team_Profiles: 1203, Team_Sync_Attribute_Mapping_Profiles: 1403, Team_template: 92, TeamMobileOfflineProfileMembership: 10292, Teams_chat: 10253, Territory: 2013, Text_Analytics_Entity_Mapping: 9945, TextDataRecordsIndexingStatus: 10393, Theme: 2015, Time_Stamp_Date_Mapping: 9932, Time_Zone_Definition: 4810, Time_Zone_Localized_Name: 4812, Time_Zone_Rule: 4811, Timeline_Pin: 10353, ToolingGateway: 10710, ToolingGatewayMCPServer: 10711, Tour: 10208, Trace: 8050, Trace_Association: 8051, Trace_Regarding: 8052, Tracking_information_for_deleted_entities: 35, trait: 10466, trait_registration: 10467, Transformation_Mapping: 4426, Transformation_Parameter_Mapping: 4427, Translation_Process: 951, Unresolved_Address: 2012, UnstructuredFileSearchEntity: 10153, UnstructuredFileSearchRecord: 10154, UnstructuredFileSearchRecordStatus: 10707, UntrackedEmail: 4220, User: 8, User_Application_Metadata: 7001, User_Chart: 1112, User_Dashboard: 1031, User_Entity_Instance_Data: 2501, User_Entity_UI_Settings: 2500, User_Fiscal_Calendar: 1086, User_Mapping: 2016, User_Rating: 10319, User_Search_Facet: 52, User_Settings: 150, UserMobileOfflineProfileMembership: 10293, UX_Agent_Component: 10345, UX_Agent_Component_Revision: 10346, UX_Agent_Project: 10347, UX_Agent_Project_File: 10348, View: 1039, ViewAsExampleQuestion: 10394, Virtual_Connector_Data_Source: 10354, Virtual_Entity_Data_Provider: 78, Virtual_Entity_Data_Source: 85, Virtual_Entity_Metadata: 10287, Virtual_Table_Column_Candidate: 10355, Web_File: 10431, Web_Link: 10435, Web_Link_Set: 10436, Web_Page: 10437, Web_Page_Access_Control_Rule: 10438, Web_Resource: 9333, Web_Role: 10439, Web_Template: 10443, Web_Wizard: 4800, Web_Wizard_Access_Privilege: 4803, Website: 10440, Website_Access: 10441, Website_Language: 10442, Wizard_Page: 4802, Work_Queue: 10122, Work_Queue_Item: 10123, Workflow_Action_Status: 10241, Workflow_Binary: 10103, Workflow_Metadata: 10121, Workflow_Wait_Subscription: 4702 },
	/** SLA Type */
	SLAType: { Enhanced: 1, Standard: 0 },
	/** Record version */
	slaversion: { Version_UC: 100000001, Version_WC: 100000000 },
	/** Status */
	StateCode: { Active: 1, Draft: 0 },
	/** Status Reason */
	StatusCode: { Active: 2, Draft: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SLAItem entity OptionSets */
const SLAItem = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SLAKPIInstance entity OptionSets */
const SLAKPIInstance = {
	/** Action Execution Status */
	msdyn_ActionExecutionStatus: { None: 0, Success: 2, Warning: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	Status: { Canceled: 5, In_Progress: 0, Nearing_Noncompliance: 2, Noncompliant: 1, Paused: 3, Succeeded: 4 },
	/** Warning Time Reached */
	WarningTimeReached: { No: 0, Yes: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SocialActivity entity OptionSets */
const SocialActivity = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** PostAuthorAccountType */
	PostAuthorAccountType: {},
	/** PostAuthorType */
	PostAuthorType: {},
	/** Received As */
	PostMessageType: { Private_Message: 1, Public_Message: 0 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 5, Completed: 1, Failed: 2, Open: 4, Processing: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SocialInsightsConfiguration entity OptionSets */
const SocialInsightsConfiguration = {
	/** Form Type */
	FormTypeCode: { System_Form: 1030, User_Form: 1031 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Social Data Item Type */
	SocialDataItemType: { Class: 2, Search_Item: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SocialProfile entity OptionSets */
const SocialProfile = {
	/** Social Channel */
	Community: { Facebook: 1, Other: 0, Twitter: 2 },
	/** CustomerIdType */
	CustomerIdType: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Solution entity OptionSets */
const Solution = {
	/** Solution Type */
	SolutionType: { Internal: 2, None: 0, Snapshot: 1 },
	/** Source Control Sync Status */
	SourceControlSyncStatus: { Committed: 4, Errors_in_initial_sync: 2, Initial_sync_in_progress: 1, Not_started: 0, Pending_changes_to_be_committed: 3 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SolutionComponent entity OptionSets */
const SolutionComponent = {
	/** Object Type Code */
	ComponentType: { AI_Configuration: 402, AI_Project: 401, AI_Project_Type: 400, Attachment: 35, Attribute: 2, Attribute_Image_Configuration: 431, Attribute_Lookup_Value: 5, Attribute_Map: 47, Attribute_Picklist_Value: 4, Canvas_App: 300, Complex_Control: 64, Connection_Role: 63, Connector_371: 371, Connector_372: 372, Contract_Template: 37, Convert_Rule: 154, Convert_Rule_Item: 155, Custom_Control: 66, Custom_Control_Default_Config: 68, Data_Source_Mapping: 166, Display_String: 22, Display_String_Map: 23, Duplicate_Rule: 44, Duplicate_Rule_Condition: 45, Email_Template: 36, Entity: 1, Entity_Analytics_Configuration: 430, Entity_Image_Configuration: 432, Entity_Key: 14, Entity_Map: 46, Entity_Relationship: 10, Entity_Relationship_Relationships: 12, Entity_Relationship_Role: 11, Environment_Variable_Definition: 380, Environment_Variable_Value: 381, Field_Permission: 71, Field_Security_Profile: 70, Form: 24, Hierarchy_Rule: 65, Import_Map: 208, Index: 18, KB_Article_Template: 38, Localized_Label: 7, Mail_Merge_Template: 39, Managed_Property: 13, Mobile_Offline_Profile: 161, Mobile_Offline_Profile_Item: 162, Option_Set: 9, Organization: 25, Plugin_Assembly: 91, Plugin_Type: 90, Privilege: 16, PrivilegeObjectTypeCode: 17, Relationship: 3, Relationship_Extra_Condition: 8, Report: 31, Report_Category: 33, Report_Entity: 32, Report_Visibility: 34, Ribbon_Command: 48, Ribbon_Context_Group: 49, Ribbon_Customization: 50, Ribbon_Diff: 55, Ribbon_Rule: 52, Ribbon_Tab_To_Command_Map: 53, Role: 20, Role_Privilege: 21, Routing_Rule: 150, Routing_Rule_Item: 151, Saved_Query: 26, Saved_Query_Visualization: 59, SDK_Message_Processing_Step: 92, SDK_Message_Processing_Step_Image: 93, SDKMessage: 201, SDKMessageFilter: 202, SdkMessagePair: 203, SdkMessageRequest: 204, SdkMessageRequestField: 205, SdkMessageResponse: 206, SdkMessageResponseField: 207, Service_Endpoint: 95, Similarity_Rule: 165, Site_Map: 62, SLA: 152, SLA_Item: 153, System_Form: 60, View_Attribute: 6, Web_Resource: 61, WebWizard: 210, Workflow: 29 },
	/** Root Component Behavior */
	RootComponentBehavior: { Do_not_include_subcomponents: 1, Include_As_Shell_Only: 2, Include_Subcomponents: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** solutioncomponentattributeconfiguration entity OptionSets */
const solutioncomponentattributeconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Custom Managed Behavior Type */
	CustomManagedBehaviorType: { None: 0, State_Transition: 1 },
	/** dependency removal capability */
	DependencyRemovalCapability: { Disabled: 0, Enabled: 1 },
	/** Encoding Format */
	EncodingFormat: { Base64: 1, None: 0, UTF8: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** solutioncomponentbatchconfiguration entity OptionSets */
const solutioncomponentbatchconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Operation */
	Operation: { All: 0, Export: 2, Import: 1, Uninstall: 3 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** solutioncomponentconfiguration entity OptionSets */
const solutioncomponentconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** File Format */
	FileFormat: { json: 1, xml: 0 },
	/** File Scope */
	FileScope: { Global: 2, Individual: 1, None: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SolutionComponentDefinition entity OptionSets */
const SolutionComponentDefinition = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Remove Active Customizations Behavior */
	RemoveActiveCustomizationsBehavior: { Cascade: 2, No_Cascade: 1, None: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** solutioncomponentrelationshipconfiguration entity OptionSets */
const solutioncomponentrelationshipconfiguration = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** PrimaryEntityDependencyType */
	PrimaryEntityDependencyType: { Hard_Dependency: 0, Soft_Dependency: 1 },
	/** SecondaryEntityDependencyType */
	SecondaryEntityDependencyType: { Hard_Dependency: 0, Soft_Dependency: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SolutionHistoryData entity OptionSets */
const SolutionHistoryData = {
	/** Operation */
	Operation: { Export: 2, Import: 0, Uninstall: 1 },
	/** Status */
	Status: { End: 1, Start: 0 },
	/** SubOperation */
	SubOperation: { Delete: 4, New: 1, None: 0, Update: 3, Upgrade: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SourceControlBranchConfiguration entity OptionSets */
const SourceControlBranchConfiguration = {
	/** StatusCode */
	StatusCode: { Connected: 0, Disconnect: 1, DisconnectFailed: 3, DisconnectInprogress: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SourceControlComponent entity OptionSets */
const SourceControlComponent = {
	/** Action */
	Action: { Conflict: 3, None: 0, Pull: 2, Push: 1 },
	/** Solution Component State */
	SolutionComponentState: { Create: 0, Delete: 2, Update: 1 },
	/** UserAction */
	UserAction: { None: 0, Pull: 2, Push: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SourceControlComponentPayload entity OptionSets */
const SourceControlComponentPayload = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SourceControlConfiguration entity OptionSets */
const SourceControlConfiguration = {
	/** Git Provider */
	GitProvider: { Azure_DevOps: 0, GitHub: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SqlEncryptionAudit entity OptionSets */
const SqlEncryptionAudit = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedAttributeLookupValue entity OptionSets */
const StagedAttributeLookupValue = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedAttributePicklistValue entity OptionSets */
const StagedAttributePicklistValue = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedEntity entity OptionSets */
const StagedEntity = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedEntityAttribute entity OptionSets */
const StagedEntityAttribute = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedEntityRelationship entity OptionSets */
const StagedEntityRelationship = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedEntityRelationshipRelationships entity OptionSets */
const StagedEntityRelationshipRelationships = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedEntityRelationshipRole entity OptionSets */
const StagedEntityRelationshipRole = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedMetadataAsyncOperation entity OptionSets */
const StagedMetadataAsyncOperation = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedOptionSet entity OptionSets */
const StagedOptionSet = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedRelationship entity OptionSets */
const StagedRelationship = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedRelationshipExtraCondition entity OptionSets */
const StagedRelationshipExtraCondition = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedSourceControlComponent entity OptionSets */
const StagedSourceControlComponent = {
	/** Component Operation Type */
	ComponentOperationType: { Add_to_Solution: 4, Create: 0, Delete: 2, Publish: 3, Remove_from_Solution: 5, Update: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StagedViewAttribute entity OptionSets */
const StagedViewAttribute = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StageSolutionUpload entity OptionSets */
const StageSolutionUpload = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StatusMap entity OptionSets */
const StatusMap = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** StringMap entity OptionSets */
const StringMap = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Subject entity OptionSets */
const Subject = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Subscription entity OptionSets */
const Subscription = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionClients entity OptionSets */
const SubscriptionClients = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionManuallyTrackedObject entity OptionSets */
const SubscriptionManuallyTrackedObject = {
	/** ObjectTypeCode */
	ObjectTypeCode: { Contact: 2, Task: 4212 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionStatisticsOffline entity OptionSets */
const SubscriptionStatisticsOffline = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionStatisticsOutlook entity OptionSets */
const SubscriptionStatisticsOutlook = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionSyncEntryOffline entity OptionSets */
const SubscriptionSyncEntryOffline = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionSyncEntryOutlook entity OptionSets */
const SubscriptionSyncEntryOutlook = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionSyncInfo entity OptionSets */
const SubscriptionSyncInfo = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SubscriptionTrackingDeletedObject entity OptionSets */
const SubscriptionTrackingDeletedObject = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SuggestionCardTemplate entity OptionSets */
const SuggestionCardTemplate = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** supportusertable entity OptionSets */
const supportusertable = {
	/** EnabledforSoftDelete */
	EnabledforSoftDelete: { Allowed: 4, Not_Allowed: 0 },
	/** IsActive */
	IsActive: { Allowed: 4, Not_Allowed: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapsedatabase entity OptionSets */
const synapsedatabase = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapselinkexternaltablestate entity OptionSets */
const synapselinkexternaltablestate = {
	/** Lakehouse Shortcut State */
	LakehouseShortcutState: { Created: 1, Deleted: 3, Failed: 2, In_Progress: 4, Not_Created: 0 },
	/** Last Synchronization State */
	LastSyncState: { Created: 1, Deleted: 3, Failed: 2, In_Progress: 4, Not_Created: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Table State */
	TableState: { Created: 1, Deleted: 3, Failed: 2, In_Progress: 4, Not_Created: 0 },
	/** Trino State */
	TrinoState: { Created: 1, Deleted: 3, Failed: 2, In_Progress: 4, Not_Created: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapselinkprofile entity OptionSets */
const synapselinkprofile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Destination Sync State */
	DestinationSyncState: { Completed: 2, None: 0, NotCompleted: 1 },
	/** Profile State */
	ProfileState: { Aborted: 5, Aborting: 4, Active: 1, Deactivated: 8, Deleted: 3, Error: 2, Inactive: 0, Suspended: 6, Suspending: 7 },
	/** Profile Type */
	ProfileType: { EventAnalytics: 1, SynapseLink: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapselinkprofileentity entity OptionSets */
const synapselinkprofileentity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity source */
	EntitySource: { Dataverse: 0, FnOTables: 1 },
	/** Entity Type */
	EntityType: { Requested: 0 },
	/** Partition Strategy */
	PartitionStrategy: { FiveDay: 3, HalfMonth: 2, Month: 1, Year: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapselinkprofileentitystate entity OptionSets */
const synapselinkprofileentitystate = {
	/** Entity source */
	EntitySource: { Dataverse: 0, FnOTables: 1 },
	/** EntityType */
	EntityType: { Requested: 0 },
	/** Initial Sync State */
	InitialSyncState: { Completed: 4, CompletedWithFailures: 8, InProgress: 2, None: 0, NotStarted: 1, Paused: 32, PostProcessing: 64, RequestedInitialData: 16 },
	/** Metadata State */
	MetadataState: { Created: 8, Failure: 16, MetadataCreating: 2, None: 0, NotCreated: 1, RelationshipCreating: 4 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Synapse Table Creation State */
	SynapseTableCreationState: { Completed: 2, Failed: 3, InProgress: 1, NotStarted: 0 },
	/** SyncState */
	SyncState: { Completed: 4, CompletedWithFailures: 8, InProgress: 2, None: 0, NotStarted: 1, Paused: 32, PostProcessing: 64, RequestedInitialData: 16 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** synapselinkschedule entity OptionSets */
const synapselinkschedule = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Recurrence Unit */
	RecurrenceUnit: { Day: 3, Hour: 2, Minute: 1, Month: 5, None: 0, Week: 4, Year: 6 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Type */
	Type: { IncrementalUpdate: 1, Snapshot: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SyncAttributeMapping entity OptionSets */
const SyncAttributeMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Sync Direction */
	DefaultSyncDirection: { Bidirectional: 3, None: 0, ToCRM: 2, ToExchange: 1 },
	/** EntityTypeCode */
	EntityTypeCode: {},
	/** Sync Direction */
	SyncDirection: { Bidirectional: 3, None: 0, ToCRM: 2, ToExchange: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SyncAttributeMappingProfile entity OptionSets */
const SyncAttributeMappingProfile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SyncError entity OptionSets */
const SyncError = {
	/** Error Type */
	ErrorType: { Conflict: 0, Others: 3, Record_already_exists: 2, Record_not_found: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** State */
	StateCode: { Active: 0, Resolved: 1 },
	/** Status Reason */
	StatusCode: { Active: 0, Fixed: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemApplicationMetadata entity OptionSets */
const SystemApplicationMetadata = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemForm entity OptionSets */
const SystemForm = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Form State */
	FormActivationState: { Active: 1, Inactive: 0 },
	/** AIR Refreshed */
	FormPresentation: { AirForm: 1, ClassicForm: 0, ConvertedICForm: 2 },
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Form Type */
	Type: { AppointmentBook: 1, AppointmentBookBackup: 102, Card: 11, Contextual_Dashboard: 13, Dashboard: 0, Dialog: 8, InteractionCentricDashboard: 10, Main: 2, Main_Interactive_experience: 12, MainBackup: 101, MiniCampaignBO: 3, Mobile_Express: 5, Other: 100, Power_BI_Dashboard: 103, Preview: 4, Quick_Create: 7, Quick_View_Form: 6, Task_Flow_Form: 9 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUser entity OptionSets */
const SystemUser = {
	/** Access Mode */
	AccessMode: { Administrative: 1, Delegated_Admin: 5, Non_interactive: 4, Read: 2, Read_Write: 0, Support_User: 3 },
	/** Address 1: Address Type */
	Address1_AddressTypeCode: { Default_Value: 1 },
	/** Address 1: Shipping Method */
	Address1_ShippingMethodCode: { Default_Value: 1 },
	/** Address 2: Address Type */
	Address2_AddressTypeCode: { Default_Value: 1 },
	/** Address 2: Shipping Method */
	Address2_ShippingMethodCode: { Default_Value: 1 },
	/** Azure State */
	AzureState: { Exists: 0, Not_found_or_hard_deleted: 2, Soft_deleted: 1 },
	/** License Type */
	CALType: { Administrative: 1, Basic: 2, Device_Basic: 4, Device_Enterprise: 8, Device_Essential: 6, Device_Professional: 3, Enterprise: 7, Essential: 5, Field_Service: 11, Professional: 0, Project_Service: 12, Sales: 9, Service: 10 },
	/** Deleted State */
	DeletedState: { Not_deleted: 0, Soft_deleted: 1 },
	/** Primary Email Status */
	EmailRouterAccessApproval: { Approved: 1, Empty: 0, Pending_Approval: 2, Rejected: 3 },
	/** Incoming Email Delivery Method */
	IncomingEmailDeliveryMethod: { Forward_Mailbox: 3, Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
	/** Invitation Status */
	InviteStatusCode: { Invitation_Accepted: 4, Invitation_Expired: 3, Invitation_Near_Expired: 2, Invitation_Not_Sent: 0, Invitation_Rejected: 5, Invitation_Revoked: 6, Invited: 1 },
	/** Outgoing Email Delivery Method */
	OutgoingEmailDeliveryMethod: { Microsoft_Dynamics_365_for_Outlook: 1, None: 0, Server_Side_Synchronization_or_Email_Router: 2 },
	/** Preferred Address */
	PreferredAddressCode: { Mailing_Address: 1, Other_Address: 2 },
	/** Preferred Email */
	PreferredEmailCode: { Default_Value: 1 },
	/** Preferred Phone */
	PreferredPhoneCode: { Home_Phone: 3, Main_Phone: 1, Mobile_Phone: 4, Other_Phone: 2 },
	/** System Managed User Type */
	SystemManagedUserType: { Agentic_User: 3, C2_User: 1, Entra_User: 0, Impersonable_Stub_User: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserAuthorizationChangeTracker entity OptionSets */
const SystemUserAuthorizationChangeTracker = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserBusinessUnitEntityMap entity OptionSets */
const SystemUserBusinessUnitEntityMap = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserLicenses entity OptionSets */
const SystemUserLicenses = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserManagerMap entity OptionSets */
const SystemUserManagerMap = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserPrincipals entity OptionSets */
const SystemUserPrincipals = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserProfiles entity OptionSets */
const SystemUserProfiles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserRoles entity OptionSets */
const SystemUserRoles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** SystemUserSyncMappingProfiles entity OptionSets */
const SystemUserSyncMappingProfiles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** tag entity OptionSets */
const tag = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** taggedflowsession entity OptionSets */
const taggedflowsession = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** taggedprocess entity OptionSets */
const taggedprocess = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Task entity OptionSets */
const Task = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** Priority */
	PriorityCode: { High: 2, Low: 0, Normal: 1 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Activity Status */
	StateCode: { Canceled: 2, Completed: 1, Open: 0 },
	/** Status Reason */
	StatusCode: { Canceled: 6, Completed: 5, Deferred: 7, In_Progress: 3, Not_Started: 2, Waiting_on_someone_else: 4 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** tdsmetadata entity OptionSets */
const tdsmetadata = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Team entity OptionSets */
const Team = {
	/** Membership Type */
	MembershipType: { Guests: 3, Members: 1, Members_and_guests: 0, Owners: 2 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Team Type */
	TeamType: { Access: 1, Office_Group: 3, Owner: 0, Security_Group: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TeamMembership entity OptionSets */
const TeamMembership = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** teammobileofflineprofilemembership entity OptionSets */
const teammobileofflineprofilemembership = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TeamProfiles entity OptionSets */
const TeamProfiles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TeamRoles entity OptionSets */
const TeamRoles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TeamSyncAttributeMappingProfiles entity OptionSets */
const TeamSyncAttributeMappingProfiles = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TeamTemplate entity OptionSets */
const TeamTemplate = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Template entity OptionSets */
const Template = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Template Type */
	TemplateTypeCode: { Account: 1, Contact: 2, System_Job: 4700, User: 8 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Territory entity OptionSets */
const Territory = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TextAnalyticsEntityMapping entity OptionSets */
const TextAnalyticsEntityMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Entity */
	EntityPickList: { No: 1, Yes: 2 },
	/** Field */
	FieldPickList: { No: 1, Yes: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** textdatarecordsindexingstatus entity OptionSets */
const textdatarecordsindexingstatus = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Theme entity OptionSets */
const Theme = {
	/** Status */
	statecode: { Custom: 0, System: 1 },
	/** Status Reason */
	statuscode: { Custom: 1, System: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TimeStampDateMapping entity OptionSets */
const TimeStampDateMapping = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TimeZoneDefinition entity OptionSets */
const TimeZoneDefinition = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TimeZoneLocalizedName entity OptionSets */
const TimeZoneLocalizedName = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TimeZoneRule entity OptionSets */
const TimeZoneRule = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ToolingGateway entity OptionSets */
const ToolingGateway = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** ToolingGatewayMCPServer entity OptionSets */
const ToolingGatewayMCPServer = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TraceAssociation entity OptionSets */
const TraceAssociation = {
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TraceLog entity OptionSets */
const TraceLog = {
	/** Level */
	Level: { Error: 3, Information: 1, Warning: 2 },
	/** RegardingObjectOwnerIdType */
	RegardingObjectOwnerIdType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TraceRegarding entity OptionSets */
const TraceRegarding = {
	/** RegardingObjectOwnerIdType */
	RegardingObjectOwnerIdType: {},
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** RegardingObjectTypeCodeForSharing */
	RegardingObjectTypeCodeForSharing: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** trait entity OptionSets */
const trait = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** traitregistration entity OptionSets */
const traitregistration = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TransactionCurrency entity OptionSets */
const TransactionCurrency = {
	/** Currency Type */
	CurrencyType: { Custom: 1, System: 0 },
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TransformationMapping entity OptionSets */
const TransformationMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Process Code */
	ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
	/** Status */
	StateCode: { Active: 0 },
	/** Status Reason */
	StatusCode: { Active: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TransformationParameterMapping entity OptionSets */
const TransformationParameterMapping = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Parameter Data Type */
	DataTypeCode: { Reference: 0, Value: 1 },
	/** Parameter Type */
	ParameterTypeCode: { Input: 0, Output: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** TranslationProcess entity OptionSets */
const TranslationProcess = {
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Aborted: 3, Active: 1, Finished: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UnresolvedAddress entity OptionSets */
const UnresolvedAddress = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** unstructuredfilesearchentity entity OptionSets */
const unstructuredfilesearchentity = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** KnowledgeSource */
	KnowledgeSource: { Confluence: 6, OneDrive_For_Business: 5, Salesforce: 1, ServiceNow: 3, SharepointDocuments: 4, Zendesk: 2 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** unstructuredfilesearchrecord entity OptionSets */
const unstructuredfilesearchrecord = {
	/** AttributeType */
	AttributeType: { FileType: 1, Multiline_Text: 2 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** unstructuredfilesearchrecordstatus entity OptionSets */
const unstructuredfilesearchrecordstatus = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** IndexingStatus */
	IndexingStatus: { Archived: 2, Error: 5, Excluded: 7, In_Progress: 4, Queued: 1, Ready: 3, Skipped: 6 },
	/** IngestionStatus */
	IngestionStatus: { Archived: 2, Error: 5, Excluded: 7, In_Progress: 4, Queued: 1, Ready: 3, Skipped: 6 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UntrackedEmail entity OptionSets */
const UntrackedEmail = {
	/** Activity Type */
	ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserApplicationMetadata entity OptionSets */
const UserApplicationMetadata = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserEntityInstanceData entity OptionSets */
const UserEntityInstanceData = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserEntityUISettings entity OptionSets */
const UserEntityUISettings = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserFiscalCalendar entity OptionSets */
const UserFiscalCalendar = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserForm entity OptionSets */
const UserForm = {
	/** ObjectTypeCode */
	ObjectTypeCode: {},
	/** Form Type */
	Type: { Dashboard: 0, Power_BI_Dashboard: 103 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserMapping entity OptionSets */
const UserMapping = {
	/** Choose the Partner Application Type */
	PartnerApplicationType: { Exchange: 1, SharePoint: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** usermobileofflineprofilemembership entity OptionSets */
const usermobileofflineprofilemembership = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserQuery entity OptionSets */
const UserQuery = {
	/** ReturnedTypeCode */
	ReturnedTypeCode: {},
	/** Status */
	StateCode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	StatusCode: { Active: 1, All: 3, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserQueryVisualization entity OptionSets */
const UserQueryVisualization = {
	/** Chart Type */
	ChartType: { ASPNET_Charts: 0, Power_BI: 1 },
	/** PrimaryEntityTypeCode */
	PrimaryEntityTypeCode: {},
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** userrating entity OptionSets */
const userrating = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserSearchFacet entity OptionSets */
const UserSearchFacet = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** UserSettings entity OptionSets */
const UserSettings = {
	/** d365autoinstallattemptstatus */
	D365AutoInstallAttemptStatus: { Already_installed: 2, Auto_installed: 1, No_Graph_API: 6, No_Solution: 5, Not_attempted: 0, Resource_Disabled: 7, Teams_admin_blocked: 3, Unauthorized: 4 },
	/** Data Validation Mode For Export To Excel */
	DataValidationModeForExportToExcel: { Full: 0, None: 1 },
	/** Default Search Experience */
	DefaultSearchExperience: { Categorized_search: 1, Custom_search: 3, Relevance_search: 0, Use_last_search: 2 },
	/** Form Mode */
	EntityFormMode: { Edit: 2, Organization_default: 0, Read_optimized: 1 },
	/** Incoming Email Filtering Method */
	IncomingEmailFilteringMethod: { All_email_messages: 0, Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts: 2, Email_messages_from_Dynamics_365_records_that_are_email_enabled: 3, Email_messages_in_response_to_Dynamics_365_email: 1, No_email_messages: 4 },
	/** Model app channel override */
	ReleaseChannel: { Inner_channel_override: 3, Monthly_channel_override: 2, None: 0, Semi_annual_channel_override: 1 },
	/** Report Script Errors */
	ReportScriptErrors: { Ask_me_for_permission_to_send_an_error_report_to_Microsoft: 1, Automatically_send_an_error_report_to_Microsoft_without_asking_me_for_permission: 2, Never_send_an_error_report_to_Microsoft_about_Microsoft_Dynamics_365: 3 },
	/** Visualization Pane Layout. */
	VisualizationPaneLayout: { Side_by_side: 1, Top_bottom: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** uxagentcomponent entity OptionSets */
const uxagentcomponent = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** uxagentcomponentrevision entity OptionSets */
const uxagentcomponentrevision = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** uxagentproject entity OptionSets */
const uxagentproject = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** uxagentprojectfile entity OptionSets */
const uxagentprojectfile = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** File Type */
	FileType: { Output: 200000001, Source: 200000000 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** v4_accountbpf entity OptionSets */
const v4_accountbpf = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Aborted: 3, Active: 1, Finished: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** v4_Sql_DataSource entity OptionSets */
const v4_Sql_DataSource = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** viewasexamplequestion entity OptionSets */
const viewasexamplequestion = {
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** VirtualEntityMetadata entity OptionSets */
const VirtualEntityMetadata = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WebResource entity OptionSets */
const WebResource = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Type */
	WebResourceType: { Data_XML: 4, GIF_format: 7, ICO_format: 10, JPG_format: 6, PNG_format: 5, Script_JScript: 3, Silverlight_XAP: 8, String_RESX: 12, Style_Sheet_CSS: 2, Style_Sheet_XSL: 9, Vector_format_SVG: 11, Webpage_HTML: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WebWizard entity OptionSets */
const WebWizard = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WizardAccessPrivilege entity OptionSets */
const WizardAccessPrivilege = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WizardPage entity OptionSets */
const WizardPage = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** Workflow entity OptionSets */
const Workflow = {
	/** Business Process Type */
	BusinessProcessType: { Business_Flow: 0, Task_Flow: 1 },
	/** Category */
	Category: { Action: 3, AI_Flow: 7, Business_Process_Flow: 4, Business_Rule: 2, Desktop_Flow: 6, Dialog: 1, Modern_Flow: 5, Workflow: 0 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Create Stage */
	CreateStage: { Post_operation: 40, Pre_operation: 20 },
	/** Delete stage */
	DeleteStage: { Post_operation: 40, Pre_operation: 20 },
	/** Mode */
	Mode: { Background: 0, Real_time: 1 },
	/** Modern Flow Type */
	ModernFlowType: { CopilotStudioFlow: 1, M365CopilotAgentFlow: 2, PowerAutomateFlow: 0 },
	/** PrimaryEntity */
	PrimaryEntity: {},
	/** ProcessTriggerScope */
	ProcessTriggerScope: { Entity: 2, Form: 1 },
	/** RendererObjectTypeCode */
	RendererObjectTypeCode: {},
	/** Run As User */
	RunAs: { Calling_User: 1, Owner: 0 },
	/** Scope */
	Scope: { Business_Unit: 2, Organization: 4, Parent_Child_Business_Units: 3, User: 1 },
	/** Status */
	StateCode: { Activated: 1, Draft: 0, Suspended: 2 },
	/** Status Reason */
	StatusCode: { Activated: 2, CompanyDLPViolation: 3, Draft: 1 },
	/** Throttling behavior type */
	ThrottlingBehavior: { CopilotStudio: 2, None: 0, TenantPool: 1 },
	/** Type */
	Type: { Activation: 2, Definition: 1, Template: 3 },
	/** UI Flow Type */
	UIFlowType: { Power_Automate_Desktop: 2, Recording: 101, Selenium_IDE: 1, Test: 3, Windows_recorder_V1: 0 },
	/** Update Stage */
	UpdateStage: { Post_operation: 40, Pre_operation: 20 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** workflowbinary entity OptionSets */
const workflowbinary = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** workflowcardconnections entity OptionSets */
const workflowcardconnections = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WorkflowDependency entity OptionSets */
const WorkflowDependency = {
	/** Type */
	Type: { Argument_Entity_that_workflow_depends_on: 9, Attribute_definition_that_workflow_depends_on: 8, Custom_entity_definition_that_workflow_depends_on: 7, Local_parameter: 2, Primary_entity: 3, Primary_entity_after_SDK_operation: 5, Primary_entity_before_SDK_operation: 4, Related_entity: 6, Sdk_association: 1 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WorkflowLog entity OptionSets */
const WorkflowLog = {
	/** Entity */
	ChildWorkflowInstanceObjectTypeCode: { Flow_Session: 4720, System_Job: 4700, Workflow_Session: 4710 },
	/** Entity */
	ObjectTypeCode: { Flow_Session: 4720, System_Job: 4700, Workflow_Session: 4710 },
	/** RegardingObjectTypeCode */
	RegardingObjectTypeCode: {},
	/** Status */
	Status: { Canceled: 4, Failed: 3, In_Progress: 1, Succeeded: 2, Waiting: 5 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WorkflowMetadata entity OptionSets */
const WorkflowMetadata = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2 },
	/** Value Type */
	ValueType: { File: 1, SQL: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** WorkflowWaitSubscription entity OptionSets */
const WorkflowWaitSubscription = {
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** workqueue entity OptionSets */
const workqueue = {
	/** Allow update item input while in processing. */
	allowupdateinputwhileprocessing: { No: 1, NotSet: 0, Yes: 2 },
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Continue to process item even if SLA is violated */
	continueprocessingifslaviolated: { No: 1, NotSet: 0, Yes: 2 },
	/** Input Schema Type */
	inputschematype: { Json: 1, No_Schema: 0, Xml: 2 },
	/** Priority Type */
	prioritytype: { Fifo: 0 },
	/** Status */
	statecode: { Active: 0, Inactive: 1 },
	/** Status Reason */
	statuscode: { Active: 1, Inactive: 2, Paused: 3 },
	/** Work Queue Type */
	WorkQueueType: { Run_Queue: 1, Work_Queue: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
} as const;

/** workqueueitem entity OptionSets */
const workqueueitem = {
	/** Component State */
	ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
	/** Processor Type */
	processortype: { Cloud_Flow: 1, Flow_Machine: 2, None: 0 },
	/** SLA Status */
	slastatus: { AtRisk: 2, In: 1, NotSet: 0, Out: 3 },
	/** Status */
	statecode: { Error: 4, OnHold: 3, Processed: 2, Processing: 1, Queued: 0 },
	/** Status Reason */
	statuscode: { BusinessException: 6, DeadLetter: 7, GenericException: 4, ITException: 5, Paused: 3, Processed: 2, Processing: 1, ProcessingTimeout: 8, Queued: 0 },
	/** Rollup State */
	RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
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
	ProcessStageStatus,
	SaveMode,
	SaveOption,
	SidePaneState,
	TabContentType,
	TabDisplayState,
	TimerState,
	// Entity OptionSets
	_OptionSet,
	_package,
	aaduser,
	Account,
	ACIViewMapper,
	ActionCard,
	ActionCardUserSettings,
	ActionCardUserState,
	activityfileattachment,
	ActivityMimeAttachment,
	ActivityParty,
	ActivityPointer,
	AdvancedSimilarityRule,
	adx_externalidentity,
	adx_invitation,
	adx_invitation_invitecontacts,
	adx_invitation_mspp_webrole_powerpagecomponent,
	adx_invitation_redeemedcontacts,
	adx_inviteredemption,
	adx_kbarticle_kbarticle,
	adx_portalcomment,
	adx_setting,
	adx_webformsession,
	agentconversationmessage,
	agentconversationmessagefile,
	agentfeeditem,
	agenthubgoal,
	agenthubinsight,
	agenthubmetric,
	agenticscenario,
	agentmemory,
	agenttask,
	AICopilot,
	AICopilot_AIPlugin,
	aiinsightcard,
	AIPlugin,
	AIPluginAuth,
	AIPluginConversationStarter,
	AIPluginConversationStarterMapping,
	AIPluginExternalSchema,
	AIPluginExternalSchemaProperty,
	AIPluginGovernance,
	AIPluginGovernanceExt,
	AIPluginInstance,
	AIPluginOperation,
	AIPluginOperationParameter,
	AIPluginOperationResponseTemplate,
	AIPluginTitle,
	AIPluginUserSetting,
	aiskillconfig,
	allowedmcpclient,
	Annotation,
	AnnualFiscalCalendar,
	appaction,
	appaction_appactionrule_classicrules,
	appactionmigration,
	appactionrule,
	appactionrule_webresource_scripts,
	AppConfig,
	AppConfigInstance,
	AppConfigMaster,
	AppElement,
	AppEntitySearchView,
	Application,
	ApplicationFile,
	ApplicationRoles,
	ApplicationUser,
	applicationuserprofile,
	applicationuserrole,
	AppModule,
	AppModuleComponent,
	AppModuleComponentEdge,
	AppModuleComponentNode,
	AppModuleMetadata,
	AppModuleMetadataDependency,
	AppModuleMetadataOperationLog,
	AppModuleRoles,
	appnotification,
	Appointment,
	approvalprocess,
	approvalstageapproval,
	approvalstagecondition,
	approvalstageintelligent,
	approvalstageorder,
	AppSetting,
	AppUserSetting,
	ArchiveCleanupInfo,
	ArchiveCleanupOperation,
	AsyncOperation,
	Attachment,
	Attribute,
	AttributeClusterConfig,
	AttributeImageConfig,
	AttributeMap,
	AttributeMaskingRule,
	AttributePicklistValue,
	Audit,
	AuthorizationServer,
	AzureServiceConnection,
	backgroundoperation,
	bot,
	bot_botcomponent,
	bot_botcomponentcollection,
	bot_environmentvariabledefinition,
	botcomponent,
	botcomponent_aipluginoperation,
	botcomponent_botcomponent,
	botcomponent_connectionreference,
	botcomponent_dvtablesearch,
	botcomponent_environmentvariabledefinition,
	botcomponent_msdyn_aimodel,
	botcomponent_workflow,
	botcomponentcollection,
	BulkArchiveConfig,
	BulkArchiveFailureDetail,
	BulkArchiveOperation,
	BulkArchiveOperationDetail,
	BulkDeleteFailure,
	BulkDeleteOperation,
	BusinessDataLocalizedLabel,
	businessprocess,
	BusinessProcessFlowInstance,
	BusinessProcessLinkedArtifact,
	BusinessUnit,
	BusinessUnitMap,
	BusinessUnitNewsArticle,
	Calendar,
	CalendarRule,
	CallbackRegistration,
	CanvasApp,
	CanvasAppExtendedMetadata,
	card,
	cardentityconnections,
	cardstateitem,
	CardType,
	cascadegrantrevokeaccessrecordstracker,
	cascadegrantrevokeaccessversiontracker,
	Catalog,
	CatalogAssignment,
	Category,
	CertificateCredential,
	ChannelAccessProfile,
	ChannelAccessProfileEntityAccessLevel,
	ChannelAccessProfileRule,
	ChannelAccessProfileRuleItem,
	ChannelProperty,
	ChannelPropertyGroup,
	chat,
	ClientUpdate,
	ColumnMapping,
	Comment,
	ComplexControl,
	componentchangesetpayload,
	componentchangesetversion,
	componentversion,
	componentversiondatasource,
	componentversionnrddatasource,
	Connection,
	ConnectionInstance,
	connectionreference,
	ConnectionRole,
	ConnectionRoleAssociation,
	ConnectionRoleObjectTypeCode,
	connector,
	Contact,
	conversationtranscript,
	ConvertRule,
	ConvertRuleItem,
	CopilotExampleQuestion,
	CopilotGlossaryTerm,
	CopilotSynonyms,
	credential,
	CustomAPI,
	CustomAPIRequestParameter,
	CustomAPIResponseProperty,
	CustomControl,
	CustomControlDefaultConfig,
	CustomControlResource,
	CustomerAddress,
	CustomerRelationship,
	datalakefolder,
	datalakefolderpermission,
	datalakeworkspace,
	datalakeworkspacepermission,
	DataPerformance,
	DataProcessingConfiguration,
	DelegatedAuthorization,
	DeletedItemReference,
	DelveActionHub,
	Dependency,
	DependencyFeature,
	DependencyNode,
	desktopflowbinary,
	desktopflowmodule,
	DisplayString,
	DisplayStringMap,
	DocumentIndex,
	DocumentTemplate,
	DuplicateRecord,
	DuplicateRule,
	DuplicateRuleCondition,
	DVFileSearch,
	DVFileSearchAttribute,
	DVFileSearchEntity,
	DVTableSearch,
	DVTableSearchAttribute,
	DVTableSearchEntity,
	ElasticFileAttachment,
	Email,
	EmailAddressConfiguration,
	EmailHash,
	EmailSearch,
	EmailServerProfile,
	EmailSignature,
	enablearchivalrequest,
	Entity,
	EntityAnalyticsConfig,
	EntityClusterConfig,
	EntityDataProvider,
	EntityDataSource,
	EntityImageConfig,
	EntityIndex,
	EntityKey,
	EntityMap,
	EntityRecordFilter,
	EntityRelationship,
	EnvironmentVariableDefinition,
	EnvironmentVariableValue,
	EventExpanderBreadcrumb,
	ExchangeSyncIdMapping,
	ExpanderEvent,
	ExpiredProcess,
	exportedexcel,
	ExportSolutionUpload,
	ExternalParty,
	ExternalPartyItem,
	fabricaiskill,
	Fax,
	featurecontrolsetting,
	FederatedKnowledgeCitation,
	FederatedKnowledgeConfiguration,
	FederatedKnowledgeEntityConfiguration,
	FederatedKnowledgeMetadataRefresh,
	Feedback,
	FieldPermission,
	FieldSecurityProfile,
	FileAttachment,
	FilterTemplate,
	FixedMonthlyFiscalCalendar,
	flowaggregation,
	flowcapacityassignment,
	flowcredentialapplication,
	flowevent,
	flowlog,
	flowmachine,
	flowmachinegroup,
	flowmachineimage,
	flowmachineimageversion,
	flowmachinenetwork,
	flowrun,
	flowsession,
	flowsessionbinary,
	fxexpression,
	GitBranch,
	GitConfigurationRetrievalDataSource,
	GitOrganization,
	GitProject,
	GitRepository,
	GitSolution,
	GlobalSearchConfiguration,
	Goal,
	GoalRollupQuery,
	GovernanceConfiguration,
	HierarchyRule,
	HierarchySecurityConfiguration,
	holidaywrapper,
	ImageDescriptor,
	_Import,
	ImportData,
	ImportEntityMapping,
	ImportFile,
	ImportJob,
	ImportLog,
	ImportMap,
	IndexAttributes,
	indexedtrait,
	IntegrationStatus,
	IntelligentMemory,
	InteractionForEmail,
	InternalAddress,
	InternalCatalogAssignment,
	InterProcessLock,
	InvalidDependency,
	IsvConfig,
	KbArticle,
	KbArticleComment,
	KbArticleTemplate,
	KeyVaultReference,
	KnowledgeArticle,
	KnowledgeArticlesCategories,
	KnowledgeArticleViews,
	KnowledgeBaseRecord,
	KnowledgeFAQ,
	KnowledgeSearchModel,
	KnowledgeSourceConsumer,
	KnowledgeSourceProfile,
	LanguageLocale,
	LanguageProvisioningState,
	Letter,
	License,
	LocalConfigStore,
	LookUpMapping,
	Mailbox,
	MailboxStatistics,
	MailboxTrackingCategory,
	MailboxTrackingFolder,
	MailMergeTemplate,
	mainfewshot,
	makerfewshot,
	ManagedIdentity,
	ManagedProperty,
	MaskingRule,
	MCPServer,
	MCPTool,
	MetadataDifference,
	MetadataForArchival,
	Metric,
	MobileOfflineProfile,
	mobileofflineprofileextension,
	MobileOfflineProfileItem,
	MobileOfflineProfileItemAssociation,
	mobileofflineprofileitemfilter,
	MonthlyFiscalCalendar,
	msdyn_AIBDataset,
	msdyn_AIBDatasetFile,
	msdyn_AIBDatasetRecord,
	msdyn_AIBDatasetsContainer,
	msdyn_AIBFeedbackLoop,
	msdyn_AIBFile,
	msdyn_AIBFileAttachedData,
	msdyn_AIConfiguration,
	msdyn_aiconfiguration_documenttemplate,
	msdyn_aiconfigurationsearch,
	msdyn_AIDataProcessingEvent,
	msdyn_aidocumenttemplate,
	msdyn_AIEvaluationConfiguration,
	msdyn_AIEvaluationMetric,
	msdyn_AIEvaluationRun,
	msdyn_AIEvent,
	msdyn_AIFpTrainingDocument,
	msdyn_AIModel,
	msdyn_aimodelcatalog,
	msdyn_AIOdImage,
	msdyn_AIOdLabel,
	msdyn_aiodlabel_msdyn_aiconfiguration,
	msdyn_AIOdTrainingBoundingBox,
	msdyn_AIOdTrainingImage,
	msdyn_AIOptimization,
	msdyn_AIOptimizationPrivateData,
	msdyn_AITemplate,
	msdyn_AITestCase,
	msdyn_AITestCaseDocument,
	msdyn_AITestCaseInput,
	msdyn_AITestRun,
	msdyn_AITestRunBatch,
	msdyn_analysiscomponent,
	msdyn_analysisjob,
	msdyn_analysisoverride,
	msdyn_analysisresult,
	msdyn_analysisresultdetail,
	msdyn_appinsightsmetadata,
	msdyn_componentlayer,
	msdyn_componentlayerdatasource,
	msdyn_connectordatasource,
	msdyn_connectordatasource_environmentva,
	msdyn_CopilotInteractions,
	msdyn_customcontrolextendedsettings,
	msdyn_dataflow,
	msdyn_dataflow_datalakefolder,
	msdyn_DataflowConnectionReference,
	msdyn_dataflowrefreshhistory,
	msdyn_DataflowTemplate,
	msdyn_datalakeds,
	msdyn_DataWorkspace,
	msdyn_dmsrequest,
	msdyn_dmsrequeststatus,
	msdyn_dmssyncrequest,
	msdyn_dmssyncstatus,
	msdyn_entitylinkchatconfiguration,
	msdyn_entityrefreshhistory,
	msdyn_favoriteknowledgearticle,
	msdyn_federatedarticle,
	msdyn_federatedarticleincident,
	msdyn_FileUpload,
	msdyn_flow_actionapprovalmodel,
	msdyn_flow_actionapprovalmodel_systemuser,
	msdyn_flow_actionapprovalmodel_team,
	msdyn_flow_approval,
	msdyn_flow_approvalrequest,
	msdyn_flow_approvalresponse,
	msdyn_flow_approvalstep,
	msdyn_flow_awaitallactionapprovalmodel,
	msdyn_flow_awaitallactionapprovalmodel_team,
	msdyn_flow_awaitallactionapprovalmodel_user,
	msdyn_flow_awaitallapprovalmodel,
	msdyn_flow_awaitallmodel_systemuser,
	msdyn_flow_awaitallmodel_team,
	msdyn_flow_basicapprovalmodel,
	msdyn_flow_basicapprovalmodel_systemuser,
	msdyn_flow_basicapprovalmodel_team,
	msdyn_flow_flowapproval,
	msdyn_FormMapping,
	msdyn_function,
	msdyn_healthcare_feedback,
	msdyn_helppage,
	msdyn_historicalcaseharvestbatch,
	msdyn_historicalcaseharvestrun,
	msdyn_InsightsStoreVirtualEntity,
	msdyn_integratedsearchprovider,
	msdyn_interimupdateknowledgearticle,
	msdyn_kalanguagesetting,
	msdyn_kbattachment,
	msdyn_kmfederatedsearchconfig,
	msdyn_kmpersonalizationsetting,
	msdyn_knowledgearticlecustomentity,
	msdyn_knowledgearticleimage,
	msdyn_knowledgearticletemplate,
	msdyn_knowledgeassetconfiguration,
	msdyn_knowledgeconfiguration,
	msdyn_knowledgeharvestjobrecord,
	msdyn_knowledgeinteractioninsight,
	msdyn_knowledgemanagementsetting,
	msdyn_knowledgepersonalfilter,
	msdyn_knowledgesearchfilter,
	msdyn_knowledgesearchinsight,
	msdyn_mobileapp,
	msdyn_modulerundetail,
	msdyn_msdyn_kbattachment_knowledgearticle,
	msdyn_nonrelationalds,
	msdyn_ObjectDetectionProduct,
	msdyn_odatav4ds,
	msdyn_onlineshopperintention,
	msdyn_Plan,
	msdyn_PlanArtifact,
	msdyn_PlanAttachment,
	msdyn_pmanalysishistory,
	msdyn_pmbusinessruleautomationconfig,
	msdyn_pmcalendar,
	msdyn_pmcalendarversion,
	msdyn_pminferredtask,
	msdyn_pmprocessextendedmetadataversion,
	msdyn_pmprocesstemplate,
	msdyn_pmprocessusersettings,
	msdyn_pmprocessversion,
	msdyn_pmrecording,
	msdyn_pmsimulation,
	msdyn_pmtab,
	msdyn_pmtemplate,
	msdyn_pmview,
	msdyn_qna,
	msdyn_richtextfile,
	msdyn_salesforcestructuredobject,
	msdyn_salesforcestructuredqnaconfig,
	msdyn_schedule,
	msdyn_serviceconfiguration,
	msdyn_slakpi,
	msdyn_solutioncomponentcountdatasource,
	msdyn_solutioncomponentcountsummary,
	msdyn_solutioncomponentdatasource,
	msdyn_solutioncomponentsummary,
	msdyn_solutionhealthrule,
	msdyn_solutionhealthruleargument,
	msdyn_solutionhealthruleset,
	msdyn_solutionhistory,
	msdyn_solutionhistorydatasource,
	msdyn_timelinepin,
	msdyn_tour,
	msdyn_virtualtablecolumncandidate,
	msdyn_workflowactionstatus,
	msdynce_botcontent,
	MsGraphResourceToSubscription,
	mspcat_CatalogSubmissionFiles,
	mspcat_PackageStore,
	mspp_accesscontrolrule_publishingstate,
	mspp_adplacement,
	mspp_columnpermission,
	mspp_columnpermissionprofile,
	mspp_columnpermissionprofile_webrole,
	mspp_contentsnippet,
	mspp_entityform,
	mspp_entityformmetadata,
	mspp_entitylist,
	mspp_entitypermission,
	mspp_entitypermission_webrole,
	mspp_pagetemplate,
	mspp_pollplacement,
	mspp_powerpagescoreentityds,
	mspp_publishingstate,
	mspp_publishingstatetransitionrule,
	mspp_publishingstatetransitionrule_webrole,
	mspp_redirect,
	mspp_shortcut,
	mspp_sitemarker,
	mspp_sitesetting,
	mspp_webfile,
	mspp_webform,
	mspp_webformmetadata,
	mspp_webformstep,
	mspp_weblink,
	mspp_weblinkset,
	mspp_webpage,
	mspp_webpageaccesscontrolrule,
	mspp_webpageaccesscontrolrule_webrole,
	mspp_webrole,
	mspp_website,
	mspp_websiteaccess,
	mspp_websiteaccess_webrole,
	mspp_websitelanguage,
	mspp_webtemplate,
	MultiEntitySearch,
	MultiEntitySearchEntities,
	MultiSelectAttributeOptionValues,
	NavigationSetting,
	NewProcess,
	nlsqregistration,
	Notification,
	OfficeDocument,
	OfficeGraphDocument,
	OfflineCommandDefinition,
	_OptionSet,
	Organization,
	organizationdatasyncfnostate,
	organizationdatasyncstate,
	organizationdatasyncsubscription,
	organizationdatasyncsubscriptionentity,
	organizationdatasyncsubscriptionfnotable,
	OrganizationSetting,
	OrganizationStatistic,
	OrganizationUI,
	OrgInsightsMetric,
	OrgInsightsNotification,
	Owner,
	OwnerMapping,
	_package,
	package_solution,
	packagehistory,
	PartnerApplication,
	PDFSetting,
	PersonalDocumentTemplate,
	PhoneCall,
	PickListMapping,
	plannerbusinessscenario,
	PlannerSyncAction,
	plugin,
	PluginAssembly,
	PluginPackage,
	PluginTraceLog,
	PluginType,
	PluginTypeStatistic,
	Position,
	Post,
	PostComment,
	PostFollow,
	PostLike,
	PostRegarding,
	PostRole,
	powerbidataset,
	powerbidatasetapdx,
	powerbimashupparameter,
	powerbireport,
	powerbireportapdx,
	powerfxrule,
	powerpagecomponent,
	powerpagecomponent_mspp_webrole_account,
	powerpagecomponent_mspp_webrole_contact,
	powerpagecomponent_powerpagecomponent,
	powerpagecomponent_webrole_systemuser,
	PowerPagesDDOSAlert,
	powerpagesite,
	powerpagesite_dvfilesearch,
	powerpagesite_dvtablesearch,
	powerpagesitelanguage,
	powerpagesitepublished,
	PowerPagesLog,
	PowerPagesManagedIdentity,
	PowerPagesScanReport,
	PowerPagesSiteAIFeedback,
	powerpagessourcefile,
	PrincipalAttributeAccessMap,
	PrincipalEntityMap,
	PrincipalObjectAccess,
	PrincipalObjectAccessReadSnapshot,
	PrincipalObjectAttributeAccess,
	PrincipalSyncAttributeMap,
	Privilege,
	PrivilegeCheckerLog,
	PrivilegeCheckerRun,
	PrivilegeObjectTypeCodes,
	PrivilegesRemovalSetting,
	processorregistration,
	ProcessSession,
	ProcessStage,
	processstageparameter,
	ProcessTrigger,
	ProvisionLanguageForUser,
	Publisher,
	PublisherAddress,
	purviewlabelinfo,
	purviewlabelsynccache,
	QuarterlyFiscalCalendar,
	Queue,
	QueueItem,
	QueueItemCount,
	QueueMemberCount,
	QueueMembership,
	recentlyused,
	RecommendedDocument,
	reconciliationentityinfo,
	reconciliationentitystepinfo,
	reconciliationinfo,
	RecordCountSnapshot,
	RecordFilter,
	RecurrenceRule,
	RecurringAppointmentMaster,
	RecycleBinConfig,
	Relationship,
	RelationshipAttribute,
	RelationshipRole,
	RelationshipRoleMap,
	ReplicationBacklog,
	Report,
	ReportCategory,
	ReportEntity,
	ReportLink,
	ReportParameter,
	ReportVisibility,
	retaineddataexcel,
	retentioncleanupinfo,
	retentioncleanupoperation,
	retentionconfig,
	retentionfailuredetail,
	retentionoperation,
	retentionoperationdetail,
	retentionsuccessdetail,
	revokeinheritedaccessrecordstracker,
	RibbonClientMetadata,
	RibbonCommand,
	RibbonContextGroup,
	RibbonCustomization,
	RibbonDiff,
	RibbonMetadataToProcess,
	RibbonRule,
	RibbonTabToCommandMap,
	Role,
	RoleEditorLayout,
	RolePrivileges,
	RoleTemplate,
	RoleTemplatePrivileges,
	RollupField,
	RollupJob,
	RollupProperties,
	RoutingRule,
	RoutingRuleItem,
	RuntimeDependency,
	sa_SuggestedAction,
	sa_SuggestedActionCriteria,
	SavedOrgInsightsConfiguration,
	SavedQuery,
	SavedQueryVisualization,
	savingrule,
	SdkMessage,
	SdkMessageFilter,
	SdkMessagePair,
	SdkMessageProcessingStep,
	SdkMessageProcessingStepImage,
	SdkMessageProcessingStepSecureConfig,
	SdkMessageRequest,
	SdkMessageRequestField,
	SdkMessageResponse,
	SdkMessageResponseField,
	searchattributesettings,
	searchcustomanalyzer,
	searchrelationshipsettings,
	SearchResultsCache,
	searchtelemetry,
	SemiAnnualFiscalCalendar,
	sensitivitylabel,
	sensitivitylabelattributemapping,
	ServiceEndpoint,
	ServicePlan,
	ServicePlanAppModules,
	ServicePlanCustomControl,
	ServicePlanMapping,
	SettingDefinition,
	SharedLinkSetting,
	sharedobject,
	SharedObjectsForRead,
	sharedworkspace,
	sharedworkspaceaccesstoken2,
	sharedworkspacepool,
	SharePointData,
	SharePointDocument,
	SharePointDocumentLocation,
	SharePointManagedIdentity,
	SharePointSite,
	sideloadedaiplugin,
	signal,
	signalregistration,
	SimilarityRule,
	SiteMap,
	SLA,
	SLAItem,
	SLAKPIInstance,
	SocialActivity,
	SocialInsightsConfiguration,
	SocialProfile,
	Solution,
	SolutionComponent,
	solutioncomponentattributeconfiguration,
	solutioncomponentbatchconfiguration,
	solutioncomponentconfiguration,
	SolutionComponentDefinition,
	solutioncomponentrelationshipconfiguration,
	SolutionHistoryData,
	SourceControlBranchConfiguration,
	SourceControlComponent,
	SourceControlComponentPayload,
	SourceControlConfiguration,
	SqlEncryptionAudit,
	StagedAttributeLookupValue,
	StagedAttributePicklistValue,
	StagedEntity,
	StagedEntityAttribute,
	StagedEntityRelationship,
	StagedEntityRelationshipRelationships,
	StagedEntityRelationshipRole,
	StagedMetadataAsyncOperation,
	StagedOptionSet,
	StagedRelationship,
	StagedRelationshipExtraCondition,
	StagedSourceControlComponent,
	StagedViewAttribute,
	StageSolutionUpload,
	StatusMap,
	StringMap,
	Subject,
	Subscription,
	SubscriptionClients,
	SubscriptionManuallyTrackedObject,
	SubscriptionStatisticsOffline,
	SubscriptionStatisticsOutlook,
	SubscriptionSyncEntryOffline,
	SubscriptionSyncEntryOutlook,
	SubscriptionSyncInfo,
	SubscriptionTrackingDeletedObject,
	SuggestionCardTemplate,
	supportusertable,
	synapsedatabase,
	synapselinkexternaltablestate,
	synapselinkprofile,
	synapselinkprofileentity,
	synapselinkprofileentitystate,
	synapselinkschedule,
	SyncAttributeMapping,
	SyncAttributeMappingProfile,
	SyncError,
	SystemApplicationMetadata,
	SystemForm,
	SystemUser,
	SystemUserAuthorizationChangeTracker,
	SystemUserBusinessUnitEntityMap,
	SystemUserLicenses,
	SystemUserManagerMap,
	SystemUserPrincipals,
	SystemUserProfiles,
	SystemUserRoles,
	SystemUserSyncMappingProfiles,
	tag,
	taggedflowsession,
	taggedprocess,
	Task,
	tdsmetadata,
	Team,
	TeamMembership,
	teammobileofflineprofilemembership,
	TeamProfiles,
	TeamRoles,
	TeamSyncAttributeMappingProfiles,
	TeamTemplate,
	Template,
	Territory,
	TextAnalyticsEntityMapping,
	textdatarecordsindexingstatus,
	Theme,
	TimeStampDateMapping,
	TimeZoneDefinition,
	TimeZoneLocalizedName,
	TimeZoneRule,
	ToolingGateway,
	ToolingGatewayMCPServer,
	TraceAssociation,
	TraceLog,
	TraceRegarding,
	trait,
	traitregistration,
	TransactionCurrency,
	TransformationMapping,
	TransformationParameterMapping,
	TranslationProcess,
	UnresolvedAddress,
	unstructuredfilesearchentity,
	unstructuredfilesearchrecord,
	unstructuredfilesearchrecordstatus,
	UntrackedEmail,
	UserApplicationMetadata,
	UserEntityInstanceData,
	UserEntityUISettings,
	UserFiscalCalendar,
	UserForm,
	UserMapping,
	usermobileofflineprofilemembership,
	UserQuery,
	UserQueryVisualization,
	userrating,
	UserSearchFacet,
	UserSettings,
	uxagentcomponent,
	uxagentcomponentrevision,
	uxagentproject,
	uxagentprojectfile,
	v4_accountbpf,
	v4_Sql_DataSource,
	viewasexamplequestion,
	VirtualEntityMetadata,
	WebResource,
	WebWizard,
	WizardAccessPrivilege,
	WizardPage,
	Workflow,
	workflowbinary,
	workflowcardconnections,
	WorkflowDependency,
	WorkflowLog,
	WorkflowMetadata,
	WorkflowWaitSubscription,
	workqueue,
	workqueueitem
} as const;

