//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_entitypermissionApi {
		/**
		* DynamicsCrm.DevKit mspp_entitypermissionApi
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
		mspp_accountrelationship: string | null;
		/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
		mspp_append: boolean | null;
		/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
		mspp_appendto: boolean | null;
		mspp_contactrelationship: string | null;
		/** The Create privilege controls whether you can create a record. */
		mspp_create: boolean | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Controls whether the user can delete a record. */
		mspp_delete: boolean | null;
		mspp_entitylogicalname: string | null;
		/** The name of the custom entity. */
		mspp_entityname: string | null;
		/** Unique identifier for entity instances */
		mspp_entitypermissionId: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_parententitypermission: string | null;
		mspp_parentrelationship: string | null;
		/** Controls whether the user can read a record. */
		mspp_read: boolean | null;
		mspp_scope: OptionSet.mspp_entitypermission.mspp_scope | null;
		/** Unique identifier for Website associated with Entity Permission */
		mspp_websiteid: string | null;
		/** Controls whether the user can update a record. */
		mspp_write: boolean | null;
		/** Status of the Table Permission */
		statecode: OptionSet.mspp_entitypermission.statecode | null;
		/** Reason for the status of the Table Permission */
		statuscode: OptionSet.mspp_entitypermission.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_accountrelationship: string;
			/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
			readonly mspp_append: string;
			/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
			readonly mspp_appendto: string;
			readonly mspp_contactrelationship: string;
			/** The Create privilege controls whether you can create a record. */
			readonly mspp_create: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Controls whether the user can delete a record. */
			readonly mspp_delete: string;
			readonly mspp_entitylogicalname: string;
			/** The name of the custom entity. */
			readonly mspp_entityname: string;
			/** Unique identifier for entity instances */
			readonly mspp_entitypermissionId: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_parententitypermission: string;
			readonly mspp_parentrelationship: string;
			/** Controls whether the user can read a record. */
			readonly mspp_read: string;
			readonly mspp_scope: string;
			/** Unique identifier for Website associated with Entity Permission */
			readonly mspp_websiteid: string;
			/** Controls whether the user can update a record. */
			readonly mspp_write: string;
			/** Status of the Table Permission */
			readonly statecode: string;
			/** Reason for the status of the Table Permission */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entitypermission {
		enum mspp_scope {
			/** Account = 756150002*/
			Account = 756150002,
			/** Contact = 756150001*/
			Contact = 756150001,
			/** Global = 756150000*/
			Global = 756150000,
			/** Parent = 756150003*/
			Parent = 756150003,
			/** Self = 756150004*/
			Self = 756150004
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