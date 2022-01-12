//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_timegroupdetail_Information {
		interface tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719_Sections {
			_983FEC4F_2163_4EA9_B2D8_EF05698EF6D8: DevKit.Controls.Section;
		}
		interface tab_NotesTab_Sections {
		}
		interface tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719 extends DevKit.Controls.ITab {
			Section: tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719_Sections;
		}
		interface tab_NotesTab extends DevKit.Controls.ITab {
			Section: tab_NotesTab_Sections;
		}
		interface Tabs {
			_B9C0A537_7A90_4140_9D0A_0FC166DDE719: tab__B9C0A537_7A90_4140_9D0A_0FC166DDE719;
			NotesTab: tab_NotesTab;
		}
		interface Body {
			Tab: Tabs;
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the name of the "Time Group Detail" entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Unique identifier for Time Group associated with Time Group Detail. */
			msdyn_TimeGroupId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_msdyn_endtime: DevKit.Controls.WebResource;
			WebResource_msdyn_starttime: DevKit.Controls.WebResource;
		}
		interface Navigation {
			nav_msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_timegroupdetail_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timegroupdetail_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timegroupdetail_Information */
		Body: DevKit.Formmsdyn_timegroupdetail_Information.Body;
		/** The Navigation of form msdyn_timegroupdetail_Information */
		Navigation: DevKit.Formmsdyn_timegroupdetail_Information.Navigation;
		/** The SidePanes of form msdyn_timegroupdetail_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_timegroupdetailApi {
		/**
		* DynamicsCrm.DevKit msdyn_timegroupdetailApi
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
		msdyn_EndTime_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Enter the name of the "Time Group Detail" entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_StartTime_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Shows the entity instances. */
		msdyn_timegroupdetailId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Time Group associated with Time Group Detail. */
		msdyn_TimeGroupId: DevKit.WebApi.LookupValue;
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
		/** Status of the Time Group Detail */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Time Group Detail */
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
	namespace msdyn_timegroupdetail {
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