//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_timeoffrequest_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for User associated with Time Off Request. */
			msdyn_Approvedby: DevKit.Controls.Lookup;
			/** Enter the end time of the time off request. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource associated with Time Off Request */
			msdyn_Resource: DevKit.Controls.Lookup;
			/** Enter the start time of the time off request */
			msdyn_StartTime: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Time Off Request */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_timeoffrequest_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeoffrequest_Information */
		Body: DevKit.Formmsdyn_timeoffrequest_Information.Body;
		/** The Footer section of form msdyn_timeoffrequest_Information */
		Footer: DevKit.Formmsdyn_timeoffrequest_Information.Footer;
		/** The Navigation of form msdyn_timeoffrequest_Information */
		Navigation: DevKit.Formmsdyn_timeoffrequest_Information.Navigation;
		/** The Process of form msdyn_timeoffrequest_Information */
		Process: DevKit.Formmsdyn_timeoffrequest_Information.Process;
		/** The SidePanes of form msdyn_timeoffrequest_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTime_Off_Request_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_2: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier for User associated with Time Off Request. */
			msdyn_Approvedby: DevKit.Controls.Lookup;
			/** Enter the end time of the time off request. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource associated with Time Off Request */
			msdyn_Resource: DevKit.Controls.Lookup;
			/** Enter the start time of the time off request */
			msdyn_StartTime: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTime_Off_Request_Mobile extends DevKit.IForm {
		/**
		* Time Off Request - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Time_Off_Request_Mobile */
		Body: DevKit.FormTime_Off_Request_Mobile.Body;
		/** The Navigation of form Time_Off_Request_Mobile */
		Navigation: DevKit.FormTime_Off_Request_Mobile.Navigation;
		/** The Process of form Time_Off_Request_Mobile */
		Process: DevKit.FormTime_Off_Request_Mobile.Process;
		/** The SidePanes of form Time_Off_Request_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_timeoffrequestApi {
		/**
		* DynamicsCrm.DevKit msdyn_timeoffrequestApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for User associated with Time Off Request. */
		msdyn_Approvedby: DevKit.WebApi.LookupValue;
		msdyn_Duration: DevKit.WebApi.IntegerValue;
		/** Enter the end time of the time off request. */
		msdyn_EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		msdyn_internalflags: DevKit.WebApi.StringValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Resource associated with Time Off Request */
		msdyn_Resource: DevKit.WebApi.LookupValue;
		/** Enter the start time of the time off request */
		msdyn_StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the entity instances. */
		msdyn_timeoffrequestId: DevKit.WebApi.GuidValue;
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
		/** Status of the Time Off Request */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Time Off Request */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_timeoffrequest {
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