//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_dimension_Information {
		interface Tabs {
		}
		interface Body {
			/** Determines if this pricing dimension is applicable for Cost price. */
			msdyn_ApplicableToCost: DevKit.Form.Controls.ControlBoolean;
			/** Determines if this pricing dimension is applicable for Purchase price. */
			msdyn_ApplicableToPurchase: DevKit.Form.Controls.ControlBoolean;
			/** Determines if this pricing dimension is applicable for Sales price. */
			msdyn_ApplicableToSales: DevKit.Form.Controls.ControlBoolean;
			/** Determines priority of the pricing dimension when resolving for Cost price. */
			msdyn_CostPriority: DevKit.Form.Controls.ControlInteger;
			/** Name of the Dimension to be used in pricing calculations. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Determines priority of the pricing dimension when resolving for Purchase price. */
			msdyn_PurchasePriority: DevKit.Form.Controls.ControlInteger;
			/** Determines priority of the pricing dimension when resolving for Sales price. */
			msdyn_SalesPriority: DevKit.Form.Controls.ControlInteger;
			/** Type determines if the dimension is to be used for retrieving the final per unit price or to retrieve a markup that is to be applied on a base price. */
			msdyn_Type: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_dimension_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_dimension_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_dimension_Information */
		Body: LuckyMokey.Formmsdyn_dimension_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_dimension {
		enum msdyn_Type {
			/** 192350000 */
			Amount_based,
			/** 192350001 */
			Markup_based
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