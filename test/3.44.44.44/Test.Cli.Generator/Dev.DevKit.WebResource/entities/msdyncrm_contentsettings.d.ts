//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_contentsettings_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Content settings status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			msdyncrm_addressline2: DevKit.Controls.ActionCards;
			msdyncrm_addressline2_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_addressmain: DevKit.Controls.ActionCards;
			msdyncrm_addressmain_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_Default: DevKit.Controls.Boolean;
			msdyncrm_FacebookUrl: DevKit.Controls.String;
			msdyncrm_forwardtoafriend: DevKit.Controls.ActionCards;
			msdyncrm_forwardtoafriend_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_GooglePlusUrl: DevKit.Controls.String;
			msdyncrm_InstagramUrl: DevKit.Controls.String;
			msdyncrm_isbusinessunitdefault: DevKit.Controls.Boolean;
			msdyncrm_LinkedInUrl: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_subscriptioncenter: DevKit.Controls.ActionCards;
			msdyncrm_subscriptioncenter_upgrade_hotfix: DevKit.Controls.ActionCards;
			msdyncrm_TwitterUrl: DevKit.Controls.String;
			msdyncrm_YoutubeUrl: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the content settings */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_contentsettings_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_contentsettings_Tasks: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_contentsettings_msdyncrm_customerjourney_contentsettingsid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_contentsettings_msdyncrm_defaultmarketingsetting_DefaultCntntSettings: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_contentsettings_msdyncrm_defaultmarketingsetting_doubleoptincontentsettings: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_contentsettings_msdyncrm_marketingemailtestsend_testcontentsettingsid: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_contentsettings_msdyncrm_marketingform_doubleoptincontentsettings: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_contentsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_contentsettings_Information */
		Body: DevKit.Formmsdyncrm_contentsettings_Information.Body;
		/** The Header section of form msdyncrm_contentsettings_Information */
		Header: DevKit.Formmsdyncrm_contentsettings_Information.Header;
		/** The Navigation of form msdyncrm_contentsettings_Information */
		Navigation: DevKit.Formmsdyncrm_contentsettings_Information.Navigation;
		/** The SidePanes of form msdyncrm_contentsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_contentsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_contentsettingsApi
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
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_AddressLine2: string;
		msdyncrm_AddressMain: string;
		/** Unique ID for entity instances */
		msdyncrm_contentsettingsId: string;
		msdyncrm_Default: boolean;
		msdyncrm_FacebookUrl: string;
		msdyncrm_ForwardToAFriend: string;
		msdyncrm_GooglePlusUrl: string;
		msdyncrm_InstagramUrl: string;
		msdyncrm_isbusinessunitdefault: boolean;
		msdyncrm_LinkedInUrl: string;
		msdyncrm_MediumUrl: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		msdyncrm_SkypeUrl: string;
		msdyncrm_SubscriptionCenter: string;
		msdyncrm_TwitterUrl: string;
		msdyncrm_YoutubeUrl: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the team that owns this. */
		readonly OwningUser: string;
		/** Status of the content settings */
		statecode: OptionSet.msdyncrm_contentsettings.statecode;
		/** Content settings status reason */
		statuscode: OptionSet.msdyncrm_contentsettings.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_AddressLine2: string;
			readonly msdyncrm_AddressMain: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_contentsettingsId: string;
			readonly msdyncrm_Default: string;
			readonly msdyncrm_FacebookUrl: string;
			readonly msdyncrm_ForwardToAFriend: string;
			readonly msdyncrm_GooglePlusUrl: string;
			readonly msdyncrm_InstagramUrl: string;
			readonly msdyncrm_isbusinessunitdefault: string;
			readonly msdyncrm_LinkedInUrl: string;
			readonly msdyncrm_MediumUrl: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_SkypeUrl: string;
			readonly msdyncrm_SubscriptionCenter: string;
			readonly msdyncrm_TwitterUrl: string;
			readonly msdyncrm_YoutubeUrl: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the team that owns this. */
			readonly OwningUser: string;
			/** Status of the content settings */
			readonly statecode: string;
			/** Content settings status reason */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_contentsettings {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 192350005 */
			Error,
			/** 192350004 */
			Expired,
			/** 192350006 */
			Going_live,
			/** 192350001 */
			Live,
			/** 192350003 */
			Live_editable,
			/** 192350002 */
			Stopped,
			/** 192350007 */
			Stopping
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