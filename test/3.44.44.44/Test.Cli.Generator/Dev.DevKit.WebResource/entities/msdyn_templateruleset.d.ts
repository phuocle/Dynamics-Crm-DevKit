//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_templateruleset_Information {
		interface Tabs {
		}
		interface Body {
			/** The channel(s) in the conversation. */
			msdyn_channel: DevKit.Controls.OptionSet;
			/** Used to specify the type of communication or interaction that is being routed or handled within the system, depends on the incoming Channel */
			msdyn_channeltype: DevKit.Controls.OptionSet;
			/** Name of the Template Rule Set record */
			msdyn_name: DevKit.Controls.String;
			/** Type of template ruleset */
			msdyn_type: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of template ruleset */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the template ruleset */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_templateruleset_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_templateruleset_Information */
		Body: DevKit.Formmsdyn_templateruleset_Information.Body;
		/** The Navigation of form msdyn_templateruleset_Information */
		Navigation: DevKit.Formmsdyn_templateruleset_Information.Navigation;
		/** The SidePanes of form msdyn_templateruleset_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_templaterulesetApi {
		/**
		* DynamicsCrm.DevKit msdyn_templaterulesetApi
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
		readonly ComponentState: OptionSet.msdyn_templateruleset.ComponentState;
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
		/** The channel(s) in the conversation. */
		msdyn_channel: OptionSet.msdyn_templateruleset.msdyn_channel;
		/** Used to specify the type of communication or interaction that is being routed or handled within the system, depends on the incoming Channel */
		msdyn_channeltype: OptionSet.msdyn_templateruleset.msdyn_channeltype;
		/** Description of the Template Rule Set */
		msdyn_description: string;
		/** Contains the draft state definition of the template ruleset */
		msdyn_draftruleset: string;
		/** Name of the Template Rule Set record */
		msdyn_name: string;
		/** Last published time of template ruleset  */
		msdyn_publishedon_UtcDateAndTime: Date;
		/** Contains the published state definition of the template ruleset */
		msdyn_publishedruleset: string;
		/** Unique identifier for entity instances */
		msdyn_templaterulesetId: string;
		/** Type of template ruleset */
		msdyn_type: OptionSet.msdyn_templateruleset.msdyn_type;
		/** Unique Name for the entity. */
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
		/** Status of template ruleset */
		statecode: OptionSet.msdyn_templateruleset.statecode;
		/** Reason for the status of the template ruleset */
		statuscode: OptionSet.msdyn_templateruleset.statuscode;
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
			/** The channel(s) in the conversation. */
			readonly msdyn_channel: string;
			/** Used to specify the type of communication or interaction that is being routed or handled within the system, depends on the incoming Channel */
			readonly msdyn_channeltype: string;
			/** Description of the Template Rule Set */
			readonly msdyn_description: string;
			/** Contains the draft state definition of the template ruleset */
			readonly msdyn_draftruleset: string;
			/** Name of the Template Rule Set record */
			readonly msdyn_name: string;
			/** Last published time of template ruleset  */
			readonly msdyn_publishedon_UtcDateAndTime: string;
			/** Contains the published state definition of the template ruleset */
			readonly msdyn_publishedruleset: string;
			/** Unique identifier for entity instances */
			readonly msdyn_templaterulesetId: string;
			/** Type of template ruleset */
			readonly msdyn_type: string;
			/** Unique Name for the entity. */
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
			/** Status of template ruleset */
			readonly statecode: string;
			/** Reason for the status of the template ruleset */
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
	namespace msdyn_templateruleset {
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
		enum msdyn_channel {
			/** 0 */
			Messaging,
			/** 1 */
			Record,
			/** 2 */
			Voice
		}
		enum msdyn_channeltype {
			/** 0 */
			Case
		}
		enum msdyn_type {
			/** 0 */
			Assignment,
			/** 1 */
			Prioritization,
			/** 2 */
			Work_Classification
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 3 */
			Inactive,
			/** 2 */
			Published
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