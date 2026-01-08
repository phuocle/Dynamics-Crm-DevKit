/**
 * msdyn_msdyn_kbattachment_knowledgearticle.webapi.ts - msdyn_msdyn_kbattachment_knowledgearticle WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_msdyn_kbattachment_knowledgearticle
 * All fields return string representation of their values
 */
export interface Imsdyn_msdyn_kbattachment_knowledgearticleFormattedValue {
	readonly knowledgearticleid: string;
	readonly msdyn_kbattachmentid: string;
	readonly msdyn_msdyn_kbattachment_knowledgearticleId: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_msdyn_kbattachment_knowledgearticle WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_msdyn_kbattachment_knowledgearticleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_msdyn_kbattachment_knowledgearticleFormattedValue;
	readonly knowledgearticleid: DevKit.Guid | null;
	readonly msdyn_kbattachmentid: DevKit.Guid | null;
	readonly msdyn_msdyn_kbattachment_knowledgearticleId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const msdyn_msdyn_kbattachment_knowledgearticleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	knowledgearticleid: { logicalName: 'knowledgearticleid', readOnly: true },
	msdyn_kbattachmentid: { logicalName: 'msdyn_kbattachmentid', readOnly: true },
	msdyn_msdyn_kbattachment_knowledgearticleId: { logicalName: 'msdyn_msdyn_kbattachment_knowledgearticleid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_msdyn_kbattachment_knowledgearticle WebApi class for early-bound style coding
 * Usage: const msdyn_msdyn_kbattachment_knowledgearticle = new msdyn_msdyn_kbattachment_knowledgearticleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_msdyn_kbattachment_knowledgearticleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_msdyn_kbattachment_knowledgearticleApi>(entity, 'msdyn_msdyn_kbattachment_knowledgearticle', '', msdyn_msdyn_kbattachment_knowledgearticleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_msdyn_kbattachment_knowledgearticleApi extends Imsdyn_msdyn_kbattachment_knowledgearticleApi { }
