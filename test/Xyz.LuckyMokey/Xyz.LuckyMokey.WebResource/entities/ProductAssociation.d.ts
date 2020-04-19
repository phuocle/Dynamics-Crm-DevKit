//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProduct_Association {
		interface tab_product_association_dynamic_properties_Sections {
			product_association_dynamic_properties_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_association_dynamic_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_association_dynamic_properties_Sections;
		}
		interface Tabs {
			product_association_dynamic_properties: tab_product_association_dynamic_properties;
		}
		interface Body {
			Tab: Tabs;
			product_association_dynamic_properties: DevKit.Form.Controls.ControlGrid;
			/** Select a product to add to the bundle or kit. */
			AssociatedProduct: DevKit.Form.Controls.ControlLookup;
			/** Select a bundle or a kit. */
			ProductId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the associated product is required or optional. */
			ProductIsRequired: DevKit.Form.Controls.ControlOptionSet;
			/** Type the quantity of the products added to the bundle or kit. */
			Quantity: DevKit.Form.Controls.ControlDecimal;
			/** Shows the unit of the product association. */
			UoMId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormProduct_Association extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Association
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Product_Association */
		Body: LuckyMokey.FormProduct_Association.Body;
	}
}
declare namespace OptionSet {
	namespace ProductAssociation {
		enum ProductIsRequired {
			/** 0 */
			Optional,
			/** 1 */
			Required
		}
		enum PropertyCustomizationStatus {
			/** 0 */
			Not_Available,
			/** 1 */
			Available
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive,
			/** 2 */
			Draft,
			/** 3 */
			Under_Revision
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive,
			/** 0 */
			Draft,
			/** 3 */
			DraftActive
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
//{'JsForm':['Product Association'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}