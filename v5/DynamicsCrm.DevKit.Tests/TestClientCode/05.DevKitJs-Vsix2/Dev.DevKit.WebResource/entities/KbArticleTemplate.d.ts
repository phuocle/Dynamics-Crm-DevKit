//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKbArticleTemplate_Information {
		interface tab_general_Sections {
			/** Title */
			title: DevKit.Controls.Section;
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
			/** Description of the knowledge base article template. */
			Description: DevKit.Controls.String;
			/** Language of the Article Template */
			LanguageCode: DevKit.Controls.Integer;
			/** Title of the knowledge base article template. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormKbArticleTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form KbArticleTemplate_Information */
		Body: DevKit.FormKbArticleTemplate_Information.Body;
	}
	export class KbArticleTemplateApi {
		/**
		* DynamicsCrm.DevKit KbArticleTemplateApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.KbArticleTemplate.ComponentState | null;
		/** Unique identifier of the user who created the knowledge base article template. */
		readonly CreatedBy: string | null;
		/** Date and time when the knowledge base article template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the kbarticletemplate. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the knowledge base article template. */
		Description: string | null;
		/** XML format of the knowledge base article template. */
		FormatXml: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information about whether the knowledge base article is active. */
		IsActive: boolean | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		readonly IsManaged: boolean | null;
		/** Unique identifier of the knowledge base article template. */
		KbArticleTemplateId: string | null;
		/** For internal use only. */
		readonly KbArticleTemplateIdUnique: string | null;
		/** Language of the Article Template */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the knowledge base article template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the knowledge base article template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the kbarticletemplate. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the template. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** XML structure of the knowledge base article. */
		StructureXml: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Title of the knowledge base article template. */
		Title: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the knowledge base article template. */
			readonly CreatedBy: string;
			/** Date and time when the knowledge base article template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the kbarticletemplate. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the knowledge base article template. */
			readonly Description: string;
			/** XML format of the knowledge base article template. */
			readonly FormatXml: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information about whether the knowledge base article is active. */
			readonly IsActive: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Unique identifier of the knowledge base article template. */
			readonly KbArticleTemplateId: string;
			/** For internal use only. */
			readonly KbArticleTemplateIdUnique: string;
			/** Language of the Article Template */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the knowledge base article template. */
			readonly ModifiedBy: string;
			/** Date and time when the knowledge base article template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the kbarticletemplate. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the template. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** XML structure of the knowledge base article. */
			readonly StructureXml: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Title of the knowledge base article template. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KbArticleTemplate {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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