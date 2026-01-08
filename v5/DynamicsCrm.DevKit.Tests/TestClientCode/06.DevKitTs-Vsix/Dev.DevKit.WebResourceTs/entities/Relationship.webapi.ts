/**
 * Relationship.webapi.ts - Relationship WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Relationship
 * All fields return string representation of their values
 */
export interface IRelationshipFormattedValue {
	readonly CascadeArchive: string;
	readonly ComponentState: string;
	readonly EntityKeyId: string;
	readonly IsRelationshipAttributeDenormalized: string;
	readonly Name: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RelationshipId: string;
	readonly SolutionId: string;
	readonly VersionNumber: string;
}

/**
 * Relationship WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRelationshipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRelationshipFormattedValue;
	/** Cascade archive setting */
	readonly CascadeArchive: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Referenced Entity's Alternate Key */
	EntityKeyId: DevKit.Guid | null;
	/** Is the relationship attribute denormalized. */
	readonly IsRelationshipAttributeDenormalized: boolean | null;
	/** Name of the relationship. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the entity relationship. */
	RelationshipId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The version number of this relationship. */
	readonly VersionNumber: number | null;
}

const RelationshipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CascadeArchive: { logicalName: 'cascadearchive', readOnly: true, type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityKeyId: { logicalName: 'entitykeyid' },
	IsRelationshipAttributeDenormalized: { logicalName: 'isrelationshipattributedenormalized', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RelationshipId: { logicalName: 'relationshipid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Relationship WebApi class for early-bound style coding
 * Usage: const relationship = new RelationshipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RelationshipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRelationshipApi>(entity, 'relationship', 'relationships', RelationshipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RelationshipApi extends IRelationshipApi { }
