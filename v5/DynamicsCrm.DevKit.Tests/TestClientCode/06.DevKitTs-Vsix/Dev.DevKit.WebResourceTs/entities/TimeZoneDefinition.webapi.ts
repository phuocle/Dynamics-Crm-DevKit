/**
 * TimeZoneDefinition.webapi.ts - TimeZoneDefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TimeZoneDefinition
 * All fields return string representation of their values
 */
export interface ITimeZoneDefinitionFormattedValue {
	readonly Bias: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DaylightName: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly RetiredOrder: string;
	readonly StandardName: string;
	readonly TimeZoneCode: string;
	readonly TimeZoneDefinitionId: string;
	readonly UserInterfaceName: string;
	readonly VersionNumber: string;
}

/**
 * TimeZoneDefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITimeZoneDefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITimeZoneDefinitionFormattedValue;
	/** Base time bias of the time zone. */
	Bias: number | null;
	/** Unique identifier of the user who created the time zone record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the time zone record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the timezonedefinition. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Time zone name for the daylight time. */
	DaylightName: string | null;
	/** Unique identifier of the user who last modified the time zone record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the time zone record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the timezonedefinition. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the time zone definition. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
	RetiredOrder: number | null;
	/** Time zone name for the standard time. */
	StandardName: string | null;
	/** Time zone identification code. */
	TimeZoneCode: number | null;
	/** Unique identifier of the time zone record. */
	TimeZoneDefinitionId: DevKit.Guid | null;
	/** Display name for the time zone in the Microsoft Windows registry. */
	UserInterfaceName: string | null;
	readonly VersionNumber: number | null;
}

const TimeZoneDefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Bias: { logicalName: 'bias', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DaylightName: { logicalName: 'daylightname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RetiredOrder: { logicalName: 'retiredorder', type: 'Integer' },
	StandardName: { logicalName: 'standardname' },
	TimeZoneCode: { logicalName: 'timezonecode', type: 'Integer' },
	TimeZoneDefinitionId: { logicalName: 'timezonedefinitionid' },
	UserInterfaceName: { logicalName: 'userinterfacename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TimeZoneDefinition WebApi class for early-bound style coding
 * Usage: const timeZoneDefinition = new TimeZoneDefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TimeZoneDefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITimeZoneDefinitionApi>(entity, 'timezonedefinition', 'timezonedefinitions', TimeZoneDefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TimeZoneDefinitionApi extends ITimeZoneDefinitionApi { }
