//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnectionInstance_Information {
		interface Tabs {
		}
		interface Body {
			/** The Id of the Connection in Api Hub */
			ConnectionInternalId: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class FormConnectionInstance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ConnectionInstance_Information */
		Body: DevKit.FormConnectionInstance_Information.Body;
	}
	export class ConnectionInstanceApi {
		/**
		* DynamicsCrm.DevKit ConnectionInstanceApi
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
		/** The name for the account */
		AccountName: string | null;
		/** Whether or not allow sharing is enabled for the connection */
		AllowSharing: boolean | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ConnectionInstance.ComponentState | null;
		/** The display name of the Connection as seen by the user. */
		ConnectionInstanceDisplayName: string | null;
		/** Unique identifier for entity instances */
		ConnectionInstanceId: string | null;
		/** Connection Instance unique name */
		ConnectionInstanceLogicalName: string | null;
		/** The Id of the Connection in Api Hub */
		ConnectionInternalId: string | null;
		/** The Metadata for the connection */
		ConnectionMetadata: string | null;
		/** The connection parameters and values that will be passed on creation */
		ConnectionParametersConfig: string | null;
		/** The connection parameters set and values that are mainly used in case of multiauth connections */
		ConnectionParameterSetConfig: string | null;
		/** Unique identifier for Connection Reference associated with the Connection Instance. */
		ConnectionReferenceId: string | null;
		/** The status of the connection in ApiHub */
		ConnectionStatus: string | null;
		/** The version of the connection */
		ConnectionVersion: string | null;
		/** The id of the corresponding connector if present in Dataverse */
		ConnectorId: string | null;
		/** The id of the Connector in ApiHub */
		ConnectorInternalId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier for the Credential used in the Connection Instance. */
		CredentialId: string | null;
		/** Icon for the Connection Instance */
		IconUri: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Connection Instance */
		statecode: OptionSet.ConnectionInstance.statecode | null;
		/** Reason for the status of the Connection Instance */
		statuscode: OptionSet.ConnectionInstance.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Links to test the connection */
		TestConnectionLinks: string | null;
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
			/** The name for the account */
			readonly AccountName: string;
			/** Whether or not allow sharing is enabled for the connection */
			readonly AllowSharing: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** The display name of the Connection as seen by the user. */
			readonly ConnectionInstanceDisplayName: string;
			/** Unique identifier for entity instances */
			readonly ConnectionInstanceId: string;
			/** Connection Instance unique name */
			readonly ConnectionInstanceLogicalName: string;
			/** The Id of the Connection in Api Hub */
			readonly ConnectionInternalId: string;
			/** The Metadata for the connection */
			readonly ConnectionMetadata: string;
			/** The connection parameters and values that will be passed on creation */
			readonly ConnectionParametersConfig: string;
			/** The connection parameters set and values that are mainly used in case of multiauth connections */
			readonly ConnectionParameterSetConfig: string;
			/** Unique identifier for Connection Reference associated with the Connection Instance. */
			readonly ConnectionReferenceId: string;
			/** The status of the connection in ApiHub */
			readonly ConnectionStatus: string;
			/** The version of the connection */
			readonly ConnectionVersion: string;
			/** The id of the corresponding connector if present in Dataverse */
			readonly ConnectorId: string;
			/** The id of the Connector in ApiHub */
			readonly ConnectorInternalId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier for the Credential used in the Connection Instance. */
			readonly CredentialId: string;
			/** Icon for the Connection Instance */
			readonly IconUri: string;
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
			/** Status of the Connection Instance */
			readonly statecode: string;
			/** Reason for the status of the Connection Instance */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Links to test the connection */
			readonly TestConnectionLinks: string;
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
	namespace ConnectionInstance {
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
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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