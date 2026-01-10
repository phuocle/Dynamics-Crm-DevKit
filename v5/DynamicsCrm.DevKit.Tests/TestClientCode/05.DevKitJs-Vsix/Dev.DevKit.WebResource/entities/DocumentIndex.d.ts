//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDocumentIndex_Information {
		interface tab_general_Sections {
			/** Document Index */
			document_index: DevKit.Controls.Section;
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
			/** For internal use only. */
			Number: DevKit.Controls.String;
			/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormDocumentIndex_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form DocumentIndex_Information */
		Body: DevKit.FormDocumentIndex_Information.Body;
	}
	export class DocumentIndexApi {
		/**
		* DynamicsCrm.DevKit DocumentIndexApi
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
		/** Unique identifier of the user who created the indexed article. */
		readonly CreatedBy: string | null;
		/** Date and time when the indexed article was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the documentindex. */
		readonly CreatedOnBehalfBy: string | null;
		/** Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords. */
		DocumentId: string | null;
		/** Unique identifier of the indexed article. */
		DocumentIndexId: string | null;
		/** For internal use only. */
		DocumentTypeCode: OptionSet.DocumentIndex.DocumentTypeCode | null;
		/** Shows which version of the knowledge article is the latest version. */
		IsLatestVersion: boolean | null;
		/** Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index. */
		IsPublished: boolean | null;
		/** Type the keywords for the article. The keywords are updated in the search index every time the article is published. */
		KeyWords: string | null;
		/** For system use only. */
		Location: string | null;
		/** Unique identifier of the user who last modified the indexed article. */
		readonly ModifiedBy: string | null;
		/** Date and time when the indexed article was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the documentindex. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		Number: string | null;
		/** Choose the ID of the organization that the record is associated with. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		SearchText: string | null;
		/** Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published. */
		SubjectId: string | null;
		/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
		Title: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the indexed article. */
			readonly CreatedBy: string;
			/** Date and time when the indexed article was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the documentindex. */
			readonly CreatedOnBehalfBy: string;
			/** Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords. */
			readonly DocumentId: string;
			/** Unique identifier of the indexed article. */
			readonly DocumentIndexId: string;
			/** For internal use only. */
			readonly DocumentTypeCode: string;
			/** Shows which version of the knowledge article is the latest version. */
			readonly IsLatestVersion: string;
			/** Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index. */
			readonly IsPublished: string;
			/** Type the keywords for the article. The keywords are updated in the search index every time the article is published. */
			readonly KeyWords: string;
			/** For system use only. */
			readonly Location: string;
			/** Unique identifier of the user who last modified the indexed article. */
			readonly ModifiedBy: string;
			/** Date and time when the indexed article was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the documentindex. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly Number: string;
			/** Choose the ID of the organization that the record is associated with. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly SearchText: string;
			/** Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published. */
			readonly SubjectId: string;
			/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DocumentIndex {
		enum DocumentTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
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