//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_inventoryadjustmentproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Inventory Adjustment Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_inventoryadjustmentproduct_msdyn_inventoryjournal_InventoryAdjstProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_inventoryadjustmentproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryadjustmentproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_inventoryadjustmentproduct_Information */
		Body: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Body;
		/** The Footer section of form msdyn_inventoryadjustmentproduct_Information */
		Footer: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Footer;
		/** The Navigation of form msdyn_inventoryadjustmentproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Navigation;
	}
	namespace FormQuick_Create_Inventory_Adjustment_Product {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_Create_Inventory_Adjustment_Product extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Inventory_Adjustment_Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Inventory_Adjustment_Product */
		Body: LuckyMokey.FormQuick_Create_Inventory_Adjustment_Product.Body;
	}
	class msdyn_inventoryadjustmentproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_inventoryadjustmentproductApi
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
		/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
		msdyn_InventoryAdjustment: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_inventoryadjustmentproductId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
		msdyn_InventoryTransfer: DevKit.WebApi.LookupValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** Unique identifier for Unit associated with Inventory Adjustment Product. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
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
		/** Status of the Inventory Adjustment Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Inventory Adjustment Product */
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
	namespace msdyn_inventoryadjustmentproduct {
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
//{'JsForm':['Information','Quick Create Inventory Adjustment Product'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}