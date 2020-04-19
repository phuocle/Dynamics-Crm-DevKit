//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRole_Information {
		interface tab_general_Sections {
			role_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the role. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the role was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who last modified the role. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the role was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the role. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the parent role. */
			ParentRoleId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormRole_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Role_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Role_Information */
		Body: LuckyMokey.FormRole_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Role {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum IsInherited {
			/** 0 */
			Default_Team_privileges_only,
			/** 1 */
			Direct_User_Basic_access_level_and_Team_privileges
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