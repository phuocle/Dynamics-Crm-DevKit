/**
 * MetadataDifference.webapi.ts - MetadataDifference WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MetadataDifference WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMetadataDifferenceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMetadataDifferenceApi, 'FormattedValue'>]: string };
	/** Date and time when the metadata difference was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Difference Xml */
	DifferenceXml: string | null;
	/** Introduced Version */
	IntroducedVersion: number | null;
	/** Version in which the differences were introduced. */
	IntroducedVersionString: string | null;
	/** Unique identifier of the metadata difference. */
	MetadataDifferenceId: DevKit.Guid | null;
	/** Date and time when the metadata difference was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
}

const MetadataDifferenceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	DifferenceXml: { logicalName: 'differencexml' },
	IntroducedVersion: { logicalName: 'introducedversion', type: 'Number' },
	IntroducedVersionString: { logicalName: 'introducedversionstring' },
	MetadataDifferenceId: { logicalName: 'metadatadifferenceid' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
};

/**
 * MetadataDifference WebApi class for early-bound style coding
 * Usage: const metadataDifference = new MetadataDifferenceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MetadataDifferenceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMetadataDifferenceApi>(entity, 'metadatadifference', 'metadatadifferences', MetadataDifferenceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MetadataDifferenceApi extends IMetadataDifferenceApi { }
