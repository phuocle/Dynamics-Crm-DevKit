//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_opportunitylinetransaction_Information {
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections {
			GeneralSection: DevKit.Form.Controls.ControlSection;
			DateSection: DevKit.Form.Controls.ControlSection;
			VendorSection: DevKit.Form.Controls.ControlSection;
			ProjectSection: DevKit.Form.Controls.ControlSection;
			ProductResourceSection: DevKit.Form.Controls.ControlSection;
			QuantitySection: DevKit.Form.Controls.ControlSection;
			AmountSection: DevKit.Form.Controls.ControlSection;
			BillingSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355 extends DevKit.Form.Controls.IControlTab {
			Section: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections;
		}
		interface Tabs {
			_AA1FBBFA_293F_4830_A2D4_D1CB676EB355: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355;
		}
		interface Body {
			Tab: Tabs;
			/** Select the name of the customer to which this opportunity belongs. */
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount on the estimate line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Select the calculation method used to determine the amount on the estimate line.  */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the quantity used as basis for calculating quantity on this estimate line. */
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Select the customer contact of this opportunity. */
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Select whether the customer identified on the opportunity was an account or a contact */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a description of the opportunity line estimate. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end time of the opportunity line estimate. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price on the estimate line. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the price list used on the opportunity line estimate. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the product on the estimate line. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Select the name of the Project that this estimate line is for. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity of the opportunity estimate line. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the role that is estimated to perform the work. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date of the opportunity line estimate. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the name of the project task for which this estimate line was created. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Transaction classification of the Opportunity line transaction */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Transaction type for the opportunity line. */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the unit of the estimate quantity. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_opportunitylinetransaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_opportunitylinetransaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_opportunitylinetransaction_Information */
		Body: LuckyMokey.Formmsdyn_opportunitylinetransaction_Information.Body;
	}
	class msdyn_opportunitylinetransactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_opportunitylinetransactionApi
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
		/** Select the name of the customer to which this opportunity belongs. */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Enter the amount on the estimate line. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the calculation method used to determine the amount on the estimate line.  */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Amount in base currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Price in base currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the quantity used as basis for calculating quantity on this estimate line. */
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the resource. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Select the customer contact of this opportunity. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select whether the customer identified on the opportunity was an account or a contact */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type a description of the opportunity line estimate. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the end time of the opportunity line estimate. */
		msdyn_EndDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the opportunity line that this estimate line belongs to. */
		msdyn_OpportunityLine: DevKit.WebApi.StringValue;
		/** Shows the entity instances. */
		msdyn_opportunitylinetransactionId: DevKit.WebApi.GuidValue;
		/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Enter the price on the estimate line. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price list used on the opportunity line estimate. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product on the estimate line. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Select the name of the Project that this estimate line is for. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the quantity of the opportunity estimate line. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Select the role that is estimated to perform the work. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit of the resource who is estimated to perform the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Enter the start date of the opportunity line estimate. */
		msdyn_StartDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the name of the project task for which this estimate line was created. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		/** Select the category of the transaction. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Transaction classification of the Opportunity line transaction */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Transaction type for the opportunity line. */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Select the unit of the estimate quantity. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit group of the opportunity line estimate. */
		msdyn_UnitSchedule: DevKit.WebApi.LookupValue;
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
		/** Status of the Opportunity Line Detail */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Opportunity Line Detail */
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
	namespace msdyn_opportunitylinetransaction {
		enum msdyn_AmountMethod {
			/** 690970000 */
			Tax_Calculation,
			/** 192350000 */
			Multiply_Quantity_By_Price,
			/** 192350001 */
			Fixed_Price,
			/** 192350002 */
			Multiply_Basis_Quantity_By_Price,
			/** 192350003 */
			Multiply_Basis_Amount_By_Percent
		}
		enum msdyn_BillingType {
			/** 192350000 */
			Non_Chargeable,
			/** 192350001 */
			Chargeable,
			/** 192350002 */
			Complimentary,
			/** 192350003 */
			Not_Available
		}
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
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
		enum msdyn_TransactionTypeCode {
			/** 192350000 */
			Cost,
			/** 192350004 */
			Project_Contract,
			/** 192350005 */
			Unbilled_Sales,
			/** 192350006 */
			Billed_Sales,
			/** 192350007 */
			Resourcing_Unit_Cost,
			/** 192350008 */
			Inter_Organizational_Sales
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