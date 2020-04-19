//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSocial_Profile {
		interface Header {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Form.Controls.ControlBoolean;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			related_sp: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Form.Controls.ControlString;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Profile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Profile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Profile */
		Body: LuckyMokey.FormSocial_Profile.Body;
		/** The Header section of form Social_Profile */
		Header: LuckyMokey.FormSocial_Profile.Header;
	}
	namespace FormSocial_Profile_for_Interactive_experience {
		interface Header {
			/** Identifies where the social profile originated from, such as Twitter, or Facebook. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the score that determines the online social influence of the social profile. */
			InfluenceScore: DevKit.Form.Controls.ControlDouble;
			/** Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			tab_2_section_3: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Identifies if the social profile has been blocked. */
			Blocked: DevKit.Form.Controls.ControlBoolean;
			customer_qfc: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			CustomerId: DevKit.Form.Controls.ControlLookup;
			related_sp: DevKit.Form.Controls.ControlQuickView;
			/** Shows the customer that this social profile belongs to. */
			ProfileLink: DevKit.Form.Controls.ControlString;
			/** Shows the name of the social profile on the corresponding social channel. */
			ProfileName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Profile_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Profile_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Profile_for_Interactive_experience */
		Body: LuckyMokey.FormSocial_Profile_for_Interactive_experience.Body;
		/** The Header section of form Social_Profile_for_Interactive_experience */
		Header: LuckyMokey.FormSocial_Profile_for_Interactive_experience.Header;
	}
}
declare namespace OptionSet {
	namespace SocialProfile {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
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
//{'JsForm':['Social Profile','Social Profile for Interactive experience'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}