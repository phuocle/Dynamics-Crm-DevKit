//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinformanswer_Information {
		interface Tabs {
		}
		interface Body {
			/** Format of the answer provided */
			msdyncrm_AnswerFormat: DevKit.Controls.String;
			/** Text of submitted response */
			msdyncrm_AnswerText: DevKit.Controls.String;
			/** LinkedIn question associated with this answer */
			msdyncrm_linkedinformquestion: DevKit.Controls.Lookup;
			/** Unique identifier of the LinkedIn question */
			msdyncrm_linkedinquestionid: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_linkedinformanswer_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinformanswer_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_linkedinformanswer_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinformanswer_Information */
		Body: DevKit.Formmsdyncrm_linkedinformanswer_Information.Body;
		/** The Navigation of form msdyncrm_linkedinformanswer_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinformanswer_Information.Navigation;
		/** The SidePanes of form msdyncrm_linkedinformanswer_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinformanswerApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinformanswerApi
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
		/** Indicates the person who created this */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for anoter person */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_answer_textid: string;
		/** Format of the answer provided */
		msdyncrm_AnswerFormat: string;
		/** Text of submitted response */
		msdyncrm_AnswerText: string;
		/** Unique identifier for entity instances */
		msdyncrm_linkedinformanswerId: string;
		/** LinkedIn question associated with this answer */
		msdyncrm_linkedinformquestion: string;
		/** Indicates which LinkedIn form contains this answer */
		msdyncrm_linkedinformsubmission: string;
		/** Unique identifier of the LinkedIn question */
		msdyncrm_linkedinquestionid: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
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
		/** Status of the LinkedIn form answer */
		statecode: OptionSet.msdyncrm_linkedinformanswer.statecode;
		/** Reason for the status of the LinkedIn form answer */
		statuscode: OptionSet.msdyncrm_linkedinformanswer.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for anoter person */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_answer_textid: string;
			/** Format of the answer provided */
			readonly msdyncrm_AnswerFormat: string;
			/** Text of submitted response */
			readonly msdyncrm_AnswerText: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_linkedinformanswerId: string;
			/** LinkedIn question associated with this answer */
			readonly msdyncrm_linkedinformquestion: string;
			/** Indicates which LinkedIn form contains this answer */
			readonly msdyncrm_linkedinformsubmission: string;
			/** Unique identifier of the LinkedIn question */
			readonly msdyncrm_linkedinquestionid: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
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
			/** Status of the LinkedIn form answer */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn form answer */
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
	namespace msdyncrm_linkedinformanswer {
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