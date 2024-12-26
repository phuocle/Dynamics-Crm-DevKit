//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_segment_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** The number of members in the segment */
			msdyncrm_segmentsize: DevKit.Controls.Integer;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
			/** Reason for the status of the Segment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_definition_tab_Sections {
			_65A9C7F2_83F0_4388_8364_6F3BA63B773A_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_general_tab_Sections {
			section_customerjourneys_using_segment: DevKit.Controls.Section;
		}
		interface tab_insights_plana_tab_Sections {
			_AE2AF4DC_E077_4A23_8BFA_5D35648D178C_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_insights_tab_Sections {
			InsightsTab_SegmentMembersOverTime: DevKit.Controls.Section;
		}
		interface tab_LinkedInAudienceTab_Sections {
			tab_linkedin_section: DevKit.Controls.Section;
		}
		interface tab_members_tab_Sections {
			_2DEE70B4_EEE0_42A7_8CCA_E15097F16981_SECTION_3: DevKit.Controls.Section;
			_77E78764_16EF_4EBF_92CA_1779521FBB3B_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_definition_tab extends DevKit.Controls.ITab {
			Section: tab_definition_tab_Sections;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface tab_insights_plana_tab extends DevKit.Controls.ITab {
			Section: tab_insights_plana_tab_Sections;
		}
		interface tab_insights_tab extends DevKit.Controls.ITab {
			Section: tab_insights_tab_Sections;
		}
		interface tab_LinkedInAudienceTab extends DevKit.Controls.ITab {
			Section: tab_LinkedInAudienceTab_Sections;
		}
		interface tab_members_tab extends DevKit.Controls.ITab {
			Section: tab_members_tab_Sections;
		}
		interface Tabs {
			definition_tab: tab_definition_tab;
			general_tab: tab_general_tab;
			insights_plana_tab: tab_insights_plana_tab;
			insights_tab: tab_insights_tab;
			LinkedInAudienceTab: tab_LinkedInAudienceTab;
			members_tab: tab_members_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			CustomerJourneyInsightsCtrl: DevKit.Controls.ActionCards;
			LinkedInAudienceWizard: DevKit.Controls.ActionCards;
			MembersControl: DevKit.Controls.ActionCards;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The segment description */
			msdyncrm_description: DevKit.Controls.String;
			msdyncrm_externalsegmenturl: DevKit.Controls.ELSE3???;//msdyncrm_externalsegmenturl - 7D61A32E-8AE9-41F4-81A2-5633FDCB4F4D -- FOR DEBUG 
			msdyncrm_externalsource: DevKit.Controls.ELSE3???;//msdyncrm_externalsource - A57A5012-5AE8-40EE-B038-B82774A5489F -- FOR DEBUG 
			/** Last date and time when the segment was evaluated. */
			msdyncrm_lastevaluationtime: DevKit.Controls.DateTime;
			/** Last date and time when the segment was updated. */
			msdyncrm_lastupdatedtime: DevKit.Controls.DateTime;
			/** Next time we expect the segment to be evaluated. */
			msdyncrm_nextevaluation: DevKit.Controls.DateTime;
			/** Business-unit scope for selecting segment members */
			msdyncrm_scope: DevKit.Controls.OptionSet;
			/** Type of segment evaluation. */
			msdyncrm_segmentevaluationtype: DevKit.Controls.String;
			/** Filter query of a static segment */
			msdyncrm_segmentfilterquery: DevKit.Controls.String;
			/** Static segment member IDs */
			msdyncrm_segmentmemberids: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_segmentname1: DevKit.Controls.String;
			msdyncrm_segmentnameview: DevKit.Controls.String;
			/** The segment query definition */
			msdyncrm_segmentquery: DevKit.Controls.String;
			msdyncrm_segmentquery: DevKit.Controls.ActionCards;
			/** The display name of the custom entity. */
			msdyncrm_segmentqueryname: DevKit.Controls.String;
			/** Segment refresh rate in minutes. */
			msdyncrm_segmentrefreshrateintervalminutes: DevKit.Controls.Integer;
			/** The number of members in the segment */
			msdyncrm_segmentsize: DevKit.Controls.Integer;
			/** The template used to create the initial layout of the segment. */
			msdyncrm_SegmentTemplate: DevKit.Controls.Lookup;
			/** Effective time zone for this segment */
			msdyncrm_segmenttimezone: DevKit.Controls.Integer;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			RelatedCustomerJourneys: DevKit.Controls.ActionCards;
			/** Status of the segment */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Segment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_msdyncrm_segment_contact: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_segment_msdyncrm_customerjourney_SuppressionSegmentId: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_segment_msdyncrm_linkedinaudience_segment: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_segment_msdyncrm_segmentactivity_SegmentID: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_segment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_segment_Information */
		Body: DevKit.Formmsdyncrm_segment_Information.Body;
		/** The Header section of form msdyncrm_segment_Information */
		Header: DevKit.Formmsdyncrm_segment_Information.Header;
		/** The Navigation of form msdyncrm_segment_Information */
		Navigation: DevKit.Formmsdyncrm_segment_Information.Navigation;
		/** The SidePanes of form msdyncrm_segment_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_Static_Segment {
		interface tab_general_tab_Sections {
			general_section: DevKit.Controls.Section;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			/** The segment description */
			msdyncrm_description: DevKit.Controls.String;
			/** Business-unit scope for selecting segment members */
			msdyncrm_scope: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** Effective time zone for this segment */
			msdyncrm_segmenttimezone: DevKit.Controls.Integer;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
		}
	}
	class FormNew_Static_Segment extends DevKit.IForm {
		/**
		* New Static Segment [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form New_Static_Segment */
		Body: DevKit.FormNew_Static_Segment.Body;
	}
	namespace Formmsdyncrm_segment_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** The segment description */
			msdyncrm_description: DevKit.Controls.String;
			/** Filter query of a static segment */
			msdyncrm_segmentfilterquery: DevKit.Controls.String;
			/** Static segment member IDs */
			msdyncrm_segmentmemberids: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_segmentname: DevKit.Controls.String;
			/** The segment query definition */
			msdyncrm_segmentquery: DevKit.Controls.String;
			/** The display name of the custom entity. */
			msdyncrm_segmentqueryname: DevKit.Controls.String;
			/** Segment type */
			msdyncrm_segmenttype: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyncrm_segment_Quick_Create extends DevKit.IForm {
		/**
		* Quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_segment_Quick_Create */
		Body: DevKit.Formmsdyncrm_segment_Quick_Create.Body;
	}
	class msdyncrm_segmentApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_segmentApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** The segment description */
		msdyncrm_description: string;
		msdyncrm_externalsegmenturl: string;
		/** External Source */
		msdyncrm_externalsource: OptionSet.msdyncrm_segment.msdyncrm_externalsource;
		/** flag to check that the segment is live */
		msdyncrm_islive: boolean;
		/** Last date and time when the segment was evaluated. */
		msdyncrm_lastevaluationtime_UtcDateAndTime: Date;
		/** Last date and time when the segment was updated. */
		msdyncrm_lastupdatedtime_UtcDateAndTime: Date;
		/** Next time we expect the segment to be evaluated. */
		msdyncrm_nextevaluation_UtcDateAndTime: Date;
		/** Query type */
		msdyncrm_querytype: OptionSet.msdyncrm_segment.msdyncrm_querytype;
		/** Business-unit scope for selecting segment members */
		msdyncrm_scope: OptionSet.msdyncrm_segment.msdyncrm_scope;
		msdyncrm_segmentactivationstatus: OptionSet.msdyncrm_segment.msdyncrm_segmentactivationstatus;
		/** Evaluation duration in minutes. */
		msdyncrm_segmentevaluationdurationinminutes: number;
		/** State of segment evaluation. */
		msdyncrm_segmentevaluationstate: string;
		/** Type of segment evaluation. */
		msdyncrm_segmentevaluationtype: string;
		/** Filter query of a static segment */
		msdyncrm_segmentfilterquery: string;
		/** Unique ID for entity instances */
		msdyncrm_segmentId: string;
		/** Static segment member IDs */
		msdyncrm_segmentmemberids: string;
		/** The name of the custom entity */
		msdyncrm_segmentname: string;
		readonly msdyncrm_segmentnameview: string;
		msdyncrm_segmentprovisioningstate: string;
		/** The segment query definition */
		msdyncrm_segmentquery: string;
		/** The display name of the custom entity. */
		msdyncrm_segmentqueryname: string;
		/** Segment refresh rate in minutes. */
		msdyncrm_segmentrefreshrateintervalminutes: number;
		/** The number of members in the segment */
		msdyncrm_segmentsize: number;
		/** Target profile type of segment's members. */
		msdyncrm_segmenttargetprofiletypename: string;
		/** The template used to create the initial layout of the segment. */
		msdyncrm_SegmentTemplate: string;
		/** Effective time zone for this segment */
		msdyncrm_segmenttimezone: number;
		/** Segment type */
		msdyncrm_segmenttype: OptionSet.msdyncrm_segment.msdyncrm_segmenttype;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the segment */
		statecode: OptionSet.msdyncrm_segment.statecode;
		/** Reason for the status of the Segment */
		statuscode: OptionSet.msdyncrm_segment.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** The segment description */
			readonly msdyncrm_description: string;
			readonly msdyncrm_externalsegmenturl: string;
			/** External Source */
			readonly msdyncrm_externalsource: string;
			/** flag to check that the segment is live */
			readonly msdyncrm_islive: string;
			/** Last date and time when the segment was evaluated. */
			readonly msdyncrm_lastevaluationtime_UtcDateAndTime: string;
			/** Last date and time when the segment was updated. */
			readonly msdyncrm_lastupdatedtime_UtcDateAndTime: string;
			/** Next time we expect the segment to be evaluated. */
			readonly msdyncrm_nextevaluation_UtcDateAndTime: string;
			/** Query type */
			readonly msdyncrm_querytype: string;
			/** Business-unit scope for selecting segment members */
			readonly msdyncrm_scope: string;
			readonly msdyncrm_segmentactivationstatus: string;
			/** Evaluation duration in minutes. */
			readonly msdyncrm_segmentevaluationdurationinminutes: string;
			/** State of segment evaluation. */
			readonly msdyncrm_segmentevaluationstate: string;
			/** Type of segment evaluation. */
			readonly msdyncrm_segmentevaluationtype: string;
			/** Filter query of a static segment */
			readonly msdyncrm_segmentfilterquery: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_segmentId: string;
			/** Static segment member IDs */
			readonly msdyncrm_segmentmemberids: string;
			/** The name of the custom entity */
			readonly msdyncrm_segmentname: string;
			readonly msdyncrm_segmentnameview: string;
			readonly msdyncrm_segmentprovisioningstate: string;
			/** The segment query definition */
			readonly msdyncrm_segmentquery: string;
			/** The display name of the custom entity. */
			readonly msdyncrm_segmentqueryname: string;
			/** Segment refresh rate in minutes. */
			readonly msdyncrm_segmentrefreshrateintervalminutes: string;
			/** The number of members in the segment */
			readonly msdyncrm_segmentsize: string;
			/** Target profile type of segment's members. */
			readonly msdyncrm_segmenttargetprofiletypename: string;
			/** The template used to create the initial layout of the segment. */
			readonly msdyncrm_SegmentTemplate: string;
			/** Effective time zone for this segment */
			readonly msdyncrm_segmenttimezone: string;
			/** Segment type */
			readonly msdyncrm_segmenttype: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the segment */
			readonly statecode: string;
			/** Reason for the status of the Segment */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_segment {
		enum msdyncrm_externalsource {
			/** 192350000 */
			Customer_Insight
		}
		enum msdyncrm_querytype {
			/** 192350000 */
			Interaction_based,
			/** 192350001 */
			Profile_based
		}
		enum msdyncrm_scope {
			/** 270100001 */
			Business_unit,
			/** 270100000 */
			Organization
		}
		enum msdyncrm_segmentactivationstatus {
			/** 192350000 */
			Active,
			/** 192350001 */
			Disabled
		}
		enum msdyncrm_segmenttype {
			/** 192350002 */
			Compound_segment,
			/** 192350000 */
			Dynamic_segment,
			/** 192350001 */
			Static_segment
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 192350005 */
			Error,
			/** 192350004 */
			Expired,
			/** 192350006 */
			Going_live,
			/** 192350001 */
			Live,
			/** 192350003 */
			Live_editable,
			/** 192350002 */
			Stopped,
			/** 192350007 */
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