//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormActivityMimeAttachment_Information {
		interface tab_test_Sections {
			test: DevKit.Controls.Section;
		}
		interface tab_test extends DevKit.Controls.ITab {
			Section: tab_test_Sections;
		}
		interface Tabs {
			test: tab_test;
		}
		interface Body {
			Tab: Tabs;
			/** File name of the attachment. */
			FileName: DevKit.Controls.String;
			/** File size of the attachment. */
			FileSize: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormActivityMimeAttachment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ActivityMimeAttachment_Information */
		Body: DevKit.FormActivityMimeAttachment_Information.Body;
		/** The Process of form ActivityMimeAttachment_Information */
		Process: DevKit.FormActivityMimeAttachment_Information.Process;
		/** The SidePanes of form ActivityMimeAttachment_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier of the activity with which the attachment is associated. */
		ActivityId: string;
		/** Unique identifier of the attachment. */
		ActivityMimeAttachmentId: string;
		/** For internal use only. */
		ActivityMimeAttachmentIdUnique: string;
		/** Descriptive subject for the activity. */
		readonly ActivitySubject: string;
		/** anonymous link */
		readonly AnonymousLink: string;
		/** For internal use only */
		AttachmentContentId: string;
		/** Unique identifier of the attachment with which this activitymimeattachment is associated. */
		AttachmentId: string;
		/** Number of the attachment. */
		AttachmentNumber: number;
		/** Contents of the attachment. */
		Body: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ActivityMimeAttachment.ComponentState;
		/** File name of the attachment. */
		FileName: string;
		/** File size of the attachment. */
		readonly FileSize: number;
		/** Indicates if this attachment is followed. */
		readonly IsFollowed: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** MIME type of the attachment. */
		MimeType: string;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_activitypointer: string;
		/** Unique identifier of the record with which the attachment is associated */
		objectid_template: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the activity mime attachment. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the activity mime attachment. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Descriptive subject for the attachment. */
		Subject: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the activity mime attachment. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace ActivityMimeAttachment {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ObjectTypeCode {
			/** 4200 */
			Email_Activity,
			/** 2010 */
			Email_Template
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}