/**
 * ImageDescriptor.webapi.ts - ImageDescriptor WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ImageDescriptor
 * All fields return string representation of their values
 */
export interface IImageDescriptorFormattedValue {
	readonly ColorDepthBits: string;
	readonly FileId_name: string;
	readonly FileLocation: string;
	readonly FileName: string;
	readonly FileSizeBytes: string;
	readonly FileType: string;
	readonly FullImageData: string;
	readonly FullImageURL: string;
	readonly ImageData: string;
	readonly ImageDescription: string;
	readonly ImageDescriptorId: string;
	readonly ImagePixelHeight: string;
	readonly ImagePixelWidth: string;
	readonly ImageTags: string;
	readonly ImageTimestamp: string;
	readonly ImageURL: string;
	readonly MimeType: string;
	readonly ObjectId: string;
	readonly Size: string;
	readonly Title: string;
	readonly versionnumber: string;
}

/**
 * ImageDescriptor WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IImageDescriptorApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IImageDescriptorFormattedValue;
	ColorDepthBits: number | null;
	/** Lookup to FileAttachment */
	readonly FileId_name: string | null;
	FileLocation: string | null;
	FileName: string | null;
	FileSizeBytes: number | null;
	FileType: string | null;
	FullImageData: string | null;
	FullImageURL: string | null;
	ImageData: string | null;
	ImageDescription: string | null;
	ImageDescriptorId: DevKit.Guid | null;
	ImagePixelHeight: number | null;
	ImagePixelWidth: number | null;
	ImageTags: string | null;
	readonly ImageTimestamp: number | null;
	readonly ImageURL: string | null;
	MimeType: string | null;
	readonly ObjectId: DevKit.Guid | null;
	readonly Size: number | null;
	Title: string | null;
	/** Version number of Image descriptor. */
	readonly versionnumber: number | null;
}

const ImageDescriptorFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ColorDepthBits: { logicalName: 'colordepthbits', type: 'Integer' },
	FileId_name: { logicalName: 'fileid', readOnly: true },
	FileLocation: { logicalName: 'filelocation' },
	FileName: { logicalName: 'filename' },
	FileSizeBytes: { logicalName: 'filesizebytes', type: 'Integer' },
	FileType: { logicalName: 'filetype' },
	FullImageData: { logicalName: 'fullimagedata' },
	FullImageURL: { logicalName: 'fullimageurl' },
	ImageData: { logicalName: 'imagedata' },
	ImageDescription: { logicalName: 'imagedescription' },
	ImageDescriptorId: { logicalName: 'imagedescriptorid' },
	ImagePixelHeight: { logicalName: 'imagepixelheight', type: 'Integer' },
	ImagePixelWidth: { logicalName: 'imagepixelwidth', type: 'Integer' },
	ImageTags: { logicalName: 'imagetags' },
	ImageTimestamp: { logicalName: 'imagetimestamp', readOnly: true, type: 'Integer' },
	ImageURL: { logicalName: 'imageurl', readOnly: true },
	MimeType: { logicalName: 'mimetype' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	Size: { logicalName: 'size', readOnly: true, type: 'Integer' },
	Title: { logicalName: 'title' },
	versionnumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ImageDescriptor WebApi class for early-bound style coding
 * Usage: const imageDescriptor = new ImageDescriptorApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ImageDescriptorApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IImageDescriptorApi>(entity, 'imagedescriptor', 'imagedescriptors', ImageDescriptorFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ImageDescriptorApi extends IImageDescriptorApi { }
