///<reference path='devkit.d.ts' />
declare namespace Rocket {
	interface ActivityMimeAttachmentOptionSet {
		RollupState: {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated: number,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated: number,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError: number,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError: number,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded: number,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached: number,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected: number
		},
		ComponentState: {
			/** 0 */
			Published: number,
			/** 1 */
			Unpublished: number,
			/** 2 */
			Deleted: number,
			/** 3 */
			Deleted_Unpublished: number
		}
	}
	class ActivityMimeAttachmentApi {
		constructor(entity?: object);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): object;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi optionset
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity of ODATA */
		Entity: object;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of ActivityMimeAttachment enttiy */
		OptionSet: ActivityMimeAttachmentOptionSet;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the attachment. */
		ActivityMimeAttachmentId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ActivityMimeAttachmentIdUnique: DevKit.WebApi.GuidValue;
		/** ReadOnly - Descriptive subject for the activity. */
		ActivitySubject: DevKit.WebApi.StringValue;
		/** ReadOnly - anonymous link */
		AnonymousLink: DevKit.WebApi.StringValue;
		/** For internal use only */
		AttachmentContentId: DevKit.WebApi.StringValue;
		/** Unique identifier of the attachment with which this activitymimeattachment is associated. */
		AttachmentId: DevKit.WebApi.LookupValue;
		/** Number of the attachment. */
		AttachmentNumber: DevKit.WebApi.IntegerValue;
		/** Contents of the attachment. */
		Body: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValue;
		/** File name of the attachment. */
		FileName: DevKit.WebApi.StringValue;
		/** ReadOnly - File size of the attachment. */
		FileSize: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Indicates if this attachment is followed. */
		IsFollowed: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValue;
		/** MIME type of the attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_template: DevKit.WebApi.LookupValue;
		/** ReadOnly - For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the business unit that owns the activity mime attachment. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the activity mime attachment. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValue;
		/** Descriptive subject for the attachment. */
		Subject: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Version number of the activity mime attachment. */
		VersionNumber: DevKit.WebApi.BigIntValue;
	}
}
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}