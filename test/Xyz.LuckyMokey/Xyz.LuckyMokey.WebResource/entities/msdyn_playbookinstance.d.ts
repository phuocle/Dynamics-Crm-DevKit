//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_playbookinstance_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Playbook */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Playbook result */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections {
			_547DCA32_5C99_4BF5_95D8_95AE479D4963: DevKit.Form.Controls.ControlSection;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_4: DevKit.Form.Controls.ControlSection;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_5: DevKit.Form.Controls.ControlSection;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98 extends DevKit.Form.Controls.IControlTab {
			Section: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections;
		}
		interface Tabs {
			_0A307C03_96BD_41F7_8800_EBF2860AAA98: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98;
		}
		interface Body {
			Tab: Tabs;
			PlaybookActivities: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Date and time when the playbook was started. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			msdyn_activitiesassociated: DevKit.Form.Controls.ControlInteger;
			msdyn_activitiesclosed: DevKit.Form.Controls.ControlInteger;
			/** Select the playbook category for the playbook. */
			msdyn_categoryid: DevKit.Form.Controls.ControlLookup;
			/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
			msdyn_estimatedclose: DevKit.Form.Controls.ControlDate;
			/** Type the name of the playbook. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the unique ID of the playbook template associated with the playbook. */
			msdyn_playbooktemplateid: DevKit.Form.Controls.ControlLookup;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Form.Controls.ControlBoolean;
			/** Shows the entity the playbook is launched for. */
			Regarding: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_playbookinstance_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_playbookinstance_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_playbookinstance_Information */
		Body: LuckyMokey.Formmsdyn_playbookinstance_Information.Body;
		/** The Header section of form msdyn_playbookinstance_Information */
		Header: LuckyMokey.Formmsdyn_playbookinstance_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_playbookinstance {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Completed
		}
		enum statuscode {
			/** 1 */
			In_Progress,
			/** 2 */
			Successful,
			/** 3 */
			Not_Successful,
			/** 4 */
			Partially_Successful,
			/** 5 */
			Not_Required,
			/** 6 */
			Not_Tracked
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