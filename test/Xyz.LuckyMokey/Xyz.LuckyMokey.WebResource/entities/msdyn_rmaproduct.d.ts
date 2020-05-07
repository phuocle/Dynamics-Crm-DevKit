//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_rmaproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
			msdyn_Changeownership: DevKit.Form.Controls.ControlLookup;
			/** Specify if credit invoice should be generated for this product when returned */
			msdyn_CredittoAccount: DevKit.Form.Controls.ControlBoolean;
			/** Asset this line item relates to */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Type a description of the product. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the order of this product within the RMA. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
			msdyn_ProcessingAction: DevKit.Form.Controls.ControlOptionSet;
			/** Product to return */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Shows the quantity processed as per the processing action. */
			msdyn_QtyProcessed: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity to return. */
			msdyn_Quantitytoreturn: DevKit.Form.Controls.ControlDouble;
			/** Vendor to where this product should be returned (if Product Action is RTV) */
			msdyn_ReturntoVendor: DevKit.Form.Controls.ControlLookup;
			/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
			msdyn_ReturntoWarehouse: DevKit.Form.Controls.ControlLookup;
			/** RMA this line item relates to */
			msdyn_RMA: DevKit.Form.Controls.ControlLookup;
			/** Specify if product is taxable */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Unit for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Shows the unit amount to be credited to the customer */
			msdyn_UnitAmount: DevKit.Form.Controls.ControlMoney;
			/** Work Order Product to be returned */
			msdyn_WOProduct: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the RMA Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_rmaproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_rmaproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_rmaproduct_Information */
		Body: LuckyMokey.Formmsdyn_rmaproduct_Information.Body;
		/** The Footer section of form msdyn_rmaproduct_Information */
		Footer: LuckyMokey.Formmsdyn_rmaproduct_Information.Footer;
		/** The Navigation of form msdyn_rmaproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_rmaproduct_Information.Navigation;
	}
	class msdyn_rmaproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_rmaproductApi
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
		/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
		msdyn_Changeownership: DevKit.WebApi.LookupValue;
		/** Specify if credit invoice should be generated for this product when returned */
		msdyn_CredittoAccount: DevKit.WebApi.BooleanValue;
		/** Asset this line item relates to */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		/** Type a description of the product. */
		msdyn_Description: DevKit.WebApi.StringValue;
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Enter the current status of this product. */
		msdyn_ItemStatus: DevKit.WebApi.OptionSetValue;
		/** Shows the order of this product within the RMA. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Price List that determines the pricing for this product */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
		msdyn_ProcessingAction: DevKit.WebApi.OptionSetValue;
		/** Product to return */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Shows the quantity processed as per the processing action. */
		msdyn_QtyProcessed: DevKit.WebApi.DoubleValue;
		/** Enter the quantity currently received. */
		msdyn_QtyReceived: DevKit.WebApi.DoubleValue;
		/** Enter the quantity to return. */
		msdyn_Quantitytoreturn: DevKit.WebApi.DoubleValue;
		/** Vendor to where this product should be returned (if Product Action is RTV) */
		msdyn_ReturntoVendor: DevKit.WebApi.LookupValue;
		/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
		msdyn_ReturntoWarehouse: DevKit.WebApi.LookupValue;
		/** RMA this line item relates to */
		msdyn_RMA: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_rmaproductId: DevKit.WebApi.GuidValue;
		/** Specify if product is taxable */
		msdyn_Taxable: DevKit.WebApi.BooleanValue;
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unit for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Shows the unit amount to be credited to the customer */
		msdyn_UnitAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit amount in the base currency. */
		msdyn_unitamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Work Order Product to be returned */
		msdyn_WOProduct: DevKit.WebApi.LookupValue;
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
		/** Status of the RMA Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the RMA Product */
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
	namespace msdyn_rmaproduct {
		enum msdyn_ItemStatus {
			/** 690970000 */
			Pending,
			/** 690970001 */
			Received,
			/** 690970002 */
			Canceled
		}
		enum msdyn_ProcessingAction {
			/** 690970000 */
			Create_RTV,
			/** 690970001 */
			Return_to_Warehouse,
			/** 690970002 */
			Change_Asset_Ownership
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