﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_sitesetting_Information {
		interface Tabs {
		}
		interface Body {
			mspp_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_value: DevKit.Controls.String;
			/** Unique identifier for Website associated with Site Setting. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmspp_sitesetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_sitesetting_Information */
		Body: DevKit.Formmspp_sitesetting_Information.Body;
		/** The Navigation of form mspp_sitesetting_Information */
		Navigation: DevKit.Formmspp_sitesetting_Information.Navigation;
		/** The SidePanes of form mspp_sitesetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_sitesettingApi {
		/**
		* DynamicsCrm.DevKit mspp_sitesettingApi
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
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for entity instances */
		mspp_sitesettingId: string;
		mspp_value: string;
		/** Unique identifier for Website associated with Site Setting. */
		mspp_websiteid: string;
		/** Status of the Site Setting */
		statecode: OptionSet.mspp_sitesetting.statecode;
		/** Reason for the status of the Site Setting */
		statuscode: OptionSet.mspp_sitesetting.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for entity instances */
			readonly mspp_sitesettingId: string;
			readonly mspp_value: string;
			/** Unique identifier for Website associated with Site Setting. */
			readonly mspp_websiteid: string;
			/** Status of the Site Setting */
			readonly statecode: string;
			/** Reason for the status of the Site Setting */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_sitesetting {
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