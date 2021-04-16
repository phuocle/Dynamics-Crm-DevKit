//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormActivityMimeAttachment_Information {
		interface tab_test_Sections {
			test: DevKit.Form.Controls.ControlSection;
		}
		interface tab_test extends DevKit.Form.Controls.IControlTab {
			Section: tab_test_Sections;
		}
		interface Tabs {
			test: tab_test;
		}
		interface Body {
			Tab: Tabs;
			/** File name of the attachment. */
			FileName: DevKit.Form.Controls.ControlString;
			/** File size of the attachment. */
			FileSize: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormActivityMimeAttachment_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ActivityMimeAttachment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ActivityMimeAttachment_Information */
		Body: MyDog.FormActivityMimeAttachment_Information.Body;
	}
	class ActivityMimeAttachmentApi {
		/**
		* DynamicsCrm.DevKit ActivityMimeAttachmentApi
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
		/** Unique identifier of the attachment. */
		ActivityMimeAttachmentId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		ActivityMimeAttachmentIdUnique: DevKit.WebApi.GuidValue;
		/** Descriptive subject for the activity. */
		ActivitySubject: DevKit.WebApi.StringValueReadonly;
		/** anonymous link */
		AnonymousLink: DevKit.WebApi.StringValueReadonly;
		/** For internal use only */
		AttachmentContentId: DevKit.WebApi.StringValue;
		/** Unique identifier of the attachment with which this activitymimeattachment is associated. */
		AttachmentId: DevKit.WebApi.LookupValue;
		/** Number of the attachment. */
		AttachmentNumber: DevKit.WebApi.IntegerValue;
		/** Contents of the attachment. */
		Body: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** File name of the attachment. */
		FileName: DevKit.WebApi.StringValue;
		/** File size of the attachment. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Indicates if this attachment is followed. */
		IsFollowed: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** MIME type of the attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_template: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the activity mime attachment. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the activity mime attachment. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Descriptive subject for the attachment. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the activity mime attachment. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ActivityMimeAttachment {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}