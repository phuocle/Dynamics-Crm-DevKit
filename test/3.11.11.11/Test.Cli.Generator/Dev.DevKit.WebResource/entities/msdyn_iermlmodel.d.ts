﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_iermlmodel_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Indicates model's status */
			msdyn_iermlmodelstatus: DevKit.Controls.OptionSet;
		}
		interface tab_configuration_Sections {
			tab_1_section_1: DevKit.Controls.Section;
			tab_1_section_2: DevKit.Controls.Section;
		}
		interface tab_training_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_configuration extends DevKit.Controls.ITab {
			Section: tab_configuration_Sections;
		}
		interface tab_training extends DevKit.Controls.ITab {
			Section: tab_training_Sections;
		}
		interface Tabs {
			configuration: tab_configuration;
			training: tab_training;
		}
		interface Body {
			Tab: Tabs;
			/** Model name */
			msdyn_name: DevKit.Controls.String;
			/** Training configuration */
			msdyn_trainingconfiguration: DevKit.Controls.String;
			/** Training configuration */
			msdyn_trainingconfiguration1: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the iermlmodel */
			statecode: DevKit.Controls.OptionSet;
			WebResource_inputmodel: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_iermlmodel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_iermlmodel_Information */
		Body: DevKit.Formmsdyn_iermlmodel_Information.Body;
		/** The Header section of form msdyn_iermlmodel_Information */
		Header: DevKit.Formmsdyn_iermlmodel_Information.Header;
		/** The Process of form msdyn_iermlmodel_Information */
		Process: DevKit.Formmsdyn_iermlmodel_Information.Process;
		/** The SidePanes of form msdyn_iermlmodel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_iermlmodelApi {
		/**
		* DynamicsCrm.DevKit msdyn_iermlmodelApi
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
		readonly ComponentState: OptionSet.msdyn_iermlmodel.ComponentState;
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
		/** AI model */
		msdyn_aimodelid: string;
		/** Unique identifier for Effort estimation model */
		msdyn_iermlmodelId: string;
		/** Indicates model's status */
		msdyn_iermlmodelstatus: OptionSet.msdyn_iermlmodel.msdyn_iermlmodelstatus;
		/** Indicates model's recent training status */
		msdyn_iermlmodeltrainingstatus: OptionSet.msdyn_iermlmodel.msdyn_iermlmodeltrainingstatus;
		/** Model name */
		msdyn_name: string;
		/** Training configuration */
		msdyn_trainingconfiguration: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Attribute to map UI data */
		msdyn_wizarddata: string;
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
		/** Status of the iermlmodel */
		statecode: OptionSet.msdyn_iermlmodel.statecode;
		/** Reason for the status of the iermlmodel */
		statuscode: OptionSet.msdyn_iermlmodel.statuscode;
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
			/** AI model */
			readonly msdyn_aimodelid: string;
			/** Unique identifier for Effort estimation model */
			readonly msdyn_iermlmodelId: string;
			/** Indicates model's status */
			readonly msdyn_iermlmodelstatus: string;
			/** Indicates model's recent training status */
			readonly msdyn_iermlmodeltrainingstatus: string;
			/** Model name */
			readonly msdyn_name: string;
			/** Training configuration */
			readonly msdyn_trainingconfiguration: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
			/** Attribute to map UI data */
			readonly msdyn_wizarddata: string;
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
			/** Status of the iermlmodel */
			readonly statecode: string;
			/** Reason for the status of the iermlmodel */
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
	namespace msdyn_iermlmodel {
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
		enum msdyn_iermlmodelstatus {
			/** 100000000 */
			Draft,
			/** 100000002 */
			Published,
			/** 100000001 */
			Trained
		}
		enum msdyn_iermlmodeltrainingstatus {
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}