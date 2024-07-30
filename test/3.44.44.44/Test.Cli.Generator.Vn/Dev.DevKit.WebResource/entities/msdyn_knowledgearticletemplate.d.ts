﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_knowledgearticletemplate_Main_Form {
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: DevKit.Controls.Section;
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: DevKit.Controls.Section;
			Content: DevKit.Controls.Section;
		}
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2 extends DevKit.Controls.ITab {
			Section: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections;
		}
		interface Tabs {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_content: DevKit.Controls.ActionCards;
			msdyn_Description: DevKit.Controls.String;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Controls.Boolean;
			msdyn_keywords: DevKit.Controls.String;
			msdyn_languagelocaleid: DevKit.Controls.String;
			msdyn_LanguageLocaleIdName: DevKit.Controls.String;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Controls.String;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Controls.Lookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_knowledgearticletemplate_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_knowledgearticletemplate_Main_Form extends DevKit.IForm {
		/**
		* Main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_knowledgearticletemplate_Main_Form */
		Body: DevKit.Formmsdyn_knowledgearticletemplate_Main_Form.Body;
		/** The Navigation of form msdyn_knowledgearticletemplate_Main_Form */
		Navigation: DevKit.Formmsdyn_knowledgearticletemplate_Main_Form.Navigation;
		/** The SidePanes of form msdyn_knowledgearticletemplate_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_knowledgearticletemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_knowledgearticletemplateApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the body of the article stored in HTML format. */
		msdyn_Content: string;
		msdyn_Description: string;
		/** Shows whether this article is only visible internally. */
		msdyn_isinternal: boolean;
		msdyn_keywords: string;
		/** Unique identifier for entity instances */
		msdyn_knowledgearticletemplateId: string;
		msdyn_languagelocaleid: string;
		msdyn_LanguageLocaleIdName: string;
		/** Type a name for the Knowledge Article Template */
		msdyn_name: string;
		/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
		msdyn_subjectid: string;
		/** Type a title for the Knowledge Article Template */
		msdyn_title: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Knowledge Article Template */
		statecode: OptionSet.msdyn_knowledgearticletemplate.statecode;
		/** Reason for the status of the Knowledge Article Template */
		statuscode: OptionSet.msdyn_knowledgearticletemplate.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}