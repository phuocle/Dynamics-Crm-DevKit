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
		/** Ngày và giờ tạo tệp đính kèm. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của tệp đính kèm. */
		FileAttachmentId: string;
		/** Tên tệp đính kèm. */
		FileName: string;
		/** Con trỏ tệp đính kèm. */
		readonly FilePointer: string;
		/** Kích thước của tệp đính kèm tính theo byte. */
		readonly FileSizeInBytes: number;
		/** IsCommitted */
		readonly IsCommitted: boolean;
		/** Loại MIME của tệp đính kèm. */
		MimeType: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_activityfileattachment: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_activitypointer: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_asyncoperation: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_botcomponent: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_canvasapp: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_deleteditemreference: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_email: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_exportedexcel: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_flowsession: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_imagedescriptor: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_knowledgearticle: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_mailbox: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_package: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_packagehistory: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_pluginpackage: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_powerbidataset: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_powerbireport: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_report: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_ribbonclientmetadata: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		FileAttachment_Solution: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_webresource: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_workflowbinary: string;
		/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
		objectid_workflowlog: string;
		/** Tiền tố của con trỏ tệp trong lưu trữ blob. */
		readonly Prefix: string;
		/** Tên sơ đồ thuộc tính bản lưu ý của tệp đính kèm. */
		RegardingFieldName: string;
		/** Con trỏ lưu trữ. */
		readonly StoragePointer: string;
		/** Số phiên bản của tệp đính kèm. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Body */
			readonly Body: string;
			/** Ngày và giờ tạo tệp đính kèm. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của tệp đính kèm. */
			readonly FileAttachmentId: string;
			/** Tên tệp đính kèm. */
			readonly FileName: string;
			/** Con trỏ tệp đính kèm. */
			readonly FilePointer: string;
			/** Kích thước của tệp đính kèm tính theo byte. */
			readonly FileSizeInBytes: string;
			/** IsCommitted */
			readonly IsCommitted: string;
			/** Loại MIME của tệp đính kèm. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_activityfileattachment: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_activitypointer: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_asyncoperation: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_botcomponent: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_canvasapp: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_deleteditemreference: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_email: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_exportedexcel: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_flowsession: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_imagedescriptor: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_knowledgearticle: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_mailbox: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_package: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_packagehistory: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_pluginpackage: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_powerbidataset: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_powerbireport: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_report: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_ribbonclientmetadata: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly FileAttachment_Solution: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_webresource: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_workflowbinary: string;
			/** Mã định danh duy nhất của đối tượng có tệp đính kèm được liên kết. */
			readonly objectid_workflowlog: string;
			/** Tiền tố của con trỏ tệp trong lưu trữ blob. */
			readonly Prefix: string;
			/** Tên sơ đồ thuộc tính bản lưu ý của tệp đính kèm. */
			readonly RegardingFieldName: string;
			/** Con trỏ lưu trữ. */
			readonly StoragePointer: string;
			/** Số phiên bản của tệp đính kèm. */
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
			Khach_hang
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}