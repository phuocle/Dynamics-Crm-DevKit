//xrm: 9.0.44
var XrmEnum = {
	FormType: {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 6,
        QuickCreate: 5,
        ReadOptimized: 11
	},
	SaveMode: {
        Save: 1,
        SaveAndClose: 2,
        SaveAndNew: 59,
        AutoSave: 70,
        SaveAsCompleted: 58,
        Deactivate: 5,
        Reactivate: 6,
        Assign: 47,
        Send: 7,
        Qualify: 16,
        Disqualify: 15
	},
	StageCategory: {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
	},
	GridControlContext: {
        Unknown: 0,
        RibbonContextForm: 1,
        RibbonContextListing: 2,
        FormContextUnrelated: 3,
        FormContextRelated: 4
	},
	ViewType: {
        SystemView: 1039,
        UserView: 4230
	},
	AttributeTypeCode: {
        Boolean: 0,
        Customer: 1,
        DateTime: 2,
        Decimal: 3,
        Double: 4,
        Integer: 5,
        Lookup: 6,
        Memo: 7,
        Money: 8,
        Owner: 9,
        PartyList: 10,
        Picklist: 11,
        State: 12,
        Status: 13,
        String: 14,
        Uniqueidentifier: 15,
        CalendarRules: 16,
        Virtual: 17,
        BigInt: 18,
        ManagedProperty: 19,
        EntityName: 20
	},
	AttributeRequiredLevel: {
        None: 0,
        SystemRequired: 1,
        ApplicationRequired: 2,
        Recommended: 3
	},
	OpenFileOptions: {
        Open: 1,
        Save: 2
	},
	WindowPositions: {
        Center: 1,
        Side: 2
	},
	RelationshipType: {
        OneToMany: 0,
        ManyToMany: 1
	},
	RoleType: {
        Referencing: 1,
        AssociationEntity: 2
	},
	ClientFormFactor: {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
	},
	Client: {
        Web: "Web",
        Outlook: "Outlook",
        Mobile: "Mobile",
        UnifiedServiceDesk: "UnifiedServiceDesk",
        USD: "UnifiedServiceDesk"
	},
	ClientState: {
        Online: "Online",
        Offline: "Offline"
	},
	DisplayState: {
        Expanded: "expanded",
        Collapsed: "collapsed"
	},
	EntitySaveMode: {
        SaveAndClose: "saveandclose",
        SaveAndNew: "saveandnew"
	},
	FormNotificationLevel: {
        Error: "ERROR",
        Info: "INFO",
        Warning: "WARNING"
	},
	SubmitMode: {
        Always: "always",
        Dirty: "dirty",
        Never: "never"
	},
	Theme: {
        Default: "default",
        Office12Blue: "Office12Blue",
        Office14Silver: "Office14Silver"
	},
	AdvancedConfigSettingOption: {
        MaxChildIncidentNumber: "MaxChildIncidentNumber",
        MaxIncidentMergeNumber: "MaxIncidentMergeNumber"
	},
	AttributeRequirementLevel: {
        None: "none",
        Recommended: "recommended",
        Required: "required"
	},
	DateAttributeFormat: {
        Date: "date",
        DateTime: "datetime"
	},
	IntegerAttributeFormat: {
        Duration: "duration",
        None: "none"
	},
	OptionSetAttributeFormat: {
        Language: "language",
        TimeZone: "timezone"
	},
	StringAttributeFormat: {
        Email: "email",
        Phone: "phone",
        Text: "text",
        TextArea: "textarea",
        TickerSymbol: "tickersymbol",
        URL: "url"
	},
	AttributeType: {
        Boolean: "boolean",
        DateTime: "datetime",
        Decimal: "decimal",
        Double: "double",
        Integer: "integer",
        Lookup: "lookup",
        Memo: "memo",
        Money: "money",
        MultiOptionSet: "multioptionset",
        OptionSet: "optionset",
        String: "string"
	},
	StandardControlType: {
        Standard: "standard",
        IFrame: "iframe",
        Lookup: "lookup",
        OptionSet: "optionset",
        MultiSelectOptionSet: "multiselectoptionset",
        SubGrid: "subgrid",
        WebResource: "webresource",
        Notes: "notes",
        TimerControl: "timercontrol",
        KBSearch: "kbsearch",
        TimeLineWall: "timelinewall",
        QuickForm: "quickform"
	},
	StageChangeDirection: {
        Next: "Next",
        Previous: "Previous"
	},
	StageStatus: {
        Active: "active",
        Inactive: "inactive"
	},
	ProcessStatus: {
        Active: "active",
        Aborted: "aborted",
        Finished: "finished"
	},
	CmdBarDisplay: {
        True: "true",
        False: "false"
	},
	NavBarDisplay: {
        Entity: "entity",
        On: "on",
        Off: "off"
	},
	ReportAction: {
        Filter: "filter",
        Run: "run"
	},
	DevicePickFileType: {
        Audio: "audio",
        Video: "video",
        Image: "image"
	}
}