/**
 * purviewlabelsynccache.webapi.ts - purviewlabelsynccache WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for purviewlabelsynccache
 * All fields return string representation of their values
 */
export interface IpurviewlabelsynccacheFormattedValue {
	readonly ContinuationToken: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly isDataMapSyncTriggerPresent: string;
	readonly LabelSyncTime_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly purviewlabelsynccacheId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * purviewlabelsynccache WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IpurviewlabelsynccacheApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IpurviewlabelsynccacheFormattedValue;
	/** Continuation Token */
	ContinuationToken: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is Data Map Sync Trigger Present */
	isDataMapSyncTriggerPresent: number | null;
	/** Labe Sync Time */
	LabelSyncTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for entity instances */
	purviewlabelsynccacheId: DevKit.Guid | null;
	/** Status of the purviewlabelsynccache */
	statecode: number | null;
	/** Reason for the status of the purviewlabelsynccache */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const purviewlabelsynccacheFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ContinuationToken: { logicalName: 'continuationtoken' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	isDataMapSyncTriggerPresent: { logicalName: 'isdatamapsynctriggerpresent', type: 'Integer' },
	LabelSyncTime_UtcDateAndTime: { logicalName: 'labelsynctime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	purviewlabelsynccacheId: { logicalName: 'purviewlabelsynccacheid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * purviewlabelsynccache WebApi class for early-bound style coding
 * Usage: const purviewlabelsynccache = new purviewlabelsynccacheApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class purviewlabelsynccacheApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IpurviewlabelsynccacheApi>(entity, 'purviewlabelsynccache', 'purviewlabelsynccaches', purviewlabelsynccacheFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface purviewlabelsynccacheApi extends IpurviewlabelsynccacheApi { }
