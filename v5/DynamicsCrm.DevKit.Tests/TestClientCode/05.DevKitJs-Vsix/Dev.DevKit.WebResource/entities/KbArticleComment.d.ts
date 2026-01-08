//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticleComment_Information {
		interface tab_general_Sections {
			/** KB Comment */
			kb_comment: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the knowledge base article comment. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the knowledge base article comment. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the knowledge base article comment was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Title of the knowledge base article comment. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormKbArticleComment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KbArticleComment_Information */
		Body: DevKit.FormKbArticleComment_Information.Body;
	}
	export class KbArticleCommentApi {
		/**
		* DynamicsCrm.DevKit KbArticleCommentApi
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
		/** Comment text for the knowledge base article. */
		CommentText: string | null;
		/** Unique identifier of the user who created the knowledge base article comment. */
		readonly CreatedBy: string | null;
		/** Date and time when the knowledge base article comment was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the kbarticlecomment. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the knowledge base article comment. */
		KbArticleCommentId: string | null;
		/** Unique identifier of the knowledge base article to which the comment applies. */
		KbArticleId: string | null;
		/** Unique identifier of the user who last modified the knowledge base article comment. */
		readonly ModifiedBy: string | null;
		/** Date and time when the knowledge base article comment was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the kbarticlecomment. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization with which the article comment is associated. */
		readonly OrganizationId: string | null;
		/** Title of the knowledge base article comment. */
		Title: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Comment text for the knowledge base article. */
			readonly CommentText: string;
			/** Unique identifier of the user who created the knowledge base article comment. */
			readonly CreatedBy: string;
			/** Date and time when the knowledge base article comment was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the kbarticlecomment. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the knowledge base article comment. */
			readonly KbArticleCommentId: string;
			/** Unique identifier of the knowledge base article to which the comment applies. */
			readonly KbArticleId: string;
			/** Unique identifier of the user who last modified the knowledge base article comment. */
			readonly ModifiedBy: string;
			/** Date and time when the knowledge base article comment was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the kbarticlecomment. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization with which the article comment is associated. */
			readonly OrganizationId: string;
			/** Title of the knowledge base article comment. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KbArticleComment {
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