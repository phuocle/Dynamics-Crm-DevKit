//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_oclinechannelconfig_Information {
		interface tab__141626E8_75AE_4DE9_BFB5_760C1CEADBAD_Sections {
			null_section_3: DevKit.Controls.Section;
			null_section_4: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_FileAttachment_section: DevKit.Controls.Section;
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
		}
		interface tab_survey_tab_1_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__141626E8_75AE_4DE9_BFB5_760C1CEADBAD extends DevKit.Controls.ITab {
			Section: tab__141626E8_75AE_4DE9_BFB5_760C1CEADBAD_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_GeneralSetting_tab extends DevKit.Controls.ITab {
			Section: tab_GeneralSetting_tab_Sections;
		}
		interface tab_survey_tab_1 extends DevKit.Controls.ITab {
			Section: tab_survey_tab_1_Sections;
		}
		interface Tabs {
			_141626E8_75AE_4DE9_BFB5_760C1CEADBAD: tab__141626E8_75AE_4DE9_BFB5_760C1CEADBAD;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			survey_tab_1: tab_survey_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Channel Access Token is of Line Channel */
			msdyn_channelaccesstoken: DevKit.Controls.String;
			/** Channel ID of Line Channel */
			msdyn_channelid: DevKit.Controls.String;
			/** Channel secret of the Line Channel */
			msdyn_channelsecret: DevKit.Controls.String;
			/** Enable file attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Work Stream */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The language setting for the LINE account */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Webhook URL of Line Channel */
			msdyn_webhookurl: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_oclinechannelconfig_msdyn_ocbotchannelregistration_msdyn_oclinechannelconfigid: DevKit.Controls.NavigationItem,
			msdyn_oclinechannelconfig_msdyn_ocprovisioningstate_oclinechannelconfigid: DevKit.Controls.NavigationItem,
			msdyn_oclinechannelconfig_msdyn_surveyconfig_msdyn_targetchannelid: DevKit.Controls.NavigationItem
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_oclinechannelconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_oclinechannelconfig_Information */
		Body: DevKit.Formmsdyn_oclinechannelconfig_Information.Body;
		/** The Navigation of form msdyn_oclinechannelconfig_Information */
		Navigation: DevKit.Formmsdyn_oclinechannelconfig_Information.Navigation;
		/** The Grid of form msdyn_oclinechannelconfig_Information */
		Grid: DevKit.Formmsdyn_oclinechannelconfig_Information.Grid;
		/** The SidePanes of form msdyn_oclinechannelconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_oclinechannelconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_oclinechannelconfigApi
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
		/** Channel Access Token is of Line Channel */
		msdyn_channelaccesstoken: string;
		/** Channel ID of Line Channel */
		msdyn_channelid: string;
		/** Channel secret of the Line Channel */
		msdyn_channelsecret: string;
		/** Enable file attachments for agents */
		msdyn_enablefileattachmentsforagents: boolean;
		/** Enable file attachments for customers */
		msdyn_enablefileattachmentsforcustomers: boolean;
		/** Work Stream */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_oclinechannelconfigId: string;
		/** The language setting for the LINE account */
		msdyn_ocwidgetlanguage: string;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: string;
		/** Enable or disable bot survey */
		msdyn_PostConversationSurveyBotSurvey: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyBotSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyBotSurveyMode: OptionSet.msdyn_oclinechannelconfig.msdyn_PostConversationSurveyBotSurveyMode;
		/** To enable or disable post conversation survey */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_oclinechannelconfig.msdyn_PostConversationSurveyMode;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurveySeparateBotSurvey: string;
		/** Webhook URL of Line Channel */
		msdyn_webhookurl: string;
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
		/** Status of the Line Channel */
		statecode: OptionSet.msdyn_oclinechannelconfig.statecode;
		/** Reason for the status of the Line Channel */
		statuscode: OptionSet.msdyn_oclinechannelconfig.statuscode;
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
			/** Channel Access Token is of Line Channel */
			readonly msdyn_channelaccesstoken: string;
			/** Channel ID of Line Channel */
			readonly msdyn_channelid: string;
			/** Channel secret of the Line Channel */
			readonly msdyn_channelsecret: string;
			/** Enable file attachments for agents */
			readonly msdyn_enablefileattachmentsforagents: string;
			/** Enable file attachments for customers */
			readonly msdyn_enablefileattachmentsforcustomers: string;
			/** Work Stream */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_oclinechannelconfigId: string;
			/** The language setting for the LINE account */
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
			/** Webhook URL of Line Channel */
			readonly msdyn_webhookurl: string;
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
			/** Status of the Line Channel */
			readonly statecode: string;
			/** Reason for the status of the Line Channel */
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
	namespace msdyn_oclinechannelconfig {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}