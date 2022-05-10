﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_transactioncategorypricelevel_Information {
		interface tab__31418574_0439_4AAC_9B66_828C997660DC_Sections {
			_31418574_0439_4AAC_9B66_828C997660DC_SECTION_4: DevKit.Controls.Section;
			_44CB3D24_2528_4D5E_B5C1_87B87831EED6: DevKit.Controls.Section;
			PricingSection: DevKit.Controls.Section;
		}
		interface tab__31418574_0439_4AAC_9B66_828C997660DC extends DevKit.Controls.ITab {
			Section: tab__31418574_0439_4AAC_9B66_828C997660DC_Sections;
		}
		interface Tabs {
			_31418574_0439_4AAC_9B66_828C997660DC: tab__31418574_0439_4AAC_9B66_828C997660DC;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
			msdyn_percent: DevKit.Controls.Decimal;
			/** Enter the price of the transaction category. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
			msdyn_pricecalculation: DevKit.Controls.OptionSet;
			/** Select the price list that this price list line belongs to. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the transaction category whose price is being setup */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the units that transactions of this category can be expressed in. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule that determines in which units the category can be priced. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_transactioncategorypricelevel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_transactioncategorypricelevel_Information */
		Body: DevKit.Formmsdyn_transactioncategorypricelevel_Information.Body;
		/** The Process of form msdyn_transactioncategorypricelevel_Information */
		Process: DevKit.Formmsdyn_transactioncategorypricelevel_Information.Process;
		/** The SidePanes of form msdyn_transactioncategorypricelevel_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_transactioncategorypricelevel_Quick_Create {
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
			/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
			msdyn_percent: DevKit.Controls.Decimal;
			/** Enter the price of the transaction category. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
			msdyn_pricecalculation: DevKit.Controls.OptionSet;
			/** Select the transaction category whose price is being setup */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Select the units that transactions of this category can be expressed in. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule that determines in which units the category can be priced. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_transactioncategorypricelevel_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_transactioncategorypricelevel_Quick_Create */
		Body: DevKit.Formmsdyn_transactioncategorypricelevel_Quick_Create.Body;
	}
	class msdyn_transactioncategorypricelevelApi {
		/**
		* DynamicsCrm.DevKit msdyn_transactioncategorypricelevelApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
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
		/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
		msdyn_percent: number;
		/** Enter the price of the transaction category. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
		msdyn_pricecalculation: OptionSet.msdyn_transactioncategorypricelevel.msdyn_pricecalculation;
		/** Select the price list that this price list line belongs to. */
		msdyn_PriceList: string;
		/** Select the transaction category whose price is being setup */
		msdyn_TransactionCategory: string;
		/** Unique identifier for entity instances */
		msdyn_transactioncategorypricelevelId: string;
		/** Select the units that transactions of this category can be expressed in. */
		msdyn_Unit: string;
		/** Select the unit schedule that determines in which units the category can be priced. */
		msdyn_UnitSchedule: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Transaction Category Price */
		statecode: OptionSet.msdyn_transactioncategorypricelevel.statecode;
		/** Reason for the status of the Transaction Category Price */
		statuscode: OptionSet.msdyn_transactioncategorypricelevel.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: string;
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
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
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
			/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
			readonly msdyn_percent: string;
			/** Enter the price of the transaction category. */
			readonly msdyn_Price: string;
			/** Value of the Price in base currency. */
			readonly msdyn_price_Base: string;
			/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
			readonly msdyn_pricecalculation: string;
			/** Select the price list that this price list line belongs to. */
			readonly msdyn_PriceList: string;
			/** Select the transaction category whose price is being setup */
			readonly msdyn_TransactionCategory: string;
			/** Unique identifier for entity instances */
			readonly msdyn_transactioncategorypricelevelId: string;
			/** Select the units that transactions of this category can be expressed in. */
			readonly msdyn_Unit: string;
			/** Select the unit schedule that determines in which units the category can be priced. */
			readonly msdyn_UnitSchedule: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Transaction Category Price */
			readonly statecode: string;
			/** Reason for the status of the Transaction Category Price */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_transactioncategorypricelevel {
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