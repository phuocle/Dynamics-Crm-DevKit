﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_ocwhatsappchannelnumber_Information {
		interface tab__E70B3C65_8301_40E9_854E_BAFF33EEA2EA_Sections {
			Section1_PhoneNumberDetails: DevKit.Controls.Section;
			Section2_WorkDistribution: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
			GeneralSetting_tab_FileAttachment_section: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_MessageTemplates_tab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__E70B3C65_8301_40E9_854E_BAFF33EEA2EA extends DevKit.Controls.ITab {
			Section: tab__E70B3C65_8301_40E9_854E_BAFF33EEA2EA_Sections;
		}
		interface tab_GeneralSetting_tab extends DevKit.Controls.ITab {
			Section: tab_GeneralSetting_tab_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_MessageTemplates_tab extends DevKit.Controls.ITab {
			Section: tab_MessageTemplates_tab_Sections;
		}
		interface tab_Survey extends DevKit.Controls.ITab {
			Section: tab_Survey_Sections;
		}
		interface Tabs {
			_E70B3C65_8301_40E9_854E_BAFF33EEA2EA: tab__E70B3C65_8301_40E9_854E_BAFF33EEA2EA;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			MessageTemplates_tab: tab_MessageTemplates_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			WebResource_Disclaimer: DevKit.Controls.WebResource;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Enable file attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			/** Work stream of WhatsApp number */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Identity of associated WhatsApp account */
			msdyn_ocwhatsappaccountid: DevKit.Controls.Lookup;
			/** The language setting for the WhatsApp number */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Phone number for a WhatsApp account */
			msdyn_organizationphonenumber: DevKit.Controls.String;
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
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
			instance_MessageTemplate: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocwhatsappchannelnumber_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocwhatsappchannelnumber_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocwhatsappchannelnumber_Information */
		Body: MyDog.Formmsdyn_ocwhatsappchannelnumber_Information.Body;
		/** The Grid of form msdyn_ocwhatsappchannelnumber_Information */
		Grid: MyDog.Formmsdyn_ocwhatsappchannelnumber_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocwhatsappchannelnumber {
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