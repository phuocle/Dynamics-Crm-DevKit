//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTopicModel_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the time when topic analysis will stop */
			EndTime: DevKit.Controls.DateTime;
			/** Shows the time when topic analysis will start according to the recurrence schedule. */
			StartTime: DevKit.Controls.DateTime;
			/** Shows the status of the topic model build */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections {
			_2AF8CA63_6895_463A_B9E4_F22012AB5B84: DevKit.Controls.Section;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections {
			_5BF12C70_CEAD_4BCD_BD01_5C5FC0D28E78: DevKit.Controls.Section;
		}
		interface tab__27D0B923_9D79_470D_924A_80C3367D5556 extends DevKit.Controls.ITab {
			Section: tab__27D0B923_9D79_470D_924A_80C3367D5556_Sections;
		}
		interface tab__5CC8F085_E248_47E6_956C_383F40B24D2B extends DevKit.Controls.ITab {
			Section: tab__5CC8F085_E248_47E6_956C_383F40B24D2B_Sections;
		}
		interface Tabs {
			_27D0B923_9D79_470D_924A_80C3367D5556: tab__27D0B923_9D79_470D_924A_80C3367D5556;
			_5CC8F085_E248_47E6_956C_383F40B24D2B: tab__5CC8F085_E248_47E6_956C_383F40B24D2B;
		}
		interface Body {
			Tab: Tabs;
			/** Shows how frequently topic analysis is done. */
			BuildRecurrence: DevKit.Controls.String;
			/** Shows the configuration used for topic analysis. */
			ConfigurationUsed: DevKit.Controls.Lookup;
			/** Enter a description for the model. */
			Description: DevKit.Controls.String;
			/** Shows the maximum number of topics to be determined. */
			MaxTopics: DevKit.Controls.Integer;
			/** Shows the name of the topic model. */
			Name: DevKit.Controls.String;
			/** Shows the entity whose records are used for topic analysis. */
			SourceEntity: DevKit.Controls.String;
		}
		interface Navigation {
			topicmodel_topicmodelconfiguration: DevKit.Controls.NavigationItem,
			topicmodel_topicmodelexecutionhistory: DevKit.Controls.NavigationItem
		}
		interface Grid {
			modelconfigurations: DevKit.Controls.Grid;
			topicmodelexecutionhistory: DevKit.Controls.Grid;
		}
	}
	class FormTopicModel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TopicModel_Information */
		Body: DevKit.FormTopicModel_Information.Body;
		/** The Header section of form TopicModel_Information */
		Header: DevKit.FormTopicModel_Information.Header;
		/** The Navigation of form TopicModel_Information */
		Navigation: DevKit.FormTopicModel_Information.Navigation;
		/** The Grid of form TopicModel_Information */
		Grid: DevKit.FormTopicModel_Information.Grid;
		/** The SidePanes of form TopicModel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TopicModelApi {
		/**
		* DynamicsCrm.DevKit TopicModelApi
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
		/** Shows the average number of topics found per build. */
		AvgNumberofTopics: number;
		/** Azure Scheduler Job Name. */
		AzureSchedulerJobName: string;
		/** Azure Scheduler Job Name for build model */
		AzureSchedulerOnDemandJobName: string;
		/** Azure Scheduler Job Name for test model */
		AzureSchedulerTestJobName: string;
		/** Unique identifier for AzureServiceConnection associated with TopicModel. */
		AzureServiceConnectionId: string;
		/** Shows how frequently topic analysis is done. */
		BuildRecurrence: string;
		/** Shows the configuration used for topic analysis. */
		ConfigurationUsed: string;
		/** Unique identifier of the user who created the Topic Model. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the topic Model. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a description for the model. */
		Description: string;
		/** Shows the time when topic analysis will stop */
		EndTime_UtcDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the maximum number of topics found across builds. */
		MaxNumberofTopics: number;
		/** Shows the maximum number of topics to be determined. */
		MaxTopics: number;
		/** Unique identifier of the user who modified the Topic Model. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the Topic model. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the name of the topic model. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Shows the time when topic analysis will start according to the recurrence schedule. */
		StartTime_UtcDateAndTime: Date;
		/** Shows the status of the topic model build */
		StateCode: OptionSet.TopicModel.StateCode;
		/** Reason for the status of the TopicModel */
		StatusCode: OptionSet.TopicModel.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier for entity instances */
		TopicModelId: string;
		/** Shows when the topics were last created. */
		TopicsLastCreatedOn_UtcDateAndTime: Date;
		/** Shows the total number of topics found. */
		TotalTopicsFound: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the average number of topics found per build. */
			readonly AvgNumberofTopics: string;
			/** Azure Scheduler Job Name. */
			readonly AzureSchedulerJobName: string;
			/** Azure Scheduler Job Name for build model */
			readonly AzureSchedulerOnDemandJobName: string;
			/** Azure Scheduler Job Name for test model */
			readonly AzureSchedulerTestJobName: string;
			/** Unique identifier for AzureServiceConnection associated with TopicModel. */
			readonly AzureServiceConnectionId: string;
			/** Shows how frequently topic analysis is done. */
			readonly BuildRecurrence: string;
			/** Shows the configuration used for topic analysis. */
			readonly ConfigurationUsed: string;
			/** Unique identifier of the user who created the Topic Model. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the topic Model. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a description for the model. */
			readonly Description: string;
			/** Shows the time when topic analysis will stop */
			readonly EndTime_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the maximum number of topics found across builds. */
			readonly MaxNumberofTopics: string;
			/** Shows the maximum number of topics to be determined. */
			readonly MaxTopics: string;
			/** Unique identifier of the user who modified the Topic Model. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the Topic model. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the name of the topic model. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the time when topic analysis will start according to the recurrence schedule. */
			readonly StartTime_UtcDateAndTime: string;
			/** Shows the status of the topic model build */
			readonly StateCode: string;
			/** Reason for the status of the TopicModel */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier for entity instances */
			readonly TopicModelId: string;
			/** Shows when the topics were last created. */
			readonly TopicsLastCreatedOn_UtcDateAndTime: string;
			/** Shows the total number of topics found. */
			readonly TotalTopicsFound: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TopicModel {
		enum SourceEntity {
			/** 112 */
			Case
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}