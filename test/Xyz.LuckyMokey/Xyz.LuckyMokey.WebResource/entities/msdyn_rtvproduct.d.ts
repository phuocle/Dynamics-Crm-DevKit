//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_rtvproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Type a description of the product. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows the order of this product within the RTV. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Product to return */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity returned. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Originating RMA if item was returned from customer */
			msdyn_RMA: DevKit.Form.Controls.ControlLookup;
			/** Originating RMA Product if item was returned from customer */
			msdyn_RMAProduct: DevKit.Form.Controls.ControlLookup;
			/** RTV this line item relates to */
			msdyn_RTV: DevKit.Form.Controls.ControlLookup;
			/** Shows the total Amount to be credited on this item. */
			msdyn_TotalCreditAmount: DevKit.Form.Controls.ControlMoney;
			/** Unit for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the unit amount to be credited. */
			msdyn_UnitCreditAmount: DevKit.Form.Controls.ControlMoney;
			/** Warehouse from where this product is returned */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** Originating Work Order if item was returned from customer */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Originating Work Order Product if item was returned from customer */
			msdyn_WorkOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the RTV Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_rtvproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_rtvproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_rtvproduct_Information */
		Body: LuckyMokey.Formmsdyn_rtvproduct_Information.Body;
		/** The Footer section of form msdyn_rtvproduct_Information */
		Footer: LuckyMokey.Formmsdyn_rtvproduct_Information.Footer;
		/** The Navigation of form msdyn_rtvproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_rtvproduct_Information.Navigation;
	}
	class msdyn_rtvproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_rtvproductApi
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
		/** Type a description of the product. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** Shows the order of this product within the RTV. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Product to return */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Enter the quantity returned. */
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		/** Originating RMA if item was returned from customer */
		msdyn_RMA: DevKit.WebApi.LookupValue;
		/** Originating RMA Product if item was returned from customer */
		msdyn_RMAProduct: DevKit.WebApi.LookupValue;
		/** RTV this line item relates to */
		msdyn_RTV: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_rtvproductId: DevKit.WebApi.GuidValue;
		/** Shows the total Amount to be credited on this item. */
		msdyn_TotalCreditAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total credit amount in the base currency. */
		msdyn_totalcreditamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unit for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the unit amount to be credited. */
		msdyn_UnitCreditAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit credit amount in the base currency. */
		msdyn_unitcreditamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Warehouse from where this product is returned */
		msdyn_Warehouse: DevKit.WebApi.LookupValue;
		/** Originating Work Order if item was returned from customer */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
		/** Originating Work Order Product if item was returned from customer */
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
		/** Status of the RTV Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the RTV Product */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_rtvproduct {
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