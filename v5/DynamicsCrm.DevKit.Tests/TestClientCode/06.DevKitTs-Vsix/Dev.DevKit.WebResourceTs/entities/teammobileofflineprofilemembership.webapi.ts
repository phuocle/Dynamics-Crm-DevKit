/**
 * teammobileofflineprofilemembership.webapi.ts - teammobileofflineprofilemembership WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * teammobileofflineprofilemembership WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IteammobileofflineprofilemembershipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IteammobileofflineprofilemembershipApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** MobileOfflineProfileId */
	MobileOfflineProfileId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Status of the TeamMobileOfflineProfileMembership */
	statecode: number | null;
	/** Reason for the status of the TeamMobileOfflineProfileMembership */
	statuscode: number | null;
	/** TeamId */
	TeamId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	teammobileofflineprofilemembershipId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of TeamMobileOfflineProfileMembership. */
	readonly VersionNumber: number | null;
}

const teammobileofflineprofilemembershipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MobileOfflineProfileId: { schemaName: 'MobileOfflineProfileId', logicalName: '_mobileofflineprofileid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TeamId: { schemaName: 'TeamId', logicalName: '_teamid_value', entityCollectionName: 'teams', entityLogicalName: 'team' },
	teammobileofflineprofilemembershipId: { logicalName: 'teammobileofflineprofilemembershipid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * teammobileofflineprofilemembership WebApi class for early-bound style coding
 * Usage: const teammobileofflineprofilemembership = new teammobileofflineprofilemembershipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class teammobileofflineprofilemembershipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IteammobileofflineprofilemembershipApi>(entity, 'teammobileofflineprofilemembership', 'teammobileofflineprofilememberships', teammobileofflineprofilemembershipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface teammobileofflineprofilemembershipApi extends IteammobileofflineprofilemembershipApi { }
