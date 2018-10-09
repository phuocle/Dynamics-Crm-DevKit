var OptionSet = {
    FormType: {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    },
    SaveOption: {
        SaveAndClose: 'saveandclose',
        SaveAndNew: 'saveandnew'
    },
    SaveMode: {
        Save: 1,
        SaveAndClose: 2,
        Deactivate: 5,
        Reactivate: 6,
        Email: 7,
        Disqualify: 15,
        Qualify: 16,
        Assign: 47,
        SaveAsCompleted: 58,
        SaveAndNew: 59,
        AutoSave: 70
    },
    FormNotificationLevel: {
        Error: 'ERROR',
        Warning: 'WARNING',
        Info: 'INFO'
    },
    TabDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
    },
    ProcessDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed',
        Floating: 'floating'
    },
    ProcessStatus: {
        Active: 'active',
        Aborted: 'aborted',
        Finished: 'finished'
    },
    FieldAttributeType: {
        Boolean: 'boolean',
        DateTime: 'datetime',
        Decimal: 'decimal',
        Double: 'double',
        Integer: 'integer',
        Lookup: 'lookup',
        Memo: 'memo',
        Money: 'money',
        MultiOptionSet: 'multioptionset',
        OptionSet: 'optionset',
        String: 'string'
    },
    FieldFormat: {
        Date: 'date',
        DateTime: 'datetime',
        Duration: 'duration',
        Email: 'email',
        Language: 'language',
        None: 'none',
        TextArea: 'textarea',
        Text: 'text',
        TickerSymbol: 'tickersymbol',
        Phone: 'phone',
        TimeZone: 'timezone',
        Url: 'url'
    },
    FieldRequiredLevel: {
        None: 'none',
        Required: 'required',
        Recommended: 'recommended'
    },
    FieldSubmitMode: {
        Always: 'always',
        Never: 'never',
        Dirty: 'dirty'
    },
    FieldControlType: {
        Standard: 'standard',
        Iframe: 'iframe',
        KbSearch: 'kbsearch',
        Lookup: 'lookup',
        MultiSelectOptionset: 'multiselectoptionset',
        Notes: 'notes',
        OptionSet: 'optionset',
        QuickForm: 'quickform',
        SubGrid: 'subgrid',
        TimerControl: 'TimerControl',
        TimelineWall: 'timelinewall',
        WebResource: 'webresource'
    },
    FieldNotificationLevel: {
        Error: 'ERROR',
        Recommendation: 'RECOMMENDATION'
    },
    ProcessCategory: {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
    },
    TimerState: {
        NotSet: 1,
        InProgress: 2,
        Warning: 3,
        Violated: 4,
        Success: 5,
        Expired: 6,
        Canceled: 7,
        Paused: 8
    },
    ClientName: {
        Web: 'Web',
        Outlook: 'Outlook',
        Mobile: 'Mobile'
    },
    ClientState: {
        Online: 'Online',
        Offline: 'Offline'
    },
    FormFactor: {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
    },
    AdvancedConfigSetting: {
        MaxChildIncidentNumber: 'MaxChildIncidentNumber',
        MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
    },
    OpenFileOption: {
        Open: 1,
        Save: 2
    }
};