//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSalesLiteratureItem_Information {
		interface tab_general_Sections {
			document_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			documentbody: DevKit.Form.Controls.ControlActionCards;
			/** Abstract of the document. */
			Abstract: DevKit.Form.Controls.ControlString;
			/** Author name for the document. */
			AuthorName: DevKit.Form.Controls.ControlString;
			/** Shows the encoded contents of the sales literature document attachment. */
			DocumentBody: DevKit.Form.Controls.ControlString;
			/** File name of the document. */
			FileName: DevKit.Form.Controls.ControlString;
			/** File size of the document. */
			FileSize: DevKit.Form.Controls.ControlInteger;
			/** Keywords to use for searches in documents. */
			KeyWords: DevKit.Form.Controls.ControlString;
			/** Shows the file type of the sales literature document attachment, such as text or document. */
			MimeType: DevKit.Form.Controls.ControlString;
			/** Defines the mode of the sales literature document attachment. */
			Mode: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the sales literature that is associated with the individual item. */
			SalesLiteratureId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for the document. */
			SalesLiteratureItemId: DevKit.Form.Controls.ControlString;
			/** Type the title or name that describes the document. */
			Title: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSalesLiteratureItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SalesLiteratureItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SalesLiteratureItem_Information */
		Body: LuckyMokey.FormSalesLiteratureItem_Information.Body;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}