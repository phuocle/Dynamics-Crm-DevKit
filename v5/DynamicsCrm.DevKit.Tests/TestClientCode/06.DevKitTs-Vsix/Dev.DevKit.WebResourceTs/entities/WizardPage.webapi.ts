/**
 * WizardPage.webapi.ts - WizardPage WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for WizardPage
 * All fields return string representation of their values
 */
export interface IWizardPageFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly PageDataToPost: string;
	readonly PageSequenceNumber: string;
	readonly PageUrl: string;
	readonly VersionNumber: string;
	readonly WebWizardId: string;
	readonly WizardPageId: string;
}

/**
 * WizardPage WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWizardPageApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IWizardPageFormattedValue;
	/** Unique identifier of the user who created the wizard page. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the wizard page was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the wizardpage. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the wizard page. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the wizard page was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the wizardpage. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Data to post to the wizard page when requesting the page. */
	PageDataToPost: string | null;
	/** Sequence number of the wizard page. */
	PageSequenceNumber: number | null;
	/** URL for the wizard page. */
	PageUrl: string | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the wizard associated with this wizard page. */
	WebWizardId: DevKit.Guid | null;
	/** Unique identifier of the wizard page. */
	WizardPageId: DevKit.Guid | null;
}

const WizardPageFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PageDataToPost: { logicalName: 'pagedatatopost' },
	PageSequenceNumber: { logicalName: 'pagesequencenumber', type: 'Integer' },
	PageUrl: { logicalName: 'pageurl' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebWizardId: { schemaName: 'WebWizardId', logicalName: '_webwizardid_value', entityCollectionName: 'webwizards', entityLogicalName: 'webwizard' },
	WizardPageId: { logicalName: 'wizardpageid' },
};

/**
 * WizardPage WebApi class for early-bound style coding
 * Usage: const wizardPage = new WizardPageApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WizardPageApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWizardPageApi>(entity, 'wizardpage', 'wizardpages', WizardPageFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WizardPageApi extends IWizardPageApi { }
