//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEquipment_Information {
		interface tab_general_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_workhours_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_workhours extends DevKit.Form.Controls.IControlTab {
			Section: tab_workhours_Sections;
		}
		interface Tabs {
			general: tab_general;
			workhours: tab_workhours;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the business unit that the Equipment belongs to. */
			BusinessUnitId: DevKit.Form.Controls.ControlLookup;
			/** Fiscal calendar associated with the facility/equipment. */
			CalendarId: DevKit.Form.Controls.ControlLookup;
			/** Description of the facility/equipment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Email address of person to contact about the use of the facility/equipment. */
			EMailAddress: DevKit.Form.Controls.ControlString;
			/** Unique identifier for OrganizationalUnit associated with Equipment */
			msdyn_OrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Name of the facility/equipment. */
			Name: DevKit.Form.Controls.ControlString;
			/** Site where the facility/equipment is located. */
			SiteId: DevKit.Form.Controls.ControlLookup;
			/** Local time zone where the facility/equipment is located. */
			TimeZoneCode: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormEquipment_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Equipment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Equipment_Information */
		Body: LuckyMokey.FormEquipment_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Equipment {
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