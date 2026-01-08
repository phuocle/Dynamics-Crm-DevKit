/**
 * UserEntityInstanceData.webapi.ts - UserEntityInstanceData WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserEntityInstanceData WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserEntityInstanceDataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserEntityInstanceDataApi, 'FormattedValue'>]: string };
	/** Common end date */
	CommonEnd_UtcDateAndTime: Date | null;
	/** Common start date */
	CommonStart_UtcDateAndTime: Date | null;
	/** Due Date */
	DueDate_UtcDateAndTime: Date | null;
	/** Flag due by */
	FlagDueBy_UtcDateAndTime: Date | null;
	/** Flag request */
	FlagRequest: string | null;
	/** Flag status. */
	FlagStatus: number | null;
	/** Unique identifier of the source record. */
	ObjectId: DevKit.Guid | null;
	/** Object Type Code */
	ObjectTypeCode: number | null;
	/** Unique identifier of the user or team who owns the user entity instance data. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns this. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns this object. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns this object. */
	readonly OwningUser: DevKit.Guid | null;
	/** Personal categories */
	PersonalCategories: string | null;
	/** Indicates whether a reminder is set on this object. */
	ReminderSet: boolean | null;
	/** Reminder time */
	ReminderTime_UtcDateAndTime: Date | null;
	/** Start Time */
	StartTime_UtcDateAndTime: Date | null;
	/** To Do item flags. */
	ToDoItemFlags: number | null;
	/** For internal use only. */
	ToDoOrdinalDate_UtcDateAndTime: Date | null;
	/** For internal use only. */
	ToDoSubOrdinal: string | null;
	/** For internal use only. */
	ToDoTitle: string | null;
	/** Unique identifier user entity */
	UserEntityInstanceDataId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const UserEntityInstanceDataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CommonEnd_UtcDateAndTime: { logicalName: 'commonend', type: 'DateTime' },
	CommonStart_UtcDateAndTime: { logicalName: 'commonstart', type: 'DateTime' },
	DueDate_UtcDateAndTime: { logicalName: 'duedate', type: 'DateTime' },
	FlagDueBy_UtcDateAndTime: { logicalName: 'flagdueby', type: 'DateTime' },
	FlagRequest: { logicalName: 'flagrequest' },
	FlagStatus: { logicalName: 'flagstatus', type: 'Integer' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PersonalCategories: { logicalName: 'personalcategories' },
	ReminderSet: { logicalName: 'reminderset', type: 'Boolean' },
	ReminderTime_UtcDateAndTime: { logicalName: 'remindertime', type: 'DateTime' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	ToDoItemFlags: { logicalName: 'todoitemflags', type: 'Integer' },
	ToDoOrdinalDate_UtcDateAndTime: { logicalName: 'todoordinaldate', type: 'DateTime' },
	ToDoSubOrdinal: { logicalName: 'todosubordinal' },
	ToDoTitle: { logicalName: 'todotitle' },
	UserEntityInstanceDataId: { logicalName: 'userentityinstancedataid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UserEntityInstanceData WebApi class for early-bound style coding
 * Usage: const userEntityInstanceData = new UserEntityInstanceDataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserEntityInstanceDataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserEntityInstanceDataApi>(entity, 'userentityinstancedata', 'userentityinstancedatas', UserEntityInstanceDataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserEntityInstanceDataApi extends IUserEntityInstanceDataApi { }
