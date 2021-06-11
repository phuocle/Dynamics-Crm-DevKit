//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocfbpage_Information {
		interface tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658_Sections {
			_6F4897EF_9856_4D54_A0AE_46EFCDCDB658_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			_A4E06C8C_0983_456C_B7FB_058AB37389B7: DevKit.Controls.Section;
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
			GeneralSetting_tab_HumanTag_section: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658 extends DevKit.Controls.ITab {
			Section: tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_GeneralSetting_tab extends DevKit.Controls.ITab {
			Section: tab_GeneralSetting_tab_Sections;
		}
		interface tab_Survey extends DevKit.Controls.ITab {
			Section: tab_Survey_Sections;
		}
		interface Tabs {
			_6F4897EF_9856_4D54_A0AE_46EFCDCDB658: tab__6F4897EF_9856_4D54_A0AE_46EFCDCDB658;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			/** Enable file attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			/** Turn on your Facebook human agent message tag */
			msdyn_enablehumanagenttag: DevKit.Controls.Boolean;
			/** Access token for the Facebook page */
			msdyn_fbpageaccesstoken: DevKit.Controls.String;
			/** Page id of the Facebook page */
			msdyn_fbpageid: DevKit.Controls.String;
			/** The name of the Facebook page */
			msdyn_fbpagename: DevKit.Controls.String;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Unique identifier for Work Stream associated with Facebook page */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** Related Facebook application */
			msdyn_ocfbapplicationid: DevKit.Controls.Lookup;
			/** The language setting for the Facebook page */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_FBHumanAgentTagDisclaimer: DevKit.Controls.WebResource;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
		}
		interface Grid {
			ProvisioningHistory: DevKit.Controls.Grid;
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocfbpage_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocfbpage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocfbpage_Information */
		Body: DevKit.Formmsdyn_ocfbpage_Information.Body;
		/** The Grid of form msdyn_ocfbpage_Information */
		Grid: DevKit.Formmsdyn_ocfbpage_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocfbpage {
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