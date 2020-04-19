//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAnnotation_Information {
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
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** File name of the note. */
			FileName: DevKit.Form.Controls.ControlString;
			/** File size of the note. */
			FileSize: DevKit.Form.Controls.ControlInteger;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Text of the note. */
			NoteText: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormAnnotation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Annotation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Annotation_Information */
		Body: LuckyMokey.FormAnnotation_Information.Body;
	}
	namespace FormNote_Quick_Create_Form {
		interface tab_general_Sections {
			notes_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Text of the note. */
			NoteText: DevKit.Form.Controls.ControlString;
			/** Subject associated with the note. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormNote_Quick_Create_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Note_Quick_Create_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Note_Quick_Create_Form */
		Body: LuckyMokey.FormNote_Quick_Create_Form.Body;
	}
}
declare namespace OptionSet {
	namespace Annotation {
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
//{'JsForm':['Information','Quick Create Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}