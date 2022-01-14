//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_purchaseorderbill_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_BillDate: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			msdyn_ShippingAmount: DevKit.Controls.Money;
			msdyn_Subtotal: DevKit.Controls.Money;
			msdyn_TaxAmount: DevKit.Controls.Money;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			msdyn_TotalAmount: DevKit.Controls.Money;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Bill */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			msdyn_BillDate: DevKit.Controls.Date;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
	}
	class Formmsdyn_purchaseorderbill_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderbill_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderbill_Information */
		Body: DevKit.Formmsdyn_purchaseorderbill_Information.Body;
		/** The Footer section of form msdyn_purchaseorderbill_Information */
		Footer: DevKit.Formmsdyn_purchaseorderbill_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderbill_Information */
		Navigation: DevKit.Formmsdyn_purchaseorderbill_Information.Navigation;
		/** The Process of form msdyn_purchaseorderbill_Information */
		Process: DevKit.Formmsdyn_purchaseorderbill_Information.Process;
		/** The SidePanes of form msdyn_purchaseorderbill_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurchase_Order_Bill_Mobile {
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			msdyn_BillDate: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			msdyn_ShippingAmount: DevKit.Controls.Money;
			msdyn_Subtotal: DevKit.Controls.Money;
			msdyn_TaxAmount: DevKit.Controls.Money;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			msdyn_TotalAmount: DevKit.Controls.Money;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			msdyn_BillDate: DevKit.Controls.Date;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
	}
	class FormPurchase_Order_Bill_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Bill_Mobile Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Bill_Mobile */
		Body: DevKit.FormPurchase_Order_Bill_Mobile.Body;
		/** The Navigation of form Purchase_Order_Bill_Mobile */
		Navigation: DevKit.FormPurchase_Order_Bill_Mobile.Navigation;
		/** The Process of form Purchase_Order_Bill_Mobile */
		Process: DevKit.FormPurchase_Order_Bill_Mobile.Process;
		/** The SidePanes of form Purchase_Order_Bill_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_purchaseorderbillApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderbillApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_BillDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_Note: DevKit.WebApi.StringValue;
		/** Unique identifier for Payment Term associated with Purchase Order Bill. */
		msdyn_PaymentTerm: DevKit.WebApi.LookupValue;
		/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
		msdyn_PurchaseOrder: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_purchaseorderbillId: DevKit.WebApi.GuidValue;
		msdyn_ShippingAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the shipping amount in the base currency. */
		msdyn_shippingamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_Subtotal: DevKit.WebApi.MoneyValue;
		/** Shows the value of the subtotal in the base currency. */
		msdyn_subtotal_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_TaxAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the tax amount in the base currency. */
		msdyn_taxamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for Tax Code associated with Purchase Order Bill. */
		msdyn_TaxCode: DevKit.WebApi.LookupValue;
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_VendorInvoiceNumber: DevKit.WebApi.StringValue;
		/** Shows the date and time that the record was migrated. */
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
		/** Contains the ID of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the ID of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Purchase Order Bill */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Purchase Order Bill */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderbill {
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