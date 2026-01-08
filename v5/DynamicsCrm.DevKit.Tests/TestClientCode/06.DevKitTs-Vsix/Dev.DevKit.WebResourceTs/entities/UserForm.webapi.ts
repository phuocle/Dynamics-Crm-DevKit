/**
 * UserForm.webapi.ts - UserForm WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for UserForm
 * All fields return string representation of their values
 */
export interface IUserFormFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly FormJson: string;
	readonly FormXml: string;
	readonly IsTabletEnabled: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly Type: string;
	readonly UserFormId: string;
	readonly VersionNumber: string;
}

/**
 * UserForm WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserFormApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IUserFormFormattedValue;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the form or dashboard, such as the filter criteria or intended audience. */
	Description: string | null;
	/** Json representation of the form layout. */
	FormJson: string | null;
	/** Shows the XML representation of the layout of the form or dashboard. */
	FormXml: string | null;
	/** Information that specifies whether the dashboard is enabled for tablet. */
	IsTabletEnabled: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the form or dashboard. */
	Name: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the dashboard. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the dashboard. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select the form type. */
	Type: number | null;
	/** Unique identifier of the user dashboard. */
	UserFormId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const UserFormFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	FormJson: { logicalName: 'formjson' },
	FormXml: { logicalName: 'formxml' },
	IsTabletEnabled: { logicalName: 'istabletenabled', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Type: { logicalName: 'type', type: 'Integer' },
	UserFormId: { logicalName: 'userformid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UserForm WebApi class for early-bound style coding
 * Usage: const userForm = new UserFormApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserFormApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserFormApi>(entity, 'userform', 'userforms', UserFormFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserFormApi extends IUserFormApi { }
