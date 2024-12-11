var XrmEnum = {
    /**
    * Enumeration of entity form states/types.
    */
    FormType: {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 6,
        /**
         * @deprecated QuickCreate has been deprecated
         */
        QuickCreate: 5,
        /**
         * @deprecated ReadOptimized has been deprecated.
         */
        ReadOptimized: 11,
    },
    /**
     * Possible state of form data load.
     * @see: {@link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs#return-value External Link: getEventArgs (Client API reference)}
     */
    FormDataLoadState: {
        InitialLoad: 1,
        Save: 2,
        Refresh: 3,
    },
    /**
     * Enumeration of entity form save modes.
     */
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
        Disqualify: 15,
    },
    /**
     * Enumeration of stage categories.
     */
    StageCategory: {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6,
    },
    /**
     * Enumeration of grid control context resolutions.
     */
    GridControlContext: {
        Unknown: 0,
        RibbonContextForm: 1,
        RibbonContextListing: 2,
        FormContextUnrelated: 3,
        FormContextRelated: 4,
    },
    /**
     * Enumeration of grid client type
     */
    GridClient: {
        Browser: 0,
        MobileApplication: 1,
    },
    /**
     * An enumeration for view types.
     */
    ViewType: {
        SystemView: 1039,
        UserView: 4230,
    },
    /**
     * An enumeration for Attribute Type metadata
     */
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
        EntityName: 20,
    },
    /**
     * An enumeration for Attribute required level metadata
     */
    AttributeRequiredLevel: {
        None: 0,
        SystemRequired: 1,
        ApplicationRequired: 2,
        Recommended: 3,
    },
    /**
     * An enumeration for open file dialog options
     */
    OpenFileOptions: {
        Open: 1,
        Save: 2,
    },
    /**
     * An enumeration for window positions when opening a new window
     */
    WindowPositions: {
        Center: 1,
        Side: 2,
    },
    /**
     * An enumeration for Relationship Type Metadata
     */
    RelationshipType: {
        OneToMany: 0,
        ManyToMany: 1,
    },
    /**
     * An enumeration for Relationship Role Type Metadata
     */
    RoleType: {
        Referencing: 1,
        AssociationEntity: 2,
    },
    ClientFormFactor: {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3,
    },
    /**
     * Constant Enum: Client Types for: {@link ClientContext.getClient clientContext.getClient()}.
     * @see: {@link Xrm.Client}
     */
    Client: {
        Web: "Web",
        Outlook: "Outlook",
        Mobile: "Mobile",
        UnifiedServiceDesk: "UnifiedServiceDesk",
        USD: "UnifiedServiceDesk",
    },
    /**
     * Constant Enum: Client States for: {@link Xrm.ClientContext.getClientState clientContext.getClientState()}.
     * @see: {@link Xrm.ClientState}
     */
    ClientState: {
        Online: "Online",
        Offline: "Offline",
    },
    /**
     * Constant Enum: Display States for setDisplayState() on: {@link Controls.ProcessControl.setDisplayState Processes} and: {@link Controls.Tab.setDisplayState Tabs}.
     * @see: {@link Xrm.DisplayState}
     */
    DisplayState: {
        Expanded: "expanded",
        Collapsed: "collapsed",
    },
    /**
     * Constant Enum:: {@link Entity.save Entity} Save Modes
     * @see: {@link Xrm.EntitySaveMode}
     * @see: {@link Entity}
     * @see: {@link Entity.save}
     */
    EntitySaveMode: {
        SaveAndClose: "saveandclose",
        SaveAndNew: "saveandnew",
    },
    /**
     * Constant Enum: Form Notification Levels for: {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
     * @see: {@link Xrm.FormNotificationLevel}
     */
    FormNotificationLevel: {
        Error: "ERROR",
        Info: "INFO",
        Warning: "WARNING",
    },
    /**
     * Constant Enum: App Notification Levels for: {@link App.addGlobalNotification Xrm.App.addGlobalNotification()}.
     * @see: {@link Xrm.AppNotificationLevel}
     */
    AppNotificationLevel: {
        Success: 1,
        Error: 2,
        Warning: 3,
        Information: 4,
    },
    /**
     * Constant Enum: Submit Modes for: {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
     * @see: {@link Xrm.SubmitMode}
     */
    SubmitMode: {
        Always: "always",
        Dirty: "dirty",
        Never: "never",
    },
    /**
     * Constant Enum: Themes for: {@link GlobalContext.getCurrentTheme globalContext.getCurrentTheme()}.
     * @remarks getCurrentTheme() does not work with Dynamics CRM for tablets or in the unified interface.
     */
    Theme: {
        Default: "default",
        Office12Blue: "Office12Blue",
        Office14Silver: "Office14Silver",
    },
    /**
     * Constant Enum: Settings for: {@link GlobalContext.getAdvancedConfigSetting globalContext.getAdvancedConfigSetting(setting)}
     */
    AdvancedConfigSettingOption: {
        MaxChildIncidentNumber: "MaxChildIncidentNumber",
        MaxIncidentMergeNumber: "MaxIncidentMergeNumber",
    },
    /**
     * Constant Enum: Requirement Level for: {@link Attributes.Attribute.getRequiredLevel Attributes.Attribute.getRequiredLevel()} and
     *: {@link Attributes.Attribute.setRequiredLevel Attributes.Attribute.setRequiredLevel()}.
     * @see: {@link Xrm.Attributes.RequirementLevel}
     */
    AttributeRequirementLevel: {
        None: "none",
        Recommended: "recommended",
        Required: "required",
    },
    /**
     * Constant Enum: Date attribute formats for Attributes.Attribute.getFormat(), used by: {@link Attributes.DateAttribute DateAttribute}.
     * @see: {@link Xrm.Attributes.DateAttributeFormat}
     */
    DateAttributeFormat: {
        Date: "date",
        DateTime: "datetime",
    },
    /**
     * Constant Enum: Integer attribute formats for Attributes.Attribute.getFormat(), used by: {@link Attributes.NumberAttribute NumberAttribute}.
     * @see: {@link Xrm.Attributes.IntegerAttributeFormat}
     */
    IntegerAttributeFormat: {
        Duration: "duration",
        None: "none",
    },
    /**
     * Constant Enum: OptionSet attribute formats for Attributes.Attribute.getFormat(), used by: {@link Attributes.OptionSetAttribute OptionSetAttribute}.
     * @see: {@link Xrm.Attributes.OptionSetAttributeFormat}
     */
    OptionSetAttributeFormat: {
        Language: "language",
        TimeZone: "timezone",
    },
    /**
     * Constant Enum: String attribute formats for Attributes.Attribute.getFormat(), used by: {@link Attributes.StringAttribute StringAttribute}.
     * @see: {@link Xrm.Attributes.StringAttributeFormat}
     */
    StringAttributeFormat: {
        Email: "email",
        Phone: "phone",
        Text: "text",
        TextArea: "textarea",
        TickerSymbol: "tickersymbol",
        URL: "url",
    },
    /**
     * Constant Enum: Attribute types for: {@link Attributes.Attribute.setDisplayState()}.
     * @see: {@link Xrm.Attributes.AttributeType}
     */
    AttributeType: {
        Boolean: "boolean",
        DateTime: "datetime",
        Decimal: "decimal",
        Double: "double",
        Integer: "integer",
        Lookup: "lookup",
        Memo: "memo",
        Money: "money",
        MultiOptionSet: "multiselectoptionset",
        OptionSet: "optionset",
        String: "string",
    },
    /**
     * Constant Enum: Control types for: {@link Controls.Control.getControlType Controls.Control.getControlType()}.
     * @see: {@link Xrm.Controls.ControlType}
     */
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
        QuickForm: "quickform",
    },
    /**
     * Constant Enum: Direction types for a process stage change event
     * @see: {@link ProcessFlow.StageChangeDirection}
     */
    StageChangeDirection: {
        Next: "Next",
        Previous: "Previous",
    },
    /**
     * Constant Enum: Status for: {@link ProcessFlow.Stage.getStatus Stage.getStatus()}.
     * @see: {@link ProcessFlow.StageStatus}
     */
    StageStatus: {
        Active: "active",
        Inactive: "inactive",
    },
    /**
     * Constant Enum: Status for: {@link ProcessFlow.Process.getStatus Process.getStatus()}.
     * @see: {@link ProcessFlow.ProcessStatus}
     */
    ProcessStatus: {
        Active: "active",
        Aborted: "aborted",
        Finished: "finished",
    },
    /**
     * Constant Enum: Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
     * @see: {@link Xrm.Url.CmdBarDisplay}
     */
    CmdBarDisplay: {
        True: "true",
        False: "false",
    },
    /**
     * Constant Enum: Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
     * @see: {@link Xrm.Url.NavBarDisplay}
     */
    NavBarDisplay: {
        Entity: "entity",
        On: "on",
        Off: "off",
    },
    /**
     * Constant Enum: Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
     * @see: {@link Xrm.Url.ReportAction}
     */
    ReportAction: {
        Filter: "filter",
        Run: "run",
    },
    /**
     * Constant Enum: Possible file types for Xrm.Device.pickFile options
     * @see: {@link Xrm.Device.PickFileTypes}
     */
    DevicePickFileType: {
        Audio: "audio",
        Video: "video",
        Image: "image",
    },
    OpenSearchResultMode: {
        Inline: "Inline",
        Popup: "Popup",
    }
}