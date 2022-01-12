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
	}
	class FormSalesLiteratureItem_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesLiteratureItem_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiteratureItem_Information */
		Body: DevKit.FormSalesLiteratureItem_Information.Body;
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
		* DynamicsCrm.DevKit form SalesLiteratureItem_Information2 Quick Create
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Abstract of the document. */
		Abstract: DevKit.WebApi.StringValue;
		/** URL of the Website on which the document is located. */
		AttachedDocumentUrl: DevKit.WebApi.StringValue;
		/** Author name for the document. */
		AuthorName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the document. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the salesliteratureitem. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the encoded contents of the sales literature document attachment. */
		DocumentBody: DevKit.WebApi.StringValue;
		/** File name of the document. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the document. */
		FileSize: DevKit.WebApi.IntegerValue;
		FileType: DevKit.WebApi.IntegerValueReadonly;
		/** Select the file type of the document. */
		FileTypeCode: DevKit.WebApi.OptionSetValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Tells whether the document can be shared with customers or is for internal use only. */
		IsCustomerViewable: DevKit.WebApi.BooleanValue;
		/** Keywords to use for searches in documents. */
		KeyWords: DevKit.WebApi.StringValue;
		/** Shows the file type of the sales literature document attachment, such as text or document. */
		MimeType: DevKit.WebApi.StringValue;
		/** Defines the mode of the sales literature document attachment. */
		Mode: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the document. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the document was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the salesliteratureitem. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the document. */
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the sales literature that is associated with the individual item. */
		SalesLiteratureId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the document. */
		SalesLiteratureItemId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Type the title or name that describes the document. */
		Title: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}