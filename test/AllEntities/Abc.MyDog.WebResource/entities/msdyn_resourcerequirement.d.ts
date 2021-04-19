//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_resourcerequirement_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_resourcerequirement_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcerequirement_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcerequirement_Information */
		Body: MyDog.Formmsdyn_resourcerequirement_Information.Body;
	}
	namespace FormInfomation {
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
			/** Select the allocation method to be used for creating requirement distribution over a time period. */
			msdyn_allocationmethod: DevKit.Controls.OptionSet;
			/** Duration of total minutes required */
			msdyn_duration: DevKit.Controls.Integer;
			msdyn_fromdate: DevKit.Controls.Date;
			/** The latitude to use for the location of a requirement. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** The longitude to use for the location of a requirement. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the percentage of the calendar capacity required. */
			msdyn_percentage: DevKit.Controls.Decimal;
			msdyn_PoolType: DevKit.Controls.MultiOptionSet;
			/** Enter the number of resources required. */
			msdyn_quantity: DevKit.Controls.Decimal;
			/** Requirement Group */
			msdyn_requirementgroupid: DevKit.Controls.Lookup;
			msdyn_resourcetype: DevKit.Controls.MultiOptionSet;
			/** Requirement Status */
			msdyn_Status: DevKit.Controls.Lookup;
			/** End date of requirement period */
			msdyn_todate: DevKit.Controls.Date;
			/** Select the type of resource requirement. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
		}
	}
	class FormInfomation extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Infomation
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Infomation */
		Body: MyDog.FormInfomation.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_resourcerequirement {
		enum msdyn_allocationmethod {
			/** 192350003 */
			Distribute_evenly,
			/** 192350005 */
			Front_load,
			/** 192350001 */
			Full_capacity,
			/** 192350000 */
			None,
			/** 192350004 */
			Percentage_capacity
		}
		enum msdyn_PoolType {
			/** 192350000 */
			Account,
			/** 192350001 */
			Contact,
			/** 192350003 */
			Equipment,
			/** 192350004 */
			Facility,
			/** 192350002 */
			User
		}
		enum msdyn_resourcetype {
			/** 5 */
			Account,
			/** 2 */
			Contact,
			/** 6 */
			Crew,
			/** 4 */
			Equipment,
			/** 7 */
			Facility,
			/** 1 */
			Generic,
			/** 8 */
			Pool,
			/** 3 */
			User
		}
		enum msdyn_type {
			/** 192350001 */
			Extend,
			/** 192350000 */
			New
		}
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
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
//{'JsForm':['Infomation','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}