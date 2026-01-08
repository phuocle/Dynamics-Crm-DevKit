/**
 * AppModuleComponent.webapi.ts - AppModuleComponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AppModuleComponent
 * All fields return string representation of their values
 */
export interface IAppModuleComponentFormattedValue {
	readonly AppModuleComponentId: string;
	readonly AppModuleComponentIdUnique: string;
	readonly AppModuleIdUnique: string;
	readonly ComponentType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ExchangeRate: string;
	readonly IntroducedVersion: string;
	readonly IsDefault: string;
	readonly IsMetadata: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly ObjectId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RootAppModuleComponentId: string;
	readonly RootComponentBehavior: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * AppModuleComponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleComponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAppModuleComponentFormattedValue;
	/** Unique identifier for entity instances */
	AppModuleComponentId: DevKit.Guid | null;
	/** Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	AppModuleComponentIdUnique: DevKit.Guid | null;
	/** The App Module Id Unique */
	AppModuleIdUnique: DevKit.Guid | null;
	/** The object type code of the component. */
	ComponentType: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the Application Component with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Version in which the application component record is introduced. */
	IntroducedVersion: string | null;
	/** Is Default */
	IsDefault: boolean | null;
	/** Is Metadata */
	IsMetadata: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Object Id */
	ObjectId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The parent ID of the subcomponent, which will be a root */
	RootAppModuleComponentId: DevKit.Guid | null;
	/** Indicates the include behavior of the root component. */
	RootComponentBehavior: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const AppModuleComponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleComponentId: { logicalName: 'appmodulecomponentid' },
	AppModuleComponentIdUnique: { logicalName: 'appmodulecomponentidunique' },
	AppModuleIdUnique: { schemaName: 'AppModuleIdUnique', logicalName: '_appmoduleidunique_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	ComponentType: { logicalName: 'componenttype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsMetadata: { logicalName: 'ismetadata', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectId: { logicalName: 'objectid' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RootAppModuleComponentId: { logicalName: 'rootappmodulecomponentid' },
	RootComponentBehavior: { logicalName: 'rootcomponentbehavior', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppModuleComponent WebApi class for early-bound style coding
 * Usage: const appModuleComponent = new AppModuleComponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleComponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleComponentApi>(entity, 'appmodulecomponent', 'appmodulecomponents', AppModuleComponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleComponentApi extends IAppModuleComponentApi { }
