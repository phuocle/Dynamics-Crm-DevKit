/**
 * nlsqregistration.webapi.ts - nlsqregistration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * nlsqregistration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface InlsqregistrationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<InlsqregistrationApi, 'FormattedValue'>]: string };
	/** The NL2SQ service allowed entity list to be fetched for this organization. (Deprecated) */
	AllowedEntityList: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The NL2SQ service allowed entity list to be fetched for this organization. */
	EntityList: string | null;
	/** The NL2SQ service registration failure error message for this organization. */
	ErrorMessage: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	Name: string | null;
	/** Unique identifier for nlsqregistration instances */
	nlsqregistrationId: DevKit.Guid | null;
	/** Object instance Identifier */
	ObjectId: string | null;
	/** Logical object partition id to be used by an elastic table row. */
	ObjectPartitionId: string | null;
	/** Identifies the type of entity */
	ObjectType: string | null;
	/** Friendly name for the object */
	ObjectTypeDisplayName: string | null;
	/** Object Type Identifier (OTC) */
	ObjectTypeId: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** The NL2SQ service registration status for this organization. Default is NotRegistered */
	RegistrationStatus: number | null;
	/** (Optional) the skill associated with the registration */
	Skill: DevKit.Guid | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const nlsqregistrationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowedEntityList: { logicalName: 'allowedentitylist' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityList: { logicalName: 'entitylist' },
	ErrorMessage: { logicalName: 'errormessage' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	nlsqregistrationId: { logicalName: 'nlsqregistrationid' },
	ObjectId: { logicalName: 'objectid' },
	ObjectPartitionId: { logicalName: 'objectpartitionid' },
	ObjectType: { logicalName: 'objecttype' },
	ObjectTypeDisplayName: { logicalName: 'objecttypedisplayname' },
	ObjectTypeId: { logicalName: 'objecttypeid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	RegistrationStatus: { logicalName: 'registrationstatus', type: 'Integer' },
	Skill: { logicalName: 'skill' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * nlsqregistration WebApi class for early-bound style coding
 * Usage: const nlsqregistration = new nlsqregistrationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class nlsqregistrationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<InlsqregistrationApi>(entity, 'nlsqregistration', 'nlsqregistrations', nlsqregistrationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface nlsqregistrationApi extends InlsqregistrationApi { }
