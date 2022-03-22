//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotelinescheduleofvalue_Project_Information {
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
			/** Enter the value of the amount on the billing milestone. */
			msdyn_amount: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
			msdyn_invoicedate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project task that is tracking the work for this billing milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			/** Shows a reference to the quote line that this milestone schedule belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Status of the Quote Line Schedule Of Value */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotelinescheduleofvalue_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinescheduleofvalue_Project_Information */
		Body: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Body;
		/** The Header section of form msdyn_quotelinescheduleofvalue_Project_Information */
		Header: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Header;
		/** The Process of form msdyn_quotelinescheduleofvalue_Project_Information */
		Process: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Process;
		/** The SidePanes of form msdyn_quotelinescheduleofvalue_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create {
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
			/** Enter the value of the amount on the billing milestone. */
			msdyn_amount: DevKit.Controls.Money;
			/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
			msdyn_invoicedate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project task that is tracking the work for this billing milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			/** Shows a reference to the quote line that this milestone schedule belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create extends DevKit.IForm {
		/**
		* Project Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinescheduleofvalue_Project_Quick_Create */
		Body: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create.Body;
	}
	class msdyn_quotelinescheduleofvalueApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelinescheduleofvalueApi
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
		/** Enter the value of the amount on the billing milestone. */
		msdyn_amount: number;
		readonly msdyn_amount_after_tax: number;
		/** Value of the amount_after_tax in base currency. */
		readonly msdyn_amount_after_tax_Base: number;
		/** Value of the Amount in base currency. */
		readonly msdyn_amount_Base: number;
		/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
		msdyn_invoicedate_UtcDateOnly: Date;
		/** Select whether this milestone was invoiced. Valid values are Not ready for invoicing, Ready for Invoicing, On an invoice, and Invoiced. */
		msdyn_invoicestatus: OptionSet.msdyn_quotelinescheduleofvalue.msdyn_invoicestatus;
		/** Indicates if this record was created via import. It's purpose is to support data import. */
		msdyn_isdataimport: boolean;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Select the project task that is tracking the work for this billing milestone. */
		msdyn_projecttask: string;
		/** (Deprecated) Shows a reference to the quote line that this milestone schedule belongs to. */
		msdyn_quoteline: string;
		/** Shows a reference to the quote line that this milestone schedule belongs to. */
		msdyn_quotelineid: string;
		/** Unique identifier for entity instances */
		msdyn_quotelinescheduleofvalueId: string;
		msdyn_tax: number;
		/** Value of the tax in base currency. */
		readonly msdyn_tax_Base: number;
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
		/** Status of the Quote Line Schedule Of Value */
		statecode: OptionSet.msdyn_quotelinescheduleofvalue.statecode;
		/** Reason for the status of the Quote Line Schedule Of Value */
		statuscode: OptionSet.msdyn_quotelinescheduleofvalue.statuscode;
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
	namespace msdyn_quotelinescheduleofvalue {
		enum msdyn_invoicestatus {
			/** 192350002 */
			Customer_invoice_created,
			/** 192350003 */
			Customer_invoice_posted,
			/** 192350000 */
			Not_Ready_for_invoicing,
			/** 192350001 */
			Ready_for_invoicing
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