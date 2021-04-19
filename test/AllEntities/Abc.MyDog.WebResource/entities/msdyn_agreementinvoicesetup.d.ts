//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormAgreement_Invoice_Setup_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_gemeral: DevKit.Controls.Section;
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_2: DevKit.Controls.Section;
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_4: DevKit.Controls.Section;
			tab_3_section_5: DevKit.Controls.Section;
			tab_3_section_6: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AgreementInvoiceProductsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAgreement_Invoice_Setup_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Invoice_Setup_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Invoice_Setup_Mobile */
		Body: MyDog.FormAgreement_Invoice_Setup_Mobile.Body;
		/** The Navigation of form Agreement_Invoice_Setup_Mobile */
		Navigation: MyDog.FormAgreement_Invoice_Setup_Mobile.Navigation;
		/** The Grid of form Agreement_Invoice_Setup_Mobile */
		Grid: MyDog.FormAgreement_Invoice_Setup_Mobile.Grid;
	}
	namespace Formmsdyn_agreementinvoicesetup_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Invoice Setup */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AgreementInvoiceProductsGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_agreementinvoicesetup_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementinvoicesetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementinvoicesetup_Information */
		Body: MyDog.Formmsdyn_agreementinvoicesetup_Information.Body;
		/** The Footer section of form msdyn_agreementinvoicesetup_Information */
		Footer: MyDog.Formmsdyn_agreementinvoicesetup_Information.Footer;
		/** The Navigation of form msdyn_agreementinvoicesetup_Information */
		Navigation: MyDog.Formmsdyn_agreementinvoicesetup_Information.Navigation;
		/** The Grid of form msdyn_agreementinvoicesetup_Information */
		Grid: MyDog.Formmsdyn_agreementinvoicesetup_Information.Grid;
	}
	class msdyn_agreementinvoicesetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementinvoicesetupApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Agreement this Invoice Setup relates to */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_agreementinvoicesetupId: DevKit.WebApi.GuidValue;
		/** Type a description of this invoice setup. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Stores the invoice recurrence settings. */
		msdyn_RecurrenceSettings: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_Revision: DevKit.WebApi.IntegerValue;
		/** Shows the date and time that the record was migrated. */
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
		/** Contains the ID of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Contains the ID of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Agreement Invoice Setup */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement Invoice Setup */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementinvoicesetup {
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
//{'JsForm':['Agreement Invoice Setup - Mobile','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}