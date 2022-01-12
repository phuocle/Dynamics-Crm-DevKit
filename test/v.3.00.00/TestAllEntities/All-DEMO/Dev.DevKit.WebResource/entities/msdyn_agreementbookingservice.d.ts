//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Booking_Service_Mobile {
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Agreement associated with Agreement Booking Service. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** The Agreement Booking Incident related to this service */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer Asset related to this Service */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the duration you want to bill the customer for. By default, this will default to the same value as the "Duration" field. */
			msdyn_DurationToBill: DevKit.Controls.Integer;
			/** Shows the order of this service within the agreement services. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Optionally set Price List that will determine the pricing for this service on the Work Order */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Service. */
			msdyn_Service: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this service when Price List is set */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormAgreement_Booking_Service_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Booking_Service_Mobile Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Service_Mobile */
		Body: DevKit.FormAgreement_Booking_Service_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Service_Mobile */
		Navigation: DevKit.FormAgreement_Booking_Service_Mobile.Navigation;
		/** The SidePanes of form Agreement_Booking_Service_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_agreementbookingservice_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Agreement associated with Agreement Booking Service. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** The Agreement Booking Incident related to this service */
			msdyn_AgreementBookingIncident: DevKit.Controls.Lookup;
			/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service. */
			msdyn_AgreementBookingSetup: DevKit.Controls.Lookup;
			/** Customer Asset related to this Service */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Shows the actual duration of service. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the duration you want to bill the customer for. By default, this will default to the same value as the "Duration" field. */
			msdyn_DurationToBill: DevKit.Controls.Integer;
			/** Shows the order of this service within the agreement services. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Optionally set Price List that will determine the pricing for this service on the Work Order */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Agreement Booking Service. */
			msdyn_Service: DevKit.Controls.Lookup;
			/** The unit that determines the pricing for this service when Price List is set */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you wish to charge the customer per unit. This field is optional. */
			msdyn_UnitAmount: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Booking Service */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_agreementbookingservice_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementbookingservice_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementbookingservice_Information */
		Body: DevKit.Formmsdyn_agreementbookingservice_Information.Body;
		/** The Footer section of form msdyn_agreementbookingservice_Information */
		Footer: DevKit.Formmsdyn_agreementbookingservice_Information.Footer;
		/** The Navigation of form msdyn_agreementbookingservice_Information */
		Navigation: DevKit.Formmsdyn_agreementbookingservice_Information.Navigation;
		/** The SidePanes of form msdyn_agreementbookingservice_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_agreementbookingserviceApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementbookingserviceApi
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
		/** Unique identifier for Agreement associated with Agreement Booking Service. */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** The Agreement Booking Incident related to this service */
		msdyn_AgreementBookingIncident: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_agreementbookingserviceId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Agreement Booking Setup associated with Agreement Booking Service. */
		msdyn_AgreementBookingSetup: DevKit.WebApi.LookupValue;
		msdyn_Currency: DevKit.WebApi.MoneyValue;
		/** Shows the value of the currency in the base currency. */
		msdyn_currency_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Customer Asset related to this Service */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		/** Shows the actual duration of service. */
		msdyn_Duration: DevKit.WebApi.IntegerValue;
		/** Enter the duration you want to bill the customer for. By default, this will default to the same value as the "Duration" field. */
		msdyn_DurationToBill: DevKit.WebApi.IntegerValue;
		msdyn_IsCopied: DevKit.WebApi.BooleanValue;
		/** Shows the order of this service within the agreement services. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Optionally set Price List that will determine the pricing for this service on the Work Order */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Unique identifier for Product/Service associated with Agreement Booking Service. */
		msdyn_Service: DevKit.WebApi.LookupValue;
		/** The unit that determines the pricing for this service when Price List is set */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you wish to charge the customer per unit. This field is optional. */
		msdyn_UnitAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit amount in the base currency. */
		msdyn_unitamount_Base: DevKit.WebApi.MoneyValueReadonly;
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
		/** Status of the Agreement Booking Service */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Agreement Booking Service */
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
	namespace msdyn_agreementbookingservice {
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