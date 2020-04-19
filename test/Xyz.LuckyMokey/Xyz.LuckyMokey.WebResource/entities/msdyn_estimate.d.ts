//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_estimate_Information {
		interface tab__51C00233_EE56_4421_A30F_AAE78944FDE6_Sections {
			_51C00233_EE56_4421_A30F_AAE78944FDE6_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_EstimateLinesTab_Sections {
			EstimateLinesSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab__51C00233_EE56_4421_A30F_AAE78944FDE6 extends DevKit.Form.Controls.IControlTab {
			Section: tab__51C00233_EE56_4421_A30F_AAE78944FDE6_Sections;
		}
		interface tab_EstimateLinesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_EstimateLinesTab_Sections;
		}
		interface Tabs {
			_51C00233_EE56_4421_A30F_AAE78944FDE6: tab__51C00233_EE56_4421_A30F_AAE78944FDE6;
			EstimateLinesTab: tab_EstimateLinesTab;
		}
		interface Body {
			Tab: Tabs;
			EstimateLinesGrid: DevKit.Form.Controls.ControlGrid;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Select the name of the project. */
			msdyn_Project: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_estimate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_estimate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_estimate_Information */
		Body: LuckyMokey.Formmsdyn_estimate_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_estimate {
		enum msdyn_estimateheadertype {
			/** 192350000 */
			Resource_based_estimate,
			/** 192350001 */
			Activity_based_estimate,
			/** 192350002 */
			Assignment_based_estimate,
			/** 192350003 */
			Custom_estimate
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