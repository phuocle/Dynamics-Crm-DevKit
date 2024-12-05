//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CommentApi {
		/**
		* DynamicsCrm.DevKit CommentApi
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
		/** Anchor context for the record within the maker artifact */
		Anchor: string;
		/** Unique identifier of the maker artifact */
		ArtifactId: string;
		/** Type of the maker artifact */
		ArtifactType: OptionSet.Comment.ArtifactType;
		/** Body content for the record */
		Body: string;
		/** Unique identifier for entity instances */
		CommentId: string;
		/** Unique identifier for the container of this record */
		Container: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Kind of record */
		Kind: OptionSet.Comment.Kind;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Required name field */
		Name: string;
		/** AadId of the Original Author of the Comment */
		OriginalAuthorAadId: string;
		/** Email of the Original Author of the Comment */
		OriginalAuthorEmail: string;
		/** Full Name of the Original Author of the Comment */
		OriginalAuthorFullName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier for the parent of this record */
		AppModule: string;
		/** Unique identifier for the parent of this record */
		Bot: string;
		/** Unique identifier for the parent of this record */
		BotComponent: string;
		/** Unique identifier for the parent of this record */
		CanvasApp: string;
		/** Unique identifier for the parent of this record */
		Parent: string;
		/** Unique identifier for the parent of this record */
		PowerPageSite: string;
		/** Unique identifier for the parent of this record */
		Workflow: string;
		State: OptionSet.Comment.State;
		/** Status of the Comment */
		statecode: OptionSet.Comment.statecode;
		/** Reason for the status of the Comment */
		statuscode: OptionSet.Comment.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Unique identifier for the parent of this record */
			readonly AppModule: string;
			/** Unique identifier for the parent of this record */
			readonly Bot: string;
			/** Unique identifier for the parent of this record */
			readonly BotComponent: string;
			/** Unique identifier for the parent of this record */
			readonly CanvasApp: string;
			/** Unique identifier for the parent of this record */
			readonly Parent: string;
			/** Unique identifier for the parent of this record */
			readonly PowerPageSite: string;
			/** Unique identifier for the parent of this record */
			readonly Workflow: string;
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
			/** 3 */
			AppModule,
			/** 4 */
			Bot,
			/** 2 */
			BotComponent,
			/** 1 */
			CanvasApp,
			/** 5 */
			PowerPageSite,
			/** 0 */
			Workflow
		}
		enum Kind {
			/** 0 */
			Container,
			/** 2 */
			Reply,
			/** 1 */
			Thread
		}
		enum ParentIdType {
		}
		enum State {
			/** 0 */
			Open,
			/** 1 */
			Resolved
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