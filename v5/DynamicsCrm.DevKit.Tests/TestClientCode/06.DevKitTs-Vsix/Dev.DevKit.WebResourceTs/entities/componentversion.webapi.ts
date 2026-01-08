/**
 * componentversion.webapi.ts - componentversion WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * componentversion WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcomponentversionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcomponentversionApi, 'FormattedValue'>]: string };
	/** Change Summary */
	ChangeSummary: string | null;
	/** Owning component. */
	Component: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	readonly componentversionId: DevKit.Guid | null;
	/** Version Name */
	componentversionname: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Operation */
	Operation: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Base version that was restored. */
	RestoredFromVersion: DevKit.Guid | null;
	/** System Change Summary */
	SystemChangeSummary: string | null;
}

const componentversionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChangeSummary: { logicalName: 'changesummary' },
	Component: { schemaName: 'Component', logicalName: '_component_value', entityCollectionName: 'desktopflowbinaries', entityLogicalName: 'desktopflowbinary' },
	componentversionId: { logicalName: 'componentversionid', readOnly: true },
	componentversionname: { logicalName: 'componentversionname' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	Operation: { logicalName: 'operation', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RestoredFromVersion: { schemaName: 'RestoredFromVersion', logicalName: '_restoredfromversion_value', entityCollectionName: 'componentversions', entityLogicalName: 'componentversion' },
	SystemChangeSummary: { logicalName: 'systemchangesummary' },
};

/**
 * componentversion WebApi class for early-bound style coding
 * Usage: const componentversion = new componentversionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class componentversionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcomponentversionApi>(entity, 'componentversion', 'componentversions', componentversionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface componentversionApi extends IcomponentversionApi { }
