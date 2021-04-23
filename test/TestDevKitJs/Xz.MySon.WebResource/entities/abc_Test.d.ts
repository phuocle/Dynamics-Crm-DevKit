//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MySon {
	namespace FormTest {
		interface Header extends DevKit.Controls.IHeader {
			abc_All: DevKit.Controls.String;
		}
		interface tab_Tab1_Sections {
			Tab1Section1: DevKit.Controls.Section;
			Tab1Section2: DevKit.Controls.Section;
		}
		interface tab_Tab2_Sections {
			Tab2Section1: DevKit.Controls.Section;
			Tab2Section2: DevKit.Controls.Section;
		}
		interface tab_Tab1 extends DevKit.Controls.ITab {
			Section: tab_Tab1_Sections;
		}
		interface tab_Tab2 extends DevKit.Controls.ITab {
			Section: tab_Tab2_Sections;
		}
		interface Tabs {
			Tab1: tab_Tab1;
			Tab2: tab_Tab2;
		}
		interface Body {
			Tab: Tabs;
			abc_All: DevKit.Controls.String;
			abc_All_1: DevKit.Controls.String;
			abc_Boolean: DevKit.Controls.Boolean;
			abc_Lookup: DevKit.Controls.Lookup;
			abc_OptionSetCode: DevKit.Controls.OptionSet;
			abc_FloatingPointNumber: DevKit.Controls.Double;
			abc_IFramed: DevKit.Controls.IFrame;
			abc_KbSearch: DevKit.Controls.Knowledge;
			abc_TimelineWall: DevKit.Controls.TimelineWall;
			abc_Timer: DevKit.Controls.Timer;
		}
		interface Footer extends DevKit.Controls.IFooter {
			abc_All: DevKit.Controls.String;
		}
		interface Navigation {
			nav01: DevKit.Controls.NavigationItem
		}
		interface quickForm_AzureAccount_Body {
			devkit_AzureAccountType: DevKit.Controls.QuickView;
			devkit_Category: DevKit.Controls.QuickView;
			devkit_City: DevKit.Controls.QuickView;
			devkit_CreatedOn: DevKit.Controls.QuickView;
			devkit_ModifiedOn: DevKit.Controls.QuickView;
			devkit_name: DevKit.Controls.QuickView;
			devkit_Price: DevKit.Controls.QuickView;
			devkit_Surface: DevKit.Controls.QuickView;
			EmailAddress: DevKit.Controls.QuickView;
		}
		interface quickForm_QuickForm_Body {
			abc_All: DevKit.Controls.String;
		}
		interface quickForm_QuickForm extends DevKit.Controls.IQuickView {
			Body: quickForm_QuickForm_Body;
		}
		interface QuickForm {
			QuickForm: quickForm_QuickForm;
		}
		interface ProcessProcess_1 {
			abc_All: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Process_1: ProcessProcess_1;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
		}
	}
	class FormTest extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Account
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Test */
		Body: MySon.FormTest.Body;
		/** The Header section of form Test */
		Header: MySon.FormTest.Header;
		/** The Footer section of form Test */
		Footer: MySon.FormTest.Footer;
		/** The Navigation of form Test */
		Navigation: MySon.FormTest.Navigation;
		/** The QuickForm of form Test */
		QuickForm: MySon.FormTest.QuickForm;
		/** The Process of form Test */
		Process: MySon.FormTest.Process;
		/** The Grid of form Test */
		Grid: MySon.FormTest.Grid;
	}
}
declare namespace OptionSet {
	namespace abc_Test {
		enum abc_OptionSetCode {
			/** 100000000 */
			Value_1,
			/** 100000001 */
			Value_2,
			/** 100000002 */
			Value_3,
			/** 100000003 */
			Value_4,
			/** 100000004 */
			Value_5,
			/** 100000005 */
			Value_6
		}
	}
}