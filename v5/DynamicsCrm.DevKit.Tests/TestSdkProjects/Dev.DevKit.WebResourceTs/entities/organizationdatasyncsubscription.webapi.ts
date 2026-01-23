/**
 * organizationdatasyncsubscription.webapi.ts - organizationdatasyncsubscription WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * organizationdatasyncsubscription WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IorganizationdatasyncsubscriptionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IorganizationdatasyncsubscriptionApi, 'FormattedValue'>]: string };
	/** AadApplicationId */
	AadApplicationId: string | null;
	/** BlobPartitionBy */
	BlobPartitionBy: number | null;
	/** CanSyncAllMetadata */
	CanSyncAllMetadata: boolean | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** DataEndpointPostingType */
	DataEndpointPostingType: number | null;
	/** DataProcessingType */
	DataProcessingType: number | null;
	/** EndpointSettings */
	EndpointSettings: string | null;
	/** EntityFilters */
	EntityFilters: string | null;
	/** EntitySettings */
	EntitySettings: string | null;
	/** FullSyncOnly */
	FullSyncOnly: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** IsOutOfBoxSubscription */
	IsOutOfBoxSubscription: boolean | null;
	/** MigrationState */
	MigrationState: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** NeedCopyAttachmentsToBlob */
	NeedCopyAttachmentsToBlob: boolean | null;
	/** NeedToCopyFilesToBlob */
	NeedToCopyFilesToBlob: boolean | null;
	/** NewEntities */
	NewEntities: string | null;
	/** NewFnoTables */
	NewFnoTables: string | null;
	/** Unique identifier for entity instances */
	organizationdatasyncsubscriptionId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** PartnerPrefix */
	PartnerPrefix: string | null;
	/** Status of the OrganizationDataSyncSubscription */
	statecode: number | null;
	/** Reason for the status of the OrganizationDataSyncSubscription */
	statuscode: number | null;
	/** SubscribedToAllEntities */
	SubscribedToAllEntities: boolean | null;
	/** SubscriptionEndpointStatus */
	SubscriptionEndpointStatus: number | null;
	/** subscriptionentities */
	SubscriptionEntities: string | null;
	/** subscriptionfnotables */
	SubscriptionFnoTables: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** UnsubscribedEntities */
	UnsubscribedEntities: string | null;
	/** UnsubscribedFnoTables */
	UnsubscribedFnoTables: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of OrganizationDataSyncSubscription. */
	readonly VersionNumber: number | null;
}

const organizationdatasyncsubscriptionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AadApplicationId: { logicalName: 'aadapplicationid' },
	BlobPartitionBy: { logicalName: 'blobpartitionby', type: 'Integer' },
	CanSyncAllMetadata: { logicalName: 'cansyncallmetadata', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataEndpointPostingType: { logicalName: 'dataendpointpostingtype', type: 'Integer' },
	DataProcessingType: { logicalName: 'dataprocessingtype', type: 'Integer' },
	EndpointSettings: { logicalName: 'endpointsettings' },
	EntityFilters: { logicalName: 'entityfilters' },
	EntitySettings: { logicalName: 'entitysettings' },
	FullSyncOnly: { logicalName: 'fullsynconly', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsOutOfBoxSubscription: { logicalName: 'isoutofboxsubscription', type: 'Boolean' },
	MigrationState: { logicalName: 'migrationstate', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	NeedCopyAttachmentsToBlob: { logicalName: 'needcopyattachmentstoblob', type: 'Boolean' },
	NeedToCopyFilesToBlob: { logicalName: 'needtocopyfilestoblob', type: 'Boolean' },
	NewEntities: { logicalName: 'newentities' },
	NewFnoTables: { logicalName: 'newfnotables' },
	organizationdatasyncsubscriptionId: { logicalName: 'organizationdatasyncsubscriptionid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartnerPrefix: { logicalName: 'partnerprefix' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SubscribedToAllEntities: { logicalName: 'subscribedtoallentities', type: 'Boolean' },
	SubscriptionEndpointStatus: { logicalName: 'subscriptionendpointstatus', type: 'Integer' },
	SubscriptionEntities: { logicalName: 'subscriptionentities' },
	SubscriptionFnoTables: { logicalName: 'subscriptionfnotables' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UnsubscribedEntities: { logicalName: 'unsubscribedentities' },
	UnsubscribedFnoTables: { logicalName: 'unsubscribedfnotables' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * organizationdatasyncsubscription WebApi class for early-bound style coding
 * Usage: const organizationdatasyncsubscription = new organizationdatasyncsubscriptionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class organizationdatasyncsubscriptionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IorganizationdatasyncsubscriptionApi>(entity, 'organizationdatasyncsubscription', 'organizationdatasyncsubscriptions', organizationdatasyncsubscriptionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface organizationdatasyncsubscriptionApi extends IorganizationdatasyncsubscriptionApi { }
