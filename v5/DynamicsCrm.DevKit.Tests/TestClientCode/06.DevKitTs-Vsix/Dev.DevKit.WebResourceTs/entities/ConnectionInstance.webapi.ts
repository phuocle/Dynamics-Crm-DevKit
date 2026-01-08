/**
 * ConnectionInstance.webapi.ts - ConnectionInstance WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ConnectionInstance
 * All fields return string representation of their values
 */
export interface IConnectionInstanceFormattedValue {
	readonly AccountName: string;
	readonly AllowSharing: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly ConnectionInstanceDisplayName: string;
	readonly ConnectionInstanceId: string;
	readonly ConnectionInstanceLogicalName: string;
	readonly ConnectionInternalId: string;
	readonly ConnectionMetadata: string;
	readonly ConnectionParametersConfig: string;
	readonly ConnectionParameterSetConfig: string;
	readonly ConnectionReferenceId: string;
	readonly ConnectionStatus: string;
	readonly ConnectionVersion: string;
	readonly ConnectorId: string;
	readonly ConnectorInternalId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CredentialId: string;
	readonly IconUri: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TestConnectionLinks: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * ConnectionInstance WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConnectionInstanceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IConnectionInstanceFormattedValue;
	/** The name for the account */
	AccountName: string | null;
	/** Whether or not allow sharing is enabled for the connection */
	AllowSharing: boolean | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The display name of the Connection as seen by the user. */
	ConnectionInstanceDisplayName: string | null;
	/** Unique identifier for entity instances */
	ConnectionInstanceId: DevKit.Guid | null;
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
	ConnectionReferenceId: DevKit.Guid | null;
	/** The status of the connection in ApiHub */
	ConnectionStatus: string | null;
	/** The version of the connection */
	ConnectionVersion: string | null;
	/** The id of the corresponding connector if present in Dataverse */
	ConnectorId: DevKit.Guid | null;
	/** The id of the Connector in ApiHub */
	ConnectorInternalId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the Credential used in the Connection Instance. */
	CredentialId: DevKit.Guid | null;
	/** Icon for the Connection Instance */
	IconUri: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Connection Instance */
	statecode: number | null;
	/** Reason for the status of the Connection Instance */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Links to test the connection */
	TestConnectionLinks: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const ConnectionInstanceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccountName: { logicalName: 'accountname' },
	AllowSharing: { logicalName: 'allowsharing', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionInstanceDisplayName: { logicalName: 'connectioninstancedisplayname' },
	ConnectionInstanceId: { logicalName: 'connectioninstanceid' },
	ConnectionInstanceLogicalName: { logicalName: 'connectioninstancelogicalname' },
	ConnectionInternalId: { logicalName: 'connectioninternalid' },
	ConnectionMetadata: { logicalName: 'connectionmetadata' },
	ConnectionParametersConfig: { logicalName: 'connectionparametersconfig' },
	ConnectionParameterSetConfig: { logicalName: 'connectionparametersetconfig' },
	ConnectionReferenceId: { schemaName: 'ConnectionReferenceId', logicalName: '_connectionreferenceid_value', entityCollectionName: 'connectionreferences', entityLogicalName: 'connectionreference' },
	ConnectionStatus: { logicalName: 'connectionstatus' },
	ConnectionVersion: { logicalName: 'connectionversion' },
	ConnectorId: { schemaName: 'ConnectorId', logicalName: '_connectorid_value', entityCollectionName: 'connectors', entityLogicalName: 'connector' },
	ConnectorInternalId: { logicalName: 'connectorinternalid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CredentialId: { schemaName: 'CredentialId', logicalName: '_credentialid_value', entityCollectionName: 'credentials', entityLogicalName: 'credential' },
	IconUri: { logicalName: 'iconuri' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TestConnectionLinks: { logicalName: 'testconnectionlinks' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ConnectionInstance WebApi class for early-bound style coding
 * Usage: const connectionInstance = new ConnectionInstanceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConnectionInstanceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConnectionInstanceApi>(entity, 'connectioninstance', 'connectioninstances', ConnectionInstanceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConnectionInstanceApi extends IConnectionInstanceApi { }
