﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_columnpermissionprofile_Information {
		interface Tabs {
		}
		interface Body {
			mspp_allcolumnpermissions: DevKit.Controls.MultiOptionSet;
			mspp_profilename: DevKit.Controls.String;
			mspp_tablename: DevKit.Controls.String;
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_mspp_tablenameselector: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_columnpermission_columnpermissionprofile: DevKit.Controls.NavigationItem
		}
		interface Grid {
			subgrid_columnpermissions: DevKit.Controls.Grid;
			subgrid_webroles: DevKit.Controls.Grid;
		}
	}
	class Formmspp_columnpermissionprofile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_columnpermissionprofile_Information */
		Body: DevKit.Formmspp_columnpermissionprofile_Information.Body;
		/** The Navigation of form mspp_columnpermissionprofile_Information */
		Navigation: DevKit.Formmspp_columnpermissionprofile_Information.Navigation;
		/** The Grid of form mspp_columnpermissionprofile_Information */
		Grid: DevKit.Formmspp_columnpermissionprofile_Information.Grid;
		/** The SidePanes of form mspp_columnpermissionprofile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_columnpermissionprofileApi {
		/**
		* DynamicsCrm.DevKit mspp_columnpermissionprofileApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		mspp_allcolumnpermissions: Array<OptionSet.mspp_columnpermissionprofile.mspp_allcolumnpermissions>;
		/** Unique identifier for entity instances */
		mspp_columnpermissionprofileId: string;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_profilename: string;
		mspp_tablename: string;
		mspp_websiteid: string;
		/** Status of the Column Permission Profile */
		statecode: OptionSet.mspp_columnpermissionprofile.statecode;
		/** Reason for the status of the Column Permission Profile */
		statuscode: OptionSet.mspp_columnpermissionprofile.statuscode;
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
			/** 746610000 */
			Create,
			/** 746610001 */
			Read,
			/** 746610002 */
			Update
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}