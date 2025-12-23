//@ts-check
///<reference path="devkit.d.ts" />
/**
 * Account Form Type Definitions
 * @description FormAccountForm synced from Account.form.ts with shared OptionSets
 */
declare namespace DevKit {
	// ============================================================================
	// NAMESPACE: FormAccountForm - Matches AccountForm in Account.form.ts
	// ============================================================================
	namespace FormAccountForm {
		interface Header extends DevKit.Controls.IHeader {
			/** Lookup: Owner */
			OwnerId: DevKit.Controls.Lookup;
			/** Integer: Number of Employees */
			NumberOfEmployees: DevKit.Controls.Integer;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
		}
		interface Body {
			Tab: Tabs;
			// ========== Standard Field Controls ==========
			/** String: Account Name */
			Name: DevKit.Controls.String;
			/** Memo: Description */
			Description: DevKit.Controls.Memo;
			/** Integer: Number of Employees */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Money: Annual Revenue */
			Revenue: DevKit.Controls.Money;
			/** Boolean: Credit On Hold */
			CreditOnHold: DevKit.Controls.Boolean;
			/** OptionSet: Industry Code */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Lookup: Primary Contact */
			PrimaryContactId: DevKit.Controls.Lookup;
			// ========== Custom v4_ Field Controls ==========
			/** Date (DateOnly): Custom Birthday field */
			v4_Birthday: DevKit.Controls.Date;
			/** DateTime: Custom Appointment Time field */
			v4_AppointmentTime: DevKit.Controls.DateTime;
			/** Decimal: Custom Latitude field */
			v4_Latitude: DevKit.Controls.Decimal;
			/** Double: Custom Discount Percentage field */
			v4_DiscountPercentage: DevKit.Controls.Double;
			/** MultiOptionSet: Custom Categories field */
			v4_Categories: DevKit.Controls.MultiOptionSet;
			// ========== Specialty Controls ==========
			/** WebResource: Custom Help Web Resource */
			v4_WebResourceHelp: DevKit.Controls.WebResource;
			/** IFrame: Custom External Page */
			v4_IFrameExternal: DevKit.Controls.IFrame;
			/** Timer: Custom SLA Timer */
			v4_TimerSLA: DevKit.Controls.Timer;
			/** Knowledge: Knowledge Base Search */
			v4_KnowledgeSearch: DevKit.Controls.Knowledge;
		}
		interface Navigation {
			Account_Tasks: DevKit.Controls.NavigationItem;
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
		}
		interface BPF_v4_AccountBPF {
			/** BPF Field: Account Name (Stage 1: Qualify) */
			Name: DevKit.Controls.String;
			/** BPF Field: Industry Code (Stage 1: Qualify) */
			IndustryCode: DevKit.Controls.OptionSet;
			/** BPF Field: Revenue (Stage 2: Develop) */
			Revenue: DevKit.Controls.Money;
			/** BPF Field: Primary Contact (Stage 2: Develop) */
			PrimaryContactId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			/** v4_AccountBPF - Custom Account Business Process Flow */
			v4_AccountBPF: BPF_v4_AccountBPF;
		}
	}
	export class FormAccountForm extends DevKit.IForm {
		/**
		* AccountForm [Main Form] - Matches AccountForm namespace in TypeScript (Account.form.ts)
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AccountForm */
		Body: DevKit.FormAccountForm.Body;
		/** The Header section of form AccountForm */
		Header: DevKit.FormAccountForm.Header;
		/** The Navigation of form AccountForm */
		Navigation: DevKit.FormAccountForm.Navigation;
		/** The QuickForm of form AccountForm */
		QuickForm: DevKit.FormAccountForm.QuickForm;
		/** The Grid of form AccountForm */
		Grid: DevKit.FormAccountForm.Grid;
		/** The Process of form AccountForm */
		Process: DevKit.FormAccountForm.Process;
	}
}
declare namespace OptionSet {
	namespace Account {
		/** Industry Code OptionSet */
		const IndustryCode: {
			readonly Accounting: 1;
			readonly Consulting: 7;
			readonly Financial: 16;
			readonly Insurance: 20;
			readonly Technology: 12;
		};
		/** Custom MultiOptionSet - v4_Categories */
		const v4_Categories: {
			readonly Category_A: 100000000;
			readonly Category_B: 100000001;
			readonly Category_C: 100000002;
			readonly Category_D: 100000003;
		};
	}
}