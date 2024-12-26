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
		* Information [Main Form]
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
		* Purchase Order Bill - Mobile [Main Form]
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_BillDate_UtcDateOnly: Date;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		msdyn_Note: string;
		/** Unique identifier for Payment Term associated with Purchase Order Bill. */
		msdyn_PaymentTerm: string;
		/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
		msdyn_PurchaseOrder: string;
		/** Shows the entity instances. */
		msdyn_purchaseorderbillId: string;
		msdyn_ShippingAmount: number;
		/** Shows the value of the shipping amount in the base currency. */
		readonly msdyn_shippingamount_Base: number;
		msdyn_Subtotal: number;
		/** Shows the value of the subtotal in the base currency. */
		readonly msdyn_subtotal_Base: number;
		msdyn_TaxAmount: number;
		/** Shows the value of the tax amount in the base currency. */
		readonly msdyn_taxamount_Base: number;
		/** Unique identifier for Tax Code associated with Purchase Order Bill. */
		msdyn_TaxCode: string;
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		msdyn_VendorInvoiceNumber: string;
		/** Shows the date and time that the record was migrated. */
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
		/** Contains the ID of the process associated with the entity. */
		processid: string;
		/** Contains the ID of the stage where the entity is located. */
		stageid: string;
		/** Status of the Purchase Order Bill */
		statecode: OptionSet.msdyn_purchaseorderbill.statecode;
		/** Reason for the status of the Purchase Order Bill */
		statuscode: OptionSet.msdyn_purchaseorderbill.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_BillDate_UtcDateOnly: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_Note: string;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			readonly msdyn_PaymentTerm: string;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			readonly msdyn_PurchaseOrder: string;
			/** Shows the entity instances. */
			readonly msdyn_purchaseorderbillId: string;
			readonly msdyn_ShippingAmount: string;
			/** Shows the value of the shipping amount in the base currency. */
			readonly msdyn_shippingamount_Base: string;
			readonly msdyn_Subtotal: string;
			/** Shows the value of the subtotal in the base currency. */
			readonly msdyn_subtotal_Base: string;
			readonly msdyn_TaxAmount: string;
			/** Shows the value of the tax amount in the base currency. */
			readonly msdyn_taxamount_Base: string;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			readonly msdyn_TaxCode: string;
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			readonly msdyn_VendorInvoiceNumber: string;
			/** Shows the date and time that the record was migrated. */
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
			/** Contains the ID of the process associated with the entity. */
			readonly processid: string;
			/** Contains the ID of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Purchase Order Bill */
			readonly statecode: string;
			/** Reason for the status of the Purchase Order Bill */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
			readonly traversedpath: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderbill {
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