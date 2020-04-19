//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formuii_option_Information {
		interface tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC_Sections {
			_706FA85F_131A_40EB_814D_5FEBD225D232: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B1D11343_999F_4087_9639_B174555F8DD1_Sections {
			_B091D713_73A9_4924_A907_F758B24ED473: DevKit.Form.Controls.ControlSection;
		}
		interface tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284_Sections {
			_9E1248BB_174F_4004_AA6A_1A1CD184AC5D: DevKit.Form.Controls.ControlSection;
		}
		interface tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC extends DevKit.Form.Controls.IControlTab {
			Section: tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC_Sections;
		}
		interface tab__B1D11343_999F_4087_9639_B174555F8DD1 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B1D11343_999F_4087_9639_B174555F8DD1_Sections;
		}
		interface tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284 extends DevKit.Form.Controls.IControlTab {
			Section: tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284_Sections;
		}
		interface Tabs {
			_5AD926F2_BA35_49BB_A8E1_5F145D5E93BC: tab__5AD926F2_BA35_49BB_A8E1_5F145D5E93BC;
			_B1D11343_999F_4087_9639_B174555F8DD1: tab__B1D11343_999F_4087_9639_B174555F8DD1;
			_90B52AA5_E49E_48DF_B94F_D75C1FC1A284: tab__90B52AA5_E49E_48DF_B94F_D75C1FC1A284;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			IFRAME_PrivacyHelp: DevKit.Form.Controls.ControlIFrame;
			msdyusd_GlobalOption: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** The name of the custom entity. */
			uii_name: DevKit.Form.Controls.ControlString;
			uii_value: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the UII Option */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class Formuii_option_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form uii_option_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form uii_option_Information */
		Body: LuckyMokey.Formuii_option_Information.Body;
		/** The Footer section of form uii_option_Information */
		Footer: LuckyMokey.Formuii_option_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace uii_option {
		enum msdyusd_GlobalOption {
			/** 100000000 */
			ClientCacheVersionNumber,
			/** 100000001 */
			CRM_UI_Base_Url,
			/** 100000002 */
			HelpImproveUSD,
			/** 100000003 */
			maxNumberOfSessions,
			/** 1000000040 */
			Others,
			/** 100000004 */
			ProcessTerminationThreshold,
			/** 100000005 */
			ShowScriptErrors,
			/** 100000006 */
			IEProcessKeyboardShortcut
		}
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}