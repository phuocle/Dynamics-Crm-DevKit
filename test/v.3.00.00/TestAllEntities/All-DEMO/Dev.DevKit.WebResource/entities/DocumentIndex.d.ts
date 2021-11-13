//@ts-check
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
	}
	class FormDocumentIndex_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form DocumentIndex_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DocumentIndex_Information */
		Body: DevKit.FormDocumentIndex_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the indexed article. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the indexed article was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the documentindex. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Choose the parent article for the document index item. The ID links the index to article information such as the article number, title, and keywords. */
		DocumentId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the indexed article. */
		DocumentIndexId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		DocumentTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows which version of the knowledge article is the latest version. */
		IsLatestVersion: DevKit.WebApi.BooleanValue;
		/** Tells whether the parent knowledge base article is published in Microsoft Dynamics 365, so that the keywords and article content are added to the search index. */
		IsPublished: DevKit.WebApi.BooleanValue;
		/** Type the keywords for the article. The keywords are updated in the search index every time the article is published. */
		KeyWords: DevKit.WebApi.StringValue;
		/** For system use only. */
		Location: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the indexed article. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the indexed article was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the documentindex. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		Number: DevKit.WebApi.StringValue;
		/** Choose the ID of the organization that the record is associated with. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		SearchText: DevKit.WebApi.StringValue;
		/** Shows the subject record selected on the parent knowledge base article. The ID is updated in the search index every time the article is published. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Type the title of the parent knowledge base article. This is updated in the search index every time the article is published. */
		Title: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}