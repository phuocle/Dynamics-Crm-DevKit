//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachinegroupApi {
		/**
		* DynamicsCrm.DevKit flowmachinegroupApi
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
		readonly ComponentState: OptionSet.flowmachinegroup.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Description of this Group of Flow Machine */
		Description: string;
		/** Setting for domain joining of machines in this group. */
		DomainSetting: OptionSet.flowmachinegroup.DomainSetting;
		/** Internal Use Only. */
		FlowGroupType: OptionSet.flowmachinegroup.FlowGroupType;
		/** Unique identifier for entity instances */
		readonly flowmachinegroupId: string;
		/** Unique identifier for Flow Machine Image associated with Flow Machine Group. */
		flowmachineimage: string;
		/** Unique identifier for the Flow Machine Network associated with the Flow Machine Group. */
		flowmachinenetwork: string;
		/** Internal Use Only. */
		GroupMetadata: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Creation date for group's primary key. */
		KeyCreationDate_TimezoneDateAndTime: Date;
		/** Grace period for machines and connections to update before a certificate rotation. In minutes. */
		KeyExpiryGracePeriod: number;
		KeyValidityPeriod: number;
		/** Management Type. */
		ManagementType: OptionSet.flowmachinegroup.ManagementType;
		/** Maximum managed machine count. Only for use in managed machine groups. */
		MaxManagedMachineCount: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
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
		/** User who initiated the last password change. */
		PasswordChangedBy: string;
		/** Date for latest password change. */
		PasswordChangedDate_UtcDateAndTime: Date;
		/** Indicates the preferred queuing type in a given machine group */
		PreferredQueuingType: OptionSet.flowmachinegroup.PreferredQueuingType;
		/** Internal Use Only */
		PrimaryKeyPackage: string;
		/** Internal Use Only. */
		PrimaryPublicKey: string;
		ProvisioningError: string;
		/** The provisioning state of the managed machine group. */
		ProvisioningState: OptionSet.flowmachinegroup.ProvisioningState;
		/** User who initiated a group key rotation. */
		RotationStartedBy: string;
		/** Internal Use Only. */
		SecondaryKeyPackage: string;
		/** Internal Use Only. */
		SecondaryPublicKey: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Flow Machine Group */
		statecode: OptionSet.flowmachinegroup.statecode;
		/** Reason for the status of the Flow Machine Group */
		statuscode: OptionSet.flowmachinegroup.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Indicates whether we will try to reuse non unlocked Windows sessions. Default value is No. */
		trytoreusewindowssession: boolean;
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
			/** Description of this Group of Flow Machine */
			readonly Description: string;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum DomainSetting {
			/** 1 */
			AadJoined,
			/** 2 */
			HybridEntraJoined,
			/** 0 */
			None
		}
		enum FlowGroupType {
			/** 545940002 */
			Default,
			/** 545940000 */
			Keyless,
			/** 545940001 */
			Standard
		}
		enum ManagementType {
			/** 0 */
			Customer,
			/** 1 */
			Managed
		}
		enum PreferredQueuingType {
			/** 1 */
			ExtendedQueuePrioritization,
			/** 0 */
			FIFO
		}
		enum ProvisioningState {
			/** 0 */
			Created,
			/** 3 */
			Error,
			/** 2 */
			Provisioned,
			/** 1 */
			Provisioning
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
			/** 7 */
			HmgCmkOperation,
			/** 5 */
			HmgIslandMove,
			/** 2 */
			Inactive,
			/** 4 */
			KeyExpired,
			/** 3 */
			ManualMaintenance,
			/** 6 */
			Quarantined
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