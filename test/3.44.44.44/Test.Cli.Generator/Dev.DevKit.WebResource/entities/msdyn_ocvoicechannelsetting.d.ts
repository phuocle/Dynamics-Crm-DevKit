//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocvoicechannelsetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_ocvoicechannelsetting_msdyn_ocprovisioningstate_voicechannelsettingid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocvoicechannelsetting_msdyn_ocvoicechannellanguagesetting_ocvoicechannelsettingid: DevKit.Controls.NavigationItem,
			msdyn_ocvoicechannelsetting_msdyn_surveyconfig_msdyn_targetchannelid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ocvoicechannelsetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocvoicechannelsetting_Information */
		Body: DevKit.Formmsdyn_ocvoicechannelsetting_Information.Body;
		/** The Navigation of form msdyn_ocvoicechannelsetting_Information */
		Navigation: DevKit.Formmsdyn_ocvoicechannelsetting_Information.Navigation;
		/** The SidePanes of form msdyn_ocvoicechannelsetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocvoicechannelsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocvoicechannelsettingApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_ocvoicechannelsetting.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Enable agent control to add an external participant */
		msdyn_agentexternalparticipantcontrolenabled: boolean;
		/** Enable agent external participant transfer control for external phone numbers */
		msdyn_agentexternalparticipanttransfercontrolenabled: boolean;
		/** Enable agent control to add an external participant on Teams */
		msdyn_agentexternalteamsparticipantcontrolenabled: boolean;
		/** Enable agent external participant transfer control for external Microsoft Teams users */
		msdyn_agentexternalteamsparticipanttransfercontrolenabled: boolean;
		/** Enable agent control of the recording */
		msdyn_agentrecordingcontrolsenabled: boolean;
		/** Enable agent control of the transcription */
		msdyn_agenttranscriptioncontrolsenabled: boolean;
		/** Announce the average wait time of the customer in queue */
		msdyn_announceaveragewaittime: boolean;
		/** Announce the position of the customer in queue */
		msdyn_announcepositioninqueue: boolean;
		/** Caller ID Name */
		msdyn_calleridname: string;
		/** Caller ID Phone Number */
		msdyn_calleridphonenumberid: string;
		/** This field is deprecated */
		msdyn_enablepostcallsurvey: boolean;
		/** This field is deprecated. */
		msdyn_enablepostcallsurveyduration: boolean;
		/** Enable Stop Recording and Transcription On Hold */
		msdyn_enablestoprecordingtranscriptiononhold: boolean;
		/** Inbound URL */
		msdyn_inboundurl: string;
		/** Anonymous Caller ID */
		msdyn_isanonymouscallerid: boolean;
		/** Work Stream */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_ocvoicechannelsettingId: string;
		/** Operating Hours */
		msdyn_operatinghoursid: string;
		/** Outbound Call Region Allowlist */
		msdyn_outboundcallregionallowlist: string;
		/** Phone Number */
		msdyn_phonenumberid: string;
		/** This field is deprecated. */
		msdyn_postcallsurveyendtime_UtcDateAndTime: Date;
		/** This field is deprecated */
		msdyn_postcallsurveyfrequency: number;
		/** This field is deprecated. */
		msdyn_postcallsurveystarttime_UtcDateAndTime: Date;
		/** Recording Enabled */
		msdyn_recordingenabled: boolean;
		/** Recording mode */
		msdyn_recordingmode: Array<OptionSet.msdyn_ocvoicechannelsetting.msdyn_recordingmode>;
		/** Show/Hide transcription feature (preview) */
		msdyn_showhidetranscriptionfeaturepreview: boolean;
		/** Indicates whether we skip wait music for workstream IVR or not. */
		msdyn_skipwaitmusicforivr: boolean;
		/** Stop transcription and recording after public switched telephone network transfer */
		msdyn_stoptranscriptionandrecordingafterpstntransfer: boolean;
		/** Stop transcription and recording after Microsoft Teams transfer */
		msdyn_stoptranscriptionandrecordingafterteamstransfer: boolean;
		/** Transcription Enabled */
		msdyn_transcriptionenabled: boolean;
		/** Transcription mode */
		msdyn_transcriptionmode: Array<OptionSet.msdyn_ocvoicechannelsetting.msdyn_transcriptionmode>;
		/** Show transcription by default */
		msdyn_transcriptionshowbydefault: boolean;
		/** Enable bridged transfer for public switched telephony network */
		msdyn_usebridgetransferforpstntransfer: boolean;
		/** Enable bridged transfer for Microsoft Teams */
		msdyn_usebridgetransferforteamstransfer: boolean;
		/** Unique identifier for Authentication settings associated with Voice Channel instance. */
		msdyn_voiceauthenticationsettingsid: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Voice Channel Setting */
		statecode: OptionSet.msdyn_ocvoicechannelsetting.statecode;
		/** Reason for the status of the Voice Channel Setting */
		statuscode: OptionSet.msdyn_ocvoicechannelsetting.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Enable agent control to add an external participant */
			readonly msdyn_agentexternalparticipantcontrolenabled: string;
			/** Enable agent external participant transfer control for external phone numbers */
			readonly msdyn_agentexternalparticipanttransfercontrolenabled: string;
			/** Enable agent control to add an external participant on Teams */
			readonly msdyn_agentexternalteamsparticipantcontrolenabled: string;
			/** Enable agent external participant transfer control for external Microsoft Teams users */
			readonly msdyn_agentexternalteamsparticipanttransfercontrolenabled: string;
			/** Enable agent control of the recording */
			readonly msdyn_agentrecordingcontrolsenabled: string;
			/** Enable agent control of the transcription */
			readonly msdyn_agenttranscriptioncontrolsenabled: string;
			/** Announce the average wait time of the customer in queue */
			readonly msdyn_announceaveragewaittime: string;
			/** Announce the position of the customer in queue */
			readonly msdyn_announcepositioninqueue: string;
			/** Caller ID Name */
			readonly msdyn_calleridname: string;
			/** Caller ID Phone Number */
			readonly msdyn_calleridphonenumberid: string;
			/** This field is deprecated */
			readonly msdyn_enablepostcallsurvey: string;
			/** This field is deprecated. */
			readonly msdyn_enablepostcallsurveyduration: string;
			/** Enable Stop Recording and Transcription On Hold */
			readonly msdyn_enablestoprecordingtranscriptiononhold: string;
			/** Inbound URL */
			readonly msdyn_inboundurl: string;
			/** Anonymous Caller ID */
			readonly msdyn_isanonymouscallerid: string;
			/** Work Stream */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocvoicechannelsettingId: string;
			/** Operating Hours */
			readonly msdyn_operatinghoursid: string;
			/** Outbound Call Region Allowlist */
			readonly msdyn_outboundcallregionallowlist: string;
			/** Phone Number */
			readonly msdyn_phonenumberid: string;
			/** This field is deprecated. */
			readonly msdyn_postcallsurveyendtime_UtcDateAndTime: string;
			/** This field is deprecated */
			readonly msdyn_postcallsurveyfrequency: string;
			/** This field is deprecated. */
			readonly msdyn_postcallsurveystarttime_UtcDateAndTime: string;
			/** Recording Enabled */
			readonly msdyn_recordingenabled: string;
			/** Recording mode */
			readonly msdyn_recordingmode: Array<string>;
			/** Show/Hide transcription feature (preview) */
			readonly msdyn_showhidetranscriptionfeaturepreview: string;
			/** Indicates whether we skip wait music for workstream IVR or not. */
			readonly msdyn_skipwaitmusicforivr: string;
			/** Stop transcription and recording after public switched telephone network transfer */
			readonly msdyn_stoptranscriptionandrecordingafterpstntransfer: string;
			/** Stop transcription and recording after Microsoft Teams transfer */
			readonly msdyn_stoptranscriptionandrecordingafterteamstransfer: string;
			/** Transcription Enabled */
			readonly msdyn_transcriptionenabled: string;
			/** Transcription mode */
			readonly msdyn_transcriptionmode: Array<string>;
			/** Show transcription by default */
			readonly msdyn_transcriptionshowbydefault: string;
			/** Enable bridged transfer for public switched telephony network */
			readonly msdyn_usebridgetransferforpstntransfer: string;
			/** Enable bridged transfer for Microsoft Teams */
			readonly msdyn_usebridgetransferforteamstransfer: string;
			/** Unique identifier for Authentication settings associated with Voice Channel instance. */
			readonly msdyn_voiceauthenticationsettingsid: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Voice Channel Setting */
			readonly statecode: string;
			/** Reason for the status of the Voice Channel Setting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_ocvoicechannelsetting {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_recordingmode {
			/** 192351002 */
			Automatic,
			/** 192351001 */
			Manual,
			/** 192351000 */
			None
		}
		enum msdyn_transcriptionmode {
			/** 192351002 */
			Automatic,
			/** 192351001 */
			Manual,
			/** 192351000 */
			None
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}