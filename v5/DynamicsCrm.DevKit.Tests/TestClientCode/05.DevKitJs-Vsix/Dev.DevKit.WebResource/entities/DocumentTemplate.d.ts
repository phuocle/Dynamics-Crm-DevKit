//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDocumentTemplate_Information {
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
			/** Unique identifier of the user who created the document template. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Additional information to describe the Document Template */
			Description: DevKit.Controls.String;
			/** Option set for selecting the type of the document template */
			DocumentType: DevKit.Controls.OptionSet;
			/** Language of Document Template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the document template. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the document template was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the document template. */
			Name: DevKit.Controls.String;
			/** Information about whether the document template is active. */
			Status: DevKit.Controls.Boolean;
		}
	}
	export class FormDocumentTemplate_Information extends DevKit.IForm {
		/**
		* information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form DocumentTemplate_Information */
		Body: DevKit.FormDocumentTemplate_Information.Body;
	}
	export class DocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit DocumentTemplateApi
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
		/** Client data regarding this document template. */
		ClientData: string | null;
		/** Bytes of the document template. */
		Content: string | null;
		/** Unique identifier of the user who created the document template. */
		readonly CreatedBy: string | null;
		/** Date and time when the document template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the document template. */
		readonly CreatedOnBehalfBy: string | null;
		/** Additional information to describe the Document Template */
		Description: string | null;
		/** Unique identifier of the document template. */
		DocumentTemplateId: string | null;
		/** Option set for selecting the type of the document template */
		DocumentType: OptionSet.DocumentTemplate.DocumentType | null;
		/** Language of Document Template. */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the document template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the document template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the document template. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the document template. */
		Name: string | null;
		/** Unique identifier of the organization associated with the web resource. */
		readonly OrganizationId: string | null;
		/** Information about whether the document template is active. */
		Status: boolean | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Client data regarding this document template. */
			readonly ClientData: string;
			/** Bytes of the document template. */
			readonly Content: string;
			/** Unique identifier of the user who created the document template. */
			readonly CreatedBy: string;
			/** Date and time when the document template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the document template. */
			readonly CreatedOnBehalfBy: string;
			/** Additional information to describe the Document Template */
			readonly Description: string;
			/** Unique identifier of the document template. */
			readonly DocumentTemplateId: string;
			/** Option set for selecting the type of the document template */
			readonly DocumentType: string;
			/** Language of Document Template. */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the document template. */
			readonly ModifiedBy: string;
			/** Date and time when the document template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the document template. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the document template. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the web resource. */
			readonly OrganizationId: string;
			/** Information about whether the document template is active. */
			readonly Status: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DocumentTemplate {
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