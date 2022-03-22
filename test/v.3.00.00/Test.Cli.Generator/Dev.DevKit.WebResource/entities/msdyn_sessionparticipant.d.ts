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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSession_participant_Form extends DevKit.IForm {
		/**
		* Session participant Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_participant_Form */
		Body: DevKit.FormSession_participant_Form.Body;
		/** The Process of form Session_participant_Form */
		Process: DevKit.FormSession_participant_Form.Process;
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
		/** Unique identifier of Active Directory User participating in session. */
		msdyn_activedirectoryuserid: string;
		/** Active time for agent on the session */
		msdyn_activetime: number;
		/** Date and time when agent assigned to the session. */
		msdyn_addedon_UtcDateOnly: Date;
		/** Unique identifier of System User participating in session. */
		msdyn_agentid: string;
		msdyn_externalparticipantchannel: string;
		/** Channel type of external participant */
		msdyn_externalparticipantchanneltype: OptionSet.msdyn_sessionparticipant.msdyn_externalparticipantchanneltype;
		/** Idle time for agent on the session */
		msdyn_idletime: number;
		/** Inactive time for agent on the session */
		msdyn_inactivetime: number;
		/** Date and time when agent accepted the session. */
		msdyn_joinedon_UtcDateAndTime: Date;
		/** Date and time when agent left the session. */
		msdyn_lefton_UtcDateAndTime: Date;
		/** Mode of Agent participation i.e. primary, consult, monitor etc. */
		msdyn_mode: OptionSet.msdyn_sessionparticipant.msdyn_mode;
		/** Date and time when session participant information was last modified. */
		msdyn_modifiedon_UtcDateOnly: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier of the session associated to the participant. */
		msdyn_omnichannelsession: string;
		/** Unique identifier for entity instances */
		msdyn_sessionparticipantId: string;
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
		/** Status of the Session participant */
		statecode: OptionSet.msdyn_sessionparticipant.statecode;
		/** Reason for the status of the Session participant */
		statuscode: OptionSet.msdyn_sessionparticipant.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}