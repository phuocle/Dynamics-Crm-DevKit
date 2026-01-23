/**
 * WebWizard.webapi.ts - WebWizard WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * WebWizard WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWebWizardApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IWebWizardApi, 'FormattedValue'>]: string };
	/** Privileges required to use this wizard, separated with commas (,). */
	AccessPrivileges: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the wizard definition. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the wizard definition was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the webwizard. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Information about whether all pages for this wizard are statically defined. */
	IsStaticPageSequence: boolean | null;
	/** Unique identifier of the user who last modified the wizard definition. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the wizard definition was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the webwizard. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the wizard */
	Name: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Sequence number of the first page of this wizard. */
	StartPageSequenceNumber: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Title of the wizard. */
	TitleResourceString: string | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the wizard. */
	WebWizardId: DevKit.Guid | null;
	/** Unique identifier of the Web Wizard. */
	readonly WebWizardIdUnique: DevKit.Guid | null;
	/** Window height for the wizard. */
	WizardPageHeight: number | null;
	/** Window width for the wizard. */
	WizardPageWidth: number | null;
}

const WebWizardFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccessPrivileges: { logicalName: 'accessprivileges' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsStaticPageSequence: { logicalName: 'isstaticpagesequence', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StartPageSequenceNumber: { logicalName: 'startpagesequencenumber', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TitleResourceString: { logicalName: 'titleresourcestring' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebWizardId: { logicalName: 'webwizardid' },
	WebWizardIdUnique: { logicalName: 'webwizardidunique', readOnly: true },
	WizardPageHeight: { logicalName: 'wizardpageheight', type: 'Integer' },
	WizardPageWidth: { logicalName: 'wizardpagewidth', type: 'Integer' },
};

/**
 * WebWizard WebApi class for early-bound style coding
 * Usage: const webWizard = new WebWizardApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WebWizardApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWebWizardApi>(entity, 'webwizard', 'webwizards', WebWizardFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WebWizardApi extends IWebWizardApi { }
