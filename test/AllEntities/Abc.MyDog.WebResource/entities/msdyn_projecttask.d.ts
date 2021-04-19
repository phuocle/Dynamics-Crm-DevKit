//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_projecttask_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the project name. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Project Task */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections {
			_4FDEB155_C726_4210_A41F_97CE03BD0A9D: DevKit.Controls.Section;
			_7A08287E_9B25_4EE0_A2DD_288055BD63A7_SECTION_4: DevKit.Controls.Section;
			notes_section: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7 extends DevKit.Controls.ITab {
			Section: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_7A08287E_9B25_4EE0_A2DD_288055BD63A7: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Enter a description of the project task. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the duration in days for the task. */
			msdyn_duration: DevKit.Controls.Double;
			/** Shows the effort hours required for the task. */
			msdyn_Effort: DevKit.Controls.Double;
			/** Select the organizational unit of the resource who should perform the work. */
			msdyn_OrganizationalUnitPricingDimension: DevKit.Controls.Lookup;
			/** Select the summary or parent task in the hierarchy that contains a child task. */
			msdyn_parenttask: DevKit.Controls.Lookup;
			/** Select the project name. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the resource role for the task. */
			msdyn_ResourceCategoryPricingDimension: DevKit.Controls.Lookup;
			/** Shows the scheduled duration of the project task, specified in minutes. */
			msdyn_scheduleddurationminutes: DevKit.Controls.Integer;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
			/** Enter the scheduled start time of the project task. */
			msdyn_scheduledstart: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Controls.String;
			/** Select the transaction category for the task. */
			msdyn_transactioncategory: DevKit.Controls.Lookup;
			/** Shows the ID of the task in the work breakdown structure (WBS). */
			msdyn_WBSID: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_projecttask_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttask_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projecttask_Information */
		Body: MyDog.Formmsdyn_projecttask_Information.Body;
		/** The Header section of form msdyn_projecttask_Information */
		Header: MyDog.Formmsdyn_projecttask_Information.Header;
	}
	namespace Formmsdyn_projecttask_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the effort hours required for the task. */
			msdyn_Effort: DevKit.Controls.Double;
			/** Select the organizational unit of the resource who should perform the work. */
			msdyn_OrganizationalUnitPricingDimension: DevKit.Controls.Lookup;
			/** Select the project name. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the resource role for the task. */
			msdyn_ResourceCategoryPricingDimension: DevKit.Controls.Lookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
			/** Enter the scheduled start time of the project task. */
			msdyn_scheduledstart: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Controls.String;
		}
	}
	class Formmsdyn_projecttask_New_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttask_New_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form msdyn_projecttask_New_Form */
		Body: MyDog.Formmsdyn_projecttask_New_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttask {
		enum msdyn_AggregationDirection {
			/** 2 */
			Both,
			/** 1 */
			Downstream,
			/** 0 */
			Upstream
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
//{'JsForm':['Information','msdyn_projecttask New_Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}