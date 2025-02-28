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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_estimateline_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_estimateline_Information */
		Body: DevKit.Formmsdyn_estimateline_Information.Body;
		/** The Process of form msdyn_estimateline_Information */
		Process: DevKit.Formmsdyn_estimateline_Information.Process;
		/** The SidePanes of form msdyn_estimateline_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Shows the customer for the estimate line. */
		msdyn_AccountCustomer: string;
		msdyn_AccountingDate_UtcDateOnly: Date;
		msdyn_AccountVendor: string;
		/** Shows the amount on the estimate line. */
		msdyn_Amount: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Shows the calculation method used to determine the amount on the estimate line.  */
		msdyn_AmountMethod: OptionSet.msdyn_estimateline.msdyn_AmountMethod;
		msdyn_BasisAmount: number;
		/** Value of the Basis Amount in base currency. */
		readonly msdyn_basisamount_Base: number;
		msdyn_BasisPrice: number;
		/** Value of the Basis Price in base currency. */
		readonly msdyn_basisprice_Base: number;
		msdyn_BasisQuantity: number;
		/** Shows whether this estimate line is charged to the customer.  */
		msdyn_BillingType: OptionSet.msdyn_estimateline.msdyn_BillingType;
		/** Shows the bookable resource for which estimates are generated. */
		msdyn_bookableresource: string;
		/** Shows the name of the customer contact. */
		msdyn_ContactCustomer: string;
		msdyn_ContactVendor: string;
		/** Select the type of customer. */
		msdyn_CustomerType: OptionSet.msdyn_estimateline.msdyn_CustomerType;
		/** Type the name of the custom entity. */
		msdyn_description: string;
		/** Shows the transaction date of the estimate line. */
		msdyn_DocumentDate_UtcDateOnly: Date;
		/** Enter the end date and time. */
		msdyn_EndDateTime_UtcDateAndTime: Date;
		/** Shows the name of the estimate line. */
		msdyn_Estimate: string;
		/** Shows the entity instances. */
		msdyn_estimatelineId: string;
		/** Stores the estimate per day detail lines. */
		msdyn_estimateperdaylines: string;
		msdyn_ExchangeRateDate_UtcDateOnly: Date;
		/** Shows the estimate of the number of resources intended to be staffed for this task. */
		msdyn_numberofresources: number;
		/** Foreign key to the estimate line that originated this entry. For example, revenue line points to it's related cost line. */
		msdyn_Origin: string;
		/** Shows the percent for the estimate line. */
		msdyn_Percent: number;
		/** Shows the price for this estimate line. */
		msdyn_Price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Shows the price list used in this estimate line. */
		msdyn_PriceList: string;
		/** Select the product. */
		msdyn_Product: string;
		/** Shows the project for this estimate line. */
		msdyn_Project: string;
		/** Enter the estimated quantity of work, cost, and sales. */
		msdyn_Quantity: number;
		/** Shows the role of this resource on the estimate line. */
		msdyn_ResourceCategory: string;
		/** Select the organizational unit at the time the estimate line was registered of the resource who should perform the work. */
		msdyn_ResourceOrganizationalUnitId: string;
		/** Shows the start date and time for the task for this estimate line. */
		msdyn_StartDateTime_UtcDateAndTime: Date;
		/** Shows the task related to this estimate line. */
		msdyn_Task: string;
		/** Select the type of transaction. */
		msdyn_TransactionCategory: string;
		/** Shows the transaction classification for this estimate line. */
		msdyn_TransactionClassification: OptionSet.msdyn_estimateline.msdyn_TransactionClassification;
		/** Shows the transaction type for this estimate line. */
		msdyn_TransactionTypeCode: OptionSet.msdyn_estimateline.msdyn_TransactionTypeCode;
		/** Shows the unit of measurement for this estimate line. */
		msdyn_Unit: string;
		/** Select the unit of measure for the estimate quantity. */
		msdyn_UnitSchedule: string;
		msdyn_VendorType: OptionSet.msdyn_estimateline.msdyn_VendorType;
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
		/** Status of the Estimate Line */
		statecode: OptionSet.msdyn_estimateline.statecode;
		/** Reason for the status of the Estimate Line */
		statuscode: OptionSet.msdyn_estimateline.statuscode;
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
			/** Shows the customer for the estimate line. */
			readonly msdyn_AccountCustomer: string;
			readonly msdyn_AccountingDate_UtcDateOnly: string;
			readonly msdyn_AccountVendor: string;
			/** Shows the amount on the estimate line. */
			readonly msdyn_Amount: string;
			/** Value of the Amount in base currency. */
			readonly msdyn_amount_Base: string;
			/** Shows the calculation method used to determine the amount on the estimate line.  */
			readonly msdyn_AmountMethod: string;
			readonly msdyn_BasisAmount: string;
			/** Value of the Basis Amount in base currency. */
			readonly msdyn_basisamount_Base: string;
			readonly msdyn_BasisPrice: string;
			/** Value of the Basis Price in base currency. */
			readonly msdyn_basisprice_Base: string;
			readonly msdyn_BasisQuantity: string;
			/** Shows whether this estimate line is charged to the customer.  */
			readonly msdyn_BillingType: string;
			/** Shows the bookable resource for which estimates are generated. */
			readonly msdyn_bookableresource: string;
			/** Shows the name of the customer contact. */
			readonly msdyn_ContactCustomer: string;
			readonly msdyn_ContactVendor: string;
			/** Select the type of customer. */
			readonly msdyn_CustomerType: string;
			/** Type the name of the custom entity. */
			readonly msdyn_description: string;
			/** Shows the transaction date of the estimate line. */
			readonly msdyn_DocumentDate_UtcDateOnly: string;
			/** Enter the end date and time. */
			readonly msdyn_EndDateTime_UtcDateAndTime: string;
			/** Shows the name of the estimate line. */
			readonly msdyn_Estimate: string;
			/** Shows the entity instances. */
			readonly msdyn_estimatelineId: string;
			/** Stores the estimate per day detail lines. */
			readonly msdyn_estimateperdaylines: string;
			readonly msdyn_ExchangeRateDate_UtcDateOnly: string;
			/** Shows the estimate of the number of resources intended to be staffed for this task. */
			readonly msdyn_numberofresources: string;
			/** Foreign key to the estimate line that originated this entry. For example, revenue line points to it's related cost line. */
			readonly msdyn_Origin: string;
			/** Shows the percent for the estimate line. */
			readonly msdyn_Percent: string;
			/** Shows the price for this estimate line. */
			readonly msdyn_Price: string;
			/** Value of the Price in base currency. */
			readonly msdyn_price_Base: string;
			/** Shows the price list used in this estimate line. */
			readonly msdyn_PriceList: string;
			/** Select the product. */
			readonly msdyn_Product: string;
			/** Shows the project for this estimate line. */
			readonly msdyn_Project: string;
			/** Enter the estimated quantity of work, cost, and sales. */
			readonly msdyn_Quantity: string;
			/** Shows the role of this resource on the estimate line. */
			readonly msdyn_ResourceCategory: string;
			/** Select the organizational unit at the time the estimate line was registered of the resource who should perform the work. */
			readonly msdyn_ResourceOrganizationalUnitId: string;
			/** Shows the start date and time for the task for this estimate line. */
			readonly msdyn_StartDateTime_UtcDateAndTime: string;
			/** Shows the task related to this estimate line. */
			readonly msdyn_Task: string;
			/** Select the type of transaction. */
			readonly msdyn_TransactionCategory: string;
			/** Shows the transaction classification for this estimate line. */
			readonly msdyn_TransactionClassification: string;
			/** Shows the transaction type for this estimate line. */
			readonly msdyn_TransactionTypeCode: string;
			/** Shows the unit of measurement for this estimate line. */
			readonly msdyn_Unit: string;
			/** Select the unit of measure for the estimate quantity. */
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
			/** Status of the Estimate Line */
			readonly statecode: string;
			/** Reason for the status of the Estimate Line */
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