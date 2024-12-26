//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticleComment_Information {
		interface tab_general_Sections {
			kb_comment: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Navigation {

		}
	}
	class FormKbArticleComment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KbArticleComment_Information */
		Body: DevKit.FormKbArticleComment_Information.Body;
		/** The Navigation of form KbArticleComment_Information */
		Navigation: DevKit.FormKbArticleComment_Information.Navigation;
		/** The SidePanes of form KbArticleComment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class KbArticleCommentApi {
		/**
		* DynamicsCrm.DevKit KbArticleCommentApi
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
		/** Comment text for the knowledge base article. */
		CommentText: string;
		/** Unique identifier of the user who created the knowledge base article comment. */
		readonly CreatedBy: string;
		/** Date and time when the knowledge base article comment was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the kbarticlecomment. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the knowledge base article comment. */
		KbArticleCommentId: string;
		/** Unique identifier of the knowledge base article to which the comment applies. */
		KbArticleId: string;
		/** Unique identifier of the user who last modified the knowledge base article comment. */
		readonly ModifiedBy: string;
		/** Date and time when the knowledge base article comment was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the kbarticlecomment. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization with which the article comment is associated. */
		readonly OrganizationId: string;
		/** Title of the knowledge base article comment. */
		Title: string;
		readonly VersionNumber: number;
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