/**
 * RibbonClientMetadata.webapi.ts - RibbonClientMetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RibbonClientMetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRibbonClientMetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRibbonClientMetadataApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Entity logical name */
	EntityLogicalName: string | null;
	/** Ribbon context */
	RibbonContext: string | null;
	/** Unique identifier of a ribbon client metadata. */
	RibbonId: DevKit.Guid | null;
	/** Unique identifier of the Ribbon client Metadata */
	readonly RibbonIdUnique: DevKit.Guid | null;
	/** Ribbon representation in JSON format. */
	RibbonJson: string | null;
	/** Reference to the Ribbon JSON file on Azure. */
	readonly RibbonJsonFileRef_name: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const RibbonClientMetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	RibbonContext: { logicalName: 'ribboncontext' },
	RibbonId: { logicalName: 'ribbonid' },
	RibbonIdUnique: { logicalName: 'ribbonidunique', readOnly: true },
	RibbonJson: { logicalName: 'ribbonjson' },
	RibbonJsonFileRef_name: { logicalName: 'ribbonjsonfileref', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RibbonClientMetadata WebApi class for early-bound style coding
 * Usage: const ribbonClientMetadata = new RibbonClientMetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RibbonClientMetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRibbonClientMetadataApi>(entity, 'ribbonclientmetadata', 'ribbonclientmetadata', RibbonClientMetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RibbonClientMetadataApi extends IRibbonClientMetadataApi { }
