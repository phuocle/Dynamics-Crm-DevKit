//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_autocapturesettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_autocapturesettingsApi
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
		/** Auto Capture */
		msdyn_autocapture: boolean;
		/** Unique identifier for entity instances */
		msdyn_autocapturesettingsId: string;
		/** Auto Capture V1 */
		msdyn_autocaptureV1: boolean;
		/** Automatic Activity Update */
		msdyn_automaticactivityupdate: boolean;
		/** Calendar */
		msdyn_calendar: boolean;
		/** Contacts */
		msdyn_contacts: boolean;
		/** Default Association */
		msdyn_defaultassociation: string;
		/** Dont Show Setting Status for both Suggested activity and Suggested Contact */
		msdyn_DontShowSettingStatus: string;
		/** Emails */
		msdyn_emails: boolean;
		/** Meetings */
		msdyn_meetings: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Organization Id */
		msdyn_organizationid: string;
		/** SettingsUI Action */
		msdyn_settingsuiaction: string;
		/** User Id */
		msdyn_UserId: string;
		/** V1 TERMS AND CONDITIONS COUNT */
		msdyn_V1TermsandConditionsCount: string;
		/** V2 TERMS AND CONDITIONS COUNT */
		msdyn_V2TermsandConditionsCount: string;
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
		/** Status of the Auto Capture Settings */
		statecode: OptionSet.msdyn_autocapturesettings.statecode;
		/** Reason for the status of the Auto Capture Settings */
		statuscode: OptionSet.msdyn_autocapturesettings.statuscode;
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
			/** Auto Capture */
			readonly msdyn_autocapture: string;
			/** Unique identifier for entity instances */
			readonly msdyn_autocapturesettingsId: string;
			/** Auto Capture V1 */
			readonly msdyn_autocaptureV1: string;
			/** Automatic Activity Update */
			readonly msdyn_automaticactivityupdate: string;
			/** Calendar */
			readonly msdyn_calendar: string;
			/** Contacts */
			readonly msdyn_contacts: string;
			/** Default Association */
			readonly msdyn_defaultassociation: string;
			/** Dont Show Setting Status for both Suggested activity and Suggested Contact */
			readonly msdyn_DontShowSettingStatus: string;
			/** Emails */
			readonly msdyn_emails: string;
			/** Meetings */
			readonly msdyn_meetings: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Organization Id */
			readonly msdyn_organizationid: string;
			/** SettingsUI Action */
			readonly msdyn_settingsuiaction: string;
			/** User Id */
			readonly msdyn_UserId: string;
			/** V1 TERMS AND CONDITIONS COUNT */
			readonly msdyn_V1TermsandConditionsCount: string;
			/** V2 TERMS AND CONDITIONS COUNT */
			readonly msdyn_V2TermsandConditionsCount: string;
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
			/** Status of the Auto Capture Settings */
			readonly statecode: string;
			/** Reason for the status of the Auto Capture Settings */
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
	namespace msdyn_autocapturesettings {
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