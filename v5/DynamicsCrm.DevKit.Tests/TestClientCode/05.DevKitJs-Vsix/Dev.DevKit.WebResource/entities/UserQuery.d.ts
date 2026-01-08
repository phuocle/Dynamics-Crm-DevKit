//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class UserQueryApi {
		/**
		* DynamicsCrm.DevKit UserQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
		AdvancedGroupBy: string | null;
		/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
		ColumnSetXml: string | null;
		/** Type information about how the items in the user view are formatted. */
		ConditionalFormatting: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
		Description: string | null;
		/** Tells whether the view can retrieve data from all cluster partitions. */
		EnableCrossPartition: boolean | null;
		/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
		FetchXml: string | null;
		/** Layout data in JSON format. */
		LayoutJson: string | null;
		/** For internal use only. */
		LayoutXml: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the saved view. */
		Name: string | null;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns this saved view. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns this saved view. */
		readonly OwningUser: string | null;
		/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
		QueryType: number | null;
		/** Shows whether the saved view is active or inactive. */
		StateCode: OptionSet.UserQuery.StateCode | null;
		/** Select the item's status. */
		StatusCode: OptionSet.UserQuery.StatusCode | null;
		/** Unique identifier of the saved view. */
		UserQueryId: string | null;
		/** Version number of the saved view. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
			readonly AdvancedGroupBy: string;
			/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
			readonly ColumnSetXml: string;
			/** Type information about how the items in the user view are formatted. */
			readonly ConditionalFormatting: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
			readonly Description: string;
			/** Tells whether the view can retrieve data from all cluster partitions. */
			readonly EnableCrossPartition: string;
			/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
			readonly FetchXml: string;
			/** Layout data in JSON format. */
			readonly LayoutJson: string;
			/** For internal use only. */
			readonly LayoutXml: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the saved view. */
			readonly Name: string;
			/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
			readonly OfflineSqlQuery: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this saved view. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this saved view. */
			readonly OwningUser: string;
			/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
			readonly QueryType: string;
			/** Shows whether the saved view is active or inactive. */
			readonly StateCode: string;
			/** Select the item's status. */
			readonly StatusCode: string;
			/** Unique identifier of the saved view. */
			readonly UserQueryId: string;
			/** Version number of the saved view. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserQuery {
		enum ReturnedTypeCode {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** All = 3*/
			All = 3,
			/** Inactive = 2*/
			Inactive = 2
		}
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