//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormActivity_Form {
		interface tab_data_tab_Sections {
			data_tab_section: DevKit.Controls.Section;
		}
		interface tab_schedule_tab_Sections {
			_F2B03D9E_2315_4E00_9912_5FF604BE6778_SECTION_2: DevKit.Controls.Section;
			description_section: DevKit.Controls.Section;
			expiration_section: DevKit.Controls.Section;
			permitted_times_section: DevKit.Controls.Section;
		}
		interface tab_data_tab extends DevKit.Controls.ITab {
			Section: tab_data_tab_Sections;
		}
		interface tab_schedule_tab extends DevKit.Controls.ITab {
			Section: tab_schedule_tab_Sections;
		}
		interface Tabs {
			data_tab: tab_data_tab;
			schedule_tab: tab_schedule_tab;
		}
		interface Body {
			Tab: Tabs;
			info_datetime: DevKit.Controls.ActionCards;
			information_automatedscheduling: DevKit.Controls.ActionCards;
			information_scheduling: DevKit.Controls.ActionCards;
			insights_data: DevKit.Controls.ActionCards;
			msdyncrm_automateschedule: DevKit.Controls.ActionCards;
			msdyncrm_datetime: DevKit.Controls.DateTime;
			msdyncrm_description: DevKit.Controls.String;
			msdyncrm_expiration: DevKit.Controls.ActionCards;
			msdyncrm_expirationdate: DevKit.Controls.DateTime;
			msdyncrm_manualschedulerdisabled: DevKit.Controls.Boolean;
			msdyncrm_permitteddays: DevKit.Controls.ActionCards;
			msdyncrm_permittedtimeend: DevKit.Controls.DateTime;
			msdyncrm_permittedtimestart: DevKit.Controls.ActionCards;
		}
		interface Navigation {

		}
	}
	class FormActivity_Form extends DevKit.IForm {
		/**
		* Activity Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Activity_Form */
		Body: DevKit.FormActivity_Form.Body;
		/** The Navigation of form Activity_Form */
		Navigation: DevKit.FormActivity_Form.Navigation;
		/** The SidePanes of form Activity_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_delaydatetimeactivityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_delaydatetimeactivityApi
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
		msdyncrm_automateschedule: boolean;
		msdyncrm_datetime_TimezoneDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyncrm_delaydatetimeactivityId: string;
		msdyncrm_description: string;
		msdyncrm_expiration: boolean;
		msdyncrm_expirationdate_UtcDateAndTime: Date;
		msdyncrm_insightsdata: string;
		msdyncrm_manualschedulerdisabled: boolean;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_permitteddays: Array<OptionSet.msdyncrm_delaydatetimeactivity.msdyncrm_permitteddays>;
		msdyncrm_permittedtimeend_UtcDateAndTime: Date;
		msdyncrm_permittedtimestart_UtcDateAndTime: Date;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Delay (date and time) activity */
		statecode: OptionSet.msdyncrm_delaydatetimeactivity.statecode;
		/** Reason for the status of the Delay (date and time) activity */
		statuscode: OptionSet.msdyncrm_delaydatetimeactivity.statuscode;
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
			readonly msdyncrm_automateschedule: string;
			readonly msdyncrm_datetime_TimezoneDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_delaydatetimeactivityId: string;
			readonly msdyncrm_description: string;
			readonly msdyncrm_expiration: string;
			readonly msdyncrm_expirationdate_UtcDateAndTime: string;
			readonly msdyncrm_insightsdata: string;
			readonly msdyncrm_manualschedulerdisabled: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_permitteddays: Array<string>;
			readonly msdyncrm_permittedtimeend_UtcDateAndTime: string;
			readonly msdyncrm_permittedtimestart_UtcDateAndTime: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Delay (date and time) activity */
			readonly statecode: string;
			/** Reason for the status of the Delay (date and time) activity */
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
	namespace msdyncrm_delaydatetimeactivity {
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