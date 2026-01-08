/**
 * cardentityconnections.webapi.ts - cardentityconnections WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * cardentityconnections WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IcardentityconnectionsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IcardentityconnectionsApi, 'FormattedValue'>]: string };
	readonly cardentityconnectionsId: DevKit.Guid | null;
	readonly cardid: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly entityid: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const cardentityconnectionsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	cardentityconnectionsId: { logicalName: 'cardentityconnectionsid', readOnly: true },
	cardid: { logicalName: 'cardid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	entityid: { logicalName: 'entityid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * cardentityconnections WebApi class for early-bound style coding
 * Usage: const cardentityconnections = new cardentityconnectionsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class cardentityconnectionsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IcardentityconnectionsApi>(entity, 'cardentityconnections', '', cardentityconnectionsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface cardentityconnectionsApi extends IcardentityconnectionsApi { }
