//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_webformApi {
		/**
		* DynamicsCrm.DevKit mspp_webformApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Redirect to sign in if the user is anonymous. */
		mspp_authenticationrequired: boolean | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Determines if an existing record can be edited. This setting is ignored If the form mode on the form step is set to edit mode. Otherwise, an edit form wouldn't function properly. */
		mspp_editexistingrecordpermitted: boolean | null;
		mspp_editexpiredmessage: string | null;
		mspp_editexpiredstatecode: number | null;
		mspp_editexpiredstatuscode: number | null;
		mspp_editnotpermittedmessage: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_multiplerecordsperuserpermitted: boolean | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_progressindicatorenabled: boolean | null;
		mspp_progressindicatorignorelaststep: boolean | null;
		/** Location of the progress indicator relative to the form */
		mspp_progressindicatorposition: OptionSet.mspp_webform.mspp_progressindicatorposition | null;
		mspp_progressindicatorprependstepnum: boolean | null;
		mspp_progressindicatortype: OptionSet.mspp_webform.mspp_progressindicatortype | null;
		mspp_provisionedlanguages: number | null;
		/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
		mspp_savechangeswarningmessage: string | null;
		/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
		mspp_savechangeswarningonclose: boolean | null;
		mspp_startnewsessiononload: boolean | null;
		/** Unique identifier for Form Step associated with Multistep Form. */
		mspp_startstep: string | null;
		/** Unique identifier for entity instances */
		mspp_webformId: string | null;
		/** Unique identifier for Website entity associated with this record */
		mspp_websiteid: string | null;
		/** Status of the Multistep Form */
		statecode: OptionSet.mspp_webform.statecode | null;
		/** Reason for the status of the Multistep Form */
		statuscode: OptionSet.mspp_webform.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Redirect to sign in if the user is anonymous. */
			readonly mspp_authenticationrequired: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Determines if an existing record can be edited. This setting is ignored If the form mode on the form step is set to edit mode. Otherwise, an edit form wouldn't function properly. */
			readonly mspp_editexistingrecordpermitted: string;
			readonly mspp_editexpiredmessage: string;
			readonly mspp_editexpiredstatecode: string;
			readonly mspp_editexpiredstatuscode: string;
			readonly mspp_editnotpermittedmessage: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_multiplerecordsperuserpermitted: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_progressindicatorenabled: string;
			readonly mspp_progressindicatorignorelaststep: string;
			/** Location of the progress indicator relative to the form */
			readonly mspp_progressindicatorposition: string;
			readonly mspp_progressindicatorprependstepnum: string;
			readonly mspp_progressindicatortype: string;
			readonly mspp_provisionedlanguages: string;
			/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
			readonly mspp_savechangeswarningmessage: string;
			/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
			readonly mspp_savechangeswarningonclose: string;
			readonly mspp_startnewsessiononload: string;
			/** Unique identifier for Form Step associated with Multistep Form. */
			readonly mspp_startstep: string;
			/** Unique identifier for entity instances */
			readonly mspp_webformId: string;
			/** Unique identifier for Website entity associated with this record */
			readonly mspp_websiteid: string;
			/** Status of the Multistep Form */
			readonly statecode: string;
			/** Reason for the status of the Multistep Form */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webform {
		enum mspp_progressindicatorposition {
			/** Bottom = 756150001*/
			Bottom = 756150001,
			/** Left = 756150002*/
			Left = 756150002,
			/** Right = 756150003*/
			Right = 756150003,
			/** Top = 756150000*/
			Top = 756150000
		}
		enum mspp_progressindicatortype {
			/** Numeric_Step_1_of_N = 756150001*/
			Numeric_Step_1_of_N = 756150001,
			/** Progress_Bar = 756150002*/
			Progress_Bar = 756150002,
			/** Title = 756150000*/
			Title = 756150000
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}