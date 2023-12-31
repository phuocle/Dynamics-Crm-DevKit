﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPurchase_Order_Receipt {
		interface tab_fstab_receipt_products_Sections {
			fstab_products_section_related: DevKit.Controls.Section;
		}
		interface tab_fstab_receipt_products extends DevKit.Controls.ITab {
			Section: tab_fstab_receipt_products_Sections;
		}
		interface Tabs {
			fstab_receipt_products: tab_fstab_receipt_products;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Receipt */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
		interface Grid {
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Receipt extends DevKit.IForm {
		/**
		* Purchase Order Receipt [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt */
		Body: DevKit.FormPurchase_Order_Receipt.Body;
		/** The Footer section of form Purchase_Order_Receipt */
		Footer: DevKit.FormPurchase_Order_Receipt.Footer;
		/** The Navigation of form Purchase_Order_Receipt */
		Navigation: DevKit.FormPurchase_Order_Receipt.Navigation;
		/** The Process of form Purchase_Order_Receipt */
		Process: DevKit.FormPurchase_Order_Receipt.Process;
		/** The Grid of form Purchase_Order_Receipt */
		Grid: DevKit.FormPurchase_Order_Receipt.Grid;
		/** The SidePanes of form Purchase_Order_Receipt */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurchase_Order_Receipt_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
		}
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
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessPurchase_Order_Business_Process {
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Purchase_Order_Business_Process: ProcessPurchase_Order_Business_Process;
		}
		interface Grid {
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Receipt_Mobile extends DevKit.IForm {
		/**
		* Purchase Order Receipt - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt_Mobile */
		Body: DevKit.FormPurchase_Order_Receipt_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Mobile */
		Navigation: DevKit.FormPurchase_Order_Receipt_Mobile.Navigation;
		/** The Process of form Purchase_Order_Receipt_Mobile */
		Process: DevKit.FormPurchase_Order_Receipt_Mobile.Process;
		/** The Grid of form Purchase_Order_Receipt_Mobile */
		Grid: DevKit.FormPurchase_Order_Receipt_Mobile.Grid;
		/** The SidePanes of form Purchase_Order_Receipt_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_purchaseorderreceiptApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderreceiptApi
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
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_DateReceived_UtcDateOnly: Date;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		msdyn_Note: string;
		/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
		msdyn_PurchaseOrder: string;
		/** Shows the entity instances. */
		msdyn_purchaseorderreceiptId: string;
		/** Unique identifier for User associated with Purchase Order Receipt. */
		msdyn_ReceivedBy: string;
		/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
		msdyn_ShipVia: string;
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
		/** Status of the Purchase Order Receipt */
		statecode: OptionSet.msdyn_purchaseorderreceipt.statecode;
		/** Reason for the status of the Purchase Order Receipt */
		statuscode: OptionSet.msdyn_purchaseorderreceipt.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_DateReceived_UtcDateOnly: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_Note: string;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			readonly msdyn_PurchaseOrder: string;
			/** Shows the entity instances. */
			readonly msdyn_purchaseorderreceiptId: string;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			readonly msdyn_ReceivedBy: string;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			readonly msdyn_ShipVia: string;
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
			/** Status of the Purchase Order Receipt */
			readonly statecode: string;
			/** Reason for the status of the Purchase Order Receipt */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
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
	namespace msdyn_purchaseorderreceipt {
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