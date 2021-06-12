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
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
		}
	}
	class FormTopicModelConfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TopicModelConfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TopicModelConfiguration_Information */
		Body: DevKit.FormTopicModelConfiguration_Information.Body;
		/** The Grid of form TopicModelConfiguration_Information */
		Grid: DevKit.FormTopicModelConfiguration_Information.Grid;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Specify the data filter configured to filter records. */
		DataFilter: DevKit.WebApi.StringValue;
		/** Enter a description for the model */
		Description: DevKit.WebApi.StringValue;
		/** Fetch Xml */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Is Manageed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Enter the minimum relevance score of a topic. */
		MinRelevanceScore: DevKit.WebApi.DecimalValue;
		/** Type a logical name for the model. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the maximum number of key phrase words to use in a topic. */
		NgramSize: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Date and time when the record was created. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Stop words. */
		StopWords: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Select the time window to filter on for the last number of days or weeks. */
		TimeFilter: DevKit.WebApi.OptionSetValue;
		/** Time Filter Duration */
		TimeFilterDuration: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		TopicModelConfigurationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Topic Model Configuration used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		TopicModelConfigurationIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier for Model associated with Topic Model Configuration. */
		TopicModelId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}