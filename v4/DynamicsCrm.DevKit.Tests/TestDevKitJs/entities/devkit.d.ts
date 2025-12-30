/**
 * DynamicsCrm.DevKit TypeScript Definitions
 *
 * @version 4.0
 * @link https://github.com/phuocle/Dynamics-Crm-DevKit
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference
 *
 */
declare namespace DevKit {
    /**
     * Represents a GUID (Globally Unique Identifier) value.
     * @example "00000000-0000-0000-0000-000000000000"
     */
    type Guid = `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Callback function type for successful operations.
     * @template T The type of result passed to the callback
     */
    type SuccessCallback<T> = (result: T) => void;
    /**
     * Callback function type for failed operations.
     */
    type ErrorCallback = (error: Error) => void;
    namespace Controls {
        /**
         * Base interface for all form controls providing common methods and properties
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface IControl {
            /**
             * Sets a function to be called when the OnChange event occurs
             * @param callback
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/addonchange
             */
            AddOnChange(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnOutputChange event.
             * @param callback
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonoutputchange
             */
            AddOnOutputChange(callback: (executionContext: any) => void): void;
            /**
             * Causes the OnChange event to occur on the attribute so that any script associated to that event can execute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/fireonchange
             */
            FireOnChange(): void;
            /**
             * Sets the focus on the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setfocus
             */
            Focus(): void;
            /**
             * Removes a function from the OnChange event handler for an attribute
             * @param callback Specifies the function to be removed from the OnChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/removeonchange
             */
            RemoveOnChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnOutputChange event.
             * @param callback Specifies the function to be removed from the RemoveOnOutputChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonoutputchange
             */
            RemoveOnOutputChange(callback: (executionContext: any) => void): void;
            /**
             * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification. When you specify an error type of notification, a red "X" icon appears next to the control. When you specify a recommendation type of notification, an "i" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message, and let you perform the configured action by clicking the Apply button or dismiss the message
             * @param notification The notification to add
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
             */
            AddNotification(notification: FieldNotification): void;
            /**
             * Remove a message already displayed for a control
             * @param uniqueId The ID to use to clear a specific message that was set using setNotification or addNotification. If the uniqueId parameter isn?t specified, the currently displayed notification will be cleared
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
             */
            ClearNotification(uniqueId: string): boolean;
            /**
             * Displays an error message for the control to indicate that data isn't valid. When this method is used,  a red "X" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message
             * @param message The message to display
             * @param uniqueId The ID to use to clear this message when using the clearNotification method
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
             */
            SetNotification(message: string, uniqueId?: string): boolean;
            /**
             * Sets a value for an attribute to determine whether it is valid or invalid with a message.
             * @param valid Specify false to set the attribute value to invalid and true to set the value to valid
             * @param message The message to display
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setisvalid
             */
            SetIsValid(valid: boolean, message: string): void
            /**
             * Returns the attribute that the control is bound to. Controls that aren't bound to an attribute (subgrid, web resource, and IFRAME) don't have this method. An error will be thrown if you attempt to use this method on one of these controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getattribute
             * */
            readonly Attribute: any
            /**
             * Returns a string value that represents the type of control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: OptionSet.FieldControlType;
            /**
             * Returns a string value that represents the type of attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
             */
            readonly AttributeType: OptionSet.FieldAttributeType;
            /**
             * Returns a string value that represents formatting options for the attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getformat
             */
            readonly Format: OptionSet.FieldFormat;
            /**
             * Returns a Boolean value indicating if there are unsaved changes to the attribute value
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getisdirty
             */
            readonly IsDirty: boolean;
            /**
             * Returns a string representing the logical name of the attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getname
             */
            readonly AttributeName: string;
            /**
             * Returns the name assigned to the control.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;
            /**
             * Returns the formContext.data.entity object that is the parent to all attributes
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getparent
             */
            readonly AttributeParent: any;
            /**
             * Returns a boolean value to indicate whether the value of an attribute is valid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/isvalid
             */
            readonly IsValid: boolean;
            /**
             * Returns a reference to the section object that contains the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getparent
             */
            readonly ControlParent: any;
            /**
             * Returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for a attribute. This function is intended for use when Field Level Security modifies a user?s privileges for a particular attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getuserprivilege
             */
            readonly UserPrivilege: FieldUserPrivilege;
            /**
             * Returns an array of objects, where each object has a name and value property. The array represents the current output parameter values for a custom control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getoutputs
             */
            readonly Outputs: Array<{ name: string; value: any }>;
            /**
             * Get/Set a value indicating whether a value for the attribute is required or recommended
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
             */
            RequiredLevel: OptionSet.FieldRequiredLevel;
            /**
             * Get/Set a indicating when data from the attribute will be submitted when the record is saved
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setsubmitmode
             */
            SubmitMode: OptionSet.FieldSubmitMode;
            /**
             * Get/Set whether the control is disabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;
            /**
             * Get/Set the label for the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the control is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;
        }
        /**
         * Base interface for selection-based controls (OptionSet, Boolean, MultiOptionSet)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface IControlSelectBase extends IControl {
            /**
             * Returns a value that represents the value set for a Boolean, OptionSet or MultiOptionSet attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number;
        }
        /**
         * Interface for business process flow controls and events
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process
         */
        interface IProcess {
            /**
             * Adds a function as an event handler for the OnPreProcessStatusChange event so that it will be called before the business process flow status changes
             * @param callback The function to be executed when the business process flow status changes. The function will be added to the start of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonpreprocessstatuschange
             */
            AddOnPreProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnPreProcessStatusChange event
             * @param callback The function to be removed from the OnPreProcessStatusChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonpreprocessstatuschange
             */
            RemoveOnPreProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Adds a function as an event handler for the OnPreStageChange event so that it will be called before the business process flow stage changes
             * @param callback The function that runs before the business process flow stage changes. The function will be added to the start of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonprestagechange
             */
            AddOnPreStageChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnPreStageChange event
             * @param callback The function to be removed from the OnPreStageChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonprestagechange
             */
            RemoveOnPreStageChange(callback: (executionContext: any) => void): void;
            /**
             * Adds a function as an event handler for the OnProcessStatusChange event so that it will be called when the business process flow status changes
             * @param callback The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
             */
            AddOnProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnProcessStatusChange event
             * @param callback The function to be removed from the OnProcessStatusChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
             */
            RemoveOnProcessStatusChange(callback: (executionContext: any) => void): void;
            /**
             * Adds a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes
             * @param callback The function to be executed when the business process flow stage changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
             */
            AddOnStageChange(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnStageChange event
             * @param callback The function to be removed from the OnStageChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
             */
            RemoveOnStageChange(callback: (executionContext: any) => void): void;
            /**
             * Adds a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected
             * @param callback The function to be executed when the business process flow stage is selected. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
             */
            AddOnStageSelected(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnStageSelected event
             * @param callback The function to be removed from the OnStageSelected event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
             */
            RemoveOnStageSelected(callback: (executionContext: any) => void): void;
            /**
             * Asynchronously retrieves the business process flows enabled for an entity that the current user can switch to
             * @param callback The callback function must accept a parameter that contains an object with dictionary properties where the name of the property is the Id of the business process flow and the value of the property is the name of the business process flow. The enabled processes are filtered according to the user?s privileges. The list of enabled processes is the same ones a user can see in the UI if they want to change the process manually
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getenabledprocesses
             */
            EnabledProcesses(callback: (processes: Array<ProcessEnabled>) => void): void;
            /**
             * Returns all the process instances for the entity record that the calling user has access to.
             * @param callback The callback function is passed an object with the following attributes and their corresponding values as the key:value pair. All returned values are of string type except for CreatedOnDate
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            ProcessInstances(callback: (processes: Array<ProcessInstance>) => void): void;
            /**
             * Sets a completed stage as the active stage
             * @param stageId The ID of the completed stage for the entity to make the active stage
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/setactivestage
             */
            SetActiveStage(stageId: string, callback: (result: "success" | "invalid" | "unreachable" | "dirtyForm" | "preventDefault") => void): void;
            /**
             * Progresses to the next stage. You can also move to a next stage in a different entity
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/navigation/movenext
             */
            MoveNext(callback: (result: "success" | "crossEntity" | "end" | "invalid" | "dirtyForm") => void): void;
            /**
             * Moves to the previous stage. You can also move to a previous stage in a different entity
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/navigation/moveprevious
             */
            MovePrevious(callback: (result: "success" | "crossEntity" | "beginning" | "invalid" | "dirtyForm") => void): void;
            /**
             * Sets a process instance as the active instance
             * @param processInstanceId The Id of the process instance to set as the active instance
             * @param callback A function to call when the operation is complete
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/setactiveprocessinstance
             */
            SetActiveProcessInstance(processInstanceId: Guid, callback: (result: "success" | "invalid") => void): void;
            /**
             * Sets a Process as the active process. If there is an active instance of the process, the entity record is loaded with the process instance ID. If there is no active instance of the process, a new process instance is created and the entity record is loaded with the process instance ID. If there are multiple instances of the current process, the record is loaded with the first instance of the active process as per the defaulting logic, that is the most recently used process instance per user
             * @param processId The Id of the process to set as the active process
             * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
             */
            SetActiveProcess(processId: Guid, callback: (result: "success" | "invalid") => void): void;
            /**
             * Reflows the UI of the business process control
             * @param updateUi Specify true to update the UI of the process control; false otherwise
             * @param parentStage Specify the ID of the parent stage in the GUID format
             * @param nextStage Specify the ID of the next stage in the GUID format
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/reflow
             */
            Reflow(updateUi: boolean, parentStage: string, nextStage: string): void;
            /**
             * Returns a Process object representing the active process
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
             */
            readonly ActiveProcess: ProcessProcess;
            /**
             * Gets the currently selected stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getselectedstage
             */
            readonly SelectedStage: ProcessStage;
            /**
             * Returns representing the active stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/getactivestage
             */
            readonly ActiveStage: ProcessStage;
            /**
             * Returns the unique identifier of the process instance. Value represents the string representation of a GUID value
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstanceid
             */
            readonly InstanceId: Guid;
            /**
             * Returns the name of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstancename
             */
            readonly InstanceName: string;
            /**
             * Gets a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control. The active path represents stages currently rendered in the process control based on the branching rules and current data in the record
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activepath/getactivepath
             */
            readonly ActivePath: Collections<ProcessStage>;
            /**
             * Get/Set the display state for the business process control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getdisplaystate
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/setdisplaystate
             */
            DisplayState: OptionSet.ProcessDisplayState;
            /**
             * Get/Set a value indicating whether the business process control is visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/setvisible
             */
            Visible: boolean;
            /**
             * Get/Set the current status of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getstatus
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/setstatus
             */
            Status: OptionSet.ProcessStatus;
        }
        /**
         * Represents a stage in a business process flow
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage
         */
        interface ProcessStage {
            /**
             * Returns the status of the stage
             * @param callback
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getnavigationbehavior
             */
            AllowCreateNew(callback: (executionContext: any) => boolean): void;
            /**
             * Returns the integer value of the business process flow category
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formContext-data-process/stage/getCategory
             */
            readonly Category: OptionSet.ProcessCategory;
            /**
             * Returns the logical name of the entity associated with the stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getentityname
             */
            readonly EntityName: String;
            /**
             * Returns the unique identifier of the stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getid
             */
            readonly Id: string;
            /**
             * Returns the name of the stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getname
             */
            readonly Name: string;
            /**
             * Returns the status of the stage
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getstatus
             */
            readonly Status: OptionSet.ProcessStageStatus;
            /**
             * Returns a navigation behavior object for a stage that can be used to define whether the Create button is available for users to create other entity record in a cross-entity business process flow navigation scenario.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getsteps
             */
            Steps: Array<ProcessStep>;
        }
        /**
 * Represents a step within a business process flow stage
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step
 */
        interface ProcessStep {
            /**
             * Updates the progress of the action step. This method is supported only for the action steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
             * @param stepProgress Specify the step progress
             * @param message An optional message that is set as the Alt text on the icon for the step
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
             */
            SetProgress(stepProgress: OptionSet.ProcessProgress, message?: string): void;
            /**
             * Returns the logical name of the attribute associated to the step
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getattribute
             */
            readonly Attribute: string;
            /**
             * Returns the name of the step
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getname
             */
            readonly Name: string;
            /**
             * Returns the progress of the action step. This method is supported only for the action steps; not for the data steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getprogress
             */
            readonly Progress: OptionSet.ProcessProgress;
            /**
             * Returns a boolean value indicating whether the step is required in the business process flow
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/isrequired
             * */
            readonly Required: boolean;
        }
        /**
         * Represents a business process flow instance for a record
         * @remarks All property values except CreatedOnDate are of String type
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
         */
        interface ProcessInstance extends ProcessEnabled {
            /**
             * The date and time when the process instance was created (String format)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly CreatedOn: string;
            /**
             * The date and time when the process instance was created (Date type)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly CreatedOnDate: Date;
            /**
             * The unique identifier of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly InstanceId: Guid;
            /**
             * The name of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly InstanceName: string;
            /**
             * The status of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly Status: OptionSet.ProcessStatus;
        }
        /**
         * Represents the enabled process information for a record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
         */
        interface ProcessEnabled {
            /**
             * The unique identifier of the process definition
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly ProcessId: Guid;
            /**
             * The name of the process definition
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            readonly ProcessName: string;
        }
        /**
         * Represents the current active business process flow definition
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process
         */
        interface ProcessProcess {
            /**
             * Returns the unique identifier of the process
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getid
             */
            readonly Id: Guid;
            /**
             * Returns the name of the process
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getname
             */
            readonly Name: string;
            /**
             * Returns a boolean value indicating whether the process is rendered
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/isrendered
             */
            readonly IsRendered: boolean;
            /**
             * Returns a collection of stages in the process
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/process/getstages
             */
            Stages: Collections<ProcessStage>;
        }
        /**
         * Interface for Dialog forms (quick create dialogs, etc.)
         * Dialog forms contain fields and a Close method
         */
        interface IDialog {
            /** Closes the dialog */
            Close(): void;
        }
        /**
         * Dialog namespace for Dialog form field types
         * These types are specific to quick create dialogs and other dialog forms
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        namespace Dialog {
            /**
             * Base interface for all dialog controls with common visibility and state properties
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControlBase {
                /**
                 * Gets or sets whether the control is disabled
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
                 */
                Disabled: boolean;
                /**
                 * Gets or sets the label for the control
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getlabel
                 */
                Label: string;
                /**
                 * Gets or sets whether the control is visible
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
                 */
                Visible: boolean;
            }
            /**
             * Interface for standard dialog controls with change events and validation
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControl extends IControlBase {
                /**
                 * Adds a function to be called when the OnChange event occurs
                 * @param callback The function to execute on change
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/addonchange
                 */
                AddOnChange(callback: (executionContext: any) => void): void;
                /**
                 * Removes a function from the OnChange event
                 * @param callback The function to remove
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/removeonchange
                 */
                RemoveOnChange(callback: (executionContext: any) => void): void;
                /**
                 * Causes the OnChange event to occur
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/fireonchange
                 */
                FireOnChange(): void;
                /**
                 * Displays an error message for the control
                 * @param message The message to display
                 * @param uniqueId Optional unique identifier for the notification
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
                 */
                SetNotification(message: string, uniqueId?: string): boolean;
                /**
                 * Removes a notification from the control
                 * @param uniqueId The ID of the notification to clear
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
                 */
                ClearNotification(uniqueId: string): boolean;
                /**
                 * Gets or sets the required level for the attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
                 */
                RequiredLevel: OptionSet.FieldRequiredLevel;
                /**
                 * Returns whether there are unsaved changes to the attribute value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getisdirty
                 */
                readonly IsDirty: boolean;
                /**
                 * Returns whether the attribute value is valid
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/isvalid
                 */
                readonly IsValid: boolean;
            }
            /**
             * Interface for text-based dialog controls (String, Memo)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface IControlText extends IControl {
                /**
                 * Returns the maximum length of the string attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
                 */
                readonly MaxLength: number;
                /**
                 * Gets or sets the string value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: string;
            }
            /**
             * Interface for numeric dialog controls (Integer, Decimal, Double, Money)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface IControlNumber extends IControl {
                /**
                 * Returns the maximum allowed value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmax
                 */
                readonly Max: number;
                /**
                 * Returns the minimum allowed value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmin
                 */
                readonly Min: number;
                /**
                 * Gets or sets the precision (decimal places)
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
                 */
                Precision: number;
                /**
                 * Gets or sets the numeric value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: number;
            }
            /**
             * Base interface for selection-based dialog controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface IControlSelectBase extends IControl {
                /**
                 * Returns the initial value when the form was opened
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
                 */
                readonly InitialValue: number;
            }
            /**
             * Interface for option set dialog controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControlSelect extends IControlSelectBase {
                /**
                 * Adds an option to the control
                 * @param text The label for the option
                 * @param value The value for the option
                 * @param index Optional index position
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addoption
                 */
                AddOption(text: string, value: number, index?: number): void;
                /**
                 * Clears all options from the control
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearoptions
                 */
                ClearOptions(): void;
                /**
                 * Removes an option from the control
                 * @param value The value of the option to remove
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeoption
                 */
                RemoveOption(value: number): void;
                /**
                 * Returns all valid options for the attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoptions
                 */
                readonly Options: Array<TextValueNumber>;
                /**
                 * Returns all options available in the control
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getoptions
                 */
                readonly ControlOptions: Array<TextValueNumber>;
                /**
                 * Returns the text of the currently selected option
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/gettext
                 */
                readonly Text: string;
            }
            /**
             * Interface for single-line text controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface String extends IControlText {
            }
            /**
             * Interface for multi-line text (memo) controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Memo extends IControlText {
            }
            /**
             * Interface for whole number controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Integer extends IControlNumber {
            }
            /**
             * Interface for decimal number controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Decimal extends IControlNumber {
            }
            /**
             * Interface for floating point number controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Double extends IControlNumber {
            }
            /**
             * Interface for currency controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Money extends IControlNumber {
            }
            /**
             * Interface for button controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Button extends IControlBase {
            }
            /**
             * Interface for label controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Label extends IControlBase {
            }
            /**
             * Interface for boolean (two option) controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface Boolean extends IControlSelectBase {
                /**
                 * Gets or sets the boolean value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: boolean;
            }
            /**
             * Interface for single-select option set controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface OptionSet extends IControlSelect {
                /**
                 * Returns the currently selected option
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
                 */
                readonly SelectedOption: TextValueNumber;
                /**
                 * Gets or sets the selected option value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: number;
            }
            /**
             * Interface for multi-select option set controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
             */
            interface MultiOptionSet extends IControlSelect {
                /**
                 * Gets or sets the array of selected option values
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: Array<number>;
            }
            /**
             * Interface for lookup controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Lookup extends IControl {
                /**
                 * Adds a custom filter to the lookup results
                 * @param filter The fetchXml filter element
                 * @param entityLogicaName Optional entity type to apply the filter to
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomfilter
                 */
                AddCustomFilter(filter: string, entityLogicaName?: string): void;
                /**
                 * Adds a custom view to the lookup dialog
                 * @param viewId The GUID for the view
                 * @param entityName The entity name
                 * @param viewDisplayName The display name for the view
                 * @param fetchXml The fetchXml query
                 * @param layoutXml The layout XML
                 * @param isDefault Whether this is the default view
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomview
                 */
                AddCustomView(viewId: Guid, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
                /**
                 * Adds a function to be called before the lookup search
                 * @param callback The function to call before search
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addpresearch
                 */
                AddPreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Removes a function from the pre-search event
                 * @param callback The function to remove
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removepresearch
                 */
                RemovePreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Adds a function to be called when a lookup tag is clicked
                 * @param callback The function to call
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonlookuptagclick
                 */
                AddLookupTagClick(callback: (executionContext: any) => void): void;
                /**
                 * Removes a function from the lookup tag click event
                 * @param callback The function to remove
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonlookuptagclick
                 */
                RemoveLookupTagClick(callback: (executionContext: any) => void): void;
                /**
                 * Gets or sets the lookup value as an array of entity references
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: Array<EntityReference>;
                /**
                 * Gets or sets the default view ID
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdefaultview
                 */
                DefaultView: Guid;
                /**
                 * Gets or sets the allowed entity types
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getentitytypes
                 */
                EntityTypes: Array<string>;
            }
            /**
             * Interface for date and time controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface DateTime extends IControl {
                /**
                 * Gets or sets whether the time portion is shown
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getshowtime
                 */
                ShowTime: boolean;
                /**
                 * Gets or sets the date/time value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: any;
            }
            /**
             * Interface for date-only controls in dialogs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Date extends IControl {
                /**
                 * Gets or sets the date value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 */
                Value: any;
            }
        }
        /**
         * Represents a tab on a form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs
         */
        interface ITab {
            /**
             * Adds a function to be called when the TabStateChange event occurs
             * @param callback The function to be executed on the TabStateChange event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/addtabstatechange
             */
            AddTabStateChange(callback: (executionContext: any) => void): void;
            /**
             * Sets the focus on the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setfocus
             * */
            Focus(): void;
            /**
             * Removes a function to be called when the TabStateChange event occurs
             * @param callback The function to be removed from the TabStateChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/removetabstatechange
             */
            RemoveTabStateChange(callback: (executionContext: any) => void): void;
            /**
             * Get the name of the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getname
             */
            readonly Name: string;
            /**
             * Get the formContext.ui object containing the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getparent
             */
            readonly Parent: any;
            /**
             * Get/Set display state of the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getdisplaystate
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setdisplaystate
             */
            DisplayState: OptionSet.TabDisplayState;
            /**
             * Get/Set the label for the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the tab is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setvisible
             */
            Visible: boolean;
            /**
             * Get/Set content type of the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getcontenttype
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setcontenttype
             */
            ContentType: OptionSet.TabContentType;
        }
        /**
         * Provides additional methods for option set controls beyond the base selection interface
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface IControlSelect extends IControlSelectBase {
            /**
             * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
             * @param label The label of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(label: string): TextValueNumber;
            /**
             * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
             * @param value The enumeration value of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(value: number): TextValueNumber;
            /**
             * Adds an option to a control
             * @param text The label for the option
             * @param value The value for the option
             * @param index The index position to place the new option in. If not provided, the option will be added to the end
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addoption
             */
            AddOption(text: string, value: number, index?: number): void;
            /**
             * Clears all options from a control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearoptions
             */
            ClearOptions(): void;
            /**
             * Removes an option from a control
             * @param value The value of the option you want to remove
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeoption
             */
            RemoveOption(value: number): void;
            /**
             * Returns an array of option objects representing valid options for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoptions
             */
            readonly Options: Array<TextValueNumber>;
            /**
             * Returns an array of option objects representing valid options available for a control, including a blank option and excluding any options that have been removed from the control using removeOption
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getoptions
            */
            readonly ControlOptions: Array<TextValueNumber>;
            /**
             * Returns a string value of the text for the currently selected option for an optionset or multiselectoptionset attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/gettext
             */
            readonly Text: string;
        }
        /**
         * Interface for text-based controls (String, Memo)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface IControlText extends IControl {
            /**
             * Returns a number indicating the maximum length of a string or memo attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
             */
            readonly MaxLength: number;
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string;
        }
        /**
         * Interface for numeric controls (Integer, Decimal, Double, Money)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface IControlNumber extends IControl {
            /**
             * Returns a number indicating the maximum allowed value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmax
             */
            readonly Max: number;
            /**
             * Returns a number indicating the minimum allowed value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmin
             */
            readonly Min: number;
            /**
             * Get/Set the number of digits allowed to the right of the decimal point
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setprecision
             */
            Precision: number;
            /**
             * Get/Set the data value for an attribute.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number;
        }
        /**
         * Interface for quick view form controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms
         */
        interface IQuickView {
            /**
             * Gets the controls on a form or control on form by passing an argument
             * @param arg You can access a single control in the constituent controls collection by passing an argument as either the name or the index value of the constituent control in a quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
             */
            Controls(arg: string | number): any;
            /**
             * Gets all controls in the quick view form as a collection
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
             */
            Controls(): Collections<Controls.IControl>;
            /**
             * Returns whether the data binding for the constituent controls in a quick view control is complete
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/isloaded
             */
            IsLoaded(): boolean;
            /**
             * Refreshes the data displayed in a quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/refresh
             */
            Refresh(): void;
            /**
             * Sets focus on the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setfocus
             */
            Focus(): void;
            /**
             * Returns a string value that categorizes quick view controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrolhttps://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontroltype
             */
            readonly ControlType: OptionSet.FieldControlType;
            /**
             * Returns the name assigned to the quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getname
             */
            readonly ControlName: string;
            /**
             * Returns a reference to the section object that contains the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getparent
             */
            readonly ControlParent: any;
            /**
             * Get/Set a boolean value indicating whether the control is disabled. Or sets the state of the control to either enabled or disabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setdisabled
             */
            Disabled: boolean;
            /**
             * Get/Set the label for the quick view control. Or sets the label for the quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the quick view control is currently visible. Or displays or hides a control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible
             */
            Visible: boolean;
        }
        /**
         * Provides methods to interact with the form header section
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection
         */
        interface IHeader {
            /**
             * Get/Set the visibility of header section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/getbodyvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/setbodyvisible
             */
            BodyVisible: boolean;
            /**
             * Get/Set the command bar visibility
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/getcommandbarvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/setcommandbarvisible
             */
            CommandBarVisible: boolean;
            /**
             * Get/Set the tab navigator visibility
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/gettabnavigatorvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection/settabnavigatorvisible
             */
            TabNavigatorVisible: boolean;
        }
        /**
         * Interface for whole number (integer) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Integer extends IControlNumber {
        }
        /**
         * Interface for decimal number controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Decimal extends IControlNumber {
        }
        /**
         * Interface for floating-point number controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Double extends IControlNumber {
        }
        /**
         * Interface for currency (money) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Money extends IControlNumber {
        }
        /**
         * Interface for single-line text controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface String extends IControlText {
        }
        /**
         * Interface for multi-line text (memo) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Memo extends IControlText {
        }
        /**
         * Interface for date and time controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface DateTime extends IControl {
            /**
             * Get/Set whether a date control shows the time portion of the date
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getshowtime
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setshowtime
             */
            ShowTime: boolean;
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: any;
        }
        /**
         * Interface for date-only controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Date extends IControl {
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: any;
        }
        /**
         * Interface for lookup controls that select related records
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Lookup extends IControl {
            /**
             * Adds filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an ?AND? condition. This method can only be used in a function in an event handler for the Lookup Control PreSearch Event
             * @param filter The fetchXml filter element to apply
             * @param entityLogicaName If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomfilter
             */
            AddCustomFilter(filter: string, entityLogicaName?: string): void;
            /**
             * Adds a new view for the lookup dialog box. This method doesn?t work with Owner lookups. Owner lookups are used to assign user-owned records
             * @param viewId The string representation of a GUID for a view
             * @param entityName The name of the entity
             * @param viewDisplayName The name of the view
             * @param fetchXml The fetchXml query for the view
             * @param layoutXml The XML that defines the layout of the view
             * @param isDefault Indicates whether the view should be the default view
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomview
             */
            AddCustomView(viewId: Guid, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
            /**
             * Applies changes to lookups based on values current just as the user is about to view results for the lookup
             * @param callback The function that will be run just before the search to provide results for a lookup occurs. You can use this function to call one of the other lookup control functions and improve the results to be displayed in the lookup. The execution context is automatically passed as the first parameter to this function
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addpresearch
             */
            AddPreSearch(callback: (executionContext: any) => void): void;
            /**
             * Removes event handler functions that have previously been set for the PreSearch event
             * @param callback The function to remove. The execution context is automatically passed as the first parameter to this function
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removepresearch
             */
            RemovePreSearch(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnLookupTagClick event
             * @param callback The function to add to the OnLookupTagClick event. The execution context is automatically passed as the first parameter to this function along with eventArgs that contain the tag value. More information: OnLookupTagClick event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonlookuptagclick
            */
            AddLookupTagClick(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnLookupTagClick event
             * @param callback The function to be removed from the OnLookupTagClick event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonlookuptagclick
             */
            RemoveLookupTagClick(callback: (executionContext: any) => void): void;
            /**
             * Returns a Boolean value indicating whether the lookup represents a partylist lookup. Partylist lookups allow for multiple records to be set, such as the To: field for an email entity record
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getispartylist
             */
            readonly IsPartyList: boolean;
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Array<EntityReference>;
            /**
             * Get/Set the ID value of the default lookup dialog view
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdefaultview
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdefaultview
             */
            DefaultView: Guid;
            /**
             * Get/Set the types of entities allowed in the lookup control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getentitytypes
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setentitytypes
             */
            EntityTypes: Array<string>;
        }
        /**
         * Interface for knowledge base search controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Knowledge extends IControl {
            /**
             * Adds an event handler to the PostSearch event
             * @param callback The function to add to the PostSearch event. The execution context is automatically passed as the first parameter to this function
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonpostsearch
             */
            AddPostSearch(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnResultOpened event
             * @param callback The function to add to the OnResultOpened event. The execution context is automatically passed as the first parameter to this function
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonresultopened
             */
            AddResultOpened(callback: (executionContext: any) => void): void;
            /**
             * Adds an event handler to the OnSelection event
             * @param callback The function to add to the OnSelection event. The execution context is automatically passed as the first parameter to this function
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonselection
             */
            AddSelection(callback: (executionContext: any) => void): void;
            /**
             * Opens a search result in the search control by specifying the result number
             * @param resultNumber Numerical value specifying the result number to be opened. Result number starts from 1
             * @param mode Specify "Inline" or "Popout". If you do not specify a value for the argument, the default ("Inline") option is used. The "Inline" mode opens the result inline either in the reading pane of the control or in a reference panel tab in case of reference panel. The "Popout" mode opens the result in a pop-out window
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/opensearchresult
             */
            OpenSearchResult(resultNumber: number, mode: string): boolean;
            /**
             * Removes an event handler from the PostSearch event
             * @param callback The function to remove from the PostSearch event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonpostsearch
             */
            RemovePostSearch(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnResultOpened event
             * @param callback The function to remove from the OnResultOpened event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonresultopened
             */
            RemoveResultOpened(callback: (executionContext: any) => void): void;
            /**
             * Removes an event handler from the OnSelection even
             * @param callback The function to remove from the OnSelection event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonselection
             */
            RemoveSelection(callback: (executionContext: any) => void): void;
            /**
             * Gets the count of results found in the search control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/gettotalresultcount
             */
            readonly TotalResultCount: number;
            /**
             * Use this method to get the currently selected result of the search control. The currently selected result also represents the result that is currently open
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getselectedresults
             */
            readonly SelectedResults: any
            /**
             * Get/Set the text used as the search criteria for the knowledge base management control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsearchquery
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsearchquery
             */
            SearchQuery: string;
        }
        /**
         * Interface for web resource controls embedded in forms
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface WebResource extends IControl {
            /**
            * Returns the content window that represents an IFRAME or web resource
            * @param successCallback A function to call when operation is executed successfully. A content window instance representing the IFRAME or web resource is passed to the function
            * @param errorCallback A function to call when the operation fails
            * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
            ContentWindow(successCallback: (contentWindow: any) => void, errorCallback?: (error: Error) => void): void;
            /**
            * Returns the content window that represents an IFRAME or web resource and returns a promise
            * @returns Promise that resolves with the content window
            * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
            ContentWindow(): Promise<any>;
            /**
              * Returns the object in the form that represents an IFRAME or web resource
              * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
              */
            readonly Object: any;
            /**
             * Get/Set the current URL being displayed in an IFRAME or web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }
        /**
         * Interface for IFrame controls that embed external content
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface IFrame extends IControl {
            /**
            * Returns the content window that represents an IFRAME or web resource.
            * @param successCallback A function to call when operation is executed successfully. A content window instance representing the IFRAME or web resource is passed to the function
            * @param errorCallback A function to call when the operation fails
            * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
            ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: Error) => void): void;
            /**
            * Returns the content window that represents an IFRAME or web resource and returns a promise
            * @returns Promise that resolves with the content window
            * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
            */
            ContentWindow(): Promise<any>;
            /**
             * Returns the default URL that an IFRAME control is configured to display
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getinitialurl
             **/
            readonly InitialUrl: string;
            /**
            * Returns the object in the form that represents an IFRAME or web resource
            * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
            */
            readonly Object: any;
            /**
             * Get/Set the current URL being displayed in an IFRAME or web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }
        /**
         * Interface for timer controls used in SLA tracking
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Timer extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
            /**
             * Returns the state of the timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getstate
             */
            readonly State: number;
        }
        /**
         * Interface for timeline wall controls showing activities
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface TimelineWall extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
        }
        /**
         * Interface for two-option (Yes/No) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Boolean extends IControlSelectBase {
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: boolean;
        }
        /**
         * Interface for single-select option set controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface OptionSet extends IControlSelect {
            /**
             * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: TextValueNumber;
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number;
        }
        /**
         * Interface for multi-select option set controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface MultiOptionSet extends IControlSelect {
            /**
             * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: Array<TextValueNumber>
            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Array<number>;
        }
        /**
         * Interface for navigation items on a form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation
         */
        interface NavigationItem {
            /**
             * Sets the focus on the item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setfocus
             */
            Focus(): void;
            /**
             * Returns the name of the item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getid
             */
            readonly Id: string;
            /**
             * Get/Set the label for the item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the item is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setvisible
             */
            Visible: boolean;
        }
        /**
         * Interface for sections within a tab
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections
         */
        interface Section {
            /**
             * Get the name of the section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getname
             */
            readonly Name: string;
            /**
             * Get the tab containing the section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getparent
             */
            readonly Parent: any;
            /**
             * Get/Set the label for the section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/setlabel
             */
            Label: string;
            /**
             * Get/Set a value that indicates whether the section is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections/setvisible
             */
            Visible: boolean;
            /**
             * A collection of one or more controls associated with the section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections
             */
            readonly Controls: Collections<IControl>;
        }
        /**
         * Interface for subgrid controls on forms
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids
         */
        interface Grid {
            /**
             * [Read-only and editable grids] Adds event handlers to the Subgrid OnLoad event event
             * @param callback The function to be executed when the subgrid loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See execution context for more information.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/addonload
             */
            AddOnLoad(callback: (executionContext: any) => void): void;
            /**
             * [Read-only and editable grids] Gets the URL of the current grid control
             * @param client Indicates the client type. You can specify one of the following values: 0: Browser | 1: MobileApplication
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/geturl
             */
            Url(client: 0 | 1): string;
            /**
             * [Read-only and editable grids] Refreshes the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refresh
             */
            Refresh(): void;
            /**
             * [Read-only and editable grids] Refreshes the ribbon rules for the grid control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refreshribbon
             */
            RefreshRibbon(): void;
            /**
             * [Read-only and editable grids] Displays the associated grid for the grid. This method does nothing if the grid is not filtered based on a relationship
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/openrelatedgrid
             */
            OpenRelatedGrid(): void;
            /**
             * [Read-only grids] Removes event handlers from the Subgrid OnLoad event event
             * @param callback The function to be removed from the OnLoad event.
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/removeonload
             */
            RemoveOnLoad(callback: (executionContext: any) => void): void;
            /**
             * [Read-only and editable grids] Gets the logical name of the entity data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getentityname
             * */
            readonly EntityName: string;
            /**
             * [Read-only and editable grids] Gets the FetchXML query that represents the current data, including filtered and sorted data, in the grid control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getfetchxml
             */
            readonly FetchXml: string
            /**
             * [Read-only and editable grids] Gets the grid type (grid or subgrid)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
             * */
            readonly GridType: OptionSet.GridType;
            /**
             * [Read-only and editable grids] Gets information about the relationship used to filter the subgrid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getrelationship
             * */
            readonly Relationship: GridRelationship;
            /**
             * [Read-only grid] Provides methods to get or set information about the view selector of the subgrid control. If the subgrid control is not configured to display the view selector, calling the ViewSelector methods will throw an error
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/viewselector
             */
            readonly ViewSelector: ViewSelector;
            /**
             * [Read-only and editable grids] Returns a collection of every GridRow in the Grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/getrows
             */
            readonly Rows: Collections<Controls.GridRow>;
            /**
             * [Read-only and editable grids] Returns a collection of every selected GridRow in the Grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/getselectedrows
             */
            readonly SelectedRows: Collections<Controls.GridRow>;
            /**
             * [Editable grids] Returns the total number of records that match the filter criteria of the view, not limited by the number visible in a single page
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/gettotalrecordcount
             */
            readonly TotalRecordCount: number;
            /**
             * [Read-only and editable grids] Get/Set a value that indicates whether the control is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;
            /**
             * Returns the type of the control (subgrid)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: string;
            /**
             * Returns the name of the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;
            /**
             * Returns the parent section containing the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getparent
             */
            readonly ControlParent: any;
            /**
             * Get/Set whether the control is disabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;
            /**
             * Get/Set the label of the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setlabel
             */
            Label: string;
            /**
             * Sets focus on the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setfocus
             */
            Focus(): void;
        }
        /**
         * Interface for a row in a grid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridrow
         */
        interface GridRow {
            /**
             * [Read-only and editable grids] Returns the logical name for the record in the row
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getentityname
             */
            readonly EntityName: string;
            /**
             * [Read-only and editable grids] Returns a Lookup value that references the record in the row
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getentityreference
             */
            readonly EntityReference: EntityReference;
            /**
             * [Read-only and editable grids] Returns the Id for the record in the row
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getid
             */
            readonly EntityId: Guid;
            /**
             * [Read-only grid] Returns the primary attribute value for the record in the row
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridentity/getprimaryattributevalue
             */
            readonly PrimaryAttributeValue: string;
            readonly Columns: Collections<GridColumn>;
        }
        /**
         * Interface for a column/cell in a grid row
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcell
         */
        interface GridColumn {
            /**
             * [Editable grids] Displays an error message for a cell to indicate that data isn?t valid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
             */
            SetNotification(message: string, uniqueId?: string): boolean;
            /**
             * [Editable grids] Clears notification for a cell
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
             */
            ClearNotification(uniqueId: string): boolean;
            /**
             * [Editable grids] Returns the logical name of the attribute of a selected grid row
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getname
             */
            readonly Name: string;
            /**
             * [Editable grids] Get/Set a string value indicating whether a value for the attribute is required or recommended
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
             */
            RequiredLevel: OptionSet.FieldRequiredLevel;
            /**
             * [Editable grids] Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string;
            /**
             * [Editable grids] Get/Set whether the cell is disabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;
            /**
             * [Editable grids] Returns the label of the column that contains the cell
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             */
            Label: string;
        }
        /**
         * Interface for note controls that support refresh
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Note extends IControl {
            /**
             * Refreshes the data displayed in a timelinewall and timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
        }
        /**
         * Interface for email engagement controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface EmailEngagement {
        }
        /**
         * Interface for email recipient controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface EmailRecipient {
        }
        /**
         * Interface for map controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Map {
        }
        /**
         * Interface for action card controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface ActionCards {
        }
        /**
         * Interface for ACI widget controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface AciWidget {
        }
        /**
         * Interface for Power BI controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface PowerBi {
        }
        /**
         * Interface for file upload controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface File extends IControl {
            /**
             * Returns the data value of the file control
             */
            readonly Value: any;
        }
        /**
         * Interface for image controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Image extends IControl {
            /**
             * Returns the data value of the image control
             */
            readonly Value: any;
        }
        /**
         * Interface for quick view form controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms
         */
        interface QuickView {
            /**
             * Returns the data value of the quick view control
             */
            readonly Value: any;
            /**
             * Gets or sets whether the quick view control is visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getvisible
             */
            Visible: boolean;
            /**
             * Gets or sets the label for the quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getlabel
             */
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
            Value: Guid;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface LookupValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            readonly Value: Guid;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface GuidValue {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: Guid;
        }
        interface GuidValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: Guid;
        }
        interface ManagedPropertyValue {
            Value: string;
        }
        interface ManagedPropertyValueReadonly {
            Value: string;
        }
        interface RetrieveMultipleResponse {
            /** An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default. */
            entities: Array<KeyValueObject>;
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
                enumProperties?: Array<KeyValueObject>;
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
    /**
     * Provides methods to create and manage records using the Web API
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi
     */
    interface WebApi {
        /**
         * Creates an entity record
         * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
         * @param data A JSON object defining the attributes and values for the new entity record.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/createrecord
         */
        CreateRecord(entityLogicalName: string, data: any, successCallback: (result: EntityReference) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Creates an entity record and returns a promise
         * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
         * @param data A JSON object defining the attributes and values for the new entity record.
         * @returns Promise that resolves with the created entity reference
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/createrecord
         */
        CreateRecord(entityLogicalName: string, data: any): Promise<EntityReference>;
        /**
         * Deletes an entity record
         * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
         * @param id GUID of the entity record you want to delete.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/deleterecord
         */
        DeleteRecord(entityLogicalName: string, id: string, successCallback: (result: EntityReference) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Deletes an entity record and returns a promise
         * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
         * @param id GUID of the entity record you want to delete.
         * @returns Promise that resolves with the deleted entity reference
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/deleterecord
         */
        DeleteRecord(entityLogicalName: string, id: string): Promise<EntityReference>;
        /**
         * Retrieves an entity record
         * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
         * @param id GUID of the entity record you want to retrieve.
         * @param options OData system query options, $select and $expand, to retrieve your data.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrieverecord
         */
        RetrieveRecord(entityLogicalName: string, id: string, options: string, successCallback: (result: any) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves an entity record and returns a promise
         * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
         * @param id GUID of the entity record you want to retrieve.
         * @param options OData system query options, $select and $expand, to retrieve your data.
         * @returns Promise that resolves with the retrieved record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrieverecord
         */
        RetrieveRecord(entityLogicalName: string, id: string, options?: string): Promise<any>;
        /**
         * Retrieves a collection of entity records
         * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
         * @param options OData system query options or FetchXML query to retrieve your data.
         * @param maxPageSize Specify a positive number that indicates the number of entity records to be returned per page.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords
         */
        RetrieveMultipleRecords(entityLogicalName: string, options: string, maxPageSize: number, successCallback: (result: WebApi.RetrieveMultipleResponse) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves a collection of entity records and returns a promise
         * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
         * @param options OData system query options or FetchXML query to retrieve your data.
         * @param maxPageSize Specify a positive number that indicates the number of entity records to be returned per page.
         * @returns Promise that resolves with the retrieved records
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords
         */
        RetrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Promise<WebApi.RetrieveMultipleResponse>;
        /**
         * Updates an entity record
         * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
         * @param id GUID of the entity record you want to update.
         * @param data A JSON object containing key : value pairs where key is the property of the entity and value is the value of the property you want to update.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/updaterecord
         */
        UpdateRecord(entityLogicalName: string, id: string, data: any, successCallback: (result: EntityReference) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Updates an entity record and returns a promise
         * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
         * @param id GUID of the entity record you want to update.
         * @param data A JSON object containing key : value pairs where key is the property of the entity and value is the value of the property you want to update.
         * @returns Promise that resolves with the updated entity reference
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/updaterecord
         */
        UpdateRecord(entityLogicalName: string, id: string, data: any): Promise<EntityReference>;
        /**
         * Execute a single action, function, or CRUD operation
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: WebApi.ExecuteRequest, successCallback: (result: WebApi.ExecuteResponse) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Execute a single action, function, or CRUD operation and returns a promise
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
         * @returns Promise that resolves with the execution response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: WebApi.ExecuteRequest): Promise<WebApi.ExecuteResponse>;
        /**
         * Execute a collection of action, function, or CRUD operations
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: Array<WebApi.ExecuteRequest>, successCallback: (result: Array<WebApi.ExecuteResponse>) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Execute a collection of action, function, or CRUD operations and returns a promise
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute.
         * @returns Promise that resolves with an array of execution responses
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: Array<WebApi.ExecuteRequest>): Promise<Array<WebApi.ExecuteResponse>>;
        /**
         * Retrieves multiple records and maps them using the provided constructor or factory function.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The entity logical name of the records you want to retrieve. For example: "account"
         * @param options - OData system query options or FetchXML query to retrieve your data
         * @param maxPageSize - Specify a positive number that indicates the number of records to be returned per page
         * @param successCallback - The function that will be passed through and be called by a successful response
         * @param errorCallback - The function that will be passed through and be called by a failed response
         * @example
         * form.WebApi.RetrieveRecords(DevKitV4.AccountApi, 'account', '?$select=name&$top=3', 3, (rows) => { console.log(rows); });
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options: string, maxPageSize: number, successCallback: (result: T[]) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves multiple records and maps them using the provided constructor or factory function.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The entity logical name of the records you want to retrieve. For example: "account"
         * @param options - OData system query options or FetchXML query to retrieve your data
         * @param successCallback - The function that will be passed through and be called by a successful response
         * @param errorCallback - The function that will be passed through and be called by a failed response
         * @example
         * form.WebApi.RetrieveRecords(DevKitV4.AccountApi, 'account', '?$select=name', (rows) => { console.log(rows); });
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options: string, successCallback: (result: T[]) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves multiple records using FetchXML and maps them using the provided constructor or factory function.
         * Entity name is automatically extracted from FetchXML.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param fetchXml - FetchXML query string (must include ?fetchXml= prefix)
         * @param successCallback - The function that will be passed through and be called by a successful response
         * @param errorCallback - The function that will be passed through and be called by a failed response
         * @example
         * form.WebApi.RetrieveRecords(DevKitV4.AccountApi, '?fetchXml=<fetch><entity name="account"/></fetch>', (rows) => { console.log(rows); });
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), fetchXml: string, successCallback: (result: T[]) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves multiple records and maps them using the provided constructor or factory function (Promise-based).
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The entity logical name of the records you want to retrieve. For example: "account"
         * @param options - Optional OData system query options or FetchXML query to retrieve your data
         * @param maxPageSize - Optional: Specify a positive number that indicates the number of records to be returned per page
         * @returns A promise that resolves to an array of typed instances
         * @example
         * const rows = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, 'account', '?$select=name&$top=3');
         * @example
         * const rows = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, 'account', '?fetchXml=<fetch><entity name="account"/></fetch>');
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options?: string, maxPageSize?: number): Promise<T[]>;
        /**
         * Retrieves multiple records using FetchXML and maps them using the provided constructor or factory function (Promise-based).
         * Entity name is automatically extracted from FetchXML.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param fetchXml - FetchXML query string (must include ?fetchXml= prefix)
         * @param maxPageSize - Optional: Specify a positive number that indicates the number of records to be returned per page
         * @returns A promise that resolves to an array of typed instances
         * @example
         * const rows = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, '?fetchXml=<fetch><entity name="account"/></fetch>');
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), fetchXml: string, maxPageSize?: number): Promise<T[]>;
        /**
         * Retrieves a single record and maps it using the provided constructor or factory function.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The logical name of the entity
         * @param id - The GUID of the record
         * @param options - Optional OData query options (defaults to "?$select=*")
         * @param successCallback - The function that will be passed through and be called by a successful response
         * @param errorCallback - The function that will be passed through and be called by a failed response
         * @example
         * form.WebApi.RetrieveRecord(DevKitV4.AccountApi, form.EntityName, form.EntityId, (record) => { console.log(record); });
         */
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, options: string, successCallback: (result: T) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves a single record and maps it using the provided constructor or factory function.
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The logical name of the entity
         * @param id - The GUID of the record
         * @param successCallback - The function that will be passed through and be called by a successful response
         * @param errorCallback - The function that will be passed through and be called by a failed response
         * @example
         * form.WebApi.RetrieveRecord(DevKitV4.AccountApi, form.EntityName, form.EntityId, (record) => { console.log(record); });
         */
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, successCallback: (result: T) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Retrieves a single record and maps it using the provided constructor or factory function (Promise-based).
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory - Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName - The logical name of the entity
         * @param id - The GUID of the record
         * @param options - Optional OData query options (defaults to "?$select=*")
         * @returns A promise that resolves to a typed instance
         * @example
         * const account = await form.WebApi.RetrieveRecord(DevKitV4.AccountApi, 'account', accountId);
         */
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, options?: string): Promise<T>;
        /**
         * Contains methods to execute operations that will be executed against the server even when the user is offline
         */
        readonly Online: WebApiOnline;
        /**
         * Contains methods to interact with the offline cache
         */
        readonly Offline: WebApiOffline;
    }
    /**
     * Contains methods to execute operations that will be executed against the server even when the user is offline
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online
     */
    interface WebApiOnline {
        /**
         * Execute a single action, function, or CRUD operation that will be executed against the server even when the user is offline
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: WebApi.ExecuteRequest, successCallback: (result: WebApi.ExecuteResponse) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Execute a single action, function, or CRUD operation that will be executed against the server even when the user is offline and returns a promise
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
         * @returns Promise that resolves with the execution response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: WebApi.ExecuteRequest): Promise<WebApi.ExecuteResponse>;
        /**
         * Execute a collection of action, function, or CRUD operations that will be executed against the server even when the user is offline
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute.
         * @param successCallback The function that will be passed through and be called by a successful response.
         * @param errorCallback The function that will be passed through and be called by a failed response.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: Array<WebApi.ExecuteRequest>, successCallback: (result: Array<WebApi.ExecuteResponse>) => void, errorCallback?: (error: WebApi.ErrorCallbackObject) => void): void;
        /**
         * Execute a collection of action, function, or CRUD operations that will be executed against the server even when the user is offline and returns a promise
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute.
         * @returns Promise that resolves with an array of execution responses
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: Array<WebApi.ExecuteRequest>): Promise<Array<WebApi.ExecuteResponse>>;
    }
    /**
     * Contains methods to interact with the offline cache
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline
     */
    interface WebApiOffline {
        /**
         * Returns whether an entity is offline enabled
         * @param entityLogicalName Logical name of the entity. For example: "account".
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline/isavailable
         */
        IsAvailable(entityLogicalName: string): boolean;
    }
    /**
     * Provides methods to interact with Microsoft Copilot Studio topics (Preview feature)
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot
     */
    interface Copilot {
        /**
         * Executes a Copilot Studio topic by event name
         * @param eventName The name of the event configured in Copilot Studio
         * @param eventParameters Optional parameters to pass to the Copilot Studio topic
         * @param successCallback The function that will be called with the response from Copilot Studio
         * @param errorCallback The function that will be called if the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/executeevent
         */
        ExecuteEvent(eventName: string, eventParameters: any, successCallback: (result: Array<any>) => void, errorCallback?: (error: any) => void): void;
        /**
         * Executes a Copilot Studio topic by event name and returns a promise
         * @param eventName The name of the event configured in Copilot Studio
         * @param eventParameters Optional parameters to pass to the Copilot Studio topic
         * @returns Promise that resolves with the Copilot Studio response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/executeevent
         */
        ExecuteEvent(eventName: string, eventParameters?: any): Promise<Array<any>>;
        /**
         * Executes a Copilot Studio topic by sending a natural language prompt
         * @param promptText The natural language prompt to send to Copilot Studio
         * @param successCallback The function to call with the response from Copilot Studio
         * @param errorCallback The function to call if the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/executeprompt
         */
        ExecutePrompt(promptText: string, successCallback: (result: Array<any>) => void, errorCallback?: (error: any) => void): void;
        /**
         * Executes a Copilot Studio topic by sending a natural language prompt and returns a promise
         * @param promptText The natural language prompt to send to Copilot Studio
         * @returns Promise that resolves with the Copilot Studio response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot/executeprompt
         */
        ExecutePrompt(promptText: string): Promise<Array<any>>;
    }
    /**
     * Base interface for entity attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface IEntityBaseAttribute {
        /**
         * Type of an attribute
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly AttributeType: number;
        /**
         * Display name for the attribute
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly DisplayName: string;
        /**
         * Logical name of the entity that contains the attribute
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly EntityLogicalName: string;
        /**
         * Logical name for the attribute
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly LogicalName: string;
    }
    /**
     * Interface for boolean attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityBooleanAttribute extends IEntityBaseAttribute {
        /**
         * Default value for a Boolean option set
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly DefaultFormValue: boolean;
        /**
         * Options for the boolean attribute where each option is a key: value pair
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    /**
     * Interface for enumeration attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityEnumAttribute extends IEntityBaseAttribute {
        /**
         * Options for the boolean attribute where each option is a key: value pair
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    /**
     * Interface for picklist (optionset) attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityPicklistAttribute extends IEntityBaseAttribute {
        /**
         * Default value for a Number option set
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly DefaultFormValue: number;
        /**
         * Options for the boolean attribute where each option is a key: value pair
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    /**
     * Interface for state attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityStateAttribute extends IEntityBaseAttribute {
        /**
         * Returns the default status based on the passed in state value for an entity
         * @param arg statecode value
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        getDefaultStatus(arg: number): number;
        /**
         * Returns possible status values (array of numbers) for a specified state value
         * @param arg statecode value
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        getStatusValuesForState(arg: number): Array<number>;
        /**
         * Options for the boolean attribute where each option is a key: value pair
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    /**
     * Interface for status attribute metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityStatusAttribute extends IEntityBaseAttribute {
        /**
         * Returns the state value (number) for the specified status value (number)
         * @param arg statuscode value
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        getState(arg: number): Array<number>;
        /**
         * Options for the boolean attribute where each option is a key: value pair
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        readonly OptionSet: Array<KeyValueNumber>;
    }
    /**
     * Represents an error returned by the Dataverse Web API or client-side operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi
     */
    interface Error {
        /** The error code  */
        readonly code: number;
        /** The error code */
        readonly errorCode: number;
        /** An error message describing the issue */
        readonly message: string;
    }
    /**
     * Represents entity privilege metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
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
        readonly PrivilegeId: Guid;
        /** The type of operation for the privilege */
        readonly PrivilegeType: OptionSet.PrivilegeType
    }
    /**
     * Represents entity metadata returned by getEntityMetadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface EntityMetadata {
        /** Whether a custom activity should appear in the activity menus in the Web application. 0 indicates that the custom activity doesn't appear; 1 indicates that it does appear */
        readonly ActivityTypeMask: number;
        /** Indicates whether to automatically move records to the owner?s default queue when a record of this type is created or assigned */
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
        /** Indicates whether the document recommendations is enabled */
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
    /**
     * Represents a generic key-value pair with string key and any value type
     */
    interface KeyValueObject {
        /** The key identifier */
        readonly key: string,
        /** The associated value of any type */
        readonly value: any
    }
    /**
     * Represents a key-value pair with string key and numeric value
     * @remarks Used for OptionSet metadata where the key is the label and value is the numeric option value
     */
    interface KeyValueNumber {
        /** The key identifier (typically the option label) */
        readonly key: string,
        /** The numeric value associated with the key */
        readonly value: number
    }
    /**
     * Represents a text-value pair for OptionSet options
     */
    interface TextValueNumber {
        /** The display text of the option */
        readonly text: string;
        /** The numeric value of the option */
        readonly value: number;
    }
    /**
     * The result from a confirm dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
     */
    interface DialogResult {
        /** Indicates whether the confirm button was clicked to close the dialog */
        readonly confirmed: boolean;
    }
    /**
     * Represents file data returned from device capture methods (camera, microphone) or file picker
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
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
    /**
     * Represents the properties of the current business app in model-driven apps
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
     */
    interface AppProperty {
        /** The ID of the app */
        readonly appId: string;
        /** The display name of the app */
        readonly displayName: string;
        /** The unique name of the app */
        readonly uniqueName: string;
        /** The URL of the app */
        readonly url: string;
        /** The ID of the web resource icon for the app */
        readonly webResourceId: Guid;
        /** The name of the web resource icon for the app */
        readonly webResourceName: string;
        /** The ID of the welcome page for the app */
        readonly welcomePageId: Guid;
        /** The name of the welcome page for the app */
        readonly welcomePageName: string;
    }
    /**
     * Represents field-level security privileges for the current user on a specific field/column
     * @remarks This is intended for use when Field Level Security modifies a user's privileges for a specific field
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getuserprivilege
     */
    interface FieldUserPrivilege {
        /** Whether the user has read privilege for this field */
        readonly canRead: boolean;
        /** Whether the user has update privilege for this field */
        readonly canUpdate: boolean;
        /** Whether the user has create privilege for this field */
        readonly canCreate: boolean;
    }
    /**
     * Represents the relationship information for a filtered subgrid
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getrelationship
     */
    interface GridRelationship {
        /**
         * Name of the attribute
         */
        readonly attributeName: string,
        /**
         * Name of the relationship
         */
        readonly name: string,
        /**
         * Name of the navigation property for this relationship
         */
        readonly navigationPropertyName: string,
        /**
         * Returns one of the following values to indicate the relationship type. 0: OneToMany | 1: ManyToMany
         */
        readonly relationshipType: 0 | 1,
        /**
         * Returns one of the following values to indicate the role type of relationship. 1: Referencing | 2: AssociationEntity
         */
        readonly roleType: 1 | 2
    }
    /**
     * Collections are structures to provide access to data that represent an array, but without the ability to modify the data in the array
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections
     */
    interface Collections<T> {
        /**
         * Applies the action contained in a delegate function to each item in the collection
         * @param successCallback Delegate function with parameters for item and index
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/foreach
         */
        forEach(successCallback: (item: T, index: number) => void): void;
        /**
         * Gets all items in the collection as an array
         * @returns An array of all items in the collection
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(): Array<T>;
        /**
         * Gets an item from the collection by its name
         * @param item The name of the item to retrieve
         * @returns The item with the specified name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(item: string): T;
        /**
         * Gets an item from the collection by its index
         * @param index The index of the item to retrieve
         * @returns The item at the specified index
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(index: number): T;
        /**
         * Gets items from the collection that satisfy a delegate function
         * @param successCallback Delegate function that returns true for items to include
         * @returns An array of items that satisfy the delegate function
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(successCallback: (item: T, index: number) => void): Array<T>;
        /**
         * Gets the count of items in the collection
         * @returns The number of items in the collection
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/getlength
         */
        getLength(): number;
    }
    /**
     * Defines the execution context for form and control event handlers
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/execution-context
     */
    interface ExecutionContext {
        /**
         * Gets the state of the data load.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs
         */
        IsInitialLoad(): boolean;
        /**
         * Retrieves a variable set using the SetSharedVariable method.
         * @param key The name of the variable.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/getsharedvariable
         */
        GetSharedVariable(key: string): any;
        /**
         * Sets the value of a variable to be used by a handler after the current handler completes.
         * @param key The name of the variable.
         * @param value The values to set.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/setsharedvariable
         */
        SetSharedVariable(key: string, value: any): void;
        /**
         * Returns a value indicating whether the save event has been canceled because the preventDefault method was used in this event handler or a previous event handler.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/isdefaultprevented
         */
        IsDefaultPrevented(): boolean;
        /**
         * Cancels the save operation, but all remaining handlers for the event will still be executed.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault
         */
        SetPreventDefault(): void;
        /**
         * Cancels the save operation if the event handler has a script error, returns a rejected promise for an async event handler or the operation times out.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefaultonerror
         */
        SetPreventDefaultOnError(): void;
        /**
         * Disables the timeout for the event handler. Instead the event waits until the event handler's promise is fulfilled.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/disableasynctimeout
         */
        DisableAsyncTimeout(): void;
        /**
         * Returns a value that indicates the order in which this handler is executed.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/execution-context
         */
        readonly Depth: number;
        /**
         * Returns an object with methods to manage the events.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs
         */
        readonly EventArgs: ExecutionContextEventArgs;
        /**
         * Returns a reference to the object that the event occurred on.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventsource
         */
        readonly EventSource: any;
        /**
         * Returns a reference to the form or an item on the form depending on where the method was called.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/getformcontext
         */
        readonly FormContext: any;
        /**
         * Returns a value indicating how the save event was initiated by the user.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
         */
        readonly SaveMode: OptionSet.SaveMode;
        /**
        * Use this method to know information about an entity being saved/updated. It returns entity ID, and entity name if success.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getentityreference
        */
        readonly EntityReference: EntityReference;
        /**
        * Use this method to know whether the OnSave operation is successful or failed.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getissavesuccess
        */
        readonly IsSaveSuccess: boolean;
        /**
        * Use this method to know the error details on why an entity save failed.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsaveerrorinfo
        */
        readonly SaveErrorInfo: string;
    }
    /**
     * Provides event arguments for execution context events
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs
     */
    interface ExecutionContextEventArgs {
        /**
        *  When the form OnDataLoad/OnLoad event occurs. You can gets the state of the data load. It returns an enum with the following values:
        * - InitialLoad = 1
        * - Save = 2
        * - Refresh = 3
        */
        getDataLoadState(): 1 | 2 | 3;
        /**
         * When the form OnLookupTagClick event occurs. Gets the selected tag value. The value returned for the getTagValue method is a LookupValue.
         * */
        getTagValue(): EntityReference;
        /**
         * When the form OnLookupTagClick/OnSave event occurs. Cancels the save operation, but all remaining handlers for the event will still be executed.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault
         * */
        preventDefault(): void;
        /**
         * When the form OnLookupTagClick/OnSave event occurs. Returns a value indicating whether the save event has been canceled because the preventDefault method was used in this event handler or a previous event handler.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/isdefaultprevented
         * */
        isDefaultPrevented(): boolean;
        /**
         * When the form OnProcessStatusChange/OnStageSelected event occurs. Gets the stage object corresponding to the event triggered. Returns the selected stage in for the OnStageSelected event and next or previous stage objects for the OnStageChange event depending on direction moved.
         * */
        getStage(): Controls.ProcessStage;
        /**
         * When the form OnProcessStatusChange/OnStageSelected event occurs. Gets the direction of the stage advance action. It returns a string value Next or Previous.
         * */
        getDirection(): "Next" | "Previous";
        /**
         * When the form OnSave event occurs,. Returns a value indicating how the save event was initiated by the user.
         *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
         * */
        getSaveMode(): OptionSet.SaveMode;
    }
    /**
     * Provides utility methods for common operations in model-driven apps
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility
     */
    interface Utility {
        /**
         * Returns information about the advanced configuration settings for the organization
         * @param setting Name of the configuration setting
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
         */
        AdvancedConfigSetting(setting: OptionSet.AdvancedConfigSetting): number;
        /**
         * Returns the valid state transitions for the specified entity type and state code.
         * @param entityName The logical name of the entity.
         * @param statusCode The status code to find out the allowed status transition values.
         * @param successCallback The function to execute when the operation succeeds.
         * @param errorCallback The function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getallowedstatustransitions
         */
        AllowedStatusTransitions(entityName: string, statusCode: number, successCallback: (statusCodes: Array<number>) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Returns the valid status transitions for the specified entity type and state code and returns a promise
         * @param entityName The logical name of the entity.
         * @param statusCode The status code to find out the allowed status transition values.
         * @returns Promise that resolves with an array of allowed status codes
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getallowedstatustransitions
         */
        AllowedStatusTransitions(entityName: string, statusCode: number): Promise<Array<number>>;
        /**
         * Returns a promise containing the default main form descriptor with the following values.
         * @param entityName The logical name of the entity.
         * @param formId The form ID of the entity.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymainformdescriptor
         */
        EntityMainFormDescriptor(entityName: string, formId: string): any;
        /**
         * Invokes the device camera to scan the barcode information, such as a product number. Note: This method is supported only for the mobile clients.
         * @param successCallback A function to call when the barcode value is returned as a String.
         * @param errorCallback A function to call when the operation fails. An error object with the message property (String) will be passed that describes the error details.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getbarcodevalue
         */
        BarcodeValue(successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Invokes the device camera to scan the barcode information and returns a promise
         * @returns Promise that resolves with the barcode value as a string
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getbarcodevalue
         */
        BarcodeValue(): Promise<string>;
        /**
         * Invokes the device microphone to record audio.
         * @param successCallback A function to call when audio is returned. A base64 encoded audio object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureaudio
         */
        CaptureAudio(successCallback: (result: FileData) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Invokes the device microphone to record audio and returns a promise
         * @returns Promise that resolves with the audio file data
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureaudio
         */
        CaptureAudio(): Promise<FileData>;
        /**
         * Invokes the device camera to capture an image. Note: This method is supported only for the mobile clients.
         * @param imageOption The image option.
         * @param successCallback A function to call when image is returned. A base64 encoded image object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
         */
        CaptureImage(imageOption: ImageOption, successCallback: (result: FileData) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Invokes the device camera to capture an image and returns a promise
         * @param imageOption The image option.
         * @returns Promise that resolves with the image file data
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
         */
        CaptureImage(imageOption: ImageOption): Promise<FileData>;
        /**
         * Invokes the device camera to record video. Note: This method is supported only for the mobile clients.
         * @param successCallback A function to call when Video is returned. A base64 encoded video object attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/capturevideo
         */
        CaptureVideo(successCallback: (result: FileData) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Invokes the device camera to record video and returns a promise
         * @returns Promise that resolves with the video file data
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/capturevideo
         */
        CaptureVideo(): Promise<FileData>;
        /**
         * Closes a progress dialog box. If no progress dialog is displayed currently, this method will do nothing. You can display a progress dialog using the ShowProgressIndicator method.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/closeprogressindicator
         */
        CloseProgressIndicator(): void;
        /**
         * Returns the name of the current business app in Customer Engagement
         * @param successCallback A function to call when the business app name is returned
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
         */
        CurrentAppName(successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Returns the name of the current business app in Customer Engagement and returns a promise
         * @returns Promise that resolves with the app name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
         */
        CurrentAppName(): Promise<string>;
        /**
         * Returns the relative URL with the caching token for the specified web resource.
         * @param webResourceName Name of the web resource.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getwebresourceurl
         */
        WebResourceUrl(webResourceName: string): string;
        /**
         * Returns the properties of the current business app in Customer Engagement
         * @param successCallback A function to call when the business app property information is returned
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
         */
        CurrentAppProperties(successCallback: (result: AppProperty) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Returns the properties of the current business app in Customer Engagement and returns a promise
         * @returns Promise that resolves with the app properties
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
         */
        CurrentAppProperties(): Promise<AppProperty>;
        /**
         * Returns the current location using the device geolocation capability. Note: For the CurrentPosition method to work, the geolocation capability must be enabled on your mobile device, and the Dynamics 365 for Customer Engagement mobile clients must have permissions to access the device location, which isn't enabled by default. This method is supported only for the mobile clients.
         * @param successCallback A function to call when the current geolocation information is returned. A geolocation object attributes is passed to the function
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
         */
        CurrentPosition(successCallback: (result: PositionData) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Returns the current location using the device geolocation capability and returns a promise
         * @returns Promise that resolves with the position data
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
         */
        CurrentPosition(): Promise<PositionData>;
        /**
         * Returns the entity metadata for the specified entity.
         * @param entityName The logical name of the entity.
         * @param attributes The attributes to get metadata for.
         * @param successCallback A function to call when the entity metadata is returned.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        EntityMetadata(entityName: string, attributes: Array<string>, successCallback: (result: EntityMetadata) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Returns the entity metadata for the specified entity and returns a promise
         * @param entityName The logical name of the entity.
         * @param attributes The attributes to get metadata for.
         * @returns Promise that resolves with the entity metadata
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        EntityMetadata(entityName: string, attributes?: Array<string>): Promise<EntityMetadata>;
        /**
         * Encodes the specified string so that it can be used in an HTML attribute.
         * @param arg String to be encoded.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlencode
         */
        HtmlAttributeEncode(arg: string): string;
        /**
         * Converts a string that has been HTML-encoded into a decoded string.
         * @param arg HTML-encoded string to be decoded.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmldecode
         */
        HtmlDecode(arg: string): string;
        /**
         * Converts a string to an HTML-encoded string.
         * @param arg String to be encoded.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlattributeencode
         */
        HtmlEncode(arg: string): string;
        /**
         * Invokes an action based on the specified parameters.
         * @param name Name of the process action to invoke.
         * @param parameter An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
         * @param successCallback A function to call when the action is invoked.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/invokeprocessaction
         */
        InvokeProcessAction(name: string, parameter: any, successCallback: (result: any) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Invokes an action based on the specified parameters and returns a promise
         * @param name Name of the process action to invoke.
         * @param parameter An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
         * @returns Promise that resolves with the action result
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/invokeprocessaction
         */
        InvokeProcessAction(name: string, parameter: any): Promise<any>;
        /**
         * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Dynamics 365 for Customer Engagement apps web client.
         * @param url URL of the page to be loaded in the side pane static area.
         * @param title Title of the side pane static area.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-panel/loadpanel
         */
        LoadPanel(url: string, title: string): void;
        /**
         * Defines the options for opening the lookup dialog
         * @param lookupOption
         * @param successCallback A function to call when the lookup control is invoked. An array of objects properties is passed
         * @param cancelCallback A function to call when you cancel the lookup control or the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
         */
        LookupObjects(lookupOption: LookupOption, successCallback: (results: Array<EntityReference>) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Defines the options for opening the lookup dialog and returns a promise
         * @param lookupOption
         * @returns Promise that resolves with an array of selected entity references
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
         */
        LookupObjects(lookupOption: LookupOption): Promise<Array<EntityReference>>;
        /**
         * Displays an alert dialog containing a message and a button.
         * @param alertOption The strings to be used in the alert dialog.
         * @param window The height and width options for alert dialog.
         * @param successCallback A function to execute when the alert dialog is closed by either clicking the confirm button or canceled by pressing ESC.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
         */
        OpenAlertDialog(alertOption: DialogAlertOption, window: Window, successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Displays an alert dialog containing a message and a button and returns a promise
         * @param alertOption The strings to be used in the alert dialog.
         * @param window The height and width options for alert dialog.
         * @returns Promise that resolves when the dialog is closed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
         */
        OpenAlertDialog(alertOption: DialogAlertOption, window?: Window): Promise<string>;
        /**
         * Displays a confirmation dialog box containing a message and two buttons.
         * @param confirmOption The strings to be used in the confirmation dialog.
         * @param window The height and width options for confirmation dialog.
         * @param successCallback A function to execute when the confirmation dialog is closed by clicking the confirm, cancel, or X in the top-right corner of the dialog. An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
         */
        OpenConfirmDialog(confirmOption: DialogConfirmOption, window: Window, successCallback: (result: DialogResult) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Displays a confirmation dialog box containing a message and two buttons and returns a promise
         * @param confirmOption The strings to be used in the confirmation dialog.
         * @param window The height and width options for confirmation dialog.
         * @returns Promise that resolves with the dialog result
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
         */
        OpenConfirmDialog(confirmOption: DialogConfirmOption, window?: Window): Promise<DialogResult>;
        /**
         * Displays an error dialog.
         * @param errorOptions An object to specify the options for error dialog.
         * @param successCallback A function to execute when the error dialog is closed.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
         */
        OpenErrorDialog(errorOptions: DialogError, successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Displays an error dialog and returns a promise
         * @param errorOptions An object to specify the options for error dialog.
         * @returns Promise that resolves when the dialog is closed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
         */
        OpenErrorDialog(errorOptions: DialogError): Promise<string>;
        /**
         * Opens a file.
         * @param file An object describing the file to open.
         * @param fileOption An object describing whether to open or save the file.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
         */
        OpenFile(file: FileData, fileOption?: FileOption): void;
        /**
         * Opens an entity form or a quick create form.
         * @param formOption The open form option for opening the form.
         * @param formParameters A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error.
         * @param successCallback A function to execute when the record is saved in the quick create form. This function is passed an object as a parameter.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        OpenForm(formOption: FormOption, formParameters: any, successCallback: (result: OpenQuickCreateSuccessCallbackObject) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Opens an entity form or a quick create form and returns a promise
         * @param formOption The open form option for opening the form.
         * @param formParameters A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error.
         * @returns Promise that resolves with the saved record information
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        OpenForm(formOption: FormOption, formParameters?: any): Promise<OpenQuickCreateSuccessCallbackObject>;
        /**
         * Opens a URL, including file URLs.
         * @param url URL to open.
         * @param window Options to open the URL.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openurl
         */
        OpenUrl(url: string, window?: Window): void;
        /**
         * Opens an HTML web resource.
         * @param webResourceName Name of the HTML web resource to open.
         * @param window Window options for opening the web resource.
         * @param data Data to be passed into the data parameter.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openwebresource
         */
        OpenWebResource(webResourceName: string, window?: Window, data?: string): void;
        /**
         * Navigates to the specified page.
         * @param pageInput Input about the page to navigate to. The object definition changes depending on the type of page to navigate to: entity list or HTML web resource.
         * @param navigationOptions Options for navigating to a page: whether to open inline or in a dialog. If you don't specify this parameter, page is opened inline by default.
         * @param successCallback A function to execute on successful navigation to the page when navigating inline and on closing the dialog when navigating to a dialog.
         * @param errorCallback A function to execute when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
         */
        NavigateTo(pageInput: PageInputEntityList | PageInputHtmlWebResource | PageInputEntityRecord | PageInputDashboard, navigationOptions?: NavigationOptions, successCallback?: (result: any) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Navigates to the specified page and returns a promise
         * @param pageInput Input about the page to navigate to. The object definition changes depending on the type of page to navigate to: entity list or HTML web resource.
         * @param navigationOptions Options for navigating to a page: whether to open inline or in a dialog. If you don't specify this parameter, page is opened inline by default.
         * @returns Promise that resolves on successful navigation to the page when navigating inline and on closing the dialog when navigating to a dialog.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
         */
        NavigateTo(pageInput: PageInputEntityList | PageInputHtmlWebResource | PageInputEntityRecord | PageInputDashboard, navigationOptions?: NavigationOptions): Promise<any>;
        /**
         * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
         * @param filePickOption An object pick file option
         * @param successCallback A function to call when selected files are returned. An array of objects with each object having the following attributes is passed to the function.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
         */
        PickFile(filePickOption: FilePickOption, successCallback: (result: Array<FileData>) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients) and returns a promise
         * @param filePickOption An object pick file option
         * @returns Promise that resolves with an array of selected file data
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
         */
        PickFile(filePickOption: FilePickOption): Promise<Array<FileData>>;
        /**
         * Prefixes the current organization's unique name to a string, typically a URL path
         * @param path A local path to a resource
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
         */
        PrependOrgName(path: string): string;
        /**
         * Refreshes the parent grid containing the specified record
         * @param lookupOption An object with the following properties to specify the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/refreshparentgrid
         */
        RefreshParentGrid(lookupOption: EntityReference): void;
        /**
         * Returns the localized string for a given key associated with the default web resource
         * @param key The key for the localized string
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        Resource(key: string): string;
        /**
         * Returns the localized string for a given key associated with the specified web resource
         * @param webResourceName The name of the web resource. E.g.: "devkit_/resources/Resource"
         * @param key The key for the localized string
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        ResourceString(webResourceName: string, key: string): string;
        /**
         * Displays a progress dialog with the specified message. Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call. The progress dialog blocks the UI until it is closed using the CloseProgressIndicator method. So, you must use this method with caution
         * @param message The message to be displayed in the progress dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/showprogressindicator
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
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlattributeencode
         */
        XmlEncode(arg: string): string;
        /**
         * Displays an error, information, warning, or success notification for an app, and lets you specify actions to execute based on the notification.
         * @param notification The notification to add.
         * @param successCallback A function to call when notification is displayed. A GUID value is passed to uniquely identify the notification. You can use the GUID value to close or dismiss the notification using the clearGlobalNotification method.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
         */
        AddGlobalNotification(notification: GlobalNotification, successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Displays an error, information, warning, or success notification for an app and returns a promise
         * @param notification The notification to add.
         * @returns Promise that resolves with the notification GUID
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
         */
        AddGlobalNotification(notification: GlobalNotification): Promise<string>;
        /**
         * Clears a notification in the app.
         * @param uniqueId The ID to use to clear a specific notification that was set using addGlobalNotification.
         * @param successCallback A function to call when the notification is cleared.
         * @param errorCallback A function to call when the operation fails.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
         */
        ClearGlobalNotification(uniqueId: string, successCallback: (result: string) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Clears a notification in the app and returns a promise
         * @param uniqueId The ID to use to clear a specific notification that was set using addGlobalNotification.
         * @returns Promise that resolves when the notification is cleared
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
         */
        ClearGlobalNotification(uniqueId: string): Promise<string>;
        /**
         * Clears a notification in the app and returns a promise
         * @param uniqueId The ID to use to clear a specific notification that was set using addGlobalNotification.
         * @returns Promise that resolves when the notification is cleared
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
         */
        ClearGlobalNotification(uniqueId: string): Promise<string>;
        /**
         *  Provides access to the methods to determine which client is being used, whether the client is connected to the server, and what kind of device is being used.
         *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client
         */
        readonly Client: Client;
        /**
         * Returns the base URL that was used to access the application
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
         */
        readonly ClientUrl: string;
        /**
         * Returns the URL of the current business app in Customer Engagement
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
         */
        readonly CurrentAppUrl: string;
        /**
         * Returns a boolean value indicating if the Customer Engagement instance is hosted on-premises or online
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
         */
        readonly IsOnPremises: boolean;
        /**
         * Returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer for identifying UI controls in the Dynamics 365 for Customer Engagement apps form. An attribute by this name must be added to the UI element that needs to be exposed to Learning Path (guided help)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getlearningpathattributename
         */
        readonly LearningPathAttributeName: string;
        /**
         * The method returns an object with the input property. The input property is an object with the following attributes depending on whether you are currently on the entity form or entity list
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
         * */
        readonly PageContext: any;
        /**
         *  Returns information about the current organization settings
         *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
         */
        readonly OrganizationSettings: OrganizationSettings;
        /**
         * Returns information about the current user settings
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings
         */
        readonly UserSettings: UserSettings
        /**
         * Returns the version number of the Dynamics 365 for Customer Engagement apps instance. E.g.: "9.0.0.1103"
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getversion
         */
        readonly Version: string;
    }
    /**
     * Provides information about the client application
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client
     */
    interface Client {
        /**
        *  Returns a value to indicate which client the script is executing in.
        *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
        */
        readonly ClientName: OptionSet.ClientName;
        /**
        *  Returns a value to indicate the state of the client.
        *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
        */
        readonly ClientState: OptionSet.ClientState;
        /**
        *  Returns information about the kind of device the user is using.
        *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
        */
        readonly FormFactor: OptionSet.FormFactor;
        /**
        *  Returns information whether the server is online or offline
        *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#isoffline
        */
        readonly IsOffline: boolean;
        /**
        *  Returns information whether the network is available or not.
        *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#isnetworkavailable
        */
        readonly IsNetworkAvailable: boolean;
    }
    /**
     * Provides information about the current organization settings
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
     */
    interface OrganizationSettings {
        /**
         * Returns attributes and their values as key:value pairs that are available for the organization entity. Additional values will be available as attributes if they are specified as attribute dependencies in the web resource dependency list. The key will be the attribute logical name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#attributes
         */
        readonly Attributes: Array<KeyValueObject>;
        /**
         * [Deprecated] Returns the ID of the base currency for the current organization
         * @deprecated use {@link BaseCurrency}
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrencyid
         */
        readonly BaseCurrencyId: Guid;
        /**
         * Returns a lookup object containing the ID, name, and entity type of the base currency for the current organization. This method is supported only on the Unified Interface.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrency
         */
        readonly BaseCurrency: EntityReference;
        /**
         * Returns the default country/region code for phone numbers for the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#defaultcountrycode
         */
        readonly DefaultCountryCode: string;
        /**
         * Returns a number denoting the full name format selected in the system settings
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#fullnameconventioncode
         */
        readonly FullNameConventionCode: OptionSet.FullNameConventionCode;
        /**
         * Indicates whether the auto-save option is enabled for the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#isautosaveenabled
         */
        readonly IsAutoSaveEnabled: boolean;
        /**
         * Indicates whether the current organization is a trial organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#istrialorganization
         */
        readonly IsTrialOrganization: boolean;
        /**
         * Returns the preferred language ID for the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#languageid
         */
        readonly LanguageId: number;
        /**
         * Returns the expiry date for the current organization if it is a trial organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#organizationexpirydate
         */
        readonly OrganizationExpiryDate: Date;
        /**
         * Returns the ID of the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#organizationid
         */
        readonly OrganizationId: Guid;
        /**
         * Returns the unique name of the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#uniquename
         */
        readonly UniqueName: string;
        /**
         * Indicates whether the Skype protocol is used for the current organization
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#useskypeprotocol
         */
        readonly UseSkypeProtocol: boolean;
    }
    /**
     * Represents calendar information for date formatting
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
     */
    interface DateFormattingInfoCalendar {
        /** The minimum supported date/time */
        readonly MinSupportedDateTime: Date;
        /** The maximum supported date/time */
        readonly MaxSupportedDateTime: Date;
        /** The algorithm type */
        readonly AlgorithmType: number;
        /** The calendar type */
        readonly CalendarType: number;
        /** The eras in this calendar */
        readonly Eras: Array<number>;
        /** The two digit year max */
        readonly TwoDigitYearMax: number;
        /** Whether this calendar is read only */
        readonly IsReadOnly: boolean;
    }
    /**
     * Represents date formatting information for the current user
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
     */
    interface DateFormattingInfo {
        /** The abbreviated day names */
        readonly AbbreviatedDayNames: Array<string>;
        /** The abbreviated month names with genitive case */
        readonly AbbreviatedMonthGenitiveNames: Array<string>;
        /** The abbreviated month names */
        readonly AbbreviatedMonthNames: Array<string>;
        /** The AM designator */
        readonly AMDesignator: string;
        /** The calendar */
        readonly Calendar: DateFormattingInfoCalendar;
        /** The date separator */
        readonly DateSeparator: string;
        /** The day names */
        readonly DayNames: Array<string>;
        /** The first day of the week (0 = Sunday, 1 = Monday, etc.) */
        readonly FirstDayOfWeek: number;
        /** The full date/time pattern */
        readonly FullDateTimePattern: string;
        /** The long date pattern */
        readonly LongDatePattern: string;
        /** The long time pattern */
        readonly LongTimePattern: string;
        /** The month day pattern */
        readonly MonthDayPattern: string;
        /** The month genitive names */
        readonly MonthGenitiveNames: Array<string>;
        /** The month names */
        readonly MonthNames: Array<string>;
        /** The PM designator */
        readonly PMDesignator: string;
        /** The short date pattern */
        readonly ShortDatePattern: string;
        /** The shortest day names */
        readonly ShortestDayNames: Array<string>;
        /** The short time pattern */
        readonly ShortTimePattern: string;
        /** The sortable date/time pattern */
        readonly SortableDateTimePattern: string;
        /** The time separator */
        readonly TimeSeparator: string;
        /** The universal sortable date/time pattern */
        readonly UniversalSortableDateTimePattern: string;
        /** The year month pattern */
        readonly YearMonthPattern: string;
    }
    /**
     * Represents security role privilege information
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#getsecurityroleprivilegesinfo-method
     */
    interface SecurityRolePrivilegeInfo {
        /** The security role privilege ID */
        readonly id: string;
        /** The business unit ID */
        readonly businessUnitId: string;
        /** The privilege name */
        readonly privilegeName: string;
        /** The depth of the privilege (1=User, 2=BusinessUnit, 4=ParentChildBusinessUnit, 8=Organization) */
        readonly depth: number;
    }
    /**
     * Provides information about the current user settings
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings
     */
    interface UserSettings {
        /**
         * Returns the date formatting information for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
         */
        readonly DateFormattingInfo: DateFormattingInfo;
        /**
         * Returns the ID of the default dashboard for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#defaultdashboardid
         */
        readonly DefaultDashboardId: Guid;
        /**
         * Indicates whether guided help is enabled for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isguidedhelpenabled
         */
        readonly IsGuidedHelpEnabled: boolean;
        /**
         * Indicates whether high contrast is enabled for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#ishighcontrastenabled
         */
        readonly IsHighContrastEnabled: boolean;
        /**
         * Indicates whether the language for the current user is a right-to-left (RTL) language
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isrtl
         */
        readonly IsRTL: boolean;
        /**
         * Returns the language ID for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#languageid
         */
        readonly LanguageId: number;
        /**
         * Returns a collection of lookup objects containing the GUID and display name of each of the security role or teams that the user is associated with.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#roles
         */
        readonly Roles: Collections<EntityReference>;
        /**
         * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroleprivileges
         */
        readonly SecurityRolePrivileges: Array<Guid>;
        /**
         * [Deprecated] Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with
         * @deprecated use {@link SecurityRolePrivileges}
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroles
         */
        readonly SecurityRoles: Array<Guid>;
        /**
         * Returns a lookup object containing the ID, display name, and entity type of the transaction currency for the current user.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#transactioncurrency
         */
        readonly TransactionCurrency: EntityReference;
        /**
         * [Deprecated] Returns the transaction currency ID for the current user.
         * @deprecated use {@link TransactionCurrency}
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#transactioncurrencyid
         */
        readonly TransactionCurrencyId: Guid;
        /**
         * Returns the GUID of the SystemUser.Id value for the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#userid
         */
        readonly UserId: Guid;
        /**
         * Returns the name of the current user
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#username
         */
        readonly UserName: string;
        /**
         * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#gettimezoneoffsetminutes-method
         */
        readonly TimeZoneOffsetMinutes: number;
        /**
         * Returns a promise which resolves with an object whose keys are the security role privilege GUIDs and values are objects containing the businessUnitId, depth, and privilegeName of the security role privilege.
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#getsecurityroleprivilegesinfo-method
         */
        GetSecurityRolePrivilegesInfo(successCallback: (rolePrivileges: { [key: string]: SecurityRolePrivilegeInfo }) => void, errorCallback?: ErrorCallback): void;
        /**
         * Returns a promise which resolves with an object whose keys are the security role privilege GUIDs and values are objects containing the businessUnitId, depth, and privilegeName of the security role privilege.
         * @returns Promise that resolves with security role privilege information
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#getsecurityroleprivilegesinfo-method
         */
        GetSecurityRolePrivilegesInfo(): Promise<{ [key: string]: SecurityRolePrivilegeInfo }>;
    }
    abstract class IForm {
        /**
        * Adds a function to be called when the record is saved
        * @param callback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/addonsave
        */
        AddOnSave(callback: (executionContext: any) => void): void;
        /**
        * Adds a function to be called when form data is loaded.
        * @param callback The function to be executed when the form data loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/addonload
        */
        DataAddOnLoad(callback: (executionContext: any) => void): void;
        /**
        * Adds an event handler to the PostSave Event event.
        * @param callback The function to be added to the PostSave event after the record is saved with success or failure.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/addonpostsave
        */
        AddOnPostSave(callback: (executionContext: any) => void): void;
        /**
        * Adds a function to be called on the form Loaded event that happens after the form completes the load process.
        * @param callback 	The function to be executed on the form Loaded event. The function is added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. For more information, see Execution context.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addloaded
        */
        UiAddLoaded(callback: (executionContext: any) => void): void;
        /**
        * Adds a function to be called on the form OnLoad event.
        * @param callback The function to be executed on the form OnLoad event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
        * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addonload
        */
        UiAddOnLoad(callback: (executionContext: any) => void): void;
        /**
         * Removes form level notifications
         * @param uniqueId A unique identifier for the message to be cleared that was set using the SetFormNotification method
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/clearformnotification
         */
        ClearFormNotification(uniqueId: string): void;
        /**
         * Closes the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/close
         * */
        Close(): void;
        /**
         * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
         * @param formId The form Id that you want navigate
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormId(formId: Guid): void;
        /**
         * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
         * @param formLabel The form Label that you want navigate
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormLabel(formLabel: string): void;
        /**
         * Returns a value that indicates whether the form is currently visible.
         * @param formId The form Id that you want to check visible
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getvisible
         */
        FormIsVisible(formId: Guid): boolean;
        /**
         * Sets a value that indicates whether the form is visible.
         * @param formId The form Id that you want to set visible
         * @param value Specify true to show the form; false to hide the form.
         */
        FormSetVisible(formId: Guid, value: boolean): void;
        /**
         * Asynchronously refreshes and optionally saves all the data of the form without reloading the page
         * @param save true if the data should be saved after it is refreshed, otherwise false
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save: boolean, successCallback: (executionContext: any) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Asynchronously refreshes and optionally saves all the data of the form without reloading the page and returns a promise
         * @param save true if the data should be saved after it is refreshed, otherwise false
         * @returns Promise that resolves when the refresh is complete
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean): Promise<any>;
        /**
         * Causes the ribbon to re-evaluate data that controls what is displayed in it
         * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/refreshribbon
         */
        RefreshRibbon(refreshAll?: boolean): void;
        /**
         * Removes a function to be called when the record is saved.
         * @param callback The function to be removed for the OnSave event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/removeonsave
         */
        RemoveOnSave(callback: (executionContext: any) => void): void;
        /**
         * Removes a function to be called when form data is loaded.
         * @param callback The function to be removed when the form data loads.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/removeonload
         */
        DataRemoveOnLoad(callback: (executionContext: any) => void): void;
        /**
         * Removes an event handler from the PostSave Event event.
         * @param callback The function to be removed from the PostSave event.
         * https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/removeonpostsave
         */
        RemoveOnPostSave(callback: (executionContext: any) => void): void;
        /**
         * Removes a function from the form Loaded event.
         * @param callback The function to be removed from the form Loaded event.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeloaded
         */
        UiRemoveLoaded(callback: (executionContext: any) => void): void;
        /**
         * Removes a function from the form OnLoad event.
         * @param callback The function to be removed from the form OnLoad event.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeonload
         */
        UiRemoveOnLoad(callback: (executionContext: any) => void): void;
        /**
         * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed
         * @param saveOption An object for specifying options for saving the record
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOption: SaveOption, successCallback: (executionContext: any) => void, errorCallback?: (error: Error) => void): void;
        /**
         * Saves the record asynchronously and returns a promise
         * @param saveOption An object for specifying options for saving the record
         * @returns Promise that resolves when the save is complete
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOption?: SaveOption): Promise<any>;
        /**
         * Displays form level notifications
         * @param message The text of the message
         * @param level The level of the message, which defines how the message will be displayed
         * @param uniqueId A unique identifier for the message that can be used later with ClearFormNotification to remove the notification
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
         */
        SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;
        /**
         * Sets the name of the entity to be displayed on the form.
         * @param arg Name of the entity to be displayed on the form.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformentityname
         * */
        SetFormEntityName(arg: string): void;
        /**
         *  The Attributes collections of form Account
         *  @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         * */
        readonly Attributes: Collections<any>;
        /**
         * A control represents an HTML element present on the form. Some controls are bound to a specific attribute, whereas others may represent unbound controls such as an IFRAME, Web resource, or a sub grid that has been added to the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        readonly Controls: Collections<any>;
        /**
         * Returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getdataxml
         */
        readonly DataXml: string;
        /**
         * Returns a string representing the GUID value for the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getid
         */
        readonly EntityId: Guid;
        /**
         * Gets a boolean value indicating whether any fields in the form have been modified
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getisdirty
         */
        readonly EntityIsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the entity data is valid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/isvalid
         */
        readonly EntityIsValid: boolean;
        /**
         * Returns a string representing the logical name of the entity for the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityname
         */
        readonly EntityName: string;
        /**
         * Returns a lookup value that references the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityreference
         */
        readonly EntityReference: EntityReference;
        /**
         * Returns the ID of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getid
         */
        readonly FormId: Guid;
        /**
         * Returns the label of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getlabel
         */
        readonly FormLabel: string;
        /**
         * Gets the form type for the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
         */
        readonly FormType: OptionSet.FormType;
        /**
         * Gets a boolean value indicating whether the form data has been modified
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/getisdirty
         */
        readonly DataIsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/isvalid
         */
        readonly DataIsValid: boolean;
        /**
         * Gets a string for the value of the primary attribute of the entity
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
         */
        readonly PrimaryAttributeValue: string;
        /**
         * Gets the height of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportheight
         * */
        readonly ViewPortHeight: number;
        /**
         * Get the width of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportwidth
         * */
        readonly ViewPortWidth: number;
        /**
         * The execution context defines the event context in which your code executes.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/execution-context
         * */
        readonly ExecutionContext: ExecutionContext;
        /**
         * Provides methods to create and manage records using the Web API
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi
         */
        readonly WebApi: WebApi;
        /**
         * Provides methods to interact with Microsoft Copilot Studio topics (Preview feature)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot
         */
        readonly Copilot: Copilot;
        /**
         * Provides methods for managing a single side pane.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-appsidepane
         */
        readonly SidePanes: ISidePanes;
        /** Utility functions/methods/objects for Dynamics 365 form */
        readonly Utility: Utility;
    }
    /**
     * Represents an error dialog displayed to the user
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
     */
    interface DialogError {
        /** Details about the error. When you specify this, the Download Log File button is available in the error message, and clicking it will let users download a text file with the content specified in this attribute */
        details?: string;
        /** The error code. If you just set errorCode, the message for the error code is automatically retrieved from the server and displayed in the error dialog.If you specify an invalid errorCode value, an error dialog with a default error message is displayed */
        errorCode?: number;
        /** The message to be displayed in the error dialog */
        message?: string;
    }
    /**
     * An object that represents a reference to a Dynamics 365 record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
     */
    interface EntityReference {
        /** Entity type of the record */
        entityType: string;
        /** GUID of the record */
        id: Guid;
        /** Name of the record */
        name?: string;
    }
    /**
     * The object passed to the success callback after a quick create form saves a record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    interface OpenQuickCreateSuccessCallbackObject {
        /**
         * A lookup value which identifies the record which has been created.
         */
        savedEntityReference: Array<EntityReference>;
    }
    /**
     * Options for specifying window size
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    interface Window {
        /** Height of the window to display the resultant page in pixels */
        height?: number;
        /** Width of the window to display the resultant page in pixels */
        width?: number;
    }
    /**
     * Options for an alert dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
     */
    interface DialogAlertOption {
        /** The confirm button label.If you do not specify the button label, OK is used as the button label */
        confirmButtonLabel?: string;
        /** The message to be displayed in the alert dialog */
        text: string;
    }
    /**
     * Options for opening a file
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
     */
    interface FileOption {
        openMode: OptionSet.FileOption
    }
    /**
     * Options for a confirm dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
     */
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
    /**
     * Options for file picker
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
    interface FilePickOption {
        /** Image file types to select */
        accept: OptionSet.FileAccept;
        /** Indicates whether to allow selecting multiple files */
        allowMultipleFiles: boolean;
        /** Maximum size of the files(s) to be selected */
        maximumAllowedFileSize: number;
    }
    /**
     * Options for opening a lookup dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
     */
    interface LookupOption {
        /** Indicates whether the lookup allows more than one item to be selected */
        allowMultiSelect?: boolean;
        /** The default entity type to use */
        defaultEntityType?: string;
        /** The default view to use */
        defaultViewId?: Guid;
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
        viewIds?: Array<Guid>;
    }
    /**
     * Page input for navigating to an entity list
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface PageInputEntityList {
        /** Specify "entitylist" */
        pageType: "entitylist";
        /** The logical name of the entity to load in the list control. */
        entityName: string;
        /** The ID of the view to load. If you don't specify it, navigates to the default main view for the entity. */
        viewId?: Guid;
        /**  Type of view to load. Specify "savedquery" or "userquery". */
        viewType?: "savedquery" | "userquery";
    }
    /**
     * Page input for navigating to an HTML web resource
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface PageInputHtmlWebResource {
        /** Specify "webresource" */
        pageType: "webresource";
        /** The name of the web resource to load. */
        webresourceName: string;
        /** The data to pass to the web resource. */
        data?: string;
    }
    /**
     * Relationship information for PageInputEntityRecord
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
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
    /**
     * Page input for navigating to an entity record form
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface PageInputEntityRecord {
        /** Specify "entityrecord" */
        pageType: "entityrecord",
        /** Logical name of the entity to display the form for. */
        entityName: string,
        /** ID of the entity record to display the form for. If you don't specify this value, the form will be opened in create mode. */
        entityId?: Guid,
        /** Designates a record that will provide default values based on mapped attribute values. */
        createFromEntity?: EntityReference,
        /** A dictionary object that passes extra parameters to the form. */
        data?: any,
        /** ID of the form instance to be displayed. */
        formId?: Guid,
        /** Indicates whether the form is navigated to from a different entity using cross-entity business process flow. */
        isCrossEntityNavigate?: boolean,
        /** Indicates whether there are any offline sync errors. */
        isOfflineSyncError?: boolean,
        /** ID of the business process to be displayed on the form. */
        processId?: Guid,
        /** ID of the business process instance to be displayed on the form. */
        processInstanceId?: Guid,
        /** Define a relationship object to display the related records on the form. */
        relationship?: PageInputEntityRecordRelationship,
        /** ID of the selected stage in business process instance. */
        selectedStageId?: string,
        /** Sets the focus on the tab of the form. */
        tabName?: string
    }
    /**
     * Page input for navigating to a dashboard
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface PageInputDashboard {
        /** Specify "dashboard" */
        pageType: "dashboard",
        /** The ID of the dashboard to load. If you don't specify the ID, navigates to the default dashboard. */
        dashboardId: string
    }
    /**
     * Navigation options for navigateTo method
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
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
    /**
     * Represents a size value with unit
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface SizeValue {
        /** The numerical value */
        value: number;
        /** The unit of measurement. Specify "%" or "px". Default value is "px" */
        unit: "%" | "px";
    }
    /**
     * Filter for lookup control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
     */
    interface LookupFilter {
        /** The FetchXML filter element to apply */
        filterXml: string;
        /** The entity type to which to apply this filter */
        entityLogicalName: string
    }
    /**
     * Options for opening a form
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    interface FormOption {
        /** Indicates whether to display the command bar. If you do not specify this parameter, the command bar is displayed by default */
        cmdbar?: boolean;
        /** Designates a record that will provide default values based on mapped attribute values */
        createFromEntity?: EntityReference;
        /** ID of the entity record to display the form for */
        entityId?: Guid;
        /** Logical name of the entity to display the form for */
        entityName?: string;
        /** ID of the form instance to be displayed */
        formId?: Guid;
        /** Height of the form window to be displayed in pixels */
        height?: number;
        /** Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap */
        navbar?: OptionSet.FormNavBar;
        /** Indicates whether to display form in a new window */
        openInNewWindow?: boolean;
        /** Specify one of the following values for the window position of the form on the screen */
        windowPosition?: OptionSet.FormWindowPosition;
        /**  ID of the business process to be displayed on the form */
        processId?: Guid;
        /** ID of the business process instance to be displayed on the form */
        processInstanceId?: Guid;
        /** Define a relationship object to display the related records on the form */
        relationship?: FormRelationship;
        /** ID of the selected stage in business process instance */
        selectedStageId?: string;
        /** Indicates whether to open a quick create form. If you do not specify this, by default false is passed */
        useQuickCreateForm?: boolean;
        /**  Width of the form window to be displayed in pixels */
        width?: number;
        /**  Indicates whether the form is navigated to from a different table using cross-table business process flow. */
        isCrossEntityNavigate?: boolean;
    }
    /**
     * Relationship object for form navigation
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
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
    /**
     * Options for image capture
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
     */
    interface ImageOption {
        /**  Indicates whether to edit the image before saving */
        allowEdit: boolean;
        /** Height of the image to capture */
        height?: number;
        /** Indicates whether to capture image using the front camera of the device */
        preferFrontCamera: boolean;
        /** Quality of the image file in percentage */
        quality: number;
        /** Width of the image to capture */
        width?: number;
    }
    /**
     * Represents position data from device geolocation
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
     */
    interface PositionData {
        /** Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed */
        coords: any;
        /** Represents the time when the object was acquired and is represented as DOMTimeStamp */
        timestamp: any;
    }
    /**
     * Options for the save method
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/save
     */
    interface SaveOption {
        /** Specify a value indicating how the save event was initiated */
        saveMode?: OptionSet.SaveMode;
        /** Indicate whether to use the Book or Reschedule messages rather than the Create or Update messages. This option is only applicable when used with appointment, recurring appointment, or service activity records */
        useSchedulingEngine?: boolean;
    }
    /**
     * Notification to display on a field
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
     */
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
    /**
     * Action for a field notification
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
     */
    interface FieldNotificationAction {
        /** The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience */
        message?: string;
        /** Array of functions. The corresponding actions for the message */
        actions?: Array<any>;
    }
    /**
     * Represents a global notification displayed at the top of the app
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
     */
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
    /**
     * Defines an action button for a global notification
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
     */
    interface GlobalNotificationAction {
        /** The label for the action in the message. */
        actionLabel?: string,
        /** Function reference. The function to execute when the action label is clicked. */
        eventHandler?: string
    }
    /**
     * Provides methods to get or set information about the view selector of the subgrid control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/viewselector
     */
    interface ViewSelector {
        /** Reference to the current view. */
        CurrentView: EntityReference;
        /** Returns a boolean value to indicate whether the view selector is visible */
        readonly Visible: boolean;
    }
    /**
     * Base properties for a side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
     */
    interface ISidePaneBase {
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
    /**
     * Options for creating a new side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
     */
    interface ISidePaneOptions extends ISidePaneBase {
        /** Hides the header pane, including the title and close button. Default value is false. */
        hideHeader?: boolean,
        /** When set to false, the created pane is not selected and leaves the existing pane selected. It also does not expand the pane if collapsed. */
        isSelected?: boolean
    }
    /**
     * Represents a side pane instance with methods to control it
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-appsidepane
     */
    interface ISidePane extends ISidePaneBase {
        /** Closes the side pane and removes it from the side bar. */
        close(): void,
        /** Specify whether the pane should be selected or expanded. */
        select(): void,
        /** Opens a page within the selected pane. This is similar to the navigateTo method. */
        navigate(pageInput: PageInputEntityList | PageInputHtmlWebResource | PageInputEntityRecord | PageInputDashboard, navigationOptions?: NavigationOptions, successCallback?: (result: any) => void, errorCallback?: (error: Error) => void): void,
        badge?: number
    }
    /**
     * Interface for Side Panes API
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes
     */
    interface ISidePanes {
        /**
         * Get/Set the display state of the side panes: 0=Collapsed, 1=Expanded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes#state
         */
        DisplayState: 0 | 1;
        /**
         * Creates a new side pane
         * @param paneOptions Options for creating the pane
         * @param successCallback Function called when the pane is created
         * @param errorCallback Function called when there is an error
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
         */
        Create(paneOptions: ISidePaneOptions, successCallback?: (pane: ISidePane) => void, errorCallback?: (error: Error) => void): Promise<ISidePane> | void;
        /**
         * Gets a pane by ID
         * @param paneId The ID of the pane to get
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/getpane
         */
        Get(paneId: string): ISidePane | undefined;
        /**
         * Gets all panes
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/getallpanes
         */
        GetAll(): Collections<ISidePane>;
        /**
         * Gets the currently selected pane
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/getselectedpane
         */
        GetSelected(): ISidePane | undefined;
    }
}

/** DynamicsCrm.DevKit for namespace OptionSet */
declare namespace OptionSet {
    /**
     * Defines the structural type of a parameter for Xrm.WebApi.online.execute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    enum StructuralProperty {
        /** 0 - Unknown structural type */
        Unknown,
        /** 1 - Primitive type (e.g., string, integer, boolean, guid) */
        PrimitiveType,
        /** 2 - Complex type (structured object) */
        ComplexType,
        /** 3 - Enumeration type */
        EnumerationType,
        /** 4 - Collection (array of items) */
        Collection,
        /** 5 - Entity type (reference to a Dynamics 365 record) */
        EntityType
    }
    /**
     * Specifies the type of Web API operation for Xrm.WebApi.online.execute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    enum OperationType {
        /** 0 - Action (custom or unbound action) */
        Action,
        /** 1 - Function (custom or built-in function) */
        Function,
        /** 2 - CRUD operation (Create, Retrieve, Update, Delete) */
        CRUD
    }
    /**
     * Returns information about the kind of device the user is using
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
     */
    enum FormFactor {
        /** 0 - Unknown device type */
        Unknown,
        /** 1 - Desktop (includes web browser, even from tablet) */
        Desktop,
        /** 2 - Tablet application */
        Tablet,
        /** 3 - Phone application */
        Phone,
    }
    /**
     * Returns a value to indicate the state of the client
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
     */
    enum ClientState {
        /** The client is connected to the server (normal operation) */
        Online,
        /** The client is in offline mode (mobile app with offline sync) */
        Offline,
    }
    /**
     * Returns a value to indicate which client the script is executing in
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
     */
    enum ClientName {
        /** Web browser client */
        Web,
        /** Outlook client (Dynamics 365 for Outlook) */
        Outlook,
        /** Mobile application (phone or tablet app) */
        Mobile
    }
    /**
     * Gets the form type for the record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
     */
    enum FormType {
        /** 0 - Form type is undefined */
        Undefined,
        /** 1 - Create form (Quick Create forms also return 1) */
        Create,
        /** 2 - Update form (editing an existing record) */
        Update,
        /** 3 - Read-only form */
        ReadOnly,
        /** 4 - Disabled form */
        Disabled,
        /** 5 - Bulk edit form */
        BulkEdit,
    }
    /**
     * Specify options for saving the record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/save
     */
    enum SaveOption {
        /** Save and close the form after saving */
        SaveAndClose,
        /** Save and open a new blank form after saving */
        SaveAndNew
    }
    /**
     * Returns a value indicating how the save event was initiated
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
     */
    enum SaveMode {
        /** 1 - Standard save (all entities) */
        Save,
        /** 2 - Save and close (all entities) */
        SaveAndClose,
        /** 5 - Deactivate record (all entities) */
        Deactivate,
        /** 6 - Reactivate record (all entities) */
        Reactivate,
        /** 7 - Send email (Email entity only) */
        Send,
        /** 15 - Disqualify lead (Lead entity only) */
        Disqualify,
        /** 16 - Qualify lead (Lead entity only) */
        Qualify,
        /** 47 - Assign record (User or Team) */
        Assign,
        /** 58 - Save as completed (Activities only) */
        SaveAsCompleted,
        /** 59 - Save and new (all entities) */
        SaveAndNew,
        /** 70 - Auto-save triggered (all entities) */
        AutoSave
    }
    /**
     * The level of form notification message
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
     */
    enum FormNotificationLevel {
        /** Error notification with system error icon (red) */
        Error,
        /** Warning notification with system warning icon (yellow) */
        Warning,
        /** Informational notification with system info icon (blue) */
        Info
    }
    /**
     * Display state of a tab on the form
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getdisplaystate
     */
    enum TabDisplayState {
        /** Tab is expanded showing all sections */
        Expanded,
        /** Tab is collapsed showing only the header */
        Collapsed
    }
    /**
     * The content type of a tab
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getcontenttype
     */
    enum TabContentType {
        /** Default tab behavior with card sections */
        CardSections,
        /** Maximizes the first component in the tab */
        SingleComponent
    }
    /**
     * Display state of the business process flow control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getdisplaystate
     */
    enum ProcessDisplayState {
        /** Process control is fully expanded */
        Expanded,
        /** Process control is collapsed to a bar */
        Collapsed,
        /** Process control is floating on the form */
        Floating
    }
    /**
     * Returns the type of attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
     */
    enum FieldAttributeType {
        /** boolean - True/False attribute */
        Boolean,
        /** datetime - Date and time attribute */
        DateTime,
        /** decimal - Decimal number attribute */
        Decimal,
        /** double - Floating point number attribute */
        Double,
        /** integer - Whole number attribute */
        Integer,
        /** lookup - Lookup/reference to another record */
        Lookup,
        /** memo - Multi-line text attribute */
        Memo,
        /** money - Currency attribute */
        Money,
        /** multiselectoptionset - Multi-select option set attribute */
        MultiOptionSet,
        /** optionset - Single-select option set attribute */
        OptionSet,
        /** string - Single-line text attribute */
        String
    }
    /**
     * Returns formatting options for the attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getformat
     */
    enum FieldFormat {
        /** No format specified */
        Null,
        /** Date only (no time component) */
        Date,
        /** Date and time */
        DateTime,
        /** Duration in minutes */
        Duration,
        /** Email address format */
        Email,
        /** Language code format */
        Language,
        /** No specific format */
        None,
        /** Multi-line text area */
        TextArea,
        /** Single-line text */
        Text,
        /** Stock ticker symbol */
        TickerSymbol,
        /** Phone number format */
        Phone,
        /** Time zone format */
        TimeZone,
        /** URL/web address format */
        Url
    }
    /**
     * Value indicating whether a field value is required
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
     */
    enum FieldRequiredLevel {
        /** Field is optional */
        None,
        /** Field is required - form cannot be saved without a value */
        Required,
        /** Field is recommended - shows indicator but allows save */
        Recommended
    }
    /**
     * Controls when field data is submitted on save
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
     */
    enum FieldSubmitMode {
        /** Data is always sent with a save, even if unchanged */
        Always,
        /** Data is never sent with a save (field becomes read-only) */
        Never,
        /** Default - Data is only sent when it has changed */
        Dirty
    }
    /**
     * Categorizes the type of control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
     */
    enum FieldControlType {
        /** A standard data-bound control */
        Standard,
        /** An IFRAME control for embedding external content */
        Iframe,
        /** A knowledge base search control */
        KbSearch,
        /** A lookup control for selecting related records */
        Lookup,
        /** A multi-select option set control */
        MultiSelectOptionset,
        /** A notes/timeline control for activities */
        Notes,
        /** A single-select option set control */
        OptionSet,
        /** A quick view form control */
        QuickForm,
        /** A subgrid control for displaying related records */
        SubGrid,
        /** A timer control for SLA tracking */
        TimerControl,
        /** A timeline wall control (Unified Interface) */
        TimelineWall,
        /** A web resource control */
        WebResource
    }
    /**
     * The type of field notification
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
     */
    enum FieldNotificationLevel {
        /** Error notification - prevents save until resolved */
        Error,
        /** Recommendation notification - allows save but suggests action */
        Recommendation
    }
    /**
     * The integer value of the business process flow category for a stage
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getcategory
     */
    enum ProcessCategory {
        /** 0 - Qualify stage (typically for Lead entity) */
        Qualify,
        /** 1 - Develop stage (sales process development phase) */
        Develop,
        /** 2 - Propose stage (proposal phase in sales) */
        Propose,
        /** 3 - Close stage (closing phase in sales) */
        Close,
        /** 4 - Identify stage (service/case identification) */
        Identify,
        /** 5 - Research stage (service/case research) */
        Research,
        /** 6 - Resolve stage (service/case resolution) */
        Resolve
    }
    /**
     * Returns the current status of the process instance.
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getstatus
     */
    enum ProcessStatus {
        /** Stage is currently active */
        Active,
        /** Stage was aborted */
        Aborted,
        /** Stage has been completed */
        Finished
    }
    /**
     * Returns the status of the stage.
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getstatus
     */
    enum ProcessStageStatus {
        /** Stage is currently active */
        Active,
        /** Stage is currently inactive */
        Inactive
    }
    /**
     * The progress of an action step in a business process flow
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
     */
    enum ProcessProgress {
        /** 0 - No progress set */
        None,
        /** 1 - Action step is in progress */
        Processing,
        /** 2 - Action step completed successfully */
        Completed,
        /** 3 - Action step failed */
        Failure,
        /** 4 - Action step is invalid */
        Invalid
    }
    /**
     * The state of a timer control (SLA timers) - Unified Interface only
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getstate
     */
    enum TimerState {
        /** 1 - Timer state not set */
        NotSet,
        /** 2 - Timer is currently running */
        InProgress,
        /** 3 - Timer is in warning state (near expiration) */
        Warning,
        /** 4 - Timer has been violated (exceeded limit) */
        Violated,
        /** 5 - Timer completed successfully */
        Success,
        /** 6 - Timer has expired */
        Expired,
        /** 7 - Timer was canceled */
        Canceled,
        /** 8 - Timer is paused */
        Paused
    }
    /**
     * Advanced configuration settings for the organization
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
     */
    enum AdvancedConfigSetting {
        /** Maximum number of child cases allowed for a parent case */
        MaxChildIncidentNumber,
        /** Maximum number of cases that can be merged */
        MaxIncidentMergeNumber
    }
    /**
     * Describes whether to open or save a file
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
     */
    enum FileOption {
        /** 1 - Open the file in a new browser tab */
        Open,
        /** 2 - Download/save the file */
        Save
    }
    /**
     * Describes the type of privilege for security operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    enum PrivilegeType {
        /** 0 - No privilege assigned */
        None,
        /** 1 - Create privilege - can create new records */
        Create,
        /** 2 - Read privilege - can view records */
        Read,
        /** 3 - Write privilege - can update records */
        Write,
        /** 4 - Delete privilege - can delete records */
        Delete,
        /** 5 - Assign privilege - can assign records to other users/teams */
        Assign,
        /** 6 - Share privilege - can share records with other users/teams */
        Share,
        /** 7 - Append privilege - can attach to this entity */
        Append,
        /** 8 - AppendTo privilege - can attach other entities to this */
        AppendTo
    }
    /**
     * Controls whether the navigation bar is displayed
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    enum FormNavBar {
        /** "on" - The navigation bar is displayed. This is the default behavior if the navbar parameter is not used. */
        On,
        /** "off" - The navigation bar is not displayed. People can navigate using other user interface elements or the back and forward buttons. */
        Off,
        /** "entity" - On an entity form, only the navigation options for related entities are available. After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record. */
        Entity
    }
    /**
     * Specifies the position of a form window
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    enum FormWindowPosition {
        /** 1 - Open the form in the center of the screen */
        Center,
        /** 2 - Open the form on the side (as a side panel) */
        Side
    }
    /**
     * Specifies the type of entity relationship
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    enum FormRelationshipType {
        /** 0 - One-to-Many relationship */
        OneToMany,
        /** 1 - Many-to-Many relationship */
        ManyToMany
    }
    /**
     * Specifies the role type in a relationship
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    enum FormRelationshipRoleType {
        /** 1 - Referencing entity (the "many" side of 1:N) */
        Referencing,
        /** 2 - Association entity (for N:N relationships) */
        AssociationEntity
    }
    /**
     * Specifies the accepted file types for file picker
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
    enum FileAccept {
        /** Audio files (mp3, wav, etc.) */
        Audio,
        /** Video files (mp4, avi, etc.) */
        Video,
        /** Image files (jpg, png, gif, etc.) */
        Image
    }
    /**
     * Specifies the type of grid control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
     */
    enum GridType {
        /** 1 - HomePageGrid (main entity list view) */
        HomePageGrid,
        /** 2 - Subgrid (embedded grid on a form) */
        Subgrid
    }
    /**
     * Display state of the side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes/state
     */
    enum SidePaneState {
        /** Side pane is fully expanded and visible */
        Expanded,
        /** Side pane is collapsed to a bar */
        Collapsed
    }
    /**
     * The full name conventionCode setting of the current organization
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#fullnameconventioncode
     */
    enum FullNameConventionCode {
        /** 0 - Last Name, First Name (e.g., "Smith, John") */
        LastName_Comma_FirstName,
        /** 1 - First Name Last Name (e.g., "John Smith") */
        FirstName_LastName,
        /** 2 - Last Name, First Name Middle Initial (e.g., "Smith, John A.") */
        LastName_Comma_FirstName_MiddleInitial,
        /** 3 - First Name Middle Initial Last Name (e.g., "John A. Smith") */
        FirstName_MiddleInitial_LastName,
        /** 4 - Last Name, First Name Middle Name (e.g., "Smith, John Andrew") */
        LastName_Comma_FirstName_MiddleName,
        /** 5 - First Name Middle Name Last Name (e.g., "John Andrew Smith") */
        FirstName_MiddleName_LastName,
        /** 6 - Last Name First Name (e.g., "SmithJohn") */
        LastName_FirstName,
        /** 7 - Last Name First Name (no space, e.g., "SmithJohn") */
        LastNameFirstName
    }
}
