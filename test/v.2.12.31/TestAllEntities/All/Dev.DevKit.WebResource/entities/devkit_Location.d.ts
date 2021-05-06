//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** The Body section of form Location */
		Body: DevKit.FormLocation.Body;
		/** The Footer section of form Location */
		Footer: DevKit.FormLocation.Footer;
		/** The Header section of form Location */
		Header: DevKit.FormLocation.Header;
		/** The Navigation of form Location */
		Navigation: DevKit.FormLocation.Navigation;
		/** The QuickForm of form Location */
		QuickForm: DevKit.FormLocation.QuickForm;
		/** The Process of form Location */
		Process: DevKit.FormLocation.Process;
		/** The Grid of form Location */
		Grid: DevKit.FormLocation.Grid;
	}
	namespace FormLocation_2 {
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
	class FormLocation_2 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Location_2
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Location_2 */
		Body: DevKit.FormLocation_2.Body;
		/** The Footer section of form Location_2 */
		Footer: DevKit.FormLocation_2.Footer;
		/** The Header section of form Location_2 */
		Header: DevKit.FormLocation_2.Header;
		/** The Navigation of form Location_2 */
		Navigation: DevKit.FormLocation_2.Navigation;
		/** The QuickForm of form Location_2 */
		QuickForm: DevKit.FormLocation_2.QuickForm;
		/** The Process of form Location_2 */
		Process: DevKit.FormLocation_2.Process;
		/** The Grid of form Location_2 */
		Grid: DevKit.FormLocation_2.Grid;
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
		/** The Body section of form Quick_Create_Location */
		Body: DevKit.FormQuick_Create_Location.Body;
	}
	class devkit_LocationApi {
		/**
		* DynamicsCrm.DevKit devkit_LocationApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		devkit_AccountId: DevKit.WebApi.LookupValue;
		devkit_ContactId: DevKit.WebApi.LookupValue;
		devkit_CustomerId_account: DevKit.WebApi.LookupValue;
		devkit_CustomerId_contact: DevKit.WebApi.LookupValue;
		devkit_File_Name: DevKit.WebApi.StringValueReadonly;
		devkit_Image_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		devkit_Image_URL: DevKit.WebApi.StringValueReadonly;
		devkit_ImageId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for entity instances */
		devkit_LocationId: DevKit.WebApi.GuidValue;
		/** The name of the custom entity. */
		devkit_Name: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Location */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Location */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Location','Location 2','Quick Create Location'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}