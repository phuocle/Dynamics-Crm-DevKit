/**
 * ReportCategory.webapi.ts - ReportCategory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ReportCategory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IReportCategoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IReportCategoryApi, 'FormattedValue'>]: string };
	/** Category of the report. */
	CategoryCode: number | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the report category. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the report category record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the report category. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the report category with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the report category. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the report category was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the report category. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the report category. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the report category. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the report category. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the report category. */
	ReportCategoryId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ReportCategoryIdUnique: DevKit.Guid | null;
	/** Unique identifier of the report. */
	ReportId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the Report category. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the report category. */
	readonly VersionNumber: number | null;
}

const ReportCategoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CategoryCode: { logicalName: 'categorycode', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ReportCategoryId: { logicalName: 'reportcategoryid' },
	ReportCategoryIdUnique: { logicalName: 'reportcategoryidunique', readOnly: true },
	ReportId: { schemaName: 'ReportId', logicalName: '_reportid_value', entityCollectionName: 'reports', entityLogicalName: 'report' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ReportCategory WebApi class for early-bound style coding
 * Usage: const reportCategory = new ReportCategoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ReportCategoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IReportCategoryApi>(entity, 'reportcategory', 'reportcategories', ReportCategoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ReportCategoryApi extends IReportCategoryApi { }
