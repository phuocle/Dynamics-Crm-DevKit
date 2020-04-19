//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormKbArticle_Information {
		interface tab_general_Sections {
			article_information: DevKit.Form.Controls.ControlSection;
			Article_Keywords: DevKit.Form.Controls.ControlSection;
			kb_article_description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections {
			_493D7206_6935_E73D_75CC_44DC53D021E8: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface tab__B641B7D4_753C_C99A_5978_977E6912E856 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B641B7D4_753C_C99A_5978_977E6912E856_Sections;
		}
		interface Tabs {
			general: tab_general;
			notes: tab_notes;
			_B641B7D4_753C_C99A_5978_977E6912E856: tab__B641B7D4_753C_C99A_5978_977E6912E856;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ArticleComments: DevKit.Form.Controls.ControlGrid;
			/** Shows the article content and formatting, stored as XML. */
			ArticleXml: DevKit.Form.Controls.ControlString;
			/** Keywords to be used for searches in knowledge base articles. */
			KeyWords: DevKit.Form.Controls.ControlString;
			/** Select which language the article must be available in. This list is based on the list of language packs that are installed in your Microsoft Dynamics 365 environment. */
			LanguageCode: DevKit.Form.Controls.ControlInteger;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a subject or descriptive name for the article to assist with article searches. */
			Title: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the knowledge base article is in draft, unapproved, or published status. Published articles are read-only and can't be edited unless they are unpublished. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKbArticle_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KbArticle_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KbArticle_Information */
		Body: LuckyMokey.FormKbArticle_Information.Body;
		/** The Footer section of form KbArticle_Information */
		Footer: LuckyMokey.FormKbArticle_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace KbArticle {
		enum StateCode {
			/** 1 */
			Draft,
			/** 2 */
			Unapproved,
			/** 3 */
			Published
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Unapproved,
			/** 3 */
			Published
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