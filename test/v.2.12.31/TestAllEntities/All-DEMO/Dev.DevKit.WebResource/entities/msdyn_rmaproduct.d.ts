//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_rmaproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Account where ownership of associated asset should be transferred to (if Product Action is Change Asset Ownership) */
			msdyn_Changeownership: DevKit.Controls.Lookup;
			/** Specify if credit invoice should be generated for this product when returned */
			msdyn_CredittoAccount: DevKit.Controls.Boolean;
			/** Asset this line item relates to */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Type a description of the product. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Controls.OptionSet;
			/** Shows the order of this product within the RMA. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that determines the pricing for this product */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Shows the action to be performed by the system once the product is received (either create RTV, return to warehouse, or change asset ownership). */
			msdyn_ProcessingAction: DevKit.Controls.OptionSet;
			/** Product to return */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Shows the quantity processed as per the processing action. */
			msdyn_QtyProcessed: DevKit.Controls.Double;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Controls.Double;
			/** Enter the quantity to return. */
			msdyn_Quantitytoreturn: DevKit.Controls.Double;
			/** Vendor to where this product should be returned (if Product Action is RTV) */
			msdyn_ReturntoVendor: DevKit.Controls.Lookup;
			/** Warehouse to which this product should be returned to (if Product Action is Warehouse) */
			msdyn_ReturntoWarehouse: DevKit.Controls.Lookup;
			/** RMA this line item relates to */
			msdyn_RMA: DevKit.Controls.Lookup;
			/** Specify if product is taxable */
			msdyn_Taxable: DevKit.Controls.Boolean;
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Unit for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Shows the unit amount to be credited to the customer */
			msdyn_UnitAmount: DevKit.Controls.Money;
			/** Work Order Product to be returned */
			msdyn_WOProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RMA Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rmaproduct_msdyn_rmareceiptproduct_RMAProduct: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rmaproduct_msdyn_rtvproduct_RMAProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_rmaproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_rmaproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_rmaproduct_Information */
		Body: DevKit.Formmsdyn_rmaproduct_Information.Body;
		/** The Footer section of form msdyn_rmaproduct_Information */
		Footer: DevKit.Formmsdyn_rmaproduct_Information.Footer;
		/** The Navigation of form msdyn_rmaproduct_Information */
		Navigation: DevKit.Formmsdyn_rmaproduct_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_rmaproduct {
		enum msdyn_ItemStatus {
			/** 690970002 */
			Canceled,
			/** 690970000 */
			Pending,
			/** 690970001 */
			Received
		}
		enum msdyn_ProcessingAction {
			/** 690970002 */
			Change_Asset_Ownership,
			/** 690970000 */
			Create_RTV,
			/** 690970001 */
			Return_to_Warehouse
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}