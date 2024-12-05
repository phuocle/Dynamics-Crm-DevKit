//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachineApi {
		/**
		* DynamicsCrm.DevKit flowmachineApi
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
		/** Version installed on the machine */
		AgentVersion: string;
		/** For Internal Use Only. */
		ConnectivityConfiguration: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the Flow Machine. */
		Description: string;
		/** Group of this Flow Machine. */
		FlowMachineGroupId: string;
		/** Unique identifier for entity instances */
		readonly flowmachineId: string;
		/** Unique identifier for Flow Machine Image Version associated with Flow Machine. */
		FlowMachineImageVersionId: string;
		/** Unique identifier for Flow Machine Network associated with Flow Machine. */
		FlowMachineNetworkId: string;
		/** Hosted flow machine error. */
		HostedMachineError: string;
		/** The state of the machine if it is hosted. */
		HostedMachineState: OptionSet.flowmachine.HostedMachineState;
		/** Flow Machine Hosting Type. */
		HostingType: OptionSet.flowmachine.HostingType;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Delivery status of the machine's group's key. */
		KeyDeliveryStatus: OptionSet.flowmachine.KeyDeliveryStatus;
		/** Delivery date of the latest group key. */
		KeyReceivedDate_UtcDateAndTime: Date;
		/** Last date at which a heartbeat call was received from the machine. */
		LastHeartbeatDate_UtcDateAndTime: Date;
		/** Indicates the last known picture-in-picture feature support for the target record. Default value is Unknown. */
		LastKnownPictureInPictureSupport: OptionSet.flowmachine.LastKnownPictureInPictureSupport;
		/** For Internal Use Only. */
		MachineMetadata: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The Name of the Flow Machine. */
		name: string;
		/** Date and time of when the machine has been flagged as overcapacity. */
		OvercapacitySince_UtcDateAndTime: Date;
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
		/** Maximum Number of session in parallel. */
		SessionCapacity: number;
		/** Time at which the snapshot capture started for a Hosted Hachine */
		SnapshotStartedAt_UtcDateAndTime: Date;
		/** Status of the Flow Machine */
		statecode: OptionSet.flowmachine.statecode;
		/** Reason for the status of the Flow Machine */
		statuscode: OptionSet.flowmachine.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Version installed on the machine */
			readonly AgentVersion: string;
			/** For Internal Use Only. */
			readonly ConnectivityConfiguration: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the Flow Machine. */
			readonly Description: string;
			/** Group of this Flow Machine. */
			readonly FlowMachineGroupId: string;
			/** Unique identifier for entity instances */
			readonly flowmachineId: string;
			/** Unique identifier for Flow Machine Image Version associated with Flow Machine. */
			readonly FlowMachineImageVersionId: string;
			/** Unique identifier for Flow Machine Network associated with Flow Machine. */
			readonly FlowMachineNetworkId: string;
			/** Hosted flow machine error. */
			readonly HostedMachineError: string;
			/** The state of the machine if it is hosted. */
			readonly HostedMachineState: string;
			/** Flow Machine Hosting Type. */
			readonly HostingType: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Delivery status of the machine's group's key. */
			readonly KeyDeliveryStatus: string;
			/** Delivery date of the latest group key. */
			readonly KeyReceivedDate_UtcDateAndTime: string;
			/** Last date at which a heartbeat call was received from the machine. */
			readonly LastHeartbeatDate_UtcDateAndTime: string;
			/** Indicates the last known picture-in-picture feature support for the target record. Default value is Unknown. */
			readonly LastKnownPictureInPictureSupport: string;
			/** For Internal Use Only. */
			readonly MachineMetadata: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The Name of the Flow Machine. */
			readonly name: string;
			/** Date and time of when the machine has been flagged as overcapacity. */
			readonly OvercapacitySince_UtcDateAndTime: string;
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
			/** Maximum Number of session in parallel. */
			readonly SessionCapacity: string;
			/** Time at which the snapshot capture started for a Hosted Hachine */
			readonly SnapshotStartedAt_UtcDateAndTime: string;
			/** Status of the Flow Machine */
			readonly statecode: string;
			/** Reason for the status of the Flow Machine */
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
	namespace flowmachine {
		enum HostedMachineState {
			/** 0 */
			Disabled,
			/** 1 */
			Enabled,
			/** 2 */
			Error
		}
		enum HostingType {
			/** 2 */
			CloudPc,
			/** 0 */
			Customer,
			/** 1 */
			Hosted
		}
		enum KeyDeliveryStatus {
			/** 1 */
			Default,
			/** 3 */
			KeyExpired,
			/** 2 */
			PendingNewKey
		}
		enum LastKnownPictureInPictureSupport {
			/** 1 */
			Disabled,
			/** 2 */
			Enabled,
			/** 0 */
			Unknown
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive,
			/** 2 */
			Maintenance
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 9 */
			Disabled,
			/** 5 */
			DrainMode,
			/** 8 */
			Error,
			/** 13 */
			HostedMachineOvercapacity,
			/** 14 */
			HostedMachineOvercapacityDeleted,
			/** 15 */
			HostedMachineOvercapacityDisabled,
			/** 2 */
			Inactive,
			/** 4 */
			ManualMaintenance,
			/** 12 */
			ProvisionedWithError,
			/** 10 */
			Provisioning,
			/** 11 */
			RequiresGroupKey,
			/** 3 */
			RequiresReconnection,
			/** 7 */
			Temporary,
			/** 6 */
			ToDelete
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