﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderinvoicingsetup_Information {
		interface tab__14599880_992D_4F94_A7F0_76721D4D0D8B_Sections {
			_14599880_992D_4F94_A7F0_76721D4D0D8B_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_TabProducts_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__14599880_992D_4F94_A7F0_76721D4D0D8B extends DevKit.Controls.ITab {
			Section: tab__14599880_992D_4F94_A7F0_76721D4D0D8B_Sections;
		}
		interface tab_TabProducts extends DevKit.Controls.ITab {
			Section: tab_TabProducts_Sections;
		}
		interface Tabs {
			_14599880_992D_4F94_A7F0_76721D4D0D8B: tab__14599880_992D_4F94_A7F0_76721D4D0D8B;
			TabProducts: tab_TabProducts;
		}
		interface Body {
			Tab: Tabs;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Order this invoice setup relates to */
			msdyn_Order: DevKit.Controls.Lookup;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			GridProducts: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_orderinvoicingsetup_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingsetup_Information */
		Body: DevKit.Formmsdyn_orderinvoicingsetup_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingsetup_Information */
		Navigation: DevKit.Formmsdyn_orderinvoicingsetup_Information.Navigation;
		/** The Process of form msdyn_orderinvoicingsetup_Information */
		Process: DevKit.Formmsdyn_orderinvoicingsetup_Information.Process;
		/** The Grid of form msdyn_orderinvoicingsetup_Information */
		Grid: DevKit.Formmsdyn_orderinvoicingsetup_Information.Grid;
		/** The SidePanes of form msdyn_orderinvoicingsetup_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_orderinvoicingsetup_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_orderinvoicingsetup_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingsetup_Information2 */
		Body: DevKit.Formmsdyn_orderinvoicingsetup_Information2.Body;
		/** The Process of form msdyn_orderinvoicingsetup_Information2 */
		Process: DevKit.Formmsdyn_orderinvoicingsetup_Information2.Process;
		/** The SidePanes of form msdyn_orderinvoicingsetup_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_orderinvoicingsetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_orderinvoicingsetupApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a description of this invoice setup. */
		msdyn_Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Order this invoice setup relates to */
		msdyn_Order: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_orderinvoicingsetupId: DevKit.WebApi.GuidValue;
		/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Stores the invoice recurrence settings. */
		msdyn_RecurrenceSettings: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_Revision: DevKit.WebApi.IntegerValue;
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
		/** Status of the Order Invoicing Setup */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Order Invoicing Setup */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderinvoicingsetup {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}