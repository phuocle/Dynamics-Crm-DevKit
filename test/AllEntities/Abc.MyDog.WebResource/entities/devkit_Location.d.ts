//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormLocation {
		interface Header {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab1_Sections {
			tab1sec1: DevKit.Form.Controls.ControlSection;
			tab1sec2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab2_Sections {
			tab2sec1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab3_Sections {
			tab3sec1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab1_Sections;
		}
		interface tab_tab2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab2_Sections;
		}
		interface tab_tab3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab3_Sections;
		}
		interface Tabs {
			tab1: tab_tab1;
			tab2: tab_tab2;
			tab3: tab_tab3;
		}
		interface Body {
			Tab: Tabs;
			WebResource_HelloWorld: DevKit.Form.Controls.ControlWebResource;
			chartAccount: DevKit.Form.Controls.ControlGrid;
			: DevKit.Form.Controls.ELSE2???;//panelContact - 02D4264B-47E2-4B4C-AA95-F439F3F4D458 -- FOR DEBUG 
			: DevKit.Form.Controls.ELSE2???;//panelAccount - 02D4264B-47E2-4B4C-AA95-F439F3F4D458 -- FOR DEBUG 
			gridAccount: DevKit.Form.Controls.ControlGrid;
			IFRAME_google: DevKit.Form.Controls.ControlIFrame;
			timerControl: DevKit.Form.Controls.ControlTimer;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			qwAccount: DevKit.Form.Controls.ControlQuickView;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			quickViewContact: DevKit.Form.Controls.ControlQuickView;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_file: DevKit.Form.Controls.ELSE2???;//devkit_file - 0A7FF475-B016-4687-9CE5-042BFDBD6519 -- FOR DEBUG 
			devkit_image: DevKit.Form.Controls.ELSE2???;//devkit_image - 7E548B0D-209C-477B-9DCD-F0F44472381D -- FOR DEBUG 
			devkit_Image_URL: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Status of the Location */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the Location */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_location_account_LocationId: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_location_contact_LocationId: DevKit.Form.Controls.ControlNavigationItem,
			nav_bpf_devkit_location_devkit_bpf_location_1: DevKit.Form.Controls.ControlNavigationItem,
			nav_bpf_devkit_location_new_bpf_301232cf016d4faebcee80f57b143c69: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessBPF_Location_2 {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessBPF_Location_1 {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			BPF_Location_2: ProcessBPF_Location_2;
			BPF_Location_1: ProcessBPF_Location_1;
		}
	}
	class FormLocation extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Location
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Location */
		Body: MyDog.FormLocation.Body;
		/** The Footer section of form Location */
		Footer: MyDog.FormLocation.Footer;
		/** The Header section of form Location */
		Header: MyDog.FormLocation.Header;
		/** The Navigation of form Location */
		Navigation: MyDog.FormLocation.Navigation;
		/** The Process of form Location */
		Process: MyDog.FormLocation.Process;
	}
	namespace FormLocation_2 {
		interface Header {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tab1_Sections {
			tab1sec1: DevKit.Form.Controls.ControlSection;
			tab1sec2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab2_Sections {
			tab2sec1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab3_Sections {
			tab3sec1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab1_Sections;
		}
		interface tab_tab2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab2_Sections;
		}
		interface tab_tab3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab3_Sections;
		}
		interface Tabs {
			tab1: tab_tab1;
			tab2: tab_tab2;
			tab3: tab_tab3;
		}
		interface Body {
			Tab: Tabs;
			WebResource_HelloWorld: DevKit.Form.Controls.ControlWebResource;
			chartAccount: DevKit.Form.Controls.ControlGrid;
			: DevKit.Form.Controls.ELSE2???;//panelContact - 02D4264B-47E2-4B4C-AA95-F439F3F4D458 -- FOR DEBUG 
			: DevKit.Form.Controls.ELSE2???;//panelAccount - 02D4264B-47E2-4B4C-AA95-F439F3F4D458 -- FOR DEBUG 
			gridAccount: DevKit.Form.Controls.ControlGrid;
			IFRAME_google: DevKit.Form.Controls.ControlIFrame;
			timerControl: DevKit.Form.Controls.ControlTimer;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			qwAccount: DevKit.Form.Controls.ControlQuickView;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			quickViewContact: DevKit.Form.Controls.ControlQuickView;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			devkit_file: DevKit.Form.Controls.ELSE2???;//devkit_file - 0A7FF475-B016-4687-9CE5-042BFDBD6519 -- FOR DEBUG 
			devkit_image: DevKit.Form.Controls.ELSE2???;//devkit_image - 7E548B0D-209C-477B-9DCD-F0F44472381D -- FOR DEBUG 
			devkit_Image_URL: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Status of the Location */
			statecode: DevKit.Form.Controls.ControlOptionSet;
			/** Reason for the status of the Location */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_location_account_LocationId: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_devkit_location_contact_LocationId: DevKit.Form.Controls.ControlNavigationItem,
			nav_bpf_devkit_location_devkit_bpf_location_1: DevKit.Form.Controls.ControlNavigationItem,
			nav_bpf_devkit_location_new_bpf_301232cf016d4faebcee80f57b143c69: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessBPF_Location_2 {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface ProcessBPF_Location_1 {
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			BPF_Location_2: ProcessBPF_Location_2;
			BPF_Location_1: ProcessBPF_Location_1;
		}
	}
	class FormLocation_2 extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Location_2
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Location_2 */
		Body: MyDog.FormLocation_2.Body;
		/** The Footer section of form Location_2 */
		Footer: MyDog.FormLocation_2.Footer;
		/** The Header section of form Location_2 */
		Header: MyDog.FormLocation_2.Header;
		/** The Navigation of form Location_2 */
		Navigation: MyDog.FormLocation_2.Navigation;
		/** The Process of form Location_2 */
		Process: MyDog.FormLocation_2.Process;
	}
	namespace FormQuick_Create_Location {
		interface tab_tab_1_Sections {
			tab1sec1: DevKit.Form.Controls.ControlSection;
			tab1sec2: DevKit.Form.Controls.ControlSection;
			tab1sec3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			devkit_AccountId: DevKit.Form.Controls.ControlLookup;
			devkit_ContactId: DevKit.Form.Controls.ControlLookup;
			devkit_CustomerId: DevKit.Form.Controls.ControlLookup;
			/** The name of the custom entity. */
			devkit_Name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Reason for the status of the Location */
			statuscode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormQuick_Create_Location extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Location
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Location */
		Body: MyDog.FormQuick_Create_Location.Body;
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
//{'JsForm':['Location','Location 2','Quick Create Location'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}