/**
 * TeamTemplate.webapi.ts - TeamTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TeamTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITeamTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITeamTemplateApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the team template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the team template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the team template. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Default access rights mask for the access teams associated with entity instances. */
	DefaultAccessRightsMask: number | null;
	/** Type additional information that describes the team. */
	Description: string | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Information about whether this team template is user-defined or system-defined. */
	readonly IsSystem: boolean | null;
	/** Unique identifier of the user who last modified the team template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the team template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the team template. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Object type code of entity which is enabled for access teams */
	ObjectTypeCode: number | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier of the team template. */
	TeamTemplateId: DevKit.Guid | null;
	/** Type the name of the team template. */
	TeamTemplateName: string | null;
	/** Version number for team template. */
	readonly versionnumber: number | null;
}

const TeamTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultAccessRightsMask: { logicalName: 'defaultaccessrightsmask', type: 'Integer' },
	Description: { logicalName: 'description' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsSystem: { logicalName: 'issystem', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TeamTemplateId: { logicalName: 'teamtemplateid' },
	TeamTemplateName: { logicalName: 'teamtemplatename' },
	versionnumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TeamTemplate WebApi class for early-bound style coding
 * Usage: const teamTemplate = new TeamTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TeamTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITeamTemplateApi>(entity, 'teamtemplate', 'teamtemplates', TeamTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TeamTemplateApi extends ITeamTemplateApi { }
