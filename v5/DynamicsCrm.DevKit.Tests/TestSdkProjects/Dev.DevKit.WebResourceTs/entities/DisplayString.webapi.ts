/**
 * DisplayString.webapi.ts - DisplayString WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * DisplayString WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDisplayStringApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDisplayStringApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the display string. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the display string was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the displaystring. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Comment for a customized display string. */
	CustomComment: string | null;
	/** Customized display string. */
	CustomDisplayString: string | null;
	/** Unique identifier of the display string. */
	DisplayStringId: DevKit.Guid | null;
	/** For internal use only. */
	readonly DisplayStringIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly DisplayStringKey: string | null;
	/** Parameters used for formatting the display string. */
	readonly FormatParameters: number | null;
	readonly IsManaged: boolean | null;
	/** Language code of the display string. */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the display string. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the display string was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the displaystring. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the display string. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Published display string. */
	readonly PublishedDisplayString: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const DisplayStringFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomComment: { logicalName: 'customcomment' },
	CustomDisplayString: { logicalName: 'customdisplaystring' },
	DisplayStringId: { logicalName: 'displaystringid' },
	DisplayStringIdUnique: { logicalName: 'displaystringidunique', readOnly: true },
	DisplayStringKey: { logicalName: 'displaystringkey', readOnly: true },
	FormatParameters: { logicalName: 'formatparameters', readOnly: true, type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PublishedDisplayString: { logicalName: 'publisheddisplaystring', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DisplayString WebApi class for early-bound style coding
 * Usage: const displayString = new DisplayStringApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DisplayStringApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDisplayStringApi>(entity, 'displaystring', 'displaystrings', DisplayStringFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DisplayStringApi extends IDisplayStringApi { }
