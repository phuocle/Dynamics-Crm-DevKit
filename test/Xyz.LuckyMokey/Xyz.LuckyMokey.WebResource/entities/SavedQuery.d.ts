//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSavedQuery_Information {
		interface tab_general_Sections {
			account_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			Description: DevKit.Form.Controls.ControlString;
			/** Tells whether the component can be customized. */
			IsCustomizable: DevKit.Form.Controls.ControlString;
			/** Tells whether the view is the default view for the specified record type (entity). */
			IsDefault: DevKit.Form.Controls.ControlBoolean;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			IsQuickFindQuery: DevKit.Form.Controls.ControlBoolean;
			/** Tells whether the view was created by a user. */
			IsUserDefined: DevKit.Form.Controls.ControlBoolean;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSavedQuery_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SavedQuery_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SavedQuery_Information */
		Body: LuckyMokey.FormSavedQuery_Information.Body;
	}
}
declare namespace OptionSet {
	namespace SavedQuery {
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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