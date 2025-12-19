/**
 * OptionSet.ts - Centralized OptionSet definitions
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Structure:
 * 1. TypeScript Declarations (for IntelliSense)
 * 2. Runtime Data - Global OptionSets
 * 3. Runtime Data - Entity OptionSets
 */

// ============================================================================
// 1. TypeScript Declarations
// ============================================================================

declare global {
    namespace OptionSet {
        // ===================== Global OptionSets =====================

        /** Information about the advanced configuration settings for the organization */
        const AdvancedConfigSetting: {
            /** MaxChildIncidentNumber */
            readonly MaxChildIncidentNumber: 'MaxChildIncidentNumber';
            /** MaxIncidentMergeNumber */
            readonly MaxIncidentMergeNumber: 'MaxIncidentMergeNumber';
        };

        /** Returns a value to indicate which client the script is executing in */
        const ClientName: {
            /** Web */
            readonly Web: 'Web';
            /** Outlook */
            readonly Outlook: 'Outlook';
            /** Mobile */
            readonly Mobile: 'Mobile';
        };

        /** Returns a value to indicate the state of the client */
        const ClientState: {
            /** Online */
            readonly Online: 'Online';
            /** Offline */
            readonly Offline: 'Offline';
        };

        /** Returns a string value that represents the type of attribute */
        const FieldAttributeType: {
            /** boolean */
            readonly Boolean: 'boolean';
            /** datetime */
            readonly DateTime: 'datetime';
            /** decimal */
            readonly Decimal: 'decimal';
            /** double */
            readonly Double: 'double';
            /** integer */
            readonly Integer: 'integer';
            /** lookup */
            readonly Lookup: 'lookup';
            /** memo */
            readonly Memo: 'memo';
            /** money */
            readonly Money: 'money';
            /** multiselectoptionset */
            readonly MultiOptionSet: 'multioptionset';
            /** optionset */
            readonly OptionSet: 'optionset';
            /** string */
            readonly String: 'string';
        };

        /** A value that categorizes controls */
        const FieldControlType: {
            /** standard - A standard control */
            readonly Standard: 'standard';
            /** iframe - An IFRAME control */
            readonly Iframe: 'iframe';
            /** kbsearch - A knowledge base search control */
            readonly KbSearch: 'kbsearch';
            /** lookup - A lookup control */
            readonly Lookup: 'lookup';
            /** multiselectoptionset - A multi-select option set control */
            readonly MultiSelectOptionset: 'multiselectoptionset';
            /** notes - A notes control */
            readonly Notes: 'notes';
            /** optionset - An option set control */
            readonly OptionSet: 'optionset';
            /** quickform - A quick view control */
            readonly QuickForm: 'quickform';
            /** subgrid - A subgrid control */
            readonly SubGrid: 'subgrid';
            /** timercontrol - A timer control */
            readonly TimerControl: 'timercontrol';
            /** timelinewall - A timeline control (for Unified Interface) */
            readonly TimelineWall: 'timelinewall';
            /** webresource - A web resource control */
            readonly WebResource: 'webresource';
        };

        /** Returns a string value that represents formatting options for the attribute */
        const FieldFormat: {
            /** date */
            readonly Date: 'date';
            /** datetime */
            readonly DateTime: 'datetime';
            /** duration */
            readonly Duration: 'duration';
            /** email */
            readonly Email: 'email';
            /** language */
            readonly Language: 'language';
            /** none */
            readonly None: 'none';
            /** textarea */
            readonly TextArea: 'textarea';
            /** text */
            readonly Text: 'text';
            /** tickersymbol */
            readonly TickerSymbol: 'tickersymbol';
            /** phone */
            readonly Phone: 'phone';
            /** timezone */
            readonly TimeZone: 'timezone';
            /** url */
            readonly Url: 'url';
        };

        /** The type of notification */
        const FieldNotificationLevel: {
            /** ERROR */
            readonly Error: 'ERROR';
            /** RECOMMENDATION */
            readonly Recommendation: 'RECOMMENDATION';
        };

        /** Value indicating whether a value for the attribute is none or required or recommended */
        const FieldRequiredLevel: {
            /** none */
            readonly None: 'none';
            /** required */
            readonly Required: 'required';
            /** recommended */
            readonly Recommended: 'recommended';
        };

        /** Data from the attribute will be submitted when the record is saved */
        const FieldSubmitMode: {
            /** always - The data is always sent with a save */
            readonly Always: 'always';
            /** never - The data is never sent with a save. When this is used, the field(s) in the form for this attribute cannot be edited */
            readonly Never: 'never';
            /** dirty - Default behavior. The data is sent with the save when it has changed */
            readonly Dirty: 'dirty';
        };

        /** Returns information about the kind of device the user is using */
        const FormFactor: {
            /** 0 */
            readonly Unknown: 0;
            /** 1 */
            readonly Desktop: 1;
            /** 2 */
            readonly Tablet: 2;
            /** 3 */
            readonly Phone: 3;
        };

        /** The level of the message, which defines how the message will be displayed */
        const FormNotificationLevel: {
            /** ERROR - Notification will use the system error icon */
            readonly Error: 'ERROR';
            /** WARNING - Notification will use the system warning icon */
            readonly Warning: 'WARNING';
            /** INFO - Notification will use the system info icon */
            readonly Info: 'INFO';
        };

        /** Gets the form type for the record */
        const FormType: {
            /** 0 */
            readonly Undefined: 0;
            /** 1 - Quick Create forms return 1 */
            readonly Create: 1;
            /** 2 */
            readonly Update: 2;
            /** 3 */
            readonly ReadOnly: 3;
            /** 4 */
            readonly Disabled: 4;
            /** 5 */
            readonly BulkEdit: 5;
        };

        /** The full name conventionCode setting of the current organization */
        const FullNameConventionCode: {
            /** 0 */
            readonly LastName_Comma_FirstName: 0;
            /** 1 */
            readonly FirstName_LastName: 1;
            /** 2 */
            readonly LastName_Comma_FirstName_MiddleInitial: 2;
            /** 3 */
            readonly FirstName_MiddleInitial_LastName: 3;
            /** 4 */
            readonly LastName_Comma_FirstName_MiddleName: 4;
            /** 5 */
            readonly FirstName_MiddleName_LastName: 5;
            /** 6 */
            readonly LastName_FirstName: 6;
            /** 7 */
            readonly LastNameFirstName: 7;
        };

        /** The type of grid */
        const GridType: {
            /** 1 */
            readonly HomePageGrid: 1;
            /** 2 */
            readonly Subgrid: 2;
        };

        /** Describing whether to open or save the file */
        const OpenFileOption: {
            /** 1 */
            readonly Open: 1;
            /** 2 */
            readonly Save: 2;
        };

        /** The integer value of the business process flow category */
        const ProcessCategory: {
            /** 0 */
            readonly Qualify: 0;
            /** 1 */
            readonly Develop: 1;
            /** 2 */
            readonly Propose: 2;
            /** 3 */
            readonly Close: 3;
            /** 4 */
            readonly Identify: 4;
            /** 5 */
            readonly Research: 5;
            /** 6 */
            readonly Resolve: 6;
        };

        /** Display state of the business process flow */
        const ProcessDisplayState: {
            /** expanded */
            readonly Expanded: 'expanded';
            /** collapsed */
            readonly Collapsed: 'collapsed';
            /** floating */
            readonly Floating: 'floating';
        };

        /** The integer value status of the stage */
        const ProcessStatus: {
            /** active */
            readonly Active: 'active';
            /** aborted */
            readonly Aborted: 'aborted';
            /** finished */
            readonly Finished: 'finished';
        };

        /** Returns a value indicating how the save event was initiated by the user */
        const SaveMode: {
            /** 1 - All entities */
            readonly Save: 1;
            /** 2 - All entities */
            readonly SaveAndClose: 2;
            /** 5 - All entities */
            readonly Deactivate: 5;
            /** 6 - All entities */
            readonly Reactivate: 6;
            /** 7 - Email */
            readonly Email: 7;
            /** 15 - Lead */
            readonly Disqualify: 15;
            /** 16 - Lead */
            readonly Qualify: 16;
            /** 47 - User or Team */
            readonly Assign: 47;
            /** 58 - Activities */
            readonly SaveAsCompleted: 58;
            /** 59 - All entities */
            readonly SaveAndNew: 59;
            /** 70 - All entities */
            readonly AutoSave: 70;
        };

        /** Specify options for saving the record */
        const SaveOption: {
            /** saveandclose - This is the equivalent of using the Save and Close command */
            readonly SaveAndClose: 'saveandclose';
            /** saveandnew - This is the equivalent of the using the Save and New command */
            readonly SaveAndNew: 'saveandnew';
        };

        /** Display state of the side pane */
        const SidePaneState: {
            /** 0 - Collapsed */
            readonly Collapsed: 0;
            /** 1 - Expanded */
            readonly Expanded: 1;
        };

        /** The control type of tab */
        const TabContentType: {
            /** cardSections: The default tab behavior */
            readonly CardSections: 'cardSections';
            /** singleComponent: Maximizes the content of the first component in the tab */
            readonly SingleComponent: 'singleComponent';
        };

        /** Display state of the tab */
        const TabDisplayState: {
            /** expanded */
            readonly Expanded: 'expanded';
            /** collapsed */
            readonly Collapsed: 'collapsed';
        };

        /** The state of the timer control - This method is only supported for Unified Interface */
        const TimerState: {
            /** 1 */
            readonly NotSet: 1;
            /** 2 */
            readonly InProgress: 2;
            /** 3 */
            readonly Warning: 3;
            /** 4 */
            readonly Violated: 4;
            /** 5 */
            readonly Success: 5;
            /** 6 */
            readonly Expired: 6;
            /** 7 */
            readonly Canceled: 7;
            /** 8 */
            readonly Paused: 8;
        };

        // ===================== Entity OptionSets =====================

        /** Account entity OptionSets */
        namespace Account {
            /** Select the account's primary industry for use in marketing segmentation and demographic analysis */
            const IndustryCode: {
                /** 1 - Accounting */
                readonly Accounting: 1;
                /** 7 - Consulting */
                readonly Consulting: 7;
                /** 16 - Financial */
                readonly Financial: 16;
                /** 20 - Insurance */
                readonly Insurance: 20;
                /** 12 - Technology */
                readonly Technology: 12;
            };
            /** Custom MultiOptionSet - v4_Categories */
            const v4_Categories: {
                /** 100000000 */
                readonly Category_A: 100000000;
                /** 100000001 */
                readonly Category_B: 100000001;
                /** 100000002 */
                readonly Category_C: 100000002;
                /** 100000003 */
                readonly Category_D: 100000003;
            };
        }
    }
}

