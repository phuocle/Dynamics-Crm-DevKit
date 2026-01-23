//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webrole_Information {
		interface tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5_Sections {
			/** General */
			_5E67BE2F_D70F_47BE_B2BE_4AAA15B945C8: DevKit.Controls.Section;
		}
		/** General */
		interface tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5 extends DevKit.Controls.ITab {
			Section: tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5_Sections;
		}
		interface Tabs {
			/** General */
			_DF9D451B_B910_4EF5_BB24_EA08E5441AD5: tab__DF9D451B_B910_4EF5_BB24_EA08E5441AD5;
		}
		interface Body {
			Tab: Tabs;
			/** Anonymous Users Role */
			mspp_anonymoususersrole: DevKit.Controls.Boolean;
			/** Authenticated Users Role */
			mspp_authenticatedusersrole: DevKit.Controls.Boolean;
			/** Description */
			mspp_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Role. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
	}
	export class Formmspp_webrole_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_webrole_Information */
		Body: DevKit.Formmspp_webrole_Information.Body;
	}
	export class mspp_webroleApi {
		/**
		* DynamicsCrm.DevKit mspp_webroleApi
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
		mspp_anonymoususersrole: boolean | null;
		mspp_authenticatedusersrole: boolean | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_description: string | null;
		/** An alternate key that is not intended to be localized to allow retrieval of a specific Web Role in workflows or code. */
		mspp_key: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		/** Unique identifier for entity instances */
		mspp_webroleId: string | null;
		/** Unique identifier for Website associated with Web Role. */
		mspp_websiteid: string | null;
		/** Status of the Web Role */
		statecode: OptionSet.mspp_webrole.statecode | null;
		/** Reason for the status of the Web Role */
		statuscode: OptionSet.mspp_webrole.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_anonymoususersrole: string;
			readonly mspp_authenticatedusersrole: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** An alternate key that is not intended to be localized to allow retrieval of a specific Web Role in workflows or code. */
			readonly mspp_key: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for entity instances */
			readonly mspp_webroleId: string;
			/** Unique identifier for Website associated with Web Role. */
			readonly mspp_websiteid: string;
			/** Status of the Web Role */
			readonly statecode: string;
			/** Reason for the status of the Web Role */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webrole {
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