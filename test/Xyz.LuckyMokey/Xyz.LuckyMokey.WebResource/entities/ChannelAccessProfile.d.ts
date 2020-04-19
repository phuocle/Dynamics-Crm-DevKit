//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormChannelAccessProfile_Information {
		interface Header {
			/** Select the the channel access profiles status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_EntityPermissions_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ChannelAccess_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_KnowledgeSettings_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Note_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_EntityPermissions extends DevKit.Form.Controls.IControlTab {
			Section: tab_EntityPermissions_Sections;
		}
		interface tab_ChannelAccess extends DevKit.Form.Controls.IControlTab {
			Section: tab_ChannelAccess_Sections;
		}
		interface tab_KnowledgeSettings extends DevKit.Form.Controls.IControlTab {
			Section: tab_KnowledgeSettings_Sections;
		}
		interface tab_Note extends DevKit.Form.Controls.IControlTab {
			Section: tab_Note_Sections;
		}
		interface Tabs {
			EntityPermissions: tab_EntityPermissions;
			ChannelAccess: tab_ChannelAccess;
			KnowledgeSettings: tab_KnowledgeSettings;
			Note: tab_Note;
		}
		interface Body {
			Tab: Tabs;
			Role_Control: DevKit.Form.Controls.ControlIFrame;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Select whether access to the email channel is allowed. */
			EmailAccess: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to the Facebook channel is allowed. */
			FacebookAccess: DevKit.Form.Controls.ControlBoolean;
			/** Type a descriptive name for the channel access profile. */
			Name: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select whether access to the phone channel is allowed. */
			PhoneAccess: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to rate a knowledge article is allowed. */
			RateKnowledgeArticles: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to submit feedback on knowledge articles is allowed. */
			SubmitFeedback: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to the Twitter channel is allowed. */
			TwitterAccess: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to view a knowledge article rating is allowed. */
			ViewArticleRating: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to view knowledge articles is allowed. */
			ViewKnowledgeArticles: DevKit.Form.Controls.ControlBoolean;
			/** Select whether access to the web channel is allowed. */
			WebAccess: DevKit.Form.Controls.ControlBoolean;
		}
	}
	class FormChannelAccessProfile_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ChannelAccessProfile_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ChannelAccessProfile_Information */
		Body: LuckyMokey.FormChannelAccessProfile_Information.Body;
		/** The Header section of form ChannelAccessProfile_Information */
		Header: LuckyMokey.FormChannelAccessProfile_Information.Header;
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfile {
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