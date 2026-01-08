/**
 * TimeZoneLocalizedName.webapi.ts - TimeZoneLocalizedName WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TimeZoneLocalizedName
 * All fields return string representation of their values
 */
export interface ITimeZoneLocalizedNameFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CultureId: string;
	readonly DaylightName: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly StandardName: string;
	readonly TimeZoneDefinitionId: string;
	readonly TimeZoneLocalizedNameId: string;
	readonly UserInterfaceName: string;
	readonly VersionNumber: string;
}

/**
 * TimeZoneLocalizedName WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITimeZoneLocalizedNameApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITimeZoneLocalizedNameFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the timezonelocalizedname. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the culture that the UI names are encoded in. */
	CultureId: number | null;
	/** Name of the time zone for the daylight time. */
	DaylightName: string | null;
	/** Unique identifier of the user who last modified the time zone localized name. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the timezonelocalizedname. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the time zone localized name. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Name of the time zone for the standard time. */
	StandardName: string | null;
	/** Unique identifier of time zone definition entity instances. */
	TimeZoneDefinitionId: DevKit.Guid | null;
	/** Unique identifier of entity instances. */
	TimeZoneLocalizedNameId: DevKit.Guid | null;
	/** Unique display name for the time zone in the Microsoft Windows registry. */
	UserInterfaceName: string | null;
	readonly VersionNumber: number | null;
}

const TimeZoneLocalizedNameFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CultureId: { logicalName: 'cultureid', type: 'Integer' },
	DaylightName: { logicalName: 'daylightname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	StandardName: { logicalName: 'standardname' },
	TimeZoneDefinitionId: { schemaName: 'TimeZoneDefinitionId', logicalName: '_timezonedefinitionid_value', entityCollectionName: 'timezonedefinitions', entityLogicalName: 'timezonedefinition' },
	TimeZoneLocalizedNameId: { logicalName: 'timezonelocalizednameid' },
	UserInterfaceName: { logicalName: 'userinterfacename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TimeZoneLocalizedName WebApi class for early-bound style coding
 * Usage: const timeZoneLocalizedName = new TimeZoneLocalizedNameApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TimeZoneLocalizedNameApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITimeZoneLocalizedNameApi>(entity, 'timezonelocalizedname', 'timezonelocalizednames', TimeZoneLocalizedNameFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TimeZoneLocalizedNameApi extends ITimeZoneLocalizedNameApi { }
