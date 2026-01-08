//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class CommentApi {
		/**
		* DynamicsCrm.DevKit CommentApi
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
		/** Anchor context for the record within the maker artifact */
		Anchor: string | null;
		/** Unique identifier of the maker artifact */
		ArtifactId: string | null;
		/** Type of the maker artifact */
		ArtifactType: OptionSet.Comment.ArtifactType | null;
		/** Body content for the record */
		Body: string | null;
		/** Unique identifier for entity instances */
		CommentId: string | null;
		/** Unique identifier for the container of this record */
		Container: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Kind of record */
		Kind: OptionSet.Comment.Kind | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Required name field */
		Name: string | null;
		/** AadId of the Original Author of the Comment */
		OriginalAuthorAadId: string | null;
		/** Email of the Original Author of the Comment */
		OriginalAuthorEmail: string | null;
		/** Full Name of the Original Author of the Comment */
		OriginalAuthorFullName: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		State: OptionSet.Comment.State | null;
		/** Status of the Comment */
		statecode: OptionSet.Comment.statecode | null;
		/** Reason for the status of the Comment */
		statuscode: OptionSet.Comment.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Anchor context for the record within the maker artifact */
			readonly Anchor: string;
			/** Unique identifier of the maker artifact */
			readonly ArtifactId: string;
			/** Type of the maker artifact */
			readonly ArtifactType: string;
			/** Body content for the record */
			readonly Body: string;
			/** Unique identifier for entity instances */
			readonly CommentId: string;
			/** Unique identifier for the container of this record */
			readonly Container: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Kind of record */
			readonly Kind: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Required name field */
			readonly Name: string;
			/** AadId of the Original Author of the Comment */
			readonly OriginalAuthorAadId: string;
			/** Email of the Original Author of the Comment */
			readonly OriginalAuthorEmail: string;
			/** Full Name of the Original Author of the Comment */
			readonly OriginalAuthorFullName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			readonly State: string;
			/** Status of the Comment */
			readonly statecode: string;
			/** Reason for the status of the Comment */
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
	namespace Comment {
		enum ArtifactType {
			/** AppModule = 3*/
			AppModule = 3,
			/** Bot = 4*/
			Bot = 4,
			/** BotComponent = 2*/
			BotComponent = 2,
			/** CanvasApp = 1*/
			CanvasApp = 1,
			/** PowerPageSite = 5*/
			PowerPageSite = 5,
			/** Workflow = 0*/
			Workflow = 0
		}
		enum Kind {
			/** Container = 0*/
			Container = 0,
			/** Reply = 2*/
			Reply = 2,
			/** Thread = 1*/
			Thread = 1
		}
		enum ParentIdType {
		}
		enum State {
			/** Open = 0*/
			Open = 0,
			/** Resolved = 1*/
			Resolved = 1
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
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