//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAnnotation_Information {
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
			attachment_information: DevKit.Controls.Section;
			content_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Controls.DateTime;
			filenameattachment: DevKit.Controls.ActionCards;
			/** File size of the note. */
			FileSize: DevKit.Controls.Integer;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			notetext: DevKit.Controls.ActionCards;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Controls.Lookup;
			regardingobject: DevKit.Controls.ActionCards;
		}
	}
	class FormAnnotation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Annotation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Annotation_Information */
		Body: DevKit.FormAnnotation_Information.Body;
	}
	namespace FormNote_Quick_Create_Form {
		interface tab_general_Sections {
			notes_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Text of the note. */
			NoteText: DevKit.Controls.String;
			/** Subject associated with the note. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormNote_Quick_Create_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Note_Quick_Create_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Note_Quick_Create_Form */
		Body: DevKit.FormNote_Quick_Create_Form.Body;
	}
	class AnnotationApi {
		/**
		* DynamicsCrm.DevKit AnnotationApi
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
		/** Unique identifier of the note. */
		AnnotationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the note. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the annotation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Contents of the note's attachment. */
		DocumentBody: DevKit.WebApi.StringValue;
		/** File name of the note. */
		FileName: DevKit.WebApi.StringValue;
		/** File pointer of the attachment. */
		FilePointer: DevKit.WebApi.StringValueReadonly;
		/** File size of the note. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Specifies whether the note is an attachment. */
		IsDocument: DevKit.WebApi.BooleanValue;
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Language identifier for the note. */
		LangId: DevKit.WebApi.StringValue;
		/** MIME type of the note's attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the note. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the annotation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Text of the note. */
		NoteText: DevKit.WebApi.StringValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofile_annotations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_profileruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_duplicaterule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sharepointdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_workflow: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the note. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the note. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the note. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Prefix of the file pointer in blob storage. */
		Prefix: DevKit.WebApi.StringValueReadonly;
		/** workflow step id associated with the note. */
		StepId: DevKit.WebApi.StringValue;
		/** Storage pointer. */
		StoragePointer: DevKit.WebApi.StringValueReadonly;
		/** Subject associated with the note. */
		Subject: DevKit.WebApi.StringValue;
		/** Version number of the note. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Annotation {
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
//{'JsForm':['Information','Quick Create Form'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}