/**
 * MobileOfflineProfileItem.webapi.ts - MobileOfflineProfileItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MobileOfflineProfileItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMobileOfflineProfileItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMobileOfflineProfileItemApi, 'FormattedValue'>]: string };
	/** Specifies whether records of this entity can be followed. */
	CanBeFollowed: boolean | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Internal Use Only */
	readonly EntityObjectTypeCode: number | null;
	/** Specify whether records related to this entity will be made available for offline access. */
	GetRelatedEntityRecords: boolean | null;
	/** Version in which the Mobile offline Profile Item is introduced. */
	IntroducedVersion: string | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Information about whether profile item is validated or not */
	readonly IsValidated: boolean | null;
	/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
	IsVisibleInGrid: boolean | null;
	/** Unique identifier of the mobile offline profile item. */
	MobileOfflineProfileItemId: DevKit.Guid | null;
	/** For Internal Use Only */
	readonly MobileOfflineProfileItemIdUnique: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Enter the name of the mobile offline profile item. */
	Name: string | null;
	/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Profile item entity filter criteria */
	ProfileItemEntityFilter: string | null;
	/** Saved Query associated with the Mobile offline profile item rule. */
	ProfileItemRule: DevKit.Guid | null;
	/** Displays the last published date time. */
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Specify data download filter for selected entity */
	RecordDistributionCriteria: number | null;
	/** Download my records */
	RecordsOwnedByMe: boolean | null;
	/** Download my business unit's records */
	RecordsOwnedByMyBusinessUnit: boolean | null;
	/** Download my team's records */
	RecordsOwnedByMyTeam: boolean | null;
	/** Items contained with a particular Profile. */
	RegardingObjectId: DevKit.Guid | null;
	/** Internal Use Only */
	RelationshipData: string | null;
	/** Selected attributes of an entity to enable for offline sync */
	SelectedColumns: string | null;
	/** Internal Use Only */
	readonly SelectedEntityMetadata: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** How often to sync data offline. */
	SyncIntervalInMinutes: number | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Version number of the Mobile Offline Profile Item. */
	readonly VersionNumber: number | null;
	/** Contains converted sql of the referenced view. */
	ViewQuery: string | null;
}

const MobileOfflineProfileItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CanBeFollowed: { logicalName: 'canbefollowed', type: 'Boolean' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityObjectTypeCode: { logicalName: 'entityobjecttypecode', readOnly: true, type: 'Integer' },
	GetRelatedEntityRecords: { logicalName: 'getrelatedentityrecords', type: 'Boolean' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsValidated: { logicalName: 'isvalidated', readOnly: true, type: 'Boolean' },
	IsVisibleInGrid: { logicalName: 'isvisibleingrid', type: 'Boolean' },
	MobileOfflineProfileItemId: { logicalName: 'mobileofflineprofileitemid' },
	MobileOfflineProfileItemIdUnique: { logicalName: 'mobileofflineprofileitemidunique', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProcessId: { logicalName: 'processid' },
	ProfileItemEntityFilter: { logicalName: 'profileitementityfilter' },
	ProfileItemRule: { schemaName: 'ProfileItemRule', logicalName: '_profileitemrule_value', entityCollectionName: 'savedqueries', entityLogicalName: 'savedquery' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	RecordDistributionCriteria: { logicalName: 'recorddistributioncriteria', type: 'Integer' },
	RecordsOwnedByMe: { logicalName: 'recordsownedbyme', type: 'Boolean' },
	RecordsOwnedByMyBusinessUnit: { logicalName: 'recordsownedbymybusinessunit', type: 'Boolean' },
	RecordsOwnedByMyTeam: { logicalName: 'recordsownedbymyteam', type: 'Boolean' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	RelationshipData: { logicalName: 'relationshipdata' },
	SelectedColumns: { logicalName: 'selectedcolumns' },
	SelectedEntityMetadata: { logicalName: 'selectedentitymetadata', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StageId: { logicalName: 'stageid' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	SyncIntervalInMinutes: { logicalName: 'syncintervalinminutes', type: 'Integer' },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewQuery: { logicalName: 'viewquery' },
};

/**
 * MobileOfflineProfileItem WebApi class for early-bound style coding
 * Usage: const mobileOfflineProfileItem = new MobileOfflineProfileItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MobileOfflineProfileItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMobileOfflineProfileItemApi>(entity, 'mobileofflineprofileitem', 'mobileofflineprofileitems', MobileOfflineProfileItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MobileOfflineProfileItemApi extends IMobileOfflineProfileItemApi { }
