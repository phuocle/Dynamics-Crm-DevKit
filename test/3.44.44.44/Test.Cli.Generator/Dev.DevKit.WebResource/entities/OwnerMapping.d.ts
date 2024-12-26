//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OwnerMappingApi {
		/**
		* DynamicsCrm.DevKit OwnerMappingApi
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
		readonly ComponentState: OptionSet.OwnerMapping.ComponentState;
		/** Unique identifier of the user who created the owner mapping. */
		readonly CreatedBy: string;
		/** Date and time when the owner mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the ownermapping. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the data map with which the owner mapping is associated. */
		ImportMapId: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the lookup mapping. */
		readonly ModifiedBy: string;
		/** Date and time when the owner mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the ownermapping. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the owner mapping. */
		OwnerMappingId: string;
		/** Unique identifier of the OwnerMapping. */
		readonly OwnerMappingIdUnique: string;
		/** Code that indicates whether the owner mapping has to be processed */
		ProcessCode: OptionSet.OwnerMapping.ProcessCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Source user name that has to be replaced */
		SourceSystemUserName: string;
		/** Source user value for source Microsoft Dynamics 365 user link. */
		SourceUserValueForSourceCRMUserLink: string;
		/** Status of the owner mapping. */
		readonly StateCode: OptionSet.OwnerMapping.StateCode;
		/** Reason for the status of the owner mapping. */
		StatusCode: OptionSet.OwnerMapping.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Microsoft Dynamics 365 logon name with which the source user name should be replaced. */
		TargetSystemUserDomainName: string;
		/** Unique identifier of the Microsoft Dynamics 365 user. */
		TargetSystemUserId: string;
		/** Microsoft Dynamics CRM user. */
		TargetUserValueForSourceCRMUserLink: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the owner mapping. */
			readonly CreatedBy: string;
			/** Date and time when the owner mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the ownermapping. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the data map with which the owner mapping is associated. */
			readonly ImportMapId: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the lookup mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the owner mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the ownermapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the owner mapping. */
			readonly OwnerMappingId: string;
			/** Unique identifier of the OwnerMapping. */
			readonly OwnerMappingIdUnique: string;
			/** Code that indicates whether the owner mapping has to be processed */
			readonly ProcessCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Source user name that has to be replaced */
			readonly SourceSystemUserName: string;
			/** Source user value for source Microsoft Dynamics 365 user link. */
			readonly SourceUserValueForSourceCRMUserLink: string;
			/** Status of the owner mapping. */
			readonly StateCode: string;
			/** Reason for the status of the owner mapping. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Microsoft Dynamics 365 logon name with which the source user name should be replaced. */
			readonly TargetSystemUserDomainName: string;
			/** Unique identifier of the Microsoft Dynamics 365 user. */
			readonly TargetSystemUserId: string;
			/** Microsoft Dynamics CRM user. */
			readonly TargetUserValueForSourceCRMUserLink: string;
		}
	}
}
declare namespace OptionSet {
	namespace OwnerMapping {
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
		enum ProcessCode {
			/** 2 */
			Ignore,
			/** 3 */
			Internal,
			/** 1 */
			Process
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
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