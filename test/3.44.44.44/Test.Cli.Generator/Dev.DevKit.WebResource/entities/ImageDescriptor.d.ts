﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ImageDescriptorApi {
		/**
		* DynamicsCrm.DevKit ImageDescriptorApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		ColorDepthBits: number;
		/** Lookup to FileAttachment */
		readonly FileId_name: string;
		FileLocation: string;
		FileName: string;
		FileSizeBytes: number;
		FileType: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		FullImageData: string;
		FullImageData_Timestamp: number;
		FullImageData_URL: string;
		FullImageURL: string;
		ImageData: string;
		ImageData_Timestamp: number;
		ImageData_URL: string;
		ImageDescription: string;
		ImageDescriptorId: string;
		ImagePixelHeight: number;
		ImagePixelWidth: number;
		ImageTags: string;
		readonly ImageTimestamp: number;
		readonly ImageURL: string;
		MimeType: string;
		readonly ObjectId: string;
		readonly Size: number;
		Title: string;
		/** Version number of Image descriptor. */
		readonly versionnumber: number;
		readonly FormattedValue: {
			readonly ColorDepthBits: string;
			/** Lookup to FileAttachment */
			readonly FileId_name: string;
			readonly FileLocation: string;
			readonly FileName: string;
			readonly FileSizeBytes: string;
			readonly FileType: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly FullImageData: string;
			readonly FullImageData_Timestamp: string;
			readonly FullImageData_URL: string;
			readonly FullImageURL: string;
			readonly ImageData: string;
			readonly ImageData_Timestamp: string;
			readonly ImageData_URL: string;
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
			/** Version number of Image descriptor. */
			readonly versionnumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImageDescriptor {
		enum ObjectTypeCode {
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}