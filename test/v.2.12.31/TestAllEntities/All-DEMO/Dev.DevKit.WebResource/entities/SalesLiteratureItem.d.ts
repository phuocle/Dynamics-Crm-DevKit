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
		* DynamicsCrm.DevKit form SalesLiteratureItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiteratureItem_Information */
		Body: DevKit.FormSalesLiteratureItem_Information.Body;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}