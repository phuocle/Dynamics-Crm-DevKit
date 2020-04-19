//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRollupField_Information {
		interface tab_general_Sections {
			_41A22D3A_56EC_4317_812A_AC5C92764CD5: DevKit.Form.Controls.ControlSection;
			_27578C24_6DCB_7649_BA95_913C229C39EB: DevKit.Form.Controls.ControlSection;
			_6AD1C698_2E2E_8A08_B43A_B66815B9EB06: DevKit.Form.Controls.ControlSection;
			_D65A4472_A959_3B9C_C416_D79C56E4A44B: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			dateattribute_UC: DevKit.Form.Controls.ControlActionCards;
			entityfordateattribute_UC: DevKit.Form.Controls.ControlActionCards;
			goalattribute_UC: DevKit.Form.Controls.ControlActionCards;
			sourceattribute_UC: DevKit.Form.Controls.ControlActionCards;
			/** Type the name of the record type (entity) that the data for the goal must roll up from. */
			SourceEntity: DevKit.Form.Controls.ControlString;
			sourceentity_UC: DevKit.Form.Controls.ControlActionCards;
			sourcestate_UC: DevKit.Form.Controls.ControlActionCards;
			sourcestatus_UC: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormRollupField_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RollupField_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RollupField_Information */
		Body: LuckyMokey.FormRollupField_Information.Body;
	}
}
declare namespace OptionSet {
	namespace RollupField {
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