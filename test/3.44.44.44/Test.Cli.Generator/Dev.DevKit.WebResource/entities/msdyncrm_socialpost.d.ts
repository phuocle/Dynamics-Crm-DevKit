//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_socialpost_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_poststate: DevKit.Controls.OptionSet;
			msdyncrm_socialchannel: DevKit.Controls.OptionSet;
			/** Date on which the social post will be published */
			msdyncrm_StartDate: DevKit.Controls.DateTime;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_content_tab_Sections {
			content_tab_section_2: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_general_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
		}
		interface tab_insights_tab_Sections {
			InsightsTab_Audience: DevKit.Controls.Section;
		}
		interface tab_new_content_tab_Sections {
			new_content_section_1: DevKit.Controls.Section;
		}
		interface tab_content_tab extends DevKit.Controls.ITab {
			Section: tab_content_tab_Sections;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface tab_insights_tab extends DevKit.Controls.ITab {
			Section: tab_insights_tab_Sections;
		}
		interface tab_new_content_tab extends DevKit.Controls.ITab {
			Section: tab_new_content_tab_Sections;
		}
		interface Tabs {
			content_tab: tab_content_tab;
			general_tab: tab_general_tab;
			insights_tab: tab_insights_tab;
			new_content_tab: tab_new_content_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msdyncrm_Attachemnts: DevKit.Controls.Lookup;
			msdyncrm_attachmentname: DevKit.Controls.String;
			/** Set of properties describing how this entity will be rendered inside the CalendarControl */
			msdyncrm_CalendarDisplayOptions: DevKit.Controls.String;
			msdyncrm_linkedInvisibility: DevKit.Controls.OptionSet;
			msdyncrm_linkedInvisibility1: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name1: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name2: DevKit.Controls.String;
			/** Id of the post on the social network */
			msdyncrm_networkId: DevKit.Controls.String;
			msdyncrm_networkpages: DevKit.Controls.Lookup;
			msdyncrm_networkpages1: DevKit.Controls.Lookup;
			msdyncrm_postas: DevKit.Controls.OptionSet;
			msdyncrm_postas1: DevKit.Controls.OptionSet;
			msdyncrm_postattachment: DevKit.Controls.String;
			msdyncrm_postingfrom: DevKit.Controls.OptionSet;
			msdyncrm_PostingPeriod: DevKit.Controls.OptionSet;
			msdyncrm_postinguser: DevKit.Controls.String;
			msdyncrm_postinguserid: DevKit.Controls.String;
			msdyncrm_poststate: DevKit.Controls.OptionSet;
			msdyncrm_poststate1: DevKit.Controls.OptionSet;
			/** Text to be shown in a social post */
			msdyncrm_PostText: DevKit.Controls.String;
			/** Text to be shown in a social post */
			msdyncrm_PostText1: DevKit.Controls.String;
			/** Url of the post in social network */
			msdyncrm_postUrl: DevKit.Controls.String;
			msdyncrm_socialchannel: DevKit.Controls.OptionSet;
			msdyncrm_socialchannel1: DevKit.Controls.OptionSet;
			msdyncrm_socialchannel2: DevKit.Controls.OptionSet;
			msdyncrm_socialconfiguration: DevKit.Controls.Lookup;
			msdyncrm_socialconfiguration1: DevKit.Controls.Lookup;
			msdyncrm_socialconfiguration2: DevKit.Controls.Lookup;
			/** Unique identifier for this entity */
			msdyncrm_socialpostId: DevKit.Controls.String;
			/** Date on which the social post will be published */
			msdyncrm_StartDate: DevKit.Controls.DateTime;
			/** Date on which the social post will be published */
			msdyncrm_StartDate1: DevKit.Controls.DateTime;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			PostInsightsCtrl: DevKit.Controls.ActionCards;
			ProTipsControl: DevKit.Controls.ActionCards;
			SocialPostHostControl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyncrm_msdyncrm_socialpost_msdyncrm_socialpost_Attachemnts: DevKit.Controls.NavigationItem,
			msdyncrm_postingishts_msdyncrm_socialpost: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_socialpost_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_socialpost_Information */
		Body: DevKit.Formmsdyncrm_socialpost_Information.Body;
		/** The Header section of form msdyncrm_socialpost_Information */
		Header: DevKit.Formmsdyncrm_socialpost_Information.Header;
		/** The Navigation of form msdyncrm_socialpost_Information */
		Navigation: DevKit.Formmsdyncrm_socialpost_Information.Navigation;
		/** The SidePanes of form msdyncrm_socialpost_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSocial_Post_v2 {
		interface tab_NewEditorForm_Sections {
			section1: DevKit.Controls.Section;
		}
		interface tab_NewEditorForm extends DevKit.Controls.ITab {
			Section: tab_NewEditorForm_Sections;
		}
		interface Tabs {
			NewEditorForm: tab_NewEditorForm;
		}
		interface Body {
			Tab: Tabs;
			msdyncrm_linkedInvisibility: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_networkpages: DevKit.Controls.Lookup;
			msdyncrm_postas: DevKit.Controls.OptionSet;
			msdyncrm_postattachment: DevKit.Controls.String;
			msdyncrm_poststate: DevKit.Controls.OptionSet;
			msdyncrm_posttext: DevKit.Controls.ActionCards;
			msdyncrm_socialchannel: DevKit.Controls.OptionSet;
			msdyncrm_socialconfiguration: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_socialpost_msdyncrm_socialpost_Attachemnts: DevKit.Controls.NavigationItem,
			msdyncrm_postingishts_msdyncrm_socialpost: DevKit.Controls.NavigationItem
		}
	}
	class FormSocial_Post_v2 extends DevKit.IForm {
		/**
		* Social Post v2 [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Post_v2 */
		Body: DevKit.FormSocial_Post_v2.Body;
		/** The Navigation of form Social_Post_v2 */
		Navigation: DevKit.FormSocial_Post_v2.Navigation;
		/** The SidePanes of form Social_Post_v2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_socialpostApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_socialpostApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Media attachments to the post */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_accountlink: string;
		msdyncrm_Attachemnts: string;
		msdyncrm_attachmentname: string;
		/** Set of properties describing how this entity will be rendered inside the CalendarControl */
		msdyncrm_CalendarDisplayOptions: string;
		/** Comment count */
		msdyncrm_commentcount: number;
		msdyncrm_golivetime: string;
		/** Impression count */
		msdyncrm_impressioncount: number;
		/** Like count */
		msdyncrm_likecount: number;
		msdyncrm_linkedInvisibility: OptionSet.msdyncrm_socialpost.msdyncrm_linkedInvisibility;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Id of the post on the social network */
		msdyncrm_networkId: string;
		msdyncrm_networkpages: string;
		msdyncrm_postas: OptionSet.msdyncrm_socialpost.msdyncrm_postas;
		msdyncrm_postattachment: string;
		msdyncrm_postingfrom: OptionSet.msdyncrm_socialpost.msdyncrm_postingfrom;
		msdyncrm_PostingPeriod: OptionSet.msdyncrm_socialpost.msdyncrm_PostingPeriod;
		msdyncrm_postinguser: string;
		msdyncrm_postinguserid: string;
		msdyncrm_poststate: OptionSet.msdyncrm_socialpost.msdyncrm_poststate;
		/** Text to be shown in a social post */
		msdyncrm_PostText: string;
		/** Url of the post in social network */
		msdyncrm_postUrl: string;
		msdyncrm_sentiment: string;
		msdyncrm_sentimentscore: string;
		msdyncrm_socialchannel: OptionSet.msdyncrm_socialpost.msdyncrm_socialchannel;
		msdyncrm_socialconfiguration: string;
		/** Unique identifier for this entity */
		msdyncrm_socialpostId: string;
		/** Date on which the social post will be published */
		msdyncrm_StartDate_UtcDateAndTime: Date;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the social post */
		statecode: OptionSet.msdyncrm_socialpost.statecode;
		/** Reason for the status of the social post */
		statuscode: OptionSet.msdyncrm_socialpost.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Media attachments to the post */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_accountlink: string;
			readonly msdyncrm_Attachemnts: string;
			readonly msdyncrm_attachmentname: string;
			/** Set of properties describing how this entity will be rendered inside the CalendarControl */
			readonly msdyncrm_CalendarDisplayOptions: string;
			/** Comment count */
			readonly msdyncrm_commentcount: string;
			readonly msdyncrm_golivetime: string;
			/** Impression count */
			readonly msdyncrm_impressioncount: string;
			/** Like count */
			readonly msdyncrm_likecount: string;
			readonly msdyncrm_linkedInvisibility: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Id of the post on the social network */
			readonly msdyncrm_networkId: string;
			readonly msdyncrm_networkpages: string;
			readonly msdyncrm_postas: string;
			readonly msdyncrm_postattachment: string;
			readonly msdyncrm_postingfrom: string;
			readonly msdyncrm_PostingPeriod: string;
			readonly msdyncrm_postinguser: string;
			readonly msdyncrm_postinguserid: string;
			readonly msdyncrm_poststate: string;
			/** Text to be shown in a social post */
			readonly msdyncrm_PostText: string;
			/** Url of the post in social network */
			readonly msdyncrm_postUrl: string;
			readonly msdyncrm_sentiment: string;
			readonly msdyncrm_sentimentscore: string;
			readonly msdyncrm_socialchannel: string;
			readonly msdyncrm_socialconfiguration: string;
			/** Unique identifier for this entity */
			readonly msdyncrm_socialpostId: string;
			/** Date on which the social post will be published */
			readonly msdyncrm_StartDate_UtcDateAndTime: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the social post */
			readonly statecode: string;
			/** Reason for the status of the social post */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_socialpost {
		enum msdyncrm_linkedInvisibility {
			/** 270100000 */
			Connections,
			/** 270100001 */
			Public
		}
		enum msdyncrm_postas {
			/** 270100001 */
			Company,
			/** 270100000 */
			User
		}
		enum msdyncrm_postingfrom {
			/** 270100000 */
			User_0,
			/** 270100001 */
			User_1,
			/** 270100010 */
			User_10,
			/** 270100002 */
			User_2,
			/** 270100003 */
			User_3,
			/** 270100004 */
			User_4,
			/** 270100005 */
			User_5,
			/** 270100006 */
			User_6,
			/** 270100007 */
			User_7,
			/** 270100008 */
			User_8,
			/** 270100009 */
			User_9
		}
		enum msdyncrm_PostingPeriod {
			/** 270100003 */
			On_demand,
			/** 270100000 */
			Post_now,
			/** 270100002 */
			Schedule,
			/** 270100001 */
			Schedule_later
		}
		enum msdyncrm_poststate {
			/** 270100006 */
			Disconnected,
			/** 270100000 */
			Draft,
			/** 270100004 */
			Failed,
			/** 270100005 */
			Going_live,
			/** 270100002 */
			Live,
			/** 270100003 */
			New,
			/** 270100001 */
			Scheduled
		}
		enum msdyncrm_socialchannel {
			/** 270100001 */
			Facebook,
			/** 270100003 */
			Instagram,
			/** 270100002 */
			LinkedIn,
			/** 270100000 */
			Twitter
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Draft,
			/** 1 */
			New,
			/** 3 */
			Published
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