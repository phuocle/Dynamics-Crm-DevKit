//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPersonalDocumentTemplate_Information {
		interface tab_general_Sections {
			/** Details */
			Details: DevKit.Controls.Section;
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
			/** Associated Entity Type Code. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Unique identifier of the user who created the personal document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Personal Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the personal document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Personal Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the personal document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the personal document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the personal document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the personal document template is active. */
			Status: DevKit.Controls.Boolean;
		}
	}
	export class FormPersonalDocumentTemplate_Information extends DevKit.IForm {
		/**
		* information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form PersonalDocumentTemplate_Information */
		Body: DevKit.FormPersonalDocumentTemplate_Information.Body;
	}
	export class PersonalDocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit PersonalDocumentTemplateApi
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
		/** Client data regarding this personal document template. */
		ClientData: string | null;
		/** Bytes of the personal document template. */
		Content: string | null;
		/** Unique identifier of the user who created the personal document template. */
		readonly CreatedBy: string | null;
		/** Date and time when the personal document template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the personal document template. */
		readonly CreatedOnBehalfBy: string | null;
		/** Additional information to describe the Personal Document Template */
		Description: string | null;
		/** Option set for selecting the type of the personal document template */
		DocumentType: OptionSet.PersonalDocumentTemplate.DocumentType | null;
		/** Language of Personal Document Template. */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the personal document template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the personal document template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the personal document template. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the personal document template. */
		Name: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the personal document template. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the personal document template. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the personal document template. */
		readonly OwningUser: string | null;
		/** Unique identifier of the personal document template. */
		PersonalDocumentTemplateId: string | null;
		/** Information about whether the personal document template is active. */
		Status: boolean | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Client data regarding this personal document template. */
			readonly ClientData: string;
			/** Bytes of the personal document template. */
			readonly Content: string;
			/** Unique identifier of the user who created the personal document template. */
			readonly CreatedBy: string;
			/** Date and time when the personal document template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the personal document template. */
			readonly CreatedOnBehalfBy: string;
			/** Additional information to describe the Personal Document Template */
			readonly Description: string;
			/** Option set for selecting the type of the personal document template */
			readonly DocumentType: string;
			/** Language of Personal Document Template. */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the personal document template. */
			readonly ModifiedBy: string;
			/** Date and time when the personal document template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the personal document template. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the personal document template. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the personal document template. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the personal document template. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the personal document template. */
			readonly OwningUser: string;
			/** Unique identifier of the personal document template. */
			readonly PersonalDocumentTemplateId: string;
			/** Information about whether the personal document template is active. */
			readonly Status: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PersonalDocumentTemplate {
		enum AssociatedEntityTypeCode {
		}
		enum DocumentType {
			/** Microsoft_Excel = 1*/
			Microsoft_Excel = 1,
			/** Microsoft_Word = 2*/
			Microsoft_Word = 2
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