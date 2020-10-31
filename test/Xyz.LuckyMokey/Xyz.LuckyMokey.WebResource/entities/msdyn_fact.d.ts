//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_fact_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_fact_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fact_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_fact_Information */
		Body: LuckyMokey.Formmsdyn_fact_Information.Body;
	}
	class msdyn_factApi {
		/**
		* DynamicsCrm.DevKit msdyn_factApi
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
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		msdyn_ActChargeableBilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Chargeable Billed Sales Amount in base currency. */
		msdyn_actchargeablebilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActChargeableBilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActChargeableCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Chargeable Cost Amount in base currency. */
		msdyn_actchargeablecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActChargeableCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActChargeableUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Chargeable Unbilled Sales Amount in base currency. */
		msdyn_actchargeableunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActChargeableUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActNoChargeBilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual No Charge Billed Sales Amount in base currency. */
		msdyn_actnochargebilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActNoChargeBilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActNoChargeCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual No Charge Cost Amount in base currency. */
		msdyn_actnochargecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActNoChargeCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActNoChargeUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual No Charge Unbilled Sales Amount in base currency. */
		msdyn_actnochargeunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActNoChargeUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActNonChargeableCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Non Chargeable Cost Amount in base currency. */
		msdyn_actnonchargeablecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActNonChargeableCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_ActNonChargeableUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Non Chargeable Unbilled Sales Amount in base currency. */
		msdyn_actnonchargeableunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_ActNonChargeableUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Enter the transaction date of the business event. */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_earnedrevenue: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Earned Revenue in base currency. */
		msdyn_earnedrevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the end date for this transaction. */
		msdyn_EndDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_EstChargeableBilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Chargeable Billed Sales Amount in base currency. */
		msdyn_estchargeablebilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstChargeableBilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstChargeableCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Chargeable Cost Amount in base currency. */
		msdyn_estchargeablecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstChargeableCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstChargeableUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Chargeable Unbilled Sales Amount in base currency. */
		msdyn_estchargeableunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstChargeableUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_Estimate: DevKit.WebApi.LookupValue;
		msdyn_estimatelineid: DevKit.WebApi.LookupValue;
		msdyn_EstNoChargeBilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated No Charge Billed Sales Amount in base currency. */
		msdyn_estnochargebilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstNoChargeBilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstNoChargeCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated No Charge Cost Amount in base currency. */
		msdyn_estnochargecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstNoChargeCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstNoChargeUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated No Charge Unbilled Sales Amount in base currency. */
		msdyn_estnochargeunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstNoChargeUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstNonChargeableCostAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Non Chargeable Cost Amount in base currency. */
		msdyn_estnonchargeablecostamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstNonChargeableCostQuantity: DevKit.WebApi.DecimalValue;
		msdyn_EstNonChargeableUnbilledSalesAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Estimated Non Chargeable Unbilled Sales Amount in base currency. */
		msdyn_estnonchargeableunbilledsalesamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_EstNonChargeableUnbilledSalesQuantity: DevKit.WebApi.DecimalValue;
		/** Unique identifier for entity instances */
		msdyn_factId: DevKit.WebApi.GuidValue;
		msdyn_FactType: DevKit.WebApi.OptionSetValue;
		msdyn_grossmargin: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Gross Margin in base currency. */
		msdyn_grossmargin_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_Product: DevKit.WebApi.LookupValue;
		msdyn_Project: DevKit.WebApi.LookupValue;
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		msdyn_SalesContract: DevKit.WebApi.LookupValue;
		/** (Deprecated) */
		msdyn_SalesContractLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Project Contract Line associated with Fact. */
		msdyn_SalesContractLineId: DevKit.WebApi.LookupValue;
		/** Enter the start date. */
		msdyn_StartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_Task: DevKit.WebApi.LookupValue;
		msdyn_totalcost: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Total Cost in base currency. */
		msdyn_totalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_totalhours: DevKit.WebApi.DecimalValueReadonly;
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		msdyn_VendorType: DevKit.WebApi.OptionSetValue;
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
		/** Status of the Fact */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Fact */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_fact {
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
		}
		enum msdyn_FactType {
			/** 192350000 */
			Actual,
			/** 192350001 */
			Estimate
		}
		enum msdyn_TransactionClassification {
			/** 690970000 */
			Commission,
			/** 690970001 */
			Additional,
			/** 690970002 */
			Tax,
			/** 192350000 */
			Time,
			/** 192350001 */
			Expense,
			/** 192350002 */
			Material,
			/** 192350003 */
			Milestone,
			/** 192350004 */
			Fee
		}
		enum msdyn_VendorType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}