//@ts-check
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
			bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Tasks: DevKit.Controls.NavigationItem
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
		* Purchase Order [Main Form]
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
		/** The SidePanes of form Purchase_Order */
		SidePanes: DevKit.SidePanes;
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
			bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorder_Tasks: DevKit.Controls.NavigationItem
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
			BILLS: DevKit.Controls.Grid;
			PurchaseOrderProductsGrid: DevKit.Controls.Grid;
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
			RECEIPTS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Mobile extends DevKit.IForm {
		/**
		* Purchase Order - Mobile [Main Form]
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
		/** The SidePanes of form Purchase_Order_Mobile */
		SidePanes: DevKit.SidePanes;
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
		msdyn_Address1: string;
		msdyn_Address2: string;
		msdyn_Address3: string;
		/** Enter the location to ship the products of this PO to. */
		msdyn_AddressName: string;
		msdyn_AmountBilled: number;
		/** Shows the value of the amount billed in the base currency. */
		readonly msdyn_amountbilled_Base: number;
		/** Enter the current status of the approval. */
		msdyn_ApprovalStatus: OptionSet.msdyn_purchaseorder.msdyn_ApprovalStatus;
		/** The user who approved or rejected this PO */
		msdyn_ApprovedRejectedBy: string;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: string;
		/** If purchase order is being ordered directly to a booking specify here. Note, when specified, by default all products will receive directly to booking. */
		msdyn_Booking: string;
		msdyn_City: string;
		msdyn_Country: string;
		/** Enter the date you expect to receive your order. Note that products added once the date is specified here will automatically be set to this date. */
		msdyn_DateExpected_UtcDateOnly: Date;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		msdyn_Latitude: number;
		msdyn_Longitude: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for User associated with Purchase Order. */
		msdyn_OrderedBy: string;
		/** The payment terms for this PO */
		msdyn_PaymentTerm: string;
		/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
		msdyn_PODate_UtcDateOnly: Date;
		msdyn_PostalCode: string;
		/** Shows the entity instances. */
		msdyn_purchaseorderId: string;
		/** Warehouse where products of this PO will be received to */
		msdyn_ReceivetoWarehouse: string;
		/** Resource that requested the purchase */
		msdyn_RequestedByResource: string;
		/** Enter the location to ship to. If the PO has been associated to a work order or a schedule, you can ship directly to the service account address. */
		msdyn_ShipTo: OptionSet.msdyn_purchaseorder.msdyn_ShipTo;
		/** Method of shipment by vendor */
		msdyn_ShipVia: string;
		msdyn_StateOrProvince: string;
		/** Purchase Order Substatus */
		msdyn_SubStatus: string;
		/** Enter the current status of the purchase order. */
		msdyn_SystemStatus: OptionSet.msdyn_purchaseorder.msdyn_SystemStatus;
		/** Total Amount (used by Field Service only) */
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** Vendor you wish to purchase from */
		msdyn_Vendor: string;
		/** If you wish to display a note for the vendor on this PO specify it here */
		msdyn_VendorNote: string;
		/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
		msdyn_WorkOrder: string;
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
		/** Status of the Purchase Order */
		statecode: OptionSet.msdyn_purchaseorder.statecode;
		/** Reason for the status of the Purchase Order */
		statuscode: OptionSet.msdyn_purchaseorder.statuscode;
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
			readonly msdyn_Address1: string;
			readonly msdyn_Address2: string;
			readonly msdyn_Address3: string;
			/** Enter the location to ship the products of this PO to. */
			readonly msdyn_AddressName: string;
			readonly msdyn_AmountBilled: string;
			/** Shows the value of the amount billed in the base currency. */
			readonly msdyn_amountbilled_Base: string;
			/** Enter the current status of the approval. */
			readonly msdyn_ApprovalStatus: string;
			/** The user who approved or rejected this PO */
			readonly msdyn_ApprovedRejectedBy: string;
			/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
			readonly msdyn_AutoNumbering: string;
			/** If purchase order is being ordered directly to a booking specify here. Note, when specified, by default all products will receive directly to booking. */
			readonly msdyn_Booking: string;
			readonly msdyn_City: string;
			readonly msdyn_Country: string;
			/** Enter the date you expect to receive your order. Note that products added once the date is specified here will automatically be set to this date. */
			readonly msdyn_DateExpected_UtcDateOnly: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			readonly msdyn_Latitude: string;
			readonly msdyn_Longitude: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for User associated with Purchase Order. */
			readonly msdyn_OrderedBy: string;
			/** The payment terms for this PO */
			readonly msdyn_PaymentTerm: string;
			/** Shows the date you submitted your order to the vendor. Note this field is for information only. */
			readonly msdyn_PODate_UtcDateOnly: string;
			readonly msdyn_PostalCode: string;
			/** Shows the entity instances. */
			readonly msdyn_purchaseorderId: string;
			/** Warehouse where products of this PO will be received to */
			readonly msdyn_ReceivetoWarehouse: string;
			/** Resource that requested the purchase */
			readonly msdyn_RequestedByResource: string;
			/** Enter the location to ship to. If the PO has been associated to a work order or a schedule, you can ship directly to the service account address. */
			readonly msdyn_ShipTo: string;
			/** Method of shipment by vendor */
			readonly msdyn_ShipVia: string;
			readonly msdyn_StateOrProvince: string;
			/** Purchase Order Substatus */
			readonly msdyn_SubStatus: string;
			/** Enter the current status of the purchase order. */
			readonly msdyn_SystemStatus: string;
			/** Total Amount (used by Field Service only) */
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			/** Vendor you wish to purchase from */
			readonly msdyn_Vendor: string;
			/** If you wish to display a note for the vendor on this PO specify it here */
			readonly msdyn_VendorNote: string;
			/** If purchase order is being ordered directly to a work order specify here. Note, when specified, by default all products will receive directly to work order. */
			readonly msdyn_WorkOrder: string;
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
			/** Status of the Purchase Order */
			readonly statecode: string;
			/** Reason for the status of the Purchase Order */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}