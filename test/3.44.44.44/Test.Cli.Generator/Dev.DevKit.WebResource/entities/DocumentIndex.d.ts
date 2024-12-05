﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDocumentIndex_Information {
		interface tab_general_Sections {
			document_index: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** For internal use only. */
			Number: DevKit.Controls.String;
			/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormDocumentIndex_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DocumentIndex_Information */
		Body: DevKit.FormDocumentIndex_Information.Body;
		/** The Navigation of form DocumentIndex_Information */
		Navigation: DevKit.FormDocumentIndex_Information.Navigation;
		/** The SidePanes of form DocumentIndex_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DocumentIndexApi {
		/**
		* DynamicsCrm.DevKit DocumentIndexApi
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
		/** Unique identifier of the user who created the indexed article. */
		readonly CreatedBy: string;
		/** Date and time when the indexed article was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the documentindex. */
		readonly CreatedOnBehalfBy: string;
		/** Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords. */
		DocumentId: string;
		/** Unique identifier of the indexed article. */
		DocumentIndexId: string;
		/** For internal use only. */
		DocumentTypeCode: OptionSet.DocumentIndex.DocumentTypeCode;
		/** Shows which version of the knowledge article is the latest version. */
		IsLatestVersion: boolean;
		/** Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index. */
		IsPublished: boolean;
		/** Type the keywords for the article. The keywords are updated in the search index every time the article is published. */
		KeyWords: string;
		/** For system use only. */
		Location: string;
		/** Unique identifier of the user who last modified the indexed article. */
		readonly ModifiedBy: string;
		/** Date and time when the indexed article was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the documentindex. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		Number: string;
		/** Choose the ID of the organization that the record is associated with. */
		readonly OrganizationId: string;
		/** For internal use only. */
		SearchText: string;
		/** Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published. */
		SubjectId: string;
		/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
		Title: string;
		readonly VersionNumber: number;
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
			/** 1 */
			Default_Value
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