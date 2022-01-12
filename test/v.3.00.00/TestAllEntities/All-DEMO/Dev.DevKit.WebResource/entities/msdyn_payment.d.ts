//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_payment_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Account associated with Payment. */
			msdyn_Account: DevKit.Controls.Lookup;
			msdyn_Amount: DevKit.Controls.Money;
			msdyn_CheckNumber: DevKit.Controls.String;
			msdyn_Date: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Payment Method associated with Payment. */
			msdyn_PaymentMethod: DevKit.Controls.Lookup;
			msdyn_PaymentType: DevKit.Controls.OptionSet;
			msdyn_UnappliedAmount: DevKit.Controls.Money;
			/** Unique identifier for Work Order associated with Payment. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Payment */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_payment_msdyn_paymentdetail_Payment: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_payment_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_payment_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_payment_Information */
		Body: DevKit.Formmsdyn_payment_Information.Body;
		/** The Footer section of form msdyn_payment_Information */
		Footer: DevKit.Formmsdyn_payment_Information.Footer;
		/** The Navigation of form msdyn_payment_Information */
		Navigation: DevKit.Formmsdyn_payment_Information.Navigation;
		/** The SidePanes of form msdyn_payment_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPayment_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_2: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_related_entities_section_2: DevKit.Controls.Section;
			fstab_related_entities_section_3: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
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
			/** Unique identifier for Account associated with Payment. */
			msdyn_Account: DevKit.Controls.Lookup;
			msdyn_Amount: DevKit.Controls.Money;
			msdyn_CheckNumber: DevKit.Controls.String;
			msdyn_Date: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Payment Method associated with Payment. */
			msdyn_PaymentMethod: DevKit.Controls.Lookup;
			msdyn_PaymentType: DevKit.Controls.OptionSet;
			msdyn_UnappliedAmount: DevKit.Controls.Money;
			/** Unique identifier for Work Order associated with Payment. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_payment_msdyn_paymentdetail_Payment: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormPayment_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Payment_Mobile Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Payment_Mobile */
		Body: DevKit.FormPayment_Mobile.Body;
		/** The Navigation of form Payment_Mobile */
		Navigation: DevKit.FormPayment_Mobile.Navigation;
		/** The SidePanes of form Payment_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_paymentApi {
		/**
		* DynamicsCrm.DevKit msdyn_paymentApi
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
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Account associated with Payment. */
		msdyn_Account: DevKit.WebApi.LookupValue;
		msdyn_Amount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the amount in the base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_CheckNumber: DevKit.WebApi.StringValue;
		msdyn_Date_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the entity instances. */
		msdyn_paymentId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Payment Method associated with Payment. */
		msdyn_PaymentMethod: DevKit.WebApi.LookupValue;
		msdyn_PaymentType: DevKit.WebApi.OptionSetValue;
		msdyn_UnappliedAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unapplied amount in the base currency. */
		msdyn_unappliedamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier for Work Order associated with Payment. */
		msdyn_WorkOrder: DevKit.WebApi.LookupValue;
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
		/** Status of the Payment */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Payment */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_payment {
		enum msdyn_PaymentType {
			/** 690970000 */
			Cash,
			/** 690970001 */
			Check,
			/** 690970002 */
			Credit_Card,
			/** 690970003 */
			Other
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}