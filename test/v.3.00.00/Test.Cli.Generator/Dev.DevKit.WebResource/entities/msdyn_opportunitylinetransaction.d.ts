//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_opportunitylinetransaction_Information {
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections {
			AmountSection: DevKit.Controls.Section;
			BillingSection: DevKit.Controls.Section;
			DateSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			ProductResourceSection: DevKit.Controls.Section;
			ProjectSection: DevKit.Controls.Section;
			QuantitySection: DevKit.Controls.Section;
			VendorSection: DevKit.Controls.Section;
		}
		interface tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355 extends DevKit.Controls.ITab {
			Section: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355_Sections;
		}
		interface Tabs {
			_AA1FBBFA_293F_4830_A2D4_D1CB676EB355: tab__AA1FBBFA_293F_4830_A2D4_D1CB676EB355;
		}
		interface Body {
			Tab: Tabs;
			/** Select the name of the customer to which this opportunity belongs. */
			msdyn_AccountCustomer: DevKit.Controls.Lookup;
			msdyn_AccountVendor: DevKit.Controls.Lookup;
			/** Enter the amount on the estimate line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Select the calculation method used to determine the amount on the estimate line.  */
			msdyn_AmountMethod: DevKit.Controls.OptionSet;
			msdyn_BasisAmount: DevKit.Controls.Money;
			/** Enter the quantity used as basis for calculating quantity on this estimate line. */
			msdyn_BasisQuantity: DevKit.Controls.Decimal;
			/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
			msdyn_BillingType: DevKit.Controls.OptionSet;
			/** Shows the resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Select the customer contact of this opportunity. */
			msdyn_ContactCustomer: DevKit.Controls.Lookup;
			msdyn_ContactVendor: DevKit.Controls.Lookup;
			/** Select whether the customer identified on the opportunity was an account or a contact */
			msdyn_CustomerType: DevKit.Controls.OptionSet;
			/** Type a description of the opportunity line estimate. */
			msdyn_description: DevKit.Controls.String;
			/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
			msdyn_DocumentDate: DevKit.Controls.Date;
			/** Enter the end time of the opportunity line estimate. */
			msdyn_EndDateTime: DevKit.Controls.DateTime;
			/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
			msdyn_Percent: DevKit.Controls.Decimal;
			/** Enter the price on the estimate line. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the price list used on the opportunity line estimate. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the product on the estimate line. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Select the name of the Project that this estimate line is for. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Enter the quantity of the opportunity estimate line. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** Select the role that is estimated to perform the work. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Enter the start date of the opportunity line estimate. */
			msdyn_StartDateTime: DevKit.Controls.DateTime;
			/** Select the name of the project task for which this estimate line was created. */
			msdyn_Task: DevKit.Controls.Lookup;
			/** Select the category of the transaction. */
			msdyn_TransactionCategory: DevKit.Controls.Lookup;
			/** Transaction classification of the Opportunity line transaction */
			msdyn_TransactionClassification: DevKit.Controls.OptionSet;
			/** Transaction type for the opportunity line. */
			msdyn_TransactionTypeCode: DevKit.Controls.OptionSet;
			/** Select the unit of the estimate quantity. */
			msdyn_Unit: DevKit.Controls.Lookup;
			msdyn_VendorType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_opportunitylinetransaction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_opportunitylinetransaction_Information */
		Body: DevKit.Formmsdyn_opportunitylinetransaction_Information.Body;
		/** The Process of form msdyn_opportunitylinetransaction_Information */
		Process: DevKit.Formmsdyn_opportunitylinetransaction_Information.Process;
		/** The SidePanes of form msdyn_opportunitylinetransaction_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Select the name of the customer to which this opportunity belongs. */
		msdyn_AccountCustomer: string;
		msdyn_AccountingDate_UtcDateOnly: Date;
		msdyn_AccountVendor: string;
		/** Enter the amount on the estimate line. */
		msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Select the calculation method used to determine the amount on the estimate line.  */
		msdyn_AmountMethod: OptionSet.msdyn_opportunitylinetransaction.msdyn_AmountMethod;
		msdyn_BasisAmount: number;
		/** Value of the Basis Amount in base currency. */
		readonly msdyn_basisamount_Base: number;
		msdyn_BasisPrice: number;
		/** Value of the Basis Price in base currency. */
		readonly msdyn_basisprice_Base: number;
		/** Enter the quantity used as basis for calculating quantity on this estimate line. */
		msdyn_BasisQuantity: number;
		/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
		msdyn_BillingType: OptionSet.msdyn_opportunitylinetransaction.msdyn_BillingType;
		/** Shows the resource. */
		msdyn_bookableresource: string;
		/** Select the customer contact of this opportunity. */
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		/** Select whether the customer identified on the opportunity was an account or a contact */
		msdyn_CustomerType: OptionSet.msdyn_opportunitylinetransaction.msdyn_CustomerType;
		/** Type a description of the opportunity line estimate. */
		msdyn_description: string;
		/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
		msdyn_DocumentDate_UtcDateOnly: Date;
		/** Enter the end time of the opportunity line estimate. */
		msdyn_EndDateTime_UtcDateAndTime: Date;
		msdyn_ExchangeRateDate_UtcDateOnly: Date;
		/** Shows the opportunity line that this estimate line belongs to. */
		msdyn_OpportunityLine: string;
		/** Shows the entity instances. */
		msdyn_opportunitylinetransactionId: string;
		/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
		msdyn_Percent: number;
		/** Enter the price on the estimate line. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the price list used on the opportunity line estimate. */
		msdyn_PriceList: string;
		/** Select the product on the estimate line. */
		msdyn_Product: string;
		/** Select the name of the Project that this estimate line is for. */
		msdyn_Project: string;
		/** Enter the quantity of the opportunity estimate line. */
		msdyn_Quantity: number;
		/** Select the role that is estimated to perform the work. */
		msdyn_ResourceCategory: string;
		/** Select the organizational unit of the resource who is estimated to perform the work. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** Enter the start date of the opportunity line estimate. */
		msdyn_StartDateTime_UtcDateAndTime: Date;
		/** Select the name of the project task for which this estimate line was created. */
		msdyn_Task: string;
		/** Select the category of the transaction. */
		msdyn_TransactionCategory: string;
		/** Transaction classification of the Opportunity line transaction */
		msdyn_TransactionClassification: OptionSet.msdyn_opportunitylinetransaction.msdyn_TransactionClassification;
		/** Transaction type for the opportunity line. */
		msdyn_TransactionTypeCode: OptionSet.msdyn_opportunitylinetransaction.msdyn_TransactionTypeCode;
		/** Select the unit of the estimate quantity. */
		msdyn_Unit: string;
		/** Select the unit group of the opportunity line estimate. */
		msdyn_UnitSchedule: string;
		msdyn_VendorType: OptionSet.msdyn_opportunitylinetransaction.msdyn_VendorType;
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
		/** Status of the Opportunity Line Detail */
		statecode: OptionSet.msdyn_opportunitylinetransaction.statecode;
		/** Reason for the status of the Opportunity Line Detail */
		statuscode: OptionSet.msdyn_opportunitylinetransaction.statuscode;
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
			/** Select the name of the customer to which this opportunity belongs. */
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountingDate_UtcDateOnly: string;
			readonly msdyn_AccountVendor: string;
			/** Enter the amount on the estimate line. */
			readonly msdyn_Amount: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** Select the calculation method used to determine the amount on the estimate line.  */
			readonly msdyn_AmountMethod: string;
			readonly msdyn_BasisAmount: string;
			/** Value of the Basis Amount in base currency. */
			readonly msdyn_basisamount_Base: string;
			readonly msdyn_BasisPrice: string;
			/** Value of the Basis Price in base currency. */
			readonly msdyn_basisprice_Base: string;
			/** Enter the quantity used as basis for calculating quantity on this estimate line. */
			readonly msdyn_BasisQuantity: string;
			/** Select whether this estimate line would be charged to the customer or not. Only chargeable transactions will add to the invoice total when an invoices are created */
			readonly msdyn_BillingType: string;
			/** Shows the resource. */
			readonly msdyn_bookableresource: string;
			/** Select the customer contact of this opportunity. */
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			/** Select whether the customer identified on the opportunity was an account or a contact */
			readonly msdyn_CustomerType: string;
			/** Type a description of the opportunity line estimate. */
			readonly msdyn_description: string;
			/** Enter the document date. The document date is only relevant for actuals and invoiced transactions; does not apply to opportunity line estimates. */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			/** Enter the end time of the opportunity line estimate. */
			readonly msdyn_EndDateTime_UtcDateAndTime: string;
			readonly msdyn_ExchangeRateDate_UtcDateOnly: string;
			/** Shows the opportunity line that this estimate line belongs to. */
			readonly msdyn_OpportunityLine: string;
			/** Shows the entity instances. */
			readonly msdyn_opportunitylinetransactionId: string;
			/** Relevant when amount calculation method on the opportunity line transactions is "Multiply basis amount by percent" */
			readonly msdyn_Percent: string;
			/** Enter the price on the estimate line. */
			readonly msdyn_Price: string;
			/** Value of the Price in base currency. */
			readonly msdyn_price_Base: string;
			/** Select the price list used on the opportunity line estimate. */
			readonly msdyn_PriceList: string;
			/** Select the product on the estimate line. */
			readonly msdyn_Product: string;
			/** Select the name of the Project that this estimate line is for. */
			readonly msdyn_Project: string;
			/** Enter the quantity of the opportunity estimate line. */
			readonly msdyn_Quantity: string;
			/** Select the role that is estimated to perform the work. */
			readonly msdyn_ResourceCategory: string;
			/** Select the organizational unit of the resource who is estimated to perform the work. */
			readonly msdyn_ResourceOrganizationalUnitId: string;
			/** Enter the start date of the opportunity line estimate. */
			readonly msdyn_StartDateTime_UtcDateAndTime: string;
			/** Select the name of the project task for which this estimate line was created. */
			readonly msdyn_Task: string;
			/** Select the category of the transaction. */
			readonly msdyn_TransactionCategory: string;
			/** Transaction classification of the Opportunity line transaction */
			readonly msdyn_TransactionClassification: string;
			/** Transaction type for the opportunity line. */
			readonly msdyn_TransactionTypeCode: string;
			/** Select the unit of the estimate quantity. */
			readonly msdyn_Unit: string;
			/** Select the unit group of the opportunity line estimate. */
			readonly msdyn_UnitSchedule: string;
			readonly msdyn_VendorType: string;
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
			/** Status of the Opportunity Line Detail */
			readonly statecode: string;
			/** Reason for the status of the Opportunity Line Detail */
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
	namespace msdyn_opportunitylinetransaction {
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
		enum OwnerIdType {
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