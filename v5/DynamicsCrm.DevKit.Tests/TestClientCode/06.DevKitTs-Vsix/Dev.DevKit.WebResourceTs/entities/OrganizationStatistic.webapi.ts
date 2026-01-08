/**
 * OrganizationStatistic.webapi.ts - OrganizationStatistic WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OrganizationStatistic
 * All fields return string representation of their values
 */
export interface IOrganizationStatisticFormattedValue {
	readonly Hour: string;
	readonly OrganizationStatisticId: string;
	readonly ServerName: string;
	readonly StatisticType: string;
	readonly StatisticValue: string;
}

/**
 * OrganizationStatistic WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOrganizationStatisticApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOrganizationStatisticFormattedValue;
	/** Hour that the statistic measurement was taken. */
	readonly Hour: number | null;
	/** Unique identifier of the record. */
	readonly OrganizationStatisticId: DevKit.Guid | null;
	/** Server that owns this record. */
	readonly ServerName: string | null;
	/** Statistic type that is being measured. */
	readonly StatisticType: number | null;
	/** Value of the statistic. */
	readonly StatisticValue: number | null;
}

const OrganizationStatisticFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Hour: { logicalName: 'hour', readOnly: true, type: 'Integer' },
	OrganizationStatisticId: { logicalName: 'organizationstatisticid', readOnly: true },
	ServerName: { logicalName: 'servername', readOnly: true },
	StatisticType: { logicalName: 'statistictype', readOnly: true, type: 'Integer' },
	StatisticValue: { logicalName: 'statisticvalue', readOnly: true, type: 'Integer' },
};

/**
 * OrganizationStatistic WebApi class for early-bound style coding
 * Usage: const organizationStatistic = new OrganizationStatisticApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OrganizationStatisticApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOrganizationStatisticApi>(entity, 'organizationstatistic', 'organizationstatistics', OrganizationStatisticFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OrganizationStatisticApi extends IOrganizationStatisticApi { }
