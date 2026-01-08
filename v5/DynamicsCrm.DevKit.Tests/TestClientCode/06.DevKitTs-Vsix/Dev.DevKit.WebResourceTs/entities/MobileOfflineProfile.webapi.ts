/**
 * MobileOfflineProfile.webapi.ts - MobileOfflineProfile WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MobileOfflineProfile
 * All fields return string representation of their values
 */
export interface IMobileOfflineProfileFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly IsValidated: string;
	readonly MobileOfflineProfileId: string;
	readonly MobileOfflineProfileIdUnique: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly ProcessId: string;
	readonly PublishedOn_UtcDateAndTime: string;
	readonly SelectedEntityMetadata: string;
	readonly SolutionId: string;
	readonly StageId: string;
	readonly SupportingSolutionId: string;
	readonly TraversedPath: string;
	readonly VersionNumber: string;
}

/**
 * MobileOfflineProfile WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMobileOfflineProfileApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMobileOfflineProfileFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter a description of the mobile offline profile. */
	Description: string | null;
	/** Version in which the Mobile offline Profile is introduced. */
	IntroducedVersion: string | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Information about whether profile is validated or not */
	readonly IsValidated: boolean | null;
	/** Unique identifier of the mobile offline profile. */
	MobileOfflineProfileId: DevKit.Guid | null;
	/** For Internal Use Only */
	readonly MobileOfflineProfileIdUnique: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Enter the name of the mobile offline profile. */
	Name: string | null;
	/** Unique identifier of the organization associated with the Mobile Offline Profile. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Displays the last published date time. */
	readonly PublishedOn_UtcDateAndTime: Date | null;
	/** Internal Use Only */
	readonly SelectedEntityMetadata: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Version number of the Mobile Offline Profile. */
	readonly VersionNumber: number | null;
}

const MobileOfflineProfileFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsValidated: { logicalName: 'isvalidated', readOnly: true, type: 'Boolean' },
	MobileOfflineProfileId: { logicalName: 'mobileofflineprofileid' },
	MobileOfflineProfileIdUnique: { logicalName: 'mobileofflineprofileidunique', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ProcessId: { logicalName: 'processid' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', readOnly: true, type: 'DateTime' },
	SelectedEntityMetadata: { logicalName: 'selectedentitymetadata', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StageId: { logicalName: 'stageid' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TraversedPath: { logicalName: 'traversedpath' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MobileOfflineProfile WebApi class for early-bound style coding
 * Usage: const mobileOfflineProfile = new MobileOfflineProfileApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MobileOfflineProfileApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMobileOfflineProfileApi>(entity, 'mobileofflineprofile', 'mobileofflineprofiles', MobileOfflineProfileFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MobileOfflineProfileApi extends IMobileOfflineProfileApi { }
