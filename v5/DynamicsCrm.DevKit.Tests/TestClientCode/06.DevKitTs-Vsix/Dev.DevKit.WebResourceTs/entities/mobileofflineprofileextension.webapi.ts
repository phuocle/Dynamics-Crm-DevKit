/**
 * mobileofflineprofileextension.webapi.ts - mobileofflineprofileextension WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mobileofflineprofileextension
 * All fields return string representation of their values
 */
export interface ImobileofflineprofileextensionFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly FilterVersion: string;
	readonly ImportSequenceNumber: string;
	readonly mobileofflineprofileextensionId: string;
	readonly mobileofflineprofileid: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * mobileofflineprofileextension WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ImobileofflineprofileextensionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ImobileofflineprofileextensionFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Version number of delta filters in a profile */
	FilterVersion: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier for MobileOfflineProfileExtension entity instances */
	mobileofflineprofileextensionId: DevKit.Guid | null;
	/** Unique identifier for Mobile Offline Profile associated with Mobile Offline Profile Extension */
	mobileofflineprofileid: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Primary name field for mobile offline profile extension. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Status of the MobileOfflineProfileExtension */
	statecode: number | null;
	/** Reason for the status of the MobileOfflineProfileExtension */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const mobileofflineprofileextensionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FilterVersion: { logicalName: 'filterversion', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	mobileofflineprofileextensionId: { logicalName: 'mobileofflineprofileextensionid' },
	mobileofflineprofileid: { schemaName: 'mobileofflineprofileid', logicalName: '_mobileofflineprofileid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mobileofflineprofileextension WebApi class for early-bound style coding
 * Usage: const mobileofflineprofileextension = new mobileofflineprofileextensionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mobileofflineprofileextensionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ImobileofflineprofileextensionApi>(entity, 'mobileofflineprofileextension', 'mobileofflineprofileextensions', mobileofflineprofileextensionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mobileofflineprofileextensionApi extends ImobileofflineprofileextensionApi { }
