/**
 * connector.webapi.ts - connector WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for connector
 * All fields return string representation of their values
 */
export interface IconnectorFormattedValue {
	readonly Capabilities: string;
	readonly ComponentState: string;
	readonly ConnectionParameters: string;
	readonly ConnectionParameterSets: string;
	readonly connectorId: string;
	readonly ConnectorIdUnique: string;
	readonly ConnectorInternalId: string;
	readonly ConnectorType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomCodeBlobContent: string;
	readonly Description: string;
	readonly DisplayName: string;
	readonly ExtensionAssemblyId: string;
	readonly IconBlob: string;
	readonly IconBlobId: string;
	readonly IconBrandColor: string;
	readonly ImportSequenceNumber: string;
	readonly Interfaces: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OpenApiDefinition: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PolicyTemplateInstances: string;
	readonly ScriptOperations: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * connector WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IconnectorApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IconnectorFormattedValue;
	/** Capabilities */
	Capabilities: Array<number> | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Connection parameters of the Connector */
	ConnectionParameters: string | null;
	/** Connection parameter sets of the Connector */
	ConnectionParameterSets: string | null;
	/** Unique identifier for entity instances */
	connectorId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ConnectorIdUnique: DevKit.Guid | null;
	/** Internal Connector Id */
	ConnectorInternalId: string | null;
	/** Connector Type */
	ConnectorType: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Custom Code Content for the Connector */
	CustomCodeBlobContent: string | null;
	/** Description of the Connector */
	Description: string | null;
	/** Display Name of the Connector */
	DisplayName: string | null;
	/** Unique identifier of the Extension assembly location containing the CustomCodeBlobContent. */
	ExtensionAssemblyId: DevKit.Guid | null;
	/** Icon for the Connector */
	IconBlob: string | null;
	readonly IconBlobId: DevKit.Guid | null;
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
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Required logical name of the Connector */
	Name: string | null;
	/** OpenApi Definition supported by Connector */
	OpenApiDefinition: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Apim Policy Template Instances */
	PolicyTemplateInstances: string | null;
	/** A list of operations to which the custom code will apply to. */
	ScriptOperations: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Connector */
	statecode: number | null;
	/** Reason for the status of the Connector */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const connectorFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Capabilities: { logicalName: 'capabilities', type: 'MultiOptionSet' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionParameters: { logicalName: 'connectionparameters' },
	ConnectionParameterSets: { logicalName: 'connectionparametersets' },
	connectorId: { logicalName: 'connectorid' },
	ConnectorIdUnique: { logicalName: 'connectoridunique', readOnly: true },
	ConnectorInternalId: { logicalName: 'connectorinternalid' },
	ConnectorType: { logicalName: 'connectortype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomCodeBlobContent: { logicalName: 'customcodeblobcontent' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	ExtensionAssemblyId: { logicalName: 'extensionassemblyid' },
	IconBlob: { logicalName: 'iconblob' },
	IconBlobId: { logicalName: 'iconblobid', readOnly: true },
	IconBrandColor: { logicalName: 'iconbrandcolor' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Interfaces: { logicalName: 'interfaces' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OpenApiDefinition: { logicalName: 'openapidefinition' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PolicyTemplateInstances: { logicalName: 'policytemplateinstances' },
	ScriptOperations: { logicalName: 'scriptoperations' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * connector WebApi class for early-bound style coding
 * Usage: const connector = new connectorApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class connectorApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IconnectorApi>(entity, 'connector', 'connectors', connectorFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface connectorApi extends IconnectorApi { }
