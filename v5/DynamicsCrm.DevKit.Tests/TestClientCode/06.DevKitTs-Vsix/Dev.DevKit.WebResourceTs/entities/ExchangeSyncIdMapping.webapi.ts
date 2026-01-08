/**
 * ExchangeSyncIdMapping.webapi.ts - ExchangeSyncIdMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ExchangeSyncIdMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IExchangeSyncIdMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IExchangeSyncIdMappingApi, 'FormattedValue'>]: string };
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Exchange Id */
	ExchangeEntryId: string | null;
	ExchangeSyncIdmappingId: DevKit.Guid | null;
	FromCrmChangeType: number | null;
	IsDeletedInExchange: boolean | null;
	IsUnlinkedInCRM: boolean | null;
	/** Item Subject */
	ItemSubject: string | null;
	/** Sync Error */
	LastSyncError: string | null;
	LastSyncErrorCode: number | null;
	/** Last Sync Error Time */
	LastSyncErrorOccurredOn_UtcDateAndTime: Date | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Crm Id */
	ObjectId: DevKit.Guid | null;
	/** Object Type Code */
	ObjectTypeCode: number | null;
	/** Owner */
	OwnerId: DevKit.Guid | null;
	readonly OwningBusinessUnit: DevKit.Guid | null;
	readonly OwningTeam: DevKit.Guid | null;
	readonly OwningUser: DevKit.Guid | null;
	Retries: number | null;
	ToCrmChangeType: number | null;
	UserDecision: number | null;
	readonly VersionNumber: number | null;
}

const ExchangeSyncIdMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ExchangeEntryId: { logicalName: 'exchangeentryid' },
	ExchangeSyncIdmappingId: { logicalName: 'exchangesyncidmappingid' },
	FromCrmChangeType: { logicalName: 'fromcrmchangetype', type: 'Integer' },
	IsDeletedInExchange: { logicalName: 'isdeletedinexchange', type: 'Boolean' },
	IsUnlinkedInCRM: { logicalName: 'isunlinkedincrm', type: 'Boolean' },
	ItemSubject: { logicalName: 'itemsubject' },
	LastSyncError: { logicalName: 'lastsyncerror' },
	LastSyncErrorCode: { logicalName: 'lastsyncerrorcode', type: 'Integer' },
	LastSyncErrorOccurredOn_UtcDateAndTime: { logicalName: 'lastsyncerroroccurredon', type: 'DateTime' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ObjectId: { logicalName: 'objectid' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Retries: { logicalName: 'retries', type: 'Integer' },
	ToCrmChangeType: { logicalName: 'tocrmchangetype', type: 'Integer' },
	UserDecision: { logicalName: 'userdecision', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ExchangeSyncIdMapping WebApi class for early-bound style coding
 * Usage: const exchangeSyncIdMapping = new ExchangeSyncIdMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ExchangeSyncIdMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IExchangeSyncIdMappingApi>(entity, 'exchangesyncidmapping', 'exchangesyncidmappings', ExchangeSyncIdMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ExchangeSyncIdMappingApi extends IExchangeSyncIdMappingApi { }
