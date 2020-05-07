//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_actual_Information {
		interface tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC_Sections {
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_8: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_4: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_3: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_5: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_9: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_6: DevKit.Form.Controls.ControlSection;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_10: DevKit.Form.Controls.ControlSection;
			Accounting: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC extends DevKit.Form.Controls.IControlTab {
			Section: tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface Tabs {
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC: tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC;
			FieldService: tab_FieldService;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer. */
			msdyn_AccountCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_AccountingDate: DevKit.Form.Controls.ControlDate;
			msdyn_AccountVendor: DevKit.Form.Controls.ControlLookup;
			/** Shows the adjustment status ID of the transaction. */
			msdyn_AdjustmentStatus: DevKit.Form.Controls.ControlOptionSet;
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount in transaction currency. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Select the method by which the amount was computed. */
			msdyn_AmountMethod: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the cost amount of the sales transaction in the transaction currency. */
			msdyn_BasisAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the cost quantity of the sales transaction in the base (organization) currency. */
			msdyn_BasisQuantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the billing status ID. */
			msdyn_BillingStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Select the billing type ID. */
			msdyn_BillingType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the bookable resource for which the actual is recorded. */
			msdyn_bookableresource: DevKit.Form.Controls.ControlLookup;
			/** Select the customer contact. */
			msdyn_ContactCustomer: DevKit.Form.Controls.ControlLookup;
			msdyn_ContactVendor: DevKit.Form.Controls.ControlLookup;
			/** Select the organizational unit ID for the contract. */
			msdyn_contractorganizationalunitid: DevKit.Form.Controls.ControlLookup;
			/** Select the customer type ID. */
			msdyn_CustomerType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the record description. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the transaction date of the business event. */
			msdyn_DocumentDate: DevKit.Form.Controls.ControlDate;
			/** Enter the end date and time for this transaction. */
			msdyn_EndDateTime: DevKit.Form.Controls.ControlDateTime;
			/** The external description of the business transaction. */
			msdyn_externaldescription: DevKit.Form.Controls.ControlString;
			msdyn_IncidentType: DevKit.Form.Controls.ControlLookup;
			/** The unique identifier of an invoice. */
			msdyn_Invoice: DevKit.Form.Controls.ControlLookup;
			msdyn_IsJournalized: DevKit.Form.Controls.ControlBoolean;
			/** Type of journal for resource cost. */
			msdyn_JournalType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price in the transaction currency. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the price list. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the product ID. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_ProductType: DevKit.Form.Controls.ControlOptionSet;
			/** Select the project ID. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Select the role ID of the resource performing the work. */
			msdyn_ResourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Organizational unit at the time the actual was registered of the resource who performed the work. */
			msdyn_ResourceOrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Account that was serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			msdyn_ServiceTerritory: DevKit.Form.Controls.ControlLookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the task. */
			msdyn_Task: DevKit.Form.Controls.ControlLookup;
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction category. */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction classification of this transaction. */
			msdyn_TransactionClassification: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the transaction type of this transaction. */
			msdyn_TransactionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the unit of measure. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Select the unit schedule. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
			msdyn_VendorType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_actual_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_actual_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_actual_Information */
		Body: LuckyMokey.Formmsdyn_actual_Information.Body;
	}
	class msdyn_actualApi {
		/**
		* DynamicsCrm.DevKit msdyn_actualApi
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
		/** Select the customer. */
		msdyn_AccountCustomer: DevKit.WebApi.LookupValue;
		msdyn_AccountingDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_AccountVendor: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_actualId: DevKit.WebApi.GuidValue;
		/** Shows the adjustment status ID of the transaction. */
		msdyn_AdjustmentStatus: DevKit.WebApi.OptionSetValue;
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** Enter the amount in transaction currency. */
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Enter the value of the amount in the base (organization) currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the method by which the amount was computed. */
		msdyn_AmountMethod: DevKit.WebApi.OptionSetValue;
		/** Enter the cost amount of the sales transaction in the transaction currency. */
		msdyn_BasisAmount: DevKit.WebApi.MoneyValue;
		/** Enter the cost amount of the sales transaction in the base (organization) currency. */
		msdyn_basisamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the cost price of the sales transaction in transaction currency. */
		msdyn_BasisPrice: DevKit.WebApi.MoneyValue;
		/** Enter the cost price of the sales transaction in base (organization) currency. */
		msdyn_basisprice_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the cost quantity of the sales transaction in the base (organization) currency. */
		msdyn_BasisQuantity: DevKit.WebApi.DecimalValue;
		/** Select the billing status ID. */
		msdyn_BillingStatus: DevKit.WebApi.OptionSetValue;
		/** Select the billing type ID. */
		msdyn_BillingType: DevKit.WebApi.OptionSetValue;
		/** Shows the bookable resource for which the actual is recorded. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Select the customer contact. */
		msdyn_ContactCustomer: DevKit.WebApi.LookupValue;
		msdyn_ContactVendor: DevKit.WebApi.LookupValue;
		/** Select the organizational unit ID for the contract. */
		msdyn_contractorganizationalunitid: DevKit.WebApi.LookupValue;
		/** Select the customer type ID. */
		msdyn_CustomerType: DevKit.WebApi.OptionSetValue;
		/** Type the record description. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the transaction date of the business event. */
		msdyn_DocumentDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the end date and time for this transaction. */
		msdyn_EndDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the date of the exchange rate used for this transaction. */
		msdyn_ExchangeRateDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The external description of the business transaction. */
		msdyn_externaldescription: DevKit.WebApi.StringValue;
		/** Stores a date from an external system, such as a journal entry voucher date from an ERP system */
		msdyn_ExternalReferenceDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Stores an ID from an external system, such as the journal entry voucher number from an ERP system. */
		msdyn_ExternalReferenceID: DevKit.WebApi.StringValue;
		msdyn_IncidentType: DevKit.WebApi.LookupValue;
		/** The unique identifier of an invoice. */
		msdyn_Invoice: DevKit.WebApi.LookupValue;
		msdyn_IsJournalized: DevKit.WebApi.BooleanValue;
		/** Type of journal for resource cost. */
		msdyn_JournalType: DevKit.WebApi.OptionSetValue;
		/** Enter the percent. */
		msdyn_Percent: DevKit.WebApi.DecimalValue;
		/** Enter the price in the transaction currency. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Enter the price in the base (organization) currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price list. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the product ID. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		msdyn_ProductType: DevKit.WebApi.OptionSetValue;
		/** Select the project ID. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Enter the quantity. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Select the role ID of the resource performing the work. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Organizational unit at the time the actual was registered of the resource who performed the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Select the project contract. */
		msdyn_SalesContract: DevKit.WebApi.LookupValue;
		/** (Deprecated) Type the project contract line. */
		msdyn_SalesContractLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Project Contract Line associated with Actual. */
		msdyn_SalesContractLineId: DevKit.WebApi.LookupValue;
		/** Account that was serviced */
		msdyn_ServiceAccount: DevKit.WebApi.LookupValue;
		msdyn_ServiceTerritory: DevKit.WebApi.LookupValue;
		/** Enter the start date and time. */
		msdyn_StartDateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the task. */
		msdyn_Task: DevKit.WebApi.LookupValue;
		msdyn_TaxCode: DevKit.WebApi.LookupValue;
		/** Select the transaction category. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Shows the transaction classification of this transaction. */
		msdyn_TransactionClassification: DevKit.WebApi.OptionSetValue;
		/** Shows the transaction type of this transaction. */
		msdyn_TransactionTypeCode: DevKit.WebApi.OptionSetValue;
		/** Select the unit of measure. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit schedule. */
		msdyn_UnitSchedule: DevKit.WebApi.LookupValue;
		msdyn_VendorType: DevKit.WebApi.OptionSetValue;
		msdyn_Warehouse: DevKit.WebApi.LookupValue;
		msdyn_WorkLocation: DevKit.WebApi.OptionSetValue;
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		msdyn_WorkOrderType: DevKit.WebApi.LookupValue;
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
		/** Status of the Actual */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Actual */
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
	namespace msdyn_actual {
		enum msdyn_AdjustmentStatus {
			/** 192350000 */
			In_Process,
			/** 192350001 */
			Adjusted,
			/** 192350002 */
			Unadjustable
		}
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
		enum msdyn_BillingStatus {
			/** 192350004 */
			Ready_to_Invoice,
			/** 690970000 */
			Work_order_closed_posted,
			/** 192350000 */
			Unbilled_Sales_Created,
			/** 192350001 */
			Customer_Invoice_Created,
			/** 192350002 */
			Customer_Invoice_Posted,
			/** 192350003 */
			Canceled
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
		enum msdyn_JournalType {
			/** 690970000 */
			Working_Hours,
			/** 690970001 */
			Break,
			/** 690970002 */
			Travel,
			/** 690970003 */
			Overtime,
			/** 690970004 */
			Business_Closure
		}
		enum msdyn_ProductType {
			/** 690970000 */
			Inventory,
			/** 690970001 */
			Non_Inventory,
			/** 690970002 */
			Service
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
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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