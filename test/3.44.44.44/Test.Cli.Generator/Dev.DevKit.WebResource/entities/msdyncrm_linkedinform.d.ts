//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinform_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Total number of submissions received on this form */
			msdyncrm_totalsubmissions: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the LinkedIn Form */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab__C4A74156_F3D2_49BC_B3E1_3353DEF95FD1_Sections {
			_C4A74156_F3D2_49BC_B3E1_3353DEF95FD1_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__C4A74156_F3D2_49BC_B3E1_3353DEF95FD1 extends DevKit.Controls.ITab {
			Section: tab__C4A74156_F3D2_49BC_B3E1_3353DEF95FD1_Sections;
		}
		interface Tabs {
			_C4A74156_F3D2_49BC_B3E1_3353DEF95FD1: tab__C4A74156_F3D2_49BC_B3E1_3353DEF95FD1;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the LinkedIn form */
			msdyncrm_Description: DevKit.Controls.String;
			/** Headline displayed to leads on LinkedIn */
			msdyncrm_Headline: DevKit.Controls.String;
			/** Landing page URL used on the LinkedIn form */
			msdyncrm_LandingpageURL: DevKit.Controls.String;
			/** Unique identifier of the LinkedIn form */
			msdyncrm_LinkedInID: DevKit.Controls.String;
			/** LinkedIn account record to which this form belongs to */
			msdyncrm_LinkedInParentAccount: DevKit.Controls.Lookup;
			/** Locale country information for the LinkedIn form */
			msdyncrm_LocaleCountry: DevKit.Controls.String;
			/** Locale language information for the LinkedIn form */
			msdyncrm_LocaleLanguage: DevKit.Controls.String;
			/** LinkedIn form name */
			msdyncrm_name: DevKit.Controls.String;
			/** Privacy policy URL displayed on the LinkedIn form */
			msdyncrm_PrivacyPolicyURL: DevKit.Controls.String;
			/** Thank you message to leads who submit a form on LinkedIn */
			msdyncrm_Thankyoumessage: DevKit.Controls.String;
		}
		interface Navigation {
			msdyncrm_linkedinform_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinform_Tasks: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedinform_lead_sourceform: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedinform_msdyncrm_linkedinformquestion_LinkedinForm: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_linkedinform_msdyncrm_linkedinformsubmission_LinkedInFormID: DevKit.Controls.NavigationItem
		}
		interface Grid {
			LinkedInFormQuestions: DevKit.Controls.Grid;
			LinkedinFormSubmission: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_linkedinform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinform_Information */
		Body: DevKit.Formmsdyncrm_linkedinform_Information.Body;
		/** The Header section of form msdyncrm_linkedinform_Information */
		Header: DevKit.Formmsdyncrm_linkedinform_Information.Header;
		/** The Navigation of form msdyncrm_linkedinform_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinform_Information.Navigation;
		/** The Grid of form msdyncrm_linkedinform_Information */
		Grid: DevKit.Formmsdyncrm_linkedinform_Information.Grid;
		/** The SidePanes of form msdyncrm_linkedinform_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinformApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinformApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** Description of the LinkedIn form */
		msdyncrm_Description: string;
		/** Headline displayed to leads on LinkedIn */
		msdyncrm_Headline: string;
		/** Landing page URL used on the LinkedIn form */
		msdyncrm_LandingpageURL: string;
		msdyncrm_lastsyncdate_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyncrm_linkedinformId: string;
		/** Unique identifier of the LinkedIn form */
		msdyncrm_LinkedInID: string;
		/** LinkedIn account record to which this form belongs to */
		msdyncrm_LinkedInParentAccount: string;
		/** Locale country information for the LinkedIn form */
		msdyncrm_LocaleCountry: string;
		/** Locale language information for the LinkedIn form */
		msdyncrm_LocaleLanguage: string;
		/** LinkedIn form name */
		msdyncrm_name: string;
		/** Privacy policy URL displayed on the LinkedIn form */
		msdyncrm_PrivacyPolicyURL: string;
		msdyncrm_syncstatus: OptionSet.msdyncrm_linkedinform.msdyncrm_syncstatus;
		/** Thank you message to leads who submit a form on LinkedIn */
		msdyncrm_Thankyoumessage: string;
		/** Total number of submissions received on this form */
		readonly msdyncrm_totalsubmissions: number;
		/** Last Updated time of rollup field Total submissions. */
		readonly msdyncrm_totalsubmissions_Date_UtcDateAndTime: Date;
		/** State of rollup field Total submissions. */
		readonly msdyncrm_totalsubmissions_State: number;
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
		/** Status of the LinkedIn Form */
		statecode: OptionSet.msdyncrm_linkedinform.statecode;
		/** Reason for the status of the LinkedIn Form */
		statuscode: OptionSet.msdyncrm_linkedinform.statuscode;
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
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** Description of the LinkedIn form */
			readonly msdyncrm_Description: string;
			/** Headline displayed to leads on LinkedIn */
			readonly msdyncrm_Headline: string;
			/** Landing page URL used on the LinkedIn form */
			readonly msdyncrm_LandingpageURL: string;
			readonly msdyncrm_lastsyncdate_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_linkedinformId: string;
			/** Unique identifier of the LinkedIn form */
			readonly msdyncrm_LinkedInID: string;
			/** LinkedIn account record to which this form belongs to */
			readonly msdyncrm_LinkedInParentAccount: string;
			/** Locale country information for the LinkedIn form */
			readonly msdyncrm_LocaleCountry: string;
			/** Locale language information for the LinkedIn form */
			readonly msdyncrm_LocaleLanguage: string;
			/** LinkedIn form name */
			readonly msdyncrm_name: string;
			/** Privacy policy URL displayed on the LinkedIn form */
			readonly msdyncrm_PrivacyPolicyURL: string;
			readonly msdyncrm_syncstatus: string;
			/** Thank you message to leads who submit a form on LinkedIn */
			readonly msdyncrm_Thankyoumessage: string;
			/** Total number of submissions received on this form */
			readonly msdyncrm_totalsubmissions: string;
			/** Last Updated time of rollup field Total submissions. */
			readonly msdyncrm_totalsubmissions_Date_UtcDateAndTime: string;
			/** State of rollup field Total submissions. */
			readonly msdyncrm_totalsubmissions_State: string;
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
			/** Status of the LinkedIn Form */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn Form */
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
	namespace msdyncrm_linkedinform {
		enum msdyncrm_syncstatus {
			/** 192350001 */
			Active,
			/** 192350003 */
			Forbidden,
			/** 192350002 */
			No_Form_Submissions,
			/** 192350000 */
			Pending_Synchronization
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