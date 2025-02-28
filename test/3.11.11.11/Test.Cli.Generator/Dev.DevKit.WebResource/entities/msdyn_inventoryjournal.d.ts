﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inventoryjournal_Information {
		interface Tabs {
		}
		interface Body {
			/** Work Order this product is allocated to */
			msdyn_AllocatedToWorkOrder: DevKit.Controls.Lookup;
			/** The Inventory Adjustment Product record related to this journal */
			msdyn_InventoryAdjustmentProduct: DevKit.Controls.Lookup;
			/** Shows the transaction type of this journal. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Indicates the Journal reversed by this journal record */
			msdyn_OriginatingJournal: DevKit.Controls.Lookup;
			/** Product this journal relates to */
			msdyn_Product: DevKit.Controls.Lookup;
			/** The Purchase Order Product record related to this journal */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Controls.Lookup;
			/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** Indicates if this Journal reverses a previous journal record */
			msdyn_Reversal: DevKit.Controls.Boolean;
			/** The RMA Receipt Product record related to this journal */
			msdyn_RMAReceiptProduct: DevKit.Controls.Lookup;
			/** Shows the transaction type of this journal. */
			msdyn_TransactionType: DevKit.Controls.OptionSet;
			/** Unit of product used */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Warehouse affected by this transaction */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			/** The Work Order Product record related to this journal */
			msdyn_WorkOrderProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Inventory Journal */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_inventoryjournal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inventoryjournal_Information */
		Body: DevKit.Formmsdyn_inventoryjournal_Information.Body;
		/** The Footer section of form msdyn_inventoryjournal_Information */
		Footer: DevKit.Formmsdyn_inventoryjournal_Information.Footer;
		/** The Navigation of form msdyn_inventoryjournal_Information */
		Navigation: DevKit.Formmsdyn_inventoryjournal_Information.Navigation;
		/** The Process of form msdyn_inventoryjournal_Information */
		Process: DevKit.Formmsdyn_inventoryjournal_Information.Process;
		/** The SidePanes of form msdyn_inventoryjournal_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_inventoryjournalApi {
		/**
		* DynamicsCrm.DevKit msdyn_inventoryjournalApi
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
		/** Work Order this product is allocated to */
		msdyn_AllocatedToWorkOrder: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** The Inventory Adjustment Product record related to this journal */
		msdyn_InventoryAdjustmentProduct: string;
		/** Shows the entity instances. */
		msdyn_inventoryjournalId: string;
		/** Shows the transaction type of this journal. */
		msdyn_JournalType: OptionSet.msdyn_inventoryjournal.msdyn_JournalType;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Indicates the Journal reversed by this journal record */
		msdyn_OriginatingJournal: string;
		/** Product this journal relates to */
		msdyn_Product: string;
		/** The Purchase Order Product record related to this journal */
		msdyn_PurchaseOrderProduct: string;
		/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
		msdyn_PurchaseOrderReceiptProduct: string;
		/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
		msdyn_Quantity: number;
		/** Indicates if this Journal reverses a previous journal record */
		msdyn_Reversal: boolean;
		/** The RMA Receipt Product record related to this journal */
		msdyn_RMAReceiptProduct: string;
		/** Shows the transaction type of this journal. */
		msdyn_TransactionType: OptionSet.msdyn_inventoryjournal.msdyn_TransactionType;
		/** Unit of product used */
		msdyn_Unit: string;
		/** Warehouse affected by this transaction */
		msdyn_Warehouse: string;
		/** The Work Order Product record related to this journal */
		msdyn_WorkOrderProduct: string;
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
		/** Status of the Inventory Journal */
		statecode: OptionSet.msdyn_inventoryjournal.statecode;
		/** Reason for the status of the Inventory Journal */
		statuscode: OptionSet.msdyn_inventoryjournal.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Work Order this product is allocated to */
			readonly msdyn_AllocatedToWorkOrder: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** The Inventory Adjustment Product record related to this journal */
			readonly msdyn_InventoryAdjustmentProduct: string;
			/** Shows the entity instances. */
			readonly msdyn_inventoryjournalId: string;
			/** Shows the transaction type of this journal. */
			readonly msdyn_JournalType: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Indicates the Journal reversed by this journal record */
			readonly msdyn_OriginatingJournal: string;
			/** Product this journal relates to */
			readonly msdyn_Product: string;
			/** The Purchase Order Product record related to this journal */
			readonly msdyn_PurchaseOrderProduct: string;
			/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
			readonly msdyn_PurchaseOrderReceiptProduct: string;
			/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
			readonly msdyn_Quantity: string;
			/** Indicates if this Journal reverses a previous journal record */
			readonly msdyn_Reversal: string;
			/** The RMA Receipt Product record related to this journal */
			readonly msdyn_RMAReceiptProduct: string;
			/** Shows the transaction type of this journal. */
			readonly msdyn_TransactionType: string;
			/** Unit of product used */
			readonly msdyn_Unit: string;
			/** Warehouse affected by this transaction */
			readonly msdyn_Warehouse: string;
			/** The Work Order Product record related to this journal */
			readonly msdyn_WorkOrderProduct: string;
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
			/** Status of the Inventory Journal */
			readonly statecode: string;
			/** Reason for the status of the Inventory Journal */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_inventoryjournal {
		enum msdyn_JournalType {
			/** 690970002 */
			Allocated,
			/** 690970000 */
			On_Hand,
			/** 690970001 */
			On_Order
		}
		enum msdyn_TransactionType {
			/** 690970003 */
			Inventory_Adjustment,
			/** 690970004 */
			Inventory_Transfer,
			/** 690970006 */
			Manual,
			/** 690970000 */
			Purchase_Order_Product,
			/** 690970001 */
			Purchase_Order_Receipt,
			/** 690970005 */
			RMA_Product,
			/** 690970002 */
			WO_Product
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