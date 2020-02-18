//xrm-mock: 3.4.17
///<reference types='xrm' />
declare namespace XrmMock {
	class AddControlNotificationOptionsMock implements Xrm.Controls.AddControlNotificationOptions {
        actions?: Xrm.Controls.ControlNotificationAction[];
        messages: string[];
        notificationLevel?: Xrm.Controls.NotificationLevel;
        uniqueId: string;
        constructor(components: IAddControlNotificationOptionsComponents);
    }
	interface IAddControlNotificationOptionsComponents {
        actions?: Xrm.Controls.ControlNotificationAction[];
        messages: string[];
        notificationLevel?: Xrm.Controls.NotificationLevel;
        uniqueId: string;
    }
	class AlertStringsMock implements Xrm.Navigation.AlertStrings {
        confirmButtonLabel?: string;
        text: string;
        constructor(text: string, confirmButtonLabel?: string);
    }
	class AppPropertiesMock implements Xrm.AppProperties {
        appId?: string;
        displayName?: string;
        uniqueName?: string;
        url?: string;
        webResourceId?: string;
        webResourceName?: string;
        welcomePageId?: string;
        welcomePageName?: string;
        constructor(components: IAppPropertiesComponents);
    }
	interface IAppPropertiesComponents {
        appId?: string;
        displayName?: string;
        uniqueName?: string;
        url?: string;
        webResourceId?: string;
        webResourceName?: string;
        welcomePageId?: string;
        welcomePageName?: string;
    }
	class AttributeMetadataMock implements Xrm.Metadata.AttributeMetadata {
        defaultFormValue: number;
        options: string[];
        logicalName: string;
        displayName: string;
        attributeType: XrmEnum.AttributeTypeCode;
        entityLogicalName: string;
        optionSet: Xrm.Metadata.OptionMetadata[];
        constructor(components: IAttributeMetadataComponents);
    }
	interface IAttributeMetadataComponents {
        defaultFormValue?: number;
        options?: string[];
        logicalName?: string;
        displayName?: string;
        attributeType?: XrmEnum.AttributeTypeCode;
        entityLogicalName?: string;
        optionSet?: Xrm.Metadata.OptionMetadata[];
    }
	function findIndex(handlers: Xrm.Events.ContextSensitiveHandler[], handler: Xrm.Events.ContextSensitiveHandler): number;
	class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
        itemCollection: T[];
        constructor(itemCollection?: T[]);
        forEach(delegate: () => void): void;
        forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void;
        get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
        get(item: number | string): T;
        get(): T[];
        getLength(): number;
        push(item: T): void;
    }
	class ControlMock implements Xrm.Controls.Control {
        controlType: Xrm.Controls.ControlType;
        name: string;
        parent: Xrm.Controls.Section;
        label: string;
        visible: boolean;
        constructor(components: IControlComponents);
        getControlType(): Xrm.Controls.ControlType | string;
        getName(): string;
        getParent(): Xrm.Controls.Section;
        getLabel(): string;
        setLabel(label: string): void;
        getVisible(): boolean;
    }
	interface IControlComponents extends IAttControlComponents {
        name: string;
    }
	interface IAttControlComponents {
        name?: string;
        controlType?: Xrm.Controls.ControlType;
        label?: string;
        visible?: boolean;
        parent?: Xrm.Controls.Section;
    }
	type AttributeReturnType = boolean | Date | number | Xrm.LookupValue[] | string;
	class AttributeMock<TControl extends ControlMock, TValue extends AttributeReturnType> implements Xrm.Attributes.Attribute {
        attributeType: Xrm.Attributes.AttributeType;
        controls: ItemCollectionMock<TControl>;
        isDirty: boolean;
        name: string;
        requiredLevel: Xrm.Attributes.RequirementLevel;
        submitMode: Xrm.SubmitMode;
        value: TValue;
        format: Xrm.Attributes.AttributeFormat;
        eventHandlers: Xrm.Events.ContextSensitiveHandler[];
        constructor(components: IAttributeComponents<TControl, TValue>);
        addOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
        fireOnChange(): void;
        getAttributeType(): Xrm.Attributes.AttributeType;
        getFormat(): Xrm.Attributes.AttributeFormat;
        getIsDirty(): boolean;
        getName(): string;
        getParent(): Xrm.Entity;
        getRequiredLevel(): Xrm.Attributes.RequirementLevel;
        getSubmitMode(): Xrm.SubmitMode;
        getUserPrivilege(): Xrm.Privilege;
        removeOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
        setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void;
        setSubmitMode(submitMode: Xrm.SubmitMode): void;
        getValue(): TValue;
        setValue(value: TValue): void;
    }
	interface IAttributeComponents<T extends ControlMock, TValue extends AttributeReturnType> {
        attributeType?: Xrm.Attributes.AttributeType;
        controls?: ItemCollectionMock<T>;
        eventHandlers?: Xrm.Events.ContextSensitiveHandler[];
        format?: Xrm.Attributes.AttributeFormat;
        isDirty?: boolean;
        name: string;
        requiredLevel?: Xrm.Attributes.RequirementLevel;
        submitMode?: Xrm.SubmitMode;
        value?: TValue;
    }
	class AutoCompleteCommandMock implements Xrm.Controls.AutoCompleteCommand {
        id: string;
        icon?: string;
        label: string;
        constructor(id: string, label: string, icon?: string, action?: () => void);
        action(): void;
    }
	class AutoCompleteResultMock implements Xrm.Controls.AutoCompleteResult {
        id: string | number;
        icon?: string;
        fields: string[];
        constructor(id: string | number, fields: string[], icon?: string);
    }
	class AutoCompleteResultSetMock implements Xrm.Controls.AutoCompleteResultSet {
        results: Xrm.Controls.AutoCompleteResult[];
        commands?: Xrm.Controls.AutoCompleteCommand;
        constructor(results: Xrm.Controls.AutoCompleteResult[], commands?: Xrm.Controls.AutoCompleteCommand);
    }
	class UiFocusableMock implements Xrm.Controls.UiFocusable {
        hasFocus: boolean;
        constructor(hasFocus?: boolean);
        setFocus(): void;
    }
	class UiCanGetVisibleElementMock implements Xrm.Controls.UiCanGetVisibleElement {
        isVisible: boolean;
        constructor(isVisible: boolean);
        getVisible(): boolean;
    }
	class UiLabelElementMock implements Xrm.Controls.UiLabelElement {
        constructor(label: string);
        getLabel(): string;
        setLabel(label: string): void;
    }
	class UiStandardElementMock implements Xrm.Controls.UiStandardElement {
        static create(label: string, visible?: boolean): UiStandardElementMock;
        uiLabelElement: Xrm.Controls.UiLabelElement;
        uiCanGetVisibleElement: Xrm.Controls.UiCanGetVisibleElement;
        constructor(uiLabelElement: Xrm.Controls.UiLabelElement, uiCanGetVisibleElement: Xrm.Controls.UiCanGetVisibleElement);
        setVisible(visible: boolean): void;
        getVisible(): boolean;
        getLabel(): string;
        setLabel(label: string): void;
    }
	class StandardControlMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends ControlMock implements Xrm.Controls.StandardControl {
        disabled: boolean;
        attribute: TAttribute;
        protected uiStandardElement: Xrm.Controls.UiStandardElement;
        protected uiFocusable: Xrm.Controls.UiFocusable;
        constructor(components: IStandardControlComponents<TControl, TAttribute, TValue>);
        addNotification(notification: Xrm.Controls.AddControlNotificationOptions): void;
        clearNotification(uniqueId?: string): boolean;
        getDisabled(): boolean;
        setDisabled(disabled: boolean): void;
        setNotification(message: string, uniqueId: string): boolean;
        getAttribute(): TAttribute;
        getLabel(): string;
        setLabel(label: string): void;
        getVisible(): boolean;
        setVisible(visible: boolean): void;
        setFocus(): void;
    }
	interface IStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IAttStandardControlComponents<TControl, TAttribute, TValue>, IControlComponents {
        attribute: TAttribute;
        name: string;
    }
	interface IAttStandardControlComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IAttControlComponents {
        disabled?: boolean;
        label?: string;
        visible?: boolean;
        hasFocus?: boolean;
    }
	class UiKeyPressableMock implements Xrm.Controls.UiKeyPressable {
        keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[];
        constructor(keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[]);
        addOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
        fireOnKeyPress(eventContext?: Xrm.Events.EventContext): void;
        removeOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
    }
	class AutoLookupControlMock<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends StandardControlMock<TControl, TAttribute, TValue> implements Xrm.Controls.AutoLookupControl {
        uiKeyPressable: UiKeyPressableMock;
        uncommittedText: string;
        constructor(components: IAutoLookupControlComponents<TControl, TAttribute, TValue>);
        getValue(): string;
        hideAutoComplete(): void;
        showAutoComplete(resultSet: Xrm.Controls.AutoCompleteResultSet): void;
        addOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
        fireOnKeyPress(): void;
        removeOnKeyPress(handler: Xrm.Events.ContextSensitiveHandler): void;
    }
	interface IAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IStandardControlComponents<TControl, TAttribute, TValue>, IAttAutoLookupControlComponents<TControl, TAttribute, TValue> {
        name: string;
    }
	interface IAttAutoLookupControlComponents<TControl extends AutoLookupControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TValue>, TValue extends AttributeReturnType> extends IAttStandardControlComponents<TControl, TAttribute, TValue> {
        keyPressHandlers?: Xrm.Events.ContextSensitiveHandler[];
        uncommittedText?: string;
    }
	class BooleanControlMock extends StandardControlMock<BooleanControlMock, BooleanAttributeMock, boolean> implements Xrm.Controls.StandardControl {
        constructor(components: IBooleanControlComponents);
    }
	interface IBooleanControlComponents extends IAttBooleanControlComponents, IStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
        name: string;
    }
	interface IAttBooleanControlComponents extends IAttStandardControlComponents<BooleanControlMock, BooleanAttributeMock, boolean> {
    }
	class EnumAttributeMock<TControl extends ControlMock, TValue extends number | boolean> extends AttributeMock<TControl, TValue> implements Xrm.Attributes.EnumAttribute {
        initialValue: TValue;
        constructor(components: IEnumAttributeComponents<TControl, TValue>);
        getInitialValue(): TValue;
    }
	interface IEnumAttributeComponents<TControl extends ControlMock, TValue extends number | boolean> extends IAttributeComponents<TControl, TValue> {
        initialValue?: TValue;
    }
	class BooleanAttributeMock extends EnumAttributeMock<BooleanControlMock, boolean> implements Xrm.Attributes.BooleanAttribute {
        static create(name: string, value?: boolean): BooleanAttributeMock;
        constructor(components: IBooleanAttributeComponents);
    }
	interface IBooleanAttributeComponents extends IEnumAttributeComponents<BooleanControlMock, boolean> {
    }
	class CalendarMock implements Xrm.Calendar {
        MinSupportedDateTime: Date;
        MaxSupportedDateTime: Date;
        AlgorithmType: number;
        CalendarType: number;
        Eras: number[];
        TwoDigitYearMax: number;
        IsReadOnly: boolean;
        constructor(components: ICalendarComponents);
    }
	interface ICalendarComponents {
        MinSupportedDateTime: Date;
        MaxSupportedDateTime: Date;
        AlgorithmType: number;
        CalendarType: number;
        Eras: number[];
        TwoDigitYearMax: number;
        IsReadOnly: boolean;
    }
	class CaptureFileResponseMock implements Xrm.Device.CaptureFileResponse {
        fileContent: string;
        fileName: string;
        fileSize: number;
        mimeType: string;
        constructor(fileContent?: string, fileName?: string, fileSize?: number, mimeType?: string);
    }
	class CaptureImageOptionsMock implements Xrm.Device.CaptureImageOptions {
        allowEdit: boolean;
        height: number;
        preferFrontCamera: boolean;
        quality: number;
        width: number;
        constructor(components: ICaptureImageOptionsComponents);
    }
	interface ICaptureImageOptionsComponents {
        allowEdit?: boolean;
        height?: number;
        preferFrontCamera?: boolean;
        quality?: number;
        width?: number;
    }
	class ClientContextMock implements Xrm.ClientContext {
        client: Xrm.Client;
        clientState: Xrm.ClientState;
        constructor(client: Xrm.Client, clientState: Xrm.ClientState);
        getClient(): Xrm.Client;
        getClientState(): Xrm.ClientState;
        getFormFactor(): XrmEnum.ClientFormFactor;
        isOffline(): boolean;
    }
	class ConfirmResultMock implements Xrm.Navigation.ConfirmResult {
        confirmed: boolean;
        constructor(confirmed: boolean);
    }
	class ConfirmStringsMock implements Xrm.Navigation.ConfirmStrings {
        cancelButtonLabel?: string;
        confirmButtonLabel?: string;
        subtitle?: string;
        title?: string;
        text: string;
        constructor(components: IConfirmStringsComponents);
    }
	interface IConfirmStringsComponents {
        cancelButtonLabel?: string;
        confirmButtonLabel?: string;
        subtitle?: string;
        title?: string;
        text: string;
    }
	class ContextMock implements Xrm.GlobalContext {
        organizationSettings: Xrm.OrganizationSettings;
        userSettings: Xrm.UserSettings;
        client: Xrm.ClientContext;
        clientUrl: string;
        currentTheme: Xrm.Theme;
        isAutoSaveEnabled: boolean;
        orgLcid: number;
        orgUniqueName: string;
        timeZoneOffset: number;
        userId: string;
        userLcid: number;
        userName: string;
        userRoles: string[];
        version: string;
        constructor(components: IContextComponents);
        getClientUrl(): string;
        getCurrentTheme(): Xrm.Theme;
        getIsAutoSaveEnabled(): boolean;
        getOrgLcid(): number;
        getOrgUniqueName(): string;
        getQueryStringParameters(): {
            [index: string]: any;
        };
        getTimeZoneOffsetMinutes(): number;
        getUserSettings(): Xrm.UserSettings;
        getUserId(): string;
        getUserLcid(): number;
        getUserName(): string;
        getUserRoles(): string[];
        getVersion(): string;
        prependOrgName(sPath: string): string;
        getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number;
        getCurrentAppName(): Xrm.Async.PromiseLike<string>;
        getCurrentAppProperties(): Xrm.Async.PromiseLike<Xrm.AppProperties>;
        getCurrentAppUrl(): string;
        isOnPremise(): boolean;
    }
	interface IContextComponents {
        clientContext: Xrm.ClientContext;
        clientUrl?: string;
        currentTheme?: Xrm.Theme;
        isAutoSaveEnabled?: boolean;
        orgLcid?: number;
        orgUniqueName?: string;
        timeZoneOffset?: number;
        userSettings?: Xrm.UserSettings;
        userId?: string;
        userLcid?: number;
        userName?: string;
        userRoles?: string[];
        version?: string;
    }
	class ControlNotificationActionMock implements Xrm.Controls.ControlNotificationAction {
        message?: string;
        actions: Array<() => void>;
        constructor(actions: Array<() => void>, message?: string);
    }
	class DataMock implements Xrm.Data {
        attributes: ItemCollectionMock<AttributeMock<ControlMock, AttributeReturnType>>;
        entity: Xrm.Entity;
        process: Xrm.ProcessFlow.ProcessManager;
        constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager);
        refresh(save: boolean): Xrm.Async.PromiseLike<undefined>;
        save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined>;
    }
	class DateControlMock extends StandardControlMock<DateControlMock, DateAttributeMock, Date> implements Xrm.Controls.DateControl {
        showTime: boolean;
        constructor(components: IDateControlComponents);
        getShowTime(): boolean;
        setShowTime(showTime: boolean): void;
    }
	interface IDateControlComponents extends IAttDateControlComponents, IStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
        name: string;
    }
	interface IAttDateControlComponents extends IAttStandardControlComponents<DateControlMock, DateAttributeMock, Date> {
        showTime?: boolean;
    }
	class DateAttributeMock extends AttributeMock<DateControlMock, Date> implements Xrm.Attributes.DateAttribute {
        static create(name: string, value?: Date): DateAttributeMock;
        constructor(components: IDateAttributeComponents);
        getFormat(): Xrm.Attributes.DateAttributeFormat;
    }
	interface IDateAttributeComponents extends IAttributeComponents<DateControlMock, Date> {
        format?: Xrm.Attributes.DateAttributeFormat;
    }
	class DateFormattingInfoMock implements Xrm.DateFormattingInfo {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthGenitiveNames: string[];
        abbreviatedMonthNames: string[];
        calendarWeekRule: number;
        calendar: Xrm.Calendar;
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthGenitiveNames: string[];
        monthNames: string[];
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        sortableDateTimePattern: string;
        timeSeparator: string;
        universalSortableDateTimePattern: string;
        yearMonthPattern: string;
        constructor(components: IDateFormattingInfoComponents);
    }
	interface IDateFormattingInfoComponents {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthGenitiveNames: string[];
        abbreviatedMonthNames: string[];
        calendarWeekRule: number;
        calendar: Xrm.Calendar;
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthGenitiveNames: string[];
        monthNames: string[];
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        sortableDateTimePattern: string;
        timeSeparator: string;
        universalSortableDateTimePattern: string;
        yearMonthPattern: string;
    }
	class DeviceMock implements Xrm.Device {
        captureAudio(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
        captureImage(imageOptions: Xrm.Device.CaptureImageOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
        captureVideo(): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse>;
        getBarcodeValue(): Xrm.Async.PromiseLike<string>;
        getCurrentPosition(): Xrm.Async.PromiseLike<Xrm.Device.GetCurrentPositionResponse>;
        pickFile(pickFileOptions: Xrm.Device.PickFileOptions): Xrm.Async.PromiseLike<Xrm.Device.CaptureFileResponse[]>;
    }
	class DialogSizeOptionsMock implements Xrm.Navigation.DialogSizeOptions {
        height: number;
        width: number;
        constructor(height: number, width: number);
    }
	class EncodingMock implements Xrm.Encoding {
        xmlAttributeEncode(arg: string): string;
        xmlEncode(arg: string): string;
    }
	class EntityFormOptionsMock implements Xrm.Navigation.EntityFormOptions {
        cmdbar?: boolean;
        createFromEntity?: Xrm.LookupValue;
        entityId?: string;
        entityName?: string;
        formId?: string;
        height?: number;
        isCrossEntityNavigate?: boolean;
        isOfflineSyncError?: boolean;
        navBar?: Xrm.Url.NavBarDisplay;
        openInNewWindow?: boolean;
        windowPosition?: XrmEnum.WindowPositions;
        processId?: string;
        processInstanceId?: string;
        relationship?: Xrm.Navigation.Relationship;
        selectedStageId?: string;
        useQuickCreateForm?: boolean;
        width?: number;
        constructor(components: IEntityFormOptionsComponents);
    }
	interface IEntityFormOptionsComponents {
        cmdbar?: boolean;
        createFromEntity?: Xrm.LookupValue;
        entityId?: string;
        entityName?: string;
        formId?: string;
        height?: number;
        isCrossEntityNavigate?: boolean;
        isOfflineSyncError?: boolean;
        navBar?: Xrm.Url.NavBarDisplay;
        openInNewWindow?: boolean;
        windowPosition?: XrmEnum.WindowPositions;
        processId?: string;
        processInstanceId?: string;
        relationship?: Xrm.Navigation.Relationship;
        selectedStageId?: string;
        useQuickCreateForm?: boolean;
        width?: number;
    }
	class EntityMetadataMock implements Xrm.Metadata.EntityMetadata {
        ActivityTypeMask: number;
        Attributes: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
        AutoRouteToOwnerQueue: boolean;
        CanEnableSyncToExternalSearchIndex: boolean;
        CanBeInManyToMany: boolean;
        CanBePrimaryEntityInRelationship: boolean;
        CanBeRelatedEntityInRelationship: boolean;
        CanCreateAttributes: boolean;
        CanCreateCharts: boolean;
        CanCreateForms: boolean;
        CanCreateViews: boolean;
        CanModifyAdditionalSettings: boolean;
        CanTriggerWorkflow: boolean;
        Description: Xrm.Metadata.Label;
        DisplayCollectionName: Xrm.Metadata.Label;
        DisplayName: Xrm.Metadata.Label;
        EntityColor: string;
        EntitySetName: string;
        IconLargeName: string;
        IconMediumName: string;
        IconSmallName: string;
        IsActivity: boolean;
        IsActivityParty: boolean;
        IsAuditEnabled: boolean;
        IsAvailableOffline: boolean;
        IsBPFEntity: boolean;
        IsChildEntity: boolean;
        IsConnectionsEnabled: boolean;
        IsCustomEntity: boolean;
        IsCustomizable: boolean;
        IsDocumentManagementEnabled: boolean;
        IsDuplicateDetectionEnabled: boolean;
        IsEnabledForCharts: boolean;
        IsOneNotIntegrationEnabled: boolean;
        IsOptimisitcConcurrencyEnabled: boolean;
        IsQuickCreateEnabled: boolean;
        IsImportable: boolean;
        IsIntersect: boolean;
        IsMailMergeEnabled: boolean;
        IsManaged: boolean;
        IsMappable: boolean;
        IsReadingPaneEnabled: boolean;
        IsRenameable: boolean;
        IsStateModelAware: boolean;
        IsValidForAdvancedFind: boolean;
        IsValidForQueue: boolean;
        IsVisibleInMobileClient: boolean;
        LogicalCollectionName: string;
        LogicalName: string;
        ObjectTypeCode: number;
        OwnershipTypeCode: number;
        PrimaryIdAttribute: string;
        PrimaryNameAttribute: string;
        RecurrenceBaseEntityLogicalName: string;
        PrimaryImageAttribute: string;
        constructor(components: IEntityMetadataComponents);
    }
	interface IEntityMetadataComponents {
        ActivityTypeMask?: number;
        Attributes?: Xrm.Collection.StringIndexableItemCollection<Xrm.Metadata.AttributeMetadata>;
        AutoRouteToOwnerQueue?: boolean;
        CanEnableSyncToExternalSearchIndex?: boolean;
        CanBeInManyToMany?: boolean;
        CanBePrimaryEntityInRelationship?: boolean;
        CanBeRelatedEntityInRelationship?: boolean;
        CanCreateAttributes?: boolean;
        CanCreateCharts?: boolean;
        CanCreateForms?: boolean;
        CanCreateViews?: boolean;
        CanModifyAdditionalSettings?: boolean;
        CanTriggerWorkflow?: boolean;
        Description?: Xrm.Metadata.Label;
        DisplayCollectionName?: Xrm.Metadata.Label;
        DisplayName?: Xrm.Metadata.Label;
        EntityColor?: string;
        EntitySetName?: string;
        IconLargeName?: string;
        IconMediumName?: string;
        IconSmallName?: string;
        IsActivity?: boolean;
        IsActivityParty?: boolean;
        IsAuditEnabled?: boolean;
        IsAvailableOffline?: boolean;
        IsBPFEntity?: boolean;
        IsChildEntity?: boolean;
        IsConnectionsEnabled?: boolean;
        IsCustomEntity?: boolean;
        IsCustomizable?: boolean;
        IsDocumentManagementEnabled?: boolean;
        IsDuplicateDetectionEnabled?: boolean;
        IsEnabledForCharts?: boolean;
        IsOneNotIntegrationEnabled?: boolean;
        IsOptimisitcConcurrencyEnabled?: boolean;
        IsQuickCreateEnabled?: boolean;
        IsImportable?: boolean;
        IsIntersect?: boolean;
        IsMailMergeEnabled?: boolean;
        IsManaged?: boolean;
        IsMappable?: boolean;
        IsReadingPaneEnabled?: boolean;
        IsRenameable?: boolean;
        IsStateModelAware?: boolean;
        IsValidForAdvancedFind?: boolean;
        IsValidForQueue?: boolean;
        IsVisibleInMobileClient?: boolean;
        LogicalCollectionName?: string;
        LogicalName?: string;
        ObjectTypeCode?: number;
        OwnershipTypeCode?: number;
        PrimaryIdAttribute?: string;
        PrimaryNameAttribute?: string;
        RecurrenceBaseEntityLogicalName?: string;
        PrimaryImageAttribute?: string;
    }
	class Form {
        static createBlankForm(): XrmMock.FormItemMock;
    }
	class Ui {
        static createUi(): XrmMock.UiMock;
        static createLabelElement(label: string): XrmMock.UiLabelElementMock;
        static createCanGetVisibleElement(isVisible: boolean): XrmMock.UiCanGetVisibleElementMock;
        static createStandardElement(labelElement: Xrm.Page.UiLabelElement, visibleElement: Xrm.Page.UiCanGetVisibleElement): XrmMock.UiStandardElementMock;
    }
	type CreateMethods = "createBoolean" | "createDate" | "createLookup" | "createNumber" | "createOptionSet" | "createString";
	class Control {
        createBoolean(components: XrmMock.IBooleanControlComponents): XrmMock.BooleanControlMock;
        createBoolean(attribute: XrmMock.BooleanAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.BooleanControlMock;
        createDate(components: XrmMock.IDateControlComponents): XrmMock.DateControlMock;
        createDate(attribute: XrmMock.DateAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.DateControlMock;
        createGrid(components: XrmMock.IGridControlComponents): XrmMock.GridControlMock;
        createGrid(name?: string, visible?: boolean, label?: string): XrmMock.GridControlMock;
        createLookup(components: XrmMock.ILookupControlComponents): XrmMock.LookupControlMock;
        createLookup(attribute: XrmMock.LookupAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.LookupControlMock;
        createNumber(components: XrmMock.INumberControlComponents): XrmMock.NumberControlMock;
        createNumber(attribute: XrmMock.NumberAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.NumberControlMock;
        createOptionSet(components: XrmMock.IOptionSetControlComponents): XrmMock.OptionSetControlMock;
        createOptionSet(attribute: XrmMock.OptionSetAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.OptionSetControlMock;
        createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
        createString(attribute: XrmMock.StringAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.StringControlMock;
    }
	type BooleanControlComponent = XrmMock.IAttBooleanControlComponents | XrmMock.IAttBooleanControlComponents[];
	type DateControlComponent = XrmMock.IAttDateControlComponents | XrmMock.IAttDateControlComponents[];
	type LookupControlComponent = XrmMock.IAttLookupControlComponents | XrmMock.IAttLookupControlComponents[];
	type NumberControlComponent = XrmMock.IAttNumberControlComponents | XrmMock.IAttNumberControlComponents[];
	type OptionSetControlComponent = XrmMock.IAttOptionSetControlComponents | XrmMock.IAttOptionSetControlComponents[];
	type StringControlComponent = XrmMock.IAttStringControlComponents | XrmMock.IAttStringControlComponents[];
	class Attribute {
        createBoolean(attComponents: XrmMock.IBooleanAttributeComponents, controlComponents?: BooleanControlComponent): XrmMock.BooleanAttributeMock;
        createBoolean(name: string, value?: boolean): XrmMock.BooleanAttributeMock;
        createDate(attComponents: XrmMock.IDateAttributeComponents, controlComponents?: DateControlComponent): XrmMock.DateAttributeMock;
        createDate(name: string, value?: Date): XrmMock.DateAttributeMock;
        createLookup(attComponents: XrmMock.ILookupAttributeComponents, controlComponents?: LookupControlComponent): XrmMock.LookupAttributeMock;
        createLookup(name: string, lookup: Xrm.LookupValue | Xrm.LookupValue[]): XrmMock.LookupAttributeMock;
        createNumber(attComponents: XrmMock.INumberAttributeComponents, controlComponents?: NumberControlComponent): XrmMock.NumberAttributeMock;
        createNumber(name: string, value?: number): XrmMock.NumberAttributeMock;
        createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents, controlComponents?: OptionSetControlComponent): XrmMock.OptionSetAttributeMock;
        createOptionSet(name: string, value?: string | number, options?: Xrm.OptionSetValue[]): XrmMock.OptionSetAttributeMock;
        createString(attComponents: XrmMock.IStringAttributeComponents, controlComponents?: StringControlComponent): XrmMock.StringAttributeMock;
        createString(name: string, value?: string): XrmMock.StringAttributeMock;
    }
	class Context {
        static createContext(client?: Xrm.Client): XrmMock.ContextMock;
    }
	class Device {
        static createDevice(): DeviceMock;
    }
	class FormItemMock implements Xrm.Controls.FormItem {
        id: string;
        label: string;
        formType: XrmEnum.FormType;
        currentItem: boolean;
        constructor(components: IFormItemComponents);
        getId(): string;
        getLabel(): string;
        navigate(): void;
    }
	interface IFormItemComponents {
        id: string;
        label: string;
        formType?: XrmEnum.FormType;
        currentItem?: boolean;
    }
	class FormSelectorMock implements Xrm.Controls.FormSelector {
        items: ItemCollectionMock<FormItemMock>;
        constructor(items: ItemCollectionMock<FormItemMock>);
        getCurrentItem(): Xrm.Controls.FormItem;
    }
	class UiMock implements Xrm.Ui {
        process: Xrm.Controls.ProcessControl;
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
        formSelector: FormSelectorMock;
        navigation: Xrm.Controls.Navigation;
        tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
        quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
        formNotifications: [{
            message: string;
            level: Xrm.Page.ui.FormNotificationLevel;
            uniqueId: string;
        }];
        constructor(components: IUiComponents);
        setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean;
        clearFormNotification(uniqueId: string): boolean;
        close(): void;
        getFormType(): XrmEnum.FormType;
        getViewPortHeight(): number;
        getViewPortWidth(): number;
        refreshRibbon(): void;
    }
	interface IUiComponents {
        process?: Xrm.Controls.ProcessControl;
        controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
        formSelector?: FormSelectorMock;
        navigation?: Xrm.Controls.Navigation;
        tabs?: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
        quickForms?: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
    }
	class FormContext {
        static createFormContext(entity?: XrmMock.IEntityComponents, ui?: XrmMock.IUiComponents, process?: Xrm.ProcessFlow.ProcessManager): XrmMock.FormContextMock;
    }
	class EventContext {
        static Context: Context;
        static FormContext: FormContext;
        static createEventContext(entity?: XrmMock.IEntityComponents, context?: Xrm.GlobalContext, formContext?: Xrm.FormContext, ui?: XrmMock.IUiComponents, process?: Xrm.ProcessFlow.ProcessManager): XrmMock.EventContextMock;
    }
	class MobileMock implements Xrm.Mobile {
        offline: Xrm.MobileOffline;
        constructor(offline: Xrm.MobileOffline);
    }
	class MobileOfflineMock implements Xrm.MobileOffline {
        isOfflineEnabled(entityType: string): boolean;
        createRecord(entityType: string, data: {
            [attributeName: string]: any;
        }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
        retrieveRecord(entityType: string, id: string, options: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
        retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Xrm.Async.PromiseLike<Array<{
            [key: string]: any;
        }>>;
        updateRecord(entityType: string, id: string, data: {
            [attributeName: string]: any;
        }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
        deleteRecord(entityType: string, id: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject>;
    }
	class Mobile {
        static createMobile(): MobileMock;
    }
	class Navigation {
        static createNavigation(client?: Xrm.Client): XrmMock.NavigationStaticMock;
    }
	class ControlHelpers {
        static setControlsParent(controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control | Xrm.Controls.Section>, parent: Xrm.Controls.Section | Xrm.Controls.Tab): void;
    }
	class Section {
        createSection(name?: string, label?: string, isVisible?: boolean, parent?: Xrm.Controls.Tab, controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>): XrmMock.SectionMock;
    }
	class SectionMock implements Xrm.Controls.Section {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
        parent: Xrm.Controls.Tab;
        constructor(name: string, parent?: Xrm.Controls.Tab, uiStandardElement?: Xrm.Controls.UiStandardElement, controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>);
        getName(): string;
        getParent(): Xrm.Controls.Tab;
        setVisible(visible: boolean): void;
        getVisible(): boolean;
        getLabel(): string;
        setLabel(label: string): void;
    }
	class TabMock implements Xrm.Controls.Tab {
        sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
        tabStateChangeHandlers: Xrm.Events.ContextSensitiveHandler[];
        constructor(components: ITabComponents);
        getDisplayState(): Xrm.DisplayState;
        getName(): string;
        getParent(): Xrm.Ui;
        setDisplayState(displayState: Xrm.DisplayState): void;
        setVisible(visible: boolean): void;
        getVisible(): boolean;
        getLabel(): string;
        setLabel(label: string): void;
        setFocus(): void;
        addTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void;
        removeTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void;
    }
	interface ITabComponents {
        uiStandardElement?: Xrm.Controls.UiStandardElement;
        uiFocusableElement?: Xrm.Controls.UiFocusable;
        name?: string;
        parent?: Xrm.Ui;
        displayState?: Xrm.DisplayState;
        sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
        tabStateChangeHandlers?: Xrm.Events.ContextSensitiveHandler[];
    }
	class Tab {
        createTab(name?: string, label?: string, isVisible?: boolean, displayState?: Xrm.DisplayState, parent?: Xrm.Ui, sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>): XrmMock.TabMock;
    }
	class UtilityMock implements Xrm.Utility {
        alertDialog(message: string, onCloseCallback: () => void): void;
        confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void;
        isActivityType(entityType: string): boolean;
        openQuickCreate(entityLogicalName: string, createFromEntity?: Xrm.LookupValue, parameters?: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<Xrm.Async.OpenQuickCreateSuccessCallbackObject>;
        openEntityForm(name: string, id?: string, parameters?: Xrm.Utility.FormOpenParameters, windowOptions?: Xrm.Utility.WindowOptions): void;
        openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
        closeProgressIndicator(): void;
        getAllowedStatusTransitions(entityName: string, stateCode: number): Xrm.Async.PromiseLike<any>;
        getEntityMetadata(entityName: string, attributes?: string[]): Xrm.Async.PromiseLike<Xrm.Metadata.EntityMetadata>;
        getGlobalContext(): Xrm.GlobalContext;
        getResourceString(webResourceName: string, key: string): string;
        invokeProcessAction(name: string, parameters: Xrm.Collection.Dictionary<any>): Xrm.Async.PromiseLike<any>;
        lookupObjects(lookupOptions: Xrm.LookupOptions): Xrm.Async.PromiseLike<Xrm.LookupValue[]>;
        refreshParentGrid(lookupOptions: Xrm.LookupValue): void;
        showProgressIndicator(message: string): void;
    }
	class Utility {
        static createUtility(): UtilityMock;
    }
	class WebApi {
        static createApi(clientContext: Xrm.ClientContext): XrmMock.WebApiMock;
    }
	class XrmMockGenerator {
        static EventContext: EventContext;
        static FormContext: FormContext;
        static Attribute: Attribute;
        static Context: Context;
        static Control: Control;
        static Device: Device;
        static Mobile: Mobile;
        static Tab: Tab;
        static Section: Section;
        static Form: Form;
        static Navigation: Navigation;
        static WebApi: WebApi;
        static Utility: Utility;
        static context: XrmMock.ContextMock;
        static formContext: XrmMock.FormContextMock;
        static eventContext: XrmMock.EventContextMock;
        static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock;
        static getEventContext(): XrmMock.EventContextMock;
        static getFormContext(): XrmMock.FormContextMock;
    }
	interface IXrmGeneratorComponents {
        context?: XrmMock.ContextMock;
        ui?: XrmMock.IUiComponents;
        entity?: XrmMock.IEntityComponents;
        process?: Xrm.ProcessFlow.ProcessManager;
    }
	class EntityMock implements Xrm.Entity {
        id: string;
        entityName: string;
        primaryValue: string;
        attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
        saveEventHandlers: Xrm.Events.ContextSensitiveHandler[];
        constructor(components?: IEntityComponents);
        addOnSave(handler: Xrm.Events.ContextSensitiveHandler): void;
        getEntityName(): string;
        getDataXml(): string;
        getEntityReference(): Xrm.LookupValue;
        getId(): string;
        getIsDirty(): boolean;
        getPrimaryAttributeValue(): string;
        isValid(): boolean;
        removeOnSave(handler: Xrm.Events.ContextSensitiveHandler): void;
        save(saveMode?: Xrm.EntitySaveMode): void;
    }
	interface IEntityComponents {
        id?: string;
        entityName?: string;
        primaryValue?: string;
        attributes?: ItemCollectionMock<Xrm.Attributes.Attribute>;
    }
	class ErrorDialogOptionsMock implements Xrm.Navigation.ErrorDialogOptions {
        details?: string;
        errorCode?: number;
        message?: string;
        constructor(details?: string, errorCode?: number, message?: string);
    }
	class ErrorResponseMock implements Xrm.ErrorResponse {
        errorCode: number;
        message: string;
        constructor(errorCode: number, message: string);
    }
	class EventContextMock implements Xrm.Events.EventContext {
        formContext: Xrm.FormContext;
        context: Xrm.GlobalContext;
        constructor(components: IEventContextComponents);
        getContext(): Xrm.GlobalContext;
        getDepth(): number;
        getEventArgs(): Xrm.Events.SaveEventContext;
        getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
        getFormContext(): Xrm.FormContext;
        getSharedVariable<T>(key: string): T;
        setSharedVariable<T>(key: string, value: T): void;
    }
	interface IEventContextComponents {
        formContext?: Xrm.FormContext;
        context?: Xrm.GlobalContext;
    }
	class ExecuteResponseMock implements Xrm.ExecuteResponse {
        body: ReadableStream<Uint8Array>;
        headers: Headers;
        ok: boolean;
        redirected: boolean;
        status: number;
        statusText: string;
        type: ResponseType;
        url: string;
        trailer: Promise<Headers>;
        bodyUsed: boolean;
        constructor(components: IExecuteResponseComponents);
        arrayBuffer(): Promise<ArrayBuffer>;
        blob(): Promise<Blob>;
        formData(): Promise<FormData>;
        json(): Promise<any>;
        text(): Promise<string>;
        clone(): Response;
    }
	interface IExecuteResponseComponents {
        body?: ReadableStream<Uint8Array>;
        headers?: Headers;
        ok?: boolean;
        redirected?: boolean;
        status?: number;
        statusText?: string;
        type?: ResponseType;
        url?: string;
        trailer?: Promise<Headers>;
        bodyUsed?: boolean;
    }
	class FileDetailsMock implements Xrm.Navigation.FileDetails {
        fileContent: string;
        fileName: string;
        fileSize: number;
        mimeType: string;
        constructor(fileContent?: string, fileName?: string, fileSize?: number, mimeType?: string);
    }
	class FormContextMock implements Xrm.FormContext {
        data: Xrm.Data;
        ui: Xrm.Ui;
        constructor(data: Xrm.Data, ui: Xrm.Ui);
        getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: number | string): T;
        getAttribute<T extends Xrm.Attributes.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
        getControl<T extends Xrm.Controls.Control>(controlNameOrIndex: string | number): T;
        getControl<T extends Xrm.Controls.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    }
	class FormOpenParametersMock implements Xrm.Utility.OpenParameters {
        [index: string]: string | undefined;
        formid?: string;
        navbar?: Xrm.Url.NavBarDisplay;
        cmdbar?: Xrm.Url.CmdBarDisplay;
        constructor(formid?: string, navbar?: Xrm.Url.NavBarDisplay, cmdbar?: Xrm.Url.CmdBarDisplay);
    }
	class GetCurrentPositionResponseMock implements Xrm.Device.GetCurrentPositionResponse {
        coords: any;
        timestamp: number;
        constructor(coords: any, timestamp: number);
    }
	class GridControlMock extends ControlMock implements Xrm.Controls.GridControl {
        onLoadHandlers: Xrm.Events.ContextSensitiveHandler[];
        contextType: XrmEnum.GridControlContext;
        entityName: string;
        constructor(components: IGridControlComponents);
        addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
        getContextType(): XrmEnum.GridControlContext;
        getEntityName(): string;
        getGrid(): Xrm.Controls.Grid;
        getViewSelector(): Xrm.Controls.ViewSelector;
        refresh(): void;
        removeOnLoad(handler: () => void): void;
    }
	interface IGridControlComponents extends IAttGridControlComponents, IControlComponents {
        name: string;
    }
	interface IAttGridControlComponents extends IAttControlComponents {
        contextType?: XrmEnum.GridControlContext;
        entityName?: string;
        name?: string;
        onLoadHandlers?: Xrm.Events.ContextSensitiveHandler[];
    }
	class GridEntityMock implements Xrm.Controls.Grid.GridEntity {
        constructor(reference: Xrm.LookupValue);
        getEntityName(): string;
        getEntityReference(): Xrm.LookupValue;
        getId(): string;
        getPrimaryAttributeValue(): string;
    }
	class GridMock implements Xrm.Controls.Grid {
        constructor(rows: Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>);
        getRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;
        getSelectedRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow>;
        getTotalRecordCount(): number;
    }
	class GridRowMock implements Xrm.Controls.Grid.GridRow {
        data: Xrm.Data;
        constructor(data: Xrm.Data, gridRowData: Xrm.Controls.Grid.GridRowData);
        getData(): Xrm.Controls.Grid.GridRowData;
    }
	class GridRowDataMock implements Xrm.Controls.Grid.GridRowData {
        constructor(entity: Xrm.Controls.Grid.GridEntity);
        getEntity(): Xrm.Controls.Grid.GridEntity;
    }
	class LabelMock implements Xrm.Metadata.Label {
        LocalizedLabels: Xrm.Metadata.LocalizedLabel[];
        UserLocalizedLabel: Xrm.Metadata.LocalizedLabel;
        constructor(localLabels: Xrm.Metadata.LocalizedLabel[], userLocalLabels: Xrm.Metadata.LocalizedLabel);
    }
	class LocalizedLabelMock implements Xrm.Metadata.LocalizedLabel {
        Label: string;
        LanguageCode: number;
        constructor(label: string, languageCode: number);
    }
	class LookupControlMock extends StandardControlMock<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> implements Xrm.Controls.LookupControl {
        preSearchHandlers: Xrm.Events.ContextSensitiveHandler[];
        views: ILookupView[];
        filters: ILookupFilter[];
        constructor(components: ILookupControlComponents);
        addPreSearch(handler: Xrm.Events.ContextSensitiveHandler): void;
        addCustomFilter(filter: string, entityLogicalName?: string): void;
        addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
        getDefaultView(): string;
        getEntityTypes(): string[];
        setEntityTypes(entityLogicalNames: string[]): void;
        removePreSearch(handler: Xrm.Events.ContextSensitiveHandler): void;
        setDefaultView(viewGuid: string): void;
    }
	interface ILookupControlComponents extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]>, IAttLookupControlComponents {
        name: string;
    }
	interface IAttLookupControlComponents extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
        filters?: ILookupFilter[];
        views?: ILookupView[];
        preSearchHandlers?: Xrm.Events.ContextSensitiveHandler[];
    }
	interface ILookupFilter {
        filter: string;
        entityLogicalName?: string;
    }
	interface ILookupView {
        viewId: string;
        entityName: string;
        viewDisplayName: string;
        fetchXml: string;
        layoutXml: string;
        isDefault: boolean;
    }
	class LookupAttributeMock extends AttributeMock<LookupControlMock, Xrm.LookupValue[]> implements Xrm.Attributes.LookupAttribute {
        isPartyList: boolean;
        constructor(components: ILookupAttributeComponents);
        getIsPartyList(): boolean;
    }
	interface ILookupAttributeComponents extends IAttributeComponents<LookupControlMock, Xrm.LookupValue[]> {
        isPartyList?: boolean;
    }
	class LookupOptionsMock implements Xrm.LookupOptions {
        allowMultiSelect?: boolean;
        defaultEntityType?: string;
        defaultViewId?: string;
        entityTypes?: string[];
        showBarcodeScanner?: boolean;
        viewIds?: string[];
        constructor(components: ILookupOptionsComponents);
    }
	interface ILookupOptionsComponents {
        allowMultiSelect?: boolean;
        defaultEntityType?: string;
        defaultViewId?: string;
        entityTypes?: string[];
        showBarcodeScanner?: boolean;
        viewIds?: string[];
    }
	class LookupValueMock implements Xrm.LookupValue {
        id: string;
        name?: string;
        entityType: string;
        constructor(id: string, entityType: string, name?: string);
    }
	class NavigationMock implements Xrm.Controls.Navigation {
        items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>;
        constructor(items: Xrm.Collection.ItemCollection<Xrm.Controls.NavigationItem>);
    }
	class NavigationItemMock implements Xrm.Controls.NavigationItem {
        constructor(id: string, standardElement: Xrm.Controls.UiStandardElement, focusable: Xrm.Controls.UiFocusable);
        setVisible(visible: boolean): void;
        getVisible(): boolean;
        getLabel(): string;
        setLabel(label: string): void;
        setFocus(): void;
        getId(): string;
    }
	class NavigationStaticMock implements Xrm.Navigation {
        openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<any>;
        openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult>;
        openConfirmDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;
        openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any>;
        openFile(file: Xrm.Navigation.FileDetails, openFileOptions: XrmEnum.OpenFileOptions): void;
        openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<any>;
        openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void;
        openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void;
    }
	class NumberControlMock extends AutoLookupControlMock<NumberControlMock, NumberAttributeMock, number> implements Xrm.Controls.NumberControl {
        constructor(components: INumberControlComponents);
    }
	interface INumberControlComponents extends IAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number>, IAttNumberControlComponents {
        name: string;
    }
	interface IAttNumberControlComponents extends IAttAutoLookupControlComponents<NumberControlMock, NumberAttributeMock, number> {
    }
	class NumberAttributeMock extends AttributeMock<NumberControlMock, number> implements Xrm.Attributes.NumberAttribute {
        min: number;
        max: number;
        precision: number;
        constructor(components: INumberAttributeComponents);
        getFormat(): Xrm.Attributes.IntegerAttributeFormat;
        getMax(): number;
        getMin(): number;
        getPrecision(): number;
        setValue(value: number): void;
    }
	interface INumberAttributeComponents extends IAttributeComponents<NumberControlMock, number> {
        min?: number;
        max?: number;
        precision?: number;
        format?: Xrm.Attributes.IntegerAttributeFormat;
    }
	class OpenParametersMock implements Xrm.Utility.OpenParameters {
        [index: string]: string | undefined;
    }
	class OpenWebresourceOptionsMock extends DialogSizeOptionsMock implements Xrm.Navigation.OpenWebresourceOptions {
        openInNewWindow: boolean;
        constructor(openInNewWindow: boolean, height: number, width: number);
    }
	class OptionSetValueMock implements Xrm.OptionSetValue {
        text: string;
        value: number;
        constructor(text: string, value: number);
    }
	class OptionSetControlMock extends StandardControlMock<OptionSetControlMock, OptionSetAttributeMock, number> implements Xrm.Controls.OptionSetControl {
        options: OptionSetValueMock[];
        constructor(components: IOptionSetControlComponents);
        addOption(option: Xrm.OptionSetValue, index?: number): void;
        clearOptions(): void;
        removeOption(value: number): void;
    }
	interface IOptionSetControlComponents extends IStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number>, IAttOptionSetControlComponents {
        name: string;
    }
	interface IAttOptionSetControlComponents extends IAttStandardControlComponents<OptionSetControlMock, OptionSetAttributeMock, number> {
        options?: Xrm.OptionSetValue[];
    }
	class OptionSetAttributeMock extends EnumAttributeMock<OptionSetControlMock, number> implements Xrm.Attributes.OptionSetAttribute {
        static create(name: string, value?: number): OptionSetAttributeMock;
        options: OptionSetValueMock[];
        selectedOption: OptionSetValueMock;
        constructor(components: IOptionSetAttributeComponents);
        getFormat(): Xrm.Attributes.OptionSetAttributeFormat;
        getOption(param: number | string): Xrm.OptionSetValue;
        getOptions(): Xrm.OptionSetValue[];
        getSelectedOption(): Xrm.OptionSetValue;
        getText(): string;
        setValue(value: number): void;
    }
	interface IOptionSetAttributeComponents extends IEnumAttributeComponents<OptionSetControlMock, number> {
        format?: Xrm.Attributes.OptionSetAttributeFormat;
        options?: Xrm.OptionSetValue[];
        selectedOption?: Xrm.OptionSetValue;
    }
	class OptionMetadataMock implements Xrm.Metadata.OptionMetadata {
        Value: number;
        Color: string;
        IsManaged: boolean;
        ExternalValue: any;
        MetadataId: string;
        HasChanged: boolean;
        State: number;
        TransitionData: any;
        Label: Xrm.Metadata.Label;
        Description: Xrm.Metadata.Label;
        constructor(components: IOptionMetadataComponents);
    }
	interface IOptionMetadataComponents {
        Value?: number;
        Color?: string;
        IsManaged?: boolean;
        ExternalValue?: any;
        MetadataId?: string;
        HasChanged?: boolean;
        State?: number;
        TransitionData?: any;
        Label?: Xrm.Metadata.Label;
        Description?: Xrm.Metadata.Label;
    }
	class OrganizationSettingsMock implements Xrm.OrganizationSettings {
        baseCurrencyId: string;
        defaultCountryCode: string;
        isAutoSaveEnabled: boolean;
        languageId: number;
        organizationId: string;
        uniqueName: string;
        useSkypeProtocol: boolean;
        constructor(components: IOrganizationSettingsComponents);
    }
	interface IOrganizationSettingsComponents {
        baseCurrencyId?: string;
        defaultCountryCode?: string;
        isAutoSaveEnabled?: boolean;
        languageId?: number;
        organizationId?: string;
        uniqueName?: string;
        useSkypeProtocol?: boolean;
    }
	class PageMock implements Xrm.FormContext {
        context: Xrm.GlobalContext;
        data: Xrm.Data;
        ui: Xrm.Ui;
        constructor(context: Xrm.GlobalContext, formContext: Xrm.FormContext);
        getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: number | string): T;
        getAttribute<T extends Xrm.Attributes.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
        getControl<T extends Xrm.Controls.Control>(controlNameOrIndex: string | number): T;
        getControl<T extends Xrm.Controls.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    }
	class PanelMock implements Xrm.Panel {
        loadPanel(url: string, title: string): void;
    }
	class PickFileOptionsMock implements Xrm.Device.PickFileOptions {
        accept: Xrm.Device.PickFileTypes;
        allowMultipleFiles: boolean;
        maximumAllowedFileSize: number;
        constructor(accept: Xrm.Device.PickFileTypes, allowMultipleFiles: boolean, maximumAllowedFileSize: number);
    }
	class PrivilegeMock implements Xrm.Privilege {
        canRead: boolean;
        canUpdate: boolean;
        canCreate: boolean;
        constructor(canRead: boolean, canUpdate: boolean, canCreate: boolean);
    }
	class ProcessControlMock implements Xrm.Controls.ProcessControl {
        constructor(displayState: Xrm.DisplayState, getVisibleElement: Xrm.Controls.UiCanGetVisibleElement, setVisibleElement: Xrm.Controls.UiCanSetVisibleElement);
        getVisible(): boolean;
        setVisible(visible: boolean): void;
        setDisplayState(displayState: Xrm.DisplayState): void;
        getDisplayState(): Xrm.DisplayState;
        reflow(updateUI: boolean, parentStage: string, nextStage: string): void;
    }
	class ProcessDictionaryMock implements Xrm.ProcessFlow.ProcessDictionary {
        [index: string]: string;
        constructor(index: any);
    }
	class StageMock implements Xrm.ProcessFlow.Stage {
        id: string;
        name: string;
        status: Xrm.ProcessFlow.StageStatus;
        category: XrmEnum.StageCategory;
        steps: Xrm.ProcessFlow.Step[];
        constructor(id: string, name: string, status: Xrm.ProcessFlow.StageStatus, category?: XrmEnum.StageCategory, steps?: Xrm.ProcessFlow.Step[]);
        getCategory(): {
            getValue(): XrmEnum.StageCategory;
        };
        getEntityName(): string;
        getId(): string;
        getName(): string;
        getStatus(): Xrm.ProcessFlow.StageStatus;
        getSteps(): Xrm.ProcessFlow.Step[];
        _setStatus(status: Xrm.ProcessFlow.StageStatus): void;
    }
	class ProcessManagerMock implements Xrm.ProcessFlow.ProcessManager {
        enabledProcesses: Xrm.Page.Process[] | Xrm.ProcessFlow.ProcessDictionary;
        constructor(enabledProcesses: Xrm.ProcessFlow.Process[]);
        getActiveProcess(): Xrm.ProcessFlow.Process;
        setActiveProcess(processId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
        setActiveProcessInstance(processInstanceId: string, callbackFunction: Xrm.ProcessFlow.SetProcessInstanceDelegate): void;
        getProcessInstances(callbackFunction: Xrm.ProcessFlow.GetProcessInstancesDelegate): void;
        addOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void;
        removeOnProcessStatusChange(handler: Xrm.Events.ProcessStatusChangeHandler): void;
        getInstanceId(): string;
        getInstanceName(): string;
        getStatus(): Xrm.ProcessFlow.ProcessStatus;
        setStatus(status: Xrm.ProcessFlow.ProcessStatus, callbackFunction: Xrm.ProcessFlow.ProcessSetStatusDelegate): void;
        getActiveStage(): StageMock | Xrm.ProcessFlow.Stage;
        setActiveStage(stageId: string, callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
        getActivePath(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
        getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.ProcessFlow.ProcessDictionary) => void): void;
        getSelectedStage(): Xrm.ProcessFlow.Stage;
        addOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
        addOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void;
        removeOnStageChange(handler: Xrm.Events.ContextSensitiveHandler): void;
        removeOnStageSelected(handler: Xrm.Events.ContextSensitiveHandler): void;
        moveNext(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
        movePrevious(callbackFunction?: Xrm.ProcessFlow.ProcessCallbackDelegate): void;
    }
	class ProcessMock implements Xrm.ProcessFlow.Process {
        id: string;
        name: string;
        stages: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
        rendered: boolean;
        constructor(components: IProcessComponents);
        getId(): string;
        getName(): string;
        getStages(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
        isRendered(): boolean;
    }
	interface IProcessComponents {
        id: string;
        name: string;
        stages: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
        rendered: boolean;
    }
	class RelationshipMock implements Xrm.Navigation.Relationship {
        attributeName: string;
        name: string;
        navigationPropertyName?: string;
        relationshipType?: XrmEnum.RelationshipType;
        roleType?: XrmEnum.RoleType;
        constructor(components: IRelationshipComponents);
    }
	interface IRelationshipComponents {
        attributeName: string;
        name: string;
        navigationPropertyName?: string;
        relationshipType?: XrmEnum.RelationshipType;
        roleType?: XrmEnum.RoleType;
    }
	class ReportOpenParametersMock implements Xrm.Url.ReportOpenParameters {
        action: Xrm.Url.ReportAction;
        helpID?: string;
        id: string;
        constructor(action: Xrm.Url.ReportAction, id: string, helpID?: string);
    }
	class RetrieveMultipleRequestMock implements Xrm.RetrieveMultipleResult {
        entities: any[];
        nextLink: string;
        constructor(entities: any[], nextLink: string);
    }
	class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
        getSaveMode(): XrmEnum.SaveMode;
        isDefaultPrevented(): boolean;
        preventDefault(): void;
    }
	class SaveEventContextMock implements Xrm.Events.SaveEventContext {
        constructor(eventContext: Xrm.Events.EventContext);
        getContext(): Xrm.GlobalContext;
        getDepth(): number;
        getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
        getFormContext(): Xrm.FormContext;
        getSharedVariable<T>(key: string): T;
        setSharedVariable<T>(key: string, value: T): void;
        getEventArgs(): Xrm.Events.SaveEventArguments;
    }
	class SaveOptionsMock implements Xrm.SaveOptions {
        UseSchedulingEngine?: boolean;
        constructor(UseSchedulingEngine?: boolean);
    }
	class StageChangeEventArgumentsMock implements Xrm.Events.StageChangeEventArguments {
        getDirection(): Xrm.ProcessFlow.StageChangeDirection;
        getStage(): Xrm.ProcessFlow.Stage;
    }
	class StageChangeEventContextMock implements Xrm.Events.StageChangeEventContext {
        constructor(eventContext: Xrm.Events.EventContext);
        getContext(): Xrm.GlobalContext;
        getDepth(): number;
        getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
        getFormContext(): Xrm.FormContext;
        getSharedVariable<T>(key: string): T;
        setSharedVariable<T>(key: string, value: T): void;
        getEventArgs(): Xrm.Events.StageChangeEventArguments;
    }
	class StageSelectedEventArgumentsMock implements Xrm.Events.StageSelectedEventArguments {
        getStage(): Xrm.ProcessFlow.Stage;
    }
	class StageSelectedEventContextMock implements Xrm.Events.StageSelectedEventContext {
        constructor(eventContext: Xrm.Events.EventContext);
        getContext(): Xrm.GlobalContext;
        getDepth(): number;
        getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
        getFormContext(): Xrm.FormContext;
        getSharedVariable<T>(key: string): T;
        setSharedVariable<T>(key: string, value: T): void;
        getEventArgs(): Xrm.Events.StageChangeEventArguments;
    }
	class StepMock implements Xrm.ProcessFlow.Step {
        required: boolean;
        name: string;
        attribute: string;
        constructor(name: string, attribute: string, required: boolean);
        getAttribute(): string;
        getName(): string;
        isRequired(): boolean;
    }
	class StringControlMock extends AutoLookupControlMock<StringControlMock, StringAttributeMock, string> implements Xrm.Controls.StringControl {
        constructor(components: IStringControlComponents);
    }
	interface IStringControlComponents extends IAttStringControlComponents, IAutoLookupControlComponents<StringControlMock, StringAttributeMock, string> {
        name: string;
    }
	interface IAttStringControlComponents extends IAttAutoLookupControlComponents<StringControlMock, StringAttributeMock, string> {
    }
	class StringAttributeMock extends AttributeMock<StringControlMock, string> implements Xrm.Attributes.StringAttribute {
        static create(name: string, value?: string): StringAttributeMock;
        maxLength: number;
        constructor(components: IStringAttributeComponents);
        getFormat(): Xrm.Attributes.StringAttributeFormat;
        getMaxLength(): number;
        setValue(value: string): void;
    }
	interface IStringAttributeComponents extends IAttributeComponents<StringControlMock, string> {
        format?: Xrm.Attributes.StringAttributeFormat;
        maxLength?: number;
    }
	class TimelineWallMock extends ControlMock implements Xrm.Controls.TimelineWall {
        refresh(): void;
    }
	class UserSettingsMock implements Xrm.UserSettings {
        defaultDashboardId: string;
        isGuidedHelpEnabled: boolean;
        isHighContrastEnabled: boolean;
        isRTL: boolean;
        languageId: number;
        securityRolePrivileges: string[];
        securityRoles: string[];
        transactionCurrencyId: string;
        userId: string;
        userName: string;
        constructor(components: IUserSettingsComponents);
        dateFormattingInfo(): Xrm.DateFormattingInfo;
        getTimeZoneOffsetMinutes(): number;
    }
	interface IUserSettingsComponents {
        defaultDashboardId?: string;
        isGuidedHelpEnabled: boolean;
        isHighContrastEnabled: boolean;
        isRTL: boolean;
        languageId?: number;
        securityRolePrivileges?: string[];
        securityRoles?: string[];
        transactionCurrencyId?: string;
        userId: string;
        userName: string;
    }
	class ViewSelectorMock implements Xrm.Controls.ViewSelector {
        constructor(isVisible: boolean);
        getCurrentView(): Xrm.Controls.ViewSelectorItem;
        isVisible(): boolean;
        setCurrentView(viewSelectorItem: Xrm.Controls.ViewSelectorItem): void;
    }
	class ViewSelectorItemMock implements Xrm.Controls.ViewSelectorItem {
        constructor(reference: Xrm.LookupValue);
        getEntityReference(): Xrm.LookupValue;
    }
	class WebApiMock implements Xrm.WebApi {
        online: Xrm.WebApiOnline;
        offline: Xrm.WebApiOffline;
        constructor(clientContext: Xrm.ClientContext, online: Xrm.WebApiOnline, offline: Xrm.WebApiOffline);
        createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse>;
        deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string>;
        retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any>;
        retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult>;
        updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any>;
        isAvailableOffline(entityLogicalName: string): boolean;
    }
	class WebApiOfflineMock implements Xrm.WebApiOffline {
        createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse>;
        deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string>;
        retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any>;
        retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult>;
        updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any>;
    }
	class WebApiOnlineMock implements Xrm.WebApiOnline {
        constructor(offlineCapabilities: Xrm.WebApiOffline);
        execute(request: any): Xrm.Async.PromiseLike<Xrm.ExecuteResponse>;
        executeMultiple(request: any[]): Xrm.Async.PromiseLike<Xrm.ExecuteResponse[]>;
        createRecord(entityLogicalName: string, record: any): Xrm.Async.PromiseLike<Xrm.CreateResponse>;
        deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string>;
        retrieveRecord(entityLogicalName: string, id: string, options: string): Xrm.Async.PromiseLike<any>;
        retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult>;
        updateRecord(entityLogicalName: string, id: string, data: any): Xrm.Async.PromiseLike<any>;
    }
	class XrmStaticMock implements Xrm.XrmStatic {
        Device: Xrm.Device;
        Encoding: Xrm.Encoding;
        Mobile: Xrm.Mobile;
        Navigation: NavigationStaticMock;
        Page: PageMock;
        Panel: Xrm.Panel;
        Utility: UtilityMock;
        WebApi: Xrm.WebApi;
        constructor(components: IXrmStaticComponents);
    }
	interface IXrmStaticComponents {
        device?: Xrm.Device;
        encoding?: Xrm.Encoding;
        mobile?: Xrm.Mobile;
        navigation?: NavigationStaticMock;
        page?: PageMock;
        panel?: Xrm.Panel;
        utility?: UtilityMock;
        webApi?: Xrm.WebApi;
    }
	class WindowMock {
        Xrm: XrmStaticMock;
        constructor(xrm: XrmStaticMock);
        GetGlobalContext(): Xrm.GlobalContext;
    }
	class ErrorCallbackObjectMock implements Xrm.Async.ErrorCallbackObject {
        errorCode: number;
        message: string;
        constructor(errorCode: number, message: string);
    }
	class OfflineErrorCallbackObjectMock implements Xrm.Async.OfflineErrorCallbackObject {
        debugMessage: string;
        errorCallbackObject: Xrm.Async.ErrorCallbackObject;
        errorCode: number;
        message: string;
        constructor(errorCallbackObject: Xrm.Async.ErrorCallbackObject, debugMessage: string);
    }
	class OfflineOperationSuccessCallbackObjectMock implements Xrm.Async.OfflineOperationSuccessCallbackObject {
        id: string;
        logicalName: string;
        constructor(id: string, logicalName: string);
    }
	class OpenQuickCreateSuccessCallbackObjectMock implements Xrm.Async.OpenQuickCreateSuccessCallbackObject {
        savedEntityReference: Xrm.LookupValue;
        constructor(savedEntityReference: Xrm.LookupValue);
    }
	class XrmPromiseMock<TSuccessCallback, TErrorCallback> implements Xrm.Async.PromiseLike<TSuccessCallback> {
        then<U>(onFulfilled?: (value: TSuccessCallback) => U | Xrm.Async.PromiseLike<U>, onRejected?: (error: any) => U | Xrm.Async.PromiseLike<U> | void): Xrm.Async.PromiseLike<U>;
        fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
        always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
        catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
        finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    }
}