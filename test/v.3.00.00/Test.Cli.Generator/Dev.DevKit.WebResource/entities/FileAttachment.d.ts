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
		/** Body */
		readonly Body: string;
		/** Date and time when the attachment was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the file attachment. */
		FileAttachmentId: string;
		/** File name of the attachment. */
		FileName: string;
		/** File pointer of the attachment. */
		readonly FilePointer: string;
		/** File size of the attachment in bytes. */
		readonly FileSizeInBytes: number;
		/** IsCommitted */
		readonly IsCommitted: boolean;
		/** MIME type of the attachment. */
		MimeType: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_activityfileattachment: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_asyncoperation: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_canvasapp: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_exportsolutionupload: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_flowsession: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_imagedescriptor: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_knowledgearticle: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_mailbox: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_aibfile: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_aiconfiguration: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_conversationinsight: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_kbattachment: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_ocrecording: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_pminferredtask: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_richtextfile: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_soundfile: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msdyn_transcript: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_msfp_fileresponse: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_pluginpackage: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_ribbonclientmetadata: string;
		/** Unique identifier of the object with which the attachment is associated. */
		FileAttachment_Solution: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_stagesolutionupload: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_webresource: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_workflowbinary: string;
		/** Unique identifier of the object with which the attachment is associated. */
		objectid_workflowlog: string;
		/** Prefix of the file pointer in blob storage. */
		readonly Prefix: string;
		/** Regarding attribute schema name of the attachment. */
		RegardingFieldName: string;
		/** Storage pointer. */
		readonly StoragePointer: string;
		/** Version number of the file attachment. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Body */
			readonly Body: string;
			/** Date and time when the attachment was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the file attachment. */
			readonly FileAttachmentId: string;
			/** File name of the attachment. */
			readonly FileName: string;
			/** File pointer of the attachment. */
			readonly FilePointer: string;
			/** File size of the attachment in bytes. */
			readonly FileSizeInBytes: string;
			/** IsCommitted */
			readonly IsCommitted: string;
			/** MIME type of the attachment. */
			readonly MimeType: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_activityfileattachment: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_asyncoperation: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_canvasapp: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_exportsolutionupload: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_flowsession: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_imagedescriptor: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_knowledgearticle: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_mailbox: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_aibfile: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_conversationinsight: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_kbattachment: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_ocrecording: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_pminferredtask: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_richtextfile: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_soundfile: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msdyn_transcript: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_msfp_fileresponse: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_pluginpackage: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_ribbonclientmetadata: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly FileAttachment_Solution: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_stagesolutionupload: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_webresource: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_workflowbinary: string;
			/** Unique identifier of the object with which the attachment is associated. */
			readonly objectid_workflowlog: string;
			/** Prefix of the file pointer in blob storage. */
			readonly Prefix: string;
			/** Regarding attribute schema name of the attachment. */
			readonly RegardingFieldName: string;
			/** Storage pointer. */
			readonly StoragePointer: string;
			/** Version number of the file attachment. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace FileAttachment {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** 1 */
			Account
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}