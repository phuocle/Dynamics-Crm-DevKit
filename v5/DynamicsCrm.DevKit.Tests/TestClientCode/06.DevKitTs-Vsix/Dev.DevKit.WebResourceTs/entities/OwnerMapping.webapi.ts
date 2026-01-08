/**
 * OwnerMapping.webapi.ts - OwnerMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OwnerMapping
 * All fields return string representation of their values
 */
export interface IOwnerMappingFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportMapId: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerMappingId: string;
	readonly OwnerMappingIdUnique: string;
	readonly ProcessCode: string;
	readonly SolutionId: string;
	readonly SourceSystemUserName: string;
	readonly SourceUserValueForSourceCRMUserLink: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly TargetSystemUserDomainName: string;
	readonly TargetSystemUserId: string;
	readonly TargetUserValueForSourceCRMUserLink: string;
}

/**
 * OwnerMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOwnerMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOwnerMappingFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the owner mapping. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the owner mapping was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the ownermapping. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the data map with which the owner mapping is associated. */
	ImportMapId: DevKit.Guid | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the lookup mapping. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the owner mapping was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the ownermapping. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the owner mapping. */
	OwnerMappingId: DevKit.Guid | null;
	/** Unique identifier of the OwnerMapping. */
	readonly OwnerMappingIdUnique: DevKit.Guid | null;
	/** Code that indicates whether the owner mapping has to be processed */
	ProcessCode: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Source user name that has to be replaced */
	SourceSystemUserName: string | null;
	/** Source user value for source Microsoft Dynamics 365 user link. */
	SourceUserValueForSourceCRMUserLink: string | null;
	/** Status of the owner mapping. */
	readonly StateCode: number | null;
	/** Reason for the status of the owner mapping. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Microsoft Dynamics 365 logon name with which the source user name should be replaced. */
	TargetSystemUserDomainName: string | null;
	/** Unique identifier of the Microsoft Dynamics 365 user. */
	TargetSystemUserId: DevKit.Guid | null;
	/** Microsoft Dynamics CRM user. */
	TargetUserValueForSourceCRMUserLink: string | null;
}

const OwnerMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportMapId: { schemaName: 'ImportMapId', logicalName: '_importmapid_value', entityCollectionName: 'importmaps', entityLogicalName: 'importmap' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerMappingId: { logicalName: 'ownermappingid' },
	OwnerMappingIdUnique: { logicalName: 'ownermappingidunique', readOnly: true },
	ProcessCode: { logicalName: 'processcode', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceSystemUserName: { logicalName: 'sourcesystemusername' },
	SourceUserValueForSourceCRMUserLink: { logicalName: 'sourceuservalueforsourcecrmuserlink' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetSystemUserDomainName: { logicalName: 'targetsystemuserdomainname' },
	TargetSystemUserId: { schemaName: 'TargetSystemUserId', logicalName: '_targetsystemuserid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	TargetUserValueForSourceCRMUserLink: { logicalName: 'targetuservalueforsourcecrmuserlink' },
};

/**
 * OwnerMapping WebApi class for early-bound style coding
 * Usage: const ownerMapping = new OwnerMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OwnerMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOwnerMappingApi>(entity, 'ownermapping', 'ownermappings', OwnerMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OwnerMappingApi extends IOwnerMappingApi { }
