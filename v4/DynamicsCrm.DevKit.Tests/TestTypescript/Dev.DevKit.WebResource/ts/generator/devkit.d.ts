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
    type Guid = string;

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
            readonly AttributeType: string;

            /**
             * Returns the name assigned to the control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getname
             */
            readonly ControlName: string;

            /**
             * Returns a string value that represents the type of control
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getcontroltype
             */
            readonly ControlType: string;

            /**
             * Returns a string value that represents formatting options for the attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getformat
             */
            readonly Format: string;

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
            RequiredLevel: "none" | "required" | "recommended";

            /**
             * Get/Set a value indicating when data from the attribute will be submitted when the record is saved
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getsubmitmode
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setsubmitmode
             */
            SubmitMode: "always" | "never" | "dirty";

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
         * Interface for String controls
         */
        interface String extends IControl {
            /**
             * Returns a number indicating the maximum length of a string or memo attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
             */
            readonly MaxLength: number;

            /**
             * Get/Set the data value for a string attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string | null;
        }

        /**
         * Interface for Memo (multiline text) controls
         */
        interface Memo extends IControl {
            /**
             * Returns a number indicating the maximum length of a memo attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
             */
            readonly MaxLength: number;

            /**
             * Get/Set the data value for a memo attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: string | null;
        }

        /**
         * Interface for Integer controls
         */
        interface Integer extends IControl {
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
             * Get/Set the data value for an integer attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
        }

        /**
         * Interface for Decimal controls
         */
        interface Decimal extends IControl {
            /**
             * Returns a number indicating the maximum allowed value for a decimal attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmax
             */
            readonly Max: number;

            /**
             * Returns a number indicating the minimum allowed value for a decimal attribute
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
             * Get/Set the data value for a decimal attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
        }

        /**
         * Interface for Double (floating point) controls
         */
        interface Double extends IControl {
            /**
             * Returns a number indicating the maximum allowed value for a double attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmax
             */
            readonly Max: number;

            /**
             * Returns a number indicating the minimum allowed value for a double attribute
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
             * Get/Set the data value for a double attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
        }

        /**
         * Interface for Money controls
         */
        interface Money extends IControl {
            /**
             * Returns a number indicating the maximum allowed value for a money attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmax
             */
            readonly Max: number;

            /**
             * Returns a number indicating the minimum allowed value for a money attribute
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
             * Get/Set the data value for a money attribute
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
             */
            Value: number | null;
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
         * Interface for OptionSet controls
         */
        interface OptionSet extends IControl {
            /**
             * Returns a value that represents the value set for an OptionSet attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number;

            /**
             * Returns an option object with the value matching the argument passed to the method
             * @param value The enumeration value of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(value: number): OptionSetOption;

            /**
             * Returns an option object with the label matching the argument passed to the method
             * @param label The label of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(label: string): OptionSetOption;

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
        interface MultiOptionSet extends IControl {
            /**
             * Returns a value that represents the values set for a MultiOptionSet attribute when the form is opened
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
             */
            readonly InitialValue: number[];

            /**
             * Returns an option object with the value matching the argument passed to the method
             * @param value The enumeration value of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(value: number): OptionSetOption;

            /**
             * Returns an option object with the label matching the argument passed to the method
             * @param label The label of the option
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getoption
             */
            Option(label: string): OptionSetOption;

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
            readonly Options: OptionSetOption[];

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
         * Entity reference object for Lookup
         */
        interface EntityReference {
            /** The GUID id value of the record */
            id: string;
            /** The name of the record */
            name: string;
            /** The logical name of the entity */
            entityType: string;
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
         * Interface for Date controls (without time)
         */
        interface Date extends IControl {
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
            DisplayState: "expanded" | "collapsed";

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
             * Refreshes the data displayed in the grid
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/refresh
             */
            Refresh(): void;

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
             * Get the total record count (limited to 5000)
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/gettotalrecordcount
             */
            readonly TotalRecordCount: number;

            /**
             * Get/Set a value that indicates whether the grid is currently visible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/grids/setvisible
             */
            Visible: boolean;
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
            Controls(arg?: string | number): any[] | any;

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
            /**
             * Returns the attribute that the control is bound to
             */
            readonly Attribute: any;

            /**
             * Returns the name assigned to the control
             */
            readonly ControlName: string;

            /**
             * Returns the type of the control
             */
            readonly ControlType: string;

            /**
             * Returns a boolean value indicating whether the control is disabled
             */
            readonly Disabled: boolean;

            /**
             * Returns the label for the control
             */
            readonly Label: string;

            /**
             * Returns a value indicating whether the control is visible
             */
            readonly Visible: boolean;
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
         * Interface for Footer controls
         */
        interface IFooter {
            /**
             * Get/Set the visibility of footer section
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-footersection/getvisible
             * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-footersection/setvisible
             */
            Visible: boolean;
        }

        /**
         * Interface for ActionCards control
         */
        interface ActionCards {
            /**
             * Refreshes the action cards
             */
            Refresh(): void;
        }

        /**
         * Interface for Map control
         */
        interface Map {
            /**
             * Get/Set a value that indicates whether the map control is visible
             */
            Visible: boolean;
        }

        /**
         * Interface for Note control
         */
        interface Note {
            /**
             * Get/Set a value that indicates whether the note control is visible
             */
            Visible: boolean;
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
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/save
         */
        Save(saveOptions?: { saveMode: number }): Promise<void>;

        /**
         * Asynchronously refreshes the data of the form without reloading the page
         * @param save A boolean value to indicate if data should be saved before it is refreshed
         * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean): Promise<void>;

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
        SetFormNotification(message: string, level: "ERROR" | "WARNING" | "INFO", uniqueId: string): boolean;

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
}
