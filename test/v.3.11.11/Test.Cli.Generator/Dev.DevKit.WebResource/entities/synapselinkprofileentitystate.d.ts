﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formsynapselinkprofileentitystate_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formsynapselinkprofileentitystate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form synapselinkprofileentitystate_Information */
		Body: DevKit.Formsynapselinkprofileentitystate_Information.Body;
		/** The Process of form synapselinkprofileentitystate_Information */
		Process: DevKit.Formsynapselinkprofileentitystate_Information.Process;
		/** The SidePanes of form synapselinkprofileentitystate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formsynapselinkprofileentitystate_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formsynapselinkprofileentitystate_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form synapselinkprofileentitystate_Information2 */
		Body: DevKit.Formsynapselinkprofileentitystate_Information2.Body;
		/** The Process of form synapselinkprofileentitystate_Information2 */
		Process: DevKit.Formsynapselinkprofileentitystate_Information2.Process;
		/** The SidePanes of form synapselinkprofileentitystate_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class synapselinkprofileentitystateApi {
		/**
		* DynamicsCrm.DevKit synapselinkprofileentitystateApi
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
		/** Name of the entity */
		EntityName1: string;
		/** Type of the entity */
		EntityType: OptionSet.synapselinkprofileentitystate.EntityType;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Initial sync data completed time */
		InitialSyncDataCompletedTime_UtcDateAndTime: Date;
		/** Initial sync metadata created time */
		InitialSyncMetadataCreatedTime_UtcDateAndTime: Date;
		/** Initial sync process completed time */
		InitialSyncProcessCompletedTime_UtcDateAndTime: Date;
		/** Initial sync state */
		InitialSyncState: OptionSet.synapselinkprofileentitystate.InitialSyncState;
		/** Last synced data time */
		LastSyncedDataTime_UtcDateAndTime: Date;
		/** Last synced data version */
		LastSyncedDataVersion: string;
		/** Last synced metadata time */
		LastSyncedMetadataTime_UtcDateAndTime: Date;
		/** Last synced metadata version */
		LastSyncedMetadataVersion: string;
		/** Metadata state */
		MetadataState: OptionSet.synapselinkprofileentitystate.MetadataState;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity State. */
		profile: string;
		/** Unique identifier for Synapse Link Profile Entity associated with Synapse Link Profile Entity State. */
		profileentity: string;
		/** Status of the Synapse Link Profile Entity State */
		statecode: OptionSet.synapselinkprofileentitystate.statecode;
		/** Reason for the status of the Synapse Link Profile Entity State */
		statuscode: OptionSet.synapselinkprofileentitystate.statuscode;
		/** Unique identifier for entity instances */
		synapselinkprofileentitystateId: string;
		/** Synapse table creation state */
		SynapseTableCreationState: OptionSet.synapselinkprofileentitystate.SynapseTableCreationState;
		/** Entity sync state */
		SyncState: OptionSet.synapselinkprofileentitystate.SyncState;
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
			/** Name of the entity */
			readonly EntityName1: string;
			/** Type of the entity */
			readonly EntityType: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Initial sync data completed time */
			readonly InitialSyncDataCompletedTime_UtcDateAndTime: string;
			/** Initial sync metadata created time */
			readonly InitialSyncMetadataCreatedTime_UtcDateAndTime: string;
			/** Initial sync process completed time */
			readonly InitialSyncProcessCompletedTime_UtcDateAndTime: string;
			/** Initial sync state */
			readonly InitialSyncState: string;
			/** Last synced data time */
			readonly LastSyncedDataTime_UtcDateAndTime: string;
			/** Last synced data version */
			readonly LastSyncedDataVersion: string;
			/** Last synced metadata time */
			readonly LastSyncedMetadataTime_UtcDateAndTime: string;
			/** Last synced metadata version */
			readonly LastSyncedMetadataVersion: string;
			/** Metadata state */
			readonly MetadataState: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier for Synapse Link Profile associated with Synapse Link Profile Entity State. */
			readonly profile: string;
			/** Unique identifier for Synapse Link Profile Entity associated with Synapse Link Profile Entity State. */
			readonly profileentity: string;
			/** Status of the Synapse Link Profile Entity State */
			readonly statecode: string;
			/** Reason for the status of the Synapse Link Profile Entity State */
			readonly statuscode: string;
			/** Unique identifier for entity instances */
			readonly synapselinkprofileentitystateId: string;
			/** Synapse table creation state */
			readonly SynapseTableCreationState: string;
			/** Entity sync state */
			readonly SyncState: string;
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
	namespace synapselinkprofileentitystate {
		enum EntityType {
			/** 0 */
			Requested
		}
		enum InitialSyncState {
			/** 4 */
			Completed,
			/** 8 */
			CompletedWithFailures,
			/** 2 */
			InProgress,
			/** 0 */
			None,
			/** 1 */
			NotStarted,
			/** 32 */
			Paused,
			/** 64 */
			PostProcessing,
			/** 16 */
			RequestedInitialData
		}
		enum MetadataState {
			/** 8 */
			Created,
			/** 16 */
			Failure,
			/** 2 */
			MetadataCreating,
			/** 0 */
			None,
			/** 1 */
			NotCreated,
			/** 4 */
			RelationshipCreating
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
		enum SynapseTableCreationState {
			/** 2 */
			Completed,
			/** 3 */
			Failed,
			/** 1 */
			InProgress,
			/** 0 */
			NotStarted
		}
		enum SyncState {
			/** 4 */
			Completed,
			/** 8 */
			CompletedWithFailures,
			/** 2 */
			InProgress,
			/** 0 */
			None,
			/** 1 */
			NotStarted,
			/** 32 */
			Paused,
			/** 64 */
			PostProcessing,
			/** 16 */
			RequestedInitialData
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}