/**
 * organizationdatasyncsubscriptionfnotable.webapi.ts - organizationdatasyncsubscriptionfnotable WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for organizationdatasyncsubscriptionfnotable
 * All fields return string representation of their values
 */
export interface IorganizationdatasyncsubscriptionfnotableFormattedValue {
	readonly BlobPartitionBy: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly InheritsFromOtc: string;
	readonly IsActivity: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly ObjectTypeCode: string;
	readonly OrganizationDataSyncSubscriptioId: string;
	readonly OrganizationDataSyncSubscription: string;
	readonly organizationdatasyncsubscriptionfnotableId: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * organizationdatasyncsubscriptionfnotable WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IorganizationdatasyncsubscriptionfnotableApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IorganizationdatasyncsubscriptionfnotableFormattedValue;
	/** BlobPartitionBy */
	BlobPartitionBy: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** InheritsFromOtc */
	InheritsFromOtc: number | null;
	/** IsActivity */
	IsActivity: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** ObjectTypeCode */
	ObjectTypeCode: number | null;
	/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionFnoTable. */
	OrganizationDataSyncSubscriptioId: DevKit.Guid | null;
	/** Unique identifier for OrganizationDataSyncSubscription associated with OrganizationDataSyncSubscriptionFnoTable. */
	OrganizationDataSyncSubscription: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	organizationdatasyncsubscriptionfnotableId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Status of the OrganizationDataSyncSubscriptionFnoTable */
	statecode: number | null;
	/** Reason for the status of the OrganizationDataSyncSubscriptionFnoTable */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of OrganizationDataSyncSubscriptionFnoTable. */
	readonly VersionNumber: number | null;
}

const organizationdatasyncsubscriptionfnotableFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BlobPartitionBy: { logicalName: 'blobpartitionby', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InheritsFromOtc: { logicalName: 'inheritsfromotc', type: 'Integer' },
	IsActivity: { logicalName: 'isactivity', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OrganizationDataSyncSubscriptioId: { schemaName: 'OrganizationDataSyncSubscriptioId', logicalName: '_organizationdatasyncsubscriptioid_value', entityCollectionName: 'organizationdatasyncsubscriptions', entityLogicalName: 'organizationdatasyncsubscription' },
	OrganizationDataSyncSubscription: { schemaName: 'OrganizationDataSyncSubscription', logicalName: '_organizationdatasyncsubscription_value', entityCollectionName: 'organizationdatasyncsubscriptions', entityLogicalName: 'organizationdatasyncsubscription' },
	organizationdatasyncsubscriptionfnotableId: { logicalName: 'organizationdatasyncsubscriptionfnotableid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * organizationdatasyncsubscriptionfnotable WebApi class for early-bound style coding
 * Usage: const organizationdatasyncsubscriptionfnotable = new organizationdatasyncsubscriptionfnotableApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class organizationdatasyncsubscriptionfnotableApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IorganizationdatasyncsubscriptionfnotableApi>(entity, 'organizationdatasyncsubscriptionfnotable', 'organizationdatasyncsubscriptionfnotables', organizationdatasyncsubscriptionfnotableFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface organizationdatasyncsubscriptionfnotableApi extends IorganizationdatasyncsubscriptionfnotableApi { }
