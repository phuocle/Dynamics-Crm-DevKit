//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class flowmachineApi {
		/**
		* DynamicsCrm.DevKit flowmachineApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Version installed on the machine */
		AgentVersion: string | null;
		/** For Internal Use Only. */
		ConnectivityConfiguration: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the Flow Machine. */
		Description: string | null;
		/** Group of this Flow Machine. */
		FlowMachineGroupId: string | null;
		/** Unique identifier for entity instances */
		readonly flowmachineId: string | null;
		/** Unique identifier for Flow Machine Image Version associated with Flow Machine. */
		FlowMachineImageVersionId: string | null;
		/** Unique identifier for Flow Machine Network associated with Flow Machine. */
		FlowMachineNetworkId: string | null;
		/** Hosted flow machine error. */
		HostedMachineError: string | null;
		/** The state of the machine if it is hosted. */
		HostedMachineState: OptionSet.flowmachine.HostedMachineState | null;
		/** Flow Machine Hosting Type. */
		HostingType: OptionSet.flowmachine.HostingType | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Delivery status of the machine's group's key. */
		KeyDeliveryStatus: OptionSet.flowmachine.KeyDeliveryStatus | null;
		/** Delivery date of the latest group key. */
		KeyReceivedDate_UtcDateAndTime: Date | null;
		/** Last date at which a heartbeat call was received from the machine. */
		LastHeartbeatDate_UtcDateAndTime: Date | null;
		/** Indicates the last known picture-in-picture feature support for the target record. Default value is Unknown. */
		LastKnownPictureInPictureSupport: OptionSet.flowmachine.LastKnownPictureInPictureSupport | null;
		/** For Internal Use Only. */
		MachineMetadata: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The Name of the Flow Machine. */
		name: string | null;
		/** Date and time of when the machine has been flagged as overcapacity. */
		OvercapacitySince_UtcDateAndTime: Date | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Maximum Number of session in parallel. */
		SessionCapacity: number | null;
		/** Time at which the snapshot capture started for a Hosted Hachine */
		SnapshotStartedAt_UtcDateAndTime: Date | null;
		/** Status of the Flow Machine */
		statecode: OptionSet.flowmachine.statecode | null;
		/** Reason for the status of the Flow Machine */
		statuscode: OptionSet.flowmachine.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Disabled = 0*/
			Disabled = 0,
			/** Enabled = 1*/
			Enabled = 1,
			/** Error = 2*/
			Error = 2
		}
		enum HostingType {
			/** CloudPc = 2*/
			CloudPc = 2,
			/** Customer = 0*/
			Customer = 0,
			/** Hosted = 1*/
			Hosted = 1
		}
		enum KeyDeliveryStatus {
			/** Default = 1*/
			Default = 1,
			/** KeyExpired = 3*/
			KeyExpired = 3,
			/** PendingNewKey = 2*/
			PendingNewKey = 2
		}
		enum LastKnownPictureInPictureSupport {
			/** Disabled = 1*/
			Disabled = 1,
			/** Enabled = 2*/
			Enabled = 2,
			/** Unknown = 0*/
			Unknown = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1,
			/** Maintenance = 2*/
			Maintenance = 2
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Disabled = 9*/
			Disabled = 9,
			/** DrainMode = 5*/
			DrainMode = 5,
			/** Error = 8*/
			Error = 8,
			/** HostedMachineOvercapacity = 13*/
			HostedMachineOvercapacity = 13,
			/** HostedMachineOvercapacityDeleted = 14*/
			HostedMachineOvercapacityDeleted = 14,
			/** HostedMachineOvercapacityDisabled = 15*/
			HostedMachineOvercapacityDisabled = 15,
			/** Inactive = 2*/
			Inactive = 2,
			/** ManualMaintenance = 4*/
			ManualMaintenance = 4,
			/** ProvisionedWithError = 12*/
			ProvisionedWithError = 12,
			/** Provisioning = 10*/
			Provisioning = 10,
			/** RequiresGroupKey = 11*/
			RequiresGroupKey = 11,
			/** RequiresReconnection = 3*/
			RequiresReconnection = 3,
			/** Temporary = 7*/
			Temporary = 7,
			/** ToDelete = 6*/
			ToDelete = 6
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}