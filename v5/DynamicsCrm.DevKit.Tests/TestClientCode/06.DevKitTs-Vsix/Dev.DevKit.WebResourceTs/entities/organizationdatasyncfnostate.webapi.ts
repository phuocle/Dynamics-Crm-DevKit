/**
 * organizationdatasyncfnostate.webapi.ts - organizationdatasyncfnostate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for organizationdatasyncfnostate
 * All fields return string representation of their values
 */
export interface IorganizationdatasyncfnostateFormattedValue {
	readonly continuefromlastdeltasync: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly currentfullsyncfetchxml: string;
	readonly currentfullsyncstate: string;
	readonly entityname: string;
	readonly fullsynconly: string;
	readonly fullsyncpagesdata: string;
	readonly implicitlastdataversion: string;
	readonly ImportSequenceNumber: string;
	readonly lastdataversion: string;
	readonly lastmetadataversion: string;
	readonly lockexpiretimestamp_UtcDateAndTime: string;
	readonly lockowner: string;
	readonly minactiverowversion: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly nullstatedate_UtcDateOnly: string;
	readonly organizationdatasyncfnostateId: string;
	readonly organizationdatasyncsubscriptionid: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly pagenumber: string;
	readonly paginationcookie: string;
	readonly pagingcookie: string;
	readonly partitionid: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly usepagingcookiemax: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * organizationdatasyncfnostate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IorganizationdatasyncfnostateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IorganizationdatasyncfnostateFormattedValue;
	/** Continue from last delta sync */
	continuefromlastdeltasync: boolean | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** currentfullsyncfetchxml */
	currentfullsyncfetchxml: string | null;
	/** currentfullsyncstate */
	currentfullsyncstate: number | null;
	/** entityname */
	entityname: DevKit.Guid | null;
	/** fullsynconly */
	fullsynconly: boolean | null;
	/** fullsyncpagesdata */
	fullsyncpagesdata: string | null;
	/** implicitlastdataversion */
	implicitlastdataversion: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** lastdataversion */
	lastdataversion: string | null;
	/** Last Metadata Version */
	lastmetadataversion: string | null;
	/** LockExpireTimestamp */
	lockexpiretimestamp_UtcDateAndTime: Date | null;
	/** LockOwner */
	lockowner: string | null;
	/** minactiverowversion */
	minactiverowversion: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** nullstatedate */
	nullstatedate_UtcDateOnly: Date | null;
	/** Unique identifier for entity instances */
	organizationdatasyncfnostateId: DevKit.Guid | null;
	/** Organization Data Sync Subscription Id */
	organizationdatasyncsubscriptionid: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** pagenumber */
	pagenumber: number | null;
	/** paginationcookie */
	paginationcookie: string | null;
	/** pagingcookie */
	pagingcookie: string | null;
	/** PartitionId */
	partitionid: string | null;
	/** Status of the OrganizationDataSyncFnoState */
	statecode: number | null;
	/** Reason for the status of the OrganizationDataSyncFnoState */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** usepagingcookiemax */
	usepagingcookiemax: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const organizationdatasyncfnostateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	continuefromlastdeltasync: { logicalName: 'continuefromlastdeltasync', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	currentfullsyncfetchxml: { logicalName: 'currentfullsyncfetchxml' },
	currentfullsyncstate: { logicalName: 'currentfullsyncstate', type: 'Integer' },
	entityname: { schemaName: 'entityname', logicalName: '_entityname_value', entityCollectionName: 'organizationdatasyncsubscriptionfnotables', entityLogicalName: 'organizationdatasyncsubscriptionfnotable' },
	fullsynconly: { logicalName: 'fullsynconly', type: 'Boolean' },
	fullsyncpagesdata: { logicalName: 'fullsyncpagesdata' },
	implicitlastdataversion: { logicalName: 'implicitlastdataversion' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	lastdataversion: { logicalName: 'lastdataversion' },
	lastmetadataversion: { logicalName: 'lastmetadataversion' },
	lockexpiretimestamp_UtcDateAndTime: { logicalName: 'lockexpiretimestamp', type: 'DateTime' },
	lockowner: { logicalName: 'lockowner' },
	minactiverowversion: { logicalName: 'minactiverowversion' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	nullstatedate_UtcDateOnly: { logicalName: 'nullstatedate', type: 'DateTime' },
	organizationdatasyncfnostateId: { logicalName: 'organizationdatasyncfnostateid' },
	organizationdatasyncsubscriptionid: { schemaName: 'organizationdatasyncsubscriptionid', logicalName: '_organizationdatasyncsubscriptionid_value', entityCollectionName: 'organizationdatasyncsubscriptions', entityLogicalName: 'organizationdatasyncsubscription' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	pagenumber: { logicalName: 'pagenumber', type: 'Integer' },
	paginationcookie: { logicalName: 'paginationcookie' },
	pagingcookie: { logicalName: 'pagingcookie' },
	partitionid: { logicalName: 'partitionid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	usepagingcookiemax: { logicalName: 'usepagingcookiemax', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * organizationdatasyncfnostate WebApi class for early-bound style coding
 * Usage: const organizationdatasyncfnostate = new organizationdatasyncfnostateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class organizationdatasyncfnostateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IorganizationdatasyncfnostateApi>(entity, 'organizationdatasyncfnostate', 'organizationdatasyncfnostates', organizationdatasyncfnostateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface organizationdatasyncfnostateApi extends IorganizationdatasyncfnostateApi { }
