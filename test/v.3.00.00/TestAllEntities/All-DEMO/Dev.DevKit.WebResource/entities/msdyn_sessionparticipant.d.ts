//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSession_participant_Form {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of System User participating in session. */
			msdyn_agentid: DevKit.Controls.Lookup;
			/** Date and time when agent accepted the session. */
			msdyn_joinedon: DevKit.Controls.DateTime;
			/** Mode of Agent participation i.e. primary, consult, monitor etc. */
			msdyn_mode: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier of the session associated to the participant. */
			msdyn_omnichannelsession: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormSession_participant_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Session_participant_Form Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_participant_Form */
		Body: DevKit.FormSession_participant_Form.Body;
		/** The SidePanes of form Session_participant_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sessionparticipantApi {
		/**
		* DynamicsCrm.DevKit msdyn_sessionparticipantApi
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
		/** Unique identifier of Active Directory User participating in session. */
		msdyn_activedirectoryuserid: DevKit.WebApi.StringValue;
		/** Active time for agent on the session */
		msdyn_activetime: DevKit.WebApi.IntegerValue;
		/** Date and time when agent assigned to the session. */
		msdyn_addedon_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of System User participating in session. */
		msdyn_agentid: DevKit.WebApi.LookupValue;
		msdyn_externalparticipantchannel: DevKit.WebApi.StringValue;
		/** Channel type of external participant */
		msdyn_externalparticipantchanneltype: DevKit.WebApi.OptionSetValue;
		/** Idle time for agent on the session */
		msdyn_idletime: DevKit.WebApi.IntegerValue;
		/** Inactive time for agent on the session */
		msdyn_inactivetime: DevKit.WebApi.IntegerValue;
		/** Date and time when agent accepted the session. */
		msdyn_joinedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Date and time when agent left the session. */
		msdyn_lefton_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Mode of Agent participation i.e. primary, consult, monitor etc. */
		msdyn_mode: DevKit.WebApi.OptionSetValue;
		/** Date and time when session participant information was last modified. */
		msdyn_modifiedon_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier of the session associated to the participant. */
		msdyn_omnichannelsession: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_sessionparticipantId: DevKit.WebApi.GuidValue;
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
		/** Status of the Session participant */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Session participant */
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
	namespace msdyn_sessionparticipant {
		enum msdyn_externalparticipantchanneltype {
			/** 426120000 */
			Phone_Number
		}
		enum msdyn_mode {
			/** 192350003 */
			Consult,
			/** 192350004 */
			Monitor,
			/** 192350002 */
			Primary
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