﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inspectiondefinition_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the inspection definition */
			msdyn_state: DevKit.Controls.OptionSet;
		}
		interface tab_Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69_Sections {
			Section_Designer_7ad92bc6_0a56_490d_9d9b_84d4bd317f91: DevKit.Controls.Section;
			Section_General_0511acf3_e77d_465d_bee3_9da1d675c3f2: DevKit.Controls.Section;
		}
		interface tab_Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2_Sections {
			Section_Logic_15afbe51_4f2a_4d20_baaa_9a6bf8baf5de: DevKit.Controls.Section;
		}
		interface tab_Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3_Sections {
			Section_Preview_3d73cd56_88fb_432b_a5cf_cae62225e0df: DevKit.Controls.Section;
		}
		interface tab_Tab_Translation_Sections {
			Section_Translation: DevKit.Controls.Section;
		}
		interface tab_Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff_Sections {
			Section_Versions_f2391a5c_ab20_41ac_87a3_d748babb957f: DevKit.Controls.Section;
		}
		interface tab_Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69 extends DevKit.Controls.ITab {
			Section: tab_Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69_Sections;
		}
		interface tab_Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2 extends DevKit.Controls.ITab {
			Section: tab_Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2_Sections;
		}
		interface tab_Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3 extends DevKit.Controls.ITab {
			Section: tab_Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3_Sections;
		}
		interface tab_Tab_Translation extends DevKit.Controls.ITab {
			Section: tab_Tab_Translation_Sections;
		}
		interface tab_Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff extends DevKit.Controls.ITab {
			Section: tab_Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff_Sections;
		}
		interface Tabs {
			Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69: tab_Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69;
			Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2: tab_Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2;
			Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3: tab_Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3;
			Tab_Translation: tab_Tab_Translation;
			Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff: tab_Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the Inspection Definition */
			msdyn_description: DevKit.Controls.String;
			/** Shows the date and time when the inspection template would be effective. By default its the inspection template published date. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			msdyn_EffectiveDate: DevKit.Controls.DateTime;
			/** Depicts whether the record has required question at the time of creation of inspection template. */
			msdyn_IsRequiredToAnswer: DevKit.Controls.Boolean;
			/** Inspection definition Json */
			msdyn_JsonContent: DevKit.Controls.String;
			/** Inspection definition Json */
			msdyn_JsonContent_1: DevKit.Controls.String;
			/** Inspection definition Json */
			msdyn_JsonContent_2: DevKit.Controls.String;
			/** Inspection definition Json */
			msdyn_JsonContent_3: DevKit.Controls.String;
			/** The name of the Inspection Definition entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Inspection Template associated with InspectionDefinition. */
			msdyn_ParentInspectionId: DevKit.Controls.Lookup;
			/** Status of the inspection definition */
			msdyn_state: DevKit.Controls.OptionSet;
			/** Version of the Inspection Template */
			msdyn_Version: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition: DevKit.Controls.NavigationItem
		}
		interface quickForm_quick_view_inspectiondefinition_versions_Body {
		}
		interface quickForm_quick_view_inspectiondefinition_versions extends DevKit.Controls.IQuickView {
			Body: quickForm_quick_view_inspectiondefinition_versions_Body;
		}
		interface QuickForm {
			quick_view_inspectiondefinition_versions: quickForm_quick_view_inspectiondefinition_versions;
		}
	}
	class Formmsdyn_inspectiondefinition_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inspectiondefinition_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inspectiondefinition_Information */
		Body: DevKit.Formmsdyn_inspectiondefinition_Information.Body;
		/** The Header section of form msdyn_inspectiondefinition_Information */
		Header: DevKit.Formmsdyn_inspectiondefinition_Information.Header;
		/** The Navigation of form msdyn_inspectiondefinition_Information */
		Navigation: DevKit.Formmsdyn_inspectiondefinition_Information.Navigation;
		/** The QuickForm of form msdyn_inspectiondefinition_Information */
		QuickForm: DevKit.Formmsdyn_inspectiondefinition_Information.QuickForm;
	}
}
declare namespace OptionSet {
	namespace msdyn_inspectiondefinition {
		enum msdyn_state {
			/** 0 */
			Draft,
			/** 1 */
			Published
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}