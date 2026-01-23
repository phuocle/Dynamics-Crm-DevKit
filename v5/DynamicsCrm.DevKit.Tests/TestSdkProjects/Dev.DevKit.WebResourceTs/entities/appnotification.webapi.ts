/**
 * appnotification.webapi.ts - appnotification WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * appnotification WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IappnotificationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IappnotificationApi, 'FormattedValue'>]: string };
	/** This field is not used */
	AppModuleId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	appnotificationId: DevKit.Guid | null;
	/** Body of the notification */
	Body: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Custom data for the notification that can be used by the notification card */
	Data: string | null;
	/** IconType */
	IconType: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Partitioning will be based on owner and it is recommended to specify this field for all operations for performance reason */
	PartitionId: string | null;
	/** Priority of the notification */
	Priority: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Title for the notification */
	Title: string | null;
	/** Type of toast behavior for the notification */
	ToastType: number | null;
	/** After the specified number of seconds the notification will be deleted */
	TTLInSeconds: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const appnotificationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleId: { schemaName: 'AppModuleId', logicalName: '_appmoduleid_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	appnotificationId: { logicalName: 'appnotificationid' },
	Body: { logicalName: 'body' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	IconType: { logicalName: 'icontype', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	ToastType: { logicalName: 'toasttype', type: 'Integer' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * appnotification WebApi class for early-bound style coding
 * Usage: const appnotification = new appnotificationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class appnotificationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IappnotificationApi>(entity, 'appnotification', 'appnotifications', appnotificationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface appnotificationApi extends IappnotificationApi { }
