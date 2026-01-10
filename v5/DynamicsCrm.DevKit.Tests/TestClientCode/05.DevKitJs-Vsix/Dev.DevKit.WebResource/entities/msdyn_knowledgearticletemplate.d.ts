//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_knowledgearticletemplate_Main_Form {
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections {
			/** TEMPLATE DATA */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: DevKit.Controls.Section;
			/** ARTICLE DATA */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: DevKit.Controls.Section;
			/** CONTENT */
			Content: DevKit.Controls.Section;
		}
		/** General */
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2 extends DevKit.Controls.ITab {
			Section: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections;
		}
		interface Tabs {
			/** General */
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2;
		}
		interface Body {
			Tab: Tabs;
			/** Article Language Name */
			msdyn_LanguageLocaleIdName: DevKit.Controls.String;
			msdyn_content: DevKit.Controls.ActionCards;
			/** Description */
			msdyn_Description: DevKit.Controls.String;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Controls.Boolean;
			/** Keywords */
			msdyn_keywords: DevKit.Controls.String;
			/** Article Template Language Id */
			msdyn_languagelocaleid: DevKit.Controls.String;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Controls.String;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Controls.Lookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	export class Formmsdyn_knowledgearticletemplate_Main_Form extends DevKit.IForm {
		/**
		* Main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_knowledgearticletemplate_Main_Form */
		Body: DevKit.Formmsdyn_knowledgearticletemplate_Main_Form.Body;
	}
	export class msdyn_knowledgearticletemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_knowledgearticletemplateApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the body of the article stored in HTML format. */
		msdyn_Content: string | null;
		msdyn_Description: string | null;
		/** Shows whether this article is only visible internally. */
		msdyn_isinternal: boolean | null;
		msdyn_keywords: string | null;
		/** Unique identifier for entity instances */
		msdyn_knowledgearticletemplateId: string | null;
		msdyn_languagelocaleid: string | null;
		msdyn_LanguageLocaleIdName: string | null;
		/** Type a name for the Knowledge Article Template */
		msdyn_name: string | null;
		/** Shows the section details of the template for article generation. */
		msdyn_sectiondetails: string | null;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		msdyn_subjectid: string | null;
		/** Type a title for the Knowledge Article Template */
		msdyn_title: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Knowledge Article Template */
		statecode: OptionSet.msdyn_knowledgearticletemplate.statecode | null;
		/** Reason for the status of the Knowledge Article Template */
		statuscode: OptionSet.msdyn_knowledgearticletemplate.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the body of the article stored in HTML format. */
			readonly msdyn_Content: string;
			readonly msdyn_Description: string;
			/** Shows whether this article is only visible internally. */
			readonly msdyn_isinternal: string;
			readonly msdyn_keywords: string;
			/** Unique identifier for entity instances */
			readonly msdyn_knowledgearticletemplateId: string;
			readonly msdyn_languagelocaleid: string;
			readonly msdyn_LanguageLocaleIdName: string;
			/** Type a name for the Knowledge Article Template */
			readonly msdyn_name: string;
			/** Shows the section details of the template for article generation. */
			readonly msdyn_sectiondetails: string;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			readonly msdyn_subjectid: string;
			/** Type a title for the Knowledge Article Template */
			readonly msdyn_title: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Knowledge Article Template */
			readonly statecode: string;
			/** Reason for the status of the Knowledge Article Template */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_knowledgearticletemplate {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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