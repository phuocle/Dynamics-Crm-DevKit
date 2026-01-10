//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail_signature {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			/** Details */
			Details: DevKit.Controls.Section;
			/** Details */
			Details_UCI: DevKit.Controls.Section;
			/** Signature editor */
			Signature_Editor: DevKit.Controls.Section;
		}
		/** Signature */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** Signature */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Information that specifies whether the email signature is default to the user. */
			IsDefault: DevKit.Controls.Boolean;
			/** Language of the email signature. */
			LanguageCode: DevKit.Controls.Integer;
			/** Language of the email signature. */
			LanguageCode1: DevKit.Controls.Integer;
			/** Unique identifier of the user or team who owns the email signature for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Safe html of email signature. */
			SafeHtml: DevKit.Controls.String;
			/** Title of the email signature. */
			Title: DevKit.Controls.String;
			/** Title of the email signature. */
			Title1: DevKit.Controls.String;
		}
	}
	export class FormEmail_signature extends DevKit.IForm {
		/**
		* Email signature [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Email_signature */
		Body: DevKit.FormEmail_signature.Body;
		/** The Header section of form Email_signature */
		Header: DevKit.FormEmail_signature.Header;
	}
	export class EmailSignatureApi {
		/**
		* DynamicsCrm.DevKit EmailSignatureApi
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
		/** Body text of the email signature. */
		Body: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.EmailSignature.ComponentState | null;
		/** Unique identifier of the user who created the email signature. */
		readonly CreatedBy: string | null;
		/** Date and time when the email signature was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the email signature. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the email signature. */
		Description: string | null;
		/** Unique identifier of the email signature. */
		EmailSignatureId: string | null;
		/** For internal use only. */
		GenerationTypeCode: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether the email signature is default to the user. */
		IsDefault: boolean | null;
		/** Information about whether the email signature is personal or is available to all users. */
		IsPersonal: boolean | null;
		/** Language of the email signature. */
		LanguageCode: number | null;
		/** MIME type of the email signature. */
		MimeType: string | null;
		/** Unique identifier of the user who last modified the email signature. */
		readonly ModifiedBy: string | null;
		/** Date and time when the email signature was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the email signature. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the email signature. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the email signature. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the email signature. */
		readonly OwningUser: string | null;
		/** XML data for the body of the email signature. */
		PresentationXml: string | null;
		/** Safe html of email signature. */
		SafeHtml: string | null;
		/** Title of the email signature. */
		Title: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Body text of the email signature. */
			readonly Body: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the email signature. */
			readonly CreatedBy: string;
			/** Date and time when the email signature was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the email signature. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the email signature. */
			readonly Description: string;
			/** Unique identifier of the email signature. */
			readonly EmailSignatureId: string;
			/** For internal use only. */
			readonly GenerationTypeCode: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether the email signature is default to the user. */
			readonly IsDefault: string;
			/** Information about whether the email signature is personal or is available to all users. */
			readonly IsPersonal: string;
			/** Language of the email signature. */
			readonly LanguageCode: string;
			/** MIME type of the email signature. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the email signature. */
			readonly ModifiedBy: string;
			/** Date and time when the email signature was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the email signature. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the email signature. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the email signature. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the email signature. */
			readonly OwningUser: string;
			/** XML data for the body of the email signature. */
			readonly PresentationXml: string;
			/** Safe html of email signature. */
			readonly SafeHtml: string;
			/** Title of the email signature. */
			readonly Title: string;
		}
	}
}
declare namespace OptionSet {
	namespace EmailSignature {
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