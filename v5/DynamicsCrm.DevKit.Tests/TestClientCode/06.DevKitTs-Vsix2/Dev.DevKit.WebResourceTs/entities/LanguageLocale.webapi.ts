/**
 * LanguageLocale.webapi.ts - LanguageLocale WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * LanguageLocale WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ILanguageLocaleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ILanguageLocaleApi, 'FormattedValue'>]: string };
	/** Code */
	readonly Code: string | null;
	/** Language */
	readonly Language: string | null;
	/** LanguageLocaleId */
	LanguageLocaleId: DevKit.Guid | null;
	/** Locale ID */
	LocaleId: number | null;
	/** Name */
	readonly Name: string | null;
	/** Unique identifier of the organization associated with the language locale. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Region */
	readonly Region: string | null;
	/** State Code */
	statecode: number | null;
	/** Language Status Code */
	statuscode: number | null;
	readonly VersionNumber: number | null;
}

const LanguageLocaleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Code: { logicalName: 'code', readOnly: true },
	Language: { logicalName: 'language', readOnly: true },
	LanguageLocaleId: { logicalName: 'languagelocaleid' },
	LocaleId: { logicalName: 'localeid', type: 'Integer' },
	Name: { logicalName: 'name', readOnly: true },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Region: { logicalName: 'region', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * LanguageLocale WebApi class for early-bound style coding
 * Usage: const languageLocale = new LanguageLocaleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class LanguageLocaleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ILanguageLocaleApi>(entity, 'languagelocale', 'languagelocales', LanguageLocaleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface LanguageLocaleApi extends ILanguageLocaleApi { }
