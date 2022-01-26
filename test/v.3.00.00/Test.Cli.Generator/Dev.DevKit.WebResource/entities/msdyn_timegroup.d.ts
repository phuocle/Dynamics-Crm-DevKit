//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_timegroup_Information {
		interface tab__EB571BB4_B525_4254_A87C_716F6DC00062_Sections {
			_9440EEEF_63F6_4682_8B8E_43760F0BBE48: DevKit.Controls.Section;
		}
		interface tab_Detailstab_Sections {
		}
		interface tab_interval_tab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab__EB571BB4_B525_4254_A87C_716F6DC00062 extends DevKit.Controls.ITab {
			Section: tab__EB571BB4_B525_4254_A87C_716F6DC00062_Sections;
		}
		interface tab_Detailstab extends DevKit.Controls.ITab {
			Section: tab_Detailstab_Sections;
		}
		interface tab_interval_tab extends DevKit.Controls.ITab {
			Section: tab_interval_tab_Sections;
		}
		interface Tabs {
			_EB571BB4_B525_4254_A87C_716F6DC00062: tab__EB571BB4_B525_4254_A87C_716F6DC00062;
			Detailstab: tab_Detailstab;
			interval_tab: tab_interval_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Only display the top results per time group detail, per date. */
			msdyn_DisplayTopXResultsInSATimeGroup: DevKit.Controls.Integer;
			msdyn_HideBookingTimeOnSA: DevKit.Controls.Boolean;
			/** Defines the window size of a time group */
			msdyn_interval: DevKit.Controls.Integer;
			/** Defines a start time point of a time group */
			msdyn_intervalsbegin: DevKit.Controls.DateTime;
			/** Enter the name of the "Time Group" entity. */
			msdyn_name: DevKit.Controls.String;
			/** If enabled, the interval calculation will be restarted at the beginning of each time group detail. */
			msdyn_ResetPerTimeGroupDetail: DevKit.Controls.Boolean;
			msdyn_resultsperinterval: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_msdyn_intervalbegin: DevKit.Controls.WebResource;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			detailsgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_timegroup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timegroup_Information */
		Body: DevKit.Formmsdyn_timegroup_Information.Body;
		/** The Navigation of form msdyn_timegroup_Information */
		Navigation: DevKit.Formmsdyn_timegroup_Information.Navigation;
		/** The Process of form msdyn_timegroup_Information */
		Process: DevKit.Formmsdyn_timegroup_Information.Process;
		/** The Grid of form msdyn_timegroup_Information */
		Grid: DevKit.Formmsdyn_timegroup_Information.Grid;
		/** The SidePanes of form msdyn_timegroup_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFulfillment_Preference_Quick_Create_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Defines the window size of a time group */
			msdyn_interval: DevKit.Controls.Integer;
			/** Enter the name of the "Time Group" entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormFulfillment_Preference_Quick_Create_Form extends DevKit.IForm {
		/**
		* Fulfillment Preference Quick Create Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Fulfillment_Preference_Quick_Create_Form */
		Body: DevKit.FormFulfillment_Preference_Quick_Create_Form.Body;
	}
	class msdyn_timegroupApi {
		/**
		* DynamicsCrm.DevKit msdyn_timegroupApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Only display the top results per time group detail, per date. */
		msdyn_DisplayTopXResultsInSATimeGroup: DevKit.WebApi.IntegerValue;
		msdyn_HideBookingTimeOnSA: DevKit.WebApi.BooleanValue;
		/** Defines the window size of a time group */
		msdyn_interval: DevKit.WebApi.IntegerValue;
		/** Defines a start time point of a time group */
		msdyn_intervalsbegin_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Enter the name of the "Time Group" entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** If enabled, the interval calculation will be restarted at the beginning of each time group detail. */
		msdyn_ResetPerTimeGroupDetail: DevKit.WebApi.BooleanValue;
		msdyn_resultsperinterval: DevKit.WebApi.IntegerValue;
		/** Shows the entity instances. */
		msdyn_timegroupId: DevKit.WebApi.GuidValue;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the ID of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Shows the ID of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Time Group */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Time Group */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows a comma-separated list of string values representing the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_timegroup {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}