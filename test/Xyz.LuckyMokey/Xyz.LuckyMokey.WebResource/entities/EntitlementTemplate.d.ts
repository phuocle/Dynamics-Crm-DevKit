//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEntitlement_Template {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
			entitlementterms: DevKit.Form.Controls.ControlSection;
			entitlementtemplateterms: DevKit.Form.Controls.ControlSection;
			entitlementtemplatetermsInUCI: DevKit.Form.Controls.ControlSection;
			products: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			grid_EntitlementChannel: DevKit.Form.Controls.ControlGrid;
			editableEntitlementChannelGridControl: DevKit.Form.Controls.ControlGrid;
			grid_EntitlementProducts: DevKit.Form.Controls.ControlGrid;
			/** Select whether the entitlement allocation is based on number of cases or number of hours. */
			AllocationTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Information about whether to decrease the remaining terms when the case is created or when it is resolved */
			DecreaseRemainingOn: DevKit.Form.Controls.ControlOptionSet;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the date and time when the entitlement ends. */
			EndDate: DevKit.Form.Controls.ControlDate;
			/** Type a descriptive name for the entitlement template. */
			Name: DevKit.Form.Controls.ControlString;
			/** Tells whether case creation is restricted based on entitlement terms. */
			RestrictCaseCreation: DevKit.Form.Controls.ControlBoolean;
			/** Choose the service level agreement (SLA) associated with the entitlement. */
			SLAId: DevKit.Form.Controls.ControlLookup;
			/** Enter the date and time when the entitlement begins. */
			StartDate: DevKit.Form.Controls.ControlDate;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormEntitlement_Template extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Entitlement_Template
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Entitlement_Template */
		Body: LuckyMokey.FormEntitlement_Template.Body;
	}
}
declare namespace OptionSet {
	namespace EntitlementTemplate {
		enum AllocationTypeCode {
			/** 0 */
			Number_of_cases,
			/** 1 */
			Number_of_hours
		}
		enum DecreaseRemainingOn {
			/** 0 */
			Case_Resolution,
			/** 1 */
			Case_Creation
		}
		enum entitytype {
			/** 192350000 */
			Work_Order,
			/** 0 */
			Case
		}
		enum KbAccessLevel {
			/** 0 */
			Standard,
			/** 1 */
			Premium,
			/** 2 */
			None
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
//{'JsForm':['Entitlement Template'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}