// ============================================================================
// 2. Runtime Data - Global OptionSets
// ============================================================================

(globalThis as any).OptionSet = (globalThis as any).OptionSet || {};

(globalThis as any).OptionSet.AdvancedConfigSetting = Object.freeze({ MaxChildIncidentNumber: 'MaxChildIncidentNumber', MaxIncidentMergeNumber: 'MaxIncidentMergeNumber' });
(globalThis as any).OptionSet.ClientName = Object.freeze({ Web: 'Web', Outlook: 'Outlook', Mobile: 'Mobile' });
(globalThis as any).OptionSet.ClientState = Object.freeze({ Online: 'Online', Offline: 'Offline' });
(globalThis as any).OptionSet.FieldAttributeType = Object.freeze({ Boolean: 'boolean', DateTime: 'datetime', Decimal: 'decimal', Double: 'double', Integer: 'integer', Lookup: 'lookup', Memo: 'memo', Money: 'money', MultiOptionSet: 'multioptionset', OptionSet: 'optionset', String: 'string' });
(globalThis as any).OptionSet.FieldControlType = Object.freeze({ Standard: 'standard', Iframe: 'iframe', KbSearch: 'kbsearch', Lookup: 'lookup', MultiSelectOptionset: 'multiselectoptionset', Notes: 'notes', OptionSet: 'optionset', QuickForm: 'quickform', SubGrid: 'subgrid', TimerControl: 'timercontrol', TimelineWall: 'timelinewall', WebResource: 'webresource' });
(globalThis as any).OptionSet.FieldFormat = Object.freeze({ Date: 'date', DateTime: 'datetime', Duration: 'duration', Email: 'email', Language: 'language', None: 'none', TextArea: 'textarea', Text: 'text', TickerSymbol: 'tickersymbol', Phone: 'phone', TimeZone: 'timezone', Url: 'url' });
(globalThis as any).OptionSet.FieldNotificationLevel = Object.freeze({ Error: 'ERROR', Recommendation: 'RECOMMENDATION' });
(globalThis as any).OptionSet.FieldRequiredLevel = Object.freeze({ None: 'none', Required: 'required', Recommended: 'recommended' });
(globalThis as any).OptionSet.FieldSubmitMode = Object.freeze({ Always: 'always', Never: 'never', Dirty: 'dirty' });
(globalThis as any).OptionSet.FormFactor = Object.freeze({ Unknown: 0, Desktop: 1, Tablet: 2, Phone: 3 });
(globalThis as any).OptionSet.FormNotificationLevel = Object.freeze({ Error: 'ERROR', Warning: 'WARNING', Info: 'INFO' });
(globalThis as any).OptionSet.FormType = Object.freeze({ Undefined: 0, Create: 1, Update: 2, ReadOnly: 3, Disabled: 4, BulkEdit: 5 });
(globalThis as any).OptionSet.FullNameConventionCode = Object.freeze({ LastName_Comma_FirstName: 0, FirstName_LastName: 1, LastName_Comma_FirstName_MiddleInitial: 2, FirstName_MiddleInitial_LastName: 3, LastName_Comma_FirstName_MiddleName: 4, FirstName_MiddleName_LastName: 5, LastName_FirstName: 6, LastNameFirstName: 7 });
(globalThis as any).OptionSet.GridType = Object.freeze({ HomePageGrid: 1, Subgrid: 2 });
(globalThis as any).OptionSet.OpenFileOption = Object.freeze({ Open: 1, Save: 2 });
(globalThis as any).OptionSet.ProcessCategory = Object.freeze({ Qualify: 0, Develop: 1, Propose: 2, Close: 3, Identify: 4, Research: 5, Resolve: 6 });
(globalThis as any).OptionSet.ProcessDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed', Floating: 'floating' });
(globalThis as any).OptionSet.ProcessStatus = Object.freeze({ Active: 'active', Aborted: 'aborted', Finished: 'finished' });
(globalThis as any).OptionSet.SaveMode = Object.freeze({ Save: 1, SaveAndClose: 2, Deactivate: 5, Reactivate: 6, Email: 7, Disqualify: 15, Qualify: 16, Assign: 47, SaveAsCompleted: 58, SaveAndNew: 59, AutoSave: 70 });
(globalThis as any).OptionSet.SaveOption = Object.freeze({ SaveAndClose: 'saveandclose', SaveAndNew: 'saveandnew' });
(globalThis as any).OptionSet.SidePaneState = Object.freeze({ Collapsed: 0, Expanded: 1 });
(globalThis as any).OptionSet.TabContentType = Object.freeze({ CardSections: 'cardSections', SingleComponent: 'singleComponent' });
(globalThis as any).OptionSet.TabDisplayState = Object.freeze({ Expanded: 'expanded', Collapsed: 'collapsed' });
(globalThis as any).OptionSet.TimerState = Object.freeze({ NotSet: 1, InProgress: 2, Warning: 3, Violated: 4, Success: 5, Expired: 6, Canceled: 7, Paused: 8 });

// ============================================================================
// 3. Runtime Data - Entity OptionSets
// ============================================================================

// --- Account ---
(globalThis as any).OptionSet.Account = (globalThis as any).OptionSet.Account || {};
(globalThis as any).OptionSet.Account.IndustryCode = Object.freeze({ Accounting: 1, Consulting: 7, Financial: 16, Insurance: 20, Technology: 12 });
(globalThis as any).OptionSet.Account.v4_Categories = Object.freeze({ Category_A: 100000000, Category_B: 100000001, Category_C: 100000002, Category_D: 100000003 });

// --- Contact ---
// (globalThis as any).OptionSet.Contact = (globalThis as any).OptionSet.Contact || {};
// (globalThis as any).OptionSet.Contact.GenderCode = Object.freeze({ Male: 1, Female: 2 });

export { };
