//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class UserEntityInstanceDataApi {
		/**
		* DynamicsCrm.DevKit UserEntityInstanceDataApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Common end date */
		CommonEnd_UtcDateAndTime: Date | null;
		/** Common start date */
		CommonStart_UtcDateAndTime: Date | null;
		/** Due Date */
		DueDate_UtcDateAndTime: Date | null;
		/** Flag due by */
		FlagDueBy_UtcDateAndTime: Date | null;
		/** Flag request */
		FlagRequest: string | null;
		/** Flag status. */
		FlagStatus: number | null;
		/** Object Type Code */
		ObjectTypeCode: number | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns this. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns this object. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns this object. */
		readonly OwningUser: string | null;
		/** Personal categories */
		PersonalCategories: string | null;
		/** Indicates whether a reminder is set on this object. */
		ReminderSet: boolean | null;
		/** Reminder time */
		ReminderTime_UtcDateAndTime: Date | null;
		/** Start Time */
		StartTime_UtcDateAndTime: Date | null;
		/** To Do item flags. */
		ToDoItemFlags: number | null;
		/** For internal use only. */
		ToDoOrdinalDate_UtcDateAndTime: Date | null;
		/** For internal use only. */
		ToDoSubOrdinal: string | null;
		/** For internal use only. */
		ToDoTitle: string | null;
		/** Unique identifier user entity */
		UserEntityInstanceDataId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Common end date */
			readonly CommonEnd_UtcDateAndTime: string;
			/** Common start date */
			readonly CommonStart_UtcDateAndTime: string;
			/** Due Date */
			readonly DueDate_UtcDateAndTime: string;
			/** Flag due by */
			readonly FlagDueBy_UtcDateAndTime: string;
			/** Flag request */
			readonly FlagRequest: string;
			/** Flag status. */
			readonly FlagStatus: string;
			/** Object Type Code */
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this object. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this object. */
			readonly OwningUser: string;
			/** Personal categories */
			readonly PersonalCategories: string;
			/** Indicates whether a reminder is set on this object. */
			readonly ReminderSet: string;
			/** Reminder time */
			readonly ReminderTime_UtcDateAndTime: string;
			/** Start Time */
			readonly StartTime_UtcDateAndTime: string;
			/** To Do item flags. */
			readonly ToDoItemFlags: string;
			/** For internal use only. */
			readonly ToDoOrdinalDate_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ToDoSubOrdinal: string;
			/** For internal use only. */
			readonly ToDoTitle: string;
			/** Unique identifier user entity */
			readonly UserEntityInstanceDataId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserEntityInstanceData {
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}