//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_inventoryjournal_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Work Order this product is allocated to */
			msdyn_AllocatedToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Inventory Adjustment Product record related to this journal */
			msdyn_InventoryAdjustmentProduct: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction type of this journal. */
			msdyn_JournalType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Indicates the Journal reversed by this journal record */
			msdyn_OriginatingJournal: DevKit.Form.Controls.ControlLookup;
			/** Product this journal relates to */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** The Purchase Order Product record related to this journal */
			msdyn_PurchaseOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Indicates if this Journal reverses a previous journal record */
			msdyn_Reversal: DevKit.Form.Controls.ControlBoolean;
			/** The RMA Receipt Product record related to this journal */
			msdyn_RMAReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction type of this journal. */
			msdyn_TransactionType: DevKit.Form.Controls.ControlOptionSet;
			/** Unit of product used */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Warehouse affected by this transaction */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** The Work Order Product record related to this journal */
			msdyn_WorkOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Inventory Journal */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_inventoryjournal_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryjournal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_inventoryjournal_Information */
		Body: LuckyMokey.Formmsdyn_inventoryjournal_Information.Body;
		/** The Footer section of form msdyn_inventoryjournal_Information */
		Footer: LuckyMokey.Formmsdyn_inventoryjournal_Information.Footer;
		/** The Navigation of form msdyn_inventoryjournal_Information */
		Navigation: LuckyMokey.Formmsdyn_inventoryjournal_Information.Navigation;
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
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Work Order this product is allocated to */
		msdyn_AllocatedToWorkOrder: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** The Inventory Adjustment Product record related to this journal */
		msdyn_InventoryAdjustmentProduct: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_inventoryjournalId: DevKit.WebApi.GuidValue;
		/** Shows the transaction type of this journal. */
		msdyn_JournalType: DevKit.WebApi.OptionSetValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Indicates the Journal reversed by this journal record */
		msdyn_OriginatingJournal: DevKit.WebApi.LookupValue;
		/** Product this journal relates to */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** The Purchase Order Product record related to this journal */
		msdyn_PurchaseOrderProduct: DevKit.WebApi.LookupValue;
		/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
		msdyn_PurchaseOrderReceiptProduct: DevKit.WebApi.LookupValue;
		/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** Indicates if this Journal reverses a previous journal record */
		msdyn_Reversal: DevKit.WebApi.BooleanValue;
		/** The RMA Receipt Product record related to this journal */
		msdyn_RMAReceiptProduct: DevKit.WebApi.LookupValue;
		/** Shows the transaction type of this journal. */
		msdyn_TransactionType: DevKit.WebApi.OptionSetValue;
		/** Unit of product used */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Warehouse affected by this transaction */
		msdyn_Warehouse: DevKit.WebApi.LookupValue;
		/** The Work Order Product record related to this journal */
		msdyn_WorkOrderProduct: DevKit.WebApi.LookupValue;
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
		/** Status of the Inventory Journal */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Inventory Journal */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_inventoryjournal {
		enum msdyn_JournalType {
			/** 690970000 */
			On_Hand,
			/** 690970001 */
			On_Order,
			/** 690970002 */
			Allocated
		}
		enum msdyn_TransactionType {
			/** 690970000 */
			Purchase_Order_Product,
			/** 690970001 */
			Purchase_Order_Receipt,
			/** 690970002 */
			WO_Product,
			/** 690970003 */
			Inventory_Adjustment,
			/** 690970004 */
			Inventory_Transfer,
			/** 690970005 */
			RMA_Product,
			/** 690970006 */
			Manual
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}