// -----------------------------------------------------------------------------------
// --------------------------- SOURCE OF TRUTH ---------------------------------------
// -----------------------------------------------------------------------------------
// This file is a Source of Truth for the DynamicsCrm.DevKit project.
// This is devkit.d.ts for devkit.ts
// Do not edit without considering the impact on the entire toolkit.
// -----------------------------------------------------------------------------------
/**
 * DynamicsCrm.DevKit TypeScript Definitions
 *
 * @version 4.0
 * @link https://github.com/phuocle/Dynamics-Crm-DevKit
 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference
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
     * Execution context interface for form event handlers.
     * The execution context defines the event context in which your code executes.
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/execution-context
     */
    interface IExecutionContext {
        /**
         * Returns a value that indicates the order in which this handler is executed.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/getdepth
         */
        readonly Depth: number;

        /**
         * Returns an object with the Id, Name, and EntityType of the saved entity.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getentityreference
         */
        readonly EntityReference: any;

        /**
         * Returns an object that contains methods to manage the save event.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/geteventargs
         */
        readonly EventArgs: any;

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
         * Returns a boolean value indicating if the save operation was successful.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getissavesuccess
         */
        readonly IsSaveSuccess: boolean;

        /**
         * Returns the error information if the save operation failed.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsaveerrorinfo
         */
        readonly SaveErrorInfo: any;

        /**
         * Returns a value indicating how the save event was initiated by the user.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
         */
        readonly SaveMode: number;

        /**
         * Disables the asynchronous timeout for the OnSave event handler.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/disableasynctimeout
         */
        DisableAsyncTimeout(): void;

        /**
         * Gets a variable set using setSharedVariable.
         * @param key The name of the shared variable.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/getsharedvariable
         */
        GetSharedVariable(key: string): any;

        /**
         * Returns a value indicating whether the default behavior has been prevented.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/isdefaultprevented
         */
        IsDefaultPrevented(): boolean;

        /**
         * Returns a value indicating whether the form data is loading for the first time.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments#getdataloadstate
         */
        IsInitialLoad(): boolean;

        /**
         * Cancels the save operation but leaves the form open.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault
         */
        SetPreventDefault(): void;

        /**
         * Cancels the save operation and prevents the error dialog from appearing.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefaultonerror
         */
        SetPreventDefaultOnError(): void;

        /**
         * Sets a variable that can be accessed by other handlers.
         * @param key The name of the shared variable.
         * @param value The value to set.
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/executioncontext/setsharedvariable
         */
        SetSharedVariable(key: string, value: any): void;
    }

    /**
     * Notification object for AddNotification method
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
     */
    interface FieldNotification {
        /** Array of strings. The message to display in the notification */
        messages: string[];
        /** Notification level: ERROR or RECOMMENDATION */
        notificationLevel?: OptionSet.FieldNotificationLevel;
        /** Unique identifier for the notification which can be used to clear this notification */
        uniqueId: string;
        /** Optional actions for the notification */
        actions?: {
            /** Message to display for the action */
            message?: string;
            /** Array of functions to execute when the action is clicked */
            actions: Function[];
        }[];
    }

    namespace Controls {
        /**
         * Base interface for all field controls
         */
        interface IControl {
            /**
             * Sets a function to be called when the OnChange event occurs
             * @param callback The function to be executed on the OnChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/addonchange
             */
            AddOnChange(callback: (executionContext: any) => void): void;

            /**
             * Removes a function from the OnChange event handler for an attribute
             * @param callback Specifies the function to be removed from the OnChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/removeonchange
             */
            RemoveOnChange(callback: (executionContext: any) => void): void;

            /**
             * Adds an event handler to the OnOutputChange event for modern controls
             * @param callback The function to be executed on the OnOutputChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonoutputchange
             */
            AddOnOutputChange(callback: (executionContext: any) => void): void;

            /**
             * Removes an event handler from the OnOutputChange event
             * @param callback Specifies the function to be removed from the OnOutputChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removeonoutputchange
             */
            RemoveOnOutputChange(callback: (executionContext: any) => void): void;

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
             * Remove a message already displayed for a control
             * @param uniqueId The ID to use to clear a specific message that was set using setNotification or addNotification
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
             */
            ClearNotification(uniqueId: string): boolean;

            /**
             * Displays an error message for the control to indicate that data isn't valid
             * @param message The message to display
             * @param uniqueId The ID to use to clear this message when using the clearNotification method
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
             */
            SetNotification(message: string, uniqueId?: string): boolean;

            /**
             * Displays a notification for a control with actions
             * @param notification The notification object with messages, level, uniqueId, and optional actions
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
             */
            AddNotification(notification: FieldNotification): void;

            /**
             * Sets a value for an attribute to determine whether it is valid or invalid with a message
             * @param valid Specify false to set the attribute value to invalid and true to set the value to valid
             * @param message The message to display
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setisvalid
             */
            SetIsValid(valid: boolean, message?: string): void;

            /**
             * Returns the attribute that the control is bound to
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getattribute
             */
            readonly Attribute: any;

            /**
             * Returns a string representing the logical name of the attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getname
             */
            readonly AttributeName: string;

            /**
             * Returns a string value that represents the type of attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
             */
            readonly AttributeType: OptionSet.FieldAttributeType;

            /**
             * Returns the name assigned to the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;

            /**
             * Returns a string value that represents the type of control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: OptionSet.FieldControlType;

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
             * Returns a boolean value to indicate whether the value of an attribute is valid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/isvalid
             */
            readonly IsValid: boolean;

            /**
             * Get/Set a value indicating whether a value for the attribute is required or recommended
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
             */
            RequiredLevel: OptionSet.FieldRequiredLevel;

            /**
             * Get/Set a value indicating when data from the attribute will be submitted when the record is saved
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

            /**
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: any;
        }

        /**
         * Base interface for text controls (String, Memo)
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
            Value: string | null;
        }

        /**
         * Base interface for numeric controls (Integer, Decimal, Double, Money)
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
             * Get/Set the data value for an attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
        }

        /**
         * Interface for String controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface String extends IControlText {
        }

        /**
         * Interface for Memo (multiline text) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Memo extends IControlText {
        }

        /**
         * Interface for Integer controls (no Precision support)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Integer extends IControlNumber {
        }

        /**
         * Interface for Decimal controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Decimal extends IControlNumber {
            /**
             * Get/Set the number of digits allowed to the right of the decimal point
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setprecision
             */
            Precision: number;
        }

        /**
         * Interface for Double (floating point) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Double extends IControlNumber {
            /**
             * Get/Set the number of digits allowed to the right of the decimal point
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setprecision
             */
            Precision: number;
        }

        /**
         * Interface for Money controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Money extends IControlNumber {
            /**
             * Get/Set the number of digits allowed to the right of the decimal point
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getprecision
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setprecision
             */
            Precision: number;
        }

        /**
         * Interface for Boolean controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface Boolean extends IControl {
            /**
             * Returns a value that represents the value set for a Boolean attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: boolean;

            /**
             * Get/Set the data value for a boolean attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: boolean | null;
        }

        /**
         * Option object for OptionSet
         */
        interface OptionSetOption {
            /** The label/text of the option */
            text: string;
            /** The value of the option */
            value: number;
        }

        /**
         * Base interface for optionset controls (OptionSet, MultiOptionSet)
         */
        interface IControlOptionSet extends IControl {
            /**
             * Returns an option object with the value matching the argument passed to the method
             * @param value The enumeration value of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             * @remarks Note: Despite MS documentation, only number values are supported. String/label lookup throws 'Value should be of type: number' error.
             */
            Option(value: number): OptionSetOption;

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
            readonly Options: OptionSetOption[];

            /**
             * Returns an array of option objects representing the options available in the control (includes dynamically added options via AddOption)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getoptions
             */
            readonly ControlOptions: OptionSetOption[];
        }

        /**
         * Interface for OptionSet controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface OptionSet extends IControlOptionSet {
            /**
             * Returns a value that represents the value set for an OptionSet attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number;

            /**
             * Returns the option object that is selected in an optionset attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: OptionSetOption | null;

            /**
             * Returns a string value of the text for the currently selected option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/gettext
             */
            readonly Text: string;

            /**
             * Get/Set the data value for an optionset attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
        }

        /**
         * Interface for MultiOptionSet controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface MultiOptionSet extends IControlOptionSet {
            /**
             * Returns a value that represents the values set for a MultiOptionSet attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number[];

            /**
             * Returns the option objects that are selected in a multiselectoptionset attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
             */
            readonly SelectedOption: OptionSetOption[];

            /**
             * Returns an array of string values of the text for the currently selected options
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/gettext
             */
            readonly Text: string[];

            /**
             * Get/Set the data values for a multiselectoptionset attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number[] | null;
        }

        /**
         * Interface for Lookup controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Lookup extends IControl {
            /**
             * Adds filters to the results displayed in the lookup
             * @param filter The fetchXml filter element to apply
             * @param entityLogicaName If this is set, the filter only applies to that entity type
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomfilter
             */
            AddCustomFilter(filter: string, entityLogicaName?: string): void;

            /**
             * Adds a new view for the lookup dialog box
             * @param viewId The string representation of a GUID for a view
             * @param entityName The name of the entity
             * @param viewDisplayName The name of the view
             * @param fetchXml The fetchXml query for the view
             * @param layoutXml The XML that defines the layout of the view
             * @param isDefault Indicates whether the view should be the default view
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomview
             */
            AddCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;

            /**
             * Applies changes to lookups based on values current just as the user is about to view results for the lookup
             * @param callback The function that will be run just before the search to provide results for a lookup occurs
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addpresearch
             */
            AddPreSearch(callback: (executionContext: any) => void): void;

            /**
             * Removes event handler functions that have previously been set for the PreSearch event
             * @param callback The function to remove
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removepresearch
             */
            RemovePreSearch(callback: (executionContext: any) => void): void;

            /**
             * Adds an event handler to the OnLookupTagClick event
             * @param callback The function to add to the OnLookupTagClick event
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
             * Returns a Boolean value indicating whether the lookup represents a partylist lookup
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getispartylist
             */
            readonly IsPartyList: boolean;

            /**
             * Get/Set the ID value of the default lookup dialog view
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdefaultview
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdefaultview
             */
            DefaultView: string;

            /**
             * Get/Set the types of entities allowed in the lookup control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getentitytypes
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setentitytypes
             */
            EntityTypes: string[];

            /**
             * Get/Set the data value for a lookup attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: EntityReference[] | null;
        }

        /**
         * Interface for DateTime controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface DateTime extends IControl {
            /**
             * Get/Set whether a date control shows the time portion of the date
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getshowtime
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setshowtime
             */
            ShowTime: boolean;

            /**
             * Get/Set the data value for a datetime attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Date | null;
        }

        /**
         * Interface for DateOnly controls (without time)
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        interface DateOnly extends IControl {
            /**
             * Get/Set the data value for a date attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: Date | null;
        }


        /**
         * Interface for EmailEngagement controls
         * Used for email engagement actions control on Email forms
         */
        interface EmailEngagement {
            /** Get/Set a value that indicates whether the control is currently visible */
            Visible: boolean;
        }

        /**
         * Interface for EmailRecipient controls
         * Used for email recipient activity control on Email forms
         */
        interface EmailRecipient {
            /** Get/Set a value that indicates whether the control is currently visible */
            Visible: boolean;
        }

        /**
         * Interface for WebResource controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface WebResource {
            /**
             * Returns the content window that represents a web resource
             * @param successCallback A function to call when operation is executed successfully
             * @param errorCallback A function to call when the operation fails
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(successCallback: (contentWindow: any) => void, errorCallback?: (error: Error) => void): void;

            /**
             * Returns the content window that represents a web resource as a promise
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(): Promise<any>;

            /**
             * Returns the object in the form that represents the web resource (the IFrame element)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
             */
            readonly Object: any;

            /**
             * Get/Set the current URL being displayed in the web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }

        /**
         * Interface for IFrame controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface IFrame {
            /**
             * Returns the content window that represents an IFRAME
             * @param successCallback A function to call when operation is executed successfully
             * @param errorCallback A function to call when the operation fails
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(successCallback: (contentWindow: any) => void, errorCallback?: (error: Error) => void): void;

            /**
             * Returns the content window that represents an IFRAME as a promise
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(): Promise<any>;

            /**
             * Returns the default URL that an IFRAME control is configured to display
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getinitialurl
             */
            readonly InitialUrl: string;

            /**
             * Returns the object in the form that represents the IFRAME element
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
             */
            readonly Object: any;

            /**
             * Get/Set the current URL being displayed in the IFRAME
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }

        /**
         * Interface for Tab controls
         */
        interface ITab {
            /**
             * Adds a function to be called when the TabStateChange event occurs
             * @param callback The function to be executed on the TabStateChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/addtabstatechange
             */
            AddTabStateChange(callback: (executionContext: any) => void): void;

            /**
             * Removes a function to be called when the TabStateChange event occurs
             * @param callback The function to be removed from the TabStateChange event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/removetabstatechange
             */
            RemoveTabStateChange(callback: (executionContext: any) => void): void;

            /**
             * Sets the focus on the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setfocus
             */
            Focus(): void;

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
             * Get/Set the content type of the tab
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getcontenttype
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setcontenttype
             */
            ContentType: OptionSet.TabContentType;
        }

        /**
         * Interface for Section controls
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
             * Get the controls within the section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-sections
             */
            readonly Controls: Collections<IControl>;

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
        }

        /**
         * Interface for Navigation Item controls
         */
        interface NavigationItem {
            /**
             * Sets the focus on the navigation item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setfocus
             */
            Focus(): void;

            /**
             * Get the ID of the navigation item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getid
             */
            readonly Id: string;

            /**
             * Get/Set the label for the navigation item
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setlabel
             */
            Label: string;

            /**
             * Get/Set a value that indicates whether the navigation item is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation/setvisible
             */
            Visible: boolean;
        }

        /**
         * Interface for a Grid Column in an editable grid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridattribute
         */
        interface GridColumn {
            /** Get the label for the column */
            readonly Label: string;
            /** Get the logical name of the column */
            readonly Name: string;
            /** Get/Set whether the column is disabled */
            Disabled: boolean;
            /** Get/Set the required level of the column */
            RequiredLevel: string;
            /** Get/Set the value of the column */
            Value: any;
            /** Clear a notification for the column */
            ClearNotification(uniqueId: string): boolean;
            /** Set a notification for the column */
            SetNotification(message: string, uniqueId: string): boolean;
        }

        /**
         * Interface for a Grid Row
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridrow
         */
        interface GridRow {
            /** Collection of columns in the row */
            readonly Columns: Collections<GridColumn>;
            /** Get the GUID of the record */
            readonly EntityId: string;
            /** Get the logical name of the entity */
            readonly EntityName: string;
            /** Get the entity reference */
            readonly EntityReference: { entityType: string; id: string; name: string };
            /** Get the value of the primary attribute */
            readonly PrimaryAttributeValue: string;
        }

        /**
         * Interface for Grid View Selector
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/viewselector
         */
        interface ViewSelector {
            /** Get whether the view selector is visible */
            readonly Visible: boolean;
            /** Get/Set the current view */
            CurrentView: { entityType: string; id: string; name: string };
        }

        /**
         * Interface for Grid controls
         */
        interface Grid {
            /**
             * Adds an event handler to the OnLoad event
             * @param callback The function to be executed on the OnLoad event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/addonload
             */
            AddOnLoad(callback: (executionContext: any) => void): void;

            /**
             * Removes an event handler from the OnLoad event
             * @param callback The function to be removed from the OnLoad event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/removeonload
             */
            RemoveOnLoad(callback: (executionContext: any) => void): void;

            /**
             * Opens the related grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/openrelatedgrid
             */
            OpenRelatedGrid(): void;

            /**
             * Refreshes the data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refresh
             */
            Refresh(): void;

            /**
             * Refreshes the ribbon
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refreshribbon
             */
            RefreshRibbon(): void;

            /**
             * Returns the URL for the current grid
             * @param client 1=Web, 2=Outlook
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/geturl
             */
            Url(client?: number): string;

            /**
             * Get the logical name of the entity data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getentityname
             */
            readonly EntityName: string;

            /**
             * Get the FetchXML query that represents the current data in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getfetchxml
             */
            readonly FetchXml: string;

            /**
             * Get the grid type: 1=HomePageGrid, 2=Subgrid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
             */
            readonly GridType: OptionSet.GridType;

            /**
             * Get the relationship information for the subgrid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getrelationship
             */
            readonly Relationship: { name: string; navigationPropertyName: string; relationshipType: OptionSet.FormRelationshipType; roleType: OptionSet.FormRelationshipRoleType };

            /**
             * Collection of rows in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/getrows
             */
            readonly Rows: Collections<GridRow>;

            /**
             * Collection of selected rows in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/getselectedrows
             */
            readonly SelectedRows: Collections<GridRow>;

            /**
             * Get the total record count (limited to 5000)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/grid/gettotalrecordcount
             */
            readonly TotalRecordCount: number;

            /**
             * Get the view selector for the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getviewselector
             */
            readonly ViewSelector: ViewSelector;

            /**
             * Get/Set a value that indicates whether the grid is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;

            // Additional subgrid control properties

            /**
             * Returns the control type (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: string;

            /**
             * Returns the name of the control (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;

            /**
             * Returns the parent section containing the control (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getparent
             */
            readonly ControlParent: any;

            /**
             * Get/Set whether the control is disabled (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdisabled
             */
            Disabled: boolean;

            /**
             * Get/Set the label of the control (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setlabel
             */
            Label: string;

            /**
             * Sets focus on the control (for subgrids)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setfocus
             */
            Focus(): void;
        }

        /**
         * Interface for QuickView controls
         */
        interface IQuickView {
            /**
             * Gets the controls on a form or control on form by passing an argument
             * @param arg The name or index of the constituent control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
             */
            Controls(arg: string | number): any;
            /**
             * Gets all controls in the quick view form as a collection
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
             */
            Controls(): Collections<IControl>;

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
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontroltype
             */
            readonly ControlType: string;

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
             * Get/Set a boolean value indicating whether the control is disabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getdisabled
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setdisabled
             */
            Disabled: boolean;

            /**
             * Get/Set the label for the quick view control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getlabel
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setlabel
             */
            Label: string;

            /**
             * Get/Set a value that indicates whether the quick view control is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible
             */
            Visible: boolean;
        }

        /**
         * Interface for QuickView field controls (read-only fields in quick view forms)
         */
        interface QuickView {
            /** Returns the value for the control */
            readonly Value: any;
            /** Get/Set the visibility of the control */
            Visible: boolean;
            /** Get/Set the label for the control */
            Label: string;
        }

        /**
         * Dialog namespace for Dialog form field types
         * These types are specific to quick create dialogs and other dialog forms
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        namespace Dialog {
            /**
             * Base interface for dialog controls providing basic UI properties
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IDialogControlBase {
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
             * Interface for dialog controls with change event and validation support
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControl extends IDialogControlBase {
                /**
                 * Sets a function to be called when the OnChange event occurs
                 * @param callback The function to be executed on the OnChange event
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/addonchange
                 */
                AddOnChange(callback: (executionContext: any) => void): void;
                /**
                 * Removes a function from the OnChange event handler for an attribute
                 * @param callback Specifies the function to be removed from the OnChange event
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/removeonchange
                 */
                RemoveOnChange(callback: (executionContext: any) => void): void;
                /**
                 * Causes the OnChange event to occur on the attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/fireonchange
                 */
                FireOnChange(): void;
                /**
                 * Displays an error message for the control
                 * @param message The message to display
                 * @param uniqueId The ID to use to clear this message when using clearNotification
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
                 */
                SetNotification(message: string, uniqueId?: string): boolean;
                /**
                 * Remove a message already displayed for a control
                 * @param uniqueId The ID to use to clear a specific message
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
                 */
                ClearNotification(uniqueId: string): boolean;
                /**
                 * Get/Set a value indicating whether a value for the attribute is required
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel
                 */
                RequiredLevel: OptionSet.FieldRequiredLevel;
                /**
                 * Returns a Boolean value indicating if there are unsaved changes to the attribute value
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getisdirty
                 */
                readonly IsDirty: boolean;
                /**
                 * Returns a boolean value to indicate whether the value of an attribute is valid
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/isvalid
                 */
                readonly IsValid: boolean;
            }

            /**
             * Interface for dialog text controls (String, Memo)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControlText extends IControl {
                /**
                 * Returns a number indicating the maximum length of a string or memo attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
                 */
                readonly MaxLength: number;
                /**
                 * Get/Set the data value for the text attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: string;
            }

            /**
             * Interface for dialog numeric controls (Integer, Decimal, Double, Money)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
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
                 * Get/Set the data value for the numeric attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: number;
            }

            /**
             * Base interface for dialog select controls with initial value
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControlSelectBase extends IControl {
                /**
                 * Returns a value that represents the value set when the form is opened
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
                 */
                readonly InitialValue: number;
            }

            /**
             * Interface for dialog select controls with option management
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface IControlSelect extends IControlSelectBase {
                /**
                 * Adds an option to a control
                 * @param text The label for the option
                 * @param value The value for the option
                 * @param index The index position to place the new option in
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
                 * Returns an array of option objects representing the options available in the control
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getoptions
                 */
                readonly ControlOptions: Array<TextValueNumber>;
                /**
                 * Returns a string value of the text for the currently selected option
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/gettext
                 */
                readonly Text: string;
            }

            /**
             * Represents an option in an option set with text and numeric value
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoptions
             */
            interface TextValueNumber {
                /** The label/text of the option */
                readonly text: string;
                /** The numeric value of the option */
                readonly value: number;
            }

            /**
             * Interface for dialog String controls (single-line text)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface String extends IControlText {
            }

            /**
             * Interface for dialog Memo controls (multi-line text)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Memo extends IControlText {
            }

            /**
             * Interface for dialog Integer controls (whole number)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Integer extends IControlNumber {
            }

            /**
             * Interface for dialog Decimal controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Decimal extends IControlNumber {
            }

            /**
             * Interface for dialog Double controls (floating point)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Double extends IControlNumber {
            }

            /**
             * Interface for dialog Money controls (currency)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Money extends IControlNumber {
            }

            /**
             * Interface for dialog Button controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Button extends IDialogControlBase {
            }

            /**
             * Interface for dialog Label controls (read-only display)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Label extends IDialogControlBase {
            }

            /**
             * Interface for dialog Boolean controls (Yes/No, True/False)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Boolean extends IControlSelectBase {
                /**
                 * Get/Set the data value for the boolean attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: boolean;
            }

            /**
             * Interface for dialog OptionSet controls (single-select picklist)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface OptionSet extends IControlSelect {
                /**
                 * Returns the option object that is selected in an optionset attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getselectedoption
                 */
                readonly SelectedOption: TextValueNumber;
                /**
                 * Get/Set the data value for the optionset attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: number;
            }

            /**
             * Interface for dialog MultiOptionSet controls (multi-select picklist)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface MultiOptionSet extends IControlSelect {
                /**
                 * Get/Set the data values for the multiselectoptionset attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: Array<number>;
            }

            /**
             * Interface for dialog Lookup controls
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Lookup extends IControl {
                /**
                 * Adds filters to the results displayed in the lookup
                 * @param filter The fetchXml filter element to apply
                 * @param entityLogicaName If this is set, the filter only applies to that entity type
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addcustomfilter
                 */
                AddCustomFilter(filter: string, entityLogicaName?: string): void;
                /**
                 * Adds a new view for the lookup dialog box
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
                 * Applies changes to lookups based on values current just as the user is about to view results
                 * @param callback The function that will be run just before the search to provide results
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addpresearch
                 */
                AddPreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Removes event handler functions that have previously been set for the PreSearch event
                 * @param callback The function to remove
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/removepresearch
                 */
                RemovePreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Adds an event handler to the OnLookupTagClick event
                 * @param callback The function to add to the OnLookupTagClick event
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
                 * Get/Set the data value for the lookup attribute
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
             * Interface for dialog DateTime controls
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
                 * Get/Set the data value for the datetime attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: any;
            }

            /**
             * Interface for dialog Date controls (date only, no time)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Date extends IControl {
                /**
                 * Get/Set the data value for the date attribute
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
                 * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
                 */
                Value: any;
            }
        }

        /**
         * Interface for Business Process Flow (BPF) controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process
         */
        interface IProcess {
            /**
             * Adds a function as an event handler for the OnPreProcessStatusChange event
             * @param callback The function to be executed when the business process flow status changes
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
             * Adds a function as an event handler for the OnPreStageChange event
             * @param callback The function that runs before the business process flow stage changes
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
             * Adds a function as an event handler for the OnProcessStatusChange event
             * @param callback The function to be executed when the business process flow status changes
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
             * Adds a function as an event handler for the OnStageChange event
             * @param callback The function to be executed when the business process flow stage changes
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
             * Adds a function as an event handler for the OnStageSelected event
             * @param callback The function to be executed when the business process flow stage is selected
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
             * @param callback The callback function that receives an array of enabled processes
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getenabledprocesses
             */
            EnabledProcesses(callback: (processes: Array<ProcessEnabled>) => void): void;
            /**
             * Returns all the process instances for the entity record that the calling user has access to
             * @param callback The callback function that receives an array of process instances
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
             */
            ProcessInstances(callback: (processes: Array<ProcessInstance>) => void): void;
            /**
             * Sets a completed stage as the active stage
             * @param stageId The ID of the completed stage for the entity to make the active stage
             * @param callback A function to call when the operation is complete
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/setactivestage
             */
            SetActiveStage(stageId: string, callback: (result: "success" | "invalid" | "unreachable" | "dirtyForm" | "preventDefault") => void): void;
            /**
             * Progresses to the next stage
             * @param callback A function to call when the operation is complete
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/navigation/movenext
             */
            MoveNext(callback: (result: "success" | "crossEntity" | "end" | "invalid" | "dirtyForm") => void): void;
            /**
             * Moves to the previous stage
             * @param callback A function to call when the operation is complete
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
             * Sets a Process as the active process
             * @param processId The Id of the process to set as the active process
             * @param callback A function to call when the operation is complete
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
             */
            SetActiveProcess(processId: Guid, callback: (result: "success" | "invalid") => void): void;
            /**
             * Reflows the UI of the business process control
             * @param updateUi Specify true to update the UI of the process control
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
             * Returns the unique identifier of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstanceid
             */
            readonly InstanceId: Guid;
            /**
             * Returns the name of the process instance
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstancename
             */
            readonly InstanceName: string;
            /**
             * Gets a collection of stages currently in the active path
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
         * Interface for Header controls

         */
        interface IHeader {
            /**
             * Get/Set the visibility of header body
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
         * Interface for ActionCards control
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface ActionCards {
            /**
             * Refreshes the action cards
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;
        }

        /**
         * Interface for Map control
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Map {
            /**
             * Get/Set a value that indicates whether the map control is visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;
        }

        /**
         * Interface for Note control
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Note {
            /**
             * Get/Set a value that indicates whether the note control is visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setvisible
             */
            Visible: boolean;
        }

        /**
         * Interface for WebResource controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface WebResource extends IControl {
            /**
             * Returns the content window that represents a web resource
             * @param successCallback A function to call when operation is executed successfully
             * @param errorCallback A function to call when the operation fails
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: IXrmError) => void): void;

            /**
             * Returns the object in the form that represents a web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
             */
            readonly Object: any;

            /**
             * Get/Set the value of the data query string parameter passed to a web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getdata
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setdata
             */
            Data: string;

            /**
             * Get/Set the current URL being displayed in a web resource
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }

        /**
         * Interface for IFrame controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface IFrame extends IControl {
            /**
             * Returns the content window that represents an IFRAME
             * @param successCallback A function to call when operation is executed successfully
             * @param errorCallback A function to call when the operation fails
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
             */
            ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: IXrmError) => void): void;

            /**
             * Returns the default URL that an IFRAME control is configured to display
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getinitialurl
             */
            readonly InitialUrl: string;

            /**
             * Returns the object in the form that represents an IFRAME
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getobject
             */
            readonly Object: any;

            /**
             * Get/Set the current URL being displayed in an IFRAME
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsrc
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsrc
             */
            Src: string;
        }

        /**
         * Interface for Timer controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Timer extends IControl {
            /**
             * Refreshes the data displayed in a timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
             */
            Refresh(): void;

            /**
             * Returns the state of the timer control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getstate
             */
            readonly State: OptionSet.TimerState;
        }

        /**
         * Interface for Knowledge Base Search controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        interface Knowledge extends IControl {
            /**
             * Adds an event handler to the PostSearch event
             * @param callback The function to add to the PostSearch event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonpostsearch
             */
            AddPostSearch(callback: (executionContext: any) => void): void;

            /**
             * Adds an event handler to the OnResultOpened event
             * @param callback The function to add to the OnResultOpened event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonresultopened
             */
            AddResultOpened(callback: (executionContext: any) => void): void;

            /**
             * Adds an event handler to the OnSelection event
             * @param callback The function to add to the OnSelection event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonselection
             */
            AddSelection(callback: (executionContext: any) => void): void;

            /**
             * Opens a search result in the search control by specifying the result number
             * @param resultNumber Numerical value specifying the result number to be opened
             * @param mode Specify "Inline" or "Popout"
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/opensearchresult
             */
            OpenSearchResult(resultNumber: number, mode?: string): boolean;

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
             * Removes an event handler from the OnSelection event
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
             * Gets the currently selected result of the search control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getselectedresults
             */
            readonly SelectedResults: any;

            /**
             * Get/Set the text used as the search criteria for the knowledge base management control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getsearchquery
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setsearchquery
             */
            SearchQuery: string;
        }
    }

    /**
     * Base interface for all forms
     */
    interface IForm {
        /**
         * The execution context passed to the form
         */
        ExecutionContext: any;

        /**
         * Gets the unique identifier of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getid
         */
        readonly FormId: string;

        /**
         * Gets the label of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getlabel
         */
        readonly FormLabel: string;

        /**
         * Gets the form type. Returns one of: 0=Undefined, 1=Create, 2=Update, 3=Read Only, 4=Disabled, 5=Quick Create, 6=Bulk Edit, 11=Read Optimized
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
         */
        readonly FormType: OptionSet.FormType;

        /**
         * Gets the unique identifier of the entity record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getid
         */
        readonly EntityId: string;

        /**
         * Gets the logical name of the entity
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityname
         */
        readonly EntityName: string;

        /**
         * Returns a lookup value that references the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityreference
         */
        readonly EntityReference: EntityReference;

        /**
         * Returns a boolean value indicating if any fields in the form have been modified
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/getisdirty
         */
        readonly DataIsDirty: boolean;

        /**
         * Returns a boolean value indicating whether all of the form data is valid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/isvalid
         */
        readonly DataIsValid: boolean;

        /**
         * Saves the record
         * @param saveOptions Options to control the save behavior
         * @param successCallback A function to call when the save completes successfully
         * @param errorCallback A function to call when the save fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOptions?: { saveMode: OptionSet.SaveMode }, successCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Asynchronously refreshes the data of the form without reloading the page
         * @param save A boolean value to indicate if data should be saved before it is refreshed
         * @param successCallback A function to call when the refresh completes successfully
         * @param errorCallback A function to call when the refresh fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean, successCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Closes the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/close
         */
        Close(): void;

        /**
         * Use this method to display form level notifications
         * @param message The text of the notification message
         * @param level The level of the notification: ERROR, WARNING, or INFO
         * @param uniqueId A unique identifier for the message
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
         */
        SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;

        /**
         * Use this method to remove form level notifications
         * @param uniqueId A unique identifier for the message to be cleared
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/clearformnotification
         */
        ClearFormNotification(uniqueId: string): boolean;

        /**
         * Causes the ribbon to re-evaluate data that controls what is displayed in it
         * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/refreshribbon
         */
        RefreshRibbon(refreshAll?: boolean): void;

        /**
         * Adds a handler to be called after the form is loaded
         * @param callback The function to be executed after the form is loaded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addonload
         */
        UiAddLoaded(callback: (executionContext: any) => void): void;

        /**
         * Removes a handler from the OnLoad event
         * @param callback The function to be removed from the OnLoad event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeonload
         */
        UiRemoveLoaded(callback: (executionContext: any) => void): void;
    }

    /**
     * Form configuration for initializing FormBase
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference
     */
    interface IFormConfig {
        /** Field names for body controls */
        body?: string[];
        /** Field names for header controls */
        header?: string[];
        /** Tab and section names in format "TabName___SectionName" */
        tab?: string[];
        /** Grid control names */
        grid?: string[];
        /** Navigation item names */
        navigation?: string[];
        /** Quick view form names in format "QuickFormName___FieldName" */
        quick?: string[];
        /** Business process flow names in format "ProcessName___FieldName" */
        bpf?: string[];
        /** Dialog field names */
        dialog?: string[];
    }

    /**
     * Base interface for Form class
     * Used by generated entity forms to provide typed access to form controls
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference
     */
    interface IFormBase<TBody = any, THeader = any, TGrid = any, TNavigation = any, TQuickForm = any, TProcess = any, TDialog = any> {
        /**
         * The Body section of the form containing all body controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        Body: TBody;

        /**
         * The Header section of the form containing header controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-headersection
         */
        Header: THeader;

        /**
         * The Grid section containing all subgrid controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids
         */
        Grid: TGrid;

        /**
         * The Navigation section containing navigation items
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-navigation
         */
        Navigation: TNavigation;

        /**
         * The QuickForm section containing quick view form controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms
         */
        QuickForm: TQuickForm;

        /**
         * The Process section for business process flow controls
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process
         */
        Process: TProcess;

        /**
         * The Dialog section for quick create dialogs or other dialog forms
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        Dialog: TDialog;

        /**
         * The Execution Context passed to the form event handler
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/execution-context
         */
        ExecutionContext: IExecutionContext;

        /**
         * The Utility section providing access to global context and helper methods
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility
         */
        Utility: IUtility;

        /**
         * The SidePanes section for managing side panes
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes
         */
        SidePanes: ISidePanes;

        /**
         * The WebApi section for CRUD operations
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi
         */
        WebApi: IWebApi;

        /**
         * The Copilot section for AI-powered features
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot
         */
        Copilot: ICopilot;

        /**
         * Gets the unique identifier of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getid
         */
        readonly FormId: string;

        /**
         * Gets the label of the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getlabel
         */
        readonly FormLabel: string;

        /**
         * Gets the form type: 0=Undefined, 1=Create, 2=Update, 3=Read Only, 4=Disabled, 5=Quick Create, 6=Bulk Edit, 11=Read Optimized
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
         */
        readonly FormType: OptionSet.FormType;

        /**
         * Gets the unique identifier of the entity record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getid
         */
        readonly EntityId: string;

        /**
         * Gets the logical name of the entity
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityname
         */
        readonly EntityName: string;

        /**
         * Returns a boolean value indicating if any fields in the form have been modified
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/getisdirty
         */
        readonly DataIsDirty: boolean;

        /**
         * Returns a boolean value indicating whether all of the form data is valid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/isvalid
         */
        readonly DataIsValid: boolean;

        /**
         * Provides access to the collection of attributes for the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes
         */
        readonly Attributes: any;

        /**
         * Provides access to the collection of controls for the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
         */
        readonly Controls: any;

        /**
         * Returns a string representing the XML that will be sent to the server when the record is saved
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getdataxml
         */
        readonly DataXml: string;

        /**
         * Returns a boolean value indicating if any fields in the entity have been modified
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getisdirty
         */
        readonly EntityIsDirty: boolean;

        /**
         * Returns a boolean value indicating whether all of the entity data is valid
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/isvalid
         */
        readonly EntityIsValid: boolean;

        /**
         * Returns a lookup value that references the record
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getentityreference
         */
        readonly EntityReference: EntityReference;

        /**
         * Gets the value of the primary attribute for the entity
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
         */
        readonly PrimaryAttributeValue: string;

        /**
         * Returns the height of the viewport in pixels
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportheight
         */
        readonly ViewPortHeight: number;

        /**
         * Returns the width of the viewport in pixels
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getviewportwidth
         */
        readonly ViewPortWidth: number;

        /**
         * Saves the record
         * @param saveOptions Options to control the save behavior
         * @param successCallback A function to call when the save completes successfully
         * @param errorCallback A function to call when the save fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOptions?: any, successCallback?: any, errorCallback?: any): Promise<void> | void;

        /**
         * Asynchronously refreshes the data of the form without reloading the page
         * @param save A boolean value to indicate if data should be saved before it is refreshed
         * @param successCallback A function to call when the refresh completes successfully
         * @param errorCallback A function to call when the refresh fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean, successCallback?: any, errorCallback?: any): Promise<void> | void;

        /**
         * Closes the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/close
         */
        Close(): void;

        /**
         * Use this method to display form level notifications
         * @param message The text of the notification message
         * @param level The level of the notification: ERROR, WARNING, or INFO
         * @param uniqueId A unique identifier for the message
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
         */
        SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;

        /**
         * Use this method to remove form level notifications
         * @param uniqueId A unique identifier for the message to be cleared
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/clearformnotification
         */
        ClearFormNotification(uniqueId: string): boolean;

        /**
         * Causes the ribbon to re-evaluate data that controls what is displayed in it
         * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/refreshribbon
         */
        RefreshRibbon(refreshAll?: boolean): void;

        /**
         * Adds a handler to be called after the form is loaded
         * @param callback The function to be executed after the form is loaded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addloaded
         */
        UiAddLoaded(callback: (context: any) => void): void;

        /**
         * Removes a handler from the Loaded event
         * @param callback The function to be removed from the Loaded event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeloaded
         */
        UiRemoveLoaded(callback: (context: any) => void): void;

        /**
         * Adds a handler to be called when the form is loaded
         * @param callback The function to be executed when the form is loaded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addonload
         */
        UiAddOnLoad(callback: (context: any) => void): void;

        /**
         * Removes a handler from the OnLoad event
         * @param callback The function to be removed from the OnLoad event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeonload
         */
        UiRemoveOnLoad(callback: (context: any) => void): void;

        /**
         * Adds a function to be called after the OnSave is complete
         * @param callback The function to be executed after the OnSave event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/addonpostsave
         */
        AddOnPostSave(callback: (context: any) => void): void;

        /**
         * Adds a function to be called when the OnSave event is triggered
         * @param callback The function to be executed on the OnSave event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/addonsave
         */
        AddOnSave(callback: (context: any) => void): void;

        /**
         * Removes a function from the OnPostSave event
         * @param callback The function to be removed from the OnPostSave event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/removeonpostsave
         */
        RemoveOnPostSave(callback: (context: any) => void): void;

        /**
         * Removes a function from the OnSave event
         * @param callback The function to be removed from the OnSave event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/removeonsave
         */
        RemoveOnSave(callback: (context: any) => void): void;

        /**
         * Adds a function to be called when the data is loaded
         * @param callback The function to be executed when data is loaded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/addonload
         */
        DataAddOnLoad(callback: (context: any) => void): void;

        /**
         * Removes a function from the data OnLoad event
         * @param callback The function to be removed from the data OnLoad event
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/removeonload
         */
        DataRemoveOnLoad(callback: (context: any) => void): void;

        /**
         * Checks if a form is visible
         * @param formId The Id of the form to check
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector
         */
        FormIsVisible(formId: string): boolean;

        /**
         * Navigates to a specific form by Id
         * @param formId The Id of the form to navigate to
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormId(formId: string): void;

        /**
         * Navigates to a specific form by label
         * @param formLabel The label of the form to navigate to
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigateToFormLabel(formLabel: string): void;

        /**
         * Sets the visibility of a form
         * @param formId The Id of the form
         * @param visible Whether the form should be visible
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/setvisible
         */
        FormSetVisible(formId: string, visible: boolean): void;

        /**
         * Sets the form entity name
         * @param name The entity name to set
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformentityname
         */
        SetFormEntityName(name: string): void;
    }

    // ============================================================================
    // Process (Business Process Flow) Interface
    // ============================================================================

    /**
     * Interface for a Business Process Flow Step
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process
     */
    interface IStep {
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
         * Returns the progress of the step
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getprogress
         */
        readonly Progress: number;

        /**
         * Returns whether the step is required
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/isrequired
         */
        readonly Required: boolean;

        /**
         * Sets the progress of the step
         * @param stepProgress Number from 0 to 100 representing the step progress
         * @param message The message to display in the progress indicator
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
         */
        SetProgress(stepProgress: OptionSet.ProcessProgress, message: string): void;
    }

    /**
     * Interface for a Business Process Flow Stage
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process
     */
    interface IStage {
        /**
         * Returns an integer value representing the category of the stage
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getcategory
         */
        readonly Category: number;

        /**
         * Returns the logical name of the entity associated with the stage
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getentityname
         */
        readonly EntityName: string;

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
         * Returns an array of steps in the stage
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getsteps
         */
        readonly Steps: IStep[];

        /**
         * Sets whether the stage allows creating a new entity record
         * @param callback Boolean value indicating whether to allow creating new records
         */
        AllowCreateNew(callback: boolean): void;
    }

    // ============================================================================
    // Utility Interface
    // ============================================================================

    /**
     * Interface for Client information
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client
     */
    interface IClient {
        /**
         * Returns the name of the client: "Web", "Outlook", or "Mobile"
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
         */
        readonly ClientName: OptionSet.ClientName;

        /**
         * Returns the state of the client: "Online" or "Offline"
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
         */
        readonly ClientState: OptionSet.ClientState;

        /**
         * Returns the form factor: 0=Unknown, 1=Desktop, 2=Tablet, 3=Phone
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
         */
        readonly FormFactor: OptionSet.FormFactor;

        /**
         * Returns whether the network is currently available
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#isnetworkavailable
         */
        readonly IsNetworkAvailable: boolean;

        /**
         * Returns whether the client is offline
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#isoffline
         */
        readonly IsOffline: boolean;
    }

    /**
     * Currency lookup object returned by organizationSettings.baseCurrency and userSettings.transactionCurrency
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrency
     */
    interface ICurrencyLookup {
        /** GUID of the currency record */
        id: string;
        /** Entity type name (always "transactioncurrency") */
        entityType: string;
        /** Display name of the currency (e.g., "US Dollar") */
        name: string;
    }

    /**
     * Security role object returned by userSettings.roles
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#roles
     */
    interface ISecurityRole {
        /** GUID of the security role or team */
        id: string;
        /** Name of the security role or team */
        name: string;
    }

    /**
     * Date formatting info returned by userSettings.dateFormattingInfo
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
     */
    interface IDateFormattingInfo {
        /** First day of the week (0=Sunday, 1=Monday, etc.) */
        FirstDayOfWeek: number;
        /** Long date pattern (e.g., "dddd, MMMM d, yyyy") */
        LongDatePattern: string;
        /** Month/day pattern (e.g., "MMMM d") */
        MonthDayPattern: string;
        /** Time separator (e.g., ":") */
        TimeSeparator: string;
        /** AM designator (e.g., "AM") */
        AMDesignator: string;
        /** PM designator (e.g., "PM") */
        PMDesignator: string;
        /** Short date pattern (e.g., "M/d/yyyy") */
        ShortDatePattern: string;
        /** Short time pattern (e.g., "h:mm tt") */
        ShortTimePattern: string;
        /** Long time pattern (e.g., "h:mm:ss tt") */
        LongTimePattern: string;
        /** Date separator (e.g., "/") */
        DateSeparator: string;
        /** Year/month pattern (e.g., "MMMM yyyy") */
        YearMonthPattern: string;
        /** Calendar type */
        Calendar: { MinSupportedDateTime: string; MaxSupportedDateTime: string };
    }

    /**
     * Interface for Organization Settings
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
     */
    interface IOrganizationSettings {
        /** Organization attributes */
        readonly Attributes: { [key: string]: any };
        /** Base currency of the organization */
        readonly BaseCurrency: ICurrencyLookup;
        /** GUID of the base currency */
        readonly BaseCurrencyId: string;
        /** Default country code for the organization */
        readonly DefaultCountryCode: string;
        /** Full name convention code */
        readonly FullNameConventionCode: OptionSet.FullNameConventionCode;
        /** Whether auto-save is enabled */
        readonly IsAutoSaveEnabled: boolean;
        /** Whether this is a trial organization */
        readonly IsTrialOrganization: boolean;
        /** Language ID of the organization */
        readonly LanguageId: number;
        /** Organization expiry date */
        readonly OrganizationExpiryDate: Date;
        /** GUID of the organization */
        readonly OrganizationId: string;
        /** Unique name of the organization */
        readonly UniqueName: string;
        /** Whether to use Skype protocol */
        readonly UseSkypeProtocol: boolean;
    }

    /**
     * Interface for User Settings
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings
     */
    interface IUserSettings {
        /** Date formatting information */
        readonly DateFormattingInfo: IDateFormattingInfo;
        /** GUID of the default dashboard */
        readonly DefaultDashboardId: string;
        /** Whether guided help is enabled */
        readonly IsGuidedHelpEnabled: boolean;
        /** Whether high contrast mode is enabled */
        readonly IsHighContrastEnabled: boolean;
        /** Whether the layout is right-to-left */
        readonly IsRTL: boolean;
        /** Language ID of the user */
        readonly LanguageId: number;
        /** User's security roles */
        readonly Roles: ISecurityRole[];
        /** User's security role privileges */
        readonly SecurityRolePrivileges: string[];
        /** User's security roles */
        readonly SecurityRoles: string[];
        /** User's time zone offset in minutes */
        readonly TimeZoneOffsetMinutes: number;
        /** User's transaction currency */
        readonly TransactionCurrency: ICurrencyLookup;
        /** GUID of the user's transaction currency */
        readonly TransactionCurrencyId: string;
        /** GUID of the user */
        readonly UserId: string;
        /** User's full name */
        readonly UserName: string;
    }

    /**
     * Standard error object returned by Xrm API error callbacks
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility
     */
    interface IXrmError {
        /** Numeric error code */
        errorCode: number;
        /** Error message describing the issue */
        message: string;
    }

    // ============================================================================
    // Global Notification Interfaces
    // ============================================================================

    /**
     * Action object for global notifications
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
     */
    interface INotificationAction {
        /** Label for the action button */
        actionLabel?: string;
        /** Function to execute when the action is clicked */
        eventHandler?: () => void;
    }

    /**
     * Notification object for AddGlobalNotification method
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
     */
    interface INotification {
        /** Action object with actionLabel and eventHandler */
        action?: INotificationAction;
        /** Notification level: 1=Success, 2=Error, 3=Warning, 4=Information */
        level: OptionSet.NotificationLevel;
        /** Message to display in the notification */
        message: string;
        /** Whether to show close button (default: true) */
        showCloseButton?: boolean;
        /** Notification type: 2=Toast notification (required) */
        type: 2;
    }

    // ============================================================================
    // Lookup Interfaces
    // ============================================================================

    /**
     * Filter object for lookup dialogs
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
     */
    interface ILookupFilter {
        /** Logical name of the entity to filter */
        entityLogicalName: string;
        /** FetchXML filter to apply */
        filterXml: string;
    }

    /**
     * Options for the lookup dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
     */
    interface ILookupOptions {
        /** Whether to allow selecting multiple records */
        allowMultiSelect?: boolean;
        /** Default entity type to display */
        defaultEntityType?: string;
        /** Default view ID to display */
        defaultViewId?: string;
        /** Whether to disable Most Recently Used items */
        disableMru?: boolean;
        /** Array of entity types to display in the lookup */
        entityTypes: string[];
        /** Array of filters to apply per entity type */
        filters?: ILookupFilter[];
        /** Initial search text */
        searchText?: string;
        /** Array of view IDs to display */
        viewIds?: string[];
    }

    /**
     * Result object returned from lookup dialog
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
     */
    interface ILookupResult {
        /** Entity type of the selected record */
        entityType: string;
        /** GUID of the selected record */
        id: string;
        /** Display name of the selected record */
        name: string;
    }

    // ============================================================================
    // Navigation Interfaces
    // ============================================================================

    /**
     * Page input for navigating to an entity list
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface IPageInputEntityList {
        /** Page type: must be "entitylist" */
        pageType: "entitylist";
        /** Logical name of the entity */
        entityName: string;
        /** Optional view ID to display */
        viewId?: string;
        /** View type: "savedquery" for system views, "userquery" for personal views */
        viewType?: "savedquery" | "userquery";
    }

    /**
     * Page input for navigating to an entity record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface IPageInputEntityRecord {
        /** Page type: must be "entityrecord" */
        pageType: "entityrecord";
        /** Logical name of the entity */
        entityName: string;
        /** GUID of the record to open (omit for new record) */
        entityId?: string;
        /** Lookup reference to create from */
        createFromEntity?: { entityType: string; id: string; name?: string };
        /** Data to pass to the form (field values or custom parameters) */
        data?: { [key: string]: any };
        /** Form ID to open */
        formId?: string;
        /** Whether this is a cross-entity navigation */
        isCrossEntityNavigate?: boolean;
        /** Whether this is an offline sync error scenario */
        isOfflineSyncError?: boolean;
        /** Business process flow ID to start */
        processId?: string;
        /** Business process flow instance ID */
        processInstanceId?: string;
        /** Relationship information for related entity forms */
        relationship?: {
            attributeName: string;
            name: string;
            navigationPropertyName?: string;
            relationshipType: OptionSet.FormRelationshipType;
            roleType: OptionSet.FormRelationshipRoleType;
        };
        /** Stage ID in the business process to open */
        selectedStageId?: string;
        /** Tab name to navigate to */
        tabName?: string;
    }

    /**
     * Page input for navigating to a dashboard
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface IPageInputDashboard {
        /** Page type: must be "dashboard" */
        pageType: "dashboard";
        /** GUID of the dashboard to open */
        dashboardId: string;
    }

    /**
     * Page input for navigating to an HTML web resource
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface IPageInputWebResource {
        /** Page type: must be "webresource" */
        pageType: "webresource";
        /** Name of the web resource to open */
        webresourceName: string;
        /** Data to pass to the web resource */
        data?: string;
    }

    /**
     * Page input for navigating to a custom page
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface IPageInputCustom {
        /** Page type: must be "custom" */
        pageType: "custom";
        /** Unique name of the custom page */
        name: string;
        /** Entity name accessible via Param("entityName") */
        entityName?: string;
        /** Record ID accessible via Param("recordId") */
        recordId?: string;
    }

    /**
     * Union type for all page input types used in NavigateTo
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    type IPageInput = IPageInputEntityList | IPageInputEntityRecord | IPageInputDashboard | IPageInputWebResource | IPageInputCustom;

    /**
     * Navigation options for the NavigateTo method
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
     */
    interface INavigationOptions {
        /** Navigation target: 1=Inline (current page), 2=Dialog */
        target: 1 | 2;
        /** Width of the dialog */
        width?: { value: number; unit: "%" | "px" };
        /** Height of the dialog */
        height?: { value: number; unit: "%" | "px" };
        /** Position: 1=Center, 2=Side */
        position?: 1 | 2;
        /** Title of the dialog */
        title?: string;
    }

    // ============================================================================
    // Entity Metadata Interfaces
    // ============================================================================

    /**
     * Security privilege object for entity metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface IPrivilege {
        /** Whether basic access level is allowed */
        CanBeBasic: boolean;
        /** Whether deep access level is allowed */
        CanBeDeep: boolean;
        /** Whether entity reference access level is allowed */
        CanBeEntityReference: boolean;
        /** Whether global access level is allowed */
        CanBeGlobal: boolean;
        /** Whether local access level is allowed */
        CanBeLocal: boolean;
        /** Whether parent entity reference access level is allowed */
        CanBeParentEntityReference: boolean;
        /** Name of the privilege */
        Name: string;
        /** GUID of the privilege */
        PrivilegeId: string;
        /** Type of privilege (Create, Read, Write, Delete, etc.) */
        PrivilegeType: number;
    }

    /**
     * Attribute metadata object for entity metadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface IAttributeMetadata {
        /** Attribute type code */
        AttributeType: number;
        /** Display name of the attribute */
        DisplayName: string;
        /** Logical name of the entity */
        EntityLogicalName: string;
        /** Logical name of the attribute */
        LogicalName: string;
        /** OptionSet for Boolean/Choice/Status attributes */
        OptionSet?: { [key: string]: any };
        /** Default form value for Boolean/MultiSelect */
        DefaultFormValue?: number | boolean;
    }

    /**
     * Entity metadata object returned by getEntityMetadata
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    interface IEntityMetadata {
        /** Activity type mask: 0 for non-activity, 1 for activity */
        ActivityTypeMask: number;
        /** Whether records are auto-routed to owner's queue */
        AutoRouteToOwnerQueue: boolean;
        /** Whether sync to external search index can be enabled */
        CanEnableSyncToExternalSearchIndex: boolean;
        /** Whether entity can trigger workflows */
        CanTriggerWorkflow: boolean;
        /** Description of the entity */
        Description: string;
        /** Plural display name of the entity */
        DisplayCollectionName: string;
        /** Display name of the entity */
        DisplayName: string;
        /** Whether state transitions are enforced */
        EnforceStateTransitions: boolean;
        /** Color associated with the entity */
        EntityColor: string;
        /** Entity set name for Web API */
        EntitySetName: string;
        /** Whether entity has activities */
        HasActivities: boolean;
        /** Whether entity is an activity */
        IsActivity: boolean;
        /** Whether entity is an activity party */
        IsActivityParty: boolean;
        /** Whether business process is enabled */
        IsBusinessProcessEnabled: boolean;
        /** Whether entity is a business process flow entity */
        IsBPFEntity: boolean;
        /** Whether entity is a child entity */
        IsChildEntity: boolean;
        /** Whether connections are enabled */
        IsConnectionsEnabled: boolean;
        /** Whether entity is custom */
        IsCustomEntity: boolean;
        /** Whether entity is customizable */
        IsCustomizable: boolean;
        /** Whether document management is enabled */
        IsDocumentManagementEnabled: boolean;
        /** Whether document recommendations are enabled */
        IsDocumentRecommendationsEnabled: boolean;
        /** Whether duplicate detection is enabled */
        IsDuplicateDetectionEnabled: boolean;
        /** Whether charts are enabled */
        IsEnabledForCharts: boolean;
        /** Whether entity is importable */
        IsImportable: boolean;
        /** Whether interaction centric is enabled */
        IsInteractionCentricEnabled: boolean;
        /** Whether knowledge management is enabled */
        IsKnowledgeManagementEnabled: boolean;
        /** Whether mail merge is enabled */
        IsMailMergeEnabled: boolean;
        /** Whether entity is managed */
        IsManaged: boolean;
        /** Whether OneNote integration is enabled */
        IsOneNoteIntegrationEnabled: boolean;
        /** Whether optimistic concurrency is enabled */
        IsOptimisticConcurrencyEnabled: boolean;
        /** Whether quick create is enabled */
        IsQuickCreateEnabled: boolean;
        /** Whether entity is state model aware */
        IsStateModelAware: boolean;
        /** Whether entity is valid for advanced find */
        IsValidForAdvancedFind: boolean;
        /** Whether entity is visible in mobile client */
        IsVisibleInMobileClient: boolean;
        /** Whether entity is enabled in Unified Interface */
        IsEnabledInUnifiedInterface: boolean;
        /** Logical collection name of the entity */
        LogicalCollectionName: string;
        /** Logical name of the entity */
        LogicalName: string;
        /** Object type code of the entity */
        ObjectTypeCode: number;
        /** Ownership type: "UserOwned" or "OrganizationOwned" */
        OwnershipType: "UserOwned" | "OrganizationOwned";
        /** Primary ID attribute name */
        PrimaryIdAttribute: string;
        /** Primary image attribute name */
        PrimaryImageAttribute: string;
        /** Primary name attribute name */
        PrimaryNameAttribute: string;
        /** Array of privilege objects */
        Privileges: IPrivilege[];
        /** Array of attribute metadata objects */
        Attributes: IAttributeMetadata[];
    }

    // ============================================================================
    // Device API Interfaces
    // ============================================================================

    /**
     * Options for capturing an image using the device camera
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
     */
    interface ICaptureImageOptions {
        /** Whether to allow editing the image before saving */
        allowEdit?: boolean;
        /** Quality of the image (1-100) */
        quality?: number;
        /** Target height of the image in pixels */
        height?: number;
        /** Target width of the image in pixels */
        width?: number;
    }

    /**
     * Coordinates object for geolocation
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
     */
    interface ICoordinates {
        /** Latitude in decimal degrees */
        latitude: number;
        /** Longitude in decimal degrees */
        longitude: number;
        /** Accuracy of the position in meters */
        accuracy?: number;
        /** Altitude in meters above the WGS84 ellipsoid */
        altitude?: number | null;
        /** Accuracy of the altitude in meters */
        altitudeAccuracy?: number | null;
        /** Heading in degrees clockwise from true north */
        heading?: number | null;
        /** Speed in meters per second */
        speed?: number | null;
    }

    /**
     * Geolocation position object returned by getCurrentPosition
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
     */
    interface IPosition {
        /** Coordinates object containing latitude, longitude, and other position data */
        coords: ICoordinates;
        /** Timestamp (milliseconds since epoch) when the position was obtained */
        timestamp: number;
    }

    // ============================================================================
    // Page Context Interfaces
    // ============================================================================

    /**
     * Input object within page context
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
     */
    interface IPageContextInput {
        /** Page type: "entityrecord" for forms, "entitylist" for views */
        pageType: "entityrecord" | "entitylist";
        /** Logical name of the entity */
        entityName: string;
        /** GUID of the record (entity form only) */
        entityId?: string;
        /** Form ID (entity form only) */
        formId?: string;
        /** Create from entity reference (entity form only) */
        createFromEntity?: { entityType: string; id: string; name?: string };
        /** View ID (entity list only) */
        viewId?: string;
        /** View type: "savedquery" or "userquery" (entity list only) */
        viewType?: "savedquery" | "userquery";
    }

    /**
     * Page context object returned by getPageContext
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
     */
    interface IPageContext {
        /** Input object containing page information */
        input: IPageContextInput;
    }

    /**
     * Options for opening an entity form
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    interface IEntityFormOptions {
        /** Logical name of the entity to open */
        entityName: string;
        /** ID of the entity record to open (for existing records) */
        entityId?: string;
        /** Designates whether the form opens in create mode (true) or update mode (false) */
        createFromEntity?: boolean;
        /** ID of the form to open */
        formId?: string;
        /** Controls whether the navigation bar is displayed: "on", "off", or "entity" */
        navBar?: OptionSet.FormNavBar;
        /** Indicates whether to display the command bar */
        cmdbar?: boolean;
        /** Indicates whether to display the header */
        header?: boolean;
        /** Height of the form window in pixels */
        height?: number;
        /** Width of the form window in pixels */
        width?: number;
        /** Position of the form window: 1=center, 2=side */
        windowPosition?: OptionSet.FormWindowPosition;
        /** Indicates the form is opened in a new window */
        openInNewWindow?: boolean;
        /** ID of the process to start */
        processId?: string;
        /** ID of the process instance */
        processInstanceId?: string;
        /** Relationship information for related entity forms */
        relationship?: {
            attributeName: string;
            name: string;
            navigationPropertyName?: string;
            relationshipType: OptionSet.FormRelationshipType;
            roleType: OptionSet.FormRelationshipRoleType;
        };
        /** ID of the stage in the business process to open */
        selectedStageId?: string;
        /** Indicates whether to use quick create form */
        useQuickCreateForm?: boolean;
    }

    /**
     * Options for the file picker
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
    interface IPickFileOptions {
        /** File types to accept: "audio", "video", or "image" */
        accept?: OptionSet.FileAccept;
        /** Indicates whether to allow selecting multiple files */
        allowMultipleFiles?: boolean;
        /** Maximum size of file(s) to be selected in bytes */
        maximumAllowedFileSize?: number;
    }

    /**
     * Represents file data from device file picker or for opening files
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
    interface IFileData {
        /** Contents of the file as base64 encoded string */
        fileContent: string;
        /** Name of the file */
        fileName: string;
        /** Size of the file in bytes */
        fileSize: number;
        /** MIME type of the file */
        mimeType: string;
    }

    /**
     * Options for opening a file
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
     */
    interface IOpenFileOptions {
        /** Specify whether to open (1) or save (2) the file */
        openMode: OptionSet.FileOption;
    }

    /**
     * Interface for Xrm.Utility wrapper
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility
     */
    interface IUtility {
        /**
         * Client information
         */
        readonly Client: IClient;

        /**
         * Returns the base URL used to access the application
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
         */
        readonly ClientUrl: string;

        /**
         * Returns the URL for the current app
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
         */
        readonly CurrentAppUrl: string;

        /**
         * Returns whether the server is on-premises or online
         */
        readonly IsOnPremises: boolean;

        /**
         * Organization settings
         */
        readonly OrganizationSettings: IOrganizationSettings;

        /**
         * User settings
         */
        readonly UserSettings: IUserSettings;

        /**
         * Returns the version number of Dynamics 365
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getversion
         */
        readonly Version: string;

        /**
         * Displays a global notification
         * @param notification The notification details
         * @param successCallback Function called if the notification is added
         * @param errorCallback Function called if there is an error
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
         */
        AddGlobalNotification(notification: INotification, successCallback?: (id: string) => void, errorCallback?: (error: IXrmError) => void): Promise<string> | void;

        /**
         * Closes the progress indicator dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/closeprogressindicator
         */
        CloseProgressIndicator(): void;

        /**
         * Clears a global notification
         * @param uniqueId The ID of the notification to clear
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
         */
        ClearGlobalNotification(uniqueId: string, successCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Gets the name of the current app
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
         */
        CurrentAppName(successCallback?: (name: string) => void, errorCallback?: (error: IXrmError) => void): Promise<string> | void;

        /**
         * Gets metadata for an entity
         * @param entityName The logical name of the entity
         * @param attributes Array of attribute names to retrieve
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        EntityMetadata(entityName: string, attributes?: string[], successCallback?: (metadata: IEntityMetadata) => void, errorCallback?: (error: IXrmError) => void): Promise<IEntityMetadata> | void;

        /**
         * Invokes a process action
         * @param name The name of the action
         * @param parameters Parameters to pass to the action
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/invokeprocessaction
         */
        InvokeProcessAction(name: string, parameters: any, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Opens a lookup dialog
         * @param lookupOptions Options for the lookup dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
         */
        LookupObjects(lookupOptions: ILookupOptions, successCallback?: (result: ILookupResult[]) => void, errorCallback?: (error: IXrmError) => void): Promise<ILookupResult[]> | void;

        /**
         * Navigates to the specified page
         * @param pageInput The page to navigate to
         * @param navigationOptions Navigation options
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
         */
        NavigateTo(pageInput: IPageInput, navigationOptions?: INavigationOptions, successCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Displays an alert dialog
         * @param alertStrings Strings used in the alert dialog
         * @param alertOptions Options for the alert dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
         */
        OpenAlertDialog(alertStrings: { confirmButtonLabel?: string; text: string; title?: string }, alertOptions?: { height?: number; width?: number }, closeCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Displays a confirm dialog
         * @param confirmStrings Strings used in the confirm dialog
         * @param confirmOptions Options for the confirm dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
         */
        OpenConfirmDialog(confirmStrings: { cancelButtonLabel?: string; confirmButtonLabel?: string; subtitle?: string; text: string; title?: string }, confirmOptions?: { height?: number; width?: number }, successCallback?: (result: { confirmed: boolean }) => void, errorCallback?: (error: IXrmError) => void): Promise<{ confirmed: boolean }> | void;

        /**
         * Displays an error dialog
         * @param errorOptions Options for the error dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
         */
        OpenErrorDialog(errorOptions: { details?: string; errorCode?: number; message?: string }, successCallback?: () => void, errorCallback?: (error: IXrmError) => void): Promise<void> | void;

        /**
         * Opens an entity form
         * @param entityFormOptions Options for opening the form
         * @param formParameters Parameters to pass to the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        OpenForm(entityFormOptions: IEntityFormOptions, formParameters?: any, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Opens a URL
         * @param url The URL to open
         * @param openUrlOptions Options for opening the URL
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openurl
         */
        OpenUrl(url: string, openUrlOptions?: { height?: number; width?: number }): void;

        /**
         * Opens a web resource
         * @param webResourceName The name of the web resource
         * @param windowOptions Options for the window
         * @param data Data to pass to the web resource
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openwebresource
         */
        OpenWebResource(webResourceName: string, windowOptions?: { height?: number; width?: number; openInNewWindow?: boolean }, data?: string): void;

        /**
         * Gets a string from a web resource
         * @param key The key for the resource string
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        Resource(key: string): string;

        /**
         * Gets a string from a web resource
         * @param webResourceName The name of the web resource
         * @param key The key for the resource string
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring
         */
        ResourceString(webResourceName: string, key: string): string;

        /**
         * Displays a progress indicator
         * @param message The message to display
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/showprogressindicator
         */
        ShowProgressIndicator(message: string): void;

        // Device API Methods
        /**
         * Captures an image using the device camera
         * @param imageOptions Options for the image capture
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureimage
         */
        CaptureImage(imageOptions?: ICaptureImageOptions, successCallback?: (result: IFileData) => void, errorCallback?: (error: IXrmError) => void): Promise<IFileData> | void;

        /**
         * Captures audio using the device microphone
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureaudio
         */
        CaptureAudio(successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Captures video using the device camera
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/capturevideo
         */
        CaptureVideo(successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Gets the barcode value using the device camera
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getbarcodevalue
         */
        BarcodeValue(successCallback?: (result: string) => void, errorCallback?: (error: IXrmError) => void): Promise<string> | void;

        /**
         * Opens a file picker dialog
         * @param pickFileOptions Options for the file picker
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
         */
        PickFile(pickFileOptions?: IPickFileOptions, successCallback?: (result: IFileData[]) => void, errorCallback?: (error: IXrmError) => void): Promise<IFileData[]> | void;

        /**
         * Gets the current geographical position
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
         */
        CurrentPosition(successCallback?: (result: IPosition) => void, errorCallback?: (error: IXrmError) => void): Promise<IPosition> | void;

        /**
         * Gets the advanced configuration setting
         * @param setting The setting name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
         */
        AdvancedConfigSetting(setting: OptionSet.AdvancedConfigSetting): number;

        /**
         * Gets the allowed status transitions for an entity
         * @param entityName The logical name of the entity
         * @param stateCode The state code
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getallowedstatustransitions
         */
        AllowedStatusTransitions(entityName: string, stateCode: number, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Gets the current app properties
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
         */
        CurrentAppProperties(successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Gets entity main form descriptor
         * @param entityName The logical name of the entity
         * @param formId The form ID
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymainformdescriptor
         */
        EntityMainFormDescriptor(entityName: string, formId: string): any;

        /**
         * HTML attribute encode
         * @param arg The string to encode
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlattributeencode
         */
        HtmlAttributeEncode(arg: string): string;

        /**
         * HTML decode
         * @param arg The string to decode
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmldecode
         */
        HtmlDecode(arg: string): string;

        /**
         * HTML encode
         * @param arg The string to encode
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlencode
         */
        HtmlEncode(arg: string): string;

        /**
         * Gets learning path attribute name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getlearningpathattributename
         */
        readonly LearningPathAttributeName: string;

        /**
         * Loads a side panel
         * @param url The URL to load
         * @param title The title of the panel
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-panel/loadpanel
         */
        LoadPanel(url: string, title: string): void;

        /**
         * Opens a file
         * @param file The file to open
         * @param openFileOptions Options for opening the file
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
         */
        OpenFile(file: IFileData, openFileOptions?: IOpenFileOptions): void;

        /**
         * Gets page context
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
         */
        readonly PageContext: IPageContext;

        /**
         * Prepends the organization name to a path
         * @param sPath The path
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
         */
        PrependOrgName(sPath: string): string;

        /**
         * Refreshes the parent grid
         * @param lookupOptions The lookup options
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/refreshparentgrid
         */
        RefreshParentGrid(lookupOptions: any): void;

        /**
         * Gets a web resource URL
         * @param webResourceName The name of the web resource
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getwebresourceurl
         */
        WebResourceUrl(webResourceName: string): string;

        /**
         * XML attribute encode
         * @param arg The string to encode
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlattributeencode
         */
        XmlAttributeEncode(arg: string): string;

        /**
         * XML encode
         * @param arg The string to encode
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-encoding/xmlencode
         */
        XmlEncode(arg: string): string;
    }

    // ============================================================================
    // SidePanes Interface
    // ============================================================================

    /**
     * Interface for Side Panes API
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes
     */
    interface ISidePanes {
        /**
         * Get/Set the display state of the side panes: 0=Collapsed, 1=Expanded
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes#state
         */
        DisplayState: OptionSet.SidePaneState;

        /**
         * Creates a new side pane
         * @param paneOptions Options for creating the pane
         * @param successCallback Function called when the pane is created
         * @param errorCallback Function called when there is an error
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
         */
        Create(paneOptions: ISidePaneOptions, successCallback?: (pane: ISidePane) => void, errorCallback?: (error: IXrmError) => void): Promise<ISidePane> | void;

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

    /**
     * Base properties for a side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
     */
    interface ISidePaneBase {
        /** The title of the pane. Used in pane header and for tooltip. */
        title?: string;
        /** The ID of the new pane. If the value is not passed, the ID value is auto-generated. */
        paneId?: string;
        /** Whether the pane header will show a close button or not. */
        canClose?: boolean;
        /** The path of the icon to show in the panel switcher control. */
        imageSrc?: string;
        /** The width of the pane in pixels. */
        width?: number;
        /** Hides the pane and tab. */
        hidden?: boolean;
        /** Prevents the pane from unmounting when it is hidden. */
        alwaysRender?: boolean;
        /** Prevents the badge from getting cleared when the pane becomes selected. */
        keepBadgeOnSelect?: boolean;
    }

    /**
     * Options for creating a side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes/createpane
     */
    interface ISidePaneOptions extends ISidePaneBase {
        /** Hides the header pane, including the title and close button. Default value is false. */
        hideHeader?: boolean;
        /** When set to false, the created pane is not selected and leaves the existing pane selected. It also does not expand the pane if collapsed. */
        isSelected?: boolean;
    }

    /**
     * Represents a side pane instance
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes
     */
    interface ISidePane extends ISidePaneBase {
        /** Closes the side pane and removes it from the side bar. */
        close(): void;
        /** Specify whether the pane should be selected or expanded. */
        select(): void;
        /** Opens a page within the selected pane. This is similar to the navigateTo method. */
        navigate(pageInput: any, navigationOptions?: any, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): void;
        /** Badge count to display on the pane tab. */
        badge?: number;
    }

    // ============================================================================
    // WebApi Request Interfaces
    // ============================================================================

    /**
     * Type information for a WebApi request parameter
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    interface IWebApiRequestParameterType {
        /** Enum properties if the parameter is an enumeration type */
        enumProperties?: Array<{ name: string; value: number }>;
        /** Structural property type: 0=Unknown, 1=PrimitiveType, 2=ComplexType, 3=EnumerationType, 4=Collection, 5=EntityType */
        structuralProperty: OptionSet.StructuralProperty;
        /** The EDM type name of the parameter (e.g., "Edm.String", "mscrm.account") */
        typeName: string;
    }

    /**
     * Metadata object returned by getMetadata() for WebApi Execute requests
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    interface IWebApiRequestMetadata {
        /** Parameter bound to the action. undefined for functions, null for unbound actions, "entity" for entity-bound actions */
        boundParameter: string | null | undefined;
        /** Name of the action, function, or CRUD operation. For CRUD operations: "Create", "Retrieve", "Update", "Delete" */
        operationName: string;
        /** Type of operation: 0=Action, 1=Function, 2=CRUD */
        operationType: OptionSet.OperationType;
        /** Object containing type information for each parameter, keyed by parameter name */
        parameterTypes: { [parameterName: string]: IWebApiRequestParameterType };
    }

    /**
     * Request object for Xrm.WebApi.online.execute() and executeMultiple()
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    interface IWebApiRequest {
        /** Returns metadata about the request including operation type, name, and parameter types */
        getMetadata(): IWebApiRequestMetadata;
        /** Additional properties representing the request parameters - these vary by action/function */
        [key: string]: any;
    }

    // ============================================================================
    // WebApi Interface
    // ============================================================================

    /**
     * Interface for Web API operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi
     */
    interface IWebApi {
        /**
         * Creates an entity record
         * @param entityLogicalName Logical name of the entity
         * @param data Object containing the data for the record
         * @param successCallback Function called when the record is created successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/createrecord
         */
        CreateRecord(entityLogicalName: string, data: any, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: IXrmError) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Deletes an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to delete
         * @param successCallback Function called when the record is deleted successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/deleterecord
         */
        DeleteRecord(entityLogicalName: string, id: string, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: IXrmError) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Retrieves an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to retrieve
         * @param options OData system query options ($select, $expand)
         * @param successCallback Function called when the record is retrieved successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrieverecord
         */
        RetrieveRecord(entityLogicalName: string, id: string, options?: string, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Retrieves a single record and maps it using the provided constructor or factory function (Promise-based)
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName The logical name of the entity
         * @param id The GUID of the record
         * @param options Optional OData query options (defaults to "?$select=*")
         * @returns A promise that resolves to a typed instance
         */
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, options?: string): Promise<T>;

        /**
         * Retrieves a single record and maps it using the provided constructor or factory function (callback-based)
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName The logical name of the entity
         * @param id The GUID of the record
         * @param successCallback Function called when the record is retrieved successfully
         * @param errorCallback Function called when the operation fails
         */
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, successCallback: (result: T) => void, errorCallback?: (error: IXrmError) => void): void;
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, options: string, successCallback: (result: T) => void, errorCallback?: (error: IXrmError) => void): void;

        /**
         * Retrieves a collection of entity records
         * @param entityLogicalName Logical name of the entity
         * @param options OData system query options ($select, $filter, $orderby, etc.)
         * @param maxPageSize Maximum number of records to return per page
         * @param successCallback Function called when records are retrieved successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords
         */
        RetrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number, successCallback?: (result: { entities: any[]; nextLink?: string }) => void, errorCallback?: (error: IXrmError) => void): Promise<{ entities: any[]; nextLink?: string }> | void;

        /**
         * Retrieves multiple records and maps them using the provided constructor or factory function (Promise-based)
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory Constructor or factory function that takes entity data and returns typed instance
         * @param entityLogicalName The logical name of the entity
         * @param options OData system query options or FetchXML
         * @param maxPageSize Maximum number of records to return per page
         * @returns A promise that resolves to an array of typed instances
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options?: string, maxPageSize?: number): Promise<T[]>;

        /**
         * Retrieves multiple records using FetchXML and maps them (entity name extracted from FetchXML)
         * @template T The type of the entity to return
         * @param apiConstructorOrFactory Constructor or factory function that takes entity data and returns typed instance
         * @param fetchXml FetchXML query string (must include ?fetchXml= prefix or raw XML)
         * @param maxPageSize Maximum number of records to return per page
         * @returns A promise that resolves to an array of typed instances
         */
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), fetchXml: string, maxPageSize?: number): Promise<T[]>;
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options: string, successCallback: (result: T[]) => void, errorCallback?: (error: IXrmError) => void): void;
        RetrieveRecords<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, options: string, maxPageSize: number, successCallback: (result: T[]) => void, errorCallback?: (error: IXrmError) => void): void;

        /**
         * Updates an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to update
         * @param data Object containing the data to update
         * @param successCallback Function called when the record is updated successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/updaterecord
         */
        UpdateRecord(entityLogicalName: string, id: string, data: any, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: IXrmError) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Executes a single action, function, or CRUD operation
         * @param request Object containing the request parameters
         * @param successCallback Function called when the request is executed successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: IWebApiRequest, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Executes a collection of action, function, or CRUD operations
         * @param requests Array of request objects
         * @param successCallback Function called when requests are executed successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: IWebApiRequest[], successCallback?: (result: any[]) => void, errorCallback?: (error: IXrmError) => void): Promise<any[]> | void;

        /**
         * Contains methods to execute operations that will be executed against the server even when the user is offline
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online
         */
        readonly Online: IWebApiOnline;

        /**
         * Contains methods to interact with the offline cache
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline
         */
        readonly Offline: IWebApiOffline;
    }

    /**
     * Interface for Online-specific Web API operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online
     */
    interface IWebApiOnline {
        /**
         * Execute a single action, function, or CRUD operation that will be executed against the server even when the user is offline
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request
         * @param successCallback The function that will be passed through and be called by a successful response
         * @param errorCallback The function that will be passed through and be called by a failed response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: IWebApiRequest, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Execute a collection of action, function, or CRUD operations that will be executed against the server even when the user is offline
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute
         * @param successCallback The function that will be passed through and be called by a successful response
         * @param errorCallback The function that will be passed through and be called by a failed response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: IWebApiRequest[], successCallback?: (result: any[]) => void, errorCallback?: (error: IXrmError) => void): Promise<any[]> | void;
    }

    /**
     * Interface for Offline-specific Web API operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline
     */
    interface IWebApiOffline {
        /**
         * Returns whether an entity is offline enabled
         * @param entityLogicalName Logical name of the entity. For example: "account"
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/isavailableoffline
         */
        IsAvailable(entityLogicalName: string): boolean;
    }

    // ============================================================================
    // Copilot Interface
    // ============================================================================

    /**
     * Interface for Copilot API (Preview)
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-copilot
     */
    interface ICopilot {
        /**
         * Executes a Copilot event
         * @param eventName The name of the Copilot event
         * @param eventParameters Parameters for the event
         * @param successCallback Function called on success
         * @param errorCallback Function called on error
         */
        ExecuteEvent(eventName: string, eventParameters: any, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;

        /**
         * Executes a Copilot prompt
         * @param promptText The prompt text to execute
         * @param successCallback Function called on success
         * @param errorCallback Function called on error
         */
        ExecutePrompt(promptText: string, successCallback?: (result: any) => void, errorCallback?: (error: IXrmError) => void): Promise<any> | void;
    }


    /**
     * Configuration interface for form field definitions
     * Used to specify which fields, tabs, grids, etc. to load on a form
     */
    interface IFormConfig {
        /** Array of body field names */
        body?: string[];
        /** Array of header field names */
        header?: string[];
        /** Array of tab names */
        tab?: string[];
        /** Array of grid/subgrid names */
        grid?: string[];
        /** Array of navigation item names */
        navigation?: string[];
        /** Array of quick view form names */
        quick?: string[];
        /** Array of business process flow field names */
        bpf?: string[];
        /** Array of dialog field names */
        dialog?: string[];
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
     * Supported WebApi field types for type conversion
     */
    type WebApiFieldType = 'Integer' | 'Number' | 'Boolean' | 'DateTime' | 'MultiOptionSet';

    /**
     * Configuration for a single WebApi field
     */
    interface IWebApiFieldConfig {
        /** The logical name of the field in Dataverse */
        logicalName: string;
        /** The schema name of the field (optional) */
        schemaName?: string;
        /** The collection name of the related entity (for lookup fields) */
        entityCollectionName?: string;
        /** The logical name of the related entity (for lookup fields) */
        entityLogicalName?: string;
        /** Whether the field is read-only */
        readOnly?: boolean;
        /** The data type of the field for proper conversion */
        type?: WebApiFieldType;
    }

    /**
     * Map of field names to their WebApi configurations
     */
    interface IWebApiFieldConfigMap {
        [fieldName: string]: IWebApiFieldConfig;
    }

    /**
     * Interface for WebApi entity with data access methods
     * Provides access to raw entity data, OData formatted data, and aliased values
     */
    interface IWebApiEntity {
        /** The raw entity data as key-value pairs */
        readonly Entity: Record<string, any>;
        /** The OData formatted entity data ready for create/update operations */
        readonly ODataEntity: Record<string, any>;
        /** The logical name of the entity */
        readonly EntityName: string;
        /** The collection name of the entity for WebApi calls */
        readonly EntityCollectionName: string;
        /** The ETag value for concurrency control */
        readonly '@odata.etag': string | undefined;
        /** Object containing formatted values for fields */
        readonly FormattedValue: Record<string, any>;
        /**
         * Gets an aliased value from a linked entity
         * @param alias The alias of the linked entity value
         * @param isMultiOptionSet Whether the value is a multi-option set
         * @returns The aliased value
         */
        getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
        /**
         * Gets an aliased formatted value from a linked entity
         * @param alias The alias of the linked entity value
         * @param isMultiOptionSet Whether the value is a multi-option set
         * @returns The formatted aliased value
         */
        getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
    }

    /**
     * A generic key-value pair object used for storing arbitrary data
     */
    interface KeyValueObject {
        [key: string]: any;
    }

    /**
     * Collections interface for iterating over items
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections
     */
    interface Collections<T> {
        /**
         * Applies the action function to each item in the collection
         * @param successCallback The delegate function to apply to each item
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/foreach
         */
        forEach(successCallback: (item: T, index: number) => void): void;
        /**
         * Gets all items in the collection
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(): Array<T>;
        /**
         * Gets an item in the collection using its name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(item: string): T;
        /**
         * Gets an item in the collection using its index
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(index: number): T;
        /**
         * Gets all items matching the delegate function
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/get
         */
        get(successCallback: (item: T, index: number) => void): Array<T>;
        /**
         * Gets the number of items in the collection
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/collections/getlength
         */
        getLength(): number;
    }

    /**
     * Interface for enabled business process flow
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getenabledprocesses
     */
    interface ProcessEnabled {
        /** The unique identifier of the process */
        readonly ProcessId: Guid;
        /** The name of the process */
        readonly ProcessName: string;
    }

    /**
     * Interface for process instance
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
     */
    interface ProcessInstance extends ProcessEnabled {
        /** The created on date string */
        readonly CreatedOn: string;
        /** The created on date */
        readonly CreatedOnDate: Date;
        /** The unique identifier of the process instance */
        readonly InstanceId: Guid;
        /** The name of the process instance */
        readonly InstanceName: string;
        /** The status of the process instance */
        readonly Status: OptionSet.ProcessStatus;
    }

    /**
     * Interface for process object
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process#process-methods
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
     * Interface for process stage
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process#stage-methods
     */
    interface ProcessStage {
        /**
         * Returns the status of the stage
         * @param callback Callback function
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
        readonly EntityName: string;
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
         * Returns steps in the stage
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getsteps
         */
        Steps: Array<ProcessStep>;
    }

    /**
     * Interface for process step
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process#step-methods
     */
    interface ProcessStep {
        /**
         * Updates the progress of the action step
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
         * Returns the progress of the action step
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/getprogress
         */
        readonly Progress: number;
        /**
         * Returns a boolean value indicating whether the step is required in the business process flow
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/isrequired
         */
        readonly Required: boolean;
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
     * Error callback type
     */
    type ErrorCallback = (error: { errorCode?: number; message?: string }) => void;

    /**
     * Organization settings interface
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
     */
    interface OrganizationSettings {
        /**
         * Returns attributes and their values as key:value pairs that are available for the organization entity
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
         * Returns a lookup object containing the ID, name, and entity type of the base currency for the current organization
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
        readonly Calendar: any;
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
         * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroleprivileges
         */
        readonly SecurityRolePrivileges: Array<Guid>;
        /**
         * [Deprecated] Returns an array of strings that represent the GUID values of each of the security role privilege
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
         * Returns a promise which resolves with an object whose keys are the security role privilege GUIDs
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#getsecurityroleprivilegesinfo-method
         */
        GetSecurityRolePrivilegesInfo(successCallback: (rolePrivileges: { [key: string]: SecurityRolePrivilegeInfo }) => void, errorCallback?: ErrorCallback): void;
        /**
         * Returns a promise which resolves with an object whose keys are the security role privilege GUIDs
         * @returns Promise that resolves with security role privilege information
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#getsecurityroleprivilegesinfo-method
         */
        GetSecurityRolePrivilegesInfo(): Promise<{ [key: string]: SecurityRolePrivilegeInfo }>;
    }
}

/** DynamicsCrm.DevKit for namespace OptionSet */
declare namespace OptionSet {
    /**
     * Defines the structural type of a parameter for Xrm.WebApi.online.execute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    type StructuralProperty = 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * Specifies the type of Web API operation for Xrm.WebApi.online.execute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
     */
    type OperationType = 0 | 1 | 2;
    /**
     * Returns information about the kind of device the user is using
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
     */
    type FormFactor = 0 | 1 | 2 | 3;
    /**
     * Returns a value to indicate the state of the client
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
     */
    type ClientState = "Online" | "Offline";
    /**
     * Returns a value to indicate which client the script is executing in
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
     */
    type ClientName = "Web" | "Outlook" | "Mobile";
    /**
     * Gets the form type for the record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype
     */
    type FormType = 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * Specify options for saving the record
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-entity/save
     */
    type SaveOption = "saveandclose" | "saveandnew";
    /**
     * Returns a value indicating how the save event was initiated
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode
     */
    type SaveMode = 1 | 2 | 5 | 6 | 7 | 15 | 16 | 47 | 58 | 59 | 70;
    /**
     * The level of form notification message
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/setformnotification
     */
    type FormNotificationLevel = "ERROR" | "WARNING" | "INFO";
    /**
     * The level of global notification (AddGlobalNotification)
     * 1=Success, 2=Error, 3=Warning, 4=Information
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
     */
    type NotificationLevel = 1 | 2 | 3 | 4;
    /**
     * Display state of a tab on the form
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getdisplaystate
     */
    type TabDisplayState = "expanded" | "collapsed";
    /**
     * The content type of a tab
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/getcontenttype
     */
    type TabContentType = "cardSections" | "singleComponent";
    /**
     * Display state of the business process flow control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-process/getdisplaystate
     */
    type ProcessDisplayState = "expanded" | "collapsed" | "floating";
    /**
     * Returns the type of attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getattributetype
     */
    type FieldAttributeType = "boolean" | "datetime" | "decimal" | "double" | "integer" | "lookup" | "memo" | "money" | "multioptionset" | "optionset" | "string";
    /**
     * Returns formatting options for the attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getformat
     */
    type FieldFormat = "date" | "datetime" | "duration" | "email" | "language" | "none" | "textarea" | "text" | "tickersymbol" | "phone" | "timezone" | "url";
    /**
     * Value indicating whether a field value is required
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
     */
    type FieldRequiredLevel = "none" | "required" | "recommended";
    /**
     * Controls when field data is submitted on save
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
     */
    type FieldSubmitMode = "always" | "never" | "dirty";
    /**
     * Categorizes the type of control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
     */
    type FieldControlType = "standard" | "iframe" | "kbsearch" | "lookup" | "multiselectoptionset" | "notes" | "optionset" | "quickform" | "subgrid" | "timercontrol" | "timelinewall" | "webresource";
    /**
     * The type of field notification
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setnotification
     */
    type FieldNotificationLevel = "ERROR" | "RECOMMENDATION";
    /**
     * The integer value of the business process flow category for a stage
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getcategory
     */
    type ProcessCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Returns the current status of the process instance.
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getstatus
     */
    type ProcessStatus = "active" | "aborted" | "finished";
    /**
     * Returns the status of the stage.
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getstatus
     */
    type ProcessStageStatus = "active" | "inactive";
    /**
     * The progress of an action step in a business process flow
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
     */
    type ProcessProgress = 0 | 1 | 2 | 3 | 4;
    /**
     * The state of a timer control (SLA timers) - Unified Interface only
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getstate
     */
    type TimerState = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /**
     * Advanced configuration settings for the organization
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
     */
    type AdvancedConfigSetting = "MaxChildIncidentNumber" | "MaxIncidentMergeNumber";
    /**
     * Describes whether to open or save a file
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile
     */
    type FileOption = 1 | 2;
    /**
     * Describes the type of privilege for security operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
     */
    type PrivilegeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /**
     * Controls whether the navigation bar is displayed
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    type FormNavBar = "on" | "off" | "entity";
    /**
     * Specifies the position of a form window
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    type FormWindowPosition = 1 | 2;
    /**
     * Specifies the type of entity relationship
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    type FormRelationshipType = 0 | 1;
    /**
     * Specifies the role type in a relationship
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
     */
    type FormRelationshipRoleType = 1 | 2;
    /**
     * Specifies the accepted file types for file picker
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
     */
    type FileAccept = "audio" | "video" | "image";
    /**
     * Specifies the type of grid control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
     */
    type GridType = 1 | 2;
    /**
     * Display state of the side pane
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes#state
     */
    type SidePaneState = 0 | 1;
    /**
     * The full name conventionCode setting of the current organization
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#fullnameconventioncode
     */
    type FullNameConventionCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}
