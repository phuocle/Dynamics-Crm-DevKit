//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_paymentdetail_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Invoice associated with Payment Detail. */
			msdyn_Invoice: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Payment associated with Payment Detail. */
			msdyn_Payment: DevKit.Controls.Lookup;
			msdyn_PaymentAmount: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_paymentdetail_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_Appointments: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_Emails: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_paymentdetail_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_paymentdetail_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_paymentdetail_Information */
		Body: DevKit.Formmsdyn_paymentdetail_Information.Body;
		/** The Navigation of form msdyn_paymentdetail_Information */
		Navigation: DevKit.Formmsdyn_paymentdetail_Information.Navigation;
		/** The SidePanes of form msdyn_paymentdetail_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_paymentdetailApi {
		/**
		* DynamicsCrm.DevKit msdyn_paymentdetailApi
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
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Invoice associated with Payment Detail. */
		msdyn_Invoice: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Payment associated with Payment Detail. */
		msdyn_Payment: string;
		msdyn_PaymentAmount: number;
		/** Shows the value of the payment amount in the base currency. */
		readonly msdyn_paymentamount_Base: number;
		/** Shows the entity instances. */
		msdyn_paymentdetailId: string;
		/** Unique identifier for Work Order associated with Payment Detail. */
		msdyn_Workorder: string;
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
		/** Status of the Payment Detail */
		statecode: OptionSet.msdyn_paymentdetail.statecode;
		/** Reason for the status of the Payment Detail */
		statuscode: OptionSet.msdyn_paymentdetail.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Invoice associated with Payment Detail. */
			readonly msdyn_Invoice: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Payment associated with Payment Detail. */
			readonly msdyn_Payment: string;
			readonly msdyn_PaymentAmount: string;
			/** Shows the value of the payment amount in the base currency. */
			readonly msdyn_paymentamount_Base: string;
			/** Shows the entity instances. */
			readonly msdyn_paymentdetailId: string;
			/** Unique identifier for Work Order associated with Payment Detail. */
			readonly msdyn_Workorder: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Payment Detail */
			readonly statecode: string;
			/** Reason for the status of the Payment Detail */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_paymentdetail {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}