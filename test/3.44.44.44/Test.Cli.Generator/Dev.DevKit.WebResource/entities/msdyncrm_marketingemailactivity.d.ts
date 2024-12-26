//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingemailactivity_Information {
		interface tab_data_tab_Sections {
			data_tab_section: DevKit.Controls.Section;
		}
		interface tab_main_tab_Sections {
			abtesting_section: DevKit.Controls.Section;
			dependencies_section: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			emaildetails_section: DevKit.Controls.Section;
			expiration_section: DevKit.Controls.Section;
			main_tab_section: DevKit.Controls.Section;
			permitted_times_section: DevKit.Controls.Section;
		}
		interface tab_data_tab extends DevKit.Controls.ITab {
			Section: tab_data_tab_Sections;
		}
		interface tab_main_tab extends DevKit.Controls.ITab {
			Section: tab_main_tab_Sections;
		}
		interface Tabs {
			data_tab: tab_data_tab;
			main_tab: tab_main_tab;
		}
		interface Body {
			Tab: Tabs;
			/** ID of the Marketing Email */
			msdyncrm_emailid: DevKit.Controls.Lookup;
			information_automatedscheduling: DevKit.Controls.ActionCards;
			information_scheduling: DevKit.Controls.ActionCards;
			insights_data: DevKit.Controls.ActionCards;
			msdyncrm_abtestdistributionversiona: DevKit.Controls.ActionCards;
			msdyncrm_abtestdistributionversionb: DevKit.Controls.Integer;
			msdyncrm_abtestdurationunit: DevKit.Controls.OptionSet;
			msdyncrm_abtestdurationvalue: DevKit.Controls.Integer;
			msdyncrm_abtestid: DevKit.Controls.ActionCards;
			msdyncrm_abtestinconclusiveresult: DevKit.Controls.OptionSet;
			msdyncrm_abtestingenabled: DevKit.Controls.ActionCards;
			msdyncrm_abtestwinningmetric: DevKit.Controls.OptionSet;
			msdyncrm_automateschedule: DevKit.Controls.ActionCards;
			msdyncrm_dependencies: DevKit.Controls.ActionCards;
			msdyncrm_description: DevKit.Controls.String;
			/** ID of the Marketing Email */
			msdyncrm_emailid: DevKit.Controls.Lookup;
			msdyncrm_expiration: DevKit.Controls.ActionCards;
			msdyncrm_expirationdate: DevKit.Controls.ActionCards;
			msdyncrm_permitteddays: DevKit.Controls.ActionCards;
			msdyncrm_permittedtimeend: DevKit.Controls.DateTime;
			msdyncrm_permittedtimestart: DevKit.Controls.ActionCards;
			/** ID of the Marketing Email */
			msdyncrm_emailid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_marketingemailactivity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingemailactivity_Information */
		Body: DevKit.Formmsdyncrm_marketingemailactivity_Information.Body;
		/** The Navigation of form msdyncrm_marketingemailactivity_Information */
		Navigation: DevKit.Formmsdyncrm_marketingemailactivity_Information.Navigation;
		/** The SidePanes of form msdyncrm_marketingemailactivity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingemailactivityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingemailactivityApi
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
		/** Unique ID of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique ID of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique ID of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique ID of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_abtestdistributionversiona: number;
		msdyncrm_abtestdistributionversionb: number;
		msdyncrm_abtestdurationunit: OptionSet.msdyncrm_marketingemailactivity.msdyncrm_abtestdurationunit;
		msdyncrm_abtestdurationvalue: number;
		msdyncrm_abtestid: string;
		msdyncrm_abtestinconclusiveresult: OptionSet.msdyncrm_marketingemailactivity.msdyncrm_abtestinconclusiveresult;
		msdyncrm_abtestingenabled: boolean;
		msdyncrm_abtestwinningmetric: OptionSet.msdyncrm_marketingemailactivity.msdyncrm_abtestwinningmetric;
		msdyncrm_automateschedule: boolean;
		/** Dependencies */
		msdyncrm_dependencies: string;
		msdyncrm_description: string;
		/** ID of the Marketing Email */
		msdyncrm_emailid: string;
		msdyncrm_expiration: boolean;
		msdyncrm_expirationdate_UtcDateAndTime: Date;
		msdyncrm_insightsdata: string;
		/** ID of the Marketing Email Activity */
		msdyncrm_marketingemailactivityId: string;
		/** The name of the email activity. */
		msdyncrm_name: string;
		msdyncrm_permitteddays: Array<OptionSet.msdyncrm_marketingemailactivity.msdyncrm_permitteddays>;
		msdyncrm_permittedtimeend_UtcDateAndTime: Date;
		msdyncrm_permittedtimestart_UtcDateAndTime: Date;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique ID of the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique ID of the team that owns the record */
		readonly OwningTeam: string;
		/** Unique ID of the team that owns the record */
		readonly OwningUser: string;
		/** Status */
		statecode: OptionSet.msdyncrm_marketingemailactivity.statecode;
		/** Reason for the status */
		statuscode: OptionSet.msdyncrm_marketingemailactivity.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique ID of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique ID of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique ID of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique ID of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_abtestdistributionversiona: string;
			readonly msdyncrm_abtestdistributionversionb: string;
			readonly msdyncrm_abtestdurationunit: string;
			readonly msdyncrm_abtestdurationvalue: string;
			readonly msdyncrm_abtestid: string;
			readonly msdyncrm_abtestinconclusiveresult: string;
			readonly msdyncrm_abtestingenabled: string;
			readonly msdyncrm_abtestwinningmetric: string;
			readonly msdyncrm_automateschedule: string;
			/** Dependencies */
			readonly msdyncrm_dependencies: string;
			readonly msdyncrm_description: string;
			/** ID of the Marketing Email */
			readonly msdyncrm_emailid: string;
			readonly msdyncrm_expiration: string;
			readonly msdyncrm_expirationdate_UtcDateAndTime: string;
			readonly msdyncrm_insightsdata: string;
			/** ID of the Marketing Email Activity */
			readonly msdyncrm_marketingemailactivityId: string;
			/** The name of the email activity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_permitteddays: Array<string>;
			readonly msdyncrm_permittedtimeend_UtcDateAndTime: string;
			readonly msdyncrm_permittedtimestart_UtcDateAndTime: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique ID of the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique ID of the team that owns the record */
			readonly OwningTeam: string;
			/** Unique ID of the team that owns the record */
			readonly OwningUser: string;
			/** Status */
			readonly statecode: string;
			/** Reason for the status */
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
	namespace msdyncrm_marketingemailactivity {
		enum msdyncrm_abtestdurationunit {
			/** 192350001 */
			Days,
			/** 192350000 */
			Hours,
			/** 192350002 */
			Weeks
		}
		enum msdyncrm_abtestinconclusiveresult {
			/** 192350000 */
			Version_A,
			/** 192350002 */
			Version_A_and_Version_B_5050,
			/** 192350001 */
			Version_B
		}
		enum msdyncrm_abtestwinningmetric {
			/** 192350001 */
			Click_through_rate,
			/** 192350000 */
			Open_rate
		}
		enum msdyncrm_permitteddays {
			/** 192350004 */
			Friday,
			/** 192350000 */
			Monday,
			/** 192350005 */
			Saturday,
			/** 192350006 */
			Sunday,
			/** 192350003 */
			Thursday,
			/** 192350001 */
			Tuesday,
			/** 192350002 */
			Wednesday
		}
		enum statecode {
			/** 0 */
			Active
		}
		enum statuscode {
			/** 1 */
			Active
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