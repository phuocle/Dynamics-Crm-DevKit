//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class flowmachinenetworkApi {
		/**
		* DynamicsCrm.DevKit flowmachinenetworkApi
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
		readonly ComponentState: OptionSet.flowmachinenetwork.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of a Credential entity providing user name and password to be used in hybrid Entra join configurations to join machines to the domain. */
		CredentialId: string;
		description: string;
		/** The DNS name of the Active Directory domain that will be used in hybrid Entra join configurations. */
		DomainName: string;
		/** Unique identifier for the secret environment variable holding the password used to join machines to the domain in hybrid Entra join configurations. */
		DomainPassword: string;
		/** Unique identifier for the environment variable holding the username used to join machines to the domain in hybrid Entra join configurations. */
		DomainUsername: string;
		/** Unique identifier for entity instances */
		flowmachinenetworkId: string;
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
		/** The name of the custom entity. */
		name: string;
		/** If provided, the organizational unit (OU) that will be used in hybrid Entra join configurations. */
		OrganizationalUnit: string;
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
		/** The provisioning state of the flow machine network. */
		ProvisioningState: OptionSet.flowmachinenetwork.ProvisioningState;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Flow Machine Network */
		statecode: OptionSet.flowmachinenetwork.statecode;
		/** Reason for the status of the Flow Machine Network */
		statuscode: OptionSet.flowmachinenetwork.statuscode;
		/** Flow Machine Network Error Message. */
		statuserrormessage: string;
		/** The subnet associated to the Flow machine network. */
		subnet: string;
		/** The Flow machine network supported scenario. */
		SupportedScenario: OptionSet.flowmachinenetwork.SupportedScenario;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** The Flow machine network type. */
		type: OptionSet.flowmachinenetwork.type;
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
			/** Unique identifier of a Credential entity providing user name and password to be used in hybrid Entra join configurations to join machines to the domain. */
			readonly CredentialId: string;
			readonly description: string;
			/** The DNS name of the Active Directory domain that will be used in hybrid Entra join configurations. */
			readonly DomainName: string;
			/** Unique identifier for the secret environment variable holding the password used to join machines to the domain in hybrid Entra join configurations. */
			readonly DomainPassword: string;
			/** Unique identifier for the environment variable holding the username used to join machines to the domain in hybrid Entra join configurations. */
			readonly DomainUsername: string;
			/** Unique identifier for entity instances */
			readonly flowmachinenetworkId: string;
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
			/** The name of the custom entity. */
			readonly name: string;
			/** If provided, the organizational unit (OU) that will be used in hybrid Entra join configurations. */
			readonly OrganizationalUnit: string;
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
			/** The provisioning state of the flow machine network. */
			readonly ProvisioningState: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Flow Machine Network */
			readonly statecode: string;
			/** Reason for the status of the Flow Machine Network */
			readonly statuscode: string;
			/** Flow Machine Network Error Message. */
			readonly statuserrormessage: string;
			/** The subnet associated to the Flow machine network. */
			readonly subnet: string;
			/** The Flow machine network supported scenario. */
			readonly SupportedScenario: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The Flow machine network type. */
			readonly type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowmachinenetwork {
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
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 3 */
			Error,
			/** 2 */
			Inactive
		}
		enum SupportedScenario {
			/** 1 */
			HostedMachineGroup,
			/** 3 */
			HostedMachineGroupdAndRpaBox,
			/** 2 */
			RpaBox
		}
		enum type {
			/** 100000000 */
			azureAdJoin,
			/** 100000001 */
			hybridAdJoin
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