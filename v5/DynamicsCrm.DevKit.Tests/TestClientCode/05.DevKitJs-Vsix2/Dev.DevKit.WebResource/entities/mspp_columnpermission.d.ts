//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_columnpermission_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			mspp_columnname: DevKit.Controls.String;
			/** Column Permission Profile */
			mspp_columnpermissionprofileid: DevKit.Controls.Lookup;
			/** Permissions */
			mspp_permissions: DevKit.Controls.MultiOptionSet;
			WebResource_mspp_columnnameselector: DevKit.Controls.WebResource;
		}
	}
	export class Formmspp_columnpermission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_columnpermission_Information */
		Body: DevKit.Formmspp_columnpermission_Information.Body;
	}
	export class mspp_columnpermissionApi {
		/**
		* DynamicsCrm.DevKit mspp_columnpermissionApi
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
		/** The name of the custom entity. */
		mspp_columnname: string | null;
		/** Unique identifier for entity instances */
		mspp_columnpermissionId: string | null;
		mspp_columnpermissionprofileid: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_permissions: Array<OptionSet.mspp_columnpermission.mspp_permissions> | null;
		/** Status of the Column Permission */
		statecode: OptionSet.mspp_columnpermission.statecode | null;
		/** Reason for the status of the Column Permission */
		statuscode: OptionSet.mspp_columnpermission.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The name of the custom entity. */
			readonly mspp_columnname: string;
			/** Unique identifier for entity instances */
			readonly mspp_columnpermissionId: string;
			readonly mspp_columnpermissionprofileid: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_permissions: Array<string>;
			/** Status of the Column Permission */
			readonly statecode: string;
			/** Reason for the status of the Column Permission */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_columnpermission {
		enum mspp_permissions {
			/** Create = 746610000*/
			Create = 746610000,
			/** Read = 746610001*/
			Read = 746610001,
			/** Update = 746610002*/
			Update = 746610002
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