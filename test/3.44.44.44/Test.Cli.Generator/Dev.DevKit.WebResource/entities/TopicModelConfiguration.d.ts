//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTopicModelConfiguration_Information {
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections {
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections {
			_5E0987A5_6DEC_4225_BBB4_7CC1F9DD8347: DevKit.Controls.Section;
		}
		interface tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2 extends DevKit.Controls.ITab {
			Section: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2_Sections;
		}
		interface tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B extends DevKit.Controls.ITab {
			Section: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B_Sections;
		}
		interface Tabs {
			_29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2: tab__29B1CFCB_A992_4BB4_B0E0_4A95C5D252B2;
			_C9B62E5D_9925_479D_87BA_DBE9FA64B47B: tab__C9B62E5D_9925_479D_87BA_DBE9FA64B47B;
		}
		interface Body {
			Tab: Tabs;
			/** Specify the data filter configured to filter records. */
			DataFilter: DevKit.Controls.String;
			/** Enter a description for the model */
			Description: DevKit.Controls.String;
			/** Type a logical name for the model. */
			Name: DevKit.Controls.String;
			/** Select the time window to filter on for the last number of days or weeks. */
			TimeFilter: DevKit.Controls.OptionSet;
			/** Time Filter Duration */
			TimeFilterDuration: DevKit.Controls.Integer;
		}
		interface Navigation {
			topicmodelconfiguration_textanalyticsentitymapping: DevKit.Controls.NavigationItem,
			topicmodelconfiguration_topicmodel: DevKit.Controls.NavigationItem,
			topicmodelconfiguration_topicmodelexecutionhistory: DevKit.Controls.NavigationItem
		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormTopicModelConfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TopicModelConfiguration_Information */
		Body: DevKit.FormTopicModelConfiguration_Information.Body;
		/** The Navigation of form TopicModelConfiguration_Information */
		Navigation: DevKit.FormTopicModelConfiguration_Information.Navigation;
		/** The Grid of form TopicModelConfiguration_Information */
		Grid: DevKit.FormTopicModelConfiguration_Information.Grid;
		/** The SidePanes of form TopicModelConfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TopicModelConfigurationApi {
		/**
		* DynamicsCrm.DevKit TopicModelConfigurationApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.TopicModelConfiguration.ComponentState;
		/** Specify the data filter configured to filter records. */
		DataFilter: string;
		/** Enter a description for the model */
		Description: string;
		/** Fetch Xml */
		FetchXmlList: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Is Manageed */
		readonly IsManaged: boolean;
		/** Enter the minimum relevance score of a topic. */
		MinRelevanceScore: number;
		/** Type a logical name for the model. */
		Name: string;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: number;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Date and time when the record was created. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Stop words. */
		StopWords: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Select the time window to filter on for the last number of days or weeks. */
		TimeFilter: OptionSet.TopicModelConfiguration.TimeFilter;
		/** Time Filter Duration */
		TimeFilterDuration: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier for entity instances */
		TopicModelConfigurationId: string;
		/** Unique identifier of the Topic Model Configuration used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		readonly TopicModelConfigurationIdUnique: string;
		/** Unique identifier for Model associated with Topic Model Configuration. */
		TopicModelId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Specify the data filter configured to filter records. */
			readonly DataFilter: string;
			/** Enter a description for the model */
			readonly Description: string;
			/** Fetch Xml */
			readonly FetchXmlList: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Is Manageed */
			readonly IsManaged: string;
			/** Enter the minimum relevance score of a topic. */
			readonly MinRelevanceScore: string;
			/** Type a logical name for the model. */
			readonly Name: string;
			/** Enter the maximum number of key phrase words to use in a topic. */
			readonly NgramSize: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Date and time when the record was created. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Stop words. */
			readonly StopWords: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Select the time window to filter on for the last number of days or weeks. */
			readonly TimeFilter: string;
			/** Time Filter Duration */
			readonly TimeFilterDuration: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier for entity instances */
			readonly TopicModelConfigurationId: string;
			/** Unique identifier of the Topic Model Configuration used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly TopicModelConfigurationIdUnique: string;
			/** Unique identifier for Model associated with Topic Model Configuration. */
			readonly TopicModelId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TopicModelConfiguration {
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
		enum SourceEntity {
			/** 112 */
			Incident
		}
		enum TimeFilter {
			/** 1 */
			Last_N_Days,
			/** 2 */
			Last_N_Weeks
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