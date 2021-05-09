//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class FileAttachmentApi {
		/**
		* DynamicsCrm.DevKit FileAttachmentApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Body */
		Body: DevKit.WebApi.StringValueReadonly;
		/** Date and time when the attachment was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the file attachment. */
		FileAttachmentId: DevKit.WebApi.GuidValue;
		/** File name of the attachment. */
		FileName: DevKit.WebApi.StringValue;
		/** File pointer of the attachment. */
		FilePointer: DevKit.WebApi.StringValueReadonly;
		/** File size of the attachment in bytes. */
		FileSizeInBytes: DevKit.WebApi.BigIntValueReadonly;
		/** IsCommitted */
		IsCommitted: DevKit.WebApi.BooleanValueReadonly;
		/** MIME type of the attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_canvasapp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_flowsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_imagedescriptor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_ribbonclientmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		FileAttachment_Solution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_webresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_workflowlog: DevKit.WebApi.LookupValue;
		/** Prefix of the file pointer in blob storage. */
		Prefix: DevKit.WebApi.StringValueReadonly;
		/** Regarding attribute schema name of the attachment. */
		RegardingFieldName: DevKit.WebApi.StringValue;
		/** Storage pointer. */
		StoragePointer: DevKit.WebApi.StringValueReadonly;
		/** Version number of the file attachment. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace FileAttachment {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}