/**
 * OptionSet.ts - Centralized OptionSet definitions
 * All Global and Entity-specific OptionSets in one place
 */

// ============================================================================
// GLOBAL OptionSets
// ============================================================================
const GlobalOptionSetValues = {
    AdvancedConfigSetting: Object.freeze({ MaxChildIncidentNumber: 'MaxChildIncidentNumber', MaxIncidentMergeNumber: 'MaxIncidentMergeNumber' }),
    ClientName: Object.freeze({ Web: 'Web', Outlook: 'Outlook', Mobile: 'Mobile' }),
    ClientState: Object.freeze({ Online: 'Online', Offline: 'Offline' }),
    FieldAttributeType: Object.freeze({ Boolean: 'boolean', DateTime: 'datetime', Decimal: 'decimal', Double: 'double', Integer: 'integer', Lookup: 'lookup', Memo: 'memo', Money: 'money', MultiOptionSet: 'multioptionset', OptionSet: 'optionset', String: 'string' }),
    FieldControlType: Object.freeze({ Standard: 'standard', Iframe: 'iframe', KbSearch: 'kbsearch', Lookup: 'lookup', MultiSelectOptionset: 'multiselectoptionset', Notes: 'notes', OptionSet: 'optionset', QuickForm: 'quickform', SubGrid: 'subgrid', TimerControl: 'timercontrol', TimelineWall: 'timelinewall', WebResource: 'webresource' }),
    FieldFormat: Object.freeze({ Date: 'date', DateTime: 'datetime', Duration: 'duration', Email: 'email', Language: 'language', None: 'none', TextArea: 'textarea', Text: 'text', TickerSymbol: 'tickersymbol', Phone: 'phone', TimeZone: 'timezone', Url: 'url' }),
    FieldNotificationLevel: Object.freeze({ Error: 'ERROR', Recommendation: 'RECOMMENDATION' }),
    FieldRequiredLevel: Object.freeze({ None: 'none', Required: 'required', Recommended: 'recommended' }),
    FieldSubmitMode: Object.freeze({ Always: 'always', Never: 'never', Dirty: 'dirty' }),
    FormFactor: Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 }),
    FormNotificationLevel: Object.freeze({ Error: 'ERROR', Warning: 'WARNING', Info: 'INFO' }),
    FormType: Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 }),
    FullNameConventionCode: Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 }),
    GridType: Object.freeze({ HomePageGrid: 1, Subgrid: 2 }),
    OpenFileOption: Object.freeze({ Open: 1, Save: 2 }),
    ProcessCategory: Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 }),
    ProcessDisplayState: Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed', Floating: 'floating' }),
    ProcessStatus: Object.freeze({ Active: 'active', Aborted: 'aborted', Finished: 'finished' }),
    SaveMode: Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 }),
    SaveOption: Object.freeze({ SaveAndClose: 'saveandclose', SaveAndNew: 'saveandnew' }),
    SidePaneState: Object.freeze({ Collapsed: 0, Expanded: 1 }),
    TabContentType: Object.freeze({ CardSections: 'cardSections', SingleComponent: 'singleComponent' }),
    TabDisplayState: Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed' }),
    TimerState: Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 }),
} as const;

// ============================================================================
// ENTITY OptionSets
// ============================================================================

/** Account OptionSets */
const AccountOptionSetValues = {
    /** Industry Code OptionSet */
    IndustryCode: Object.freeze({
        Accounting: 1,
        Consulting: 7,
        Financial: 16,
        Insurance: 20,
        Technology: 12
    }),
    /** Custom MultiOptionSet - v4_Categories */
    v4_Categories: Object.freeze({
        Category_A: 100000000,
        Category_B: 100000001,
        Category_C: 100000002,
        Category_D: 100000003
    }),
} as const;

// ============================================================================
// RUNTIME: Populate globalThis.OptionSet
// ============================================================================
(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};
Object.assign((globalThis as any).OptionSet, GlobalOptionSetValues);
(globalThis as any).OptionSet.Account = AccountOptionSetValues;

// ============================================================================
// TypeScript Declarations for IntelliSense
// ============================================================================
declare global {
    namespace OptionSet {
        // Global OptionSets
        const AdvancedConfigSetting: typeof GlobalOptionSetValues.AdvancedConfigSetting;
        const ClientName: typeof GlobalOptionSetValues.ClientName;
        const ClientState: typeof GlobalOptionSetValues.ClientState;
        const FieldAttributeType: typeof GlobalOptionSetValues.FieldAttributeType;
        const FieldControlType: typeof GlobalOptionSetValues.FieldControlType;
        const FieldFormat: typeof GlobalOptionSetValues.FieldFormat;
        const FieldNotificationLevel: typeof GlobalOptionSetValues.FieldNotificationLevel;
        const FieldRequiredLevel: typeof GlobalOptionSetValues.FieldRequiredLevel;
        const FieldSubmitMode: typeof GlobalOptionSetValues.FieldSubmitMode;
        const FormFactor: typeof GlobalOptionSetValues.FormFactor;
        const FormNotificationLevel: typeof GlobalOptionSetValues.FormNotificationLevel;
        const FormType: typeof GlobalOptionSetValues.FormType;
        const FullNameConventionCode: typeof GlobalOptionSetValues.FullNameConventionCode;
        const GridType: typeof GlobalOptionSetValues.GridType;
        const OpenFileOption: typeof GlobalOptionSetValues.OpenFileOption;
        const ProcessCategory: typeof GlobalOptionSetValues.ProcessCategory;
        const ProcessDisplayState: typeof GlobalOptionSetValues.ProcessDisplayState;
        const ProcessStatus: typeof GlobalOptionSetValues.ProcessStatus;
        const SaveMode: typeof GlobalOptionSetValues.SaveMode;
        const SaveOption: typeof GlobalOptionSetValues.SaveOption;
        const SidePaneState: typeof GlobalOptionSetValues.SidePaneState;
        const TabContentType: typeof GlobalOptionSetValues.TabContentType;
        const TabDisplayState: typeof GlobalOptionSetValues.TabDisplayState;
        const TimerState: typeof GlobalOptionSetValues.TimerState;

        // Entity OptionSets
        namespace Account {
            const IndustryCode: typeof AccountOptionSetValues.IndustryCode;
            const v4_Categories: typeof AccountOptionSetValues.v4_Categories;
        }
    }
}

// Export for module usage
export { GlobalOptionSetValues, AccountOptionSetValues };
