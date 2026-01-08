//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_columnpermissionprofile_Information {
		interface Tabs {
		}
		interface Body {
			/** All Column Permissions */
			mspp_allcolumnpermissions: DevKit.Controls.MultiOptionSet;
			/** Profile Name */
			mspp_profilename: DevKit.Controls.String;
			/** Table Name */
			mspp_tablename: DevKit.Controls.String;
			/** Website */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_tablenameselector: DevKit.Controls.WebResource;
		}
		interface Grid {
			/** Column Permissions */
			subgrid_columnpermissions: DevKit.Controls.Grid;
			/** Webroles */
			subgrid_webroles: DevKit.Controls.Grid;
		}
	}
	export class Formmspp_columnpermissionprofile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_columnpermissionprofile_Information */
		Body: DevKit.Formmspp_columnpermissionprofile_Information.Body;
		/** The Grid of form mspp_columnpermissionprofile_Information */
		Grid: DevKit.Formmspp_columnpermissionprofile_Information.Grid;
	}
	export class mspp_columnpermissionprofileApi {
		/**
		* DynamicsCrm.DevKit mspp_columnpermissionprofileApi
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
		mspp_allcolumnpermissions: Array<OptionSet.mspp_columnpermissionprofile.mspp_allcolumnpermissions> | null;
		/** Unique identifier for entity instances */
		mspp_columnpermissionprofileId: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_profilename: string | null;
		mspp_tablename: string | null;
		mspp_websiteid: string | null;
		/** Status of the Column Permission Profile */
		statecode: OptionSet.mspp_columnpermissionprofile.statecode | null;
		/** Reason for the status of the Column Permission Profile */
		statuscode: OptionSet.mspp_columnpermissionprofile.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_allcolumnpermissions: Array<string>;
			/** Unique identifier for entity instances */
			readonly mspp_columnpermissionprofileId: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_profilename: string;
			readonly mspp_tablename: string;
			readonly mspp_websiteid: string;
			/** Status of the Column Permission Profile */
			readonly statecode: string;
			/** Reason for the status of the Column Permission Profile */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_columnpermissionprofile {
		enum mspp_allcolumnpermissions {
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