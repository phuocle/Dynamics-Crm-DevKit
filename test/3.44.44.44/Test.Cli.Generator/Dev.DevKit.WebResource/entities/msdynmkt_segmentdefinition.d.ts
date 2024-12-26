//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomizations_form {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_segmentdefinition_msdynmkt_segmentexec: DevKit.Controls.NavigationItem
		}
	}
	class FormCustomizations_form extends DevKit.IForm {
		/**
		* Customizations form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customizations_form */
		Body: DevKit.FormCustomizations_form.Body;
		/** The Navigation of form Customizations_form */
		Navigation: DevKit.FormCustomizations_form.Navigation;
		/** The SidePanes of form Customizations_form */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdynmkt_segmentdefinition_Information {
		interface Tabs {
		}
		interface Body {
			/** A flag to disable periodic refresh of the Segment */
			msdynmkt_disablesegmentrefresh: DevKit.Controls.Boolean;
			msdynmkt_excludedmembers: DevKit.Controls.String;
			msdynmkt_includedmembers: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_segmentquery: DevKit.Controls.String;
			/** Segment refresh rate in minutes */
			msdynmkt_segmentrefreshintervalminutes: DevKit.Controls.Integer;
			/** The date and time when the Segment should stop getting refreshed automatically */
			msdynmkt_stoprefreshafter: DevKit.Controls.DateTime;
			msdynmkt_timezonecode: DevKit.Controls.ELSE3???;//msdynmkt_timezonecode - C6D124CA-7EDA-4A60-AEA9-7FB8D318B68A -- FOR DEBUG 
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Segment Definition */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdynmkt_segmentdefinition_msdynmkt_segmentexec: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_segmentdefinition_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_segmentdefinition_Information */
		Body: DevKit.Formmsdynmkt_segmentdefinition_Information.Body;
		/** The Navigation of form msdynmkt_segmentdefinition_Information */
		Navigation: DevKit.Formmsdynmkt_segmentdefinition_Information.Navigation;
		/** The SidePanes of form msdynmkt_segmentdefinition_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_segmentdefinitionApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_segmentdefinitionApi
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
		/** JSON string describing the compliance profiles with the following attributes: compliance_profile, purpose, topic */
		msdynmkt_complianceprofiles: string;
		msdynmkt_computationfinishedon_UtcDateAndTime: Date;
		msdynmkt_computationstartedon_UtcDateAndTime: Date;
		msdynmkt_computationstatus: OptionSet.msdynmkt_segmentdefinition.msdynmkt_computationstatus;
		msdynmkt_definitionmodifiedon_UtcDateAndTime: Date;
		/** List of unique segment ids that depend on this segment for execution. */
		msdynmkt_dependentsegmentids: string;
		/** A flag to disable periodic refresh of the Segment */
		msdynmkt_disablesegmentrefresh: boolean;
		msdynmkt_excludedmembers: string;
		msdynmkt_includedmembers: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Unique identifier for entity instances */
		msdynmkt_segmentdefinitionId: string;
		msdynmkt_segmentquery: string;
		/** Segment refresh rate in minutes */
		msdynmkt_segmentrefreshintervalminutes: number;
		/** The date and time when the Segment should stop getting refreshed automatically */
		msdynmkt_stoprefreshafter_UtcDateAndTime: Date;
		/** List of unique segment ids that are targeted by this segment for execution. */
		msdynmkt_targetedsegmentids: string;
		/** Value of timezone code for the segment */
		msdynmkt_timezonecode: number;
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
		/** Status of the Segment Definition */
		statecode: OptionSet.msdynmkt_segmentdefinition.statecode;
		/** Reason for the status of the Segment Definition */
		statuscode: OptionSet.msdynmkt_segmentdefinition.statuscode;
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
			/** JSON string describing the compliance profiles with the following attributes: compliance_profile, purpose, topic */
			readonly msdynmkt_complianceprofiles: string;
			readonly msdynmkt_computationfinishedon_UtcDateAndTime: string;
			readonly msdynmkt_computationstartedon_UtcDateAndTime: string;
			readonly msdynmkt_computationstatus: string;
			readonly msdynmkt_definitionmodifiedon_UtcDateAndTime: string;
			/** List of unique segment ids that depend on this segment for execution. */
			readonly msdynmkt_dependentsegmentids: string;
			/** A flag to disable periodic refresh of the Segment */
			readonly msdynmkt_disablesegmentrefresh: string;
			readonly msdynmkt_excludedmembers: string;
			readonly msdynmkt_includedmembers: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_segmentdefinitionId: string;
			readonly msdynmkt_segmentquery: string;
			/** Segment refresh rate in minutes */
			readonly msdynmkt_segmentrefreshintervalminutes: string;
			/** The date and time when the Segment should stop getting refreshed automatically */
			readonly msdynmkt_stoprefreshafter_UtcDateAndTime: string;
			/** List of unique segment ids that are targeted by this segment for execution. */
			readonly msdynmkt_targetedsegmentids: string;
			/** Value of timezone code for the segment */
			readonly msdynmkt_timezonecode: string;
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
			/** Status of the Segment Definition */
			readonly statecode: string;
			/** Reason for the status of the Segment Definition */
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
	namespace msdynmkt_segmentdefinition {
		enum msdynmkt_computationstatus {
			/** 723270002 */
			Error,
			/** 723270001 */
			Finished,
			/** 723270003 */
			NotStarted,
			/** 723270000 */
			Running
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 723270003 */
			Deleted,
			/** 723270001 */
			Draft,
			/** 723270002 */
			GoingLive,
			/** 723270000 */
			Live,
			/** 723270004 */
			LiveWithWarnings,
			/** 723270006 */
			Stopped,
			/** 723270005 */
			Stopping
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