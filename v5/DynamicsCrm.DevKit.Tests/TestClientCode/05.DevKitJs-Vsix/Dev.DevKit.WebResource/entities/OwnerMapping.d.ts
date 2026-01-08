//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OwnerMappingApi {
		/**
		* DynamicsCrm.DevKit OwnerMappingApi
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
		readonly ComponentState: OptionSet.OwnerMapping.ComponentState | null;
		/** Unique identifier of the user who created the owner mapping. */
		readonly CreatedBy: string | null;
		/** Date and time when the owner mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the ownermapping. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the data map with which the owner mapping is associated. */
		ImportMapId: string | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the lookup mapping. */
		readonly ModifiedBy: string | null;
		/** Date and time when the owner mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the ownermapping. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the owner mapping. */
		OwnerMappingId: string | null;
		/** Unique identifier of the OwnerMapping. */
		readonly OwnerMappingIdUnique: string | null;
		/** Code that indicates whether the owner mapping has to be processed */
		ProcessCode: OptionSet.OwnerMapping.ProcessCode | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Source user name that has to be replaced */
		SourceSystemUserName: string | null;
		/** Source user value for source Microsoft Dynamics 365 user link. */
		SourceUserValueForSourceCRMUserLink: string | null;
		/** Status of the owner mapping. */
		readonly StateCode: OptionSet.OwnerMapping.StateCode | null;
		/** Reason for the status of the owner mapping. */
		StatusCode: OptionSet.OwnerMapping.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Microsoft Dynamics 365 logon name with which the source user name should be replaced. */
		TargetSystemUserDomainName: string | null;
		/** Unique identifier of the Microsoft Dynamics 365 user. */
		TargetSystemUserId: string | null;
		/** Microsoft Dynamics CRM user. */
		TargetUserValueForSourceCRMUserLink: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum ProcessCode {
			/** Ignore = 2*/
			Ignore = 2,
			/** Internal = 3*/
			Internal = 3,
			/** Process = 1*/
			Process = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0
		}
		enum StatusCode {
			/** Active = 0*/
			Active = 0
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