//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_inspectionresponse_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the Inspection Response entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_inspectionresponse_msdyn_inspection: DevKit.Controls.NavigationItem,
			msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance: DevKit.Controls.NavigationItem,
			msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_inspectionresponse_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inspectionresponse_Information */
		Body: DevKit.Formmsdyn_inspectionresponse_Information.Body;
		/** The Navigation of form msdyn_inspectionresponse_Information */
		Navigation: DevKit.Formmsdyn_inspectionresponse_Information.Navigation;
		/** The SidePanes of form msdyn_inspectionresponse_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_inspectionresponseApi {
		/**
		* DynamicsCrm.DevKit msdyn_inspectionresponseApi
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
		/** Unique Identifier of the Inspection Definition associated with the Inspection Response. */
		msdyn_InspectionDefinition: string;
		/** Unique identifier for entity instances */
		msdyn_inspectionresponseId: string;
		/** Depicts whether the record is processed. */
		msdyn_IsProcessed: boolean;
		/** Denotes whether the survey response has validation errors */
		msdyn_isvalidresponse: boolean;
		/** The name of the Inspection Response entity. */
		msdyn_name: string;
		/** Contains the response json */
		msdyn_ResponseJsonContent: string;
		/** Status of the Inspection Response */
		msdyn_status: OptionSet.msdyn_inspectionresponse.msdyn_status;
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
		/** Status of the InspectionResponse */
		statecode: OptionSet.msdyn_inspectionresponse.statecode;
		/** Reason for the status of the InspectionResponse */
		statuscode: OptionSet.msdyn_inspectionresponse.statuscode;
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
			/** Unique Identifier of the Inspection Definition associated with the Inspection Response. */
			readonly msdyn_InspectionDefinition: string;
			/** Unique identifier for entity instances */
			readonly msdyn_inspectionresponseId: string;
			/** Depicts whether the record is processed. */
			readonly msdyn_IsProcessed: string;
			/** Denotes whether the survey response has validation errors */
			readonly msdyn_isvalidresponse: string;
			/** The name of the Inspection Response entity. */
			readonly msdyn_name: string;
			/** Contains the response json */
			readonly msdyn_ResponseJsonContent: string;
			/** Status of the Inspection Response */
			readonly msdyn_status: string;
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
			/** Status of the InspectionResponse */
			readonly statecode: string;
			/** Reason for the status of the InspectionResponse */
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
	namespace msdyn_inspectionresponse {
		enum msdyn_status {
			/** 192350000 */
			InProgress,
			/** 192350001 */
			Submitted
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