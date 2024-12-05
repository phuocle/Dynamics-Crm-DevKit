//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_actual_Information {
		interface tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC_Sections {
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_10: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_3: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_4: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_5: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_6: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_8: DevKit.Controls.Section;
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC_SECTION_9: DevKit.Controls.Section;
			Accounting: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC extends DevKit.Controls.ITab {
			Section: tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface Tabs {
			_88D21A95_2EBC_49E9_A568_6A7A0107BCEC: tab__88D21A95_2EBC_49E9_A568_6A7A0107BCEC;
			FieldService: tab_FieldService;
		}
		interface Body {
			Tab: Tabs;
			/** Select the customer. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountingDate: DevKit.Controls.Date;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Enter the amount in transaction currency. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Select the method by which the amount was computed. */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			/** Enter the cost amount of the sales transaction in the transaction currency. */
			msdyn_BasisAmount: DevKit.Controls.Money;
			/** Enter the cost quantity of the sales transaction in the base (organization) currency. */
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select the billing type ID. */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the bookable resource for which the actual is recorded. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Select the customer contact. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Select the customer type ID. */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type the record description. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the transaction date of the business event. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end date and time for this transaction. */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** The external description of the business transaction. */
			msdyn_externaldescription: DevKit.Controls.String;
			msdyn_IncidentType: DevKit.Controls.Lookup;
			msdyn_IsJournalized: DevKit.Controls.Boolean;
			/** Type of journal for resource cost. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Enter the percent. */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price in the transaction currency. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the price list. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the product ID. */
			msdyn_Product: DevKit.Controls.Lookup;
			msdyn_ProductType: DevKit.Controls.OptionSet;
			/** Enter the quantity. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Account that was serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			/** Enter the start date and time. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Shows the transaction classification of this transaction. */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Shows the transaction type of this transaction. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Select the unit of measure. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			msdyn_Warehouse: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_actual_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_actual_Information */
		Body: DevKit.Formmsdyn_actual_Information.Body;
		/** The Navigation of form msdyn_actual_Information */
		Navigation: DevKit.Formmsdyn_actual_Information.Navigation;
		/** The SidePanes of form msdyn_actual_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Select the customer. */
		msdyn_AccountCustomer: string;
		msdyn_AccountingDate_UtcDateOnly: Date;
		msdyn_AccountVendor: string;
		/** Unique identifier for entity instances */
		msdyn_actualId: string;
		/** Shows the adjustment status ID of the transaction. */
		msdyn_AdjustmentStatus: OptionSet.msdyn_actual.msdyn_AdjustmentStatus;
		msdyn_Agreement: string;
		/** Enter the amount in transaction currency. */
		msdyn_Amount: number;
		/** Enter the value of the amount in the base (organization) currency. */
		readonly msdyn_amount_Base: number;
		/** Select the method by which the amount was computed. */
		msdyn_AmountMethod: OptionSet.msdyn_actual.msdyn_AmountMethod;
		/** Enter the cost amount of the sales transaction in the transaction currency. */
		msdyn_BasisAmount: number;
		/** Enter the cost amount of the sales transaction in the base (organization) currency. */
		readonly msdyn_basisamount_Base: number;
		/** Enter the cost price of the sales transaction in transaction currency. */
		msdyn_BasisPrice: number;
		/** Enter the cost price of the sales transaction in base (organization) currency. */
		readonly msdyn_basisprice_Base: number;
		/** Enter the cost quantity of the sales transaction in the base (organization) currency. */
		msdyn_BasisQuantity: number;
		/** Select the billing status ID. */
		msdyn_BillingStatus: OptionSet.msdyn_actual.msdyn_BillingStatus;
		/** Select the billing type ID. */
		msdyn_BillingType: OptionSet.msdyn_actual.msdyn_BillingType;
		/** Shows the bookable resource for which the actual is recorded. */
		msdyn_bookableresource: string;
		/** Select the customer contact. */
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		/** Select the customer type ID. */
		msdyn_CustomerType: OptionSet.msdyn_actual.msdyn_CustomerType;
		/** Type the record description. */
		msdyn_description: string;
		/** Enter the transaction date of the business event. */
		msdyn_DocumentDate_UtcDateOnly: Date;
		/** Enter the end date and time for this transaction. */
		msdyn_EndDateTime_UtcDateAndTime: Date;
		/** Enter the date of the exchange rate used for this transaction. */
		msdyn_ExchangeRateDate_UtcDateOnly: Date;
		/** The external description of the business transaction. */
		msdyn_externaldescription: string;
		/** Stores a date from an external system, such as a journal entry voucher date from an ERP system */
		msdyn_ExternalReferenceDate_UtcDateOnly: Date;
		/** Stores an ID from an external system, such as the journal entry voucher number from an ERP system. */
		msdyn_ExternalReferenceID: string;
		msdyn_IncidentType: string;
		/** The unique identifier of an invoice. */
		msdyn_Invoice: string;
		msdyn_IsJournalized: boolean;
		/** Type of journal for resource cost. */
		msdyn_JournalType: OptionSet.msdyn_actual.msdyn_JournalType;
		/** Enter the percent. */
		msdyn_Percent: number;
		/** Enter the price in the transaction currency. */
		msdyn_Price: number;
		/** Enter the price in the base (organization) currency. */
		readonly msdyn_price_Base: number;
		/** Select the price list. */
		msdyn_PriceList: string;
		/** Select the product ID. */
		msdyn_Product: string;
		msdyn_ProductType: OptionSet.msdyn_actual.msdyn_ProductType;
		/** Enter the quantity. */
		msdyn_Quantity: number;
		/** Select the project contract. */
		msdyn_SalesContract: string;
		/** Type the project contract line. */
		msdyn_SalesContractLine: string;
		/** Account that was serviced */
		msdyn_ServiceAccount: string;
		msdyn_ServiceTerritory: string;
		/** Enter the start date and time. */
		msdyn_StartDateTime_UtcDateAndTime: Date;
		msdyn_TaxCode: string;
		/** Shows the transaction classification of this transaction. */
		msdyn_TransactionClassification: OptionSet.msdyn_actual.msdyn_TransactionClassification;
		/** Shows the transaction type of this transaction. */
		msdyn_TransactionTypeCode: OptionSet.msdyn_actual.msdyn_TransactionTypeCode;
		/** Select the unit of measure. */
		msdyn_Unit: string;
		/** Select the unit schedule. */
		msdyn_UnitSchedule: string;
		msdyn_VendorType: OptionSet.msdyn_actual.msdyn_VendorType;
		msdyn_Warehouse: string;
		msdyn_WorkLocation: OptionSet.msdyn_actual.msdyn_WorkLocation;
		msdyn_WorkOrder: string;
		msdyn_WorkOrderType: string;
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
		/** Status of the Actual */
		statecode: OptionSet.msdyn_actual.statecode;
		/** Reason for the status of the Actual */
		statuscode: OptionSet.msdyn_actual.statuscode;
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
			/** Select the customer. */
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountingDate_UtcDateOnly: string;
			readonly msdyn_AccountVendor: string;
			/** Unique identifier for entity instances */
			readonly msdyn_actualId: string;
			/** Shows the adjustment status ID of the transaction. */
			readonly msdyn_AdjustmentStatus: string;
			readonly msdyn_Agreement: string;
			/** Enter the amount in transaction currency. */
			readonly msdyn_Amount: string;
			/** Enter the value of the amount in the base (organization) currency. */
			readonly msdyn_amount_Base: string;
			/** Select the method by which the amount was computed. */
			readonly msdyn_AmountMethod: string;
			/** Enter the cost amount of the sales transaction in the transaction currency. */
			readonly msdyn_BasisAmount: string;
			/** Enter the cost amount of the sales transaction in the base (organization) currency. */
			readonly msdyn_basisamount_Base: string;
			/** Enter the cost price of the sales transaction in transaction currency. */
			readonly msdyn_BasisPrice: string;
			/** Enter the cost price of the sales transaction in base (organization) currency. */
			readonly msdyn_basisprice_Base: string;
			/** Enter the cost quantity of the sales transaction in the base (organization) currency. */
			readonly msdyn_BasisQuantity: string;
			/** Select the billing status ID. */
			readonly msdyn_BillingStatus: string;
			/** Select the billing type ID. */
			readonly msdyn_BillingType: string;
			/** Shows the bookable resource for which the actual is recorded. */
			readonly msdyn_bookableresource: string;
			/** Select the customer contact. */
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			/** Select the customer type ID. */
			readonly msdyn_CustomerType: string;
			/** Type the record description. */
			readonly msdyn_description: string;
			/** Enter the transaction date of the business event. */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			/** Enter the end date and time for this transaction. */
			readonly msdyn_EndDateTime_UtcDateAndTime: string;
			/** Enter the date of the exchange rate used for this transaction. */
			readonly msdyn_ExchangeRateDate_UtcDateOnly: string;
			/** The external description of the business transaction. */
			readonly msdyn_externaldescription: string;
			/** Stores a date from an external system, such as a journal entry voucher date from an ERP system */
			readonly msdyn_ExternalReferenceDate_UtcDateOnly: string;
			/** Stores an ID from an external system, such as the journal entry voucher number from an ERP system. */
			readonly msdyn_ExternalReferenceID: string;
			readonly msdyn_IncidentType: string;
			/** The unique identifier of an invoice. */
			readonly msdyn_Invoice: string;
			readonly msdyn_IsJournalized: string;
			/** Type of journal for resource cost. */
			readonly msdyn_JournalType: string;
			/** Enter the percent. */
			readonly msdyn_Percent: string;
			/** Enter the price in the transaction currency. */
			readonly msdyn_Price: string;
			/** Enter the price in the base (organization) currency. */
			readonly msdyn_price_Base: string;
			/** Select the price list. */
			readonly msdyn_PriceList: string;
			/** Select the product ID. */
			readonly msdyn_Product: string;
			readonly msdyn_ProductType: string;
			/** Enter the quantity. */
			readonly msdyn_Quantity: string;
			/** Select the project contract. */
			readonly msdyn_SalesContract: string;
			/** Type the project contract line. */
			readonly msdyn_SalesContractLine: string;
			/** Account that was serviced */
			readonly msdyn_ServiceAccount: string;
			readonly msdyn_ServiceTerritory: string;
			/** Enter the start date and time. */
			readonly msdyn_StartDateTime_UtcDateAndTime: string;
			readonly msdyn_TaxCode: string;
			/** Shows the transaction classification of this transaction. */
			readonly msdyn_TransactionClassification: string;
			/** Shows the transaction type of this transaction. */
			readonly msdyn_TransactionTypeCode: string;
			/** Select the unit of measure. */
			readonly msdyn_Unit: string;
			/** Select the unit schedule. */
			readonly msdyn_UnitSchedule: string;
			readonly msdyn_VendorType: string;
			readonly msdyn_Warehouse: string;
			readonly msdyn_WorkLocation: string;
			readonly msdyn_WorkOrder: string;
			readonly msdyn_WorkOrderType: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Actual */
			readonly statecode: string;
			/** Reason for the status of the Actual */
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
	namespace msdyn_actual {
		enum msdyn_AdjustmentStatus {
			/** 192350001 */
			Adjusted,
			/** 192350000 */
			In_Process,
			/** 192350002 */
			Unadjustable
		}
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
		enum msdyn_BillingStatus {
			/** 192350003 */
			Canceled,
			/** 192350001 */
			Customer_Invoice_Created,
			/** 192350002 */
			Customer_Invoice_Posted,
			/** 192350000 */
			Unbilled_Sales_Created,
			/** 690970000 */
			Work_order_closed_posted
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
		enum msdyn_JournalType {
			/** 690970001 */
			Break,
			/** 690970004 */
			Business_Closure,
			/** 690970003 */
			Overtime,
			/** 690970002 */
			Travel,
			/** 690970000 */
			Working_Hours
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
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
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