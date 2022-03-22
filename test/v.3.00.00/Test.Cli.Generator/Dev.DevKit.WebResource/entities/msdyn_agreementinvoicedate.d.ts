//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_agreementinvoicedate_Information {
		interface Tabs {
		}
		interface Body {
			/** Agreement this Invoice Date relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Enter the date to generate the invoice. */
			msdyn_InvoiceDate: DevKit.Controls.Date;
			/** Invoice Setup this Invoice Date relates to */
			msdyn_InvoiceSetup: DevKit.Controls.Lookup;
			msdyn_InvoiceStatus: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Invoice Date */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_agreementinvoicedate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_agreementinvoicedate_Information */
		Body: DevKit.Formmsdyn_agreementinvoicedate_Information.Body;
		/** The Footer section of form msdyn_agreementinvoicedate_Information */
		Footer: DevKit.Formmsdyn_agreementinvoicedate_Information.Footer;
		/** The Navigation of form msdyn_agreementinvoicedate_Information */
		Navigation: DevKit.Formmsdyn_agreementinvoicedate_Information.Navigation;
		/** The Process of form msdyn_agreementinvoicedate_Information */
		Process: DevKit.Formmsdyn_agreementinvoicedate_Information.Process;
		/** The SidePanes of form msdyn_agreementinvoicedate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_agreementinvoicedateApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementinvoicedateApi
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
		/** Agreement this Invoice Date relates to */
		msdyn_Agreement: string;
		/** Shows the entity instances. */
		msdyn_agreementinvoicedateId: string;
		/** Shows the invoice generated for this agreement invoice date. */
		msdyn_Invoice: string;
		/** Enter the date to generate the invoice. */
		msdyn_InvoiceDate_UtcDateOnly: Date;
		/** Invoice Setup this Invoice Date relates to */
		msdyn_InvoiceSetup: string;
		msdyn_InvoiceStatus: OptionSet.msdyn_agreementinvoicedate.msdyn_InvoiceStatus;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: Date;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: Date;
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
		/** Status of the Agreement Invoice Date */
		statecode: OptionSet.msdyn_agreementinvoicedate.statecode;
		/** Reason for the status of the Agreement Invoice Date */
		statuscode: OptionSet.msdyn_agreementinvoicedate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementinvoicedate {
		enum msdyn_InvoiceStatus {
			/** 690970002 */
			Canceled,
			/** 690970001 */
			Processed,
			/** 690970000 */
			Scheduled
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}