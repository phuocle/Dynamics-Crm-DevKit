//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_contractperformance_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_contractperformance_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_contractperformance_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractperformance_Information */
		Body: DevKit.Formmsdyn_contractperformance_Information.Body;
		/** The SidePanes of form msdyn_contractperformance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_contractperformanceApi {
		/**
		* DynamicsCrm.DevKit msdyn_contractperformanceApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the Billed amount for the order. */
		msdyn_BilledAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Billed Amount in base currency. */
		msdyn_billedamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Code to identify billing type. */
		msdyn_BillingTypeCode: DevKit.WebApi.IntegerValue;
		/** name of billing Type */
		msdyn_BillingTypeName: DevKit.WebApi.StringValue;
		/** Unique identifier of contractline id. */
		msdyn_ContractLineId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_contractperformanceId: DevKit.WebApi.GuidValue;
		/** Type the Contracted amount attached with the contract. */
		msdyn_Contractvalue: DevKit.WebApi.MoneyValue;
		/** Value of the Contract value in base currency. */
		msdyn_contractvalue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the Cost incurred amount for the order. */
		msdyn_CostIncurred: DevKit.WebApi.MoneyValue;
		/** Value of the Cost Incurred in base currency. */
		msdyn_costincurred_Base: DevKit.WebApi.MoneyValueReadonly;
		/** 1,000,000,000,000.0000 */
		msdyn_EstimatedCost: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Cost in base currency. */
		msdyn_estimatedcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Expected margin of contract and contractLine */
		msdyn_ExpectedMargin: DevKit.WebApi.DecimalValue;
		/** Gross Margin of contract and contract line */
		msdyn_GrossMargin: DevKit.WebApi.DecimalValue;
		/** Record is Product Type or not */
		msdyn_IsProduct: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Choose the related order so that order data and contractPerformance data are linked for reporting and analytics. */
		msdyn_salesorderid: DevKit.WebApi.LookupValue;
		/** Array of transaction classification which converted into string */
		msdyn_TransactionClassification: DevKit.WebApi.StringValue;
		msdyn_Unit: DevKit.WebApi.StringValue;
		msdyn_UnitPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Unit Price in base currency. */
		msdyn_unitprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Contract Performance */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Contract Performance */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_contractperformance {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}