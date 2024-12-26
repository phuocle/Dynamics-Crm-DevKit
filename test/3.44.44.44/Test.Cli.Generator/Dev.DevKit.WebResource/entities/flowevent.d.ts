//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formflowevent_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formflowevent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form flowevent_Information */
		Body: DevKit.Formflowevent_Information.Body;
		/** The Navigation of form flowevent_Information */
		Navigation: DevKit.Formflowevent_Information.Navigation;
		/** The SidePanes of form flowevent_Information */
		SidePanes: DevKit.SidePanes;
	}
	class floweventApi {
		/**
		* DynamicsCrm.DevKit floweventApi
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
		/** Date and time when the event finished. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		eventcode: string;
		eventcontent: string;
		/** The duration of the event in seconds. */
		EventDuration: number;
		eventtype: string;
		/** Date after which the event should no longer be displayed. */
		ExpiryDate_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		floweventId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		level: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
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
		/** The parent record this event is linked to. */
		parentobjectid_flowmachine: string;
		/** The parent record this event is linked to. */
		parentobjectid_flowmachinegroup: string;
		/** The parent record this event is linked to. */
		parentobjectid_flowsession: string;
		/** The parent record this event is linked to. */
		parentobjectid_workflow: string;
		/** The parent record this event is linked to. */
		parentobjectid_workqueue: string;
		parentobjectlogicalname: string;
		/** Status of the Flow Event */
		statecode: OptionSet.flowevent.statecode;
		/** Reason for the status of the Flow Event */
		statuscode: OptionSet.flowevent.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Date and time when the event finished. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly eventcode: string;
			readonly eventcontent: string;
			/** The duration of the event in seconds. */
			readonly EventDuration: string;
			readonly eventtype: string;
			/** Date after which the event should no longer be displayed. */
			readonly ExpiryDate_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly floweventId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			readonly level: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
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
			/** The parent record this event is linked to. */
			readonly parentobjectid_flowmachine: string;
			/** The parent record this event is linked to. */
			readonly parentobjectid_flowmachinegroup: string;
			/** The parent record this event is linked to. */
			readonly parentobjectid_flowsession: string;
			/** The parent record this event is linked to. */
			readonly parentobjectid_workflow: string;
			/** The parent record this event is linked to. */
			readonly parentobjectid_workqueue: string;
			readonly parentobjectlogicalname: string;
			/** Status of the Flow Event */
			readonly statecode: string;
			/** Reason for the status of the Flow Event */
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
	namespace flowevent {
		enum parentobjectidIdType {
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