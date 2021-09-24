/** DynamicsCrm.DevKit for d.ts */
declare namespace DevKit {
    type Guid = {};
    namespace Controls {
        interface IControl {
            /**
             * Sets a function to be called when the OnChange event occurs
             * @param callback
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/addonchange
             */
            AddOnChange(callback: (executionContext: any) => void): void;
            /**
             * Causes the OnChange event to occur on the attribute so that any script associated to that event can execute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/fireonchange
             */
            FireOnChange(): void;
            /**
             * Sets the focus on the control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setfocus
             */
            Focus(): void;
            /**
             * Removes a function from the OnChange event hander for an attribute
             * @param callback Specifies the function to be removed from the OnChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/removeonchange
             */
            RemoveOnChange(callback: (executionContext: any) => void): void;
            /**
             * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification. When you specify an error type of notification, a red "X" icon appears next to the control. When you specify a recommendation type of notification, an "i" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message, and let you perform the configured action by clicking the Apply button or dismiss the message
             * @param notification The notification to add
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addnotification
             */
            AddNotification(notification: DevKit.FieldNotification): void;
            /**
             * Remove a message already displayed for a control
             * @param uniqueId The ID to use to clear a specific message that was set using setNotification or addNotification. If the uniqueId parameter isn’t specified, the currently displayed notification will be cleared
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
             */
            ClearNotification(uniqueId: string): boolean;
            /**
             * Displays an error message for the control to indicate that data isn’t valid. When this method is used,  a red "X" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message
             * @param message The message to display
             * @param uniqueId The ID to use to clear this message when using the clearNotification method
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setnotification
             */
            SetNotification(message: string, uniqueId?: string): boolean;
            /**
             * Sets a value for an attribute to determine whether it is valid or invalid with a message.
             * @param valid Specify false to set the attribute value to invalid and true to set the value to valid
             * @param message The message to display
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setisvalid
             */
            SetIsValid(valid: boolean, message: string): void
            /**
             * Returns the attribute that the control is bound to. Controls that aren’t bound to an attribute (subgrid, web resource, and IFRAME) don’t have this method. An error will be thrown if you attempt to use this method on one of these controls
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getattribute
             * */
            readonly Attribute: any
            /**
             * Returns a string value that represents the type of control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: OptionSet.FieldControlType;
            /**
             * Returns a string value that represents the type of attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
             */
            readonly AttributeType: OptionSet.FieldAttributeType;
            /**
             * Returns a string value that represents formatting options for the attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getformat
             */
            readonly Format: OptionSet.FieldFormat;
            /**
             * Returns a Boolean value indicating if there are unsaved changes to the attribute value
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getisdirty
             */
            readonly IsDirty: boolean;
            /**
             * Returns a string representing the logical name of the attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getname
             */
            readonly AttributeName: string;
            /**
             * Returns the name assigned to the control.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;
            /**
             * Returns the formContext.data.entity object that is the parent to all attributes
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getparent
             */
            readonly AttributeParent: any;
            /**
             * Returns a boolean value to indicate whether the value of an attribute is valid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/isvalid
             */
            readonly IsValid: boolean;
            /**
             * Returns a reference to the section object that contains the control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getparent
             */
            readonly ControlParent: any;
            /**
             * Returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getuserprivilege
             */
            readonly UserPrivilege: DevKit.FieldUserPrivilege;
            /**
             * Get/Set a value indicating whether a value for the attribute is required or recommended
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
             */
            RequiredLevel: OptionSet.FieldRequiredLevel;
            /**
             * Get/Set a indicating when data from the attribute will be submitted when the record is saved
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setsubmitmode
             */
            SubmitMode: OptionSet.FieldSubmitMode;
            /**
             * Get/Set whether the control is disabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;
            /**
             * Get/Set the label for the control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the control is currently visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;
        }
        interface IControlSelectBase extends IControl {
            /**
             * Returns a value that represents the value set for a Boolean, OptionSet or MultiOptionSet attribute when the form is opened
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number;
        }
        interface IProcess {
            /**
             * Adds a function as an event handler for the OnPreProcessStatusChange event so that it will be called before the business process flow status changes
             * @param callback The function to be executed when the business process flow status changes. The function will be added to the start of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonpreprocessstatuschange
             */
            AddOnPreProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnPreProcessStatusChange event
             * @param callback The function to be removed from the OnPreProcessStatusChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonpreprocessstatuschange
             */
            RemoveOnPreProcessStatusChange(callback: () => void): void;
            /**
             * Adds a function as an event handler for the OnPreStageChange event so that it will be called before the business process flow stage changes
             * @param callback The function that runs before the business process flow stage changes. The function will be added to the start of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonprestagechange
             */
            AddOnPreStageChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnPreStageChange event
             * @param callback The function to be removed from the OnPreStageChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonprestagechange
             */
            RemoveOnPreStageChange(callback: () => void): void;
            /**
             * Adds a function as an event handler for the OnProcessStatusChange event so that it will be called when the business process flow status changes
             * @param callback The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
             */
            AddOnProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnProcessStatusChange event
             * @param callback The function to be removed from the OnProcessStatusChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
             */
            RemoveOnProcessStatusChange(callback: () => void): void;
            /**
             * Adds a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes
             * @param callback TThe function to be executed when the business process flow stage changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
             */
            AddOnStageChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnStageChange event
             * @param callback The function to be removed from the OnStageChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
             */
            RemoveOnStageChange(callback: () => void): void;
            /**
             * Adds a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected
             * @param callback The function to be executed when the business process flow stage is selected. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
             */
            AddOnStageSelected(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnStageSelected event
             * @param callback The function to be removed from the OnStageSelected event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
             */
            RemoveOnStageSelected(callback: () => void): void;
            /**
             * Asynchronously retrieves the business process flows enabled for an entity that the current user can switch to
             * @param callback The callback function must accept a parameter that contains an object with dictionary properties where the name of the property is the Id of the business process flow and the value of the property is the name of the business process flow. The enabled processes are filtered according to the user’s privileges. The list of enabled processes is the same ones a user can see in the UI if they want to change the process manually
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getenabledprocesses
             */
            EnabledProcesses(callback: (processes: Array<DevKit.ProcessEnabled>) => void): void;
            /**
             * Returns all the process instances for the entity record that the calling user has access to.
             * @param callback The callback function is passed an object with the following attributes and their corresponding values as the key:value pair. All returned values are of string type except for CreatedOnDate
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            ProcessInstances(callback: (processes: Array<DevKit.ProcessInstance>) => void): void;
            /**
             * Sets a completed stage as the active stage
             * @param stageId The ID of the completed stage for the entity to make the active stage
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/setactivestage
             */
            SetActiveStage(stageId: string, callback: (result: "success" | "invalid" | "unreachable" | "dirtyForm" | "preventDefault") => void): void;
            /**
             * Progresses to the next stage. You can also move to a next stage in a different entity
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/navigation/movenext
             */
            MoveNext(callback: (result: "success" | "crossEntity" | "end" | "invalid" | "dirtyForm") => void): void;
            /**
             * Moves to the previous stage. You can also move to a previous stage in a different entity
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/navigation/moveprevious
             */
            MovePrevious(callback: (result: "success" | "crossEntity" | "beginning" | "invalid" | "dirtyForm") => void): void;
            /**
             * Sets a process instance as the active instance
             * @param processInstanceId The Id of the process instance to set as the active instance
             * @param callback A function to call when the operation is complete
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/setactiveprocessinstance
             */
            SetActiveProcessInstance(processInstanceId: DevKit.Guid, callback: (result: "success" | "invalid") => void): void;
            /**
             * Sets a Process as the active process. If there is an active instance of the process, the entity record is loaded with the process instance ID. If there is no active instance of the process, a new process instance is created and the entity record is loaded with the process instance ID. If there are multiple instances of the current process, the record is loaded with the first instance of the active process as per the defaulting logic, that is the most recently used process instance per user
             * @param processId The Id of the process to set as the active process
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
             */
            SetActiveProcess(processId: DevKit.Guid, callback: (result: "success" | "invalid") => void): void;
            /**
             * Reflows the UI of the business process control
             * @param updateUi Specify true to update the UI of the process control; false otherwise
             * @param parentStage Specify the ID of the parent stage in the GUID format
             * @param nextStage Specify the ID of the next stage in the GUID format
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/reflow
             */
            Reflow(updateUi: boolean, parentStage: string, nextStage: string): void;
            /**
             * Returns a Process object representing the active process
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
             */
            readonly ActiveProcess: DevKit.ProcessProcess;
            /**
             * Gets the currently selected stage
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getselectedstage
             */
            readonly SelectedStage: DevKit.ProcessStage;
            /**
             * Returns representing the active stage
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/getactivestage
             */
            readonly ActiveStage: DevKit.ProcessStage;
            /**
             * Returns the unique identifier of the process instance. Value represents the string representation of a GUID value
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstanceid
             */
            readonly InstanceId: DevKit.Guid;
            /**
             * Returns the name of the process instance
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstancename
             */
            readonly InstanceName: string;
            /**
             * Gets a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control. The active path represents stages currently rendered in the process control based on the branching rules and current data in the record
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activepath/getactivepath
             */
            readonly ActivePath: DevKit.Collections<DevKit.ProcessStage>;
            /**
             * Get/Set the display state for the business process control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getdisplaystate
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/setdisplaystate
             */
            DisplayState: OptionSet.ProcessDisplayState;
            /**
             * Get/Set a value indicating whether the business process control is visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/setvisible
             */
            Visible: boolean;
            /**
             * Get/Set the current status of the process instance
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getstatus
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/setstatus
             */
            Status: OptionSet.ProcessStatus;
        }
        interface ITab {
            /**
             * Adds a function to be called when the TabStateChange event occurs
             * @param callback The function to be executed on the TabStateChange event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/addtabstatechange
             */
            AddTabStateChange(callback: (executionContext: any) => void): void;
            /**
             * Sets the focus on the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setfocus
             * */
            Focus(): void;
            /**
             * Removes a function to be called when the TabStateChange event occurs
             * @param callback The function to be removed from the TabStateChange event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/removetabstatechange
             */
            RemoveTabStateChange(callback: (executionContext: any) => void): void;
            /**
             * Get the name of the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getname
             */
            readonly Name: string;
            /**
             * Get the formContext.ui object containing the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getparent
             */
            readonly Parent: any;
            /**
             * Get/Set display state of the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getdisplaystate
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setdisplaystate
             */
            DisplayState: OptionSet.TabDisplayState;
            /**
             * Get/Set the label for the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getlabel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the tab is currently visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setvisible
             */
            Visible: boolean;
            /**
             * Get/Set content type of the tab
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getcontenttype
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setcontenttype
             */
            ContentType: OptionSet.TabContentType;
        }
        interface IControlSelect extends IControlSelectBase {
            /**
             * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
             * @param label The label of the option
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(label: string): DevKit.TextValueNumber;
            /**
             * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
             * @param value The enumeration value of the option
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(value: number): DevKit.TextValueNumber;
            /**
             * Adds an option to a control
             * @param text The label for the option
             * @param value The value for the option
             * @param index The index position to place the new option in. If not provided, the option will be added to the end
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addoption
             */
            AddOption(text: string, value: number, index?: number): void;
            /**
             * Clears all options from a control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/clearoptions
             */
            ClearOptions(): void;
            /**
             * Removes an option from a control
             * @param value The value of the option you want to remove
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeoption
             */
            RemoveOption(value: number): void;
            /**
             * Returns an array of option objects representing valid options for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getoptions
             */
            readonly Options: Array<DevKit.TextValueNumber>;
            /**
             * Returns an array of option objects representing valid options available for a control, including a blank option and excluding any options that have been removed from the control using removeOption
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getoptions
            */
            readonly ControlOptions: Array<DevKit.TextValueNumber>;
            /**
             * Returns a string value of the text for the currently selected option for an optionset or multiselectoptionset attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/gettext
             */
            readonly Text: string;
        }
        interface IControlText extends IControl {
            /**
             * Returns a number indicating the maximum length of a string or memo attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
             */
            readonly MaxLength: number;
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string;
        }
        interface IControlNumber extends IControl {
            /**
             * Returns a number indicating the maximum allowed value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getmax
             */
            readonly Max: number;
            /**
             * Returns a number indicating the minimum allowed value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getmin
             */
            readonly Min: number;
            /**
             * Get/Set the number of digits allowed to the right of the decimal point
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setprecision
             */
            Precision: number;
            /**
             * Get/Set the data value for an attribute.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number;
        }
        interface IQuickView {
            /**
             * Gets the controls on a form or control on form by passing an argument
             * @param arg You can access a single control in the constituent controls collection by passing an argument as either the name or the index value of the constituent control in a quick view control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
             */
            Controls(arg?: string | number): Array<any> | any;
            /**
             * Returns whether the data binding for the constituent controls in a quick view control is complete
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/isloaded
             */
            IsLoaded(): boolean;
            /**
             * Refreshes the data displayed in a quick view control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/refresh
             */
            Refresh(): void;
            /**
             * Sets focus on the control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setfocus
             */
            Focus(): void;
            /**
             * Returns a string value that categorizes quick view controls
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrolhttps://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontroltype
             */
            readonly ControlType: OptionSet.FieldControlType;
            /**
             * [ReadOnly] Returns the name assigned to the quick view control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getname
             */
            readonly ControlName: string;
            /**
             * Returns a reference to the section object that contains the control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getparent
             */
            readonly ControlParent: any;
            /**
             * Get/Set a boolean value indicating whether the control is disabled. Or sets the state of the control to either enabled or disabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getdisabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setdisabled
             */
            Disabled: boolean;
            /**
             * Get/Set the label for the quick view control. Or sets the label for the quick view control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getlabel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the quick view control is currently visible. Or displays or hides a control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible
             */
            Visible: boolean;
        }
        interface IFooter {
            /**
             * Get/Set the visibility of footer section
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-footersection/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-footersection/setvisible
             */
            Visible: boolean;
        }
        interface IHeader {
            /**
             * Get/Set the visibility of header section
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/getbodyvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/setbodyvisible
             */
            BodyVisible: boolean;
            /**
             * Get/Set the command bar visibility
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/getcommandbarvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/setcommandbarvisible
             */
            CommandBarVisible: boolean;
            /**
             * Get/Set the tab navigator visibility
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/gettabnavigatorvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/settabnavigatorvisible
             */
            TabNavigatorVisible: boolean;
        }
        interface Integer extends IControlNumber {

        }
        interface Decimal extends IControlNumber {

        }
        interface Double extends IControlNumber {

        }
        interface Money extends IControlNumber {

        }
        interface String extends IControlText {

        }
        interface Memo extends IControlText {

        }
        interface DateTime extends IControl {
            /**
             * Get/Set whether a date control shows the time portion of the date
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getshowtime
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setshowtime
             */
            ShowTime: boolean;
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: any;
        }
        interface Date extends IControl {
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: any;
        }
        interface Lookup extends IControl {
            /**
             * Adds filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition. This method can only be used in a function in an event handler for the Lookup Control PreSearch Event
             * @param filter The fetchXml filter element to apply
             * @param entityLogicaName If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addcustomfilter
             */
            AddCustomFilter(filter: string, entityLogicaName?: string): void;
            /**
             * Adds a new view for the lookup dialog box. This method doesn’t work with Owner lookups. Owner lookups are used to assign user-owned records
             * @param viewId The string representation of a GUID for a view
             * @param entityName The name of the entity
             * @param viewDisplayName The name of the view
             * @param fetchXml The fetchXml query for the view
             * @param layoutXml The XML that defines the layout of the view
             * @param isDefault Indicates whether the view should be the default view
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addcustomview
             */
            AddCustomView(viewId: DevKit.Guid, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
            /**
             * Applies changes to lookups based on values current just as the user is about to view results for the lookup
             * @param callback The function that will be run just before the search to provide results for a lookup occurs. You can use this function to call one of the other lookup control functions and improve the results to be displayed in the lookup. The execution context is automatically passed as the first parameter to this function
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addpresearch
             */
            AddPreSearch(callback: (executionContext: any) => void): void;
            /**
             * Removes event handler functions that have previously been set for the PreSearch event
             * @param callback The function to remove. The execution context is automatically passed as the first parameter to this function
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removepresearch
             */
            RemovePreSearch(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnLookupTagClick event
             * @param callback The function to add to the OnLookupTagClick event. The execution context is automatically passed as the first parameter to this function along with eventArgs that contain the tag value. More information: OnLookupTagClick event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addonlookuptagclick
            */
            AddLookupTagClick(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnLookupTagClick event
             * @param callback The function to be removed from the OnLookupTagClick event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeonlookuptagclick
             */
            RemoveLookupTagClick(callback: (executionContext: any) => void): void;
            /**
             * Returns a Boolean value indicating whether the lookup represents a partylist lookup. Partylist lookups allow for multiple records to be set, such as the To: field for an email entity record
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getispartylist
             */
            readonly IsPartyList: boolean;
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Array<DevKit.EntityReference>;
            /**
             * Get/Set the ID value of the default lookup dialog view
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getdefaultview
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdefaultview
             */
            DefaultView: DevKit.Guid;
            /**
             * Get/Set the types of entities allowed in the lookup control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getentitytypes
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setentitytypes
             */
            EntityTypes: Array<string>;

        }
        interface Knowledge extends IControl {
            /**
             * Adds an event handler to the PostSearch event
             * @param callback The function to add to the PostSearch event. The execution context is automatically passed as the first parameter to this function
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addonpostsearch
             */
            AddPostSearch(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnResultOpened event
             * @param callback The function to add to the OnResultOpened event. The execution context is automatically passed as the first parameter to this function
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addonresultopened
             */
            AddResultOpened(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnSelection event
             * @param callback The function to add to the OnSelection event. The execution context is automatically passed as the first parameter to this function
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addonselection
             */
            AddSelection(callback: (executionContext: any) => void): void;
            /**
             * Opens a search result in the search control by specifying the result number
             * @param resultNumber Numerical value specifying the result number to be opened. Result number starts from 1
             * @param mode Specify "Inline" or "Popout". If you do not specify a value for the argument, the default ("Inline") option is used. The "Inline" mode opens the result inline either in the reading pane of the control or in a reference panel tab in case of reference panel. The "Popout" mode opens the result in a pop-out window
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/opensearchresult
             */
            OpenSearchResult(resultNumber: number, mode: string): boolean;
            /**
             * Removes an event handler from the PostSearch event
             * @param callback The function to remove from the PostSearch event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeonpostsearch
             */
            RemovePostSearch(callback: () => void): void;
            /**
             * Removes an event handler from the OnResultOpened event
             * @param callback The function to remove from the OnResultOpened event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeonresultopened
             */
            RemoveResultOpened(callback: () => void): void;
            /**
             * Removes an event handler from the OnSelection even
             * @param callback The function to remove from the OnSelection event
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeonselection
             */
            RemoveSelection(callback: () => void): void;
            /**
             * Gets the count of results found in the search control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/gettotalresultcount
             */
            readonly TotalResultCount: number;
            /**
             * Use this method to get the currently selected result of the search control. The currently selected result also represents the result that is currently open
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getselectedresults
             */
            readonly SelectedResults: any
            /**
             * Get/Set the text used as the search criteria for the knowledge base management control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getsearchquery
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setsearchquery
             */
            SearchQuery: string;
        }
        interface WebResource extends IControl {
            /**
            * Returns the content window that represents an IFRAME or web resource
            * @param successCallback A function to call when operation is executed successfully. A content window instance representing the IFRAME or web resource is passed to the function
            * @param errorCallback A function to call when the operation fails
            * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
           ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
           /**
             * Returns the object in the form that represents an IFRAME or web resource
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getobject
             */
            readonly Object: any;
            /**
             * Get/Set the value of the data query string parameter passed to a Silverlight web resource
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getdata
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdata
             */
            Data: string;
            /**
             * Get/Set the current URL being displayed in an IFRAME or web resource
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;

        }
        interface IFrame extends IControl {
            /**
            * Returns the content window that represents an IFRAME or web resource.
            * @param successCallback A function to call when operation is executed successfully. A content window instance representing the IFRAME or web resource is passed to the function
            * @param errorCallback A function to call when the operation fails
            * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
           ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
            /**
             * Returns the default URL that an IFRAME control is configured to display
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getinitialurl
             **/
            readonly InitialUrl: string;
            /**
            * Returns the object in the form that represents an IFRAME or web resource
            * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getobject
            */
            readonly Object: any;
            /**
             * Get/Set the current URL being displayed in an IFRAME or web resource
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;

        }
        interface Timer extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
            /**
             * Returns the state of the timer control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getstate
             */
            readonly State: number;
        }
        interface TimelineWall extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
        }
        interface Boolean extends IControlSelectBase {
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: boolean;
        }
        interface OptionSet extends IControlSelect {
            /**
             * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: DevKit.TextValueNumber;
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number;
        }
        interface MultiOptionSet extends IControlSelect {
            /**
             * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: Array<DevKit.TextValueNumber>
            /**
             * Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Array<number>;
        }
        interface NavigationItem {
            /**
             * Sets the focus on the item
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setfocus
             */
            Focus(): void;
            /**
             * Returns the name of the item
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getid
             */
            readonly Id: string;
            /**
             * Get/Set the label for the item
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getlabel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the item is currently visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setvisible
             */
            Visible: boolean;
        }

        interface Section {
            /**
             * Get the name of the section
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getname
             */
            readonly Name: string;
            /**
             * Get the tab containing the section
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getparent
             */
            readonly Parent: any;
            /**
             * Get/Set the label for the section
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getlabel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the section is currently visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getvisible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/setvisible
             */
            Visible: boolean;
        }
        interface Grid {
            /**
             * [Read-only and editable grids] Adds event handlers to the Subgrid OnLoad event event
             * @param callback The function to be executed when the subgrid loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See execution context for more information.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/addonload
             */
            AddOnLoad(callback: (executionContext: any) => void): void;
            /**
             * [Read-only and editable grids] Gets the URL of the current grid control
             * @param client Indicates the client type. You can specify one of the following values: 0: Browser | 1: MobileApplication
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/geturl
             */
            Url(client: 0 | 1): string;
            /**
             * [Read-only and editable grids] Refreshes the grid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refresh
             */
            Refresh(): void;
            /**
             * [Read-only and editable grids] Refreshes the ribbon rules for the grid control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refreshribbon
             */
            RefreshRibbon(): void;
            /**
             * [Read-only and editable grids] Displays the associated grid for the grid. This method does nothing if the grid is not filtered based on a relationship
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/openrelatedgrid
             */
            OpenRelatedGrid(): void;
            /**
             * [Read-only grids] Removes event handlers from the Subgrid OnLoad event event
             * @param callback The function to be removed from the OnLoad event.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/removeonload
             */
            RemoveOnLoad(callback: () => void): void;
            /**
             * [Read-only and editable grids] Gets the logical name of the entity data displayed in the grid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getentityname
             * */
            readonly EntityName: string;
            /**
             * [Read-only and editable grids] Gets the FetchXML query that represents the current data, including filtered and sorted data, in the grid control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getfetchxml
             */
            readonly FetchXml: string
            /**
             * [Read-only and editable grids] Gets the grid type (grid or subgrid)
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
             * */
            readonly GridType: OptionSet.GridType;
            /**
             * [Read-only and editable grids] Gets information about the relationship used to filter the subgrid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getrelationship
             * */
            readonly Relationship: DevKit.GridRelationship;
            /**
             * [Read-only grid] Provides methods to get or set information about the view selector of the subgrid control. If the subgrid control is not configured to display the view selector, calling the ViewSelector methods will throw an error
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/viewselector
             */
            readonly ViewSelector: DevKit.ViewSelector;
            /**
             * [Read-only and editable grids] Returns a collection of every GridRow in the Grid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/grid/getrows
             */
            readonly Rows: DevKit.Collections<DevKit.Controls.GridRow>;
            /**
             * [Read-only and editable grids] Returns a collection of every selected GridRow in the Grid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/grid/getselectedrows
             */
            readonly SelectedRows: DevKit.Collections<DevKit.Controls.GridRow>;
            /**
             * [Editable grids] Returns the total number of records that match the filter criteria of the view, not limited by the number visible in a single page
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/grid/gettotalrecordcount
             */
            readonly TotalRecordCount: number;
        }
        interface GridRow {
            /**
             * [Read-only and editable grids] Returns the logical name for the record in the row
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getentityname
             */
            readonly EntityName: string;
            /**
             * [Read-only and editable grids] Returns a Lookup value that references the record in the row
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getentityreference
             */
            readonly EntityReference: DevKit.EntityReference;
            /**
             * [Read-only and editable grids] Returns the Id for the record in the row
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getid
             */
            readonly EntityId: DevKit.Guid;
            /**
             * [Read-only grid] Returns the primary attribute value for the record in the row
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getprimaryattributevalue
             */
            readonly PrimaryAttributeValue: string;
            readonly Columns: DevKit.Collections<DevKit.Controls.GridColumn>;
        }
        interface GridColumn {
            /**
             * [Editable grids] Displays an error message for a cell to indicate that data isn’t valid
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setnotification
             */
            SetNotification(message: string, uniqueId?: string): boolean;
            /**
             * [Editable grids] Clears notification for a cell
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
             */
            ClearNotification(uniqueId: string): boolean;
            /**
             * [Editable grids] Returns the logical name of the attribute of a selected grid row
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getname
             */
            readonly Name: string;
            /**
             * [Editable grids] Get/Set a string value indicating whether a value for the attribute is required or recommended
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
             */
            RequiredLevel: OptionSet.FieldRequiredLevel;
            /**
             * [Editable grids] Get/Set the data value for an attribute
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string;
            /**
             * [Editable grids] Get/Set whether the cell is disabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;
            /**
             * [Editable grids] Returns the label of the column that contains the cell
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             */
            Label: string;
        }
        interface Note extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
        }
        interface EmailEngagement {

        }
        interface EmailRecipient {

        }
        interface Map {

        }
        interface ActionCards {

        }

        interface AciWidget {

        }
        interface PowerBi {

        }
        interface File {

        }
        interface Image {

        }
        interface QuickView {
            readonly Value: any;
            Visible: boolean;
            Label: string;
        }
    }
    namespace WebApi {
        interface OptionSetValue {
            /** The optionset number value. E.g.: 1000000001 */
            Value: number;
            /** The optionset formatted text. E.g. "Dynamics 365" */
            readonly FormattedValue: string;
        }
        interface OptionSetValueReadonly {
            /** The optionset number value. E.g.: 1000000001 */
            readonly Value: number;
            /** The optionset formatted text. E.g. "Dynamics 365" */
            readonly FormattedValue: string;
        }
        interface MultiOptionSetValue {
            /** The optionset number values. E.g.: [1000000001, 1000000003]*/
            Value: Array<number>;
            /** The optionset formatted texts. E.g.: ["Dynamics 2011", "Dynamics 365"] */
            readonly FormattedValue: Array<string>;
        }
        interface MultiOptionSetValueReadonly {
            /** The optionset number values. E.g.: [1000000001, 1000000003]*/
            readonly Value: Array<number>;
            /** The optionset formatted texts. E.g.: ["Dynamics 2011", "Dynamics 365"] */
            readonly FormattedValue: Array<string>;
        }
        interface BooleanValue {
            /** The boollean value. E.g.: true */
            Value: boolean;
            /** The boolean formatted text. E.g.: "Yes" */
            readonly FormattedValue: string;
        }
        interface BooleanValueReadonly {
            /** The boollean value. E.g.: true */
            readonly Value: boolean;
            /** The boolean formatted text. E.g.: "Yes" */
            readonly FormattedValue: string;
        }
        interface DateOnlyValue {
            /** The date only value. Always format yyyy-MM-dd. E.g.: "2019-04-30" */
            Value: string;
            /** The date only formatted text, base on user setting format. E.g.: "2019.04.30" */
            readonly FormattedValue: string;
        }
        interface DateOnlyValueReadonly {
            /** The date only value. Always format yyyy-MM-dd. E.g.: "2019-04-30" */
            readonly Value: string;
            /** The date only formatted text, base on user setting format. E.g.: "2019.04.30" */
            readonly FormattedValue: string;
        }
        interface UtcDateOnlyValue {
            /** The UTC date only value. E.g.: "2019-04-29T17:00:00Z" */
            Value: string;
            /** The UTC date formatted text, base on user setting format. E.g.: "30.04.2019" */
            readonly FormattedValue: string;
        }
        interface UtcDateOnlyValueReadonly {
            /** The UTC date only value. E.g.: "2019-04-29T17:00:00Z" */
            readonly Value: string;
            /** The UTC date formatted text, base on user setting format. E.g.: "30.04.2019" */
            readonly FormattedValue: string;
        }
        interface UtcDateAndTimeValue {
            /** The UTC date and time value. E.g.: "2019-04-27T07:30:00Z" */
            Value: string;
            /** The UTC date and time formatted text, base on user setting format. E.g.: "27.04.2019 02:30 CH" */
            readonly FormattedValue: string;
        }
        interface UtcDateAndTimeValueReadonly {
            /** The UTC date and time value. E.g.: "2019-04-27T07:30:00Z" */
            readonly Value: string;
            /** The UTC date and time formatted text, base on user setting format. E.g.: "27.04.2019 02:30 CH" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateOnlyValue {
            /** The time-zone date only value. E.g.: "2019-04-26T00:00:00Z" */
            Value: string;
            /** The time-zone date formatted text, base on user setting format. E.g.: "26.04.2019" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateOnlyValueReadonly {
            /** The time-zone date only value. E.g.: "2019-04-26T00:00:00Z" */
            readonly Value: string;
            /** The time-zone date formatted text, base on user setting format. E.g.: "26.04.2019" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateAndTimeValue {
            /** The time-zone date and time value. E.g.: "2019-04-28T15:30:00Z" */
            Value: string;
            /** The time-zone date and time formatted text, base on user setting format. E.g.: "28.04.2019 03:30 CH" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateAndTimeValueReadonly {
            /** The time-zone date and time value. E.g.: "2019-04-28T15:30:00Z" */
            readonly Value: string;
            /** The time-zone date and time formatted text, base on user setting format. E.g.: "28.04.2019 03:30 CH" */
            readonly FormattedValue: string;
        }
        interface IntegerValue {
            /** The integer value. E.g.: 1234567 */
            Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface IntegerValueReadonly {
            /** The integer value. E.g.: 1234567 */
            readonly Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface BigIntValue {
            /** The big integer value. E.g.: 1234567 */
            Value: number;
            /** The big integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface BigIntValueReadonly {
            /** The integer value. E.g.: 1234567 */
            readonly Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface DoubleValue {
            /** The double value. E.g.: 1234.57 */
            Value: number;
            /** The double formatted text, base on user setting format. E.g.: "1.234,57" */
            readonly FormattedValue: string;
        }
        interface DoubleValueReadonly {
            /** The double value. E.g.: 1234.57 */
            readonly Value: number;
            /** The double formatted text, base on user setting format. E.g.: "1.234,57" */
            readonly FormattedValue: string;
        }
        interface DecimalValue {
            /** The decimal value. E.g.: 1234567.89 */
            Value: number;
            /** The decimal formatted text, base on user setting format. E.g.: "1.234.567,89" */
            readonly FormattedValue: string;
        }
        interface DecimalValueReadonly {
            /** The decimal value. E.g.: 1234567.89 */
            readonly Value: number;
            /** The decimal formatted text, base on user setting format. E.g.: "1.234.567,89" */
            readonly FormattedValue: string;
        }
        interface MoneyValue {
            /** The currency value of field. E.g.: 123456.35 */
            Value: number;
            /** The currency formatted text, base on user setting format. E.g.: "123.456,35 $" */
            readonly FormattedValue: string;
        }
        interface MoneyValueReadonly {
            /** The currency value of field. E.g.: 123456.35 */
            readonly Value: number;
            /** The currency formatted text, base on user setting format. E.g.: "123.456,35 $" */
            readonly FormattedValue: string;
        }
        interface StringValue {
            /** The string value. E.g.: "A. Datum Corporation (sample)" */
            Value: string;
        }
        interface StringValueReadonly {
            /** The string value. E.g.: "A. Datum Corporation (sample)" */
            readonly Value: string;
        }
        interface LookupValue {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: DevKit.Guid;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface LookupValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            readonly Value: DevKit.Guid;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface GuidValue {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: DevKit.Guid;
        }
        interface GuidValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: DevKit.Guid;
        }
        interface ManagedPropertyValue{
            Value: string;
        }
        interface ManagedPropertyValueReadonly{
            Value: string;
        }
        interface RetrieveMultipleResponse {
            /** An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default. */
            entities: Array<DevKit.KeyValueObject>;
            /** If the number of records being retrieved is more than the value specified in the maxPageSize parameter in the request, this attribute returns the URL to return next set of records. */
            nextLink: string;
        }
        interface ExecuteRequest {
            /**
             * The name of the bound parameter for the action or function to execute. Specify undefined if you are executing a CRUD request. Specify null if the action or function to execute is not bound to any entity. Specify entity in case the action or function to execute is bound to an entity.
             */
            boundParameter?: "entity" | undefined | null;
            /** Name of the action, function, or one of the following values if you are executing a CRUD request. */
            operationName?: "Create" | "Retrieve" | "RetrieveMultiple" | "Update" | "Delete" | string;
            /** Indicates the type of operation you are executing */
            operationType?: OptionSet.OperationType;
            /** The metadata for parameter types. */
            parameterTypes: {
                /**  The metadata for enum types. The object has two string attributes: name and value */
                enumProperties?: Array<DevKit.KeyValueObject>;
                /** The category of the parameter type.  */
                structuralProperty: OptionSet.StructuralProperty;
            }
        }
        interface ExecuteResponse {
            /** Response body. */
            body?: any;
            /** Response headers. */
            headers: any;
            /** Indicates whether the request was successful. */
            ok: boolean;
            /** Numeric value in the response status code.For example: 200 */
            status: number;
            /** Description of the response status code.For example: OK */
            statusText: string;
            /** Response type */
            type: "" | "arraybuffer" | "blob" | "document" | "json" | "text";
            /** Request URL of the action, function, or CRUD request that was sent to the Web API endpoint. */
            url: string;
        }
        interface ChangeSetRequest {

        }
        /**
         * Object passed to ErrorCallbackDelegate.
         */
        interface ErrorCallbackObject {
            /**
             * The error code.
             */
            errorCode: number;

            /**
             * An error message describing the issue.
             */
            message: string;
        }

        /**
         * Object passed to QuickCreateSuccessCallbackDelegate.
         */
        interface OpenQuickCreateSuccessCallbackObject {
            /**
             * A lookup value which identifies the record which has been created.
             */
            savedEntityReference: LookupValue;
        }

        /**
         * Object passed to OfflineOperationSuccessCallbackDelegate;
         */
        interface OfflineOperationSuccessCallbackObject {
            /**
             * GUID of the record;
             */
            id: string;

            /**
             * Logical name of the entity.
             */
            logicalName: string;
        }

        /**
         * Object passed to OfflineErrorCallbackDelegate.
         */
        interface OfflineErrorCallbackObject extends ErrorCallbackObject {
            /**
             * An internal error message that might contain additional details about the issue.
             */
            debugMessage: string;
        }

        /**
         * Interface for asynchronous promises. Based on JQuery Promise
         */
        interface PromiseLike<T> {
            /**
             * Attaches callbacks for the resolution and/or rejection of the Promise.
             * @param onFulfilled The callback to execute when the Promise is resolved.
             * @param onRejected The callback to execute when the Promise is rejected.
             * @returns A Promise for the completion of which ever callback is executed.
             */
            then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => U | PromiseLike<U>):
                PromiseLike<U>;
            then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => void): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Web Client only) Add handlers to be called when the Deferred object is rejected.
             */
            fail<U>(onRejected?: (reason: ErrorResponse) => U | PromiseLike<U>): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Web Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
             */
            always<U>(alwaysCallback: (() => U | PromiseLike<U>)): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is rejected.
             */
            catch<U>(onRejected?: (reason: ErrorResponse) => U | PromiseLike<U>): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
             */
            finally<U>(finallyCallback: (() => U | PromiseLike<U>)): PromiseLike<U>;
        }
        interface CreateResponse {
            entityType: string;
            id: string;
        }
        /** Interface for the Promise error response arguments */
        interface ErrorResponse {
            errorCode: number;
            message: string;
        }
    }
    interface IEntityBaseAttribute {
        /** Type of an attribute */
        readonly AttributeType: number;
        /** Display name for the attribute */
        readonly DisplayName: string;
        /** Logical name of the entity that contains the attribute */
        readonly EntityLogicalName: string;
        /** Logical name for the attribute */
        readonly LogicalName: string;
    }
    interface EntityBooleanAttribute extends IEntityBaseAttribute {
        /** Default value for a Boolean option set */
        readonly DefaultFormValue: boolean;
        /** Options for the boolean attribute where each option is a key: value pair */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    interface EntityEnumAttribute extends IEntityBaseAttribute {
        /** Options for the boolean attribute where each option is a key: value pair */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    interface EntityPicklistAttribute extends IEntityBaseAttribute {
        /** Default value for a Number option set */
        readonly DefaultFormValue: number;
        /** Options for the boolean attribute where each option is a key: value pair */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    interface EntityStateAttribute extends IEntityBaseAttribute {
        /**
         * Returns the default status based on the passed in state value for an entity
         * @param arg statecode value
         */
        getDefaultStatus(arg: number): number;
        /**
         * Returns possible status values (array of numbers) for a specified state value
         * @param arg statecode value
         */
        getStatusValuesForState(arg: number): Array<number>;
        /** Options for the boolean attribute where each option is a key: value pair */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    interface EntityStatusAttribute extends IEntityBaseAttribute {
        /**
         * Returns the state value (number) for the specified status value (number)
         * @param arg statuscode value
         */
        getState(arg: number): Array<number>;
        /** Options for the boolean attribute where each option is a key: value pair */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    interface Error {
        /** The error code  */
        readonly code: number;
        /** The error code */
        readonly errorCode: number;
        /** An error message describing the issue */
        readonly message: string;
    }
    interface EntityPrivilege {
        /** Whether the privilege can be basic access level */
        readonly CanBeBasic: boolean;
        /** Whether the privilege can be deep access level */
        readonly CanBeDeep: boolean;
        /** Whether the privilege for an external party can be basic access level */
        readonly CanBeEntityReference: boolean;
        /** Whether the privilege can be global access level */
        readonly CanBeGlobal: boolean;
        /** Whether the privilege can be local access level */
        readonly CanBeLocal: boolean;
        /** Whether the privilege for an external party can be parent access level */
        readonly CanBeParentEntityReference: boolean;
        /** The name of the privilege */
        readonly Name: string;
        /** The ID of the privilege */
        readonly PrivilegeId: DevKit.Guid;
        /** The type of operation for the privilege */
        readonly PrivilegeType: OptionSet.PrivilegeType
    }
    interface EntityMetadata {
        /** Whether a custom activity should appear in the activity menus in the Web application. 0 indicates that the custom activity doesn't appear; 1 indicates that it does appear */
        readonly ActivityTypeMask: number;
        /** Indicates whether to automatically move records to the owner’s default queue when a record of this type is created or assigned */
        readonly AutoRouteToOwnerQueue: boolean;
        /** Indicates whether the entity can trigger a workflow process */
        readonly CanTriggerWorkflow: boolean;
        /** Description for the entity */
        readonly Description: string;
        /** Plural display name for the entity */
        readonly DisplayCollectionName: string;
        /** Display name for the entity */
        readonly DisplayName: string;
        /** Indicates whether the entity will enforce custom state transitions */
        readonly EnforceStateTransitions: boolean;
        /** The hexadecimal code to represent the color to be used for this entity in the application */
        readonly EntityColor: string;
        /** The name of the Web API entity set for this entity */
        readonly EntitySetName: string;
        /** Indicates whether activities are associated with this entity */
        readonly HasActivities: boolean;
        /** Indicates whether the entity is an activity */
        readonly IsActivity: boolean;
        /** Indicates whether the email messages can be sent to an email address stored in a record of this type */
        readonly IsActivityParty: boolean;
        /** Indicates whether the entity is enabled for business process flows */
        readonly IsBusinessProcessEnabled: boolean;
        /** Indicates whether the entity is a business process flow entity */
        readonly IsBPFEntity: boolean;
        /** Indicates whether the entity is a child entity */
        readonly IsChildEntity: boolean;
        /** Indicates whether connections are enabled for this entity */
        readonly IsConnectionsEnabled: boolean;
        /** Indicates whether the entity is a custom entity */
        readonly IsCustomEntity: boolean;
        /** Indicates whether the entity is customizable */
        readonly IsCustomizable: boolean;
        /** Indicates whether document management is enabled */
        readonly IsDocumentManagementEnabled: boolean;
        /** Indicates whether the documemt recommendations is enabled */
        readonly IsDocumentRecommendationsEnabled: boolean;
        /** Indicates whether duplicate detection is enabled */
        readonly IsDuplicateDetectionEnabled: boolean;
        /** Indicates whether charts are enabled */
        readonly IsEnabledForCharts: boolean;
        /** Indicates whether the entity can be imported using the Import Wizard */
        readonly IsImportable: boolean;
        /** Indicates the entity is enabled for interactive experience.*/
        readonly IsInteractionCentricEnabled: boolean;
        /** Indicates whether knowledge management is enabled for the entity */
        readonly IsKnowledgeManagementEnabled: boolean;
        /** Indicates whether mail merge is enabled for this entity */
        readonly IsMailMergeEnabled: boolean;
        /** Indicates whether the entity is part of a managed solution */
        readonly IsManaged: boolean;
        /** Indicates whether OneNote integration is enabled for the entity */
        readonly IsOneNoteIntegrationEnabled: boolean;
        /** Indicates whether optimistic concurrency is enabled for the entity */
        readonly IsOptimisticConcurrencyEnabled: boolean;
        /** Indicates whether the entity is enabled for quick create forms */
        readonly IsQuickCreateEnabled: boolean;
        /** Indicates whether the entity supports setting custom state transitions */
        readonly IsStateModelAware: boolean;
        /** Indicates whether the entity is will be shown in Advanced Find */
        readonly IsValidForAdvancedFind: boolean;
        /** Indicates whether Microsoft Dynamics 365 for tablets users can see data for this entity */
        readonly IsVisibleInMobileClient: boolean;
        /** Indicates whether the entity is enabled for Unified Interface */
        readonly IsEnabledInUnifiedInterface: boolean;
        /** The logical collection name */
        readonly LogicalCollectionName: string;
        /** The logical name for the entity */
        readonly LogicalName: string;
        /** The entity type code */
        readonly ObjectTypeCode: number;
        /** The ownership type for the entity: "UserOwned" or "OrganizationOwned" */
        readonly OwnershipType: string;
        /** The name of the attribute that is the primary id for the entity */
        readonly PrimaryIdAttribute: string;
        /** String	The name of the primary image attribute for an entity */
        readonly PrimaryImageAttribute: string;
        /** The name of the primary attribute for an entity */
        readonly PrimaryNameAttribute: string;
        /** The privilege metadata for the entity where each object contains the following attributes to define the security privilege for access to an entity */
        readonly Privileges: Array<EntityPrivilege>;
        /** A collection of attribute metadata objects. The object returned depends on the type of attribute metadata */
        readonly Attributes: Array<IEntityBaseAttribute | EntityBooleanAttribute | EntityEnumAttribute | EntityPicklistAttribute | EntityStateAttribute | EntityStatusAttribute>;
    }
    interface KeyValueObject {
        readonly key: string,
        readonly value: any
    }
    interface KeyValueNumber {
        readonly key: string,
        readonly value: number
    }
    interface TextValueNumber {
        readonly text: string,
        readonly value: number
    }
    interface DialogResult {
        /** Indicates whether the confirm button was clicked to close the dialog */
        readonly confirmed: boolean;
    }
    interface FileData {
        /** Contents of the audio file */
        readonly fileContent: string;
        /** Name of the audio file */
        readonly fileName: string;
        /** Size of the audio file in KB */
        readonly fileSize: number;
        /** Audio file MIME type */
        readonly mimeType: string;
    }
    interface DateFormattingInfoCalendar {
        readonly MinSupportedDateTime: Date;
        readonly MaxSupportedDateTime: Date;
        readonly AlgorithmType: number;
        readonly CalendarType: number;
        readonly Eras: Array<number>;
        readonly TwoDigitYearMax: number;
        readonly IsReadOnly: boolean;
    }
    interface DateFormattingInfo {
        readonly AmDesignator: string;
        readonly AbbreviatedDayNames: Array<string>;
        readonly AbbreviatedMonthGenitiveNames: Array<string>;
        readonly AbbreviatedMonthNames: Array<string>;
        readonly Calendar: DateFormattingInfoCalendar;
        readonly CalendarWeekRule: number;
        readonly DateSeparator: string;
        readonly DayNames: Array<string>;
        readonly FirstDayOfWeek: number;
        readonly FullDateTimePattern: string;
        readonly LongDatePattern: string;
        readonly LongTimePattern: string;
        readonly MonthDayPattern: string;
        readonly MonthGenitiveNames: Array<string>;
        readonly MonthNames: Array<string>;
        readonly PmDesignator: string;
        readonly ShortDatePattern: string;
        readonly ShortTimePattern: string;
        readonly ShortestDayNames: Array<string>;
        readonly SortableDateTimePattern: string;
        readonly TimeSeparator: string;
        readonly UniversalSortableDateTimePattern: string;
        readonly YearMonthPattern: string;
    }
    interface AppProperty {
        readonly appId: string;
        readonly displayName: string;
        readonly uniqueName: string;
        readonly url: string;
        readonly webResourceId: DevKit.Guid;
        readonly webResourceName: string;
        readonly welcomePageId: DevKit.Guid;
        readonly welcomePageName: string;
    }
    interface FieldUserPrivilege {
        readonly canRead: boolean;
        readonly canUpdate: boolean;
        readonly canCreate: boolean;
    }
    interface ProcessStage {
        /**
         * Returns the status of the stage
         * @param callback
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getnavigationbehavior
         */
        AllowCreateNew(callback: () => boolean): void;
        /**
         * Returns the integer value of the business process flow category
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formContext-data-process/stage/getCategory
         */
        readonly Category: OptionSet.ProcessCategory;
        /**
         * Returns the logical name of the entity associated with the stage
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getentityname
         */
        readonly EntityName: String;
        /**
         * Returns the unique identifier of the stage
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getid
         */
        readonly Id: string;
        /**
         * Returns the name of the stage
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getname
         */
        readonly Name: string;
        /**
         * Returns the status of the stage
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getstatus
         */
        readonly Status: "active" | "inactive";
        /**
         * Returns a navigation behavior object for a stage that can be used to define whether the Create button is available for users to create other entity record in a cross-entity business process flow navigation scenario.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getsteps
         */
        Steps: Array<ProcessStep>;
    }
    interface ProcessStep {
        /**
         * Updates the progress of the action step. This method is supported only for the action steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
         * @param stepProgress Specify the step progress
         * @param message An optional message that is set as the Alt text on the icon for the step
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
         */
        SetProgress(stepProgress: OptionSet.ProcessProgress, message?: string): void;
        /**
         * Returns the logical name of the attribute associated to the step
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getattribute
         */
        readonly Attribute: string;
        /**
         * Returns the name of the step
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getname
         */
        readonly Name: string;
        /**
         * Returns the progress of the action step. This method is supported only for the action steps; not for the data steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getprogress
         */
        readonly Progress: OptionSet.ProcessProgress;
        /**
         * Returns a boolean value indicating whether the step is required in the business process flow
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/isrequired
         * */
        readonly Required: boolean;
    }
    interface ProcessInstance extends ProcessEnabled {
        readonly CreatedOn: string;
        readonly CreatedOnDate: Date;
        readonly InstanceId: DevKit.Guid;
        readonly InstanceName: string;
        readonly Status: OptionSet.ProcessStatus;
    }
    interface ProcessEnabled {
        readonly ProcessId: DevKit.Guid;
        readonly ProcessName: string;
    }
    interface ProcessProcess {
        /**
         * Returns the unique identifier of the process
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getid
         */
        readonly Id: DevKit.Guid;
        /**
         * Returns the name of the process
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getname
         */
        readonly Name: string;
        /**
         * Returns a boolean value indicating whether the process is rendered
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/isrendered
         */
        readonly IsRendered: boolean;
        /**
         * Returns a collection of stages in the process
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getstages
         */
        Stages: DevKit.Collections<ProcessStage>;
    }
    interface GridRelationship {
        /** Name of the attribute. */
        readonly attributeName: string,
        /** Name of the relationship. */
        readonly name: string,
        /** Name of the navigation property for this relationship. */
        readonly navigationPropertyName: string,
        /** Returns one of the following values to indicate the relationship type. 0: OneToMany | 1: ManyToMany */
        readonly relationshipType: 0 | 1,
        /** Returns one of the following values to indicate the role type of relationship. 1: Referencing | 2: AssociationEntity */
        readonly roleType: 1 | 2
    }
    interface Collections<T> {
        forEach(successCallback: (item: T, index: number) => void): void;
        get(): Array<T>;
        get(item: string): T;
        get(index: number): T;
        get(successCallback: (item: T, index: number) => void): Array<T>;
        getLength(): number;
    }
    interface ExecutionContext {
        /**
         * Retrieves a variable set using the SetSharedVariable method.
         * @param key The name of the variable.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/getsharedvariable
         */
        GetSharedVariable(key: string): any;
        /**
         * Sets the value of a variable to be used by a handler after the current handler completes.
         * @param key The name of the variable.
         * @param value The values to set.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/setsharedvariable
         */
        SetSharedVariable(key: string, value: any): void;
        /**
         * Returns a value indicating whether the save event has been canceled because the preventDefault method was used in this event hander or a previous event handler.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/isdefaultprevented
         */
        IsDefaultPrevented(): boolean;
        /**
         * Cancels the save operation, but all remaining handlers for the event will still be executed.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault
         */
        SetPreventDefault(): void;
        /**
         * Cancels the save operation if the event handler has a script error, returns a rejected promise for an async event handler or the operation times out.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefaultonerror
         */
        SetPreventDefaultOnError
        /**
         * Returns a value that indicates the order in which this handler is executed.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/getdepth
         */
        readonly Depth: number;
        /**
         * Returns an object with methods to manage the events.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs
         */
        readonly EventArgs: any;
        /**
         * Returns a reference to the object that the event occurred on.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventsource
         */
        readonly EventSource: any;
        /**
         * Returns a reference to the form or an item on the form depending on where the method was called.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/executioncontext/getformcontext
         */
        readonly FormContext: any;
        /**
         * Returns a value indicating how the save event was initiated by the user.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
         */
        readonly SaveMode: OptionSet.SaveMode;
        /**
        * Use this method to know information about an entity being saved/updated. It returns entity ID, and entity name if success.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getentityreference
        */
        readonly EntityReference: DevKit.EntityReference;
        /**
        * Use this method to know whether the OnSave operation is successful or failed.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getissavesuccess
        */
        readonly IsSaveSuccess: boolean;
        /**
        * Use this method to know the error details on why an entity save failed.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsaveerrorinfo
        */
        readonly SaveErrorInfo: string;
    }
    interface Utility {
        /**
         * Returns information about the advanced configuration settings for the organization
         * @param setting Name of the configuration setting
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
         */
        AdvancedConfigSetting(setting: OptionSet.AdvancedConfigSetting): number;
        /**
         * Returns the valid state transitions for the specified entity type and state code.
         * @param entityName The logical name of the entity.
         * @param statusCode The status code to find out the allowed status transition values.
         * @param successCallback The function to execute when the operation succeeds.
         * @param errorCallback The function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getallowedstatustransitions
         */
        AllowedStatusTransitions(entityName: string, statusCode: number, successCallback?: (statusCodes: Array<number>) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Returns a promise containing the default main form descriptor with the following values.
         * @param entityName The logical name of the entity.
         * @param formId The form ID of the entity.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymainformdescriptor
         */
        EntityMainFormDescriptor(entityName: string, formId: string): any;
        /**
         * Invokes the device camera to scan the barcode information, such as a product number. Note: This method is supported only for the mobile clients.
         * @param successCallback A function to call when the barcode value is returned as a String.
         * @param errorCallback A function to call when the operation fails. An error object with the message property (String) will be passed that describes the error details.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/getbarcodevalue
         */
        BarcodeValue(successCallback: (result: string) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Invokes the device microphone to record audio.
         * @param successCallback A function to call when audio is returned. A base64 encoded audio object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/captureaudio
         */
        CaptureAudio(successCallback: (result: DevKit.FileData) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Invokes the device camera to capture an image. Note: This method is supported only for the mobile clients.
         * @param imageOption The image option.
         * @param successCallback A function to call when image is returned. A base64 encoded image object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
         */
        CaptureImage(imageOption: DevKit.ImageOption, successCallback: (result: DevKit.FileData) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Invokes the device camera to record video. Note: This method is supported only for the mobile clients.
         * @param successCallback A function to call when Video is returned. A base64 encoded video object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/capturevideo
         */
        CaptureVideo(successCallback: (result: DevKit.FileData) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Closes a progress dialog box. If no progress dialog is displayed currently, this method will do nothing. You can display a progress dialog using the ShowProgressIndicator method.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/closeprogressindicator
         */
        CloseProgressIndicator(): void;
        /**
         * Returns the name of the current business app in Customer Engagement
         * @param successCallback A function to call when the business app name is returned
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
         */
        CurrentAppName(successCallback: (result: string) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Returns the relative URL with the caching token for the specified web resource.
         * @param webResourceName Name of the web resource.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getwebresourceurl
         */
        WebResourceUrl(webResourceName: string): string;
        /**
         * Returns the properties of the current business app in Customer Engagement
         * @param successCallback A function to call when the business app property information is returned
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
         */
        CurrentAppProperties(successCallback: (result: DevKit.AppProperty) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Returns the current location using the device geolocation capability. Note: For the CurrentPosition method to work, the geolocation capability must be enabled on your mobile device, and the Dynamics 365 for Customer Engagement mobile clients must have permissions to access the device location, which isn't enabled by default. This method is supported only for the mobile clients.
         * @param successCallback A function to call when the current geolocation information is returned. A geolocation object attributes is passed to the function
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
         */
        CurrentPosition(successCallback: (result: DevKit.PositionData) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Returns the entity metadata for the specified entity.
         * @param entityName The logical name of the entity.
         * @param attributes The attributes to get metadata for.
         * @param successCallback A function to call when the entity metadata is returned.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        EntityMetadata(entityName: string, attributes?: Array<string>, successCallback?: (result: DevKit.EntityMetadata) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Encodes the specified string so that it can be used in an HTML attribute.
         * @param arg String to be encoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlencode
         */
        HtmlAttributeEncode(arg: string): string;
        /**
         * Converts a string that has been HTML-encoded into a decoded string.
         * @param arg HTML-encoded string to be decoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmldecode
         */
        HtmlDecode(arg: string): string;
        /**
         * Converts a string to an HTML-encoded string.
         * @param arg String to be encoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlattributeencode
         */
        HtmlEncode(arg: string): string;
        /**
         * Invokes an action based on the specified parameters.
         * @param name Name of the process action to invoke.
         * @param parameter An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
         * @param successCallback A function to call when the action is invoked.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/invokeprocessaction
         */
        InvokeProcessAction(name: string, parameter: any, successCallback: (result: any) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Dynamics 365 for Customer Engagement apps web client.
         * @param url URL of the page to be loaded in the side pane static area.
         * @param title Title of the side pane static area.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-panel/loadpanel
         */
        LoadPanel(url: string, title: string): void;
        /**
         * Defines the options for opening the lookup dialog
         * @param lookupOption
         * @param successCallback A function to call when the lookup control is invoked. An array of objects properties is passed
         * @param cancelCallback A function to call when you cancel the lookup control or the operation fails
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
         */
        LookupObjects(lookupOption: DevKit.LookupOption, successCallback: (results: Array<DevKit.EntityReference>) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Displays an alert dialog containing a message and a button.
         * @param alertOption The strings to be used in the alert dialog.
         * @param window The height and width options for alert dialog.
         * @param successCallback A function to execute when the alert dialog is closed by either clicking the confirm button or canceled by pressing ESC.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
         */
        OpenAlertDialog(alertOption: DevKit.DialogAlertOption, window?: DevKit.Window, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Displays a confirmation dialog box containing a message and two buttons.
         * @param confirmOption The strings to be used in the confirmation dialog.
         * @param window The height and width options for confirmation dialog.
         * @param successCallback A function to execute when the confirmation dialog is closed by clicking the confirm, cancel, or X in the top-right corner of the dialog. An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
         */
        OpenConfirmDialog(confirmOption: DevKit.DialogConfirmOption, window?: DevKit.Window, successCallback?: (result: DevKit.DialogResult) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Displays an error dialog.
         * @param errorOptions An object to specify the options for error dialog.
         * @param successCallback A function to execute when the error dialog is closed.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
         */
        OpenErrorDialog(errorOptions: DevKit.DialogError, successCallback: (result: string) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Opens a file.
         * @param file An object describing the file to open.
         * @param fileOption An object describing whether to open or save the file.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
         */
        OpenFile(file: DevKit.FileData, fileOption?: DevKit.FileOption): void;
        /**
         * Opens an entity form or a quick create form.
         * @param formOption The open form option for opening the form.
         * @param formParameters A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error.
         * @param successCallback A function to execute when the record is saved in the quick create form. This function is passed an object as a parameter.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        OpenForm(formOption: DevKit.FormOption, formParameters?: any, successCallback?: (result: DevKit.EntityReference) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Opens a URL, including file URLs.
         * @param url URL to open.
         * @param window Options to open the URL.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openurl
         */
        OpenUrl(url: string, window?: DevKit.Window): void;
        /**
         * Opens an HTML web resource.
         * @param webResourceName Name of the HTML web resource to open.
         * @param window Window options for opening the web resource.
         * @param data Data to be passed into the data parameter.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openwebresource
         */
        OpenWebResource(webResourceName: string, window?: DevKit.Window, data?: string): void;
        /**
         * Navigates to the specified page.
         * @param pageInput Input about the page to navigate to. The object definition changes depending on the type of page to navigate to: entity list or HTML web resource.
         * @param navigationOptions Options for navigating to a page: whether to open inline or in a dialog. If you don't specify this parameter, page is opened inline by default.
         * @param successCallback A function to execute on successful navigation to the page when navigating inline and on closing the dialog when navigating to a dialog.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
         */
        NavigateTo(pageInput: DevKit.PageInputEntityList | DevKit.PageInputHtmlWebResource | DevKit.PageInputEntityRecord | DevKit.PageInputDashboard, navigationOptions?: DevKit.NavigationOptions, successCallback?: (result: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
         * @param filePickOption An object pick file option
         * @param successCallback A function to call when selected files are returned. An array of objects with each object having the following attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
         */
        PickFile(filePickOption: DevKit.FilePickOption, successCallback: (result: Array<DevKit.FileData>) => void, errorCallback: (error: DevKit.Error) => void): void;
        /**
         * Prefixes the current organization's unique name to a string, typically a URL path
         * @param path A local path to a resource
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
         */
        PrependOrgName(path: string): string;
        /**
         * Refreshes the parent grid containing the specified record
         * @param lookupOption An object with the following properties to specify the record
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/refreshparentgrid
         */
        RefreshParentGrid(lookupOption: DevKit.EntityReference): void;
        /**
         * Returns the localized string for a given key associated with the default web resource
         * @param key The key for the localized string
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        Resource(key: string): string;
        /**
         * Returns the localized string for a given key associated with the specified web resource
         * @param webResourceName The name of the web resource. E.g.: "devkit_/resources/Resource"
         * @param key The key for the localized string
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        ResourceString(webResourceName: string, key: string): string;
        /**
         * Displays a progress dialog with the specified message. Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call. The progress dialog blocks the UI until it is closed using the CloseProgressIndicator method. So, you must use this method with caution
         * @param message The message to be displayed in the progress dialog
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/showprogressindicator
         */
        ShowProgressIndicator(message: string): void;
        /**
         * Encodes the specified string so that it can be used in an XML attribute.
         * @param arg String to be encoded.
         */
        XmlAttributeEncode(arg: string): string;
        /**
         * Converts a string to an XML-encoded string.
         * @param arg String to be encoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlattributeencode
         */
        XmlEncode(arg: string): string;
        /**
         * Encodes the specified string so that it can be used in an HTML attribute.
         * @param arg String to be encoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlattributeencode
         */
        HtmlAttributeEncode(arg: string): string;
        /**
         * Converts a string that has been HTML-encoded into a decoded string.
         * @param arg HTML-encoded string to be decoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmldecode
         */
        HtmlDecode(arg: string): string;
        /**
         * Converts a string to an HTML-encoded string.
         * @param arg String to be encoded.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlencode
         */
        HtmlEncode(arg: string): string;
        /**
         * Displays an error, information, warning, or success notification for an app, and lets you specify actions to execute based on the notification.
         * @param notification The notification to add.
         * @param successCallback A function to call when notification is displayed. A GUID value is passed to uniquely identify the notification. You can use the GUID value to close or dismiss the notification using the clearGlobalNotification method.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
         */
        AddGlobalNotification(notification: DevKit.GlobalNotification, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Clears a notification in the app.
         * @param uniqueId The ID to use to clear a specific notification that was set using addGlobalNotification.
         * @param successCallback A function to call when the notification is cleared.
         * @param errorCallback A function to call when the operation fails.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
         */
        ClearGlobalNotification(uniqueId: string, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         *  Provides access to the methods to determine which client is being used, whether the client is connected to the server, and what kind of device is being used.
         *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client
         */
        readonly Client: DevKit.Client;
        /**
         * Returns the base URL that was used to access the application
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
         */
        readonly ClientUrl: string;
        /**
         * Returns the URL of the current business app in Customer Engagement
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
         */
        readonly CurrentAppUrl: string;
        /**
         * Returns a boolean value indicating if the Customer Engagement instance is hosted on-premises or online
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
         */
        readonly IsOnPremises: boolean;
        /**
         * Returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer for identifying UI controls in the Dynamics 365 for Customer Engagement apps form. An attribute by this name must be added to the UI element that needs to be exposed to Learning Path (guided help)
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getlearningpathattributename
         */
        readonly LearningPathAttributeName: string;
        /**
         * The method returns an object with the input property. The input property is an object with the following attributes depending on whether you are currently on the entity form or entity list
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
         * */
        readonly PageContext: any;
        /**
         *  Returns information about the current organization settings
         *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
         */
        readonly OrganizationSettings: DevKit.OrganizationSettings;
        /**
         * Returns information about the current user settings
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings
         */
        readonly UserSettings: DevKit.UserSettings
        /**
         * Returns the version number of the Dynamics 365 for Customer Engagement apps instance. E.g.: "9.0.0.1103"
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getversion
         */
        readonly Version: string;
    }
    interface SidePanes {
        Create(paneOptions: DevKit.SidePaneOptions, successCallback: (pane: DevKit.SidePane) => void): void;
        Get(paneId: string): DevKit.SidePane;
        GetSelected(): DevKit.SidePane;
        GetAll(): DevKit.Collections<DevKit.SidePane>;
        DisplayState: OptionSet.SidePaneState;
    }
    interface Client {
        /**
        *  Returns a value to indicate which client the script is executing in.
        *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
        */
        readonly ClientName: OptionSet.ClientName;
        /**
        *  Returns a value to indicate the state of the client.
        *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
        */
       readonly ClientState: OptionSet.ClientState;
        /**
        *  Returns information about the kind of device the user is using.
        *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
        */
       readonly FormFactor: OptionSet.FormFactor;
        /**
        *  Returns information whether the server is online or offline
        *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#isoffline
        */
       readonly IsOffline: boolean;
    }
    interface OrganizationSettings {
        /**
        * Returns attributes and their values as key:value pairs that are available for the organization entity. Additional values will be available as attributes if they are specified as attribute dependencies in the web resource dependency list. The key will be the attribute logical name
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#attributes
        */
        readonly Attributes: Array<DevKit.KeyValueObject>;
        /**
        * [Deprecated] Returns the ID of the base currency for the current organization
        * @deprecated use {@link BaseCurrency }
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrencyid            *
        */
        readonly BaseCurrencyId: DevKit.Guid;
        /**
        * Returns a lookup object containing the ID, name, and entity type of the base currency for the current organization. This method is supported only on the Unified Interface.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrency
        */
        readonly BaseCurrency: DevKit.EntityReference;
        /**
        * Returns the default country/region code for phone numbers for the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#defaultcountrycode
        */
        readonly DefaultCountryCode: string;
        /**
        * Indicates whether the auto-save option is enabled for the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#isautosaveenabled
        */
        readonly IsAutoSaveEnabled: boolean;
        /**
        * Returns the preferred language ID for the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#languageid
        */
        readonly LanguageId: number;
        /**
        * Returns the ID of the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#organizationid
        */
        readonly OrganizationId: DevKit.Guid;
        /**
        * Returns the ID of the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#istrialorganization
        */
        readonly IsTrialOrganization: boolean;
        /**
        * Returns the expiry date of the current organization if it is a trial organization.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#organizationexpirydate
        */
        readonly OrganizationExpiryDate: Date;
        /**
        * Returns a boolean indicating whether the organization is a trial organization.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#uniquename
        */
        readonly UniqueName: string;
        /**
        * Indicates whether the Skype protocol is used for the current organization
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#useskypeprotocol
        */
        readonly UseSkypeProtocol: boolean;
        /**
        * Returns the FullNameConventionCode setting of the current organization.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#fullnameconventioncode
        */
        readonly FullNameConventionCode: OptionSet.FullNameConventionCode;
    }
    interface UserSettings {
        /**
        * Returns the date formatting information for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
        */
        readonly DateFormattingInfo: DevKit.DateFormattingInfo;
        /**
        * Returns the ID of the default dashboard for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#defaultdashboardid
        */
        readonly DefaultDashboardId: DevKit.Guid;
        /**
        * Indicates whether guided help is enabled for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isguidedhelpenabled
        */
        readonly IsGuidedHelpEnabled: boolean;
        /**
        * Indicates whether high contrast is enabled for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#ishighcontrastenabled
        */
        readonly IsHighContrastEnabled: boolean;
        /**
        * Indicates whether the language for the current user is a right-to-left (RTL) language
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isrtl
        */
        readonly IsRTL: boolean;
        /**
        * Returns the language ID for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#languageid
        */
        readonly LanguageId: number;
        /**
         * Returns a collection of lookup objects containing the GUID and display name of each of the security role or teams that the user is associated with.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#roles
        */
        readonly Roles: DevKit.Collections<DevKit.EntityReference>;
        /**
        * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroleprivileges
        */
        readonly SecurityRolePrivileges: Array<DevKit.Guid>;
        /**
        * [Deprecated] Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with
        * @deprecated use {@link SecurityRolePrivileges}
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroles
        */
        readonly SecurityRoles: Array<DevKit.Guid>;
        /**
        * Returns a lookup object containing the ID, display name, and entity type of the transaction currency for the current user.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#transactioncurrencyid
        */
        readonly TransactionCurrency: DevKit.EntityReference;
        /**
        * [Deprecated] Returns the transaction currency ID for the current user.
        * @deprecated use {@link TransactionCurrency}
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#transactioncurrency
        */
        readonly TransactionCurrencyId: DevKit.Guid;
        /**
        * Returns the GUID of the SystemUser.Id value for the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#userid
        */
        readonly UserId: DevKit.Guid;
        /**
        * Returns the name of the current user
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#username
        */
        readonly UserName: string;
        /**
        * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC)
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#gettimezoneoffsetminutes-method
        */
        readonly TimeZoneOffsetMinutes: number;
    }
    abstract class IForm {
        /**
        * Adds a function to be called when the record is saved
        * @param callback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/addonsave
        */
        AddOnSave(callback: (executionContext: any) => void): void;
        /**
        * PostSave event occurs after the OnSave event is complete. This event is used to support or execute custom logic using web resources to perform after Save actions when the save event is successful or failed due to server errors
        * @param callback The function to add to the PostSave event. The execution context is automatically passed as the first parameter to this function
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/events/postsave
        */
        AddPostSave(callback: (executionContext: any) => void): void;
        /**
        * Adds a function to be called when form data is loaded.
        * @param callback The function to be executed when the form data loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/addonload
        */
        DataAddOnLoad(callback: (executionContext: any) => void): void;
        /**
        * Adds a function to be called on the form OnLoad event.
        * @param callback The function to be executed on the form OnLoad event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
        * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addonload
        */
        UiAddOnLoad(callback: (executionContext: any) => void): void;
        /**
         * Removes form level notifications
         * @param uniqueId A unique identifier for the message to be cleared that was set using the SetFormNotification method
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/clearformnotification
         */
        ClearFormNotification(uniqueId: string): void;
        /**
         * Closes the form
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/close
         * */
        Close(): void;
        /**
         * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
         * @param formId The form Id that you want navigate
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormId(formId: DevKit.Guid): void;
        /**
         * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
         * @param formLabel The form Label that you want navigate
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormLabel(formLabel: string): void;
        /**
         * Returns a value that indicates whether the form is currently visible.
         * @param formId The form Id that you want to check visible
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getvisible
         */
        FormIsVisible(formId: DevKit.Guid): boolean;
        /**
         * Sets a value that indicates whether the form is visible.
         * @param formId The form Id that you want to set visible
         * @param value Specify true to show the form; false to hide the form.
         */
        FormSetVisible(formId: DevKit.Guid, value: boolean): void;
        /**
         * Asynchronously refreshes and optionally saves all the data of the form without reloading the page
         * @param save true if the data should be saved after it is refreshed, otherwise false
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Causes the ribbon to re-evaluate data that controls what is displayed in it
         * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/refreshribbon
         */
        RefreshRibbon(refreshAll?: boolean): void;
        /**
         * Removes a function to be called when the record is saved.
         * @param callback The function to be removed for the OnSave event
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/removeonsave
         */
        RemoveOnSave(callback: () => void): void;
        /**
         * Removes a function to be called when form data is loaded.
         * @param callback The function to be removed when the form data loads.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/removeonload
         */
        DataRemoveOnLoad(callback: () => void): void;
        /**
         * Removes a function from the form OnLoad event.
         * @param callback The function to be removed from the form OnLoad event.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeonload
         */
        UiRemoveOnLoad(callback: () => void): void;
        /**
         * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed
         * @param saveOption An object for specifying options for saving the record
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOption?: DevKit.SaveOption, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
        /**
         * Displays form level notifications
         * @param message The text of the message
         * @param level The level of the message, which defines how the message will be displayed
         * @param uniqueId A unique identifier for the message that can be used later with ClearFormNotification to remove the notification
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
         */
        SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;
        /**
         * Sets the name of the entity to be displayed on the form.
         * @param arg Name of the entity to be displayed on the form.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformentityname
         * */
        SetFormEntityName(arg: string): void;
        /**
         *  The Attributes collections of form Account
         *  @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes
         * */
        readonly Attributes: DevKit.Collections<any>;
        /**
         * A control represents an HTML element present on the form. Some controls are bound to a specific attribute, whereas others may represent unbound controls such as an IFRAME, Web resource, or a sub grid that has been added to the form
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls
         */
        readonly Controls: DevKit.Collections<any>;
        /**
         * Returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getdataxml
         */
        readonly DataXml: string;
        /**
         * Returns a string representing the GUID value for the record
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getid
         */
        readonly EntityId: DevKit.Guid;
        /**
         * Gets a boolean value indicating whether any fields in the form have been modified
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getisdirty
         */
        readonly EntityIsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the entity data is valid
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/isvalid
         */
        readonly EntityIsValid: boolean;
        /**
         * Returns a string representing the logical name of the entity for the record
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityname
         */
        readonly EntityName: string;
        /**
         * Returns a lookup value that references the record
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityreference
         */
        readonly EntityReference: DevKit.EntityReference;
        /**
         * Returns the ID of the form
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getid
         */
        readonly FormId: DevKit.Guid;
        /**
         * Returns the label of the form
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getlabel
         */
        readonly FormLabel: string;
        /**
         * Gets the form type for the record
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
         */
        readonly FormType: OptionSet.FormType;
        /**
         * Gets a boolean value indicating whether the form data has been modified
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/getisdirty
         */
        readonly DataIsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/isvalid
         */
        readonly DataIsValid: boolean;
        /**
         * Gets a string for the value of the primary attribute of the entity
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
         */
        readonly PrimaryAttributeValue: string;
        /**
         * Gets the height of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportheight
         * */
        readonly ViewPortHeight: number;
        /**
         * Get the width of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportwidth
         * */
        readonly ViewPortWidth: number;
        /**
         * The execution context defines the event context in which your code executes.
         * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/execution-context
         * */
        readonly ExecutionContext: DevKit.ExecutionContext;
    }
    interface DialogError {
        /** Details about the error. When you specify this, the Download Log File button is available in the error message, and clicking it will let users download a text file with the content specified in this attribute */
        details?: string;
        /** The error code. If you just set errorCode, the message for the error code is automatically retrieved from the server and displayed in the error dialog.If you specify an invalid errorCode value, an error dialog with a default error message is displayed */
        errorCode?: number;
        /** The message to be displayed in the error dialog */
        message?: string;
    }
    interface EntityReference {
        /** Entity type of the record */
        entityType: string;
        /** GUID of the record */
        id: DevKit.Guid;
        /** Name of the record */
        name?: string;
    }
    interface Window {
        /** Height of the window to display the resultant page in pixels */
        height?: number;
        /** Width of the window to display the resultant page in pixels */
        width?: number;
    }
    interface DialogAlertOption {
        /** The confirm button label.If you do not specify the button label, OK is used as the button label */
        confirmButtonLabel?: string;
        /** The message to be displyed in the alert dialog */
        text: string;
    }
    interface FileOption {
        openMode: OptionSet.FileOption
    }
    interface DialogConfirmOption {
        /** The message to be displayed in the confirmation dialog */
        text: string;
        /** The cancel button label.If you do not specify the cancel button label, Cancel is used as the button label */
        cancelButtonLabel?: string;
        /** The confirm button label.If you do not specify the confirm button label, OK is used as the button label */
        confirmButtonLabel?: string;
        /** The subtitle to be displayed in the confirmation dialog */
        subtitle?: string;
        /** The title to be displayed in the confirmation dialog */
        title?: string;
    }
    interface FilePickOption {
        /** Image file types to select */
        accept: OptionSet.FileAccept;
        /** Indicates whether to allow selecting multiple files */
        allowMultipleFiles: boolean;
        /** Maximum size of the files(s) to be selected */
        maximumAllowedFileSize: number;
    }
    interface LookupOption {
        /** Indicates whether the lookup allows more than one item to be selected */
        allowMultiSelect?: boolean;
        /** The default entity type to use */
        defaultEntityType?: string;
        /** The default view to use */
        defaultViewId?: DevKit.Guid;
        /** Decides whether to display the most recently used(MRU) item. Available only for Unified Interface */
        disableMru?: boolean;
        /** The entity types to display */
        entityTypes: Array<string>;
        /** Used to filter the results */
        filters?: Array<LookupFilter>;
        /** Indicates the default search term for the lookup control. */
        searchText?: string;
        /** Indicates whether the lookup control should show the barcode scanner in mobile clients */
        showBarcodeScanner?: boolean;
        /** The views to be available in the view picker. Only system views are supported */
        viewIds?: Array<DevKit.Guid>;
    }
    interface PageInputEntityList {
        /** Specify "entitylist" */
        pageType: "entitylist";
        /** The logical name of the entity to load in the list control. */
        entityName: string;
        /** The ID of the view to load. If you don't specify it, navigates to the default main view for the entity. */
        viewId?: DevKit.Guid;
        /**  Type of view to load. Specify "savedquery" or "userquery". */
        viewType?: "savedquery" | "userquery";
    }
    interface PageInputHtmlWebResource {
        /** Specify "webresource" */
        pageType: "webresource";
        /** The name of the web resource to load. */
        webresourceName: string;
        /** The data to pass to the web resource. */
        data?: string;
    }
    interface PageInputEntityRecordRelationship {
        /** Name of the attribute used for relationship. */
        attributeName: string,
        /** Name of the relationship. */
        name: string,
        /** Name of the navigation property for this relationship. */
        navigationPropertyName: string,
        /** Relationship type. Specify one of the following values: 0:OneToMany | 1:ManyToMany */
        relationshipType: 0 | 1;
        /** Role type in relationship. Specify one of the following values: 1:Referencing | 2:AssociationEntity */
        roleType: 1 | 2;
    }
    interface PageInputEntityRecord {
        /** Specify "entityrecord" */
        pageType: "entityrecord",
        /** Logical name of the entity to display the form for. */
        entityName: string,
        /** ID of the entity record to display the form for. If you don't specify this value, the form will be opened in create mode. */
        entityId?: DevKit.Guid,
        /** Designates a record that will provide default values based on mapped attribute values. */
        createFromEntity?: DevKit.EntityReference,
        /** A dictionary object that passes extra parameters to the form. */
        data?: any,
        /** ID of the form instance to be displayed. */
        formId: DevKit.Guid,
        /** Indicates whether the form is navigated to from a different entity using cross-entity business process flow. */
        isCrossEntityNavigate?: boolean,
        /** Indicates whether there are any offline sync errors. */
        isOfflineSyncError?: boolean,
        /** ID of the business process to be displayed on the form. */
        processId?: DevKit.Guid,
        /** ID of the business process instance to be displayed on the form. */
        processInstanceId?: DevKit.Guid,
        /** Define a relationship object to display the related records on the form. */
        relationship?: DevKit.PageInputEntityRecordRelationship,
        /** ID of the selected stage in business process instance. */
        selectedStageId?: string
    }
    interface PageInputDashboard {
        /** Specify "dashboard" */
        pageType: "dashboard",
        /** The ID of the dashboard to load. If you don't specify the ID, navigates to the default dashboard. */
        dashboardId: string
    }
    interface NavigationOptions {
        /** Specify 1 to open the page inline; 2 to open the page in a dialog. Entity lists can only be opened inline; web resources can be opened either inline or in a dialog. */
        target: 1 | 2;
        /** The width of dialog. To specify the width in pixels, just type a numeric value. To specify the width in percentage, specify an object of type */
        width?: number | SizeValue;
        /** The height of dialog. To specify the width in pixels, just type a numeric value. To specify the height in percentage, specify an object of type */
        height?: number | SizeValue;
        /** Specify 1 to open the dialog in center; 2 to open the dialog on the side. Default is 1 (center). */
        position?: 1 | 2;
        /** The dialog title on top of the center or side dialog. */
        title?: string;
    }
    interface SizeValue {
        /** The numerical value */
        value: number;
        /** The unit of measurement. Specify "%" or "px". Default value is "px" */
        unit: "%" | "px";
    }
    interface LookupFilter {
        /** The FetchXML filter element to apply */
        filterXml: string;
        /** The entity type to which to apply this filter */
        entityLogicalName: string
    }
    interface FormOption {
        /** Indicates whether to display the command bar. If you do not specify this parameter, the command bar is displayed by default */
        cmdbar?: boolean;
        /** Designates a record that will provide default values based on mapped attribute values */
        createFromEntity?: EntityReference;
        /** ID of the entity record to display the form for */
        entityId?: DevKit.Guid;
        /** Logical name of the entity to display the form for */
        entityName?: string;
        /** ID of the form instance to be displayed */
        formId?: DevKit.Guid;
        /** Height of the form window to be displayed in pixels */
        height?: number;
        /** Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap */
        navbar?: OptionSet.FormNavBar;
        /** Indicates whether to display form in a new window */
        openInNewWindow?: boolean;
        /** Specify one of the following values for the window position of the form on the screen */
        windowPosition?: OptionSet.FormWindowPosition;
        /**  ID of the business process to be displayed on the form */
        processId?: DevKit.Guid;
        /** ID of the business process instance to be displayed on the form */
        processInstanceId?: DevKit.Guid;
        /** Define a relationship object to display the related records on the form */
        relationship?: FormRelationship;
        /** ID of the selected stage in business process instance */
        selectedStageId?: string;
        /** Indicates whether to open a quick create form. If you do not specify this, by default false is passed */
        useQuickCreateForm?: boolean;
        /**  Width of the form window to be displayed in pixels */
        width?: number;
    }
    interface FormRelationship {
        /** Name of the attribute used for relationship */
        attributeName: string;
        /** Name of the relationship */
        name: string;
        /** Name of the navigation property for this relationship */
        navigationPropertyName: string;
        /** Relationship type */
        relationshipType: OptionSet.FormRelationshipType;
        /** Role type in relationship.  */
        roleType: OptionSet.FormRelationshipRoleType;
    }
    interface ImageOption {
        /**  Indicates whether to edit the image before saving */
        allowEdit: boolean;
        /** Height of the image to capture */
        height: number;
        /** Indicates whether to capture image using the front camera of the device */
        preferFrontCamera: boolean;
        /** Quality of the image file in percentage */
        quality: number;
        /** Width of the image to capture */
        width: number;
    }
    interface PositionData {
        /** Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed */
        coords: any;
        /** Represents the time when the object was acquired and is represented as DOMTimeStamp */
        timestamp: any;
    }
    interface SaveOption {
        /** Specify a value indicating how the save event was initiated */
        saveMode?: OptionSet.SaveMode;
        /** Indicate whether to use the Book or Reschedule messages rather than the Create or Update messages. This option is only applicable when used with appointment, recurring appointment, or service activity records */
        useSchedulingEngine: boolean;
    }
    interface FieldNotification {
        /** A collection of objects */
        actions?: Array<FieldNotificationAction>;
        /** The message to display in the notification. In the current release, only the first message specified in this array will be displayed. The string that you specify here appears as bold text in the notification, and is typically used for title or subject of the notification. You should limit your message to 50 characters for optimal user experience */
        messages: Array<string>;
        /** Defines the type of notification */
        notificationLevel: OptionSet.FieldNotificationLevel;
        /** The ID to use to clear this notification when using the clearNotification method */
        uniqueId: string;
    }
    interface FieldNotificationAction {
        /** The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience */
        message?: string;
        /** Array of functions. The corresponding actions for the message */
        actions?: Array<any>;
    }
    interface GlobalNotification {
        action?: GlobalNotificationAction,
        /** Defines the level of notification. Valid values are: 1: Success | 2: Error | 3: Warning | 4: Information */
        level: 1 | 2 | 3 | 4,
        /** The message to display in the notification. */
        message: string,
        /** ndicates whether or not the user can close or dismiss the notification. If you don't specify this parameter, users can't close or dismiss the notification by default. */
        showCloseButton: boolean,
        /** Defines the type of notification. Currently, only a value of 2 is supported, which displays a message bar at the top of the app. */
        type: 2
    }
    interface GlobalNotificationAction {
        /** The label for the action in the message. */
        actionLabel?: string,
        /** Function reference. The function to execute when the action label is clicked. */
        eventHandler?: string
    }
    interface ViewSelector {
        /** Reference to the current view. */
        CurrentView: DevKit.EntityReference;
        /** Returns a boolean value to indicate whether the view selector is visible */
        readonly Visible: boolean;
    }
    interface ISidePane {
        /** The title of the pane. Used in pane header and for tooltip. */
        title?: string,
        /** The ID of the new pane. If the value is not passed, the ID value is auto-generated. */
        paneId?: string,
        /** Whether the pane header will show a close button or not. */
        canClose?: boolean,
        /** The path of the icon to show in the panel switcher control. */
        imageSrc?: string,
        /** The width of the pane in pixels. */
        width?: number;
        /** Hides the pane and tab. */
        hidden?: boolean,
        /** Prevents the pane from unmounting when it is hidden. */
        alwaysRender?: boolean,
        /** Prevents the badge from getting cleared when the pane becomes selected. */
        keepBadgeOnSelect?: boolean
    }
    interface SidePaneOptions extends ISidePane {
        /** Hides the header pane, including the title and close button. Default value is false. */
        hideHeader?: boolean,
        /** When set to false, the created pane is not selected and leaves the existing pane selected. It also does not expand the pane if collapsed. */
        isSelected?: boolean
    }
    interface SidePane extends ISidePane {
        /** Closes the side pane and removes it from the side bar. */
        close(): void,
        /** Specify whether the pane should be selected or expanded. */
        select(): void,
        /** Opens a page within the selected pane. This is similar to the navigateTo method. */
        navigate(pageInput: DevKit.PageInputEntityList | DevKit.PageInputHtmlWebResource | DevKit.PageInputEntityRecord | DevKit.PageInputDashboard, navigationOptions?: DevKit.NavigationOptions, successCallback?: (result: any) => void, errorCallback?: (error: DevKit.Error) => void): void,
        badge?: number
    }
}
/** DynamicsCrm.DevKit for namespace OptionSet */
declare namespace OptionSet {
    /**  */
    enum StructuralProperty {
        /** 0 */
        Unknown,
        /** 1 */
        PrimitiveType,
        /** 2 */
        ComplexType,
        /** 3 */
        EnumerationType,
        /** 4 */
        Collection,
        /** 5 */
        EntityType
    }
    /**  */
    enum OperationType {
        /** 0 */
        Action,
        /** 1 */
        Function,
        /** 2 */
        CRUD
    }
    /** Returns information about the kind of device the user is using. */
    enum FormFactor {
        /** 0 */
        Unknown,
        /** 1 */
        Desktop,
        /** 2 */
        Tablet,
        /** 3 */
        Phone,
    }
    /** Returns a value to indicate the state of the client. */
    enum ClientState {
        /** Online */
        Online,
        /** Offline */
        Offline,
    }
    /** Returns a value to indicate which client the script is executing in. */
    enum ClientName {
        /** Web */
        Web,
        /** Outlook */
        Outlook,
        /** Mobile */
        Mobile
    }
    /** Gets the form type for the record. */
    enum FormType {
        /** 0 */
        Undefined,
        /** 1 - Quick Create forms return 1 */
        Create,
        /** 2 */
        Update,
        /** 3 */
        ReadOnly,
        /** 4 */
        Disabled,
        /** 5 */
        BulkEdit,
    }
    /** Specify options for saving the record. If no parameter is included in the method, the record will simply be saved. This is the equivalent of using the Save command */
    enum SaveOption {
        /** saveandclose - This is the equivalent of using the Save and Close command */
        SaveAndClose,
        /** saveandnew - This is the equivalent of the using the Save and New command */
        SaveAndNew
    }
    /** Returns a value indicating how the save event was initiated by the user */
    enum SaveMode {
        /** 1 - All entities */
        Save,
        /** 2 - All entities */
        SaveAndClose,
        /** 5 - All entities */
        Deactivate,
        /** 6 - All entities */
        Reactivate,
        /** 7 - Email */
        Send,
        /** 15 - Lead */
        Disqualify,
        /** 16 - Lead */
        Qualify,
        /** 47 - User or Team */
        Assign,
        /** 58 - Activities */
        SaveAsCompleted,
        /** 59 - All entities */
        SaveAndNew,
        /** 70 - All entities */
        AutoSave
    }
    /** The level of the message, which defines how the message will be displayed */
    enum FormNotificationLevel {
        /** ERROR - Notification will use the system error icon */
        Error,
        /** WARNING - Notification will use the system warning icon */
        Warning,
        /** INFO - Notification will use the system info icon */
        Info
    }
    /** Display state of the tab */
    enum TabDisplayState {
        /** expanded */
        Expanded,
        /** collapsed */
        Collapsed
    }
    /** The contry type of tab */
    enum TabContentType {
        /** cardSections: The default tab behavior */
        CardSections,
        /** singleComponent: Maximizes the content of the first component in the tab */
        SingleComponent
    }
    /** */
    enum ProcessDisplayState {
        /** expanded */
        Expanded,
        /** collapsed */
        Collapsed,
        /** floating */
        Floating
    }
    /** Returns a string value that represents the type of attribute */
    enum FieldAttributeType {
        /** boolean */
        Boolean,
        /** datetime */
        DateTime,
        /** decimal */
        Decimal,
        /** double */
        Double,
        /** integer */
        Integer,
        /** lookup */
        Lookup,
        /** memo */
        Memo,
        /** money */
        Money,
        /** multiselectoptionset */
        MultiOptionSet,
        /** optionset */
        OptionSet,
        /** string */
        String
    }
    /** Returns a string value that represents formatting options for the attribute */
    enum FieldFormat {
        /** null */
        Null,
        /** date */
        Date,
        /** datetime */
        DateTime,
        /** duration */
        Duration,
        /** email */
        Email,
        /** language */
        Language,
        /** none */
        None,
        /** textarea */
        TextArea,
        /** text */
        Text,
        /** tickersymbol */
        TickerSymbol,
        /** phone */
        Phone,
        /** timezone */
        TimeZone,
        /** url */
        Url
    }
    /** Value indicating whether a value for the attribute is none or required or recommended */
    enum FieldRequiredLevel {
        /** none */
        None,
        /** required */
        Required,
        /** recommended */
        Recommended
    }
    /** Data from the attribute will be submitted when the record is saved */
    enum FieldSubmitMode {
        /** always - The data is always sent with a save */
        Always,
        /** never - The data is never sent with a save. When this is used, the field(s) in the form for this attribute cannot be edited */
        Never,
        /** dirty - Default behavior. The data is sent with the save when it has changed */
        Dirty
    }
    /** A value that categorizes controls */
    enum FieldControlType {
        /** standard - A standard control */
        Standard,
        /** iframe - An IFRAME control */
        Iframe,
        /** kbsearch - A knowledge base search control */
        KbSearch,
        /** lookup - A lookup control */
        Lookup,
        /** multiselectoptionset - A multi-select option set control */
        MultiSelectOptionset,
        /** notes - A notes control */
        Notes,
        /** optionset - An option set control */
        OptionSet,
        /** quickform - A quick view control */
        QuickForm,
        /** subgrid - A subgrid control */
        SubGrid,
        /** timercontrol - A timer control */
        TimerControl,
        /** timelinewall - A timeline control (for Unified Interface) */
        TimelineWall,
        /** webresource - A web resource control */
        WebResource
    }
    /** The type of notification */
    enum FieldNotificationLevel {
        /** ERROR */
        Error,
        /** RECOMMENDATION */
        Recommendation
    }
    /** The integer value of the business process flow category */
    enum ProcessCategory {
        /** 0 */
        Qualify,
        /** 1 */
        Develop,
        /** 2 */
        Propose,
        /** 3 */
        Close,
        /** 4 */
        Identify,
        /** 5 */
        Research,
        /** 6 */
        Resolve
    }
    /** The integer value status of the stage */
    enum ProcessStatus {
        /** active */
        Active,
        /** aborted */
        Aborted,
        /** finished */
        Finished
    }
    /** The progress of the action step */
    enum ProcessProgress {
        /** 0 */
        None,
        /** 1 */
        Processing,
        /** 2 */
        Completed,
        /** 3 */
        Failure,
        /** 4 */
        Invalid
    }
    /** The state of the timer control - This method is only supported for Unified Interface */
    enum TimerState {
        /** 1 */
        NotSet,
        /** 2 */
        InProgress,
        /** 3 */
        Warning,
        /** 4 */
        Violated,
        /** 5 */
        Success,
        /** 6 */
        Expired,
        /** 7 */
        Canceled,
        /** 8 */
        Paused
    }
    /** Information about the advanced configuration settings for the organization */
    enum AdvancedConfigSetting {
        /** MaxChildIncidentNumber */
        MaxChildIncidentNumber,
        /** MaxIncidentMergeNumber */
        MaxIncidentMergeNumber
    }
    /** Describing whether to open or save the file */
    enum FileOption {
        /** 1 */
        Open,
        /** 2 */
        Save
    }
    /** Describes the type of operation for the privilege */
    enum PrivilegeType {
        /** 0 - Specifies no privilege. */
        None,
        /** 1 - The create privilege. */
        Create,
        /** 2 - The read privilege. */
        Read,
        /** 3 - The write privilege. */
        Write,
        /** 4 -  The delete privilege. */
        Delete,
        /** 5 - The assign privilege. */
        Assign,
        /** 6 - The share privilege. */
        Share,
        /** 7 - The append privilege. */
        Append,
        /** 8 - The append to privilege. */
        AppendTo
    }
    /**  */
    enum FormNavBar {
        /** "on" - The navigation bar is displayed. This is the default behavior if the navbar parameter is not used. */
        On,
        /** "off" - The navigation bar is not displayed. People can navigate using other user interface elements or the back and forward buttons. */
        Off,
        /** "entity" - On an entity form, only the navigation options for related entities are available. After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record. */
        Entity
    }
    /**  */
    enum FormWindowPosition {
        /** 1 */
        Center,
        /** 2 */
        Side
    }
    /**  */
    enum FormRelationshipType {
        /** 0 */
        OneToMany,
        /** 1 */
        ManyToMany
    }
    /**  */
    enum FormRelationshipRoleType {
        /** 1 */
        Referencing,
        /** 2 */
        AssociationEntity
    }
    /**  */
    enum FileAccept {
        /** "audio" */
        Audio,
        /** "video" */
        Video,
        /** "image" */
        Image
    }
    /**  */
    enum GridType {
        /** 1 */
        HomePageGrid,
        /** 2 */
        Subgrid
    }
    /** Display state of the side pane */
    enum SidePaneState {
        /** expanded */
        Expanded,
        /** collapsed */
        Collapsed
    }
    /** the full name conventionCode setting of the current organization */
    enum FullNameConventionCode {
        LastName_Comma_FirstName,
        FirstName_LastName,
        LastName_Comma_FirstName_MiddleInitial,
        FirstName_MiddleInitial_LastName,
        LastName_Comma_FirstName_MiddleName,
        FirstName_MiddleName_LastName,
        LastName_FirstName,
        LastNameFirstName
    }
}