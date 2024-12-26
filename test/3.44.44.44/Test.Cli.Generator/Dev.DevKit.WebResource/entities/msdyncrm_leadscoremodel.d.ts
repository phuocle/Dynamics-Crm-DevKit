//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSetup {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Lead scoring model status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_DesignTab_Sections {
			DesignTab_section_1: DevKit.Controls.Section;
		}
		interface tab_insights_Sections {
			insights_section: DevKit.Controls.Section;
		}
		interface tab_SummaryTab_Sections {
			_59A8F01B_2C1F_4431_8BB5_A83F85A19AF7: DevKit.Controls.Section;
			SummaryTab_section_2: DevKit.Controls.Section;
			SummaryTab_section_3: DevKit.Controls.Section;
		}
		interface tab_DesignTab extends DevKit.Controls.ITab {
			Section: tab_DesignTab_Sections;
		}
		interface tab_insights extends DevKit.Controls.ITab {
			Section: tab_insights_Sections;
		}
		interface tab_SummaryTab extends DevKit.Controls.ITab {
			Section: tab_SummaryTab_Sections;
		}
		interface Tabs {
			DesignTab: tab_DesignTab;
			insights: tab_insights;
			SummaryTab: tab_SummaryTab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			CustomerJourneyInsightsCtrl: DevKit.Controls.ActionCards;
			/** Indicates the person who modified this. */
			ModifiedBy: DevKit.Controls.Lookup;
			msdyncrm_description: DevKit.Controls.String;
			/** The name of the target entity */
			msdyncrm_entitytarget: DevKit.Controls.OptionSet;
			msdyncrm_modeldefinition: DevKit.Controls.ActionCards;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_sourcesystem: DevKit.Controls.ELSE3???;//msdyncrm_sourcesystem - D58C0A4B-21FE-4D4A-838C-E800CFA32E50 -- FOR DEBUG 
			msgdpr_RequiredConsent: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Lead scoring model status reason */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_leadscoremodel_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_leadscoremodel_Tasks: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_leadscoremodel_msdyncrm_leadscore_v2: DevKit.Controls.NavigationItem
		}
	}
	class FormSetup extends DevKit.IForm {
		/**
		* Setup [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Setup */
		Body: DevKit.FormSetup.Body;
		/** The Header section of form Setup */
		Header: DevKit.FormSetup.Header;
		/** The Navigation of form Setup */
		Navigation: DevKit.FormSetup.Navigation;
		/** The SidePanes of form Setup */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_leadscoremodelApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_leadscoremodelApi
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
		msdyncrm_description: string;
		/** The name of the target entity */
		msdyncrm_entitytarget: OptionSet.msdyncrm_leadscoremodel.msdyncrm_entitytarget;
		msdyncrm_insights_placeholder: string;
		/** Unique ID for entity instances */
		msdyncrm_leadscoremodelId: string;
		msdyncrm_ModelDefinition: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Source system of custom entity. */
		msdyncrm_sourcesystem: OptionSet.msdyncrm_leadscoremodel.msdyncrm_sourcesystem;
		msgdpr_RequiredConsent: OptionSet.msdyncrm_leadscoremodel.msgdpr_RequiredConsent;
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
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the lead scoring model */
		statecode: OptionSet.msdyncrm_leadscoremodel.statecode;
		/** Lead scoring model status reason */
		statuscode: OptionSet.msdyncrm_leadscoremodel.statuscode;
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
			readonly msdyncrm_description: string;
			/** The name of the target entity */
			readonly msdyncrm_entitytarget: string;
			readonly msdyncrm_insights_placeholder: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_leadscoremodelId: string;
			readonly msdyncrm_ModelDefinition: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Source system of custom entity. */
			readonly msdyncrm_sourcesystem: string;
			readonly msgdpr_RequiredConsent: string;
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
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the lead scoring model */
			readonly statecode: string;
			/** Lead scoring model status reason */
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
	namespace msdyncrm_leadscoremodel {
		enum msdyncrm_entitytarget {
			/** 1 */
			Account,
			/** 0 */
			Contact
		}
		enum msdyncrm_sourcesystem {
			/** 100000001 */
			Outbound_marketing,
			/** 100000002 */
			Real_time_Journeys
		}
		enum msgdpr_RequiredConsent {
			/** 587030001 */
			_1_Consent,
			/** 587030002 */
			_2_Transactional,
			/** 587030003 */
			_3_Subscriptions,
			/** 587030004 */
			_4_Marketing,
			/** 587030005 */
			_5_Profiling
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 192350010 */
			Error,
			/** 192350004 */
			Expired,
			/** 192350011 */
			Going_live,
			/** 192350001 */
			Live,
			/** 192350012 */
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