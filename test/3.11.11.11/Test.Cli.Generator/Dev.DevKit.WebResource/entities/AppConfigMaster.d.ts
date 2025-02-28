﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigMasterApi {
		/**
		* DynamicsCrm.DevKit AppConfigMasterApi
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
		/** System-Populated App Configuration instance identifier. */
		readonly AppConfigMasterId: string;
		/** Enter the App Configuration and Setting property data type. */
		readonly ConfigType: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enter the default value of the App Configuration and Setting property. */
		readonly DefaultValue: string;
		/** For internal use only. */
		readonly ImportSequenceNumber: number;
		/** Enter whether this App Configuration and Setting is Navigation Setting. */
		readonly IsNavigationSetting: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Enter the name of the App Configuration and Setting property with which this customization will be identified. */
		Name: string;
		/** System-calculated field for Organization identifier. */
		readonly OrganizationId: string;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** ParentAppConfigMasterId */
		readonly ParentAppConfigMasterId: string;
		/** Validator */
		readonly Validator: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** System-Populated App Configuration instance identifier. */
			readonly AppConfigMasterId: string;
			/** Enter the App Configuration and Setting property data type. */
			readonly ConfigType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the default value of the App Configuration and Setting property. */
			readonly DefaultValue: string;
			/** For internal use only. */
			readonly ImportSequenceNumber: string;
			/** Enter whether this App Configuration and Setting is Navigation Setting. */
			readonly IsNavigationSetting: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the name of the App Configuration and Setting property with which this customization will be identified. */
			readonly Name: string;
			/** System-calculated field for Organization identifier. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** ParentAppConfigMasterId */
			readonly ParentAppConfigMasterId: string;
			/** Validator */
			readonly Validator: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfigMaster {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}