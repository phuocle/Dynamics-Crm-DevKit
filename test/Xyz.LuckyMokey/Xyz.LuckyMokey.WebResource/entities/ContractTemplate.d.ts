//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormContractTemplate_Information {
		interface Tabs {
		}
		interface Body {
			IFRAME_ContractTemplateCalendar: DevKit.Form.Controls.ControlIFrame;
			/** Abbreviation of the contract template name. */
			Abbreviation: DevKit.Form.Controls.ControlString;
			/** Criteria for the contracts based on the template, such as number of cases, time, or coverage dates. */
			AllotmentTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** How often the customer or account is to be billed in contracts that are based on the template. */
			BillingFrequencyCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the level of service specified in contracts that are based on the template. */
			ContractServiceLevelCode: DevKit.Form.Controls.ControlOptionSet;
			/** Description of the contract template. */
			Description: DevKit.Form.Controls.ControlString;
			effectivitycalendar: DevKit.Form.Controls.ControlActionCards;
			/** Name of the contract template. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies whether the discount is a percentage or a monetary amount in contracts based on the template. */
			UseDiscountAsPercentage: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormContractTemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ContractTemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ContractTemplate_Information */
		Body: LuckyMokey.FormContractTemplate_Information.Body;
	}
}
declare namespace OptionSet {
	namespace ContractTemplate {
		enum AllotmentTypeCode {
			/** 1 */
			Number_of_Cases,
			/** 2 */
			Time,
			/** 3 */
			Coverage_Dates
		}
		enum BillingFrequencyCode {
			/** 1 */
			Monthly,
			/** 2 */
			Bimonthly,
			/** 3 */
			Quarterly,
			/** 4 */
			Semiannually,
			/** 5 */
			Annually
		}
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum ContractServiceLevelCode {
			/** 1 */
			Gold,
			/** 2 */
			Silver,
			/** 3 */
			Bronze
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