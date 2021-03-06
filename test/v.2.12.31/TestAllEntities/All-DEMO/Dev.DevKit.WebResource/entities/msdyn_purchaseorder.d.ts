﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPurchase_Order {
		interface tab__0898DBC4_7C5F_4D66_963F_628E881B178B_Sections {
			_0898DBC4_7C5F_4D66_963F_628E881B178B_SECTION_2: DevKit.Controls.Section;
			_58B0EA4F_855F_4143_8703_D34B3849F302: DevKit.Controls.Section;
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_Address_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab__0898DBC4_7C5F_4D66_963F_628E881B178B extends DevKit.Controls.ITab {
			Section: tab__0898DBC4_7C5F_4D66_963F_628E881B178B_Sections;
		}
		interface tab_Address extends DevKit.Controls.ITab {
			Section: tab_Address_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			_0898DBC4_7C5F_4D66_963F_628E881B178B: tab__0898DBC4_7C5F_4D66_963F_628E881B178B;
			Address: tab_Address;
			tab_4: tab_tab_4;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Enter the location to ship the products of this PO to. */
			msdyn_AddressName: DevKit.Controls.String;
			msdyn_AmountBilled: DevKit.Controls.Money;
			/** Enter the current status of the approval. */
			msdyn_ApprovalStatus: DevKit.Controls.OptionSet;
			/** The user who approved or rejected this PO */
			msdyn_ApprovedRejectedBy: DevKit.Controls.Lookup;
			/** If purchase order is being ordered directly to a booking specify here. Note, when specified, by default all products will receive directly to booking. */
			msdyn_Booking: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			msdyn_Country: DevKit.Controls.String;
			/** Enter the date you expect to receive your order. Note that products added once the date is specified here will automatically be set to this date. */
			msdyn_DateExpected: DevKit.Controls.Date;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for User associated with Purchase Order. */
			msdyn_OrderedBy: DevKit.Controls.Lookup;
			/** The payment terms for this PO */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
			msdyn_PODate: DevKit.Controls.Date;
			/** Warehouse where products of this PO will be received to */
			msdyn_ReceivetoWarehouse: DevKit.Controls.Lookup;
			/** Resource that requested the purchase */
			msdyn_RequestedByResource: DevKit.Controls.Lookup;
			/** Enter the location to ship to. If the PO has been associated to a work order or a schedule, you can ship directly to the service account address. */
			msdyn_ShipTo: DevKit.Controls.OptionSet;
			/** Method of shipment by vendor */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Purchase Order Substatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Total Amount (used by Field Service only) */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Vendor you wish to purchase from */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** If you wish to display a note for the vendor on this PO specify it here */
			msdyn_VendorNote: DevKit.Controls.String;
			/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			/** Enter the current status of the approval. */
			msdyn_ApprovalStatus: DevKit.Controls.OptionSet;
			/** The user who approved or rejected this PO */
			msdyn_ApprovedRejectedBy: DevKit.Controls.Lookup;
			/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
			msdyn_PODate: DevKit.Controls.Date;
			/** Warehouse where products of this PO will be received to */
			msdyn_ReceivetoWarehouse: DevKit.Controls.Lookup;
			/** Method of shipment by vendor */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Vendor you wish to purchase from */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
		interface Grid {
			PurchaseOrderProductsGrid: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order */
		Body: DevKit.FormPurchase_Order.Body;
		/** The Navigation of form Purchase_Order */
		Navigation: DevKit.FormPurchase_Order.Navigation;
		/** The Process of form Purchase_Order */
		Process: DevKit.FormPurchase_Order.Process;
		/** The Grid of form Purchase_Order */
		Grid: DevKit.FormPurchase_Order.Grid;
	}
	namespace FormPurchase_Order_Mobile {
		interface tab_Address_Sections {
			fstab_address_section_address: DevKit.Controls.Section;
		}
		interface tab_fstab_details_Sections {
			fstab_details_column_5_section_1: DevKit.Controls.Section;
			fstab_details_column_6_section_1: DevKit.Controls.Section;
			fstab_details_section_amount: DevKit.Controls.Section;
			fstab_details_section_general: DevKit.Controls.Section;
			fstab_details_section_user_information: DevKit.Controls.Section;
			fstab_details_section_work_order: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
			fstab_general_column_2_section_1: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_summary: DevKit.Controls.Section;
			fstab_general_section_vendor: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_5_section_2: DevKit.Controls.Section;
			tab_5_section_3: DevKit.Controls.Section;
			tab_5_section_4: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_Address extends DevKit.Controls.ITab {
			Section: tab_Address_Sections;
		}
		interface tab_fstab_details extends DevKit.Controls.ITab {
			Section: tab_fstab_details_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			Address: tab_Address;
			fstab_details: tab_fstab_details;
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			msdyn_AmountBilled: DevKit.Controls.Money;
			/** Enter the current status of the approval. */
			msdyn_ApprovalStatus: DevKit.Controls.OptionSet;
			/** The user who approved or rejected this PO */
			msdyn_ApprovedRejectedBy: DevKit.Controls.Lookup;
			/** If purchase order is being ordered directly to a booking specify here. Note, when specified, by default all products will receive directly to booking. */
			msdyn_Booking: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			msdyn_Country: DevKit.Controls.String;
			/** Enter the date you expect to receive your order. Note that products added once the date is specified here will automatically be set to this date. */
			msdyn_DateExpected: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for User associated with Purchase Order. */
			msdyn_OrderedBy: DevKit.Controls.Lookup;
			/** The payment terms for this PO */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
			msdyn_PODate: DevKit.Controls.Date;
			/** Warehouse where products of this PO will be received to */
			msdyn_ReceivetoWarehouse: DevKit.Controls.Lookup;
			/** Resource that requested the purchase */
			msdyn_RequestedByResource: DevKit.Controls.Lookup;
			/** Enter the location to ship to. If the PO has been associated to a work order or a schedule, you can ship directly to the service account address. */
			msdyn_ShipTo: DevKit.Controls.OptionSet;
			/** Method of shipment by vendor */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Purchase Order Substatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Total Amount (used by Field Service only) */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Vendor you wish to purchase from */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** If you wish to display a note for the vendor on this PO specify it here */
			msdyn_VendorNote: DevKit.Controls.String;
			/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			/** Enter the current status of the approval. */
			msdyn_ApprovalStatus: DevKit.Controls.OptionSet;
			/** The user who approved or rejected this PO */
			msdyn_ApprovedRejectedBy: DevKit.Controls.Lookup;
			/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
			msdyn_PODate: DevKit.Controls.Date;
			/** Warehouse where products of this PO will be received to */
			msdyn_ReceivetoWarehouse: DevKit.Controls.Lookup;
			/** Method of shipment by vendor */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Enter the current status of the purchase order. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Vendor you wish to purchase from */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
		interface Grid {
			PurchaseOrderProductsGrid: DevKit.Controls.Grid;
			RECEIPTS: DevKit.Controls.Grid;
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
			BILLS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Mobile */
		Body: DevKit.FormPurchase_Order_Mobile.Body;
		/** The Navigation of form Purchase_Order_Mobile */
		Navigation: DevKit.FormPurchase_Order_Mobile.Navigation;
		/** The Process of form Purchase_Order_Mobile */
		Process: DevKit.FormPurchase_Order_Mobile.Process;
		/** The Grid of form Purchase_Order_Mobile */
		Grid: DevKit.FormPurchase_Order_Mobile.Grid;
	}
	class msdyn_purchaseorderApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderApi
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
		msdyn_Address1: DevKit.WebApi.StringValue;
		msdyn_Address2: DevKit.WebApi.StringValue;
		msdyn_Address3: DevKit.WebApi.StringValue;
		/** Enter the location to ship the products of this PO to. */
		msdyn_AddressName: DevKit.WebApi.StringValue;
		msdyn_AmountBilled: DevKit.WebApi.MoneyValue;
		/** Shows the value of the amount billed in the base currency. */
		msdyn_amountbilled_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the current status of the approval. */
		msdyn_ApprovalStatus: DevKit.WebApi.OptionSetValue;
		/** The user who approved or rejected this PO */
		msdyn_ApprovedRejectedBy: DevKit.WebApi.LookupValue;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: DevKit.WebApi.StringValue;
		/** If purchase order is being ordered directly to a booking specify here. Note, when specified, by default all products will receive directly to booking. */
		msdyn_Booking: DevKit.WebApi.LookupValue;
		msdyn_City: DevKit.WebApi.StringValue;
		msdyn_Country: DevKit.WebApi.StringValue;
		/** Enter the date you expect to receive your order. Note that products added once the date is specified here will automatically be set to this date. */
		msdyn_DateExpected_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for User associated with Purchase Order. */
		msdyn_OrderedBy: DevKit.WebApi.LookupValue;
		/** The payment terms for this PO */
		msdyn_PaymentTerm: DevKit.WebApi.LookupValue;
		/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
		msdyn_PODate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_PostalCode: DevKit.WebApi.StringValue;
		/** Shows the entity instances. */
		msdyn_purchaseorderId: DevKit.WebApi.GuidValue;
		/** Warehouse where products of this PO will be received to */
		msdyn_ReceivetoWarehouse: DevKit.WebApi.LookupValue;
		/** Resource that requested the purchase */
		msdyn_RequestedByResource: DevKit.WebApi.LookupValue;
		/** Enter the location to ship to. If the PO has been associated to a work order or a schedule, you can ship directly to the service account address. */
		msdyn_ShipTo: DevKit.WebApi.OptionSetValue;
		/** Method of shipment by vendor */
		msdyn_ShipVia: DevKit.WebApi.LookupValue;
		msdyn_StateOrProvince: DevKit.WebApi.StringValue;
		/** Purchase Order Substatus */
		msdyn_SubStatus: DevKit.WebApi.LookupValue;
		/** Enter the current status of the purchase order. */
		msdyn_SystemStatus: DevKit.WebApi.OptionSetValue;
		/** Total Amount (used by Field Service only) */
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Vendor you wish to purchase from */
		msdyn_Vendor: DevKit.WebApi.LookupValue;
		/** If you wish to display a note for the vendor on this PO specify it here */
		msdyn_VendorNote: DevKit.WebApi.StringValue;
		/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
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
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Purchase Order */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Purchase Order */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorder {
		enum msdyn_ApprovalStatus {
			/** 690970000 */
			Approved,
			/** 690970001 */
			Rejected
		}
		enum msdyn_ShipTo {
			/** 690970001 */
			Business_Unit,
			/** 690970003 */
			Other,
			/** 690970002 */
			Service_Account,
			/** 690970000 */
			Site
		}
		enum msdyn_SystemStatus {
			/** 690970004 */
			Billed,
			/** 690970002 */
			Canceled,
			/** 690970000 */
			Draft,
			/** 690970003 */
			Products_Received,
			/** 690970001 */
			Submitted
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
//{'JsForm':['Purchase Order','Purchase Order - Mobile'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}