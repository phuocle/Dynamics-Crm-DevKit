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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formconnector_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form connector_Information */
		Body: DevKit.Formconnector_Information.Body;
		/** The Process of form connector_Information */
		Process: DevKit.Formconnector_Information.Process;
		/** The SidePanes of form connector_Information */
		SidePanes: DevKit.SidePanes;
	}
	class connectorApi {
		/**
		* DynamicsCrm.DevKit connectorApi
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
		/** Capability of a connector, i.e. "gateway" means the connector can connect to on-prem gateway */
		Capabilities: Array<OptionSet.connector.Capabilities>;
		/** For internal use only. */
		readonly ComponentState: OptionSet.connector.ComponentState;
		/** Connection parameters of the Connector */
		ConnectionParameters: string;
		/** Unique identifier for entity instances */
		connectorId: string;
		/** For internal use only. */
		readonly ConnectorIdUnique: string;
		/** Internal Connector Id */
		ConnectorInternalId: string;
		/** Connector Type */
		ConnectorType: OptionSet.connector.ConnectorType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the Connector */
		Description: string;
		/** Display Name of the Connector */
		DisplayName: string;
		/** Icon for the Connector */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		IconBlob: string;
		IconBlob_Timestamp: number;
		IconBlob_URL: string;
		readonly IconBlobId: string;
		/** Connector Icon Branding Color */
		IconBrandColor: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Tells whether the component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Required logical name of the Connector */
		Name: string;
		/** OpenApi Definition supported by Connector */
		OpenApiDefinition: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
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
		/** Apim Policy Template Instances */
		PolicyTemplateInstances: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Connector */
		statecode: OptionSet.connector.statecode;
		/** Reason for the status of the Connector */
		statuscode: OptionSet.connector.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace connector {
		enum Capabilities {
			/** 118690005 */
			actions,
			/** 118690002 */
			blob,
			/** 118690004 */
			cloud,
			/** 118690000 */
			composite,
			/** 118690003 */
			gateway,
			/** 118690001 */
			tabular
		}
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
		enum ConnectorType {
			/** 1 */
			CustomConnector,
			/** 0 */
			NotSpecified
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}