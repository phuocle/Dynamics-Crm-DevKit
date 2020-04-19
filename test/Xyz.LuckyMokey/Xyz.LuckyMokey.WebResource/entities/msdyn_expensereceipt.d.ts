//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_expensereceipt_Information {
		interface tab__8E601642_0797_40BA_A89B_0B0839C3E6D6_Sections {
			_A567170E_209A_42B0_925A_80E83B2F4D87: DevKit.Form.Controls.ControlSection;
		}
		interface tab__8E601642_0797_40BA_A89B_0B0839C3E6D6 extends DevKit.Form.Controls.IControlTab {
			Section: tab__8E601642_0797_40BA_A89B_0B0839C3E6D6_Sections;
		}
		interface Tabs {
			_8E601642_0797_40BA_A89B_0B0839C3E6D6: tab__8E601642_0797_40BA_A89B_0B0839C3E6D6;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
		}
	}
	class Formmsdyn_expensereceipt_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_expensereceipt_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_expensereceipt_Information */
		Body: LuckyMokey.Formmsdyn_expensereceipt_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_expensereceipt {
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