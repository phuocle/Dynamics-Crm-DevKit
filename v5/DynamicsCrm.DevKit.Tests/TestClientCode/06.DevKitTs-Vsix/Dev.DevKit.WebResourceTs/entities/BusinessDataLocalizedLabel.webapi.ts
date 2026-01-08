/**
 * BusinessDataLocalizedLabel.webapi.ts - BusinessDataLocalizedLabel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BusinessDataLocalizedLabel
 * All fields return string representation of their values
 */
export interface IBusinessDataLocalizedLabelFormattedValue {
	readonly BusinessDataLocalizedLabelId: string;
	readonly Label: string;
	readonly LanguageId: string;
	readonly ObjectColumnName: string;
	readonly ObjectColumnNumber: string;
	readonly ObjectId: string;
	readonly VersionNumber: string;
}

/**
 * BusinessDataLocalizedLabel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBusinessDataLocalizedLabelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBusinessDataLocalizedLabelFormattedValue;
	/** Unique identifier of the Business Data Localized Label. */
	BusinessDataLocalizedLabelId: DevKit.Guid | null;
	/** Label */
	Label: string | null;
	/** Language Id */
	LanguageId: number | null;
	/** Object Column Name */
	ObjectColumnName: string | null;
	/** Object Column Number */
	readonly ObjectColumnNumber: number | null;
	/** Object Id */
	ObjectId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const BusinessDataLocalizedLabelFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessDataLocalizedLabelId: { logicalName: 'businessdatalocalizedlabelid' },
	Label: { logicalName: 'label' },
	LanguageId: { logicalName: 'languageid', type: 'Integer' },
	ObjectColumnName: { logicalName: 'objectcolumnname' },
	ObjectColumnNumber: { logicalName: 'objectcolumnnumber', readOnly: true, type: 'Integer' },
	ObjectId: { logicalName: 'objectid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * BusinessDataLocalizedLabel WebApi class for early-bound style coding
 * Usage: const businessDataLocalizedLabel = new BusinessDataLocalizedLabelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BusinessDataLocalizedLabelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBusinessDataLocalizedLabelApi>(entity, 'businessdatalocalizedlabel', 'businessdatalocalizedlabels', BusinessDataLocalizedLabelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BusinessDataLocalizedLabelApi extends IBusinessDataLocalizedLabelApi { }
