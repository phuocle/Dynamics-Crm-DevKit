//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_linkedinleadmatchingstrategy_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the LinkedIn matching */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Apply selected matching strategy to all form submissions */
			msdyncrm_activated: DevKit.Controls.Boolean;
			/** If set to true, lead will be create always without trying to match existing lead. */
			msdyncrm_alwayscreatelead: DevKit.Controls.Boolean;
			msdyncrm_enablecontactcreation: DevKit.Controls.Boolean;
			/** Enter the linkedIn matching name */
			msdyncrm_name: DevKit.Controls.String;
		}
		interface Navigation {
			msdyncrm_linkedinleadmatchingstrategy_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_Appointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_Emails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyncrm_linkedinleadmatchingstrategy_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Fields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_linkedinleadmatchingstrategy_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_linkedinleadmatchingstrategy_Information */
		Body: DevKit.Formmsdyncrm_linkedinleadmatchingstrategy_Information.Body;
		/** The Header section of form msdyncrm_linkedinleadmatchingstrategy_Information */
		Header: DevKit.Formmsdyncrm_linkedinleadmatchingstrategy_Information.Header;
		/** The Navigation of form msdyncrm_linkedinleadmatchingstrategy_Information */
		Navigation: DevKit.Formmsdyncrm_linkedinleadmatchingstrategy_Information.Navigation;
		/** The Grid of form msdyncrm_linkedinleadmatchingstrategy_Information */
		Grid: DevKit.Formmsdyncrm_linkedinleadmatchingstrategy_Information.Grid;
		/** The SidePanes of form msdyncrm_linkedinleadmatchingstrategy_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_linkedinleadmatchingstrategyApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_linkedinleadmatchingstrategyApi
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
		/** Apply selected matching strategy to all form submissions */
		msdyncrm_activated: boolean;
		/** If set to true, lead will be create always without trying to match existing lead. */
		msdyncrm_alwayscreatelead: boolean;
		msdyncrm_enablecontactcreation: boolean;
		/** Unique identifier for entity instances */
		msdyncrm_linkedinleadmatchingstrategyId: string;
		/** Enter the linkedIn matching name */
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
		/** Status of the LinkedIn matching */
		statecode: OptionSet.msdyncrm_linkedinleadmatchingstrategy.statecode;
		/** Reason for the status of the LinkedIn matching */
		statuscode: OptionSet.msdyncrm_linkedinleadmatchingstrategy.statuscode;
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
			/** Apply selected matching strategy to all form submissions */
			readonly msdyncrm_activated: string;
			/** If set to true, lead will be create always without trying to match existing lead. */
			readonly msdyncrm_alwayscreatelead: string;
			readonly msdyncrm_enablecontactcreation: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_linkedinleadmatchingstrategyId: string;
			/** Enter the linkedIn matching name */
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
			/** Status of the LinkedIn matching */
			readonly statecode: string;
			/** Reason for the status of the LinkedIn matching */
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
	namespace msdyncrm_linkedinleadmatchingstrategy {
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