﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Invoice_Setup_Mobile {
		interface tab_fstab_general_Sections {
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_2: DevKit.Controls.Section;
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_3: DevKit.Controls.Section;
			fstab_general_section_gemeral: DevKit.Controls.Section;
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
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessAgreement_Business_Process {
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Agreement_Business_Process: ProcessAgreement_Business_Process;
		}
		interface Grid {
			AgreementInvoiceProductsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAgreement_Invoice_Setup_Mobile extends DevKit.IForm {
		/**
		* Agreement Invoice Setup - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Invoice_Setup_Mobile */
		Body: DevKit.FormAgreement_Invoice_Setup_Mobile.Body;
		/** The Navigation of form Agreement_Invoice_Setup_Mobile */
		Navigation: DevKit.FormAgreement_Invoice_Setup_Mobile.Navigation;
		/** The Process of form Agreement_Invoice_Setup_Mobile */
		Process: DevKit.FormAgreement_Invoice_Setup_Mobile.Process;
		/** The Grid of form Agreement_Invoice_Setup_Mobile */
		Grid: DevKit.FormAgreement_Invoice_Setup_Mobile.Grid;
		/** The SidePanes of form Agreement_Invoice_Setup_Mobile */
		SidePanes: DevKit.SidePanes;
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
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Invoice Setup */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessAgreement_Business_Process {
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Agreement_Business_Process: ProcessAgreement_Business_Process;
		}
		interface Grid {
			AgreementInvoiceProductsGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_agreementinvoicesetup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementinvoicesetup_Information */
		Body: DevKit.Formmsdyn_agreementinvoicesetup_Information.Body;
		/** The Footer section of form msdyn_agreementinvoicesetup_Information */
		Footer: DevKit.Formmsdyn_agreementinvoicesetup_Information.Footer;
		/** The Navigation of form msdyn_agreementinvoicesetup_Information */
		Navigation: DevKit.Formmsdyn_agreementinvoicesetup_Information.Navigation;
		/** The Process of form msdyn_agreementinvoicesetup_Information */
		Process: DevKit.Formmsdyn_agreementinvoicesetup_Information.Process;
		/** The Grid of form msdyn_agreementinvoicesetup_Information */
		Grid: DevKit.Formmsdyn_agreementinvoicesetup_Information.Grid;
		/** The SidePanes of form msdyn_agreementinvoicesetup_Information */
		SidePanes: DevKit.SidePanes;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Agreement this Invoice Setup relates to */
		msdyn_Agreement: string;
		/** Shows the entity instances. */
		msdyn_agreementinvoicesetupId: string;
		/** Type a description of this invoice setup. */
		msdyn_Description: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: Date;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: Date;
		/** Stores the invoice recurrence settings. */
		msdyn_RecurrenceSettings: string;
		/** For internal use only. */
		msdyn_Revision: number;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Contains the ID of the process associated with the entity. */
		processid: string;
		/** Contains the ID of the stage where the entity is located. */
		stageid: string;
		/** Status of the Agreement Invoice Setup */
		statecode: OptionSet.msdyn_agreementinvoicesetup.statecode;
		/** Reason for the status of the Agreement Invoice Setup */
		statuscode: OptionSet.msdyn_agreementinvoicesetup.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}