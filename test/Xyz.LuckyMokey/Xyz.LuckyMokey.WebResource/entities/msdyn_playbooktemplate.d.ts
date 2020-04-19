//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_playbooktemplate_Information {
		interface Header {
			/** Publisher Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Playbook Template */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections {
			_30B01E30_AE8E_4D6D_ACA8_95CFBB42C003: DevKit.Form.Controls.ControlSection;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_4: DevKit.Form.Controls.ControlSection;
			_3A0EE21B_6FBD_455F_913E_A42FE8978461_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Monitoring_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__3A0EE21B_6FBD_455F_913E_A42FE8978461 extends DevKit.Form.Controls.IControlTab {
			Section: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461_Sections;
		}
		interface tab_Monitoring extends DevKit.Form.Controls.IControlTab {
			Section: tab_Monitoring_Sections;
		}
		interface Tabs {
			_3A0EE21B_6FBD_455F_913E_A42FE8978461: tab__3A0EE21B_6FBD_455F_913E_A42FE8978461;
			Monitoring: tab_Monitoring;
		}
		interface Body {
			Tab: Tabs;
			PlaybookActivities: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			AssociatedPlaybooks: DevKit.Form.Controls.ControlGrid;
			/** Shows the unique ID of the playbook category associated with the playbook template. */
			msdyn_categoryid: DevKit.Form.Controls.ControlLookup;
			/** Type additional information to describe the playbook template. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the estimated duration in days to indicate the time it may take to complete the playbook template once launched. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the playbook template. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Internal Use Only */
			msdyn_relatedentitylist: DevKit.Form.Controls.ControlString;
			/** Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to. */
			msdyn_trackprogress: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class Formmsdyn_playbooktemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_playbooktemplate_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_playbooktemplate_Information */
		Body: LuckyMokey.Formmsdyn_playbooktemplate_Information.Body;
		/** The Header section of form msdyn_playbooktemplate_Information */
		Header: LuckyMokey.Formmsdyn_playbooktemplate_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_playbooktemplate {
		enum statecode {
			/** 0 */
			Draft,
			/** 1 */
			Published
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 2 */
			Published
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