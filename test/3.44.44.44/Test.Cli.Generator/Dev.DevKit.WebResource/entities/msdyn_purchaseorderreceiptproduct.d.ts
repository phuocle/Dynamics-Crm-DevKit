//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_purchaseorderreceiptproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_TotalCost: DevKit.Controls.Money;
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Appointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Emails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_purchaseorderreceiptproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderreceiptproduct_Information */
		Body: DevKit.Formmsdyn_purchaseorderreceiptproduct_Information.Body;
		/** The Navigation of form msdyn_purchaseorderreceiptproduct_Information */
		Navigation: DevKit.Formmsdyn_purchaseorderreceiptproduct_Information.Navigation;
		/** The SidePanes of form msdyn_purchaseorderreceiptproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurchase_Order_Receipt_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_4: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_quantity_cost: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section_3: DevKit.Controls.Section;
			fstab_quantity_cost_section_2: DevKit.Controls.Section;
			fstab_quantity_cost_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Controls.Section;
			fstab_product_associates_to_section_2: DevKit.Controls.Section;
			fstab_product_associates_to_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_product_associates_to extends DevKit.Controls.ITab {
			Section: tab_fstab_product_associates_to_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_product_associates_to: tab_fstab_product_associates_to;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_TotalCost: DevKit.Controls.Money;
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Appointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Emails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_purchaseorderreceiptproduct_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormPurchase_Order_Receipt_Product_Mobile extends DevKit.IForm {
		/**
		* Purchase Order Receipt Product - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt_Product_Mobile */
		Body: DevKit.FormPurchase_Order_Receipt_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Product_Mobile */
		Navigation: DevKit.FormPurchase_Order_Receipt_Product_Mobile.Navigation;
		/** The SidePanes of form Purchase_Order_Receipt_Product_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Create_Purchase_Order_Receipt_Product {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_UnitCost: DevKit.Controls.Money;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_Purchase_Order_Receipt_Product extends DevKit.IForm {
		/**
		* Quick Create Purchase Order Receipt Product [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Create_Purchase_Order_Receipt_Product */
		Body: DevKit.FormQuick_Create_Purchase_Order_Receipt_Product.Body;
	}
	class msdyn_purchaseorderreceiptproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderreceiptproductApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
		msdyn_AssociateToBooking: string;
		/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
		msdyn_AssociateToWarehouse: string;
		/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
		msdyn_AssociateToWorkOrder: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrder: string;
		/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderBill: string;
		/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderProduct: string;
		/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderReceipt: string;
		/** Shows the entity instances. */
		msdyn_purchaseorderreceiptproductId: string;
		msdyn_Quantity: number;
		msdyn_TotalCost: number;
		/** Shows the value of the total cost in the base currency. */
		readonly msdyn_totalcost_Base: number;
		msdyn_UnitCost: number;
		/** Shows the value of the unit cost in the base currency. */
		readonly msdyn_unitcost_Base: number;
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
		/** Status of the Purchase Order Receipt Product */
		statecode: OptionSet.msdyn_purchaseorderreceiptproduct.statecode;
		/** Reason for the status of the Purchase Order Receipt Product */
		statuscode: OptionSet.msdyn_purchaseorderreceiptproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
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
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			readonly msdyn_AssociateToBooking: string;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			readonly msdyn_AssociateToWarehouse: string;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			readonly msdyn_AssociateToWorkOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			readonly msdyn_PurchaseOrder: string;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			readonly msdyn_PurchaseOrderBill: string;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			readonly msdyn_PurchaseOrderProduct: string;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			readonly msdyn_PurchaseOrderReceipt: string;
			/** Shows the entity instances. */
			readonly msdyn_purchaseorderreceiptproductId: string;
			readonly msdyn_Quantity: string;
			readonly msdyn_TotalCost: string;
			/** Shows the value of the total cost in the base currency. */
			readonly msdyn_totalcost_Base: string;
			readonly msdyn_UnitCost: string;
			/** Shows the value of the unit cost in the base currency. */
			readonly msdyn_unitcost_Base: string;
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
			/** Status of the Purchase Order Receipt Product */
			readonly statecode: string;
			/** Reason for the status of the Purchase Order Receipt Product */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderreceiptproduct {
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