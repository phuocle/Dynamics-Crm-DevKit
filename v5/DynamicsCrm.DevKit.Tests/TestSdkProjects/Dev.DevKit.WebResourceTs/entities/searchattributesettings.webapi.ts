/**
 * searchattributesettings.webapi.ts - searchattributesettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * searchattributesettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsearchattributesettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsearchattributesettingsApi, 'FormattedValue'>]: string };
	/** attributename */
	attributename: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** entityname */
	entityname: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
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
	/** Unique identifier for entity instances */
	searchattributesettingsId: DevKit.Guid | null;
	/** settings */
	settings: string | null;
	/** Status of the SearchAttributeSettings */
	statecode: number | null;
	/** Reason for the status of the SearchAttributeSettings */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const searchattributesettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	attributename: { logicalName: 'attributename' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	entityname: { logicalName: 'entityname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	searchattributesettingsId: { logicalName: 'searchattributesettingsid' },
	settings: { logicalName: 'settings' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * searchattributesettings WebApi class for early-bound style coding
 * Usage: const searchattributesettings = new searchattributesettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class searchattributesettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsearchattributesettingsApi>(entity, 'searchattributesettings', 'searchattributesettingses', searchattributesettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface searchattributesettingsApi extends IsearchattributesettingsApi { }
