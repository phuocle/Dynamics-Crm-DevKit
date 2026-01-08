//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SharePointDataApi {
		/**
		* DynamicsCrm.DevKit SharePointDataApi
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
		/** Unique identifier of the user who created the SharePoint Data. */
		readonly CreatedBy: string | null;
		/** Date and time when the SharePoint Data was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the SharePoint Data. */
		readonly CreatedOnBehalfBy: string | null;
		/** SharePoint Data Serialized */
		Data: string | null;
		/** Is valid */
		readonly IsValid: boolean | null;
		/** Unique identifier of the user who created the SharePoint Data. */
		readonly Location: string | null;
		/** Unique identifier of the user who last modified the SharePoint Data. */
		readonly ModifiedBy: string | null;
		/** Date and time when the Sharepoint Data was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the SharePoint Data. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Next Page Token of the SharePoint document. */
		readonly NextPageToken: string | null;
		/** Unique identifier of the organization associated with the SharePoint Data. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		readonly PageNumber: number | null;
		/** Previous Page Token of the SharePoint document. */
		readonly PreviousPageToken: string | null;
		/** Regarding Object Id. */
		readonly RegardingObjectId: string | null;
		/** Unique identifier of the SharePoint data record. */
		SharePointDataId: string | null;
		/** Unique identifier of the user who created the SharePoint data. */
		readonly UserId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the SharePoint Data. */
			readonly CreatedBy: string;
			/** Date and time when the SharePoint Data was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the SharePoint Data. */
			readonly CreatedOnBehalfBy: string;
			/** SharePoint Data Serialized */
			readonly Data: string;
			/** Is valid */
			readonly IsValid: string;
			/** Unique identifier of the user who created the SharePoint Data. */
			readonly Location: string;
			/** Unique identifier of the user who last modified the SharePoint Data. */
			readonly ModifiedBy: string;
			/** Date and time when the Sharepoint Data was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the SharePoint Data. */
			readonly ModifiedOnBehalfBy: string;
			/** Next Page Token of the SharePoint document. */
			readonly NextPageToken: string;
			/** Unique identifier of the organization associated with the SharePoint Data. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly PageNumber: string;
			/** Previous Page Token of the SharePoint document. */
			readonly PreviousPageToken: string;
			/** Regarding Object Id. */
			readonly RegardingObjectId: string;
			/** Unique identifier of the SharePoint data record. */
			readonly SharePointDataId: string;
			/** Unique identifier of the user who created the SharePoint data. */
			readonly UserId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointData {
		enum RegardingObjectTypeCode {
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