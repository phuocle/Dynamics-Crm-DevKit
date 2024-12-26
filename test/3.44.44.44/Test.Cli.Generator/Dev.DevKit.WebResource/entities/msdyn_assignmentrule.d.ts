//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_assignmentrule_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Description: DevKit.Controls.String;
			/** Setting depecting if the assignment is done for a team, queue or a seller. */
			msdyn_DistributeTo: DevKit.Controls.OptionSet;
			msdyn_DistributionType: DevKit.Controls.OptionSet;
			msdyn_entityfilter: DevKit.Controls.String;
			/** Evaluation order of the rule */
			msdyn_evaluationorder: DevKit.Controls.Integer;
			/** Setting depecting if the seller or team assignment needs to be done either by filtering attributes or by specifying sellers or teams */
			msdyn_matchtype: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_objecttypecode: DevKit.Controls.OptionSet;
			msdyn_sellerfilter: DevKit.Controls.String;
			/** List of specific sellers or teams that needs to be assigned. */
			msdyn_SpecificSellersOrTeams: DevKit.Controls.String;
			/** Trigger when the rule needs to be evaluated */
			msdyn_triggertype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_assignmentrule_suggestionassignmentrule_lookup: DevKit.Controls.NavigationItem,
			msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_assignmentrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_assignmentrule_Information */
		Body: DevKit.Formmsdyn_assignmentrule_Information.Body;
		/** The Navigation of form msdyn_assignmentrule_Information */
		Navigation: DevKit.Formmsdyn_assignmentrule_Information.Navigation;
		/** The SidePanes of form msdyn_assignmentrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_assignmentruleApi {
		/**
		* DynamicsCrm.DevKit msdyn_assignmentruleApi
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
		/** Unique identifier for entity instances */
		msdyn_assignmentruleId: string;
		/** Assignment due in */
		msdyn_assignmentwindow: number;
		msdyn_attributefilter: string;
		msdyn_Description: string;
		/** Setting depecting if the assignment is done for a team, queue or a seller. */
		msdyn_DistributeTo: OptionSet.msdyn_assignmentrule.msdyn_DistributeTo;
		msdyn_distributewithavailability: boolean;
		msdyn_distributewithcapacity: boolean;
		/** CheckEligibilityByRecordAge */
		msdyn_distributewithrecordcreation: boolean;
		msdyn_DistributionType: OptionSet.msdyn_assignmentrule.msdyn_DistributionType;
		msdyn_entityfilter: string;
		/** Value indicating if the entity match for the rule needs to be evaluated within Dataverse */
		msdyn_evaluateentitymatchindataverse: boolean;
		/** Value indicating if the owner match for the rule needs to be evaluated within Dataverse */
		msdyn_evaluateownermatchindataverse: boolean;
		/** Evaluation order of the rule */
		msdyn_evaluationorder: number;
		/** Records routed by this rule */
		msdyn_matchedrecords: number;
		/** Setting depecting if the seller or team assignment needs to be done either by filtering attributes or by specifying sellers or teams */
		msdyn_matchtype: OptionSet.msdyn_assignmentrule.msdyn_matchtype;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_objecttype: string;
		msdyn_objecttypecode: OptionSet.msdyn_assignmentrule.msdyn_objecttypecode;
		/** Assignment due in */
		msdyn_recordcreationwindow: number;
		msdyn_segmentid: string;
		msdyn_sellerfilter: string;
		/** List of specific sellers or teams that needs to be assigned. */
		msdyn_SpecificSellersOrTeams: string;
		/** Trigger when the rule needs to be evaluated */
		msdyn_triggertype: OptionSet.msdyn_assignmentrule.msdyn_triggertype;
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
		/** Status of the Assignment Rule */
		statecode: OptionSet.msdyn_assignmentrule.statecode;
		/** Reason for the status of the Assignment Rule */
		statuscode: OptionSet.msdyn_assignmentrule.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_assignmentruleId: string;
			/** Assignment due in */
			readonly msdyn_assignmentwindow: string;
			readonly msdyn_attributefilter: string;
			readonly msdyn_Description: string;
			/** Setting depecting if the assignment is done for a team, queue or a seller. */
			readonly msdyn_DistributeTo: string;
			readonly msdyn_distributewithavailability: string;
			readonly msdyn_distributewithcapacity: string;
			/** CheckEligibilityByRecordAge */
			readonly msdyn_distributewithrecordcreation: string;
			readonly msdyn_DistributionType: string;
			readonly msdyn_entityfilter: string;
			/** Value indicating if the entity match for the rule needs to be evaluated within Dataverse */
			readonly msdyn_evaluateentitymatchindataverse: string;
			/** Value indicating if the owner match for the rule needs to be evaluated within Dataverse */
			readonly msdyn_evaluateownermatchindataverse: string;
			/** Evaluation order of the rule */
			readonly msdyn_evaluationorder: string;
			/** Records routed by this rule */
			readonly msdyn_matchedrecords: string;
			/** Setting depecting if the seller or team assignment needs to be done either by filtering attributes or by specifying sellers or teams */
			readonly msdyn_matchtype: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_objecttype: string;
			readonly msdyn_objecttypecode: string;
			/** Assignment due in */
			readonly msdyn_recordcreationwindow: string;
			readonly msdyn_segmentid: string;
			readonly msdyn_sellerfilter: string;
			/** List of specific sellers or teams that needs to be assigned. */
			readonly msdyn_SpecificSellersOrTeams: string;
			/** Trigger when the rule needs to be evaluated */
			readonly msdyn_triggertype: string;
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
			/** Status of the Assignment Rule */
			readonly statecode: string;
			/** Reason for the status of the Assignment Rule */
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
	namespace msdyn_assignmentrule {
		enum msdyn_DistributeTo {
			/** 2 */
			Queue,
			/** 0 */
			Sellers,
			/** 1 */
			Team
		}
		enum msdyn_DistributionType {
			/** 4 */
			Add_to_any_one_queue_at_random,
			/** 2 */
			Assign_to_any_one_team_at_random,
			/** 5 */
			Dont_add_to_any_queue,
			/** 3 */
			Dont_assign_to_any_team,
			/** 1 */
			Load_Balancing,
			/** 0 */
			RoundRobin
		}
		enum msdyn_matchtype {
			/** 2 */
			Any_Sellers,
			/** 0 */
			Filter_using_Attributes,
			/** 1 */
			Specific_List
		}
		enum msdyn_objecttypecode {
			/** 4 */
			Lead,
			/** 3 */
			Opportunity,
			/** 5 */
			Other
		}
		enum msdyn_triggertype {
			/** 0 */
			Entity_Create,
			/** 1 */
			FieldUpdate
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