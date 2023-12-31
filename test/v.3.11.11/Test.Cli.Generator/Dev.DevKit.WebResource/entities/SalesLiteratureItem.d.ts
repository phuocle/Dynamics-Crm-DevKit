//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSalesLiteratureItem_Information {
		interface tab_general_Sections {
			document_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Abstract of the document. */
			Abstract: DevKit.Controls.String;
			/** Author name for the document. */
			AuthorName: DevKit.Controls.String;
			documentbody: DevKit.Controls.ActionCards;
			/** Shows the encoded contents of the sales literature document attachment. */
			DocumentBody: DevKit.Controls.String;
			/** File name of the document. */
			FileName: DevKit.Controls.String;
			/** File size of the document. */
			FileSize: DevKit.Controls.Integer;
			/** Keywords to use for searches in documents. */
			KeyWords: DevKit.Controls.String;
			/** Shows the file type of the sales literature document attachment, such as text or document. */
			MimeType: DevKit.Controls.String;
			/** Defines the mode of the sales literature document attachment. */
			Mode: DevKit.Controls.String;
			/** Unique identifier of the sales literature that is associated with the individual item. */
			SalesLiteratureId: DevKit.Controls.Lookup;
			/** Unique identifier for the document. */
			SalesLiteratureItemId: DevKit.Controls.String;
			/** Type the title or name that describes the document. */
			Title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSalesLiteratureItem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiteratureItem_Information */
		Body: DevKit.FormSalesLiteratureItem_Information.Body;
		/** The Process of form SalesLiteratureItem_Information */
		Process: DevKit.FormSalesLiteratureItem_Information.Process;
		/** The SidePanes of form SalesLiteratureItem_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSalesLiteratureItem_Information2 {
		interface tab_general_Sections {
			document_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Abstract of the document. */
			Abstract: DevKit.Controls.String;
			documentbody: DevKit.Controls.ActionCards;
			/** Unique identifier of the sales literature that is associated with the individual item. */
			SalesLiteratureId: DevKit.Controls.Lookup;
			/** Type the title or name that describes the document. */
			Title: DevKit.Controls.String;
		}
	}
	class FormSalesLiteratureItem_Information2 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiteratureItem_Information2 */
		Body: DevKit.FormSalesLiteratureItem_Information2.Body;
	}
	class SalesLiteratureItemApi {
		/**
		* DynamicsCrm.DevKit SalesLiteratureItemApi
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
		/** Abstract of the document. */
		Abstract: string;
		/** URL of the Website on which the document is located. */
		AttachedDocumentUrl: string;
		/** Author name for the document. */
		AuthorName: string;
		/** Unique identifier of the user who created the document. */
		readonly CreatedBy: string;
		/** Date and time when the document was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the salesliteratureitem. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the encoded contents of the sales literature document attachment. */
		DocumentBody: string;
		/** File name of the document. */
		FileName: string;
		/** File size of the document. */
		FileSize: number;
		readonly FileType: number;
		/** Select the file type of the document. */
		FileTypeCode: OptionSet.SalesLiteratureItem.FileTypeCode;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Tells whether the document can be shared with customers or is for internal use only. */
		IsCustomerViewable: boolean;
		/** Keywords to use for searches in documents. */
		KeyWords: string;
		/** Shows the file type of the sales literature document attachment, such as text or document. */
		MimeType: string;
		/** Defines the mode of the sales literature document attachment. */
		Mode: string;
		/** Unique identifier of the user who last modified the document. */
		readonly ModifiedBy: string;
		/** Date and time when the document was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the salesliteratureitem. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the document. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the sales literature that is associated with the individual item. */
		SalesLiteratureId: string;
		/** Unique identifier for the document. */
		SalesLiteratureItemId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type the title or name that describes the document. */
		Title: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Abstract of the document. */
			readonly Abstract: string;
			/** URL of the Website on which the document is located. */
			readonly AttachedDocumentUrl: string;
			/** Author name for the document. */
			readonly AuthorName: string;
			/** Unique identifier of the user who created the document. */
			readonly CreatedBy: string;
			/** Date and time when the document was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the salesliteratureitem. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the encoded contents of the sales literature document attachment. */
			readonly DocumentBody: string;
			/** File name of the document. */
			readonly FileName: string;
			/** File size of the document. */
			readonly FileSize: string;
			readonly FileType: string;
			/** Select the file type of the document. */
			readonly FileTypeCode: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Tells whether the document can be shared with customers or is for internal use only. */
			readonly IsCustomerViewable: string;
			/** Keywords to use for searches in documents. */
			readonly KeyWords: string;
			/** Shows the file type of the sales literature document attachment, such as text or document. */
			readonly MimeType: string;
			/** Defines the mode of the sales literature document attachment. */
			readonly Mode: string;
			/** Unique identifier of the user who last modified the document. */
			readonly ModifiedBy: string;
			/** Date and time when the document was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the salesliteratureitem. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the document. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the sales literature that is associated with the individual item. */
			readonly SalesLiteratureId: string;
			/** Unique identifier for the document. */
			readonly SalesLiteratureItemId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type the title or name that describes the document. */
			readonly Title: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SalesLiteratureItem {
		enum FileTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}