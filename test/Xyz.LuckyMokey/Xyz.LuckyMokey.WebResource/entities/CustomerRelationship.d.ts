//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCustomerRelationship_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the primary account or contact involved in the customer relationship. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
			CustomerRoleDescription: DevKit.Form.Controls.ControlString;
			/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			CustomerRoleId: DevKit.Form.Controls.ControlLookup;
			/** Select the secondary account or contact involved in the customer relationship. */
			PartnerId: DevKit.Form.Controls.ControlLookup;
			/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
			PartnerRoleDescription: DevKit.Form.Controls.ControlString;
			/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
			PartnerRoleId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormCustomerRelationship_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form CustomerRelationship_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form CustomerRelationship_Information */
		Body: LuckyMokey.FormCustomerRelationship_Information.Body;
	}
}
declare namespace OptionSet {
	namespace CustomerRelationship {
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