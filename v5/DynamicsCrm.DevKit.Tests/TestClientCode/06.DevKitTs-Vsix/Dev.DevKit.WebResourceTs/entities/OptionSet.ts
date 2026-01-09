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
	Account,
	Contact,
	Team
} as const;

