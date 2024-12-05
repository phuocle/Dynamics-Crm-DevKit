//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormModel_training_details_main_form {
		interface tab_general_tab_Sections {
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Details of error */
			msdyn_errordetails: DevKit.Controls.String;
			/** Model training status */
			msdyn_mltrainingstatus: DevKit.Controls.OptionSet;
			/** The name of the model training detail. */
			msdyn_name: DevKit.Controls.String;
			/** Skill finder model */
			msdyn_ocskillidentmlmodelid: DevKit.Controls.Lookup;
			/** Model published date */
			msdyn_publishedon: DevKit.Controls.DateTime;
			/** Model training start date */
			msdyn_trainedon: DevKit.Controls.DateTime;
			/** Total number of training records processed */
			msdyn_trainingdatacount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormModel_training_details_main_form extends DevKit.IForm {
		/**
		* Model training details main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Model_training_details_main_form */
		Body: DevKit.FormModel_training_details_main_form.Body;
		/** The Navigation of form Model_training_details_main_form */
		Navigation: DevKit.FormModel_training_details_main_form.Navigation;
		/** The SidePanes of form Model_training_details_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocsimltrainingApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsimltrainingApi
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
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_ocsimltraining.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Details of error */
		msdyn_errordetails: string;
		/** Model training status */
		msdyn_mltrainingstatus: OptionSet.msdyn_ocsimltraining.msdyn_mltrainingstatus;
		/** The name of the model training detail. */
		msdyn_name: string;
		/** Unique identifier for model training detail */
		msdyn_ocsimltrainingId: string;
		/** Skill finder model */
		msdyn_ocskillidentmlmodelid: string;
		/** Reference to AI builder published configuration */
		msdyn_publishaiconfiguration: string;
		/** Model published date */
		msdyn_publishedon_UtcDateAndTime: Date;
		/** Reference to AI builder training configuration */
		msdyn_trainaiconfiguration: string;
		/** Model training start date */
		msdyn_trainedon_UtcDateAndTime: Date;
		/** Total number of training records processed */
		msdyn_trainingdatacount: number;
		/** Unique name for the entity. */
		msdyn_UniqueName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the ocsimltraining */
		statecode: OptionSet.msdyn_ocsimltraining.statecode;
		/** Reason for the status of the ocsimltraining */
		statuscode: OptionSet.msdyn_ocsimltraining.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Details of error */
			readonly msdyn_errordetails: string;
			/** Model training status */
			readonly msdyn_mltrainingstatus: string;
			/** The name of the model training detail. */
			readonly msdyn_name: string;
			/** Unique identifier for model training detail */
			readonly msdyn_ocsimltrainingId: string;
			/** Skill finder model */
			readonly msdyn_ocskillidentmlmodelid: string;
			/** Reference to AI builder published configuration */
			readonly msdyn_publishaiconfiguration: string;
			/** Model published date */
			readonly msdyn_publishedon_UtcDateAndTime: string;
			/** Reference to AI builder training configuration */
			readonly msdyn_trainaiconfiguration: string;
			/** Model training start date */
			readonly msdyn_trainedon_UtcDateAndTime: string;
			/** Total number of training records processed */
			readonly msdyn_trainingdatacount: string;
			/** Unique name for the entity. */
			readonly msdyn_UniqueName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the ocsimltraining */
			readonly statecode: string;
			/** Reason for the status of the ocsimltraining */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_ocsimltraining {
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
		enum msdyn_mltrainingstatus {
			/** 192350000 */
			Draft,
			/** 326340008 */
			Loading_Data,
			/** 326340003 */
			Publish_completed,
			/** 326340007 */
			Publish_config_created,
			/** 326340002 */
			Publish_failed,
			/** 326340000 */
			Publish_in_progress,
			/** 326340001 */
			Train_config_created,
			/** 326340006 */
			Training_completed,
			/** 326340004 */
			Training_failed,
			/** 326340005 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}