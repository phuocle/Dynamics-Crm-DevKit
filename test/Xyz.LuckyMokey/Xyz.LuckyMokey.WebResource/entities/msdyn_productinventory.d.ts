//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_productinventory_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_Bin: DevKit.Form.Controls.ControlString;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Product/Service associated with Product Inventory. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_QtyAllocated: DevKit.Form.Controls.ControlDouble;
			msdyn_QtyAvailable: DevKit.Form.Controls.ControlDouble;
			msdyn_QtyOnHand: DevKit.Form.Controls.ControlDouble;
			msdyn_QtyOnOrder: DevKit.Form.Controls.ControlDouble;
			msdyn_ReorderPoint: DevKit.Form.Controls.ControlDouble;
			msdyn_Row: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Unit associated with Product Inventory. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Warehouse associated with Product Inventory. */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Product Inventory */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_productinventory_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_productinventory_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_productinventory_Information */
		Body: LuckyMokey.Formmsdyn_productinventory_Information.Body;
		/** The Footer section of form msdyn_productinventory_Information */
		Footer: LuckyMokey.Formmsdyn_productinventory_Information.Footer;
		/** The Navigation of form msdyn_productinventory_Information */
		Navigation: LuckyMokey.Formmsdyn_productinventory_Information.Navigation;
	}
	class msdyn_productinventoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_productinventoryApi
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
		msdyn_Bin: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Product/Service associated with Product Inventory. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_productinventoryId: DevKit.WebApi.GuidValue;
		msdyn_QtyAllocated: DevKit.WebApi.DoubleValue;
		msdyn_QtyAvailable: DevKit.WebApi.DoubleValue;
		msdyn_QtyOnHand: DevKit.WebApi.DoubleValue;
		msdyn_QtyOnOrder: DevKit.WebApi.DoubleValue;
		msdyn_ReorderPoint: DevKit.WebApi.DoubleValue;
		msdyn_Row: DevKit.WebApi.StringValue;
		/** Unique identifier for Unit associated with Product Inventory. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Unique identifier for Warehouse associated with Product Inventory. */
		msdyn_Warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Product Inventory */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Product Inventory */
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
	namespace msdyn_productinventory {
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