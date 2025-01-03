﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projectparameterpricelist_Information {
		interface tab__6C6C63A1_20B3_4780_9C4C_C1275A68A1EE_Sections {
			_6C6C63A1_20B3_4780_9C4C_C1275A68A1EE_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__6C6C63A1_20B3_4780_9C4C_C1275A68A1EE extends DevKit.Controls.ITab {
			Section: tab__6C6C63A1_20B3_4780_9C4C_C1275A68A1EE_Sections;
		}
		interface Tabs {
			_6C6C63A1_20B3_4780_9C4C_C1275A68A1EE: tab__6C6C63A1_20B3_4780_9C4C_C1275A68A1EE;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Select the price list that is being associated to the project parameter record. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the project parameter record that this price list linked to. */
			msdyn_ProjectParameter: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_projectparameterpricelist_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectparameterpricelist_Information */
		Body: DevKit.Formmsdyn_projectparameterpricelist_Information.Body;
		/** The Process of form msdyn_projectparameterpricelist_Information */
		Process: DevKit.Formmsdyn_projectparameterpricelist_Information.Process;
		/** The SidePanes of form msdyn_projectparameterpricelist_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_projectparameterpricelist_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the price list that is being associated to the project parameter record. */
			msdyn_PriceList: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_projectparameterpricelist_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projectparameterpricelist_Quick_Create */
		Body: DevKit.Formmsdyn_projectparameterpricelist_Quick_Create.Body;
	}
	class msdyn_projectparameterpricelistApi {
		/**
		* DynamicsCrm.DevKit msdyn_projectparameterpricelistApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Select the price list that is being associated to the project parameter record. */
		msdyn_PriceList: string;
		/** Select the project parameter record that this price list linked to. */
		msdyn_ProjectParameter: string;
		/** Unique identifier for entity instances */
		msdyn_projectparameterpricelistId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Project Parameter Price List */
		statecode: OptionSet.msdyn_projectparameterpricelist.statecode;
		/** Reason for the status of the Project Parameter Price List */
		statuscode: OptionSet.msdyn_projectparameterpricelist.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the custom entity. */
			readonly msdyn_description: string;
			/** Select the price list that is being associated to the project parameter record. */
			readonly msdyn_PriceList: string;
			/** Select the project parameter record that this price list linked to. */
			readonly msdyn_ProjectParameter: string;
			/** Unique identifier for entity instances */
			readonly msdyn_projectparameterpricelistId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Project Parameter Price List */
			readonly statecode: string;
			/** Reason for the status of the Project Parameter Price List */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_projectparameterpricelist {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}