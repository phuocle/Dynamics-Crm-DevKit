/**
 * Import.webapi.ts - Import WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Import WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImportApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IImportApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the import was initiated. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type the email address that the import completion notification must be sent to. */
	EMailAddress: string | null;
	/** Unique identifier of the import job. */
	ImportId: DevKit.Guid | null;
	/** Information about whether the source of this import job is data import or data migration. */
	IsImport: boolean | null;
	/** Select whether to create or update records in Microsoft Dynamics 365 during the import job. */
	ModeCode: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the name of the import job, based on the import file and the entity being imported. */
	Name: string | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Business unit that owns the import job. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the import. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the import. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select whether to send a notification email message to a selected user after the import is completed. */
	SendNotification: boolean | null;
	/** Order in which the import was created. */
	readonly Sequence: number | null;
	/** Shows the status of the import job. By default, import jobs are active and can't be deactivated. */
	readonly StateCode: number | null;
	/** Shows the reason code that explains the import job's status to identify the job's stage of the import processes, from transforming the data to completed. */
	StatusCode: number | null;
}

const ImportFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EMailAddress: { logicalName: 'emailaddress' },
	ImportId: { logicalName: 'importid' },
	IsImport: { logicalName: 'isimport', type: 'Boolean' },
	ModeCode: { logicalName: 'modecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SendNotification: { logicalName: 'sendnotification', type: 'Boolean' },
	Sequence: { logicalName: 'sequence', readOnly: true, type: 'Integer' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * Import WebApi class for early-bound style coding
 * Usage: const import = new ImportApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImportApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImportApi>(entity, 'import', 'imports', ImportFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImportApi extends IImportApi { }
