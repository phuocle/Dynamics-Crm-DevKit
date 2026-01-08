//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PostApi {
		/**
		* DynamicsCrm.DevKit PostApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the text of a post. */
		LargeText: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string | null;
		/** Unique identifier for entity instances */
		PostId: string | null;
		/** Unique identifier of the post regarding with which the post is associated. */
		readonly PostRegardingId: string | null;
		/** Internal use only. */
		readonly PostToYammer: boolean | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the regarding object. */
		readonly RegardingObjectOwningBusinessUnit: string | null;
		/** Select whether the post was created manually or automatically. */
		Source: OptionSet.Post.Source | null;
		/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
		Text: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Select the post type. */
		Type: OptionSet.Post.Type | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Internal use only. */
		readonly YammerPostState: number | null;
		/** Internal use only. */
		readonly YammerRetryCount: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the text of a post. */
			readonly LargeText: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the solution. */
			readonly OrganizationId: string;
			/** Unique identifier for entity instances */
			readonly PostId: string;
			/** Unique identifier of the post regarding with which the post is associated. */
			readonly PostRegardingId: string;
			/** Internal use only. */
			readonly PostToYammer: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the regarding object. */
			readonly RegardingObjectOwningBusinessUnit: string;
			/** Select whether the post was created manually or automatically. */
			readonly Source: string;
			/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
			readonly Text: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Select the post type. */
			readonly Type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Internal use only. */
			readonly YammerPostState: string;
			/** Internal use only. */
			readonly YammerRetryCount: string;
		}
	}
}
declare namespace OptionSet {
	namespace Post {
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** ActionHub_Post = 3*/
			ActionHub_Post = 3,
			/** Auto_Post = 1*/
			Auto_Post = 1,
			/** Manual_Post = 2*/
			Manual_Post = 2
		}
		enum Type {
			/** Check_in = 1*/
			Check_in = 1,
			/** Idea = 2*/
			Idea = 2,
			/** News = 3*/
			News = 3,
			/** Private_Message = 4*/
			Private_Message = 4,
			/** Question = 5*/
			Question = 5,
			/** Re_post = 6*/
			Re_post = 6,
			/** Status = 7*/
			Status = 7
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