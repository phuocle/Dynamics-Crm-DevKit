/**
 * EnvironmentVariableDefinition.webapi.ts - EnvironmentVariableDefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EnvironmentVariableDefinition
 * All fields return string representation of their values
 */
export interface IEnvironmentVariableDefinitionFormattedValue {
	readonly ApiId: string;
	readonly ComponentState: string;
	readonly ConnectionReferenceId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DefaultValue: string;
	readonly Description: string;
	readonly DisplayName: string;
	readonly EnvironmentVariableDefinitionId: string;
	readonly EnvironmentVariableDefinitionIdUnique: string;
	readonly Hint: string;
	readonly ImportSequenceNumber: string;
	readonly InputControlConfig: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly IsRequired: string;
	readonly LearnMoreUrl: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParameterKey: string;
	readonly ParentDefinitionId: string;
	readonly SchemaName: string;
	readonly SecretStore: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Type: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly ValueSchema: string;
	readonly VersionNumber: string;
}

/**
 * EnvironmentVariableDefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEnvironmentVariableDefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEnvironmentVariableDefinitionFormattedValue;
	/** API Id */
	ApiId: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
	ConnectionReferenceId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
	DefaultValue: string | null;
	/** Description of the variable definition. */
	Description: string | null;
	/** Display Name of the variable definition. */
	DisplayName: string | null;
	/** Unique identifier for entity instances */
	EnvironmentVariableDefinitionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly EnvironmentVariableDefinitionIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	Hint: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** A JSON object describing the options for the input control that should be presented to the user for setting the current value of the Environment variable. */
	InputControlConfig: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Tells whether the component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	IsRequired: boolean | null;
	/** Clicking on this url will take the user to a webpage which further explains the environment variable being populated. */
	LearnMoreUrl: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** Parameter Key */
	ParameterKey: string | null;
	/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
	ParentDefinitionId: DevKit.Guid | null;
	/** Unique entity name. */
	SchemaName: string | null;
	/** Environment variable secret store. */
	SecretStore: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Environment Variable Definition */
	statecode: number | null;
	/** Reason for the status of the Environment Variable Definition */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Environment variable value type. */
	Type: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** For internal use only. */
	ValueSchema: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const EnvironmentVariableDefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApiId: { logicalName: 'apiid' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionReferenceId: { logicalName: 'connectionreferenceid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultValue: { logicalName: 'defaultvalue' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	EnvironmentVariableDefinitionId: { logicalName: 'environmentvariabledefinitionid' },
	EnvironmentVariableDefinitionIdUnique: { logicalName: 'environmentvariabledefinitionidunique', readOnly: true },
	Hint: { logicalName: 'hint' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InputControlConfig: { logicalName: 'inputcontrolconfig' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsRequired: { logicalName: 'isrequired', type: 'Boolean' },
	LearnMoreUrl: { logicalName: 'learnmoreurl' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParameterKey: { logicalName: 'parameterkey' },
	ParentDefinitionId: { schemaName: 'ParentDefinitionId', logicalName: '_parentdefinitionid_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	SchemaName: { logicalName: 'schemaname' },
	SecretStore: { logicalName: 'secretstore', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Type: { logicalName: 'type', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	ValueSchema: { logicalName: 'valueschema' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EnvironmentVariableDefinition WebApi class for early-bound style coding
 * Usage: const environmentVariableDefinition = new EnvironmentVariableDefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EnvironmentVariableDefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEnvironmentVariableDefinitionApi>(entity, 'environmentvariabledefinition', 'environmentvariabledefinitions', EnvironmentVariableDefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EnvironmentVariableDefinitionApi extends IEnvironmentVariableDefinitionApi { }
