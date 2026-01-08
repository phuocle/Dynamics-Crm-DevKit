/**
 * credential.webapi.ts - credential WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * credential WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcredentialApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcredentialApi, 'FormattedValue'>]: string };
	/** Certificate used for authentication */
	certificate: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Connection Type */
	connectiontype: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	credentialId: DevKit.Guid | null;
	/** Credentials */
	credentials: string | null;
	/** Credential Type */
	credentialtype: number | null;
	/** CyberArk Application Id */
	cyberarkapplicationid: string | null;
	/** CyberArk Object */
	cyberarkobject: DevKit.Guid | null;
	/** Metadata of the CyberArk safe where the password is stored: Hostname or IP address of the CCP endpoint, Folder and Name of the CyberArk safe where the password is stored */
	cyberarksafe: DevKit.Guid | null;
	/** CyberArk Username */
	cyberarkusername: DevKit.Guid | null;
	/** This credential will be used if there is no matching mapping. */
	defaultcredential: DevKit.Guid | null;
	/** The description of the credential. */
	description: string | null;
	/** Group Mapping */
	groupmapping: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** The login context in which the credential should be used. */
	logincontext: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
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
	/** Password */
	password: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Credential */
	statecode: number | null;
	/** Reason for the status of the Credential */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Types of allowed usage for the credential. */
	usagetype: Array<number> | null;
	/** Username */
	username: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const credentialFieldConfig: DevKit.IWebApiFieldConfigMap = {
	certificate: { schemaName: 'certificate', logicalName: '_certificate_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	connectiontype: { logicalName: 'connectiontype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	credentialId: { logicalName: 'credentialid' },
	credentials: { logicalName: 'credentials' },
	credentialtype: { logicalName: 'credentialtype', type: 'Integer' },
	cyberarkapplicationid: { logicalName: 'cyberarkapplicationid' },
	cyberarkobject: { schemaName: 'cyberarkobject', logicalName: '_cyberarkobject_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	cyberarksafe: { schemaName: 'cyberarksafe', logicalName: '_cyberarksafe_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	cyberarkusername: { schemaName: 'cyberarkusername', logicalName: '_cyberarkusername_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	defaultcredential: { schemaName: 'defaultcredential', logicalName: '_defaultcredential_value', entityCollectionName: 'credentials', entityLogicalName: 'credential' },
	description: { logicalName: 'description' },
	groupmapping: { logicalName: 'groupmapping' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	logincontext: { logicalName: 'logincontext' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	password: { schemaName: 'password', logicalName: '_password_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	usagetype: { logicalName: 'usagetype', type: 'MultiOptionSet' },
	username: { schemaName: 'username', logicalName: '_username_value', entityCollectionName: 'environmentvariabledefinitions', entityLogicalName: 'environmentvariabledefinition' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * credential WebApi class for early-bound style coding
 * Usage: const credential = new credentialApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class credentialApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcredentialApi>(entity, 'credential', 'credentials', credentialFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface credentialApi extends IcredentialApi { }
