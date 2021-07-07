//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocskillidentmlmodel_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Indicates model's status */
			msdyn_ocskillidentmlmodelstatus: DevKit.Controls.OptionSet;
		}
		interface tab_Intelligent_skill_based_routing_Sections {
			Intelligent_skill_based_routing_section_7: DevKit.Controls.Section;
			Intelligent_skill_based_routing_section_8: DevKit.Controls.Section;
			summarysection: DevKit.Controls.Section;
		}
		interface tab_training_data_Sections {
			tab_2_section_3: DevKit.Controls.Section;
			training_data_section_3: DevKit.Controls.Section;
		}
		interface tab_trainings_Sections {
			training_history: DevKit.Controls.Section;
		}
		interface tab_Intelligent_skill_based_routing extends DevKit.Controls.ITab {
			Section: tab_Intelligent_skill_based_routing_Sections;
		}
		interface tab_training_data extends DevKit.Controls.ITab {
			Section: tab_training_data_Sections;
		}
		interface tab_trainings extends DevKit.Controls.ITab {
			Section: tab_trainings_Sections;
		}
		interface Tabs {
			Intelligent_skill_based_routing: tab_Intelligent_skill_based_routing;
			training_data: tab_training_data;
			trainings: tab_trainings;
		}
		interface Body {
			Tab: Tabs;
			/** Model name */
			msdyn_name: DevKit.Controls.String;
			/** Training configuration */
			msdyn_trainingconfiguration: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the ocskillidentmlmodel */
			statecode: DevKit.Controls.OptionSet;
			WebResource_inputmodel: DevKit.Controls.WebResource;
		}
		interface Grid {
			Data_loading_status: DevKit.Controls.Grid;
			Trainingdatasubgrid: DevKit.Controls.Grid;
			training_history: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_ocskillidentmlmodel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocskillidentmlmodel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocskillidentmlmodel_Information */
		Body: DevKit.Formmsdyn_ocskillidentmlmodel_Information.Body;
		/** The Header section of form msdyn_ocskillidentmlmodel_Information */
		Header: DevKit.Formmsdyn_ocskillidentmlmodel_Information.Header;
		/** The Grid of form msdyn_ocskillidentmlmodel_Information */
		Grid: DevKit.Formmsdyn_ocskillidentmlmodel_Information.Grid;
	}
	class msdyn_ocskillidentmlmodelApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocskillidentmlmodelApi
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
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** AI model */
		msdyn_aimodelid: DevKit.WebApi.LookupValue;
		/** Model name */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for skill finder model */
		msdyn_ocskillidentmlmodelId: DevKit.WebApi.GuidValue;
		/** Indicates model's status */
		msdyn_ocskillidentmlmodelstatus: DevKit.WebApi.OptionSetValue;
		/** Indicates model's recent training status */
		msdyn_ocskillidentmlmodeltrainingstatus: DevKit.WebApi.OptionSetValue;
		/** Training configuration */
		msdyn_trainingconfiguration: DevKit.WebApi.StringValue;
		/** Unique Name for the entity. */
		msdyn_UniqueName: DevKit.WebApi.StringValue;
		/** Attribute to map UI data */
		msdyn_wizzarddata: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the ocskillidentmlmodel */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ocskillidentmlmodel */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocskillidentmlmodel {
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
		enum msdyn_ocskillidentmlmodelstatus {
			/** 100000000 */
			Draft,
			/** 100000002 */
			Published,
			/** 100000001 */
			Trained
		}
		enum msdyn_ocskillidentmlmodeltrainingstatus {
			/** 100000007 */
			Loading_data,
			/** 100000000 */
			Not_trained,
			/** 100000006 */
			Publish_completed,
			/** 100000005 */
			Publish_failed,
			/** 100000004 */
			Publish_in_progress,
			/** 100000002 */
			Training_completed,
			/** 100000003 */
			Training_failed,
			/** 100000001 */
			Training_in_progress
		}
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}