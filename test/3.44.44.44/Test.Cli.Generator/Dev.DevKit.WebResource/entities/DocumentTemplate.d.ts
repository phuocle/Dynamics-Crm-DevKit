//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDocumentTemplate_Information {
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Navigation {

		}
	}
	class FormDocumentTemplate_Information extends DevKit.IForm {
		/**
		* information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DocumentTemplate_Information */
		Body: DevKit.FormDocumentTemplate_Information.Body;
		/** The Navigation of form DocumentTemplate_Information */
		Navigation: DevKit.FormDocumentTemplate_Information.Navigation;
		/** The SidePanes of form DocumentTemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit DocumentTemplateApi
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
		/** Client data regarding this document template. */
		ClientData: string;
		/** Bytes of the document template. */
		Content: string;
		/** Unique identifier of the user who created the document template. */
		readonly CreatedBy: string;
		/** Date and time when the document template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the document template. */
		readonly CreatedOnBehalfBy: string;
		/** Additional information to describe the Document Template */
		Description: string;
		/** Unique identifier of the document template. */
		DocumentTemplateId: string;
		/** Option set for selecting the type of the document template */
		DocumentType: OptionSet.DocumentTemplate.DocumentType;
		/** Language of Document Template. */
		LanguageCode: number;
		/** Unique identifier of the user who last modified the document template. */
		readonly ModifiedBy: string;
		/** Date and time when the document template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the document template. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the document template. */
		Name: string;
		/** Unique identifier of the organization associated with the web resource. */
		readonly OrganizationId: string;
		/** Information about whether the document template is active. */
		Status: boolean;
		readonly VersionNumber: number;
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
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}