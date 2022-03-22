//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_contractlinescheduleofvalue_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_GeneralTab_Sections {
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the value of the milestone. */
			msdyn_amount: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Select the project contract associated with this milestone. */
			msdyn_contract: DevKit.Controls.Lookup;
			/** Enter a description of the project contract line that has this milestone. */
			msdyn_ContractLineDescription: DevKit.Controls.String;
			/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
			msdyn_ContractLineId: DevKit.Controls.Lookup;
			/** Enter the date of which this milestone should be achieved */
			msdyn_Invoicedate: DevKit.Controls.Date;
			/** Select the status of invoicing of this milestone */
			msdyn_Invoicestatus: DevKit.Controls.OptionSet;
			/** Type the name of the milestone. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project work breakdown structure (WBS) task that is tracking the work for this milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_contractlinescheduleofvalue_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractlinescheduleofvalue_Project_Information */
		Body: DevKit.Formmsdyn_contractlinescheduleofvalue_Project_Information.Body;
		/** The Header section of form msdyn_contractlinescheduleofvalue_Project_Information */
		Header: DevKit.Formmsdyn_contractlinescheduleofvalue_Project_Information.Header;
		/** The Process of form msdyn_contractlinescheduleofvalue_Project_Information */
		Process: DevKit.Formmsdyn_contractlinescheduleofvalue_Project_Information.Process;
		/** The SidePanes of form msdyn_contractlinescheduleofvalue_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_contractlinescheduleofvalue_Project_Quick_Create {
		interface tab_tab_1_Sections {
			AmountSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the value of the milestone. */
			msdyn_amount: DevKit.Controls.Money;
			/** Select the project contract associated with this milestone. */
			msdyn_contract: DevKit.Controls.Lookup;
			/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
			msdyn_ContractLineId: DevKit.Controls.Lookup;
			/** Enter the date of which this milestone should be achieved */
			msdyn_Invoicedate: DevKit.Controls.Date;
			/** Select the status of invoicing of this milestone */
			msdyn_Invoicestatus: DevKit.Controls.OptionSet;
			/** Type the name of the milestone. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project work breakdown structure (WBS) task that is tracking the work for this milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_contractlinescheduleofvalue_Project_Quick_Create extends DevKit.IForm {
		/**
		* Project Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_contractlinescheduleofvalue_Project_Quick_Create */
		Body: DevKit.Formmsdyn_contractlinescheduleofvalue_Project_Quick_Create.Body;
	}
	class msdyn_contractlinescheduleofvalueApi {
		/**
		* DynamicsCrm.DevKit msdyn_contractlinescheduleofvalueApi
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
		/** Enter the value of the milestone. */
		msdyn_amount: number;
		readonly msdyn_amount_after_tax: number;
		/** Value of the amount_after_tax in base currency. */
		readonly msdyn_amount_after_tax_Base: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Select the project contract associated with this milestone. */
		msdyn_contract: string;
		/** (Deprecated) Shows the project contract line that has this milestone */
		msdyn_ContractLine: string;
		/** Enter a description of the project contract line that has this milestone. */
		msdyn_ContractLineDescription: string;
		/** Unique identifier for Project Contract Line associated with Project Contract Line Invoice Schedule. */
		msdyn_ContractLineId: string;
		/** Unique identifier for entity instances */
		msdyn_contractlinescheduleofvalueId: string;
		/** Type a description of the milestone. */
		msdyn_description: string;
		/** Description of the project contract line milestone */
		msdyn_externaldescription: string;
		/** Enter the date of which this milestone should be achieved */
		msdyn_Invoicedate_UtcDateOnly: Date;
		/** Select the status of invoicing of this milestone */
		msdyn_Invoicestatus: OptionSet.msdyn_contractlinescheduleofvalue.msdyn_Invoicestatus;
		/** Type the name of the milestone. */
		msdyn_name: string;
		/** Enter the price of the transaction. */
		msdyn_price: number;
		/** Value of the Price in base currency. */
		readonly msdyn_price_Base: number;
		/** Select the project that is tracking the work required to achieve this milestone. */
		msdyn_project: string;
		/** Select the project work breakdown structure (WBS) task that is tracking the work for this milestone. */
		msdyn_projecttask: string;
		/** Date of project contract line milestone */
		msdyn_startdatetime_UtcDateAndTime: Date;
		msdyn_tax: number;
		/** Value of the tax in base currency. */
		readonly msdyn_tax_Base: number;
		/** Transaction classification of the project contract line milestone */
		msdyn_TransactionClassification: OptionSet.msdyn_contractlinescheduleofvalue.msdyn_TransactionClassification;
		/** Transaction type of the project contract line milestone */
		msdyn_TransactionTypeCode: OptionSet.msdyn_contractlinescheduleofvalue.msdyn_TransactionTypeCode;
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
		/** Status of the project contract line milestone. */
		statecode: OptionSet.msdyn_contractlinescheduleofvalue.statecode;
		/** Reason for the status of the project contract line milestone. */
		statuscode: OptionSet.msdyn_contractlinescheduleofvalue.statuscode;
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
	namespace msdyn_contractlinescheduleofvalue {
		enum msdyn_Invoicestatus {
			/** 192350002 */
			Customer_invoice_created,
			/** 192350003 */
			Customer_invoice_posted,
			/** 192350000 */
			Not_Ready_for_invoicing,
			/** 192350001 */
			Ready_for_invoicing
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