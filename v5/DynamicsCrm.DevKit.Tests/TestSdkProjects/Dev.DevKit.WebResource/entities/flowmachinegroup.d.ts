//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class flowmachinegroupApi {
		/**
		* DynamicsCrm.DevKit flowmachinegroupApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.flowmachinegroup.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of this Group of Flow Machine */
		Description: string | null;
		/** If set, the date on which the machines of the group will be disconnected. */
		DisconnectionPlannedOn_UtcDateAndTime: Date | null;
		/** Setting for domain joining of machines in this group. */
		DomainSetting: OptionSet.flowmachinegroup.DomainSetting | null;
		/** Internal Use Only. */
		FlowGroupType: OptionSet.flowmachinegroup.FlowGroupType | null;
		/** Unique identifier for entity instances */
		readonly flowmachinegroupId: string | null;
		/** Unique identifier for Flow Machine Image associated with Flow Machine Group. */
		flowmachineimage: string | null;
		/** Unique identifier for the Flow Machine Network associated with the Flow Machine Group. */
		flowmachinenetwork: string | null;
		/** Internal Use Only. */
		GroupMetadata: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Creation date for group's primary key. */
		KeyCreationDate_TimezoneDateAndTime: Date | null;
		/** Grace period for machines and connections to update before a certificate rotation. In minutes. */
		KeyExpiryGracePeriod: number | null;
		KeyValidityPeriod: number | null;
		/** Last date at which a run has targeted the group. */
		LastRunDate_UtcDateAndTime: Date | null;
		/** Managed Version. */
		ManagedVersion: OptionSet.flowmachinegroup.ManagedVersion | null;
		/** Management Type. */
		ManagementType: OptionSet.flowmachinegroup.ManagementType | null;
		/** Maximum managed machine count. Only for use in managed machine groups. */
		MaxManagedMachineCount: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
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
		/** User who initiated the last password change. */
		PasswordChangedBy: string | null;
		/** Date for latest password change. */
		PasswordChangedDate_UtcDateAndTime: Date | null;
		/** Indicates the preferred queuing type in a given machine group */
		PreferredQueuingType: OptionSet.flowmachinegroup.PreferredQueuingType | null;
		/** Internal Use Only */
		PrimaryKeyPackage: string | null;
		/** Internal Use Only. */
		PrimaryPublicKey: string | null;
		ProvisioningError: string | null;
		/** The provisioning state of the managed machine group. */
		ProvisioningState: OptionSet.flowmachinegroup.ProvisioningState | null;
		/** User who initiated a group key rotation. */
		RotationStartedBy: string | null;
		/** Internal Use Only. */
		SecondaryKeyPackage: string | null;
		/** Internal Use Only. */
		SecondaryPublicKey: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Flow Machine Group */
		statecode: OptionSet.flowmachinegroup.statecode | null;
		/** Reason for the status of the Flow Machine Group */
		statuscode: OptionSet.flowmachinegroup.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Indicates whether we will try to reuse non unlocked Windows sessions. Default value is No. */
		trytoreusewindowssession: boolean | null;
		/** Flow Machine Group Usage Type. */
		UsageType: OptionSet.flowmachinegroup.UsageType | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Description of this Group of Flow Machine */
			readonly Description: string;
			/** If set, the date on which the machines of the group will be disconnected. */
			readonly DisconnectionPlannedOn_UtcDateAndTime: string;
			/** Setting for domain joining of machines in this group. */
			readonly DomainSetting: string;
			/** Internal Use Only. */
			readonly FlowGroupType: string;
			/** Unique identifier for entity instances */
			readonly flowmachinegroupId: string;
			/** Unique identifier for Flow Machine Image associated with Flow Machine Group. */
			readonly flowmachineimage: string;
			/** Unique identifier for the Flow Machine Network associated with the Flow Machine Group. */
			readonly flowmachinenetwork: string;
			/** Internal Use Only. */
			readonly GroupMetadata: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Creation date for group's primary key. */
			readonly KeyCreationDate_TimezoneDateAndTime: string;
			/** Grace period for machines and connections to update before a certificate rotation. In minutes. */
			readonly KeyExpiryGracePeriod: string;
			readonly KeyValidityPeriod: string;
			/** Last date at which a run has targeted the group. */
			readonly LastRunDate_UtcDateAndTime: string;
			/** Managed Version. */
			readonly ManagedVersion: string;
			/** Management Type. */
			readonly ManagementType: string;
			/** Maximum managed machine count. Only for use in managed machine groups. */
			readonly MaxManagedMachineCount: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
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
			/** User who initiated the last password change. */
			readonly PasswordChangedBy: string;
			/** Date for latest password change. */
			readonly PasswordChangedDate_UtcDateAndTime: string;
			/** Indicates the preferred queuing type in a given machine group */
			readonly PreferredQueuingType: string;
			/** Internal Use Only */
			readonly PrimaryKeyPackage: string;
			/** Internal Use Only. */
			readonly PrimaryPublicKey: string;
			readonly ProvisioningError: string;
			/** The provisioning state of the managed machine group. */
			readonly ProvisioningState: string;
			/** User who initiated a group key rotation. */
			readonly RotationStartedBy: string;
			/** Internal Use Only. */
			readonly SecondaryKeyPackage: string;
			/** Internal Use Only. */
			readonly SecondaryPublicKey: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Flow Machine Group */
			readonly statecode: string;
			/** Reason for the status of the Flow Machine Group */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Indicates whether we will try to reuse non unlocked Windows sessions. Default value is No. */
			readonly trytoreusewindowssession: string;
			/** Flow Machine Group Usage Type. */
			readonly UsageType: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowmachinegroup {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum DomainSetting {
			/** AadJoined = 1*/
			AadJoined = 1,
			/** HybridEntraJoined = 2*/
			HybridEntraJoined = 2,
			/** None = 0*/
			None = 0
		}
		enum FlowGroupType {
			/** Default = 545940002*/
			Default = 545940002,
			/** Keyless = 545940000*/
			Keyless = 545940000,
			/** Standard = 545940001*/
			Standard = 545940001
		}
		enum ManagedVersion {
			/** V1 = 1*/
			V1 = 1,
			/** V2 = 2*/
			V2 = 2
		}
		enum ManagementType {
			/** Customer = 0*/
			Customer = 0,
			/** Managed = 1*/
			Managed = 1,
			/** Shared = 2*/
			Shared = 2
		}
		enum PreferredQueuingType {
			/** ExtendedQueuePrioritization = 1*/
			ExtendedQueuePrioritization = 1,
			/** FIFO = 0*/
			FIFO = 0
		}
		enum ProvisioningState {
			/** Created = 0*/
			Created = 0,
			/** Error = 3*/
			Error = 3,
			/** Provisioned = 2*/
			Provisioned = 2,
			/** Provisioning = 1*/
			Provisioning = 1
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
			/** HmgCmkOperation = 7*/
			HmgCmkOperation = 7,
			/** HmgIslandMove = 5*/
			HmgIslandMove = 5,
			/** Inactive = 2*/
			Inactive = 2,
			/** KeyExpired = 4*/
			KeyExpired = 4,
			/** ManualMaintenance = 3*/
			ManualMaintenance = 3,
			/** Quarantined = 6*/
			Quarantined = 6
		}
		enum UsageType {
			/** CuaOnly = 1*/
			CuaOnly = 1,
			/** RpaAndCua = 2*/
			RpaAndCua = 2,
			/** RpaOnly = 0*/
			RpaOnly = 0
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