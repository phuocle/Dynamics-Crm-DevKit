//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinuserprofile_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_GeneralTab_Sections {
			GeneralTab_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Indicates whether Dynamics 365 is authorized to retrieve LinkedIn data related to this user profile. */
			msdyncrm_authorized: DevKit.Controls.OptionSet;
			msdyncrm_expiresin: DevKit.Controls.DateTime;
			msdyncrm_LastSyncDate: DevKit.Controls.DateTime;
			msdyncrm_linkedinauthorizedname: DevKit.Controls.String;
			/** Enter the user profile name */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_SyncStatus: DevKit.Controls.OptionSet;
			WebResource_Spacer: DevKit.Controls.WebResource;
			WebResource_UserProfileStatus: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyncrm_linkedinuserprofile_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinuserprofile_Tasks: DevKit.Controls.NavigationItem,
			msdyncrm_userprofile_linkedinformsubmission: DevKit.Controls.NavigationItem
		}
		interface Grid {
			LinkedInAccounts: DevKit.Controls.Grid;
			LinkedInCampaignsGrid: DevKit.Controls.Grid;
			LinkedInFormsGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_linkedinuserprofile_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinuserprofile_Information */
		Body: DevKit.Formmsdyncrm_linkedinuserprofile_Information.Body;
		/** The Header section of form msdyncrm_linkedinuserprofile_Information */
		Header: DevKit.Formmsdyncrm_linkedinuserprofile_Information.Header;
		/** The Navigation of form msdyncrm_linkedinuserprofile_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinuserprofile_Information.Navigation;
		/** The Grid of form msdyncrm_linkedinuserprofile_Information */
		Grid: DevKit.Formmsdyncrm_linkedinuserprofile_Information.Grid;
		/** The SidePanes of form msdyncrm_linkedinuserprofile_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinuserprofileApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinuserprofileApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person */
		readonly CreatedOnBehalfBy: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** Indicates whether Dynamics 365 is authorized to retrieve LinkedIn data related to this user profile. */
		msdyncrm_authorized: OptionSet.msdyncrm_linkedinuserprofile.msdyncrm_authorized;
		msdyncrm_expiresin_UtcDateAndTime: Date;
		msdyncrm_LastSyncDate_UtcDateAndTime: Date;
		msdyncrm_linkedinauthorizedname: string;
		/** Unique identifier for entity instances */
		msdyncrm_linkedinuserprofileId: string;
		/** Enter the user profile name */
		msdyncrm_name: string;
		msdyncrm_statusdetails: string;
		msdyncrm_SyncStatus: OptionSet.msdyncrm_linkedinuserprofile.msdyncrm_SyncStatus;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates which team owns this */
		readonly OwningTeam: string;
		/** Indicates the person who owns this */
		readonly OwningUser: string;
		/** Status of the LinkedIn User Profile */
		statecode: OptionSet.msdyncrm_linkedinuserprofile.statecode;
		/** Reason for the status of the LinkedIn User Profile */
		statuscode: OptionSet.msdyncrm_linkedinuserprofile.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person */
			readonly CreatedOnBehalfBy: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Indicates whether Dynamics 365 is authorized to retrieve LinkedIn data related to this user profile. */
			readonly msdyncrm_authorized: string;
			readonly msdyncrm_expiresin_UtcDateAndTime: string;
			readonly msdyncrm_LastSyncDate_UtcDateAndTime: string;
			readonly msdyncrm_linkedinauthorizedname: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_linkedinuserprofileId: string;
			/** Enter the user profile name */
			readonly msdyncrm_name: string;
			readonly msdyncrm_statusdetails: string;
			readonly msdyncrm_SyncStatus: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates which team owns this */
			readonly OwningTeam: string;
			/** Indicates the person who owns this */
			readonly OwningUser: string;
			/** Status of the LinkedIn User Profile */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn User Profile */
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
	namespace msdyncrm_linkedinuserprofile {
		enum msdyncrm_authorized {
			/** 192350001 */
			Authorized,
			/** 192350002 */
			Expired,
			/** 192350000 */
			Not_Authorized,
			/** 192350003 */
			Reauthorizing
		}
		enum msdyncrm_SyncStatus {
			/** 192350002 */
			Active,
			/** 192350003 */
			No_Accounts_Available,
			/** 192350000 */
			Not_Syncing,
			/** 192350001 */
			Syncing_Accounts
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