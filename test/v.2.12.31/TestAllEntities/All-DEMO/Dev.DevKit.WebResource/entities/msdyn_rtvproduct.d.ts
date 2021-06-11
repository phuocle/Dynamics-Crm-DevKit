//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_rtvproduct_Information {
		interface Tabs {
		}
		interface Body {
			/** Type a description of the product. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the order of this product within the RTV. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Product to return */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity returned. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** Originating RMA if item was returned from customer */
			msdyn_RMA: DevKit.Controls.Lookup;
			/** Originating RMA Product if item was returned from customer */
			msdyn_RMAProduct: DevKit.Controls.Lookup;
			/** RTV this line item relates to */
			msdyn_RTV: DevKit.Controls.Lookup;
			/** Shows the total Amount to be credited on this item. */
			msdyn_TotalCreditAmount: DevKit.Controls.Money;
			/** Unit for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the unit amount to be credited. */
			msdyn_UnitCreditAmount: DevKit.Controls.Money;
			/** Warehouse from where this product is returned */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			/** Originating Work Order if item was returned from customer */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Originating Work Order Product if item was returned from customer */
			msdyn_WorkOrderProduct: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RTV Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_rtvproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_rtvproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_rtvproduct_Information */
		Body: DevKit.Formmsdyn_rtvproduct_Information.Body;
		/** The Footer section of form msdyn_rtvproduct_Information */
		Footer: DevKit.Formmsdyn_rtvproduct_Information.Footer;
		/** The Navigation of form msdyn_rtvproduct_Information */
		Navigation: DevKit.Formmsdyn_rtvproduct_Information.Navigation;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}