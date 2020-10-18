//@ts-check
///<reference path="devkit.d.ts" />
declare namespace LuckyStar {
	namespace FormLocation {
		interface Header extends DevKit.Controls.IHeader {
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_ContactId: DevKit.Controls.Lookup;
		}
		interface tab_tab1_Sections {
			tab1sec1: DevKit.Controls.Section;
			tab1sec2: DevKit.Controls.Section;
			ref_pan_tab1_section_3: DevKit.Controls.Section;
		}
		interface tab_tab2_Sections {
			tab2sec1: DevKit.Controls.Section;
		}
		interface tab_tab3_Sections {
			tab3sec1: DevKit.Controls.Section;
		}
		interface tab_tab1 extends DevKit.Controls.ITab {
			Section: tab_tab1_Sections;
		}
		interface tab_tab2 extends DevKit.Controls.ITab {
			Section: tab_tab2_Sections;
		}
		interface tab_tab3 extends DevKit.Controls.ITab {
			Section: tab_tab3_Sections;
		}
		interface Tabs {
			tab1: tab_tab1;
			tab2: tab_tab2;
			tab3: tab_tab3;
		}
		interface Body {
			Tab: Tabs;
			WebResource_HelloWorld: DevKit.Controls.WebResource;
			IFRAME_google: DevKit.Controls.IFrame;
			timerControl: DevKit.Controls.Timer;
			notescontrol: DevKit.Controls.Note;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_ContactId: DevKit.Controls.Lookup;
			devkit_CustomerId: DevKit.Controls.Lookup;
			devkit_file: DevKit.Controls.File;
			devkit_image: DevKit.Controls.Image;
			devkit_Image_URL: DevKit.Controls.String;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Status of the Location */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Location */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Controls.NavigationItem,
			nav_devkit_devkit_location_account_LocationId: DevKit.Controls.NavigationItem,
			nav_devkit_devkit_location_contact_LocationId: DevKit.Controls.NavigationItem
		}
		interface quickForm_qwAccount_Body {
			AccountCategoryCode: DevKit.Controls.QuickView;
			AccountNumber: DevKit.Controls.QuickView;
		}
		interface quickForm_quickViewContact_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FirstName: DevKit.Controls.QuickView;
			LastName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_qwAccount extends DevKit.Controls.IQuickView {
			Body: quickForm_qwAccount_Body;
		}
		interface quickForm_quickViewContact extends DevKit.Controls.IQuickView {
			Body: quickForm_quickViewContact_Body;
		}
		interface QuickForm {
			qwAccount: quickForm_qwAccount;
			quickViewContact: quickForm_quickViewContact;
		}
		interface ProcessBPF_Location_2 {
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_ContactId: DevKit.Controls.Lookup;
			devkit_CustomerId: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface ProcessBPF_Location_1 {
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_ContactId: DevKit.Controls.Lookup;
			devkit_CustomerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			BPF_Location_2: ProcessBPF_Location_2;
			BPF_Location_1: ProcessBPF_Location_1;
		}
		interface Grid {
			chartAccount: DevKit.Controls.Grid;
			panelContact: DevKit.Controls.Grid;
			panelAccount: DevKit.Controls.Grid;
			gridAccount: DevKit.Controls.Grid;
		}
	}
	class FormLocation extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Location
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Location */
		Body: LuckyStar.FormLocation.Body;
		/** The Footer section of form Location */
		Footer: LuckyStar.FormLocation.Footer;
		/** The Header section of form Location */
		Header: LuckyStar.FormLocation.Header;
		/** The Navigation of form Location */
		Navigation: LuckyStar.FormLocation.Navigation;
		/** The QuickForm of form Location */
		QuickForm: LuckyStar.FormLocation.QuickForm;
		/** The Process of form Location */
		Process: LuckyStar.FormLocation.Process;
		/** The Grid of form Location */
		Grid: LuckyStar.FormLocation.Grid;
	}
	namespace FormQuick_Create_Location {
		interface tab_tab_1_Sections {
			tab1sec1: DevKit.Controls.Section;
			tab1sec2: DevKit.Controls.Section;
			tab1sec3: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			devkit_AccountId: DevKit.Controls.Lookup;
			devkit_ContactId: DevKit.Controls.Lookup;
			devkit_CustomerId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Location */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	class FormQuick_Create_Location extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Location
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Quick_Create_Location */
		Body: LuckyStar.FormQuick_Create_Location.Body;
	}
}
declare namespace OptionSet {
	namespace devkit_Location {
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
//{'JsForm':['Location','Quick Create Location'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.10.31'}