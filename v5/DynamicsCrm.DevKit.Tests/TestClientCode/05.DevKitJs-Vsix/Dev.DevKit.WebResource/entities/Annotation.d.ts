//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAnnotation_Information {
		interface tab_general_Sections {
			/** Account Information */
			account_information: DevKit.Controls.Section;
			/** Attachment Information */
			attachment_information: DevKit.Controls.Section;
			/** Note Content */
			content_information: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
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
	export class FormAnnotation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Annotation_Information */
		Body: DevKit.FormAnnotation_Information.Body;
	}
	namespace FormNote_Quick_Create_Form {
		interface tab_general_Sections {
			/** Notes Information */
			notes_information: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
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
	export class FormNote_Quick_Create_Form extends DevKit.IForm {
		/**
		* Note Quick Create Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Note_Quick_Create_Form */
		Body: DevKit.FormNote_Quick_Create_Form.Body;
	}
	export class AnnotationApi {
		/**
		* DynamicsCrm.DevKit AnnotationApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the note. */
		AnnotationId: string | null;
		/** Unique identifier of the user who created the note. */
		readonly CreatedBy: string | null;
		/** Date and time when the note was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the annotation. */
		readonly CreatedOnBehalfBy: string | null;
		/** Contents of the note's attachment. */
		DocumentBody: string | null;
		/** Dummy attribute associated with the note attachment */
		readonly DummyFileName: string | null;
		/** Dummy attribute associated with the note regarding */
		readonly DummyRegarding: string | null;
		/** File name of the note. */
		FileName: string | null;
		/** File pointer of the attachment. */
		readonly FilePointer: string | null;
		/** File size of the note. */
		readonly FileSize: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Specifies whether the note is an attachment. */
		IsDocument: boolean | null;
		readonly IsPrivate: boolean | null;
		/** Language identifier for the note. */
		LangId: string | null;
		/** MIME type of the note's attachment. */
		MimeType: string | null;
		/** Unique identifier of the user who last modified the note. */
		readonly ModifiedBy: string | null;
		/** Date and time when the note was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the annotation. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Text of the note. */
		NoteText: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the note. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the note. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the note. */
		readonly OwningUser: string | null;
		/** Prefix of the file pointer in blob storage. */
		readonly Prefix: string | null;
		/** workflow step id associated with the note. */
		StepId: string | null;
		/** Storage pointer. */
		readonly StoragePointer: string | null;
		/** Subject associated with the note. */
		Subject: string | null;
		/** Version number of the note. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the note. */
			readonly AnnotationId: string;
			/** Unique identifier of the user who created the note. */
			readonly CreatedBy: string;
			/** Date and time when the note was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the annotation. */
			readonly CreatedOnBehalfBy: string;
			/** Contents of the note's attachment. */
			readonly DocumentBody: string;
			/** Dummy attribute associated with the note attachment */
			readonly DummyFileName: string;
			/** Dummy attribute associated with the note regarding */
			readonly DummyRegarding: string;
			/** File name of the note. */
			readonly FileName: string;
			/** File pointer of the attachment. */
			readonly FilePointer: string;
			/** File size of the note. */
			readonly FileSize: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Specifies whether the note is an attachment. */
			readonly IsDocument: string;
			readonly IsPrivate: string;
			/** Language identifier for the note. */
			readonly LangId: string;
			/** MIME type of the note's attachment. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the note. */
			readonly ModifiedBy: string;
			/** Date and time when the note was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the annotation. */
			readonly ModifiedOnBehalfBy: string;
			/** Text of the note. */
			readonly NoteText: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the note. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the note. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the note. */
			readonly OwningUser: string;
			/** Prefix of the file pointer in blob storage. */
			readonly Prefix: string;
			/** workflow step id associated with the note. */
			readonly StepId: string;
			/** Storage pointer. */
			readonly StoragePointer: string;
			/** Subject associated with the note. */
			readonly Subject: string;
			/** Version number of the note. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Annotation {
		enum ObjectIdTypeCode {
		}
		enum ObjectTypeCode {
			/** Account = 1*/
			Account = 1,
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Bulk_Import = 4407*/
			Bulk_Import = 4407,
			/** Calendar = 4003*/
			Calendar = 4003,
			/** Campaign = 4400*/
			Campaign = 4400,
			/** Campaign_Activity = 4402*/
			Campaign_Activity = 4402,
			/** Campaign_Response = 4401*/
			Campaign_Response = 4401,
			/** Case = 112*/
			Case = 112,
			/** Case_Resolution = 4206*/
			Case_Resolution = 4206,
			/** Commitment = 4215*/
			Commitment = 4215,
			/** Competitor = 123*/
			Competitor = 123,
			/** Contact = 2*/
			Contact = 2,
			/** Contract = 1010*/
			Contract = 1010,
			/** Contract_Line = 1011*/
			Contract_Line = 1011,
			/** Email = 4202*/
			Email = 4202,
			/** FacilityEquipment = 4000*/
			FacilityEquipment = 4000,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invoice = 1090*/
			Invoice = 1090,
			/** Lead = 4*/
			Lead = 4,
			/** Letter = 4207*/
			Letter = 4207,
			/** Marketing_List = 4300*/
			Marketing_List = 4300,
			/** Opportunity = 3*/
			Opportunity = 3,
			/** Opportunity_Close = 4208*/
			Opportunity_Close = 4208,
			/** Order = 1088*/
			Order = 1088,
			/** Order_Close = 4209*/
			Order_Close = 4209,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Product = 1024*/
			Product = 1024,
			/** Quote = 1084*/
			Quote = 1084,
			/** Quote_Close = 4211*/
			Quote_Close = 4211,
			/** Resource_Specification = 4006*/
			Resource_Specification = 4006,
			/** Routing_Rule = 8181*/
			Routing_Rule = 8181,
			/** Routing_Rule_Item = 8199*/
			Routing_Rule_Item = 8199,
			/** Service = 4001*/
			Service = 4001,
			/** Service_Activity = 4214*/
			Service_Activity = 4214,
			/** Task = 4212*/
			Task = 4212
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}