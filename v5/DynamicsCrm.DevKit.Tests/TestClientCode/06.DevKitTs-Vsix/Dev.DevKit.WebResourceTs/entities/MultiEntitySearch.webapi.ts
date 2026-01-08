/**
 * MultiEntitySearch.webapi.ts - MultiEntitySearch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MultiEntitySearch
 * All fields return string representation of their values
 */
export interface IMultiEntitySearchFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly MultiEntitySearchId: string;
	readonly Name: string;
	readonly VersionNumber: string;
}

/**
 * MultiEntitySearch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMultiEntitySearchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMultiEntitySearchFormattedValue;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the multiple entity search. */
	readonly MultiEntitySearchId: DevKit.Guid | null;
	/** Shows the name of the multiple entity search. */
	readonly Name: string | null;
	readonly VersionNumber: number | null;
}

const MultiEntitySearchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MultiEntitySearchId: { logicalName: 'multientitysearchid', readOnly: true },
	Name: { logicalName: 'name', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MultiEntitySearch WebApi class for early-bound style coding
 * Usage: const multiEntitySearch = new MultiEntitySearchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MultiEntitySearchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMultiEntitySearchApi>(entity, 'multientitysearch', 'multientitysearches', MultiEntitySearchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MultiEntitySearchApi extends IMultiEntitySearchApi { }
