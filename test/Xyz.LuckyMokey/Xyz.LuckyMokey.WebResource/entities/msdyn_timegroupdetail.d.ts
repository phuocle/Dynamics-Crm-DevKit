//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_timegroupdetail_Information {
		interface tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719_Sections {
			_983FEC4F_2163_4EA9_B2D8_EF05698EF6D8: DevKit.Form.Controls.ControlSection;
		}
		interface tab_NotesTab_Sections {
		}
		interface tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719_Sections;
		}
		interface tab_NotesTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_NotesTab_Sections;
		}
		interface Tabs {
			_B9C0A537_7A90_4140_9D0A_0FC166DDE719: tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719;
			NotesTab: tab_NotesTab;
		}
		interface Body {
			Tab: Tabs;
			WebResource_msdyn_starttime: DevKit.Form.Controls.ControlWebResource;
			WebResource_msdyn_endtime: DevKit.Form.Controls.ControlWebResource;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Enter the name of the "Time Group Detail" entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_StartTime: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier for Time Group associated with Time Group Detail. */
			msdyn_TimeGroupId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_timegroupdetail_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timegroupdetail_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_timegroupdetail_Information */
		Body: LuckyMokey.Formmsdyn_timegroupdetail_Information.Body;
		/** The Navigation of form msdyn_timegroupdetail_Information */
		Navigation: LuckyMokey.Formmsdyn_timegroupdetail_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_timegroupdetail {
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