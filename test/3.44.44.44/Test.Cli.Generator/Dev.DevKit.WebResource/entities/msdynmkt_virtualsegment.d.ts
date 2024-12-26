//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_virtualsegment_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The who created the segment. */
			msdynmkt_createdby: DevKit.Controls.String;
			msdynmkt_lastupdated: DevKit.Controls.DateTime;
			msdynmkt_membercount: DevKit.Controls.Integer;
			/** Status of the Virtual Segment */
			msdynmkt_statecode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_3_Sections {
			_E81032F7_53B1_4AF7_AC47_9BB7DEA5F822: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			/** The who created the segment. */
			msdynmkt_createdby: DevKit.Controls.String;
			/** The date the segment was created */
			msdynmkt_createddate: DevKit.Controls.DateTime;
			/** The description of the segment. */
			msdynmkt_description: DevKit.Controls.String;
			msdynmkt_lastupdated: DevKit.Controls.DateTime;
			msdynmkt_lastused: DevKit.Controls.DateTime;
			msdynmkt_membercount: DevKit.Controls.Integer;
			/** The name of the segment. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_owningbusinessunit: DevKit.Controls.Lookup;
			/** The source of the segment. */
			msdynmkt_source: DevKit.Controls.OptionSet;
			/** Status of the Virtual Segment */
			msdynmkt_statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Virtual Segment */
			msdynmkt_statuscode: DevKit.Controls.OptionSet;
			/** The type of the segment. */
			msdynmkt_type: DevKit.Controls.OptionSet;
			/** Unique identifier for entity instances */
			msdynmkt_virtualsegmentId: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_virtualsegment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_virtualsegment_Information */
		Body: DevKit.Formmsdynmkt_virtualsegment_Information.Body;
		/** The Header section of form msdynmkt_virtualsegment_Information */
		Header: DevKit.Formmsdynmkt_virtualsegment_Information.Header;
		/** The Navigation of form msdynmkt_virtualsegment_Information */
		Navigation: DevKit.Formmsdynmkt_virtualsegment_Information.Navigation;
		/** The SidePanes of form msdynmkt_virtualsegment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_virtualsegmentApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_virtualsegmentApi
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
		/** The entity supported by this segment. */
		msdynmkt_baseentity: string;
		/** The who created the segment. */
		msdynmkt_createdby: string;
		/** The date the segment was created */
		msdynmkt_createddate_UtcDateAndTime: Date;
		/** The description of the segment. */
		msdynmkt_description: string;
		msdynmkt_lastupdated_UtcDateAndTime: Date;
		msdynmkt_lastused_UtcDateAndTime: Date;
		/** The name the user who last associated a journey with this segment. */
		readonly msdynmkt_lastusedby: string;
		msdynmkt_membercount: number;
		/** The name of the segment. */
		msdynmkt_name: string;
		msdynmkt_owningbusinessunit: string;
		msdynmkt_publishedjourneycount: number;
		/** For internal use only. */
		msdynmkt_requiresexport: boolean;
		/** The segment details for use in the segment lookup. */
		msdynmkt_segmentdetails: string;
		/** The source of the segment. */
		msdynmkt_source: OptionSet.msdynmkt_virtualsegment.msdynmkt_source;
		/** For internal use only */
		msdynmkt_sourceentity: string;
		/** For internal use only */
		msdynmkt_sourceentityid: string;
		/** The source uri of the segment. */
		msdynmkt_sourceuri: string;
		/** Status of the Virtual Segment */
		msdynmkt_statecode: OptionSet.msdynmkt_virtualsegment.msdynmkt_statecode;
		/** Reason for the status of the Virtual Segment */
		msdynmkt_statuscode: OptionSet.msdynmkt_virtualsegment.msdynmkt_statuscode;
		/** The type of the segment. */
		msdynmkt_type: OptionSet.msdynmkt_virtualsegment.msdynmkt_type;
		/** Unique identifier for entity instances */
		msdynmkt_virtualsegmentId: string;
		readonly FormattedValue: {
			/** The entity supported by this segment. */
			readonly msdynmkt_baseentity: string;
			/** The who created the segment. */
			readonly msdynmkt_createdby: string;
			/** The date the segment was created */
			readonly msdynmkt_createddate_UtcDateAndTime: string;
			/** The description of the segment. */
			readonly msdynmkt_description: string;
			readonly msdynmkt_lastupdated_UtcDateAndTime: string;
			readonly msdynmkt_lastused_UtcDateAndTime: string;
			/** The name the user who last associated a journey with this segment. */
			readonly msdynmkt_lastusedby: string;
			readonly msdynmkt_membercount: string;
			/** The name of the segment. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_owningbusinessunit: string;
			readonly msdynmkt_publishedjourneycount: string;
			/** For internal use only. */
			readonly msdynmkt_requiresexport: string;
			/** The segment details for use in the segment lookup. */
			readonly msdynmkt_segmentdetails: string;
			/** The source of the segment. */
			readonly msdynmkt_source: string;
			/** For internal use only */
			readonly msdynmkt_sourceentity: string;
			/** For internal use only */
			readonly msdynmkt_sourceentityid: string;
			/** The source uri of the segment. */
			readonly msdynmkt_sourceuri: string;
			/** Status of the Virtual Segment */
			readonly msdynmkt_statecode: string;
			/** Reason for the status of the Virtual Segment */
			readonly msdynmkt_statuscode: string;
			/** The type of the segment. */
			readonly msdynmkt_type: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_virtualsegmentId: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_virtualsegment {
		enum msdynmkt_source {
			/** 0 */
			Customer_Insights_Data,
			/** 2 */
			Customer_Insights_Journeys,
			/** 1 */
			Dynamics_365_Marketing_outbound
		}
		enum msdynmkt_statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum msdynmkt_statuscode {
			/** 4 */
			Completed_with_warnings,
			/** 2 */
			Deactivated,
			/** 1 */
			Draft,
			/** 3 */
			Getting_ready,
			/** 0 */
			Ready_to_use,
			/** 6 */
			Stopped,
			/** 5 */
			Stopping
		}
		enum msdynmkt_type {
			/** 3 */
			Compound,
			/** 2 */
			Dynamic,
			/** 4 */
			Expansion,
			/** 1 */
			Static,
			/** 0 */
			Unknown
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