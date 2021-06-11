//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_smsnumber_Information {
		interface tab__47832BCE_E6F3_451A_890E_A808029434D3_Sections {
			_986BC67E_459F_44BB_9487_23C5724DF2EE: DevKit.Controls.Section;
			GeneralSetting_tab_WorkDistribution_section: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			tab_2_section_1_2: DevKit.Controls.Section;
		}
		interface tab__47832BCE_E6F3_451A_890E_A808029434D3 extends DevKit.Controls.ITab {
			Section: tab__47832BCE_E6F3_451A_890E_A808029434D3_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_Survey extends DevKit.Controls.ITab {
			Section: tab_Survey_Sections;
		}
		interface Tabs {
			_47832BCE_E6F3_451A_890E_A808029434D3: tab__47832BCE_E6F3_451A_890E_A808029434D3;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			/** SMS number description */
			msdyn_Description: DevKit.Controls.String;
			/** Enable file attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			msdyn_fileAttachmentsDisclaimer: DevKit.Controls.ActionCards;
			/** Readable field to display SMS phone number (Deprecated) */
			msdyn_FormattedPhoneNumber: DevKit.Controls.String;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Unique identifier for Work Stream associated with SMS Number. (Deprecated) */
			msdyn_LiveWorkStreamId: DevKit.Controls.Lookup;
			/** The SMS number of the SMS entity. (Deprecated) */
			msdyn_number: DevKit.Controls.String;
			/** The language setting for the SMS number (Deprecated) */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Used to denote operating hours for the sms numbers record */
			msdyn_operatinghourid: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** SMS Provider for number */
			msdyn_Provider: DevKit.Controls.OptionSet;
			/** The SMS number type (Deprecated) */
			msdyn_Type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_smsnumber_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_smsnumber_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_smsnumber_Information */
		Body: DevKit.Formmsdyn_smsnumber_Information.Body;
		/** The Grid of form msdyn_smsnumber_Information */
		Grid: DevKit.Formmsdyn_smsnumber_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_smsnumber {
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum msdyn_Provider {
			/** 192350000 */
			TeleSign_App
		}
		enum msdyn_Type {
			/** 192350000 */
			Long_code,
			/** 192350001 */
			Short_code,
			/** 192350002 */
			Toll_free
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