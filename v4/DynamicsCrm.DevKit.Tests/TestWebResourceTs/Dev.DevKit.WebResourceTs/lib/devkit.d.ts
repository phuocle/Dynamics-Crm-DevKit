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
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getdataloadstate
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
        notificationLevel?: OptionSet.NotificationLevel;
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
         */
        interface String extends IControlText {
        }

        /**
         * Interface for Memo (multiline text) controls
         */
        interface Memo extends IControlText {
        }

        /**
         * Interface for Integer controls (no Precision support)
         */
        interface Integer extends IControlNumber {
        }

        /**
         * Interface for Decimal controls
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
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gridonload
             */
            AddOnLoad(callback: (executionContext: any) => void): void;

            /**
             * Removes an event handler from the OnLoad event
             * @param callback The function to be removed from the OnLoad event
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/removeonload
             */
            RemoveOnLoad(callback: (executionContext: any) => void): void;

            /**
             * Opens the related grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/openrelatedgrid
             */
            OpenRelatedGrid(): void;

            /**
             * Refreshes the data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/refresh
             */
            Refresh(): void;

            /**
             * Refreshes the ribbon
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/refreshribbon
             */
            RefreshRibbon(): void;

            /**
             * Returns the URL for the current grid
             * @param client 1=Web, 2=Outlook
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/geturl
             */
            Url(client?: number): string;

            /**
             * Get the logical name of the entity data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getentityname
             */
            readonly EntityName: string;

            /**
             * Get the FetchXML query that represents the current data in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getfetchxml
             */
            readonly FetchXml: string;

            /**
             * Get the grid type: 1=HomePageGrid, 2=Subgrid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getgridtype
             */
            readonly GridType: number;

            /**
             * Get the relationship information for the subgrid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getrelationship
             */
            readonly Relationship: { name: string; navigationPropertyName: string; relationshipType: number; roleType: number };

            /**
             * Collection of rows in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getrows
             */
            readonly Rows: Collections<GridRow>;

            /**
             * Collection of selected rows in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getselectedrows
             */
            readonly SelectedRows: Collections<GridRow>;

            /**
             * Get the total record count (limited to 5000)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gettotalrecordcount
             */
            readonly TotalRecordCount: number;

            /**
             * Get the view selector for the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getviewselector
             */
            readonly ViewSelector: ViewSelector;

            /**
             * Get/Set a value that indicates whether the grid is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/setvisible
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
            interface IControlBase {
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
            interface IControl extends IControlBase {
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
                RequiredLevel: FieldRequiredLevel;
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
            interface Button extends IControlBase {
            }

            /**
             * Interface for dialog Label controls (read-only display)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
             */
            interface Label extends IControlBase {
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
            ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: any) => void): void;

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
            ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: any) => void): void;

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
            readonly State: number;
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
        readonly FormType: number;

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
         * Saves the record
         * @param saveOptions Options to control the save behavior
         * @param successCallback A function to call when the save completes successfully
         * @param errorCallback A function to call when the save fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOptions?: { saveMode: OptionSet.SaveMode }, successCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

        /**
         * Asynchronously refreshes the data of the form without reloading the page
         * @param save A boolean value to indicate if data should be saved before it is refreshed
         * @param successCallback A function to call when the refresh completes successfully
         * @param errorCallback A function to call when the refresh fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean, successCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

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
        SetProgress(stepProgress: number, message: string): void;
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
     * Interface for Organization Settings
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
     */
    interface IOrganizationSettings {
        /** Organization attributes */
        readonly Attributes: any;
        /** Base currency of the organization */
        readonly BaseCurrency: any;
        /** GUID of the base currency */
        readonly BaseCurrencyId: string;
        /** Default country code for the organization */
        readonly DefaultCountryCode: string;
        /** Full name convention code */
        readonly FullNameConventionCode: number;
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
        readonly DateFormattingInfo: any;
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
        readonly Roles: any;
        /** User's security role privileges */
        readonly SecurityRolePrivileges: string[];
        /** User's security roles */
        readonly SecurityRoles: string[];
        /** User's time zone offset in minutes */
        readonly TimeZoneOffsetMinutes: number;
        /** User's transaction currency */
        readonly TransactionCurrency: any;
        /** GUID of the user's transaction currency */
        readonly TransactionCurrencyId: string;
        /** GUID of the user */
        readonly UserId: string;
        /** User's full name */
        readonly UserName: string;
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
        AddGlobalNotification(notification: any, successCallback?: (id: string) => void, errorCallback?: (error: any) => void): Promise<string> | void;

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
        ClearGlobalNotification(uniqueId: string, successCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

        /**
         * Gets the name of the current app
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
         */
        CurrentAppName(successCallback?: (name: string) => void, errorCallback?: (error: any) => void): Promise<string> | void;

        /**
         * Gets metadata for an entity
         * @param entityName The logical name of the entity
         * @param attributes Array of attribute names to retrieve
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getentitymetadata
         */
        EntityMetadata(entityName: string, attributes?: string[], successCallback?: (metadata: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Invokes a process action
         * @param name The name of the action
         * @param parameters Parameters to pass to the action
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/invokeprocessaction
         */
        InvokeProcessAction(name: string, parameters: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Opens a lookup dialog
         * @param lookupOptions Options for the lookup dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/lookupobjects
         */
        LookupObjects(lookupOptions: any, successCallback?: (result: any[]) => void, errorCallback?: (error: any) => void): Promise<any[]> | void;

        /**
         * Navigates to the specified page
         * @param pageInput The page to navigate to
         * @param navigationOptions Navigation options
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
         */
        NavigateTo(pageInput: any, navigationOptions: any, successCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

        /**
         * Displays an alert dialog
         * @param alertStrings Strings used in the alert dialog
         * @param alertOptions Options for the alert dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog
         */
        OpenAlertDialog(alertStrings: { confirmButtonLabel?: string; text: string; title?: string }, alertOptions?: { height?: number; width?: number }, closeCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

        /**
         * Displays a confirm dialog
         * @param confirmStrings Strings used in the confirm dialog
         * @param confirmOptions Options for the confirm dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog
         */
        OpenConfirmDialog(confirmStrings: { cancelButtonLabel?: string; confirmButtonLabel?: string; subtitle?: string; text: string; title?: string }, confirmOptions?: { height?: number; width?: number }, successCallback?: (result: { confirmed: boolean }) => void, errorCallback?: (error: any) => void): Promise<{ confirmed: boolean }> | void;

        /**
         * Displays an error dialog
         * @param errorOptions Options for the error dialog
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openerrordialog
         */
        OpenErrorDialog(errorOptions: { details?: string; errorCode?: number; message?: string }, successCallback?: () => void, errorCallback?: (error: any) => void): Promise<void> | void;

        /**
         * Opens an entity form
         * @param entityFormOptions Options for opening the form
         * @param formParameters Parameters to pass to the form
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openform
         */
        OpenForm(entityFormOptions: any, formParameters?: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

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
        CaptureImage(imageOptions?: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Captures audio using the device microphone
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/captureaudio
         */
        CaptureAudio(successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Captures video using the device camera
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/capturevideo
         */
        CaptureVideo(successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Gets the barcode value using the device camera
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getbarcodevalue
         */
        BarcodeValue(successCallback?: (result: string) => void, errorCallback?: (error: any) => void): Promise<string> | void;

        /**
         * Opens a file picker dialog
         * @param pickFileOptions Options for the file picker
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/pickfile
         */
        PickFile(pickFileOptions?: any, successCallback?: (result: any[]) => void, errorCallback?: (error: any) => void): Promise<any[]> | void;

        /**
         * Gets the current geographical position
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-device/getcurrentposition
         */
        CurrentPosition(successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Gets the advanced configuration setting
         * @param setting The setting name
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getadvancedconfigsetting
         */
        AdvancedConfigSetting(setting: string): number;

        /**
         * Gets the allowed status transitions for an entity
         * @param entityName The logical name of the entity
         * @param stateCode The state code
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getallowedstatustransitions
         */
        AllowedStatusTransitions(entityName: string, stateCode: number, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Gets the current app properties
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
         */
        CurrentAppProperties(successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

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
        OpenFile(file: any, openFileOptions?: any): void;

        /**
         * Gets page context
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
         */
        readonly PageContext: any;

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
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getwebresourceurl
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
        Create(paneOptions: ISidePaneOptions, successCallback?: (pane: ISidePane) => void, errorCallback?: (error: any) => void): Promise<ISidePane> | void;

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
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/xrm-app-sidepanes
     */
    interface ISidePane extends ISidePaneBase {
        /** Closes the side pane and removes it from the side bar. */
        close(): void;
        /** Specify whether the pane should be selected or expanded. */
        select(): void;
        /** Opens a page within the selected pane. This is similar to the navigateTo method. */
        navigate(pageInput: any, navigationOptions?: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): void;
        /** Badge count to display on the pane tab. */
        badge?: number;
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
        CreateRecord(entityLogicalName: string, data: any, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: any) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Deletes an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to delete
         * @param successCallback Function called when the record is deleted successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/deleterecord
         */
        DeleteRecord(entityLogicalName: string, id: string, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: any) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Retrieves an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to retrieve
         * @param options OData system query options ($select, $expand)
         * @param successCallback Function called when the record is retrieved successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrieverecord
         */
        RetrieveRecord(entityLogicalName: string, id: string, options?: string, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

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
        RetrieveRecord<T>(apiConstructorOrFactory: ((data: any) => T) | (new (data: any) => T), entityLogicalName: string, id: string, successCallback: (result: T) => void, errorCallback?: (error: any) => void): void;

        /**
         * Retrieves a collection of entity records
         * @param entityLogicalName Logical name of the entity
         * @param options OData system query options ($select, $filter, $orderby, etc.)
         * @param maxPageSize Maximum number of records to return per page
         * @param successCallback Function called when records are retrieved successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords
         */
        RetrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number, successCallback?: (result: { entities: any[]; nextLink?: string }) => void, errorCallback?: (error: any) => void): Promise<{ entities: any[]; nextLink?: string }> | void;

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

        /**
         * Updates an entity record
         * @param entityLogicalName Logical name of the entity
         * @param id GUID of the record to update
         * @param data Object containing the data to update
         * @param successCallback Function called when the record is updated successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/updaterecord
         */
        UpdateRecord(entityLogicalName: string, id: string, data: any, successCallback?: (result: { id: string; entityType: string }) => void, errorCallback?: (error: any) => void): Promise<{ id: string; entityType: string }> | void;

        /**
         * Executes a single action, function, or CRUD operation
         * @param request Object containing the request parameters
         * @param successCallback Function called when the request is executed successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute
         */
        Execute(request: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Executes a collection of action, function, or CRUD operations
         * @param requests Array of request objects
         * @param successCallback Function called when requests are executed successfully
         * @param errorCallback Function called when the operation fails
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: any[], successCallback?: (result: any[]) => void, errorCallback?: (error: any) => void): Promise<any[]> | void;

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
        Execute(request: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Execute a collection of action, function, or CRUD operations that will be executed against the server even when the user is offline
         * @param requests An array of objects where each object is an action, function, or CRUD request that you want to execute
         * @param successCallback The function that will be passed through and be called by a successful response
         * @param errorCallback The function that will be passed through and be called by a failed response
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/executemultiple
         */
        ExecuteMultiple(requests: any[], successCallback?: (result: any[]) => void, errorCallback?: (error: any) => void): Promise<any[]> | void;
    }

    /**
     * Interface for Offline-specific Web API operations
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline
     */
    interface IWebApiOffline {
        /**
         * Returns whether an entity is offline enabled
         * @param entityLogicalName Logical name of the entity. For example: "account"
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/offline/isavailable
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
        ExecuteEvent(eventName: string, eventParameters: any, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;

        /**
         * Executes a Copilot prompt
         * @param promptText The prompt text to execute
         * @param successCallback Function called on success
         * @param errorCallback Function called on error
         */
        ExecutePrompt(promptText: string, successCallback?: (result: any) => void, errorCallback?: (error: any) => void): Promise<any> | void;
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
     * Key-value pair object
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
     * Interface for process stage
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage
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
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step
     */
    interface ProcessStep {
        /**
         * Updates the progress of the action step
         * @param stepProgress Specify the step progress
         * @param message An optional message that is set as the Alt text on the icon for the step
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/step/setprogress
         */
        SetProgress(stepProgress: number, message?: string): void;
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
     * Entity reference object
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
        readonly FullNameConventionCode: number;
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
    type SaveOption = "saveandclose" | "saveandnew";
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
    type FormNotificationLevel = "ERROR" | "WARNING" | "INFO";
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
