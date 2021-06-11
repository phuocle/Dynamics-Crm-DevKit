//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUII_nonhostedapplication_Information {
		interface tab__3F03D7E1_782C_4675_89FC_7D267AB86A51_Sections {
			_93C6EB99_73A4_4A74_AF4F_A603FC21D57A: DevKit.Controls.Section;
		}
		interface tab__8689B43C_88CD_4B09_9675_256324BBC29B_Sections {
			_AAC2AEE5_A5E4_44D1_809F_B2ED550CAA84: DevKit.Controls.Section;
		}
		interface tab__3F03D7E1_782C_4675_89FC_7D267AB86A51 extends DevKit.Controls.ITab {
			Section: tab__3F03D7E1_782C_4675_89FC_7D267AB86A51_Sections;
		}
		interface tab__8689B43C_88CD_4B09_9675_256324BBC29B extends DevKit.Controls.ITab {
			Section: tab__8689B43C_88CD_4B09_9675_256324BBC29B_Sections;
		}
		interface Tabs {
			_3F03D7E1_782C_4675_89FC_7D267AB86A51: tab__3F03D7E1_782C_4675_89FC_7D267AB86A51;
			_8689B43C_88CD_4B09_9675_256324BBC29B: tab__8689B43C_88CD_4B09_9675_256324BBC29B;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Command Line argument for the Non-Hosted application . */
			UII_CommandLine: DevKit.Controls.String;
			/** The name of the Non-Hosted Application entity. */
			UII_name: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the UII Non-Hosted Application */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class FormUII_nonhostedapplication_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form UII_nonhostedapplication_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UII_nonhostedapplication_Information */
		Body: DevKit.FormUII_nonhostedapplication_Information.Body;
		/** The Footer section of form UII_nonhostedapplication_Information */
		Footer: DevKit.FormUII_nonhostedapplication_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace UII_nonhostedapplication {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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