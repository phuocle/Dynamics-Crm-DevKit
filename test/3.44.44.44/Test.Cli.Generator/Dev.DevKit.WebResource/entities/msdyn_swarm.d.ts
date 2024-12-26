//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_swarm_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Appointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Emails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_swarm_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_swarm_Posts: DevKit.Controls.NavigationItem,
			msdyn_swarm_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_swarm_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_swarm_Information */
		Body: DevKit.Formmsdyn_swarm_Information.Body;
		/** The Navigation of form msdyn_swarm_Information */
		Navigation: DevKit.Formmsdyn_swarm_Information.Navigation;
		/** The SidePanes of form msdyn_swarm_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSwarm_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Swarm */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_Swarming_Sections {
			Related_record_section: DevKit.Controls.Section;
			swarming_section: DevKit.Controls.Section;
		}
		interface tab_Timeline_Sections {
			swarm_timeline_section: DevKit.Controls.Section;
		}
		interface tab_Swarming extends DevKit.Controls.ITab {
			Section: tab_Swarming_Sections;
		}
		interface tab_Timeline extends DevKit.Controls.ITab {
			Section: tab_Timeline_Sections;
		}
		interface Tabs {
			Swarming: tab_Swarming;
			Timeline: tab_Timeline;
		}
		interface Body {
			Tab: Tabs;
			/** Lookup to the swarm related record */
			msdyn_swarmrelatedrecordid: DevKit.Controls.Lookup;
			/** Lookup to the swarm related record */
			msdyn_swarmrelatedrecordid1: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Appointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Emails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_swarm_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_swarm_Posts: DevKit.Controls.NavigationItem,
			msdyn_swarm_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormSwarm_form extends DevKit.IForm {
		/**
		* Swarm form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Swarm_form */
		Body: DevKit.FormSwarm_form.Body;
		/** The Header section of form Swarm_form */
		Header: DevKit.FormSwarm_form.Header;
		/** The Navigation of form Swarm_form */
		Navigation: DevKit.FormSwarm_form.Navigation;
		/** The SidePanes of form Swarm_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSwarm_full_page_control {
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface Tabs {
			tab1_summary: tab_tab1_summary;
		}
		interface Body {
			Tab: Tabs;

		}
		interface Navigation {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Appointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Emails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_swarm_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_swarm_Posts: DevKit.Controls.NavigationItem,
			msdyn_swarm_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormSwarm_full_page_control extends DevKit.IForm {
		/**
		* Swarm full page control [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Swarm_full_page_control */
		Body: DevKit.FormSwarm_full_page_control.Body;
		/** The Navigation of form Swarm_full_page_control */
		Navigation: DevKit.FormSwarm_full_page_control.Navigation;
		/** The SidePanes of form Swarm_full_page_control */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTimeline_swarm_form {
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface Tabs {
			tab1_summary: tab_tab1_summary;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_swarm_msdyn_swarmskill_swarmid: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_swarm_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Appointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Emails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_swarm_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_swarm_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_swarm_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_swarm_Posts: DevKit.Controls.NavigationItem,
			msdyn_swarm_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_swarm_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormTimeline_swarm_form extends DevKit.IForm {
		/**
		* Timeline swarm form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Timeline_swarm_form */
		Body: DevKit.FormTimeline_swarm_form.Body;
		/** The Navigation of form Timeline_swarm_form */
		Navigation: DevKit.FormTimeline_swarm_form.Navigation;
		/** The SidePanes of form Timeline_swarm_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_swarmApi {
		/**
		* DynamicsCrm.DevKit msdyn_swarmApi
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
		/** Swarm description elaborating the issue */
		msdyn_description: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Steps taken to resolve the swarm */
		msdyn_resolution: string;
		/** Date and time when the skills were modified. */
		msdyn_skillsmodifiedon_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyn_swarmId: string;
		/** Lookup to the swarm related record */
		msdyn_swarmrelatedrecordid_account: string;
		/** Lookup to the swarm related record */
		msdyn_swarmrelatedrecordid_incident: string;
		/** Lookup to the swarm template record */
		msdyn_swarmtemplateid: string;
		/** Identifier of the Teams group chat that is created to work on the swarm */
		msdyn_teamsconversationid: string;
		/** Title of the swarm */
		msdyn_title: string;
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
		/** Status of the Swarm */
		statecode: OptionSet.msdyn_swarm.statecode;
		/** Reason for the status of the Swarm */
		statuscode: OptionSet.msdyn_swarm.statuscode;
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
			/** Swarm description elaborating the issue */
			readonly msdyn_description: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Steps taken to resolve the swarm */
			readonly msdyn_resolution: string;
			/** Date and time when the skills were modified. */
			readonly msdyn_skillsmodifiedon_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyn_swarmId: string;
			/** Lookup to the swarm related record */
			readonly msdyn_swarmrelatedrecordid_account: string;
			/** Lookup to the swarm related record */
			readonly msdyn_swarmrelatedrecordid_incident: string;
			/** Lookup to the swarm template record */
			readonly msdyn_swarmtemplateid: string;
			/** Identifier of the Teams group chat that is created to work on the swarm */
			readonly msdyn_teamsconversationid: string;
			/** Title of the swarm */
			readonly msdyn_title: string;
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
			/** Status of the Swarm */
			readonly statecode: string;
			/** Reason for the status of the Swarm */
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
	namespace msdyn_swarm {
		enum msdyn_swarmrelatedrecordidIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 2 */
			Cancelled,
			/** 1 */
			Resolved
		}
		enum statuscode {
			/** 192350000 */
			Active,
			/** 192350002 */
			Case_resolved,
			/** 192350004 */
			Duplicate_swarm,
			/** 192350003 */
			No_one_joined,
			/** 192350001 */
			Resolved,
			/** 192350006 */
			System_cancelled,
			/** 192350005 */
			System_resolved
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