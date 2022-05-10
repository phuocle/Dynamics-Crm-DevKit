//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourcecategorymarkuppricelevel_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
			msdyn_percent: DevKit.Controls.Decimal;
			/** Select the price list to which this price list item is being added. */
			msdyn_pricelist: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_resourcecategorymarkuppricelevel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcecategorymarkuppricelevel_Information */
		Body: DevKit.Formmsdyn_resourcecategorymarkuppricelevel_Information.Body;
		/** The Process of form msdyn_resourcecategorymarkuppricelevel_Information */
		Process: DevKit.Formmsdyn_resourcecategorymarkuppricelevel_Information.Process;
		/** The SidePanes of form msdyn_resourcecategorymarkuppricelevel_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create {
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
			/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
			msdyn_percent: DevKit.Controls.Decimal;
		}
	}
	class Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcecategorymarkuppricelevel_Quick_Create */
		Body: DevKit.Formmsdyn_resourcecategorymarkuppricelevel_Quick_Create.Body;
	}
	class msdyn_resourcecategorymarkuppricelevelApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourcecategorymarkuppricelevelApi
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
		/** Select the bookable resource that the price is being set for. */
		msdyn_bookableresource: string;
		/** The name of the custom entity. */
		msdyn_description: string;
		/** Select the organizational unit of the resource performing the work. */
		msdyn_organizationalunit: string;
		/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
		msdyn_percent: number;
		/** Select the price calculation method to determine the price. */
		readonly msdyn_pricecalculation: OptionSet.msdyn_resourcecategorymarkuppricelevel.msdyn_pricecalculation;
		/** Select the price list to which this price list item is being added. */
		msdyn_pricelist: string;
		/** Select the role that the price is being set for. */
		msdyn_resourcecategory: string;
		/** Unique identifier for entity instances */
		msdyn_resourcecategorymarkuppricelevelId: string;
		/** Select the transaction category that the price is being set for. */
		msdyn_transactioncategory: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Role Price Markup */
		statecode: OptionSet.msdyn_resourcecategorymarkuppricelevel.statecode;
		/** Reason for the status of the Role Price Markup */
		statuscode: OptionSet.msdyn_resourcecategorymarkuppricelevel.statuscode;
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
			/** Select the bookable resource that the price is being set for. */
			readonly msdyn_bookableresource: string;
			/** The name of the custom entity. */
			readonly msdyn_description: string;
			/** Select the organizational unit of the resource performing the work. */
			readonly msdyn_organizationalunit: string;
			/** Enter the markup percent over base price. This field is relevant only when the price calculation method selected is "Markup percentage". */
			readonly msdyn_percent: string;
			/** Select the price calculation method to determine the price. */
			readonly msdyn_pricecalculation: string;
			/** Select the price list to which this price list item is being added. */
			readonly msdyn_pricelist: string;
			/** Select the role that the price is being set for. */
			readonly msdyn_resourcecategory: string;
			/** Unique identifier for entity instances */
			readonly msdyn_resourcecategorymarkuppricelevelId: string;
			/** Select the transaction category that the price is being set for. */
			readonly msdyn_transactioncategory: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Role Price Markup */
			readonly statecode: string;
			/** Reason for the status of the Role Price Markup */
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
	namespace msdyn_resourcecategorymarkuppricelevel {
		enum msdyn_pricecalculation {
			/** 192350001 */
			At_cost,
			/** 192350002 */
			Markup_percentage,
			/** 192350000 */
			Price_per_unit
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}