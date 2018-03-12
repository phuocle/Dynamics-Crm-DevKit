var intellisense = intellisense || {};
intellisense.ForEach = function (callback) {
    ///<summary>
    ///Applies the action contained in a delegate function.
    ///</summary>
    ///<param name="callback" type="Function">callback function(item, index)</param>
    ///<returns type="void" />
}
intellisense.Get = function (value) {
    ///<signature>
    ///<summary>
    ///Get one or more objects from the collection depending on the arguments passed.
    ///</summary>
    ///<param name="value" type="Object">All the objects in the collection</param>
    ///<returns type="Array" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Get one or more objects from the collection depending on the arguments passed.
    ///</summary>
    ///<param name="value" type="String">The object where the name matches the argument</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Get one or more objects from the collection depending on the arguments passed.
    ///</summary>
    ///<param name="value" type="Integer">The object where the index matches the number</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Get one or more objects from the collection depending on the arguments passed.
    ///</summary>
    ///<param name="value" type="Function">delegate function(item, index)
    ///<para/>Any objects that cause the delegate function to return true.
    ///</param>
    ///<returns type="Object" />
    ///</signature>
}
intellisense.GetLength = function () {
    ///<summary>
    ///Gets the count of items in the collection.
    ///</summary>
    ///<returns type="Integer" />
}
intellisense.FunctionFormAddOnSave = function (callback) {
    ///<summary>
    ///Adds a function to be called when the record is saved. The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
    ///</summary>
    ///<param name="callback" type="Function">A callback function</param>
    ///<returns type="void" />
}
intellisense.CrmCollection = {
    ///<field name="forEach" type="Function"></field>
    forEach: intellisense.ForEach,
    ///<field name="get" type="Function"></field>
    get: intellisense.Get,
    ///<field name="getLength" type="Function"></field>
    getLength: intellisense.GetLength
}
intellisense.FunctionFormClearFormNotification = function (uniqueId) {
    ///<summary>Use this method to remove form level notifications.</summary>
    ///<param name="uniqueId" type="String">A unique identifier for the message used with setFormNotification to set the notification.</param>
    ///<returns type="Boolean" />
}
intellisense.FunctionFormClose = function () {
    ///<summary>To close a form window.</summary>
    ///<returns type="void" />
}
intellisense.LookupObject = {
    ///<field name="entityType" type="String">[Get] returns logical name of the entity record</field>
    entityType: '',
    ///<field name="id" type="Uniqueidentifier">[Get] returns GUID value of the entity record.</field>
    id: '',
    ///<field name="name" type="String">[Get] returns name of the entity record.</field>
    name: ''
}
intellisense.OptionSetObject = {
    ///<field name="text" type="String">[Get] returns the text of OptionSet</field>
    text: '',
    ///<field name="value" type="Integer">[Get] return the value of OptionSet</field>
    value: ''
}
intellisense.FunctionFormEntitySave = function (saveOption) {
    ///<summary>
    ///Saves the record synchronously with the options to close the form or open a new form after the save is completed.
    ///</summary>
    ///<param name="saveOption" type="OptionSet.SaveOption">Action when save</param>
    ///<returns type="void" />
}
intellisense.FunctionFormRefresh = function (save, successCallback, errorCallback) {
    ///<summary>
    ///Asynchronously refreshes and optionally saves all the data of the form without reloading the page.
    ///</summary>
    ///<param name="save" type="Boolean">true if the data should be saved after it is refreshed, otherwise false.</param>
    ///<param name="successCallback" type="Function">A function to call when the operation succeeds.</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionFormRefreshRibbon = function (refreshAll) {
    ///<summary>
    ///Causes the ribbon to re-evaluate data that controls what is displayed in it.
    ///</summary>
    ///<param name="refreshAll" type="Boolean">Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed.</param>
    ///<returns type="void" />
}
intellisense.FunctionFormRemoveOnLoad = function (callback) {
    ///<summary>
    ///Removes a function from the form OnLoad event.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed from the form OnLoad event.</param>
    ///<returns type="void" />
}
intellisense.FunctionFormRemoveOnSave = function (callback) {
    ///<summary>
    ///Removes a function to be called when form data is loaded.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed for the OnSave event.</param>
    ///<returns type="void" />
}
intellisense.FunctionFormSave = function (saveOptions, successCallback, errorCallback) {
    ///<summary>
    ///Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed.
    ///</summary>
    ///<param name="saveOptions" type="Object">An object for specifying options for saving the record. The object has following attributes:
    ///<para/>saveMode (Optional) OptionSet.SaveMode | Specify a value indicating how the save event was initiated. For a list of supported values, see value of the OptionSet.SaveMode. Note that setting the saveMode does not actually take the corresponding action; it is just to provide information to the OnSave event handlers about the reason for the save operation.
    ///<para/>useSchedulingEngine (Optional) Boolean | Indicate whether to use the Book or Reschedule messages rather than the Create or Update messages. This option is only applicable when used with appointment, recurring appointment, or service activity records.</param>
    ///<param name="successCallback" type="Function">A function to call when the operation succeeds.</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails. An object with the following properties will be passed:
    ///<para/>errorCode Number | The error code.
    ///<para/>message String | A localized error message.</param>
    ///<returns type="void" />
}
intellisense.FunctionFormSetFormNotification = function (message, level, uniqueId) {
    ///<summary>
    ///Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed.
    ///</summary>
    ///<param name="message" type="String">The text of the message.</param>
    ///<param name="level" type="OptionSet.FormNotificationLevel">The level of the message, which defines how the message will be displayed.</param>
    ///<param name="uniqueId" type="String">A unique identifier for the message that can be used later with ClearFormNotification to remove the notification.</param>
    ///<returns type="Boolean" />
}
intellisense.FunctionFormFormNavigate = function (formId) {
    ///<summary>
    ///Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads.
    ///</summary>
    ///<param name="formId" type="String">The form Id that you want navigate</param>
    ///<returns type="void" />
}
intellisense.FunctionTabAddTabStateChange = function (callback) {
    ///<summary>
    ///Adds a function to be called when the TabStateChange event occurs.
    ///</summary>
    ///<param name="callback" type="Function">The function to be executed on the TabStateChange event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.</param>
    ///<returns type="void" />
}
intellisense.FunctionTabRemoveTabStateChange = function (callback) {
    ///<summary>
    ///Removes a function to be called when the TabStateChange event occurs.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed from the TabStateChange event.</param>
    ///<returns type="void" />
}
intellisense.FunctionControlFocus = function () {
    ///<summary>
    ///Sets the focus on control.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FormSection = {
    ///<field name="name" type="String">[Get] returns the name of the section.</field>
    Name: '',
    ///<field name="label" type="String">[GetSet] the sesction label.</field>
    Label: '',
    ///<field name="visible" type="Boolean">[GetSet] a value that indicates whether the section is visible.</field>
    Visible: '',
    ///<field name="parent" type="Object">[Get] returns the tab containing the section.</field>
    Parent: ''
}
intellisense.FunctionProcessMoveNext = function (callback) {
    ///<summary>
    ///Progresses to the next stage. You can also move to a next stage in a different entity.
    ///<para/>Note: This method can only be used when the selected stage and the active stage are the same.
    ///</summary>
    ///<param name="callback" type="Function">A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation:
    ///<para/>success | The operation succeeded.
    ///<para/>crossEntity | The next stage is for a different entity.
    ///<para/>end | The active stage is the last stage of the active path.
    ///<para/>invalid | The operation failed because the selected stage isn’t the same as the active stage.
    ///<para/>invalid | The operation failed because the selected stage isn’t the same as the active stage.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessMovePrevious = function (callback) {
    ///<summary>
    ///Moves to the previous stage. You can also move to a previous stage in a different entity.
    ///<para/>Note: This method can only be used when the selected stage and the active stage are the same.
    ///</summary>
    ///<param name="callback" type="Function">A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation:
    ///<para/>success | The operation succeeded.
    ///<para/>crossEntity | The next stage is for a different entity.
    ///<para/>end | The active stage is the last stage of the active path.
    ///<para/>invalid | The operation failed because the selected stage isn’t the same as the active stage.
    ///<para/>invalid | The operation failed because the selected stage isn’t the same as the active stage.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessEnabledProcesses = function (callback) {
    ///<summary>
    ///Asynchronously retrieves the business process flows enabled for an entity that the current user can switch to.
    ///</summary>
    ///<param name="callback" type="Function">The callback function must accept a parameter that contains an object with dictionary properties where the name of the property is the Id of the business process flow and the value of the property is the name of the business process flow. The enabled processes are filtered according to the user’s privileges. The list of enabled processes is the same ones a user can see in the UI if they want to change the process manually.</param>
    ///<returns type="void" />
}
intellisense.StageObject = {
    ///<field name="Category" type="OptionSet.ProcessCategory">[Get] returns the currently selected stage.</field>
    Category: '',
    ///<field name="EntityName" type="String">[Get] returns the logical name of the entity associated with the stage.</field>
    EntityName: '',
    ///<field name="Id" type="String">[Get] returns the unique identifier of the stage.</field>
    Id: '',
    ///<field name="Name" type="String">[Get] returns the name of the stage.</field>
    Name: '',
    ///<field name="Status" type="String">[Get] returns the status of the stage.</field>
    Status: '',
    ///<field name="Steps" type="Object">[Get] returns a collection of steps in the stage.</field>
    Steps: intellisense.CrmCollection,
}
intellisense.ProcessObject = {
    ///<field name="Id" type="String">[Get] returns the unique identifier of the process.</field>
    Id: '',
    ///<field name="Name" type="String">[Get] returns the name of the process.</field>
    Name: '',
    ///<field name="Stages" type="Object">[Get] returns a collection of stages in the process.</field>
    Stages: intellisense.CrmCollection,
    ///<field name="IsRendered" type="Boolean">[Get] returns a boolean value indicating whether the process is rendered.</field>
    IsRendered: ''
}
intellisense.FunctionProcessSetActiveStage = function (stageId, callback) {
    ///<summary>
    ///Sets a completed stage as the active stage.
    ///<para/>Note: This method can only be used when the selected stage and the active stage are the same.
    ///</summary>
    ///<param name="stageId" type="String">The ID of the completed stage for the entity to make the active stage.</param>
    ///<param name="callback" type="Function">A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation:
    ///<para/>success | The operation succeeded.
    ///<para/>invalid | There are three reasons why this value may be returned: The stageId parameter is a non-existent stage ID value. The active stage isn’t the selected stage.The record hasn’t been saved yet.
    ///<para/>unreachable | The stage exists on a different path.
    ///<para/>dirtyForm	| This value will be returned if the data in the page is not saved.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessProcessInstances = function (callback) {
    ///<summary>
    ///Returns all the process instances for the entity record that the calling user has access to.
    ///</summary>
    ///<param name="callback" type="Function">The callback function is passed an object with the following attributes and their corresponding values as the key: value pair. All returned values are of String type except for CreatedOnDate, which is of Date type.
    ///<para/>CreatedOnDate
    ///<para/>ProcessDefinitionID
    ///<para/>ProcessDefinitionName
    ///<para/>ProcessInstanceID
    ///<para/>ProcessInstanceName
    ///<para/>StatusCodeName
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessSetActiveProcessInstance = function (processInstanceId, callback) {
    ///<summary>
    ///Sets a process instance as the active instance.
    ///</summary>
    ///<param name="processInstanceId" type="String">The Id of the process instance to set as the active instance.</param>
    ///<param name="callback" type="Function">A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded:
    ///<para/>success | The operation succeeded.
    ///<para/>invalid | The processInstanceId isn’t valid or the process isn’t enabled.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessSetActiveProcess = function (processId, callback) {
    ///<summary>
    ///Sets a Process as the active process.
    ///</summary>
    ///<param name="processId" type="String">The Id of the process to set as the active process.</param>
    ///<param name="callback" type="Function">A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded:
    ///<para/>success | The operation succeeded.
    ///<para/>invalid | The processId  isn’t valid or the process isn’t enabled.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessAddOnProcessStatusChange = function (callback) {
    ///<summary>
    ///Removes an event handler from the OnProcessStatusChange event.
    ///</summary>
    ///<param name="callback" type="Function">The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. You should use a reference to a named function rather than an anonymous function if you may later want to remove the event handler.</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessRemoveOnProcessStatusChange = function (callback) {
    ///<summary>
    ///Adds a function as an event handler for the OnProcessStatusChange event so that it will be called when the business process flow status changes.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed from the OnProcessStatusChange event.</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessAddOnStageChange = function (callback) {
    ///<summary>
    ///Adds a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes.
    ///</summary>
    ///<param name="callback" type="Function">The function to be executed when the business process flow stage changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. You should use a reference to a named function rather than an anonymous function if you may later want to remove the event handler.</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessRemoveOnStageChange = function (callback) {
    ///<summary>
    ///Removes an event handler from the OnStageChange event.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed from the OnStageChange event.</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessAddOnStageSelected = function (callback) {
    ///<summary>
    ///Adds a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected.
    ///</summary>
    ///<param name="callback" type="Function">The function to be executed when the business process flow stage is selected. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. You should use a reference to a named function rather than an anonymous function if you may later want to remove the event handler.</param>
    ///<returns type="void" />
}
intellisense.FunctionProcessRemoveOnStageSelected = function (callback) {
    ///<summary>
    ///Removes an event handler from the OnStageSelected event.
    ///</summary>
    ///<param name="callback" type="Function">The function to be removed from the OnStageSelected event.</param>
    ///<returns type="void" />
}
intellisense.Process = {
    ///<field name="MoveNext" type="Function"></field>
    MoveNext: intellisense.FunctionProcessMoveNext,
    ///<field name="MovePrevious" type="Function"></field>
    MovePrevious: intellisense.FunctionProcessMovePrevious,
    ///<field name="ActivePath" type="Object">[Get] returns a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control. The active path represents stages currently rendered in the process control based on the branching rules and current data in the record.</field>
    ActivePath: intellisense.CrmCollection,
    ///<field name="EnabledProcesses" type="Function"></field>
    EnabledProcesses: intellisense.FunctionProcessEnabledProcesses,
    ///<field name="ActiveStage" type="Object">[Get] returns a collection of stagees object representing the active stage.</field>
    ActiveStage: intellisense.StageObject,
    ///<field name="SelectedStage" type="Object">[Get] returns the currently selected stage.</field>
    SelectedStage: intellisense.StageObject,
    ///<field name="SetActiveStage" type="Function"></field>
    SetActiveStage: intellisense.FunctionProcessSetActiveStage,
    ///<field name="ProcessInstances" type="Function"></field>
    ProcessInstances: intellisense.FunctionProcessProcessInstances,
    ///<field name="ActiveProcessInstance" type="Function"></field>
    SetActiveProcessInstance: intellisense.FunctionProcessSetActiveProcessInstance,
    ///<field name="ActiveProcess" type="Object">[Get] returns a process object representing the active process.</field>
    ActiveProcess: intellisense.ProcessObject,
    ///<field name="SetActiveProcess" type="Function"></field>
    SetActiveProcess: intellisense.FunctionProcessSetActiveProcess,
    ///<field name="AddOnProcessStatusChange" type="Function"></field>
    AddOnProcessStatusChange: intellisense.FunctionProcessAddOnProcessStatusChange,
    ///<field name="RemoveOnProcessStatusChange" type="Function"></field>
    RemoveOnProcessStatusChange: intellisense.FunctionProcessRemoveOnProcessStatusChange,
    ///<field name="AddOnStageChange" type="Function"></field>
    AddOnStageChange: intellisense.FunctionProcessAddOnStageChange,
    ///<field name="RemoveOnStageChange" type="Function"></field>
    RemoveOnStageChange: intellisense.FunctionProcessRemoveOnStageChange,
    ///<field name="AddOnStageSelected" type="Function"></field>
    AddOnStageSelected: intellisense.FunctionProcessAddOnStageSelected,
    ///<field name="RemoveOnStageSelected" type="Function"></field>
    RemoveOnStageSelected: intellisense.FunctionProcessRemoveOnStageSelected
}
intellisense.FunctionUtilityCloseProgressIndicator = function () {
    ///<summary>
    ///Closes a progress dialog box.
    ///<para/>If no progress dialog is displayed currently, this method will do nothing. You can display a progress dialog using the ShowProgressIndicator method.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FunctionUtilityAllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
    ///<summary>
    ///Returns the valid state transitions for the specified entity type and state code.
    ///</summary>
    ///<param name="entityName" type="String">The logical name of the entity.</param>
    ///<param name="stateCode" type="Integer">The state code to find out the allowed status transition values.</param>
    ///<param name="successCallback" type="Function">The function to execute when the operation succeeds.</param>
    ///<param name="errorCallback" type="Function">The function to execute when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityEntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
    ///<summary>
    ///Returns the entity metadata for the specified entity.
    ///</summary>
    ///<param name="entityName" type="String">The logical name of the entity.</param>
    ///<param name="attributes" type="Array">The attributes to get metadata for.</param>
    ///<param name="successCallback" type="Function">A callback success.</param>
    ///<param name="errorCallback" type="Function">A callback error.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityShowProgressIndicator = function (message) {
    ///<summary>
    ///Displays a progress dialog with the specified message.
    ///<para/>Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call.
    ///</summary>
    ///<param name="message" type="String">The message to be displayed in the progress dialog.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityResourceString = function (webResourceName, key) {
    ///<summary>
    ///Returns the localized string for a given key associated with the specified web resource.
    ///</summary>
    ///<param name="webResourceName" type="String">The name of the web resource.</param>
    ///<param name="key" type="String">The key for the localized string.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityInvokeProcessAction = function (name, parameter, successCallback, errorCallback) {
    ///<summary>
    ///Invokes an action based on the specified parameters.
    ///</summary>
    ///<param name="name" type="String">Name of the process action to invoke.</param>
    ///<param name="parameter" type="Object">An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.</param>
    ///<param name="successCallback" type="Function">A function to call when the action is invoked.</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityLookupObjects = function (lookupOptions, successCallback, cancelCallback) {
    ///<summary>
    ///Invokes an action based on the specified parameters.
    ///</summary>
    ///<param name="lookupOptions" type="Object">Defines the options for opening the lookup dialog. Has the following properties:
    ///<para/>allowMultiSelect Boolean | Indicates whether the lookup allows more than one item to be selected.
    ///<para/>defaultEntityType String | The default entity type to use.
    ///<para/>defaultViewId String | The default view to use.
    ///<para/>entityTypes Array | The entity types to display.
    ///<para/>showBarcodeScanner Boolean | Indicates whether the lookup control should show the barcode scanner in mobile clients.
    ///<para/>viewIds Array | The views to be available in the view picker. Only system views are supported.
    ///</param>
    ///<param name="successCallback" type="Function">A function to call when the lookup control is invoked. An object with the following properties is passed:
    ///<para/>entityType String | Entity type of the record selected in the lookup control.
    ///<para/>id String | ID of the record selected in the lookup control.
    ///<para/>name String | Name of the record selected in the lookup control.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when you cancel the lookup control or the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityRefreshParentGrid = function (lookupOptions) {
    ///<summary>
    ///Refreshes the parent grid containing the specified record.
    ///</summary>
    ///<param name="lookupOptions" type="Object">An object with the following properties to specify the record:
    ///<para/>entityType String | Entity type of the record.
    ///<para/>id String | ID of the record.
    ///<para/>name String | Name of the record.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionClientIsOffline = function () {
    ///<summary>
    ///Returns information whether the server is online or offline
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FunctionOrganizationSettingsIsAutoSaveEnabled = function () {
    ///<summary>
    ///Indicates whether the auto-save option is enabled for the current organization.
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FunctionUserSettingsIsGuidedHelpEnabled = function () {
    ///<summary>
    ///Indicates whether guided help is enabled for the current user.
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FunctionUserSettingsIsHighContrastEnabled = function () {
    ///<summary>
    ///Indicates whether high contrast is enabled for the current user.
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FunctionUserSettingsIsRTL = function () {
    ///<summary>
    ///Indicates whether the language for the current user is a right-to-left (RTL) language.
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FunctionUserSettingsTimeZoneOffsetMinutes = function () {
    ///<summary>
    ///Returns the difference in minutes between the local time and Coordinated Universal Time (UTC).
    ///</summary>
    ///<returns type="Integer" />
}
intellisense.FunctionUtilityAdvancedConfigSetting = function (setting) {
    ///<summary>
    ///Returns information about the advanced configuration settings for the organization.
    ///</summary>
    ///<param name="setting" type="OptionSet.AdvancedConfigSetting">Name of the configuration setting.</param>
    ///<returns type="Object" />
}
intellisense.FunctionUtilityCurrentAppName = function (successCallback, errorCallback) {
    ///<summary>
    ///Returns the name of the current business app in Customer Engagement.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when the business app name is returned.</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityCurrentAppProperties = function (successCallback, errorCallback) {
    ///<summary>
    ///Returns the properties of the current business app in Customer Engagement.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when the business app property information is returned. An object with the following attributes (app properties) is passed to the function :
    ///<para/>appId
    ///<para/>displayName
    ///<para/>uniqueName
    ///<para/>url
    ///<para/>webResourceId
    ///<para/>webResourceName
    ///<para/>welcomePageId
    ///<para/>welcomePageName
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityPrependOrgName = function (sPath) {
    ///<summary>
    ///Prefixes the current organization's unique name to a string, typically a URL path.
    ///</summary>
    ///<param name="sPath" type="String">A local path to a resource.</param>
    ///<returns type="String" />
}
intellisense.FunctionUtilityOpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
    ///<summary>
    ///Displays an alert dialog containing a message and a button.
    ///</summary>
    ///<param name="alertStrings" type="Object">The strings to be used in the alert dialog. The object contains the following attributes:
    ///<para/>confirmButtonLabel (Optional) String | The confirm button label. If you do not specify the button label, OK is used as the button label.
    ///<para/>text String | The message to be displyed in the alert dialog.
    ///</param>
    ///<param name="alertOptions" type="Object">The height and width options for alert dialog. The object contains the following attributes:
    ///<para/>height (Optional) Integer | Height of the alert dialog in pixels.
    ///<para/>width (Optional) Integer | Width of the alert dialog pixels.
    ///</param>
    ///<param name="closeCallback" type="Function">A function to execute when the alert dialog is closed by either clicking the confirm button or canceled by pressing ESC.</param>
    ///<param name="errorCallback" type="Function">A function to execute when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
    ///<summary>
    ///Displays a confirmation dialog box containing a message and two buttons.
    ///</summary>
    ///<param name="confirmStrings" type="Object">The strings to be used in the confirmation dialog. The object contains the following attributes:
    ///<para/>cancelButtonLabel (Optional) String | The cancel button label. If you do not specify the cancel button label, Cancel is used as the button label.
    ///<para/>confirmButtonLabel (Optional) String | The confirm button label. If you do not specify the confirm button label, OK is used as the button label.
    ///<para/>subtitle (Optional) String | The subtitle to be displayed in the confirmation dialog.
    ///<para/>text String | The message to be displyed in the confirmation dialog.
    ///<para/>title (Optional) String | The title to be displyed in the confirmation dialog.
    ///</param>
    ///<param name="confirmOptions" type="Object">The height and width options for confirmation dialog. The object contains the following attributes:
    ///<para/>height (Optional) Integer | Height of the confirmation dialog in pixels.
    ///<para/>width (Optional) Integer | Width of the confirmation dialog in pixels.
    ///</param>
    ///<param name="successCallback" type="Function">A function to execute when the confirmation dialog is closed by clicking the confirm, cancel, or X in the top-right corner of the dialog. An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.</param>
    ///<param name="errorCallback" type="Function">A function to execute when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
    ///<summary>
    ///Displays an error dialog.
    ///</summary>
    ///<param name="errorOptions" type="Object">An object to specify the options for error dialog. The object contains the following attributes:
    ///<para/>details (Optional) String | Details about the error. When you specify this, the Download Log File button is available in the error message, and clicking it will let users download a text file with the content specified in this attribute.
    ///<para/>errorCode (Optional) Integer | The error code. If you just set errorCode, the message for the error code is automatically retrieved from the server and displayed in the error dialog. If you specify an invalid errorCode value, an error dialog with a default error message is displyed.
    ///<para/>message (Optional) String | The message to be displayed in the error dialog.
    ///</param>
    ///<param name="successCallback" type="Function">A function to execute when the error dialog is closed.</param>
    ///<param name="errorCallback" type="Function">A function to execute when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenFile = function (file, openFileOptions) {
    ///<summary>
    ///Opens a file.
    ///</summary>
    ///<param name="file" type="Object">An object describing the file to open. The object has the following attributes:
    ///<para/>fileContent String | Contents of the file.
    ///<para/>fileName String | Name of the file.
    ///<para/>fileSize Integer | Size of the file in KB.
    ///<para/>mimeType String | MIME type of the file.
    ///</param>
    ///<param name="openFileOptions" type="OptionSet.OpenFileOption">Specify whether to open or save the file</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
    ///<summary>
    ///Opens an entity form or a quick create form.
    ///<para/> https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
    ///</summary>
    ///<param name="entityFormOptions" type="Object">Entity form options for opening the form. The object contains the following attributes:
    ///<para/> { cmdbar, createFromEntity, entityId, entityName, formId, height, navBar, openInNewWindow, windowPosition, processId, processInstanceId, relationship, selectedStageId, useQuickCreateForm, width }</param>
    ///<param name="formParameters" type="Object">A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error.</param>
    ///<param name="successCallback" type="Function">A function to execute when the entity form or quick create form is displayed. For an existing entity or when the entity form is opened, it passed a single lookup value to the function. For the quick create, it will return as many items as were created and in the order they were created.</param>
    ///<param name="errorCallback" type="Function">A function to execute when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenUrl = function (url, openUrlOptions) {
    ///<summary>
    ///Opens a URL, including file URLs.
    ///</summary>
    ///<param name="url" type="String">URL to open.</param>
    ///<param name="openUrlOptions" type="Object">Options to open the URL.The object contains the following attributes:
    ///<para/>height (Optional) Integer | Height of the window to display the resultant page in pixels.
    ///<para/>width (Optional) Integer | Width of the window to display the resultant page in pixels.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityOpenWebResource = function (webResourceName, windowOptions, data) {
    ///<summary>
    ///Opens an HTML web resource.
    ///</summary>
    ///<param name="webResourceName" type="String">Name of the HTML web resource to open.</param>
    ///<param name="windowOptions" type="Object">Window options for opening the web resource. The object contains the following attributes:
    ///<para/>height (Optional) Integer | Height of the window to open in pixels.
    ///<para/>openInNewWindow Boolean | Indicates whether to open the web resource in a new window.
    ///<para/>width (Optional) Integer | Width of the window to open in pixels.
    ///</param>
    ///<param name="data" type="String">Data to be passed into the data parameter.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityLoadPanel = function (url, title) {
    ///<summary>
    ///Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Dynamics 365 Customer Engagement web client.
    ///</summary>
    ///<param name="url" type="String">URL of the page to be loaded in the side pane static area.</param>
    ///<param name="title" type="String">Title of the side pane static area.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityXmlAttributeEncode = function (arg) {
    ///<summary>
    ///Applies XML encoding to a string.
    ///</summary>
    ///<param name="arg" type="String">String to be encoded.</param>
    ///<returns type="String" />
}
intellisense.FunctionUtilityXmlEncode = function (arg) {
    ///<summary>
    ///Applies attribute encoding to a string.
    ///</summary>
    ///<param name="arg" type="String">String to be encoded.</param>
    ///<returns type="String" />
}
intellisense.FunctionUtilityCaptureAudio = function (successCallback, errorCallback) {
    ///<summary>
    ///Invokes the device microphone to record audio.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when audio is returned. A base64 encoded audio object with the following attributes is passed to the function:
    ///<para/>fileContent String | Contents of the audio file.
    ///<para/>fileName String | Name of the audio file.
    ///<para/>fileSize Integer | Size of the audio file in KB.
    ///<para/>mimeType String | Audio file MIME type.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityCaptureImage = function (imageOptions, successCallback, errorCallback) {
    ///<summary>
    ///Invokes the device camera to capture an image.
    ///</summary>
    ///<param name="imageOptions" type="Object">An object with the following attributes:
    ///<para/>allowEdit Boolean | Indicates whether to edit the image before saving.
    ///<para/>height Integer | Height of the image to capture.
    ///<para/>preferFrontCamera Boolean | Indicates whether to capture image using the front camera of the device.
    ///<para/>quality Integer | Quality of the image file in percentage.
    ///<para/>width Integer | Width of the image to capture.
    ///</param>
    ///<param name="successCallback" type="Function">A function to call when image is returned. A base64 encoded image object with the following attributes is passed to the function:
    ///<para/>fileContent String | Contents of the image file.
    ///<para/>fileName String | Name of the image file.
    ///<para/>fileSize Integer | Size of the image file in KB.
    ///<para/>mimeType String | Image file MIME type.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityCaptureVideo = function (successCallback, errorCallback) {
    ///<summary>
    ///Invokes the device camera to record video.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when Video is returned. A base64 encoded Video object with the following attributes is passed to the function:
    ///<para/>fileContent String | Contents of the image file.
    ///<para/>fileName String | Name of the image file.
    ///<para/>fileSize Integer | Size of the image file in KB.
    ///<para/>mimeType String | Image file MIME type.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityBarcodeValue = function (successCallback, errorCallback) {
    ///<summary>
    ///Invokes the device camera to scan the barcode information, such as a product number.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when the barcode value is returned as a String.</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails. An error object with the message property (String) will be passed that describes the error details.</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityCurrentPosition = function (successCallback, errorCallback) {
    ///<summary>
    ///Returns the current location using the device geolocation capability.
    ///</summary>
    ///<param name="successCallback" type="Function">A function to call when the current geolocation information is returned. A geolocation object with the following attributes is passed to the function.:
    ///<para/>coords | Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed.
    ///<para/>timestamp | Represents the time when the object was acquired and is represented as DOMTimeStamp.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails. An object with the following properties will be passed:
    ///<para/>code Integer | The error code.
    ///<para/>message String | Localized message describing the error details.
    ///<para/>If the user location setting is not enabled on your mobile device, the error message indicates the same. If you are using an earlier version of the Dynamics 365 Customer Engagement mobile client or if geolocation capability is not available on your mobile device, null is passed to the error callback.
    ///</param>
    ///<returns type="void" />
}
intellisense.FunctionUtilityPickFile = function (pickFileOptions, successCallback, errorCallback) {
    ///<summary>
    ///Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
    ///</summary>
    ///<param name="pickFileOptions" type="Object">An object with the following attributes:
    ///<para/>accept String | Image file types to select. Valid values are "audio", "video", or "image".
    ///<para/>allowMultipleFiles Boolean | Indicates whether to allow selecting multiple files.
    ///<para/>maximumAllowedFileSize Integer | Maximum size of the files(s) to be selected.
    ///</param>
    ///<param name="successCallback" type="Function">A function to call when selected files are returned. An array of objects with each object having the following attributes is passed to the function:
    ///<para/>fileContent String | Contents of the image file.
    ///<para/>fileName String | Name of the image file.
    ///<para/>fileSize Integer | Size of the image file in KB.
    ///<para/>mimeType String | Image file MIME type.
    ///</param>
    ///<param name="errorCallback" type="Function">A function to call when the operation fails.</param>
    ///<returns type="void" />
}
intellisense.Client = {
    ///<field name="ClientName" type="OptionSet.ClientName">[Get] returns a value to indicate which client the script is executing in.</field>
    ClientName: '',
    ///<field name="ClientName" type="OptionSet.ClientState">[Get] returns a value to indicate the state of the client.</field>
    ClientState: '',
    ///<field name="FormFactor" type="OptionSet.FormFactor">[Get] returns information about the kind of device the user is using.</field>
    FormFactor: '',
    ///<field name="IsOffline" type="Function"></field>
    IsOffline: intellisense.FunctionClientIsOffline
}
intellisense.OrganizationSettings = {
    ///<field name="Attributes" type="Object">[Get] returns attributes and their values as key:value pairs that are available for the organization entity. Additional values will be available as attributes if they are specified as attribute dependencies in the web resource dependency list. The key will be the attribute logical name.</field>
    Attributes: '',
    ///<field name="BaseCurrencyId" type="String">[Get] returns the ID of the base currency for the current organization.</field>
    BaseCurrencyId: '',
    ///<field name="DefaultCountryCode" type="String">[Get] returns the default country/region code for phone numbers for the current organization.</field>
    DefaultCountryCode: '',
    ///<field name="IsAutoSaveEnabled" type="Function"></field>
    IsAutoSaveEnabled: intellisense.FunctionOrganizationSettingsIsAutoSaveEnabled,
    ///<field name="LanguageId" type="Integer">[Get] returns the preferred language ID for the current organization.</field>
    LanguageId: '',
    ///<field name="OrganizationId" type="String">[Get] returns the ID of the current organization.</field>
    OrganizationId: '',
    ///<field name="UniqueName" type="String">[Get] returns the unique name of the current organization.</field>
    UniqueName: '',
    ///<field name="UseSkypeProtocol" type="Boolean">[Get] returns whether the Skype protocol is used for the current organization.</field>
    UseSkypeProtocol: ''
}
intellisense.UserSettings = {
    ///<field name="DateFormattingInfo" type="Object">[Get] returns the date formatting information for the current user.</field>
    DateFormattingInfo: '',
    ///<field name="DefaultDashboardId" type="String">[Get] returns the ID of the default dashboard for the current user.</field>
    DefaultDashboardId: '',
    ///<field name="IsGuidedHelpEnabled" type="Function"></field>
    IsGuidedHelpEnabled: intellisense.FunctionUserSettingsIsGuidedHelpEnabled,
    ///<field name="IsGuidedHelpEnabled" type="Function"></field>
    IsHighContrastEnabled: intellisense.FunctionUserSettingsIsHighContrastEnabled,
    ///<field name="IsRTL" type="Function"></field>
    IsRTL: intellisense.FunctionUserSettingsIsRTL,
    ///<field name="DefaultDashboardId" type="String">[Get] returns the language ID for the current user.</field>
    LanguageId: '',
    ///<field name="SecurityRolePrivileges" type="Array">[Get] returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with.</field>
    SecurityRolePrivileges: '',
    ///<field name="SecurityRoles" type="Array">[Get] returns an array of strings that represent the GUID values of each of the security role that the user is associated with or any teams that the user is associated with.</field>
    SecurityRoles: '',
    ///<field name="TransactionCurrencyId" type="String">[Get] returns the transaction currency ID for the current user.</field>
    TransactionCurrencyId: '',
    ///<field name="UserId" type="String">[Get] returns the GUID of the SystemUser.Id value for the current user.</field>
    UserId: '',
    ///<field name="UserName" type="String">[Get] returns the name of the current user.</field>
    UserName: '',
    ///<field name="TimeZoneOffsetMinutes" type="Function"></field>
    TimeZoneOffsetMinutes: intellisense.FunctionUserSettingsTimeZoneOffsetMinutes
}
intellisense.Utility = {
    ///<field name="CloseProgressIndicator" type="Function"></field>
    CloseProgressIndicator: intellisense.FunctionUtilityCloseProgressIndicator,
    ///<field name="AllowedStatusTransitions" type="Function"></field>
    AllowedStatusTransitions: intellisense.FunctionUtilityAllowedStatusTransitions,
    ///<field name="EntityMetadata" type="Function"></field>
    EntityMetadata: intellisense.FunctionUtilityEntityMetadata,
    ///<field name="LearningPathAttributeName" type="String">[Get] returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer for identifying UI controls in the Dynamics 365 Customer Engagement forms. An attribute by this name must be added to the UI element that needs to be exposed to Learning Path (guided help).</field>
    LearningPathAttributeName: '',
    ///<field name="ResourceString" type="Function"></field>
    ResourceString: intellisense.FunctionUtilityResourceString,
    ///<field name="InvokeProcessAction" type="Function"></field>
    InvokeProcessAction: intellisense.FunctionUtilityInvokeProcessAction,
    ///<field name="LookupObjects" type="Function"></field>
    LookupObjects: intellisense.FunctionUtilityLookupObjects,
    ///<field name="RefreshParentGrid" type="Function"></field>
    RefreshParentGrid: intellisense.FunctionUtilityRefreshParentGrid,
    ///<field name="ShowProgressIndicator" type="Function"></field>
    ShowProgressIndicator: intellisense.FunctionUtilityShowProgressIndicator,
    ///<field name="AdvancedConfigSetting" type="Function"></field>
    AdvancedConfigSetting: intellisense.FunctionUtilityAdvancedConfigSetting,
    ///<field name="ClientUrl" type="String">[Get] returns the base URL that was used to access the application.</field>
    ClientUrl: '',
    ///<field name="CurrentAppName" type="Function"></field>
    CurrentAppName: intellisense.FunctionUtilityCurrentAppName,
    ///<field name="CurrentAppProperties" type="Function"></field>
    CurrentAppProperties: intellisense.FunctionUtilityCurrentAppProperties,
    ///<field name="CurrentAppUrl" type="String">[Get] returns the URL of the current business app in Customer Engagement.</field>
    CurrentAppUrl: '',
    ///<field name="Version" type="String">[Get] returns the version number of the Dynamics 365 Customer Engagement instance.</field>
    Version: '',
    ///<field name="IsOnPremise" type="Boolean">[Get] returns a boolean value indicating if the Customer Engagement instance is hosted on-premises or online.</field>
    IsOnPremise: '',
    ///<field name="PrependOrgName" type="Function"></field>
    PrependOrgName: intellisense.FunctionUtilityPrependOrgName,
    ///<field name="OpenAlertDialog" type="Function"></field>
    OpenAlertDialog: intellisense.FunctionUtilityOpenAlertDialog,
    ///<field name="OpenConfirmDialog" type="Function"></field>
    OpenConfirmDialog: intellisense.FunctionUtilityOpenConfirmDialog,
    ///<field name="OpenErrorDialog" type="Function"></field>
    OpenErrorDialog: intellisense.FunctionUtilityOpenErrorDialog,
    ///<field name="OpenFile" type="Function"></field>
    OpenFile: intellisense.FunctionUtilityOpenFile,
    ///<field name="OpenForm" type="Function"></field>
    OpenForm: intellisense.FunctionUtilityOpenForm,
    ///<field name="OpenUrl" type="Function"></field>
    OpenUrl: intellisense.FunctionUtilityOpenUrl,
    ///<field name="OpenWebResource" type="Function"></field>
    OpenWebResource: intellisense.FunctionUtilityOpenWebResource,
    ///<field name="LoadPanel" type="Function"></field>
    LoadPanel: intellisense.FunctionUtilityLoadPanel,
    ///<field name="XmlAttributeEncode" type="Function"></field>
    XmlAttributeEncode: intellisense.FunctionUtilityXmlAttributeEncode,
    ///<field name="XmlEncode" type="Function"></field>
    XmlEncode: intellisense.FunctionUtilityXmlEncode,
    ///<field name="CaptureAudio" type="Function"></field>
    CaptureAudio: intellisense.FunctionUtilityCaptureAudio,
    ///<field name="CaptureImage" type="Function"></field>
    CaptureImage: intellisense.FunctionUtilityCaptureImage,
    ///<field name="CaptureVideo" type="Function"></field>
    CaptureVideo: intellisense.FunctionUtilityCaptureVideo,
    ///<field name="BarcodeValue" type="Function"></field>
    BarcodeValue: intellisense.FunctionUtilityBarcodeValue,
    ///<field name="CurrentPosition" type="Function"></field>
    CurrentPosition: intellisense.FunctionUtilityCurrentPosition,
    ///<field name="PickFile" type="Function"></field>
    PickFile: intellisense.FunctionUtilityPickFile,
    ///<field name="Client" type="Object">[Get] returns access to the methods to determine which client is being used, whether the client is connected to the server, and what kind of device is being used./field>
    Client: intellisense.Client,
    ///<field name="OrganizationSettings" type="Object">[Get] returns information about the current organization settings.</field>
    OrganizationSettings: intellisense.OrganizationSettings,
    ///<field name="UserSettings" type="Object">[Get] returns information about the current user settings.</field>
    UserSettings: intellisense.UserSettings
}
intellisense.FunctionFieldFocus = function () {
    ///<summary>
    ///Sets the focus on the field.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FunctionFieldAddOnChange = function (callback) {
    ///<summary>
    ///Sets a function to be called when the OnChange event occurs.
    ///</summary>
    ///<param name="callback" type="Function">Specifies the function to be removed from the OnChange event.</param>
    ///<returns type="void" />
}
intellisense.FunctionFieldRemoveOnChange = function (callback) {
    ///<summary>
    ///Removes a function from the OnChange event hander for an attribute..
    ///</summary>
    ///<param name="callback" type="Function">Specifies the function to be executed on the attribute OnChange event. The execution context is automatically passed as the first parameter to this function.</param>
    ///<returns type="void" />
}
intellisense.FunctionFieldFireOnChange = function () {
    ///<summary>
    ///Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FieldUserPrivilege = {
    ///<field name="canRead" type="Boolean">[Get] returns user privilege can read this field</field>
    canRead: '',
    ///<field name="canUpdate" type="Boolean">[Get] returns user privilege can update this field</field>
    canUpdate: '',
    ///<field name="canCreate" type="Boolean">[Get] returns user privilege can create this field</field>
    canCreate: ''
}
intellisense.FunctionFieldAddNotification = function (title, message, notificationLevel, uniqueId, callback) {
    ///<summary>
    ///Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification. When you specify an error type of notification, a red "X" icon appears next to the control. When you specify a recommendation type of notification, an "i" icon appears next to the control. On Dynamics 365 mobile clients, tapping on the icon will display the message, and let you perform the configured action by clicking the Apply button or dismiss the message.
    ///</summary>
    ///<param name="title" type="String">The title</param>
    ///<param name="message" type="String">The action message</param>
    ///<param name="notificationLevel" type="OptionSet.FieldNotificationLevel">Defines the type of notification.</param>
    ///<param name="uniqueId" type="String">The ID to use to clear this notification when using the ClearNotification method.</param>
    ///<param name="callback" type="Function">An action callback</param>
    ///<returns type="Boolean" />
}
intellisense.FunctionFieldClearNotification = function (uniqueId) {
    ///<summary>
    ///Remove a message already displayed for a control.
    ///</summary>
    ///<param name="uniqueId" type="String">The ID to use to clear a specific message that was set using setNotification or addNotification. If the uniqueId parameter isn’t specified, the currently displayed notification will be cleared.</param>
    ///<returns type="void" />
}
intellisense.FunctionFieldSetNotification = function (message, uniqueId) {
    ///<summary>
    ///Displays an error message for the control to indicate that data isn’t valid. When this method is used, a red "X" icon appears next to the control. On Dynamics 365 mobile clients, tapping on the icon will display the message.
    ///</summary>
    ///<param name="message" type="String">The message to display.</param>
    ///<param name="uniqueId" type="String">The ID to use to clear this message when using the ClearNotification method.</param>
    ///<returns type="Boolean" />
}
intellisense.FunctionLookupAddCustomFilter = function (filter, entityLogicaName) {
    ///<summary>
    ///Adds filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition.
    ///<para/>Remarks: This method can only be used in a function in an event handler for the Lookup Control PreSearch Event.
    ///</summary>
    ///<param name="filter" type="String">The fetchXml filter element to apply.</param>
    ///<param name="entityLogicaName" type="String">If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned.</param>
    ///<returns type="void" />
}
intellisense.FunctionLookupAddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
    ///<summary>
    ///Adds a new view for the lookup dialog box.
    ///<para/>Notes: This method doesn’t work with Owner lookups. Owner lookups are used to assign user-owned records.
    ///</summary>
    ///<param name="viewId" type="String">The string representation of a GUID for a view. This value is never saved and only needs to be unique among the other available views for the lookup. A string for a non-valid GUID will work, for example “00000000-0000-0000-0000-000000000001”.</param>
    ///<param name="entityName" type="String">The name of the entity.</param>
    ///<param name="viewDisplayName" type="String">The name of the view.</param>
    ///<param name="fetchXml" type="String">The fetchXml query for the view.</param>
    ///<param name="layoutXml" type="String">The XML that defines the layout of the view.</param>
    ///<param name="isDefault" type="Boolean">Whether the view should be the default view.</param>
    ///<returns type="void" />
}
intellisense.FunctionFieldAddPreSearch = function (callback) {
    ///<summary>
    ///Applies changes to lookups based on values current just as the user is about to view results for the lookup.
    ///</summary>
    ///<param name="callback" type="Function">The function that will be run just before the search to provide results for a lookup occurs. You can use this function to call one of the other lookup control functions and improve the results to be displayed in the lookup. The execution context is automatically passed as the first parameter to this function.</param>
    ///<returns type="void" />
}
intellisense.FunctionLookupRemovePreSearch = function (callback) {
    ///<summary>
    ///Removes event handler functions that have previously been set for the PreSearch event.
    ///</summary>
    ///<param name="callback" type="Function">The function to remove. The execution context is automatically passed as the first parameter to this function.</param>
    ///<returns type="void" />
}
intellisense.FunctionOptionSetOption = function (option) {
    ///<signature>
    ///<summary>
    ///Returns an option object with the value matching the argument (label or enumeration value) passed to the method.
    ///</summary>
    ///<param name="option" type="String">The text of OptionSet</param>
    ///<returns type="void" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Returns an option object with the value matching the argument (label or enumeration value) passed to the method.
    ///</summary>
    ///<param name="option" type="Integer">The value of OptionSet</param>
    ///<returns type="void" />
    ///</signature>
    return intellisense.OptionSetObject;
}
intellisense.FunctionOptionSetAddOption = function (text, value, index) {
    ///<summary>
    ///Adds an option to a control.
    ///</summary>
    ///<param name="text" type="String">The label for the option.</param>
    ///<param name="value" type="String">The value for the option.</param>
    ///<param name="index" type="Integer">The index position to place the new option in. If not provided, the option will be added to the end.</param>
    ///<returns type="void" />
}
intellisense.FunctionOptionSetClearOptions = function () {
    ///<summary>
    ///Clears all options from a control.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FunctionOptionSetRemoveOption = function (value) {
    ///<summary>
    ///Removes an option from a control.
    ///</summary>
    ///<param name="value" type="Integer">The value of the option you want to remove.</param>
    ///<returns type="void" />
}
intellisense.FunctionQuickViewRefresh = function () {
    ///<summary>
    ///Refreshes the data displayed in a quick view control.
    ///</summary>
    ///<returns type="void" />
}
intellisense.FunctionQuickViewIsLoaded = function () {
    ///<summary>
    ///Returns whether the data binding for the constituent controls in a quick view control is complete.
    ///</summary>
    ///<returns type="Boolean" />
}
intellisense.FieldBoolean = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Boolean">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="InitialValue" type="Integer">[Get] returns a value that represents the value set for a Boolean, OptionSet or MultiSelectOptionSet attribute when the form is opened.</field>
    InitialValue: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification
}
intellisense.FieldLookup = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Array">[GetSet] the data value for an attribute.</field>
    Value: [intellisense.LookupObject],
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="IsPartyList" type="Boolean">[Get] returns a Boolean value indicating whether the lookup represents a partylist lookup. Partylist lookups allow for multiple records to be set, such as the To: field for an email entity record.</field>
    IsPartyList: '',
    ///<field name="AddCustomFilter" type="Function"></field>
    AddCustomFilter: intellisense.FunctionLookupAddCustomFilter,
    ///<field name="AddCustomView" type="Function"></field>
    AddCustomView: intellisense.FunctionLookupAddCustomView,
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="AddPreSearch" type="Function"></field>
    AddPreSearch: intellisense.FunctionFieldAddPreSearch,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="DefaultView" type="String">[GetSet] the ID value of the default lookup dialog view.</field>
    DefaultView: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="EntityTypes" type="Array">[GetSet] the types of entities allowed in the lookup control.</field>
    EntityTypes: '',
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    RemovePreSearch: intellisense.FunctionLookupRemovePreSearch,
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification
}
intellisense.FieldOptionSet = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Integer">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="InitialValue" type="Integer">[Get] returns a value that represents the value set for a Boolean, OptionSet or MultiSelectOptionSet attribute when the form is opened.</field>
    InitialValue: '',
    ///<field name="AddNotification" type="Function"></field>
    Option: intellisense.FunctionOptionSetOption,
    ///<field name="Options" type="Array">[Get] returns an array of option objects representing valid options for an attribute.</field>
    Options: [intellisense.OptionSetObject],
    ///<field name="SelectedOption" type="Object">[Get] returns the option object selected in an optionset attribute respectively.</field>
    SelectedOption: intellisense.OptionSetObject,
    ///<field name="Text" type="String">[Get] returns a string value of the text for the currently selected option for an optionset attribute.</field>
    Text: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="AddOption" type="Function"></field>
    AddOption: intellisense.FunctionOptionSetAddOption,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ClearOptions" type="Function"></field>
    ClearOptions: intellisense.FunctionOptionSetClearOptions,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification,
    ///<field name="RemoveOption" type="Function"></field>
    RemoveOption: intellisense.FunctionOptionSetRemoveOption
}
intellisense.FieldMultiOptionSet = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Integer">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="InitialValue" type="Integer">[Get] returns a value that represents the value set for a Boolean, OptionSet or MultiSelectOptionSet attribute when the form is opened.</field>
    InitialValue: '',
    ///<field name="AddNotification" type="Function"></field>
    Option: intellisense.FunctionOptionSetOption,
    ///<field name="Options" type="Array">[Get] returns an array of option objects representing valid options for an attribute.</field>
    Options: [intellisense.OptionSetObject],
    ///<field name="SelectedOption" type="Array">[Get] returns the option object selected in an optionset attribute respectively.</field>
    SelectedOption: [intellisense.OptionSetObject],
    ///<field name="Text" type="String">[Get] returns a string value of the text for the currently selected option for an optionset attribute.</field>
    Text: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="AddOption" type="Function"></field>
    AddOption: intellisense.FunctionOptionSetAddOption,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ClearOptions" type="Function"></field>
    ClearOptions: intellisense.FunctionOptionSetClearOptions,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification,
    ///<field name="RemoveOption" type="Function"></field>
    RemoveOption: intellisense.FunctionOptionSetRemoveOption
}
intellisense.FieldNumber = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Integer">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="Max" type="Integer">[Get] returns a number indicating the maximum allowed value for an attribute.</field>
    Max: '',
    ///<field name="Min" type="Integer">[Get] returns a number indicating the minimum allowed value for an attribute.</field>
    Min: '',
    ///<field name="Precision" type="Integer">[GetSet] the number of digits allowed to the right of the decimal point.</field>
    Precision: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification
}
intellisense.FieldString = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="String">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="MaxLength" type="Integer">[Get] returns a number indicating the maximum length of a string or memo attribute.</field>
    MaxLength: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification
}
intellisense.FieldDateTime = {
    ///<field name="AddOnChange" type="Function"></field>
    AddOnChange: intellisense.FunctionFieldAddOnChange,
    ///<field name="FireOnChange" type="Function"></field>
    FireOnChange: intellisense.FunctionFieldFireOnChange,
    ///<field name="AttributeType" type="OptionSet.FieldAttributeType">[Get] returns a string value that represents the type of attribute.</field>
    AttributeType: '',
    ///<field name="Format" type="OptionSet.FieldFormat">[Get] returns a string value that represents formatting options for the attribute.</field>
    Format: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a Boolean value indicating if there are unsaved changes to the attribute value.</field>
    IsDirty: '',
    ///<field name="Name" type="String">[Get] returns a string representing the logical name of the attribute.</field>
    Name: '',
    ///<field name="AttributeParent" type="Object">[Get] returns the formContext.data.entity object that is the parent to all attributes.</field>
    AttributeParent: '',
    ///<field name="RequiredLevel" type="OptionSet.FieldRequiredLevel">[GetSet] a string value indicating whether a value for the attribute is required or recommended.</field>
    RequiredLevel: '',
    ///<field name="SubmitMode" type="OptionSet.FieldSubmitMode">[GetSet] a string indicating when data from the attribute will be submitted when the record is saved.</field>
    SubmitMode: '',
    ///<field name="UserPrivilege" type="Object">[Get] returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute.</field>
    UserPrivilege: intellisense.FieldUserPrivilege,
    ///<field name="Value" type="Boolean">[GetSet] the data value for an attribute.</field>
    Value: '',
    ///<field name="Valid" type="Boolean">[Get] returns a boolean value to indicate whether the value of an attribute is valid.</field>
    Valid: '',
    ///<field name="RemoveOnChange" type="Function"></field>
    RemoveOnChange: intellisense.FunctionFieldRemoveOnChange,
    ///<field name="ShowTime" type="DateTime">[GetSet] whether a date control shows the time portion of the date.</field>
    ShowTime: '',
    ///<field name="AddNotification" type="Function"></field>
    AddNotification: intellisense.FunctionFieldAddNotification,
    ///<field name="ClearNotification" type="Function"></field>
    ClearNotification: intellisense.FunctionFieldClearNotification,
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Disabled" type="Boolean">[GetSet] true if disabled; false otherwise.</field>
    Disabled: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionFieldFocus,
    ///<field name="Label" type="String">[GetSet] the label for the control.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name assigned to the control.</field>
    Name: '',
    ///<field name="ControlParent" type="Object">[Get] returns a reference to the section object that contains the control.</field>
    ControlParent: '',
    ///<field name="Visible" type="Boolean">[GetSet] returns a value that indicates whether the control is currently visible.</field>
    Visible: '',
    ///<field name="SetNotification" type="Function"></field>
    SetNotification: intellisense.FunctionFieldSetNotification
}
intellisense.Form = {
    ///<field name="Body" type="Object">[Get] returns all fields on form.</field>
    Body: '',
    ///<field name="Utility" type="Object">[Get] returns a container for useful methods.</field>
    Utility: intellisense.Utility,
    ///<field name="AddOnSave" type="Function"></field>
    AddOnSave: intellisense.FunctionFormAddOnSave,
    ///<field name="Attributes" type="Object">[Get] returns attributes contain data in the Customer Engagement form or grids.</field>
    Attributes: intellisense.CrmCollection,
    ///<field name="ClearFormNotification" type="Function"></field>
    ClearFormNotification: intellisense.FunctionFormClearFormNotification,
    ///<field name="Close" type="Function"></field>
    Close: intellisense.FunctionFormClose,
    ///<field name="DataXml" type="String">[Get] returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server.
    ///<para/>[Remarks] This method does not work with Microsoft Dynamics 365 for tablets.
    ///</field>
    DataXml: '',
    ///<field name="EntityId" type="Uniqueidentifier">[Get] returns a string representing the GUID value for the record.</field>
    EntityId: '',
    ///<field name="EntityIsDirty" type="Boolean">[Get] returns a boolean value indicating whether any fields in the form have been modified.</field>
    EntityIsDirty: '',
    ///<field name="EntityIsValid" type="Boolean">[Get] returns a boolean value indicating whether all of the entity data is valid.</field>
    EntityIsValid: '',
    ///<field name="EntityName" type="String">[Get] returns a string representing the logical name of the entity for the record.</field>
    EntityName: '',
    ///<field name="EntityReference" type="Object">[Get] returns a string representing the logical name of the entity for the record.</field>
    EntityReference: intellisense.LookupObject,
    ///<field name="EntitySave" type="Function"></field>
    EntitySave: intellisense.FunctionFormEntitySave,
    ///<field name="FormId" type="String">[Get] returns the ID of the form.</field>
    FormId: '',
    ///<field name="FormLabel" type="String">[Get] returns the label of the form.</field>
    FormLabel: '',
    ///<field name="FormNavigate" type="Function"></field>
    FormNavigate: intellisense.FunctionFormFormNavigate,
    ///<field name="FormType" type="OptionSet.FormType">[Get] returns the form type for the record.</field>
    FormType: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a boolean value indicating whether any fields in the form have been modified.</field>
    IsDirty: '',
    ///<field name="IsValid" type="Boolean">[Get] returns a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes.</field>
    IsValid: '',
    ///<field name="PrimaryAttributeValue" type="String">[Get] Gets a string for the value of the primary attribute of the entity.</field>
    PrimaryAttributeValue: '',
    ///<field name="Refresh" type="Function"></field>
    Refresh: intellisense.FunctionFormRefresh,
    ///<field name="RefreshRibbon" type="Function"></field>
    RefreshRibbon: intellisense.FunctionFormRefreshRibbon,
    ///<field name="RemoveOnSave" type="Function"></field>
    RemoveOnSave: intellisense.FunctionFormRemoveOnSave,
    ///<field name="Save" type="Function"></field>
    Save: intellisense.FunctionFormSave,
    ///<field name="SetFormNotification" type="Function"></field>
    SetFormNotification: intellisense.FunctionFormSetFormNotification,
    ///<field name="ViewPortHeight" type="Integer">[Get] returns the height of the viewport in pixels.
    ///<para/>The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page.
    ///</field>
    ViewPortHeight: '',
    ///<field name="ViewPortWidth" type="Integer">[Get] returns the width of the viewport in pixels.
    ///<para/>The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page.
    ///</field>
    ViewPortWidth,
    ///<field name="Controls" type="Object">[Get] returns the controls collection on form.</field>
    Controls: intellisense.CrmCollection
}
intellisense.FormQuickCreate = {
    ///<field name="Body" type="Object">[Get] returns all fields on form.</field>
    Body: '',
    ///<field name="AddOnSave" type="Function"></field>
    AddOnSave: intellisense.FunctionFormAddOnSave,
    ///<field name="Attributes" type="Object">[Get] returns attributes contain data in the Customer Engagement form or grids.</field>
    Attributes: intellisense.CrmCollection,
    ///<field name="ClearFormNotification" type="Function"></field>
    ClearFormNotification: intellisense.FunctionFormClearFormNotification,
    ///<field name="Close" type="Function"></field>
    Close: intellisense.FunctionFormClose,
    ///<field name="DataXml" type="String">[Get] returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server.
    ///<para/>[Remarks] This method does not work with Microsoft Dynamics 365 for tablets.
    ///</field>
    DataXml: '',
    ///<field name="EntityId" type="Uniqueidentifier">[Get] returns a string representing the GUID value for the record.</field>
    EntityId: '',
    ///<field name="EntityIsDirty" type="Boolean">[Get] returns a boolean value indicating whether any fields in the form have been modified.</field>
    EntityIsDirty: '',
    ///<field name="EntityIsValid" type="Boolean">[Get] returns a boolean value indicating whether all of the entity data is valid.</field>
    EntityIsValid: '',
    ///<field name="EntityName" type="String">[Get] returns a string representing the logical name of the entity for the record.</field>
    EntityName: '',
    ///<field name="EntityReference" type="Object">[Get] returns a string representing the logical name of the entity for the record.</field>
    EntityReference: intellisense.LookupObject,
    ///<field name="EntitySave" type="Function"></field>
    EntitySave: intellisense.FunctionFormEntitySave,
    ///<field name="FormId" type="String">[Get] returns the ID of the form.</field>
    FormId: '',
    ///<field name="FormLabel" type="String">[Get] returns the label of the form.</field>
    FormLabel: '',
    ///<field name="FormNavigate" type="Function"></field>
    FormNavigate: intellisense.FunctionFormFormNavigate,
    ///<field name="FormType" type="OptionSet.FormType">[Get] Gets the form type for the record.</field>
    FormType: '',
    ///<field name="IsDirty" type="Boolean">[Get] returns a boolean value indicating whether any fields in the form have been modified.</field>
    IsDirty: '',
    ///<field name="IsValid" type="Boolean">[Get] returns a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes.</field>
    IsValid: '',
    ///<field name="PrimaryAttributeValue" type="String">[Get] returns a string for the value of the primary attribute of the entity.</field>
    PrimaryAttributeValue: '',
    ///<field name="Refresh" type="Function"></field>
    Refresh: intellisense.FunctionFormRefresh,
    ///<field name="RefreshRibbon" type="Function"></field>
    RefreshRibbon: intellisense.FunctionFormRefreshRibbon,
    ///<field name="RemoveOnLoad" type="Function"></field>
    RemoveOnLoad: intellisense.FunctionFormRemoveOnLoad,
    ///<field name="RemoveOnSave" type="Function"></field>
    RemoveOnSave: intellisense.FunctionFormRemoveOnSave,
    ///<field name="Save" type="Function"></field>
    Save: intellisense.FunctionFormSave,
    ///<field name="SetFormNotification" type="Function"></field>
    SetFormNotification: intellisense.FunctionFormSetFormNotification,
    ///<field name="ViewPortHeight" type="Integer">[Get] returns the height of the viewport in pixels.
    ///<para/>The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page.
    ///</field>
    ViewPortHeight: '',
    ///<field name="ViewPortWidth" type="Integer">[Get] returns the width of the viewport in pixels.
    ///<para/>The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page.
    ///</field>
    ViewPortWidth,
    ///<field name="Controls" type="Object">[Get] returns the controls collection on form.</field>
    Controls: intellisense.CrmCollection,
}
intellisense.FormQuickView = {
    ///<field name="ControlType" type="OptionSet.FieldControlType">[Get] returns a value that categorizes controls.</field>
    ControlType: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionControlFocus,
    ///<field name="Label" type="String">[GetSet] the quick view control label.</field>
    Label: '',
    ///<field name="Name" type="String">[Get] returns the name of the quick view control.</field>
    Name: '',
    ///<field name="Parent" type="Object">[Get] returns the parent of the quick view control.</field>
    Parent: '',
    ///<field name="Visible" type="Boolean">[Get] returns the quick view control visible or not.</field>
    Visible: '',
    ///<field name="IsLoaded" type="Function"></field>
    IsLoaded: intellisense.FunctionQuickViewIsLoaded,
    ///<field name="Refresh" type="Function"></field>
    Refresh: intellisense.FunctionQuickViewRefresh
}
intellisense.FormNavigation = {
    ///<field name="Id" type="String">[Get] returns the name of the item.</field>
    Id: '',
    ///<field name="Focus" type="Function"></field>
    Focus: intellisense.FunctionControlFocus,
    ///<field name="Label" type="String">[GetSet] the navigation label.</field>
    Label: '',
    ///<field name="Visible" type="Boolean">[GetSet] the navigation visible or not.</field>
    Visible: ''
}
///<field name="OptionSet" type="PickList"></field>
var OptionSet = {
    ///<field name="FormType" type="PickList"></field>
    FormType: {
        ///<field name="Undefined" type="PickListValue"></field>
        Undefined: 0,
        ///<field name="Create" type="PickListValue"></field>
        Create: 1,
        ///<field name="Update" type="PickListValue"></field>
        Update: 2,
        ///<field name="ReadOnly" type="PickListValue"></field>
        ReadOnly: 3,
        ///<field name="Disabled" type="PickListValue"></field>
        Disabled: 4,
        ///<field name="BulkEdit" type="PickListValue"></field>
        BulkEdit: 5
    },
    ///<field name="SaveOption" type="PickList"></field>
    SaveOption: {
        ///<field name="SaveAndClose" type="PickListValue">This is the equivalent of using the Save and Close command.</field>
        SaveAndClose: "saveandclose",
        ///<field name="SaveAndNew" type="PickListValue">This is the equivalent of the using the Save and New command.</field>
        SaveAndNew: "saveandnew"
    },
    ///<field name="SaveMode" type="PickList"></field>
    SaveMode: {
        ///<field name="Save" type="PickListValue">All entities</field>
        Save: 1,
        ///<field name="SaveAndClose" type="PickListValue">All entities</field>
        SaveAndClose: 2,
        ///<field name="Deactivate" type="PickListValue">All entities</field>
        Deactivate: 5,
        ///<field name="Reactivate" type="PickListValue">All entities</field>
        Reactivate: 6,
        ///<field name="Send" type="PickListValue">Email entity</field>
        Email: 7,
        ///<field name="Disqualify" type="PickListValue">Lead entity</field>
        Disqualify: 15,
        ///<field name="Qualify" type="PickListValue">Lead entity</field>
        Qualify: 16,
        ///<field name="Assign" type="PickListValue">User or Team owned entities</field>
        Assign: 47,
        ///<field name="SaveAsCompleted" type="PickListValue">Activities entities</field>
        SaveAsCompleted: 58,
        ///<field name="SaveAndNew" type="PickListValue">All entities</field>
        SaveAndNew: 59,
        ///<field name="AutoSave" type="PickListValue">All entities</field>
        AutoSave: 70
    },
    ///<field name="FormNotificationLevel" type="PickList"></field>
    FormNotificationLevel: {
        ///<field name="Error" type="PickListValue">ERROR | Notification will use the system error icon.</field>
        Error: "ERROR",
        ///<field name="Warning" type="PickListValue">WARNING | Notification will use the system warning icon.</field>
        Warning: "WARNING",
        ///<field name="Info" type="PickListValue">INFO | Notification will use the system info icon.</field>
        Info: "INFO"
    },
    ///<field name="TabDisplayState" type="PickList"></field>
    TabDisplayState: {
        ///<field name="Expanded" type="PickListValue">expanded</field>
        Expanded: "expanded",
        ///<field name="Collapsed" type="PickListValue">collapsed</field>
        Collapsed: "collapsed"
    },
    ///<field name="AttributeType" type="PickList"></field>
    FieldAttributeType: {
        ///<field name="Boolean" type="PickListValue">boolean</field>
        Boolean: "boolean",
        ///<field name="DateTime" type="PickListValue">datetime</field>
        DateTime: "datetime",
        ///<field name="Decimal" type="PickListValue">decimal</field>
        Decimal: "decimal",
        ///<field name="Double" type="PickListValue">double</field>
        Double: "double",
        ///<field name="Integer" type="PickListValue">integer</field>
        Integer: "integer",
        ///<field name="Lookup" type="PickListValue">lookup</field>
        Lookup: "lookup",
        ///<field name="Memo" type="PickListValue">memo</field>
        Memo: "memo",
        ///<field name="Money" type="PickListValue">money</field>
        Money: "money",
        ///<field name="MultiOptionSet" type="PickListValue">multioptionset</field>
        MultiOptionSet: "multioptionset",
        ///<field name="OptionSet" type="PickListValue">optionset</field>
        OptionSet: "optionset",
        ///<field name="String" type="PickListValue">string</field>
        String: "string",
    },
    ///<field name="FieldFormat" type="PickList"></field>
    FieldFormat: {
        ///<field name="Date" type="PickListValue">date
        ///<para/>ApplicationFieldType: DateAndTime
        ///<para/>FormatOption: DateOnly
        ///<para/>AttributeType: datetime
        ///</field>
        Date: "date",
        ///<field name="DateTime" type="PickListValue">datetime
        ///<para/>ApplicationFieldType: DateAndTime
        ///<para/>FormatOption: DateAndTime
        ///<para/>AttributeType: datetime
        ///</field>
        DateTime: "datetime",
        ///<field name="Duration" type="PickListValue">duration
        ///<para/>ApplicationFieldType: WholeNumber
        ///<para/>FormatOption: Duration
        ///<para/>AttributeType: integer
        ///</field>
        Duration: "duration",
        ///<field name="Email" type="PickListValue">email
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: Email
        ///<para/>AttributeType: string
        ///</field>
        Email: "email",
        ///<field name="Language" type="PickListValue">language
        ///<para/>ApplicationFieldType: WholeNumber
        ///<para/>FormatOption: Language
        ///<para/>AttributeType: optionset
        ///</field>
        Language: "language",
        ///<field name="None" type="PickListValue">none
        ///<para/>ApplicationFieldType: WholeNumber
        ///<para/>FormatOption: None
        ///<para/>AttributeType: integer
        ///</field>
        None: "none",
        ///<field name="TextArea" type="PickListValue">textarea
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: TextArea
        ///<para/>AttributeType: string
        ///</field>
        TextArea: "textarea",
        ///<field name="Text" type="PickListValue">text
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: Text
        ///<para/>AttributeType: string
        ///</field>
        Text: "text",
        ///<field name="TickerSymbol" type="PickListValue">tickersymbol
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: TickerSymbol
        ///<para/>AttributeType: string
        ///</field>
        TickerSymbol: "tickersymbol",
        ///<field name="Phone" type="PickListValue">phone
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: Phone
        ///<para/>AttributeType: string
        ///</field>
        Phone: "phone",
        ///<field name="TimeZone" type="PickListValue">timezone
        ///<para/>ApplicationFieldType: WholeNumber
        ///<para/>FormatOption: TimeZone
        ///<para/>AttributeType: optionset
        ///</field>
        TimeZone: "timezone",
        ///<field name="Url" type="PickListValue">url
        ///<para/>ApplicationFieldType: SingleLineOfText
        ///<para/>FormatOption: Url
        ///<para/>AttributeType: string
        ///</field>
        Url: "url"
    },
    ///<field name="FieldRequiredLevel" type="PickList"></field>
    FieldRequiredLevel: {
        ///<field name="None" type="PickListValue">none</field>
        None: "none",
        ///<field name="Required" type="PickListValue">required</field>
        Required: "required",
        ///<field name="Recommended" type="PickListValue">recommended</field>
        Recommended: "recommended"
    },
    ///<field name="FieldSubmitMode" type="PickList"></field>
    FieldSubmitMode: {
        ///<field name="Always" type="PickListValue">always</field>
        Always: "always",
        ///<field name="Never" type="PickListValue">never</field>
        Never: "never",
        ///<field name="Dirty" type="PickListValue">dirty</field>
        Dirty: "dirty"
    },
    ///<field name="FieldControlType" type="PickList"></field>
    FieldControlType: {
        ///<field name="Standard" type="PickListValue">A standard control</field>
        Standard: "standard",
        ///<field name="Iframe" type="PickListValue">An IFRAME control</field>
        Iframe: "iframe",
        ///<field name="KbSearch" type="PickListValue">A knowledge base search control</field>
        KbSearch: "kbsearch",
        ///<field name="KbSearch" type="PickListValue">A lookup control</field>
        Lookup: "lookup",
        ///<field name="KbSearch" type="PickListValue">A multi-select option set control</field>
        MultiSelectOptionset: "multiselectoptionset",
        ///<field name="Notes" type="PickListValue">A notes control</field>
        Notes: "notes",
        ///<field name="OptionSet" type="PickListValue">An option set control</field>
        OptionSet: "optionset",
        ///<field name="QuickForm" type="PickListValue">A quick view control</field>
        QuickForm: "quickform",
        ///<field name="SubGrid" type="PickListValue">A subgrid control</field>
        SubGrid: "subgrid",
        ///<field name="SubGrid" type="PickListValue">A timer control</field>
        TimerControl: "TimerControl",
        ///<field name="TimelineWall" type="PickListValue">A timeline control (for Unified Interface)</field>
        TimelineWall: "timelinewall",
        ///<field name="WebResource" type="PickListValue">A web resource control</field>
        WebResource: "webresource"
    },
    ///<field name="FieldNotificationLevel" type="PickList"></field>
    FieldNotificationLevel: {
        ///<field name="Error" type="PickListValue">Error</field>
        Error: "ERROR",
        ///<field name="Recommendation" type="PickListValue">Recommendation</field>
        Recommendation: "RECOMMENDATION"
    },
    ///<field name="ProcessCategory" type="PickList"></field>
    ProcessCategory: {
        ///<field name="Qualify" type="PickListValue">Qualify</field>
        Qualify: 0,
        ///<field name="Develop" type="PickListValue">Develop</field>
        Develop: 1,
        ///<field name="Propose" type="PickListValue">Propose</field>
        Propose: 2,
        ///<field name="Close" type="PickListValue">Close</field>
        Close: 3,
        ///<field name="Identify" type="PickListValue">Identify</field>
        Identify: 4,
        ///<field name="Research" type="PickListValue">Research</field>
        Research: 5,
        ///<field name="Resolve" type="PickListValue">Resolve</field>
        Resolve: 6
    },
    ///<field name="TimerState" type="PickList"></field>
    TimerState: {
        ///<field name="NotSet" type="PickListValue">NotSet</field>
        NotSet: 1,
        ///<field name="InProgress" type="PickListValue">InProgress</field>
        InProgress: 2,
        ///<field name="Warning" type="PickListValue">Warning</field>
        Warning: 3,
        ///<field name="Violated" type="PickListValue">Violated</field>
        Violated: 4,
        ///<field name="Success" type="PickListValue">Success</field>
        Success: 5,
        ///<field name="Expired" type="PickListValue">Expired</field>
        Expired: 6,
        ///<field name="Canceled" type="PickListValue">Canceled</field>
        Canceled: 7,
        ///<field name="Paused" type="PickListValue">Paused</field>
        Paused: 8
    },
    ///<field name="ClientName" type="PickList"></field>
    ClientName: {
        ///<field name="Web" type="PickListValue">Web</field>
        Web: "Web",
        ///<field name="Outlook" type="PickListValue">Outlook</field>
        Outlook: "Outlook",
        ///<field name="Mobile" type="PickListValue">Mobile</field>
        Mobile: "Mobile"
    },
    ///<field name="ClientState" type="PickList"></field>
    ClientState: {
        ///<field name="Online" type="PickListValue">Online</field>
        Online: "Online",
        ///<field name="Offline" type="PickListValue">Offline</field>
        Offline: "Offline"
    },
    ///<field name="FormFactor" type="PickList"></field>
    FormFactor: {
        ///<field name="Unknown" type="PickListValue">Unknown</field>
        Unknown: 0,
        ///<field name="Desktop" type="PickListValue">Desktop</field>
        Desktop: 1,
        ///<field name="Tablet" type="PickListValue">Tablet</field>
        Tablet: 2,
        ///<field name="Phone" type="PickListValue">Phone</field>
        Phone: 3
    },
    ///<field name="AdvancedConfigSetting" type="PickList"></field>
    AdvancedConfigSetting: {
        ///<field name="MaxChildIncidentNumber" type="PickListValue">MaxChildIncidentNumber</field>
        MaxChildIncidentNumber: "MaxChildIncidentNumber",
        ///<field name="MaxIncidentMergeNumber" type="PickListValue">MaxIncidentMergeNumber</field>
        MaxIncidentMergeNumber: "MaxIncidentMergeNumber"
    },
    ///<field name="OpenFileOption" type="PickList"></field>
    OpenFileOption: {
        ///<field name="Open" type="PickListValue">Open</field>
        Open: 1,
        ///<field name="Save" type="PickListValue">Save</field>
        Save: 2
    }
};
intellisense.EntityValue = {
    ///<field name="Value">The value</field>
    Value: '',
    ///<field name="FormattedValue">Formatted of the value</field>
    FormattedValue: ''
}
///<field name="$ProjectName$" type="Object"></field>
var $ProjectName$ = {};
$ProjectName$.Utility = intellisense.Utility;