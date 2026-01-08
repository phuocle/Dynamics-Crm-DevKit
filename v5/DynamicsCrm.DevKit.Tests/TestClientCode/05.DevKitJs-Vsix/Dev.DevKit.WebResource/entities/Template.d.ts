//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class TemplateApi {
		/**
		* DynamicsCrm.DevKit TemplateApi
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
		/** Body text of the email template. */
		Body: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Template.ComponentState | null;
		/** Unique identifier of the user who created the email template. */
		readonly CreatedBy: string | null;
		/** Date and time when the email template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the template. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the email template. */
		Description: string | null;
		/** Shows the default image for the record. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		readonly EntityImageId: string | null;
		/** For internal use only. */
		GenerationTypeCode: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Information about whether the template is personal or is available to all users. */
		IsPersonal: boolean | null;
		/** Indicates if a template is recommended by Dynamics 365. */
		readonly IsRecommended: boolean | null;
		/** Language of the email template. */
		LanguageCode: number | null;
		/** MIME type of the email template. */
		MimeType: string | null;
		/** Unique identifier of the user who last modified the template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the email template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the template. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. Shows the number of times emails that use this template have been opened. */
		readonly OpenCount: number | null;
		/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
		readonly OpenRate: number | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the template. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the template. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the template. */
		readonly OwningUser: string | null;
		/** XML data for the body of the email template. */
		PresentationXml: string | null;
		/** For internal use only. Shows the number of times emails that use this template have received replies. */
		readonly ReplyCount: number | null;
		/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
		readonly ReplyRate: number | null;
		/** Safe html of email template. */
		SafeHtml: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Subject associated with the email template. */
		Subject: string | null;
		/** XML data for the subject of the email template. */
		SubjectPresentationXml: string | null;
		/** Safe html of email template subject. */
		SubjectSafeHtml: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique identifier of the template. */
		TemplateId: string | null;
		/** For internal use only. */
		readonly TemplateIdUnique: string | null;
		/** Title of the template. */
		Title: string | null;
		/** Shows the number of sent emails that use this template. */
		readonly UsedCount: number | null;
		/** Version number of the template. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Body text of the email template. */
			readonly Body: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the email template. */
			readonly CreatedBy: string;
			/** Date and time when the email template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the template. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the email template. */
			readonly Description: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** For internal use only. */
			readonly GenerationTypeCode: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information about whether the template is personal or is available to all users. */
			readonly IsPersonal: string;
			/** Indicates if a template is recommended by Dynamics 365. */
			readonly IsRecommended: string;
			/** Language of the email template. */
			readonly LanguageCode: string;
			/** MIME type of the email template. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the template. */
			readonly ModifiedBy: string;
			/** Date and time when the email template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the template. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. Shows the number of times emails that use this template have been opened. */
			readonly OpenCount: string;
			/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
			readonly OpenRate: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the template. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the template. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the template. */
			readonly OwningUser: string;
			/** XML data for the body of the email template. */
			readonly PresentationXml: string;
			/** For internal use only. Shows the number of times emails that use this template have received replies. */
			readonly ReplyCount: string;
			/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
			readonly ReplyRate: string;
			/** Safe html of email template. */
			readonly SafeHtml: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Subject associated with the email template. */
			readonly Subject: string;
			/** XML data for the subject of the email template. */
			readonly SubjectPresentationXml: string;
			/** Safe html of email template subject. */
			readonly SubjectSafeHtml: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the template. */
			readonly TemplateId: string;
			/** For internal use only. */
			readonly TemplateIdUnique: string;
			/** Title of the template. */
			readonly Title: string;
			/** Shows the number of sent emails that use this template. */
			readonly UsedCount: string;
			/** Version number of the template. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Template {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum TemplateTypeCode {
			/** Account = 1*/
			Account = 1,
			/** Contact = 2*/
			Contact = 2,
			/** System_Job = 4700*/
			System_Job = 4700,
			/** User = 8*/
			User = 8
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