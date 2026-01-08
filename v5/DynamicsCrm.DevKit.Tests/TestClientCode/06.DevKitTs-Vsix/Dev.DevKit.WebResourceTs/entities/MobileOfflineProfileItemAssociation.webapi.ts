/**
 * MobileOfflineProfileItemAssociation.webapi.ts - MobileOfflineProfileItemAssociation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MobileOfflineProfileItemAssociation
 * All fields return string representation of their values
 */
export interface IMobileOfflineProfileItemAssociationFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly IsValidated: string;
	readonly MobileOfflineProfileItemAssociationId: string;
	readonly MobileOfflineProfileItemAssociationIdUnique: string;
	readonly MobileOfflineProfileItemId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ProcessId: string;
	readonly ProfileItemAssociationEntityFilter: string;
	readonly PublishedOn_UtcDateAndTime: string;
	readonly RelationshipData: string;
	readonly RelationshipDisplayName: string;
	readonly RelationshipId: string;
	readonly RelationshipName: string;
	readonly SelectedRelationShipsSchema: string;
	readonly SolutionId: string;
	readonly StageId: string;
	readonly SupportingSolutionId: string;
	readonly TraversedPath: string;
	readonly VersionNumber: string;
}

/**
 * MobileOfflineProfileItemAssociation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMobileOfflineProfileItemAssociationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMobileOfflineProfileItemAssociationFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Version in which the Mobile offline Profile Item Association is introduced. */
	IntroducedVersion: string | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Information about whether profile item association is validated or not */
	readonly IsValidated: boolean | null;
	/** Unique identifier of the mobile offline profile item associaition. */
	MobileOfflineProfileItemAssociationId: DevKit.Guid | null;
	/** For Internal Use Only */
	readonly MobileOfflineProfileItemAssociationIdUnique: DevKit.Guid | null;
	/** Id of the parent profile item. */
	MobileOfflineProfileItemId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Enter the name of the mobile offline profile item association. */
	Name: string | null;
	/** Unique identifier of the organization associated with the Mobile Offline Profile Item Association. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Profile item association entity filter criteria. */
	ProfileItemAssociationEntityFilter: string | null;
	/** Displays the last published date time. */
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Internal Use Only */
	RelationshipData: string | null;
	/** Entity relationship schema name */
	RelationshipDisplayName: string | null;
	/** Shows the relationship */
	RelationshipId: DevKit.Guid | null;
	/** Display name of entity relationship */
	readonly RelationshipName: string | null;
	/** List of relationships of entity selected in parent profile item */
	SelectedRelationShipsSchema: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Version number of the Mobile Offline profileitemassociation. */
	readonly VersionNumber: number | null;
}

const MobileOfflineProfileItemAssociationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsValidated: { logicalName: 'isvalidated', readOnly: true, type: 'Boolean' },
	MobileOfflineProfileItemAssociationId: { logicalName: 'mobileofflineprofileitemassociationid' },
	MobileOfflineProfileItemAssociationIdUnique: { logicalName: 'mobileofflineprofileitemassociationidunique', readOnly: true },
	MobileOfflineProfileItemId: { schemaName: 'MobileOfflineProfileItemId', logicalName: '_mobileofflineprofileitemid_value', entityCollectionName: 'mobileofflineprofileitems', entityLogicalName: 'mobileofflineprofileitem' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProcessId: { logicalName: 'processid' },
	ProfileItemAssociationEntityFilter: { logicalName: 'profileitemassociationentityfilter' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	RelationshipData: { logicalName: 'relationshipdata' },
	RelationshipDisplayName: { logicalName: 'relationshipdisplayname' },
	RelationshipId: { logicalName: 'relationshipid' },
	RelationshipName: { logicalName: 'relationshipname', readOnly: true },
	SelectedRelationShipsSchema: { logicalName: 'selectedrelationshipsschema', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StageId: { logicalName: 'stageid' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MobileOfflineProfileItemAssociation WebApi class for early-bound style coding
 * Usage: const mobileOfflineProfileItemAssociation = new MobileOfflineProfileItemAssociationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MobileOfflineProfileItemAssociationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMobileOfflineProfileItemAssociationApi>(entity, 'mobileofflineprofileitemassociation', 'mobileofflineprofileitemassociations', MobileOfflineProfileItemAssociationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MobileOfflineProfileItemAssociationApi extends IMobileOfflineProfileItemAssociationApi { }
