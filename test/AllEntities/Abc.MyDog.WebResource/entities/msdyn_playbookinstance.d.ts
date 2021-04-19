//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_playbookinstance_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Playbook */
			statecode: DevKit.Controls.OptionSet;
			/** Playbook result */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections {
			_547DCA32_5C99_4BF5_95D8_95AE479D4963: DevKit.Controls.Section;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_4: DevKit.Controls.Section;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_5: DevKit.Controls.Section;
			_0A307C03_96BD_41F7_8800_EBF2860AAA98_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__0A307C03_96BD_41F7_8800_EBF2860AAA98 extends DevKit.Controls.ITab {
			Section: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98_Sections;
		}
		interface Tabs {
			_0A307C03_96BD_41F7_8800_EBF2860AAA98: tab__0A307C03_96BD_41F7_8800_EBF2860AAA98;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Date and time when the playbook was started. */
			CreatedOn: DevKit.Controls.DateTime;
			msdyn_activitiesassociated: DevKit.Controls.Integer;
			msdyn_activitiesclosed: DevKit.Controls.Integer;
			/** Select the playbook category for the playbook. */
			msdyn_categoryid: DevKit.Controls.Lookup;
			/** Estimated close date for a playbook based on the estimated duration specified for the playbook template. */
			msdyn_estimatedclose: DevKit.Controls.Date;
			/** Type the name of the playbook. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the unique ID of the playbook template associated with the playbook. */
			msdyn_playbooktemplateid: DevKit.Controls.Lookup;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Controls.Boolean;
			/** Shows the entity the playbook is launched for. */
			Regarding: DevKit.Controls.Lookup;
		}
		interface Grid {
			PlaybookActivities: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_playbookinstance_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_playbookinstance_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_playbookinstance_Information */
		Body: MyDog.Formmsdyn_playbookinstance_Information.Body;
		/** The Header section of form msdyn_playbookinstance_Information */
		Header: MyDog.Formmsdyn_playbookinstance_Information.Header;
		/** The Grid of form msdyn_playbookinstance_Information */
		Grid: MyDog.Formmsdyn_playbookinstance_Information.Grid;
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
			/** 5 */
			Not_Required,
			/** 3 */
			Not_Successful,
			/** 6 */
			Not_Tracked,
			/** 4 */
			Partially_Successful,
			/** 2 */
			Successful
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}