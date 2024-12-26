//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocwechatchannelconfig_Information {
		interface tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940_Sections {
			Section1_Step1: DevKit.Controls.Section;
			Section1_Step2: DevKit.Controls.Section;
			Section1_Step3: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_FileAttachment_section: DevKit.Controls.Section;
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940 extends DevKit.Controls.ITab {
			Section: tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940_Sections;
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
			_6EBF88BE_D206_45C3_94D1_C05ABA09B940: tab__6EBF88BE_D206_45C3_94D1_C05ABA09B940;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
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
			msdyn_FormsProButton: DevKit.Controls.WebResource;
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
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocwechatchannelconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocwechatchannelconfig_Information */
		Body: DevKit.Formmsdyn_ocwechatchannelconfig_Information.Body;
		/** The Process of form msdyn_ocwechatchannelconfig_Information */
		Process: DevKit.Formmsdyn_ocwechatchannelconfig_Information.Process;
		/** The Grid of form msdyn_ocwechatchannelconfig_Information */
		Grid: DevKit.Formmsdyn_ocwechatchannelconfig_Information.Grid;
		/** The SidePanes of form msdyn_ocwechatchannelconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocwechatchannelconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocwechatchannelconfigApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Application ID of WeChat Channel */
		msdyn_applicationid: string;
		/** Application Secret of WeChat Channel */
		msdyn_applicationsecret: string;
		/** Callback URL of WeChat Channel */
		msdyn_callbackurl: string;
		/** Option set to enable or disable attachments for agents */
		msdyn_enablefileattachmentsforagents: boolean;
		/** Option set to enable or disable attachments for customers */
		msdyn_enablefileattachmentsforcustomers: boolean;
		/** Message encryption key (EncodingAESKey) for WeChat */
		msdyn_encodingaeskey: string;
		/** IP Address of WeChat Channel */
		msdyn_ipaddresses: string;
		/** Work Stream of WeChat Channel */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** WeChat Channel identifies WeChat Channel */
		msdyn_ocwechatchannelconfigId: string;
		/** The language setting for the WeChat account */
		msdyn_ocwidgetlanguage: string;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: string;
		/** Enable or disable bot survey */
		msdyn_PostConversationSurveyBotSurvey: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyBotSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyBotSurveyMode: OptionSet.msdyn_ocwechatchannelconfig.msdyn_PostConversationSurveyBotSurveyMode;
		/** To enable or disable post conversation survey */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_ocwechatchannelconfig.msdyn_PostConversationSurveyMode;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurveySeparateBotSurvey: string;
		/** Original ID of WeChat Channel */
		msdyn_serviceaccount: string;
		/** Token of WeChat Channel */
		msdyn_token: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the WeChat Channel */
		statecode: OptionSet.msdyn_ocwechatchannelconfig.statecode;
		/** Reason for the status of the WeChat Channel */
		statuscode: OptionSet.msdyn_ocwechatchannelconfig.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Application ID of WeChat Channel */
			readonly msdyn_applicationid: string;
			/** Application Secret of WeChat Channel */
			readonly msdyn_applicationsecret: string;
			/** Callback URL of WeChat Channel */
			readonly msdyn_callbackurl: string;
			/** Option set to enable or disable attachments for agents */
			readonly msdyn_enablefileattachmentsforagents: string;
			/** Option set to enable or disable attachments for customers */
			readonly msdyn_enablefileattachmentsforcustomers: string;
			/** Message encryption key (EncodingAESKey) for WeChat */
			readonly msdyn_encodingaeskey: string;
			/** IP Address of WeChat Channel */
			readonly msdyn_ipaddresses: string;
			/** Work Stream of WeChat Channel */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** WeChat Channel identifies WeChat Channel */
			readonly msdyn_ocwechatchannelconfigId: string;
			/** The language setting for the WeChat account */
			readonly msdyn_ocwidgetlanguage: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_PostConversationSurvey: string;
			/** Enable or disable bot survey */
			readonly msdyn_PostConversationSurveyBotSurvey: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_PostConversationSurveyBotSurveyMessageText: string;
			/** Mode of the survey to be sent */
			readonly msdyn_PostConversationSurveyBotSurveyMode: string;
			/** To enable or disable post conversation survey */
			readonly msdyn_PostConversationSurveyEnable: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_PostConversationSurveyMessageText: string;
			/** Mode of the survey to be sent */
			readonly msdyn_PostConversationSurveyMode: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_PostConversationSurveySeparateBotSurvey: string;
			/** Original ID of WeChat Channel */
			readonly msdyn_serviceaccount: string;
			/** Token of WeChat Channel */
			readonly msdyn_token: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the WeChat Channel */
			readonly statecode: string;
			/** Reason for the status of the WeChat Channel */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ocwechatchannelconfig {
		enum msdyn_PostConversationSurveyBotSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}