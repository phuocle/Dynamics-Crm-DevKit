//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_marketingformsubmission_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdynmkt_createdentity: DevKit.Controls.ELSE3???;//msdynmkt_createdentity - 94F7BF4B-604D-410A-8721-468214C11B02 -- FOR DEBUG 
			msdynmkt_customerjourneyid: DevKit.Controls.Lookup;
			msdynmkt_emailid: DevKit.Controls.Lookup;
			/** Failure Description */
			msdynmkt_failuredescription: DevKit.Controls.String;
			/** Form associated with Form Submission. */
			msdynmkt_marketingformid: DevKit.Controls.Lookup;
			/** The name of the Form Submission. */
			msdynmkt_name: DevKit.Controls.String;
			/** The URL of the page where the form is hosted */
			msdynmkt_pageurl: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Status of the Form Submission */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Form Submission */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_marketingformsubmission_field: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Submitted_Values: DevKit.Controls.Grid;
		}
	}
	class Formmsdynmkt_marketingformsubmission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_marketingformsubmission_Information */
		Body: DevKit.Formmsdynmkt_marketingformsubmission_Information.Body;
		/** The Navigation of form msdynmkt_marketingformsubmission_Information */
		Navigation: DevKit.Formmsdynmkt_marketingformsubmission_Information.Navigation;
		/** The Grid of form msdynmkt_marketingformsubmission_Information */
		Grid: DevKit.Formmsdynmkt_marketingformsubmission_Information.Grid;
		/** The SidePanes of form msdynmkt_marketingformsubmission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_marketingformsubmissionApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_marketingformsubmissionApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Compliance profile associated with Form Submission. */
		msdynmkt_compliancesettings4id: string;
		msdynmkt_contactableemail: string;
		/** Affected Record Link associated with Form Submission. */
		msdynmkt_createdentity: string;
		msdynmkt_customerjourneyid: string;
		msdynmkt_emailid: string;
		/** Event Registration associated with Form Submission. */
		msdynmkt_eventregistration: string;
		/** Failure Description */
		msdynmkt_failuredescription: string;
		/** Linked Submission Id */
		msdynmkt_linkedsubmissionid: string;
		/** Form associated with Form Submission. */
		msdynmkt_marketingformid: string;
		/** Unique identifier for entity instances */
		msdynmkt_marketingformsubmissionId: string;
		/** Marketing form submission type */
		msdynmkt_marketingformsubmissiontype: OptionSet.msdynmkt_marketingformsubmission.msdynmkt_marketingformsubmissiontype;
		/** The name of the Form Submission. */
		msdynmkt_name: string;
		/** The URL of the page where the form is hosted */
		msdynmkt_pageurl: string;
		/** Submitted Values */
		readonly msdynmkt_submittedvalues: string;
		/** Tracking Id */
		msdynmkt_trackingid: string;
		/** Date and time that the record was migrated. */
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
		/** Status of the Form Submission */
		statecode: OptionSet.msdynmkt_marketingformsubmission.statecode;
		/** Reason for the status of the Form Submission */
		statuscode: OptionSet.msdynmkt_marketingformsubmission.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Compliance profile associated with Form Submission. */
			readonly msdynmkt_compliancesettings4id: string;
			readonly msdynmkt_contactableemail: string;
			/** Affected Record Link associated with Form Submission. */
			readonly msdynmkt_createdentity: string;
			readonly msdynmkt_customerjourneyid: string;
			readonly msdynmkt_emailid: string;
			/** Event Registration associated with Form Submission. */
			readonly msdynmkt_eventregistration: string;
			/** Failure Description */
			readonly msdynmkt_failuredescription: string;
			/** Linked Submission Id */
			readonly msdynmkt_linkedsubmissionid: string;
			/** Form associated with Form Submission. */
			readonly msdynmkt_marketingformid: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_marketingformsubmissionId: string;
			/** Marketing form submission type */
			readonly msdynmkt_marketingformsubmissiontype: string;
			/** The name of the Form Submission. */
			readonly msdynmkt_name: string;
			/** The URL of the page where the form is hosted */
			readonly msdynmkt_pageurl: string;
			/** Submitted Values */
			readonly msdynmkt_submittedvalues: string;
			/** Tracking Id */
			readonly msdynmkt_trackingid: string;
			/** Date and time that the record was migrated. */
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
			/** Status of the Form Submission */
			readonly statecode: string;
			/** Reason for the status of the Form Submission */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_marketingformsubmission {
		enum msdynmkt_marketingformsubmissiontype {
			/** 624650001 */
			Form_Capture,
			/** 624650000 */
			Form_Embed,
			/** 624650002 */
			Form_Standalone
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 575440004 */
			Confirmation_Pending,
			/** 575440001 */
			Failure,
			/** 575440005 */
			Failure_after_Confirmation,
			/** 575440003 */
			Finished,
			/** 2 */
			Inactive,
			/** 575440000 */
			Pending,
			/** 575440002 */
			Success,
			/** 575440006 */
			Warning
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