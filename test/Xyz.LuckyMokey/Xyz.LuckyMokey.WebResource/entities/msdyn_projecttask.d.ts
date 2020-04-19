//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_projecttask_Information {
		interface Header {
			/** Select the project name. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Project Task */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections {
			_4FDEB155_C726_4210_A41F_97CE03BD0A9D: DevKit.Form.Controls.ControlSection;
			notes_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7 extends DevKit.Form.Controls.IControlTab {
			Section: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_7A08287E_9B25_4EE0_A2DD_288055BD63A7: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter a description of the project task. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the duration in days for the task. */
			msdyn_duration: DevKit.Form.Controls.ControlDouble;
			/** Shows the effort hours required for the task. */
			msdyn_Effort: DevKit.Form.Controls.ControlDouble;
			/** Select the summary or parent task in the hierarchy that contains a child task. */
			msdyn_parenttask: DevKit.Form.Controls.ControlLookup;
			/** Select the project name. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Shows the scheduled duration of the project task, specified in minutes. */
			msdyn_scheduleddurationminutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
			/** Enter the scheduled start time of the project task. */
			msdyn_scheduledstart: DevKit.Form.Controls.ControlDate;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Select the transaction category for the task. */
			msdyn_transactioncategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the ID of the task in the work breakdown structure (WBS). */
			msdyn_WBSID: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_projecttask_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttask_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_projecttask_Information */
		Body: LuckyMokey.Formmsdyn_projecttask_Information.Body;
		/** The Header section of form msdyn_projecttask_Information */
		Header: LuckyMokey.Formmsdyn_projecttask_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttask {
		enum msdyn_AggregationDirection {
			/** 0 */
			Upstream,
			/** 1 */
			Downstream,
			/** 2 */
			Both
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