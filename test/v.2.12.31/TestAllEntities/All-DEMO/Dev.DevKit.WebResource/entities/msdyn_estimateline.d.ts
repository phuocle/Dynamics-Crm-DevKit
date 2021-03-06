﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_estimateline_Information {
		interface tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9_Sections {
			ActivityGroup: DevKit.Controls.Section;
			AmountGroup: DevKit.Controls.Section;
			BillingGroup: DevKit.Controls.Section;
			DateGroup: DevKit.Controls.Section;
			PartyGroup: DevKit.Controls.Section;
			ProductResourceGroup: DevKit.Controls.Section;
			QuantityGroup: DevKit.Controls.Section;
		}
		interface tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9 extends DevKit.Controls.ITab {
			Section: tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9_Sections;
		}
		interface Tabs {
			_D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9: tab__D8123BFE_186B_4FAF_8ECE_48DD82A8DCE9;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the customer for the estimate line. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Shows the amount on the estimate line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Shows the calculation method used to determine the amount on the estimate line.  */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Shows whether this estimate line is charged to the customer.  */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the bookable resource for which estimates are generated. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Shows the name of the customer contact. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Select the type of customer. */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the transaction date of the estimate line. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date and time. */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** Shows the percent for the estimate line. */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Shows the price for this estimate line. */
			msdyn_Price: DevKit.Controls.Money;
			/** Shows the price list used in this estimate line. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the product. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the project for this estimate line. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the estimated quantity of work, cost, and sales. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Shows the role of this resource on the estimate line. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Shows the start date and time for the task for this estimate line. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Shows the task related to this estimate line. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the type of transaction. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Shows the transaction classification for this estimate line. */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Shows the transaction type for this estimate line. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Shows the unit of measurement for this estimate line. */
			msdyn_Unit: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_estimateline_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_estimateline_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_estimateline_Information */
		Body: DevKit.Formmsdyn_estimateline_Information.Body;
	}
	class msdyn_estimatelineApi {
		/**
		* DynamicsCrm.DevKit msdyn_estimatelineApi
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
		/** Shows the customer for the estimate line. */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Shows the amount on the estimate line. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the calculation method used to determine the amount on the estimate line.  */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Amount in base currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Basis Price in base currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Shows whether this estimate line is charged to the customer.  */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the bookable resource for which estimates are generated. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Shows the name of the customer contact. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select the type of customer. */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type the name of the custom entity. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Shows the transaction date of the estimate line. */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the end date and time. */
		msdyn_EndDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the name of the estimate line. */
		msdyn_Estimate: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_estimatelineId: DevKit.WebApi.GuidValue;
		/** Stores the estimate per day detail lines. */
		msdyn_estimateperdaylines: DevKit.WebApi.StringValue;
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the estimate of the number of resources intended to be staffed for this task. */
		msdyn_numberofresources: DevKit.WebApi.IntegerValue;
		/** Foreign key to the estimate line that originated this entry. For example, revenue line points to it's related cost line. */
		msdyn_Origin: DevKit.WebApi.LookupValue;
		/** Shows the percent for the estimate line. */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Shows the price for this estimate line. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the price list used in this estimate line. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Shows the project for this estimate line. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the estimated quantity of work, cost, and sales. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Shows the role of this resource on the estimate line. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit at the time the estimate line was registered of the resource who should perform the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Shows the start date and time for the task for this estimate line. */
		msdyn_StartDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the task related to this estimate line. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		/** Select the type of transaction. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Shows the transaction classification for this estimate line. */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Shows the transaction type for this estimate line. */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows the unit of measurement for this estimate line. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit of measure for the estimate quantity. */
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
		/** Status of the Estimate Line */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Estimate Line */
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
	namespace msdyn_estimateline {
		enum msdyn_AmountMethod {
			/** 192350001 */
			Fixed_Price,
			/** 192350003 */
			Multiply_Basis_Amount_By_Percent,
			/** 192350002 */
			Multiply_Basis_Quantity_By_Price,
			/** 192350000 */
			Multiply_Quantity_By_Price,
			/** 690970000 */
			Tax_Calculation
		}
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
		enum msdyn_CustomerType {
			/** 192350001 */
			Account,
			/** 192350002 */
			Contact
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}