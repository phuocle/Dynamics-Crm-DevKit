//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticleTemplate_Information {
		interface tab_general_Sections {
			title: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the knowledge base article template. */
			Description: DevKit.Controls.String;
			/** Language of the Article Template */
			LanguageCode: DevKit.Controls.Integer;
			/** Title of the knowledge base article template. */
			Title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormKbArticleTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KbArticleTemplate_Information */
		Body: DevKit.FormKbArticleTemplate_Information.Body;
		/** The Process of form KbArticleTemplate_Information */
		Process: DevKit.FormKbArticleTemplate_Information.Process;
		/** The SidePanes of form KbArticleTemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class KbArticleTemplateApi {
		/**
		* DynamicsCrm.DevKit KbArticleTemplateApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.KbArticleTemplate.ComponentState;
		/** Unique identifier of the user who created the knowledge base article template. */
		readonly CreatedBy: string;
		/** Date and time when the knowledge base article template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the kbarticletemplate. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the knowledge base article template. */
		Description: string;
		/** XML format of the knowledge base article template. */
		FormatXml: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information about whether the knowledge base article is active. */
		IsActive: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Unique identifier of the knowledge base article template. */
		KbArticleTemplateId: string;
		/** For internal use only. */
		readonly KbArticleTemplateIdUnique: string;
		/** Language of the Article Template */
		LanguageCode: number;
		/** Unique identifier of the user who last modified the knowledge base article template. */
		readonly ModifiedBy: string;
		/** Date and time when the knowledge base article template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the kbarticletemplate. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the template. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** XML structure of the knowledge base article. */
		StructureXml: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Title of the knowledge base article template. */
		Title: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace KbArticleTemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}