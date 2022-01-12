//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_operatinghour_Information {
		interface tab_WorkingHoursTab_Sections {
			WorkingHours_CalendarSection: DevKit.Controls.Section;
		}
		interface tab_WorkingHoursTab extends DevKit.Controls.ITab {
			Section: tab_WorkingHoursTab_Sections;
		}
		interface Tabs {
			WorkingHoursTab: tab_WorkingHoursTab;
		}
		interface Body {
			Tab: Tabs;
			/** Storing Calendar Id Guid of Calendar EntityType as String. */
			msdyn_calendarid: DevKit.Controls.String;
			/** Provide description about presence */
			msdyn_Description: DevKit.Controls.String;
			/** Provide description about presence */
			msdyn_Description_1: DevKit.Controls.String;
			/** (Deprecated) Enable work hours for all days of the week */
			msdyn_EnableAllDays: DevKit.Controls.Boolean;
			/** (Deprecated) Enter time in 24-hour format (HH:mm). */
			msdyn_Endtimestring: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name_1: DevKit.Controls.String;
			/** (Deprecated) Work days */
			msdyn_oc_daysofweek: DevKit.Controls.MultiOptionSet;
			/** (Deprecated) Enter time in 24-hour format (HH:mm). */
			msdyn_starttimestring: DevKit.Controls.String;
			/** (Deprecated) Time zone code */
			msdyn_Timezone: DevKit.Controls.Integer;
			/** (Deprecated) Total work hours */
			msdyn_Totalworkhours: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId_1: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_operatinghour_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_operatinghour_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_operatinghour_Information */
		Body: DevKit.Formmsdyn_operatinghour_Information.Body;
		/** The SidePanes of form msdyn_operatinghour_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOperating_hours {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_1_section_2: DevKit.Controls.Section;
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
			/** Provide description about presence */
			msdyn_Description: DevKit.Controls.String;
			/** Provide description about presence */
			msdyn_Description_1: DevKit.Controls.String;
			/** (Deprecated) Enable work hours for all days of the week */
			msdyn_EnableAllDays: DevKit.Controls.Boolean;
			/** (Deprecated) Enter time in 24-hour format (HH:mm). */
			msdyn_Endtimestring: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name_1: DevKit.Controls.String;
			/** (Deprecated) Work days */
			msdyn_oc_daysofweek: DevKit.Controls.MultiOptionSet;
			/** (Deprecated) Enter time in 24-hour format (HH:mm). */
			msdyn_starttimestring: DevKit.Controls.String;
			/** (Deprecated) Time zone code */
			msdyn_Timezone: DevKit.Controls.Integer;
			/** (Deprecated) Total work hours */
			msdyn_Totalworkhours: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId_1: DevKit.Controls.Lookup;
		}
	}
	class FormOperating_hours extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Operating_hours Quick Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Operating_hours */
		Body: DevKit.FormOperating_hours.Body;
	}
	class msdyn_operatinghourApi {
		/**
		* DynamicsCrm.DevKit msdyn_operatinghourApi
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
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Storing Calendar Id Guid of Calendar EntityType as String. */
		msdyn_calendarid: DevKit.WebApi.StringValue;
		/** Provide description about presence */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** (Deprecated) Enable work hours for all days of the week */
		msdyn_EnableAllDays: DevKit.WebApi.BooleanValue;
		/** (Deprecated) Enter time in 24-hour format (HH:mm). */
		msdyn_Endtimestring: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** (Deprecated) Work days */
		msdyn_oc_daysofweek: DevKit.WebApi.MultiOptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_operatinghourId: DevKit.WebApi.GuidValue;
		/** (Deprecated) Enter time in 24-hour format (HH:mm). */
		msdyn_starttimestring: DevKit.WebApi.StringValue;
		/** (Deprecated) Time zone code */
		msdyn_Timezone: DevKit.WebApi.IntegerValue;
		/** (Deprecated) Total work hours */
		msdyn_Totalworkhours: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
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
		/** Status of the Operating hour */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Operating hour */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_operatinghour {
		enum msdyn_oc_daysofweek {
			/** 192350005 */
			Fri,
			/** 192350001 */
			Mon,
			/** 192350006 */
			Sat,
			/** 192350000 */
			Sun,
			/** 192350004 */
			Thu,
			/** 192350002 */
			Tue,
			/** 192350003 */
			Wed
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}