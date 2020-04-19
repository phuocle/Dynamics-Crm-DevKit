//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSocial_Activity {
		interface Header {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** For internal use only. */
			PostedOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Form.Controls.ControlLookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Form.Controls.ControlString;
			/** Shows the URL of the post. */
			PostURL: DevKit.Form.Controls.ControlString;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Activity extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Activity */
		Body: LuckyMokey.FormSocial_Activity.Body;
		/** The Header section of form Social_Activity */
		Header: LuckyMokey.FormSocial_Activity.Header;
	}
	namespace FormSocial_Activity_for_Interactive_experience {
		interface Header {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Shows whether the social activity completed. This field is read-only. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** For internal use only. */
			PostedOn: DevKit.Form.Controls.ControlDateTime;
			/** For internal use only. */
			PostedOn_1: DevKit.Form.Controls.ControlDateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Form.Controls.ControlLookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Form.Controls.ControlString;
			/** Shows the URL of the post. */
			PostURL: DevKit.Form.Controls.ControlString;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Activity_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Activity_for_Interactive_experience */
		Body: LuckyMokey.FormSocial_Activity_for_Interactive_experience.Body;
		/** The Header section of form Social_Activity_for_Interactive_experience */
		Header: LuckyMokey.FormSocial_Activity_for_Interactive_experience.Header;
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum PostMessageType {
			/** 0 */
			Public_Message,
			/** 1 */
			Private_Message
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Completed,
			/** 2 */
			Failed,
			/** 3 */
			Processing,
			/** 4 */
			Open,
			/** 5 */
			Canceled
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
//{'JsForm':['Social Activity','Social Activity for Interactive experience'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}