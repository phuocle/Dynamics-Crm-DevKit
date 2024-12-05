//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProductSubstitute {
		interface Tabs {
		}
		interface Body {
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Controls.OptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Controls.Lookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Controls.OptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormProductSubstitute extends DevKit.IForm {
		/**
		* ProductSubstitute [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProductSubstitute */
		Body: DevKit.FormProductSubstitute.Body;
		/** The Navigation of form ProductSubstitute */
		Navigation: DevKit.FormProductSubstitute.Navigation;
		/** The SidePanes of form ProductSubstitute */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProductSubstitute_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select whether the relationship is unidirectional or bidirectional. */
			Direction: DevKit.Controls.OptionSet;
			/** Shows the product that the relationship is defined for. */
			ProductId: DevKit.Controls.Lookup;
			/** Select the type of the product relationship. */
			SalesRelationshipType: DevKit.Controls.OptionSet;
			/** Select the related product that the relationship needs to be defined for. */
			SubstitutedProductId: DevKit.Controls.Lookup;
		}
	}
	class FormProductSubstitute_Quick_Create extends DevKit.IForm {
		/**
		* ProductSubstitute Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProductSubstitute_Quick_Create */
		Body: DevKit.FormProductSubstitute_Quick_Create.Body;
	}
	class ProductSubstituteApi {
		/**
		* DynamicsCrm.DevKit ProductSubstituteApi
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
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Select whether the relationship is unidirectional or bidirectional. */
		Direction: OptionSet.ProductSubstitute.Direction;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** name */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the product that the relationship is defined for. */
		ProductId: string;
		/** Shows the unique identifier of the product relationship. */
		ProductSubstituteId: string;
		/** Select the type of the product relationship. */
		SalesRelationshipType: OptionSet.ProductSubstitute.SalesRelationshipType;
		/** Select the product relationship's status. */
		readonly statecode: OptionSet.ProductSubstitute.statecode;
		/** Shows whether the product relationship is active or inactive. */
		statuscode: OptionSet.ProductSubstitute.statuscode;
		/** Select the related product that the relationship needs to be defined for. */
		SubstitutedProductId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Select whether the relationship is unidirectional or bidirectional. */
			readonly Direction: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** name */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the product that the relationship is defined for. */
			readonly ProductId: string;
			/** Shows the unique identifier of the product relationship. */
			readonly ProductSubstituteId: string;
			/** Select the type of the product relationship. */
			readonly SalesRelationshipType: string;
			/** Select the product relationship's status. */
			readonly statecode: string;
			/** Shows whether the product relationship is active or inactive. */
			readonly statuscode: string;
			/** Select the related product that the relationship needs to be defined for. */
			readonly SubstitutedProductId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the currency associated with the record. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProductSubstitute {
		enum Direction {
			/** 1 */
			Bi_Directional,
			/** 0 */
			Uni_Directional
		}
		enum SalesRelationshipType {
			/** 2 */
			Accessory,
			/** 1 */
			Cross_sell,
			/** 3 */
			Substitute,
			/** 0 */
			Up_sell
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