/**
 * adx_kbarticle_kbarticle.webapi.ts - adx_kbarticle_kbarticle WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for adx_kbarticle_kbarticle
 * All fields return string representation of their values
 */
export interface Iadx_kbarticle_kbarticleFormattedValue {
	readonly adx_kbarticle_kbarticleId: string;
	readonly kbarticleidOne: string;
	readonly kbarticleidTwo: string;
	readonly VersionNumber: string;
}

/**
 * adx_kbarticle_kbarticle WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_kbarticle_kbarticleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iadx_kbarticle_kbarticleFormattedValue;
	readonly adx_kbarticle_kbarticleId: DevKit.Guid | null;
	readonly kbarticleidOne: DevKit.Guid | null;
	readonly kbarticleidTwo: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const adx_kbarticle_kbarticleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_kbarticle_kbarticleId: { logicalName: 'adx_kbarticle_kbarticleid', readOnly: true },
	kbarticleidOne: { logicalName: 'kbarticleidone', readOnly: true },
	kbarticleidTwo: { logicalName: 'kbarticleidtwo', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_kbarticle_kbarticle WebApi class for early-bound style coding
 * Usage: const adx_kbarticle_kbarticle = new adx_kbarticle_kbarticleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_kbarticle_kbarticleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_kbarticle_kbarticleApi>(entity, 'adx_kbarticle_kbarticle', '', adx_kbarticle_kbarticleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_kbarticle_kbarticleApi extends Iadx_kbarticle_kbarticleApi { }
