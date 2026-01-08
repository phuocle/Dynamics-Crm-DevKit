/**
 * WizardAccessPrivilege.webapi.ts - WizardAccessPrivilege WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * WizardAccessPrivilege WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWizardAccessPrivilegeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IWizardAccessPrivilegeApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the wizard access privilege record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the wizard access privilege record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the wizardaccessprivilege. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Logical name of the entity for which access privileges are required. */
	EntityName2: string | null;
	/** Unique identifier of the user who last modified the wizard access privilege record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the wizard access privilege record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the wizardaccessprivilege. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the wizard access privilege. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Name of the privilege required to access the wizard. */
	PrivilegeName: string | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the wizard associated with this wizard access privilege record. */
	WebWizardId: DevKit.Guid | null;
	/** Unique identifier of the access privilege. */
	WizardAccessPrivilegeId: DevKit.Guid | null;
}

const WizardAccessPrivilegeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityName2: { logicalName: 'entityname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PrivilegeName: { logicalName: 'privilegename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebWizardId: { schemaName: 'WebWizardId', logicalName: '_webwizardid_value', entityCollectionName: 'webwizards', entityLogicalName: 'webwizard' },
	WizardAccessPrivilegeId: { logicalName: 'wizardaccessprivilegeid' },
};

/**
 * WizardAccessPrivilege WebApi class for early-bound style coding
 * Usage: const wizardAccessPrivilege = new WizardAccessPrivilegeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WizardAccessPrivilegeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWizardAccessPrivilegeApi>(entity, 'wizardaccessprivilege', 'wizardaccessprivileges', WizardAccessPrivilegeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WizardAccessPrivilegeApi extends IWizardAccessPrivilegeApi { }
