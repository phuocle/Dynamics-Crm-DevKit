//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_ocwechatchannelconfig_Information {
		interface tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940_Sections {
			Section1_Step1: DevKit.Controls.Section;
			Section1_Step2: DevKit.Controls.Section;
			Section1_Step3: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
			GeneralSetting_tab_FileAttachment_section: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940 extends DevKit.Controls.ITab {
			Section: tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940_Sections;
		}
		interface tab_GeneralSetting_tab extends DevKit.Controls.ITab {
			Section: tab_GeneralSetting_tab_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_Survey extends DevKit.Controls.ITab {
			Section: tab_Survey_Sections;
		}
		interface Tabs {
			_6EBF88BE_D206_45C3_94D1_C05ABA09B940: tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Application ID of WeChat Channel */
			msdyn_applicationid: DevKit.Controls.String;
			/** Application Secret of WeChat Channel */
			msdyn_applicationsecret: DevKit.Controls.String;
			/** Callback URL of WeChat Channel */
			msdyn_callbackurl: DevKit.Controls.String;
			/** Option set to enable or disable attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Option set to enable or disable attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			/** Message encryption key (EncodingAESKey) for WeChat */
			msdyn_encodingaeskey: DevKit.Controls.String;
			/** IP Address of WeChat Channel */
			msdyn_ipaddresses: DevKit.Controls.String;
			/** Work Stream of WeChat Channel */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The language setting for the WeChat account */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Original ID of WeChat Channel */
			msdyn_serviceaccount: DevKit.Controls.String;
			/** Token of WeChat Channel */
			msdyn_token: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocwechatchannelconfig_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocwechatchannelconfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocwechatchannelconfig_Information */
		Body: MyDog.Formmsdyn_ocwechatchannelconfig_Information.Body;
		/** The Grid of form msdyn_ocwechatchannelconfig_Information */
		Grid: MyDog.Formmsdyn_ocwechatchannelconfig_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocwechatchannelconfig {
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}