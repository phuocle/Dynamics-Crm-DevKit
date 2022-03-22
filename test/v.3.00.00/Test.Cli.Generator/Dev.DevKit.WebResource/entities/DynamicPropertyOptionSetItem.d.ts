//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPropertyOptionSetItem {
		interface tab_general_Sections {
			dynamicpropertyoptionsetiteminformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the property that uses this option set item. */
			DynamicPropertyId: DevKit.Controls.Lookup;
			/** Type additional information about the property option set item. */
			DynamicPropertyOptionDescription: DevKit.Controls.String;
			/** Type the name of the property option set item. */
			DynamicPropertyOptionName: DevKit.Controls.String;
			/** Shows the value of the property option set item. */
			DynamicPropertyOptionValue: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPropertyOptionSetItem extends DevKit.IForm {
		/**
		* PropertyOptionSetItem [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form PropertyOptionSetItem */
		Body: DevKit.FormPropertyOptionSetItem.Body;
		/** The Process of form PropertyOptionSetItem */
		Process: DevKit.FormPropertyOptionSetItem.Process;
		/** The SidePanes of form PropertyOptionSetItem */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPropertyOptionSetItem2 {
		interface tab_general_Sections {
			dynamicpropertyoptionsetiteminformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the property that uses this option set item. */
			DynamicPropertyId: DevKit.Controls.Lookup;
			/** Type additional information about the property option set item. */
			DynamicPropertyOptionDescription: DevKit.Controls.String;
			/** Type the name of the property option set item. */
			DynamicPropertyOptionName: DevKit.Controls.String;
			/** Shows the value of the property option set item. */
			DynamicPropertyOptionValue: DevKit.Controls.Integer;
		}
	}
	class FormPropertyOptionSetItem2 extends DevKit.IForm {
		/**
		* PropertyOptionSetItem [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form PropertyOptionSetItem2 */
		Body: DevKit.FormPropertyOptionSetItem2.Body;
	}
	class DynamicPropertyOptionSetItemApi {
		/**
		* DynamicsCrm.DevKit DynamicPropertyOptionSetItemApi
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
		/** Internal Use Only */
		DMTImportState: number;
		/** Shows the property that uses this option set item. */
		DynamicPropertyId: string;
		/** Type additional information about the property option set item. */
		DynamicPropertyOptionDescription: string;
		/** Type the name of the property option set item. */
		DynamicPropertyOptionName: string;
		/** Shows the unique identifier of the property option set item. */
		DynamicPropertyOptionSetValueId: string;
		/** Internal Use Only */
		DynamicPropertyOptionSetValueSequenceNumber: number;
		/** Shows the value of the property option set item. */
		DynamicPropertyOptionValue: number;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the record. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace DynamicPropertyOptionSetItem {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}