//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotelineanalyticsbreakdown_Information {
		interface Tabs {
		}
		interface Body {
			/** Type a description of the entity breakdown. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotelineanalyticsbreakdown_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelineanalyticsbreakdown_Information */
		Body: DevKit.Formmsdyn_quotelineanalyticsbreakdown_Information.Body;
		/** The Process of form msdyn_quotelineanalyticsbreakdown_Information */
		Process: DevKit.Formmsdyn_quotelineanalyticsbreakdown_Information.Process;
		/** The SidePanes of form msdyn_quotelineanalyticsbreakdown_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_quotelineanalyticsbreakdownApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelineanalyticsbreakdownApi
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
		/** Enter the amount on the quote line estimate. */
		msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Select whether the quote line estimate will be charged to the customer. Valid values are Chargeable, Non-chargeable and Complimentary. Only chargeable transactions will affect the invoice totals. */
		msdyn_BillingType: OptionSet.msdyn_quotelineanalyticsbreakdown.msdyn_BillingType;
		/** Enter the estimated end date of the quote line estimate. */
		msdyn_EndDateTime_UtcDateOnly: Date;
		/** Type a description of the entity breakdown. */
		msdyn_name: string;
		/** Enter the unit price on the quote line estimate. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the quote that this quote line estimate belongs to. */
		msdyn_Quote: string;
		/** Unique identifier for entity instances */
		msdyn_quotelineanalyticsbreakdownId: string;
		/** Select the quote line estimate. */
		msdyn_QuoteLineDetail: string;
		/** Shows the billing milestone for the quote line. */
		msdyn_QuoteLineScheduleOfValue: string;
		/** Select the role that is estimated on the quote line. */
		msdyn_ResourceCategory: string;
		/** Enter the estimated start date of the quote line estimate. */
		msdyn_StartDateTime_UtcDateOnly: Date;
		/** Select the category identified on the quote line estimate. */
		msdyn_TransactionCategory: string;
		/** Transaction classification of  Project quote analytics */
		msdyn_TransactionClassification: OptionSet.msdyn_quotelineanalyticsbreakdown.msdyn_TransactionClassification;
		/** Transaction type of the Project quote analytics */
		msdyn_TransactionTypeCode: OptionSet.msdyn_quotelineanalyticsbreakdown.msdyn_TransactionTypeCode;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Quote Line Analytics Breakdown */
		statecode: OptionSet.msdyn_quotelineanalyticsbreakdown.statecode;
		/** Reason for the status of the Quote Line Analytics Breakdown */
		statuscode: OptionSet.msdyn_quotelineanalyticsbreakdown.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelineanalyticsbreakdown {
		enum msdyn_BillingType {
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350000 */
			Non_Chargeable,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_TransactionClassification {
			/** 690970001 */
			Additional,
			/** 690970000 */
			Commission,
			/** 192350001 */
			Expense,
			/** 192350004 */
			Fee,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time
		}
		enum msdyn_TransactionTypeCode {
			/** 192350006 */
			Billed_Sales,
			/** 192350000 */
			Cost,
			/** 192350008 */
			Inter_Organizational_Sales,
			/** 192350004 */
			Project_Contract,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350005 */
			Unbilled_Sales
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}