/**
 * plannerbusinessscenario.webapi.ts - plannerbusinessscenario WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * plannerbusinessscenario WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IplannerbusinessscenarioApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IplannerbusinessscenarioApi, 'FormattedValue'>]: string };
	/** Buckets */
	Buckets: string | null;
	/** Display Name */
	DisplayName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
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
	/** Planner Business Scenario Id */
	plannerbusinessscenarioId: DevKit.Guid | null;
	/** Status of the Planner Business Scenario */
	statecode: number | null;
	/** Reason for the status of the Planner Business Scenario */
	statuscode: number | null;
	/** Sync Enabled */
	SyncEnabled: boolean | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique Name */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
	/** Web Resource Name */
	WebResourceName: string | null;
}

const plannerbusinessscenarioFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Buckets: { logicalName: 'buckets' },
	DisplayName: { logicalName: 'displayname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	plannerbusinessscenarioId: { logicalName: 'plannerbusinessscenarioid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SyncEnabled: { logicalName: 'syncenabled', type: 'Boolean' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceName: { logicalName: 'webresourcename' },
};

/**
 * plannerbusinessscenario WebApi class for early-bound style coding
 * Usage: const plannerbusinessscenario = new plannerbusinessscenarioApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class plannerbusinessscenarioApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IplannerbusinessscenarioApi>(entity, 'plannerbusinessscenario', 'plannerbusinessscenarios', plannerbusinessscenarioFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface plannerbusinessscenarioApi extends IplannerbusinessscenarioApi { }
