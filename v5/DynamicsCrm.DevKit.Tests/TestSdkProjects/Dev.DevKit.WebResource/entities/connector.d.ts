//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formconnector_Information {
		interface Tabs {
		}
		interface Body {
			/** Required logical name of the Connector */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formconnector_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form connector_Information */
		Body: DevKit.Formconnector_Information.Body;
	}
	export class connectorApi {
		/**
		* DynamicsCrm.DevKit connectorApi
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
		/** Capabilities */
		Capabilities: Array<OptionSet.connector.Capabilities> | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.connector.ComponentState | null;
		/** Connection parameters of the Connector */
		ConnectionParameters: string | null;
		/** Connection parameter sets of the Connector */
		ConnectionParameterSets: string | null;
		/** Unique identifier for entity instances */
		connectorId: string | null;
		/** For internal use only. */
		readonly ConnectorIdUnique: string | null;
		/** Internal Connector Id */
		ConnectorInternalId: string | null;
		/** Connector Type */
		ConnectorType: OptionSet.connector.ConnectorType | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Custom Code Content for the Connector */
		CustomCodeBlobContent: string | null;
		/** Description of the Connector */
		Description: string | null;
		/** Display Name of the Connector */
		DisplayName: string | null;
		/** Icon for the Connector */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		IconBlob: string | null;
		IconBlob_Timestamp: number | null;
		IconBlob_URL: string | null;
		readonly IconBlobId: string | null;
		/** Connector Icon Branding Color */
		IconBrandColor: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Interfaces of the Connector */
		Interfaces: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Tells whether the component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Required logical name of the Connector */
		Name: string | null;
		/** OpenApi Definition supported by Connector */
		OpenApiDefinition: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
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
		/** Apim Policy Template Instances */
		PolicyTemplateInstances: string | null;
		/** A list of operations to which the custom code will apply to. */
		ScriptOperations: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Connector */
		statecode: OptionSet.connector.statecode | null;
		/** Reason for the status of the Connector */
		statuscode: OptionSet.connector.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
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
			/** Capabilities */
			readonly Capabilities: Array<string>;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Connection parameters of the Connector */
			readonly ConnectionParameters: string;
			/** Connection parameter sets of the Connector */
			readonly ConnectionParameterSets: string;
			/** Unique identifier for entity instances */
			readonly connectorId: string;
			/** For internal use only. */
			readonly ConnectorIdUnique: string;
			/** Internal Connector Id */
			readonly ConnectorInternalId: string;
			/** Connector Type */
			readonly ConnectorType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Custom Code Content for the Connector */
			readonly CustomCodeBlobContent: string;
			/** Description of the Connector */
			readonly Description: string;
			/** Display Name of the Connector */
			readonly DisplayName: string;
			/** Icon for the Connector */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly IconBlob: string;
			readonly IconBlob_Timestamp: string;
			readonly IconBlob_URL: string;
			readonly IconBlobId: string;
			/** Connector Icon Branding Color */
			readonly IconBrandColor: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Interfaces of the Connector */
			readonly Interfaces: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Tells whether the component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Required logical name of the Connector */
			readonly Name: string;
			/** OpenApi Definition supported by Connector */
			readonly OpenApiDefinition: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
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
			/** Apim Policy Template Instances */
			readonly PolicyTemplateInstances: string;
			/** A list of operations to which the custom code will apply to. */
			readonly ScriptOperations: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Connector */
			readonly statecode: string;
			/** Reason for the status of the Connector */
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
	namespace connector {
		enum Capabilities {
			/** actions = 118690005*/
			actions = 118690005,
			/** blob = 118690002*/
			blob = 118690002,
			/** cloud = 118690004*/
			cloud = 118690004,
			/** composite = 118690000*/
			composite = 118690000,
			/** gateway = 118690003*/
			gateway = 118690003,
			/** tabular = 118690001*/
			tabular = 118690001
		}
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
		enum ConnectorType {
			/** ConnectionLess = 2*/
			ConnectionLess = 2,
			/** CustomConnector = 1*/
			CustomConnector = 1,
			/** NotSpecified = 0*/
			NotSpecified = 0
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