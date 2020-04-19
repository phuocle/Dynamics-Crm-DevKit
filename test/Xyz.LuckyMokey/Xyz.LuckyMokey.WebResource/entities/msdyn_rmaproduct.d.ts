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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}