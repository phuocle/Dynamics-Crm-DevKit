//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinformsubmission_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the LinkedIn Form Submission */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab__8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0_Sections {
			_8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0 extends DevKit.Controls.ITab {
			Section: tab__8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0_Sections;
		}
		interface Tabs {
			_8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0: tab__8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0;
		}
		interface Body {
			Tab: Tabs;
			msdyncr2_customerjourney: DevKit.Controls.Lookup;
			/** Dynamics 365 lead associated with this submission */
			msdyncrm_Lead: DevKit.Controls.Lookup;
			/** LinkedIn account this submission came from */
			msdyncrm_LinkedInAccountID: DevKit.Controls.String;
			/** Indicates which LinkedIn campaign this submission is for */
			msdyncrm_LinkedInCampaignID: DevKit.Controls.String;
			/** Indicates which LinkedIn creative campaign this submission is for */
			msdyncrm_LinkedInCreativeID: DevKit.Controls.String;
			/** LinkedIn form this submission came from */
			msdyncrm_LinkedInFormID: DevKit.Controls.Lookup;
			/** Status of matching and lead association with Dynamics 365 */
			msdyncrm_matchingstatus: DevKit.Controls.OptionSet;
			/** Date and time submission was captured */
			msdyncrm_SubmissionDate: DevKit.Controls.DateTime;
			/** Submission type */
			msdyncrm_Type: DevKit.Controls.String;
		}
		interface Navigation {
			msdyncrm_linkedinformsubmission_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_answer: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformsubmission_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			LinkedinFormAnswers: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_linkedinformsubmission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinformsubmission_Information */
		Body: DevKit.Formmsdyncrm_linkedinformsubmission_Information.Body;
		/** The Header section of form msdyncrm_linkedinformsubmission_Information */
		Header: DevKit.Formmsdyncrm_linkedinformsubmission_Information.Header;
		/** The Navigation of form msdyncrm_linkedinformsubmission_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinformsubmission_Information.Navigation;
		/** The Grid of form msdyncrm_linkedinformsubmission_Information */
		Grid: DevKit.Formmsdyncrm_linkedinformsubmission_Information.Grid;
		/** The SidePanes of form msdyncrm_linkedinformsubmission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinformsubmissionApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinformsubmissionApi
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
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person */
		readonly ModifiedOnBehalfBy: string;
		msdyncr2_customerjourney: string;
		msdyncrm_contact: string;
		/** Dynamics 365 lead associated with this submission */
		msdyncrm_Lead: string;
		/** LinkedIn account this submission came from */
		msdyncrm_LinkedInAccountID: string;
		msdyncrm_LinkedInCampaign: string;
		/** Indicates which LinkedIn campaign this submission is for */
		msdyncrm_LinkedInCampaignID: string;
		/** Indicates which LinkedIn creative campaign this submission is for */
		msdyncrm_LinkedInCreativeID: string;
		/** LinkedIn form this submission came from */
		msdyncrm_LinkedInFormID: string;
		readonly msdyncrm_LinkedInFormName: string;
		msdyncrm_linkedinformsubmission_textid: string;
		/** Indicates the LInkedIn form submission */
		msdyncrm_linkedinformsubmissionId: string;
		msdyncrm_LinkedInUserProfileID: string;
		/** Status of matching and lead association with Dynamics 365 */
		msdyncrm_matchingstatus: OptionSet.msdyncrm_linkedinformsubmission.msdyncrm_matchingstatus;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_processingstate: OptionSet.msdyncrm_linkedinformsubmission.msdyncrm_processingstate;
		/** Date and time submission was captured */
		msdyncrm_SubmissionDate_UtcDateAndTime: Date;
		/** Submission type */
		msdyncrm_Type: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this */
		readonly OwningTeam: string;
		/** Indicates the person who owns this */
		readonly OwningUser: string;
		/** Status of the LinkedIn Form Submission */
		statecode: OptionSet.msdyncrm_linkedinformsubmission.statecode;
		/** Reason for the status of the LinkedIn Form Submission */
		statuscode: OptionSet.msdyncrm_linkedinformsubmission.statuscode;
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
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncr2_customerjourney: string;
			readonly msdyncrm_contact: string;
			/** Dynamics 365 lead associated with this submission */
			readonly msdyncrm_Lead: string;
			/** LinkedIn account this submission came from */
			readonly msdyncrm_LinkedInAccountID: string;
			readonly msdyncrm_LinkedInCampaign: string;
			/** Indicates which LinkedIn campaign this submission is for */
			readonly msdyncrm_LinkedInCampaignID: string;
			/** Indicates which LinkedIn creative campaign this submission is for */
			readonly msdyncrm_LinkedInCreativeID: string;
			/** LinkedIn form this submission came from */
			readonly msdyncrm_LinkedInFormID: string;
			readonly msdyncrm_LinkedInFormName: string;
			readonly msdyncrm_linkedinformsubmission_textid: string;
			/** Indicates the LInkedIn form submission */
			readonly msdyncrm_linkedinformsubmissionId: string;
			readonly msdyncrm_LinkedInUserProfileID: string;
			/** Status of matching and lead association with Dynamics 365 */
			readonly msdyncrm_matchingstatus: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_processingstate: string;
			/** Date and time submission was captured */
			readonly msdyncrm_SubmissionDate_UtcDateAndTime: string;
			/** Submission type */
			readonly msdyncrm_Type: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this */
			readonly OwningTeam: string;
			/** Indicates the person who owns this */
			readonly OwningUser: string;
			/** Status of the LinkedIn Form Submission */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn Form Submission */
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
	namespace msdyncrm_linkedinformsubmission {
		enum msdyncrm_matchingstatus {
			/** 192350004 */
			Lead_creation_failed,
			/** 192350006 */
			Lead_matched_but_not_updated,
			/** 192350005 */
			Lead_update_failed,
			/** 192350003 */
			Match_failed,
			/** 192350001 */
			New_lead_created,
			/** 192350000 */
			Pending_lead_matching,
			/** 192350002 */
			Updated_existing_lead
		}
		enum msdyncrm_processingstate {
			/** 192350002 */
			Processing_Failed,
			/** 192350001 */
			Processing_Succeeded,
			/** 192350000 */
			Unprocessed
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